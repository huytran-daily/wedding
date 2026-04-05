import { useState, useEffect, useRef, useCallback } from "react";
import FrontCover from "./components/FrontCover";
import InsidePage from "./components/InsidePage";
import BackCover from "./components/BackCover";
import { Icon } from "@iconify/react";
import { clients, Language } from "./shared/theme/data";

type TabView = "back" | "front" | "inside";

const DESIGN_H = 600;
const FRONT_DESIGN_W = 450;
const INSIDE_DESIGN_W = 1080;
const LEFT_W = INSIDE_DESIGN_W * 0.17; // left panel width ≈ 183.6
const PANEL_W = (INSIDE_DESIGN_W - LEFT_W) / 2; // center/right panel width ≈ 448.2
const PAD_X = 24; // px-6 on each side
const PAD_TOP = 24; // pt-6
const PAD_BOTTOM = 24; // pb-6
const TAB_H = 44; // approximate rendered tab bar height
const GAP = 24; // gap-6 between tab bar and card

interface InvitationPageProps {
  onClickFrontCover?: () => void;
}

function InvitationPage({ onClickFrontCover }: InvitationPageProps) {
  const params = new URLSearchParams(window.location.search);

  const clientId = params.get("id");
  const [lang, setLang] = useState(
    (params.get("lang") as Language) || Language.vi
  );

  const client = clients.find((c) => c.id === clientId);

  const [activeTab, setActiveTab] = useState<TabView>("front");
  const [scale, setScale] = useState(1);
  const [insideScale, setInsideScale] = useState(1);

  const [insideStep, setInsideStep] = useState<0 | 1 | 2>(0);
  const [bannerPhase, setBannerPhase] = useState<
    "normal" | "rising" | "fading"
  >("normal");
  const [insideEntering, setInsideEntering] = useState(false);

  const handleBannerClick = () => {
    setBannerPhase("rising");
    // After rise, start blur-fade
    setTimeout(() => setBannerPhase("fading"), 1000);
    // After fade, switch page then clear entering blur
    setTimeout(() => {
      setInsideEntering(true);
      setActiveTab("inside");
      setBannerPhase("normal");
      onClickFrontCover?.();
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setInsideEntering(false))
      );
    }, 760);
  };

  const [backEntering, setBackEntering] = useState(false);

  const doBackTransition = useCallback(() => {
    setBackEntering(true);
    setActiveTab("back");
    setInsideStep(0);
    onClickFrontCover?.();
    requestAnimationFrame(() =>
      requestAnimationFrame(() => setBackEntering(false))
    );
  }, [onClickFrontCover]);

  const handleInsideClick = useCallback(() => {
    setInsideEntering(false);
    // Desktop: skip zoom steps
    if (window.innerWidth >= 768) {
      doBackTransition();
      return;
    }
    if (insideStep < 2) {
      setInsideStep((s) => (s + 1) as 0 | 1 | 2);
    } else {
      doBackTransition();
    }
  }, [doBackTransition, insideStep]);

  useEffect(() => {
    const update = () => {
      const availH = window.innerHeight - PAD_TOP - TAB_H - GAP - PAD_BOTTOM;
      const availW = window.innerWidth - PAD_X * 2;
      setScale(Math.min(availH / DESIGN_H, availW / FRONT_DESIGN_W));
      setInsideScale(Math.min(availH / DESIGN_H, availW / INSIDE_DESIGN_W));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const [showHandClick, setShowHandClick] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowHandClick(true), 3000);
  }, []);

  useEffect(() => {
    if (showHandClick) {
      setTimeout(() => setShowHandClick((prev) => !prev), 2000);
      return;
    } else {
      if (insideStep === 0) {
        setTimeout(() => setShowHandClick((prev) => !prev), 8000);
      } else {
        setTimeout(() => setShowHandClick((prev) => !prev), 30000);
      }
    }
  }, [showHandClick]);

  return (
    <div className="relative flex h-screen w-screen flex-col items-center gap-6 overflow-hidden px-6 pt-6 pb-6">
      <Icon
        icon="clarity:cursor-hand-click-line"
        className={`absolute top-[55%] left-[55%] -translate-x-1/2 -translate-y-1/2 -rotate-30 w-6 h-6 z-20 ${
          showHandClick && activeTab !== "back" ? "block" : "hidden"
        }`}
        style={{
          animation: "handClickBlink 0.8s ease-in-out infinite",
          color:
            activeTab === "inside"
              ? "rgba(3, 0, 0, 0.8)"
              : "rgba(233, 230, 231, 0.8)"
        }}
      />
      {/* Card view — flex-1 fills remaining height, centers card both axes */}
      <div className="flex flex-1 items-center justify-center">
        {activeTab === "front" && (
          <div
            className="flex-shrink-0 overflow-hidden rounded-2xl shadow-xl"
            style={{
              height: DESIGN_H * scale,
              width: FRONT_DESIGN_W * scale,
              animation: "cardFadeIn 0.6s ease-out"
            }}
          >
            <div
              style={{
                width: FRONT_DESIGN_W,
                height: DESIGN_H,
                transform: `scale(${scale})`,
                transformOrigin: "top left"
              }}
            >
              <FrontCover
                client={client}
                lang={lang}
                onClickCenterBanner={handleBannerClick}
                bannerPhase={bannerPhase}
              />
            </div>
          </div>
        )}
        {activeTab === "inside" && (
          <div
            className="flex-shrink-0 overflow-hidden rounded-2xl cursor-pointer  justify-center items-center"
            style={{
              height: DESIGN_H * scale,
              width:
                window.innerWidth >= 768
                  ? INSIDE_DESIGN_W * scale
                  : FRONT_DESIGN_W * scale,
              filter: insideEntering ? "blur(12px)" : "blur(0px)",
              opacity: insideEntering ? 0 : 1,
              transition: "filter 0.5s ease-out, opacity 0.5s ease-out"
            }}
          >
            <div
              className=""
              style={{
                width: INSIDE_DESIGN_W,
                height: DESIGN_H,
                transformOrigin: "top left",
                transition: "transform 0.4s ease-in-out",

                transform:
                  insideStep === 1
                    ? `scale(${scale}) translateX(-${LEFT_W}px)`
                    : insideStep === 2
                      ? `scale(${scale}) translateX(-${LEFT_W + PANEL_W}px)`
                      : `scale(${insideScale}) translateY(${(DESIGN_H * (scale - insideScale)) / (2 * insideScale)}px)`
              }}
            >
              <InsidePage
                onClickInside={handleInsideClick}
                client={client}
                lang={lang}
              />
            </div>
          </div>
        )}
        {activeTab === "back" && (
          <div
            className="flex-shrink-0 overflow-hidden rounded-2xl shadow-xl cursor-pointer"
            style={{
              height: DESIGN_H * scale,
              width: FRONT_DESIGN_W * scale,
              filter: backEntering ? "blur(12px)" : "blur(0px)",
              opacity: backEntering ? 0 : 1,
              transition: "filter 0.5s ease-out, opacity 0.5s ease-out"
            }}
          >
            <div
              style={{
                width: FRONT_DESIGN_W,
                height: DESIGN_H,
                transform: `scale(${scale})`,
                transformOrigin: "top left"
              }}
            >
              <BackCover
                client={client}
                lang={lang}
                onClickNext={() => {
                  setBannerPhase("normal");
                  setInsideStep(0);
                  setLang((prev) =>
                    prev === Language.en ? Language.vi : Language.en
                  );
                  setActiveTab("front");
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function App() {
  // const videoRef = useRef<HTMLVideoElement>(null);
  const params = new URLSearchParams(window.location.search);

  const clientId = params.get("id");

  const client = clients.find((c) => c.id === clientId);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Try to play audio on mount, but also after first user interaction (for autoplay restrictions)
  useEffect(() => {
    if (isMobile) return; // Don't auto-play on mobile, wait for button
    const tryPlay = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
      }
    };
    tryPlay(); // Try on mount
    // Also play on first user interaction
    const onUserInteract = () => {
      tryPlay();
      window.removeEventListener("click", onUserInteract);
      window.removeEventListener("touchstart", onUserInteract);
    };
    window.addEventListener("click", onUserInteract);
    window.addEventListener("touchstart", onUserInteract);
    return () => {
      window.removeEventListener("click", onUserInteract);
      window.removeEventListener("touchstart", onUserInteract);
    };
  }, [isMobile]);

  // Handler for Play Music button
  const handlePlayMusic = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  };

  return (
    <div className="relative min-h-screen">
      <img
        className="fixed top-0 left-0 w-full h-full object-cover"
        src={`${import.meta.env.BASE_URL}/video/${isMobile ? `${client?.side !== "bride" ? "output_mobile.webp" : "wedding_bg_mobile.webp"}` : `${client?.side !== "bride" ? "output_desktop.webp" : "wedding_bg_desktop.webp"}`}`}
        alt="Background"
        style={{ zIndex: 0 }}
      />
      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}/video/audio_wedding.mp3`}
        autoPlay={!isMobile}
        loop
        style={{ display: "none" }}
      />
      <div className="relative z-10">
        <InvitationPage
          onClickFrontCover={() => {
            handlePlayMusic();
          }}
        />
      </div>
    </div>
  );
}

export default App;
