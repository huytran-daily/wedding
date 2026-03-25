import { useState, useEffect, useRef, useCallback } from 'react';
import FrontCover from './components/FrontCover';
import InsidePage from './components/InsidePage';
import BackCover from './components/BackCover';
import { Icon } from '@iconify/react';
import { clients, Language } from './shared/theme/data';

type TabView = 'back' | 'front' | 'inside';

const DESIGN_H = 600;
const FRONT_DESIGN_W = 450;
const INSIDE_DESIGN_W = 1080;
const LEFT_W = INSIDE_DESIGN_W * 0.17;           // left panel width ≈ 183.6
const PANEL_W = (INSIDE_DESIGN_W - LEFT_W) / 2;  // center/right panel width ≈ 448.2
const PAD_X = 24;      // px-6 on each side
const PAD_TOP = 24;    // pt-6
const PAD_BOTTOM = 24; // pb-6
const TAB_H = 44;      // approximate rendered tab bar height
const GAP = 24;        // gap-6 between tab bar and card

interface InvitationPageProps {
  onClickFrontCover?: () => void;
}

function InvitationPage({ onClickFrontCover }: InvitationPageProps) {
  const params = new URLSearchParams(window.location.search);

  const clientId = params.get('id');
  const lang = (params.get('lang') as Language) || Language.vi;

  const client = clients.find(c => c.id === clientId);

  const [activeTab, setActiveTab] = useState<TabView>('front');
  const [scale, setScale] = useState(1);
  const [insideScale, setInsideScale] = useState(1);

  const [insideStep, setInsideStep] = useState<0 | 1 | 2>(0);
  const [bannerPhase, setBannerPhase] = useState<'normal' | 'rising' | 'fading'>('normal');
  const [insideEntering, setInsideEntering] = useState(false);

  const handleBannerClick = () => {
    setBannerPhase('rising');
    // After rise, start blur-fade
    setTimeout(() => setBannerPhase('fading'), 1000);
    // After fade, switch page then clear entering blur
    setTimeout(() => {
      setInsideEntering(true);
      setActiveTab('inside');
      setBannerPhase('normal');
      onClickFrontCover?.();
      requestAnimationFrame(() => requestAnimationFrame(() => setInsideEntering(false)));
    }, 760);
  };

  const [backEntering, setBackEntering] = useState(false);

  const doBackTransition = useCallback(
    () => {
       setBackEntering(true);
    setActiveTab('back');
    setInsideStep(0);
    onClickFrontCover?.();
    requestAnimationFrame(() => requestAnimationFrame(() => setBackEntering(false)));
    },
    [onClickFrontCover],
  )

  const handleInsideClick = useCallback(
    () => {
      setInsideEntering(false);
      // Desktop: skip zoom steps
      if (window.innerWidth >= 768) {
        doBackTransition();
        return;
      }
      if (insideStep < 2) {
        setInsideStep(s => (s + 1) as 0 | 1 | 2);
      } else {
        doBackTransition();
      }
    },
    [doBackTransition, insideStep],
  )
 

  useEffect(() => {
    const update = () => {
      const availH = window.innerHeight - PAD_TOP - TAB_H - GAP - PAD_BOTTOM;
      const availW = window.innerWidth - PAD_X * 2;
      setScale(Math.min(availH / DESIGN_H, availW / FRONT_DESIGN_W));
      setInsideScale(Math.min(availH / DESIGN_H, availW / INSIDE_DESIGN_W));
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

    const [showHandClick, setShowHandClick] = useState(false);

    useEffect(() => {
      setTimeout(() => setShowHandClick(true), 3000);
    }, [])


    useEffect(() => {
      if (showHandClick) {
        setTimeout(() => setShowHandClick(prev => !prev), 2000);
        return;
      } else {
        if (insideStep === 0) {
          setTimeout(() => setShowHandClick(prev => !prev), 8000);
        } else {
          setTimeout(() => setShowHandClick(prev => !prev), 30000);
        }
      }
    }, [showHandClick])
 

  return (
    <div className="relative flex h-screen w-screen flex-col items-center gap-6 overflow-hidden px-6 pt-6 pb-6">
     <Icon
        icon="clarity:cursor-hand-click-line"
        className={`absolute top-[55%] left-[55%] -translate-x-1/2 -translate-y-1/2 -rotate-30 w-6 h-6 z-20 ${
          showHandClick && activeTab !== 'back' ? 'block' : 'hidden'
        }`}
        style={{
          animation: 'handClickBlink 0.8s ease-in-out infinite',
          color:
            activeTab === 'inside'
              ? 'rgba(3, 0, 0, 0.8)'
              : 'rgba(233, 230, 231, 0.8)',
        }}
      />
      {/* Card view — flex-1 fills remaining height, centers card both axes */}
      <div className="flex flex-1 items-center justify-center">
        {activeTab === 'front' && (
          <div
            className="flex-shrink-0 overflow-hidden rounded-2xl shadow-xl"
            style={{ height: DESIGN_H * scale, width: FRONT_DESIGN_W * scale, 
              transition: 'filter 1s ease-out, opacity 1s ease-out',
            }}
          >
            <div style={{ width: FRONT_DESIGN_W, height: DESIGN_H, transform: `scale(${scale})`, transformOrigin: 'top left' }}>
              <FrontCover
                client={client}
                lang={lang}
                onClickCenterBanner={handleBannerClick}
                bannerPhase={bannerPhase}
              />
            </div>
          </div>
        )}
        {activeTab === 'inside' && (
          <div
            className="flex-shrink-0 overflow-hidden rounded-2xl cursor-pointer  justify-center items-center"
            style={{ 
              height: DESIGN_H * scale, width: window.innerWidth >= 768 ? INSIDE_DESIGN_W * scale : FRONT_DESIGN_W * scale,
              filter: insideEntering ? 'blur(12px)' : 'blur(0px)',
              opacity: insideEntering ? 0 : 1,
               transition: 'filter 0.5s ease-out, opacity 0.5s ease-out',
             }}
            
          >
            <div
              className='' 
              style={{
                width: INSIDE_DESIGN_W,
                height: DESIGN_H,
                transformOrigin: 'top left',
                transition: 'transform 0.4s ease-in-out',
                
                transform:
                  insideStep === 1
                    ? `scale(${scale}) translateX(-${LEFT_W}px)`
                    : insideStep === 2
                    ? `scale(${scale}) translateX(-${LEFT_W + PANEL_W}px)`
                    : `scale(${insideScale}) translateY(${DESIGN_H * (scale - insideScale) / (2 * insideScale)}px)`,
              }}
            >
              <InsidePage onClickInside={handleInsideClick} />
            </div>
          </div>
        )}
        {activeTab === 'back' && (
          <div
            className="flex-shrink-0 overflow-hidden rounded-2xl shadow-xl cursor-pointer"
            style={{ height: DESIGN_H * scale, width: FRONT_DESIGN_W * scale, 
               filter: backEntering ? 'blur(12px)' : 'blur(0px)',
              opacity: backEntering ? 0 : 1,
              transition: 'filter 0.5s ease-out, opacity 0.5s ease-out',
             }}
            onClick={() => {
              setBannerPhase('normal');
              setInsideStep(0);
              setActiveTab('front');
            }}
          >
            <div style={{ width: FRONT_DESIGN_W, height: DESIGN_H, transform: `scale(${scale})`, transformOrigin: 'top left' }}>
              <BackCover />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


function App() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative min-h-screen">
      <video
        ref={videoRef} 
        className="fixed top-0 left-0 w-full h-full object-cover"
        src={`${import.meta.env.BASE_URL}/video/bg-2.mp4`}
        autoPlay
        loop
        // muted
        playsInline
      />
      <div className="relative z-10">
        <InvitationPage onClickFrontCover={() => {
          videoRef.current?.play();
        }}/>
      </div>
    </div>
  )
}

export default App

