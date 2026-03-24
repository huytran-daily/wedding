interface FrontCoverProps {
  onClickCenterBanner?: () => void;
  bannerPhase?: 'normal' | 'rising' | 'fading';
}

export default function FrontCover({ onClickCenterBanner, bannerPhase = 'normal' }: FrontCoverProps) {

  return (
    <div className="relative flex h-full flex-col items-center justify-between overflow-hidden bg-[#F5E1DA] py-10">
      {/* Decorative diagonal lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[33%] top-0 h-[51.25%] w-px origin-top -rotate-12 shadow-[4px_0px_8px_0px_#3D2C2C]" />
        <div className="absolute bottom-0 left-[33%] h-[51.25%] w-px origin-bottom rotate-12 shadow-[4px_0px_8px_0px_#3D2C2C]" />
      </div>

      {/* Top section */}
      <div className="flex w-full justify-end px-10">
        <div className="z-10 flex w-fit flex-col items-end justify-end gap-2">
          <h2 className="font-times text-xl font-medium tracking-[0.1em]">
            THIỆP MỜI
          </h2>
          <h3 className="text-text-wedding-primary font-vibes text-lg font-normal tracking-[0.1em]">
            Wedding Invitation
          </h3>
          <div className="my-2 h-px w-24 bg-[#3D2C2C]/60" />
          <p className="text-text-wedding-primary font-times text-sm tracking-[0.1em]">
            02.05.2026
          </p>
        </div>
      </div>

      {/* Center banner with names */}
      <div
        className="bg-background-wedding-secondary absolute z-10 flex h-1/5 w-full items-center justify-center shadow-[0px_4px_16px_2px_#3D2C2C] cursor-pointer"
        style={{
          top: bannerPhase === 'normal' ? '50%' : '-25%',
          transform: bannerPhase === 'normal' ? 'translateY(-50%)' : 'translateY(0)',
          filter: bannerPhase === 'fading' ? 'blur(10px)' : 'blur(0px)',
          opacity: bannerPhase === 'fading' ? 0 : 1,
          transition: 'top 1s cubic-bezier(0.4,0,0.2,1), transform 0.45s cubic-bezier(0.4,0,0.2,1), filter 0.3s ease-out 0.38s, opacity 0.3s ease-out 0.38s',
          pointerEvents: bannerPhase !== 'normal' ? 'none' : undefined,
        }}
        onClick={onClickCenterBanner}
      >
        <p className="font-script text-4xl font-normal italic tracking-wide text-white antialiased">
          Phước Huy &amp; Thụy Trân
        </p>
      </div>

      {/* Bottom section */}
      <div className="flex w-full justify-end px-10">
        <div className="z-10 flex flex-col items-end gap-5">
          <p className="text-text-wedding-primary font-times text-xs">
            TRÂN TRỌNG KÍNH MỜI
          </p>
          <div className="border-text-wedding-red/50 h-px w-48 border-b border-dotted" />
        </div>
      </div>
    </div>
  );
}
