import { useState, useRef, useEffect } from "react";
import { Language, type Client } from "../shared/theme/data";
import { createClient } from "@supabase/supabase-js";
import { Icon } from "@iconify/react";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

interface BackCoverProps {
  client?: Client;
  lang: Language;
  onClickNext?: () => void;
}
export default function BackCover({
  client,
  lang,
  onClickNext
}: BackCoverProps) {
  const groupName = client?.data[lang].groupName.toLowerCase();
  const groupNameWithCapitalizedFirstChar = groupName
    ? `${groupName.charAt(0).toUpperCase()}${groupName.slice(1)}`
    : undefined;

  const lastClickTime = useRef(0);

  const handleClickNext = () => {
    const now = Date.now();
    if (now - lastClickTime.current < 500) return;
    lastClickTime.current = now;
    onClickNext?.();
  };

  const [isNeedForm, setIsNeedForm] = useState(
    client?.type !== "notice" ? true : false
  );

  const [successSent, setSuccessSent] = useState(false);

  const [typedMessage, setTypedMessage] = useState("");

  const handleSendMessage = async (message: string) => {
    const { error } = await supabase.from("wishes").insert([
      {
        code: client?.id.toString(),
        name: client?.data[lang].name,
        context: message
      }
    ]);
    if (error) {
      console.error("Error submitting message:", error);
      return;
    }
    setSuccessSent(true);
  };

  const [showHandClick, setShowHandClick] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowHandClick(true), 3000);
  }, []);

  useEffect(() => {
    if (showHandClick) {
      setTimeout(() => setShowHandClick((prev) => !prev), 1000);
      return;
    } else {
      setTimeout(() => setShowHandClick((prev) => !prev), 2000);
    }
  }, [showHandClick]);

  return (
    <div className="relative flex h-full flex-col items-center justify-end overflow-hidden bg-[#F5E1DA] py-8">
      {/* Decorative diagonal lines */}

      <Icon
        icon={
          isNeedForm && !successSent
            ? "mynaui:type-italic-solid"
            : "clarity:cursor-hand-click-line"
        }
        className={`absolute top-[55%] left-[55%] -translate-x-1/2 -translate-y-1/2 w-6 h-6 z-20 ${
          !showHandClick || (isNeedForm && successSent) ? "hidden" : "block"
        }`}
        style={{
          animation: "handClickBlink 0.8s ease-in-out infinite",
          color: isNeedForm ? "rgb(227, 9, 9)" : "rgb(246, 255, 0)"
        }}
      />

      {/* Center banner with names */}
      {isNeedForm ? (
        <div className="flex flex-col gap-1 justify-center items-center w-full px-8 absolute top-1/2 -translate-y-1/2">
          {lang !== Language.en ? (
            <p className="text-center font-times text-xs uppercase tracking-[0.08em] px-2">
              MỖI LỜI CHÚC TỪ{" "}
              {client?.data[lang].groupName?.toUpperCase() || "QUÝ VỊ"} LÀ NIỀM
              VUI VÀ SỰ TRÂN QUÝ ĐỐI VỚI{" "}
              {client?.data[lang].sayOur || "CHÚNG EM"}. XIN CHÂN THÀNH CẢM ƠN
              TÌNH CẢM VÀ SỰ QUAN TÂM MÀ{" "}
              {groupNameWithCapitalizedFirstChar || "QUÝ VỊ"} ĐÃ DÀNH.
            </p>
          ) : (
            <p className="text-center font-times text-xs uppercase tracking-[0.08em] px-2">
              YOUR EVERY WISH IS A JOY AND A TREASURE TO US. <br /> WE SINCERELY
              APPRECIATE YOUR LOVE AND CARE.
              <br />
              BEST REGARDS!
            </p>
          )}
          {successSent ? (
            lang !== Language.en ? (
              <div className="flex flex-col gap-2">
                <p className="min-h-[150px] flex justify-center items-center rounded-md text-center font-times text-sm tracking-[0.08em] p-2 text-text-success">
                  Lời chúc đã được gửi!
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <p className="min-h-[150px] flex justify-center items-center rounded-md text-center font-times text-sm tracking-[0.08em] p-2 text-text-success">
                  Your message has been sent!
                </p>
              </div>
            )
          ) : (
            <textarea
              className="min-h-[150px] text-text-wedding-primary text-justify font-times text-xs bg-neutral-100 border border-[#C4A08A]/40 w-full rounded-md p-2 focus:outline-none"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              onChange={(e) => {
                setTypedMessage(e.target.value);
              }}
            />
          )}

          {successSent ? (
            <button
              className="px-4 py-1 bg-[#7e3549] text-text-wedding-pink rounded-md text-[10px] cursor-pointer disabled:bg-[#7e3549]/50"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                // Here you would typically send the typedMessage to your backend or database
                setIsNeedForm(false);
              }}
            >
              →
            </button>
          ) : (
            <button
              className="px-2 py-1 bg-[#7e3549] text-text-wedding-pink rounded-md text-[10px] cursor-pointer disabled:bg-[#7e3549]/50"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                // Here you would typically send the typedMessage to your backend or database
                handleSendMessage(typedMessage);
              }}
            >
              {lang !== Language.en ? "Gửi" : "Send"}
            </button>
          )}
        </div>
      ) : (
        <div
          className="bg-background-wedding-secondary absolute top-1/2 z-10 flex h-1/5 w-full -translate-y-1/2 flex-col items-center justify-center px-10  shadow-[0px_4px_16px_2px_#3D2C2C]"
          onClick={handleClickNext}
          onTouchStart={(e) => {
            e.preventDefault();
            handleClickNext();
          }}
        >
          {lang !== Language.en ? (
            <p className="text-center font-times text-xs font-normal tracking-wide text-white antialiased cursor-pointer">
              Chân thành cảm ơn tình cảm yêu thương của{" "}
              {groupNameWithCapitalizedFirstChar || "tất cả mọi người"} <br />{" "}
              để ngày vui trở nên trọn vẹn và ý nghĩa. <br /> Chúc{" "}
              {groupNameWithCapitalizedFirstChar || "mọi người"} có một ngày vui
              vẻ trọn vẹn và đáng nhớ. <br /> Trân trọng!
            </p>
          ) : (
            <p className="text-center font-times text-xs font-normal tracking-wide text-white antialiased cursor-pointer px-8">
              We sincerely thank you for your love and support in making our day
              so special and meaningful. <br /> Wishing you a joyful and
              memorable day. <br /> With love and gratitude!
            </p>
          )}
        </div>
      )}

      {/* Bottom section */}
      <div className="flex w-full justify-center px-10">
        <div className="z-10 flex flex-col items-center">
          <p className="text-text-wedding-red font-inter font-vibes text-xl font-normal italic tracking-[0.1em]">
            Thank you!
          </p>
        </div>
      </div>
    </div>
  );
}
