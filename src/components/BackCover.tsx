import { Language, type Client } from "../shared/theme/data";

interface BackCoverProps {
  client?: Client;
  lang: Language;
}
export default function BackCover({ client, lang }: BackCoverProps) {
  return (
    <div className="relative flex h-full flex-col items-center justify-end overflow-hidden bg-[#F5E1DA] py-8">
      {/* Decorative diagonal lines */}

      {/* Center banner with names */}
      <div className="bg-background-wedding-secondary absolute top-1/2 z-10 flex h-1/5 w-full -translate-y-1/2 flex-col items-center justify-center px-10  shadow-[0px_4px_16px_2px_#3D2C2C]">
          {lang !== Language.en ? 
            <p className="text-center font-times text-xs font-normal tracking-wide text-white antialiased cursor-pointer">
              Chân thành cảm ơn tình cảm yêu thương của {client?.data?.[lang].groupName?.toLowerCase() || 'tất cả mọi người'} <br /> để ngày vui trở nên trọn vẹn và ý nghĩa. <br /> Chúc {client?.data?.[lang].groupName?.toLowerCase() || 'mọi người'} có một
              ngày vui vẻ trọn vẹn và đáng nhớ. <br /> Trân trọng!
            </p>
           : <p className="text-center font-times text-xs font-normal tracking-wide text-white antialiased cursor-pointer px-8">
              We sincerely thank you for your love and support in making our day so special and meaningful. <br /> Wishing you a joyful and memorable day. <br /> With love and gratitude!
            </p>}
      </div>

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
