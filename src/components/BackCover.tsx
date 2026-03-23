export default function BackCover() {
  return (
    <div className="relative flex h-full flex-col items-center justify-end overflow-hidden bg-[#F5E1DA] py-8">
      {/* Decorative diagonal lines */}

      {/* Center banner with names */}
      <div className="bg-background-wedding-secondary absolute top-1/2 z-10 flex h-1/5 w-full -translate-y-1/2 flex-col items-center justify-center px-10  shadow-[0px_4px_16px_2px_#3D2C2C]">
        <p className="text-center font-times text-xs font-normal tracking-wide text-white antialiased cursor-pointer ">
          Chân thành cảm ơn sự hiện diện cùng tình cảm yêu thương của tất cả
          mọi người để ngày vui trở nên trọn vẹn và ý nghĩa. <br /> Chúc mọi người có một
          buổi tiệc vui vẻ và đáng nhớ. <br /> Trân trọng!
        </p>
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
