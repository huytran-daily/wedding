import { Icon } from '@iconify/react'
import { useState, useEffect, useRef } from 'react';
import LeafIcon from './assets/leaf-icon';

type TabView = 'back' | 'front' | 'inside';

const TAB_LABELS: { key: TabView; label: string }[] = [
  { key: 'front', label: 'Bìa trước' },
  { key: 'inside', label: 'Nội dung' },
  { key: 'back', label: 'Bìa sau' }
];

interface FrontCoverProps {
  onClickCenterBanner?: () => void;
}

function FrontCover({ onClickCenterBanner }: FrontCoverProps) {
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
          <h2 className="font-times text-2xl font-medium tracking-[0.1em]">
            THIỆP MỜI
          </h2>
          <h3 className="text-text-wedding-primary font-vibes text-md font-normal tracking-[0.1em]">
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
        className="bg-background-wedding-secondary absolute top-1/2 z-10 flex h-1/5 w-full -translate-y-1/2 items-center justify-center shadow-[0px_4px_16px_2px_#3D2C2C]"
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

function InsidePage() {
  return (
    <div className="flex h-full bg-[#F5E1DA]">
      {/* Left panel — decorative envelope flap */}
      <div className="relative w-[17%] flex-shrink-0 overflow-hidden border-r border-[#C4A08A]/60 bg-background-canvas">
        <div
          style={{
            clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 40% 100%, 0 50%)'
          }}
          className="absolute inset-0 bg-[#F5E1DA]"
        />
        <div className="h-50 absolute left-1/2 top-1/2 h-60 w-40 -translate-x-1/2 -translate-y-1/2 -rotate-90 rounded-full">
          <LeafIcon className="h-full w-full" />
        </div>
      </div>

      {/* Center panel — family info & names */}
      <div className="relative flex flex-1 flex-col items-center justify-between border-r border-[#C4A08A]/40 px-5 py-10">
        {/* Parents */}
        <div className="flex w-full gap-2 text-center">
          <div className="flex-1">
            <p className="font-times text-sm">Nhà trai:</p>
            <p className="text-text-wedding-primary mt-0.5 font-times text-sm">
              Ông{' '}
              <strong className="font-times text-sm font-semibold">
                NGUYỄN PHƯỚC DIỆM
              </strong>
            </p>
            <p className="text-text-wedding-primary font-times text-sm font-semibold">
              Bà{' '}
              <strong className="font-times text-sm font-semibold">
                LÊ NGỌC HOA
              </strong>
            </p>
            <p className="mt-0.5 font-times text-sm">Lê Cơ, phường Hoà Cường</p>
            <p className="font-times text-sm">TP. Đà Nẵng</p>
          </div>
          <div className="flex-1">
            <p className="font-times text-sm tracking-wider">Nhà gái:</p>
            <p className="text-text-wedding-primary mt-0.5 font-times text-sm">
              Ông{' '}
              <strong className="font-times text-sm font-semibold">
                NGUYỄN BỘI QUỲNH
              </strong>
            </p>
            <p className="text-text-wedding-primary font-times text-sm">
              Bà{' '}
              <strong className="font-times text-sm font-semibold">
                PHÙNG THỊ CHÂU
              </strong>
            </p>
            <p className="mt-0.5 font-times text-sm">
              Ngô Quyền, phường Hội An
            </p>
            <p className="font-times text-sm">TP. Đà Nẵng</p>
          </div>
        </div>

        {/* Announcement */}
        <div className="absolute top-[170px] text-center">
          <p className="text-text-wedding-primary font-times text-sm">
            Trân trọng báo tin
          </p>
          <p className="text-text-wedding-primary font-times text-sm font-semibold">
            Lễ Thành Hôn &amp; Vu Quy{' '}
            <span className="font-times font-normal">của con chúng tôi</span>
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-6">
          {/* Groom name */}
          <p className="text-text-wedding-red font-script text-5xl">
            Nguyễn Phước Huy
          </p>

          {/* Trưởng Nữ & Trưởng Nam */}
          <div className="text-text-wedding-primary flex items-center gap-4 text-sm">
            <span className="font-times">Trưởng Nam</span>
            <Icon
              className="text-text-wedding-red h-6 w-6 italic"
              icon="mingcute:love-fill"
            />
            <span className="font-times">Trưởng Nữ</span>
          </div>

          {/* Bride name */}
          <p className="text-text-wedding-red font-script text-5xl">
            Nguyễn Thụy Trân
          </p>
        </div>

        {/* Ceremony details */}
        <div className="text-center">
          <p className="text-text-wedding-primary font-times text-sm">
            Hôn lễ được cử hành tại Tư Gia Nam vào lúc
          </p>
          <p className="text-text-wedding-primary font-times text-sm font-semibold">
            09H00, NGÀY 02 THÁNG 05 NĂM 2026
          </p>
          <p className="font-times text-xs">
            (Nhằm ngày 16 tháng 03 năm Bính Ngọ)
          </p>
        </div>
      </div>

      {/* Right panel — venue & time */}
      <div className="relative flex flex-1 flex-col items-center justify-between gap-3 px-5 pb-10 pt-10">
        <div>
          <div className="h-10 w-60 rounded-full">
            <LeafIcon className="h-full w-full" />
          </div>

          {/* H & T monogram */}
          <div className="flex w-full flex-col items-center justify-center text-center">
            <div className="text-text-wedding-primary relative flex h-[80px] w-[80px] items-center justify-center gap-0.5 leading-none">
              <span className="text-text-wedding-red absolute left-0 top-2 font-times text-4xl font-medium">
                H
              </span>
              <span className="text-text-wedding-red font-vibes text-4xl font-normal">
                &amp;
              </span>
              <span className="text-text-wedding-red absolute bottom-2 right-2 font-times text-4xl font-medium">
                T
              </span>
            </div>
          </div>
        </div>

        <div className="absolute top-[170px] flex flex-col items-center justify-center gap-2">
          <p className="text-text-wedding-primary font-times text-sm tracking-[0.2em]">
            TRÂN TRỌNG KÍNH MỜI
          </p>
          <span className="border-text-wedding-red/40 w-[250px] border-b border-dotted text-center font-times font-vibes text-md font-semibold text-[#c59846]">
            BFs: Toan Le & My Lang
          </span>
          <p className="text-text-wedding-primary text-center font-times text-sm">
            đến dự buổi tiệc chung vui cùng gia đình chúng mình tại
          </p>
        </div>

        {/* Venue */}
        <div className="mt-[80px] flex flex-col text-center">
          <p className="text-text-wedding-primary font-times text-sm">
            Trung tâm hội nghị tiệc cưới
          </p>
          <p className="text-text-wedding-red font-times text-xl font-semibold tracking-wider">
            GOLDEN PHOENIX
          </p>
          <p className="text-text-wedding-primary font-times text-xs font-semibold">
            SẢNH C - TẦNG 1
          </p>
          <p className="font-times text-xs font-normal">
            A8.2 Lô 1-2 Đường 2/9, P. Hoà Cường, TP. Đà Nẵng
          </p>
        </div>

        {/* Date & time */}
        <div className="text-center">
          <p className="text-text-wedding-primary font-times text-sm font-bold">
            VÀO LÚC: 11H00
          </p>
          <div className="mt-1 flex items-center justify-center gap-2">
            <span className="text-sm font-bold text-[#7B3547]">THỨ BẢY</span>
            <span className="border-x border-[#7B3547]/50 px-3 text-2xl font-bold text-[#7B3547]">
              02
            </span>
            <span className="text-sm font-bold text-[#7B3547]">THÁNG 05</span>
          </div>
          <p className="text-text-wedding-primary font-times text-sm font-bold tracking-[0.3em]">
            2026
          </p>
          <p className="font-times text-xs">
            (Nhằm ngày 16 tháng 03 năm Bính Ngọ)
          </p>
        </div>

        {/* Closing */}
        <p className="text-center font-times text-xs uppercase tracking-[0.08em]">
          SỰ HIỆN DIỆN CỦA QUÝ VỊ <br />
          LÀ NIỀM VINH HẠNH CHO GIA ĐÌNH CHÚNG TÔI <br />
          RẤT HÂN HẠNH ĐƯỢC ĐÓN TIẾP!
        </p>
      </div>
    </div>
  );
}

function BackCover() {
  return (
    <div className="relative flex h-full flex-col items-center justify-end overflow-hidden bg-[#F5E1DA] py-8">
      {/* Decorative diagonal lines */}

      {/* Center banner with names */}
      <div className="bg-background-wedding-secondary absolute top-1/2 z-10 flex h-1/5 w-full -translate-y-1/2 flex-col items-center justify-center px-8 shadow-[0px_4px_16px_2px_#3D2C2C]">
        <p className="text-center font-times text-sm font-normal tracking-wide text-white antialiased">
          Chân thành cảm ơn sự hiện diện cùng tình cảm yêu thương của tất cả quý
          vị để ngày vui trở nên trọn vẹn và ý nghĩa. <br /> Chúc quý vị có một
          buổi tiệc vui vẻ và đáng nhớ. <br /> Trân trọng!
        </p>
      </div>

      {/* Bottom section */}
      <div className="flex w-full justify-center px-10">
        <div className="z-10 flex flex-col items-center">
          <p className="text-text-wedding-red font-inter font-vibes text-md font-normal italic tracking-[0.1em]">
            Thank you!
          </p>
        </div>
      </div>
    </div>
  );
}

const DESIGN_H = 600;
const FRONT_DESIGN_W = 450;
const INSIDE_DESIGN_W = 1080;
const PAD_X = 24;      // px-6 on each side
const PAD_TOP = 24;    // pt-6
const PAD_BOTTOM = 24; // pb-6
const TAB_H = 44;      // approximate rendered tab bar height
const GAP = 24;        // gap-6 between tab bar and card

interface InvitationPageProps {
  onClickFrontCover?: () => void;
}

function InvitationPage({ onClickFrontCover }: InvitationPageProps) {
  const [activeTab, setActiveTab] = useState<TabView>('front');
  const [scale, setScale] = useState(1);
  const [insideScale, setInsideScale] = useState(1);

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

  return (
    <div className="flex h-screen w-screen flex-col items-center gap-6 overflow-hidden px-6 pt-6 pb-6">
      {/* Tab navigator */}
      <div className="flex gap-1 rounded-full bg-[#3D2C2C]/10 p-1">
        {TAB_LABELS.map(({ key, label }) => (
          <button
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
              activeTab === key
                ? 'bg-background-wedding-secondary text-white shadow-md'
                : 'text-text-wedding-primary hover:bg-background-wedding-secondary/10'
            }`}
            key={key}
            onClick={() => setActiveTab(key)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Card view — flex-1 fills remaining height, centers card both axes */}
      <div className="flex flex-1 items-center justify-center">
        {activeTab === 'front' && (
          <div
            className="flex-shrink-0 overflow-hidden rounded-2xl shadow-xl"
            style={{ height: DESIGN_H * scale, width: FRONT_DESIGN_W * scale }}
          >
            <div style={{ width: FRONT_DESIGN_W, height: DESIGN_H, transform: `scale(${scale})`, transformOrigin: 'top left' }}>
              <FrontCover
                onClickCenterBanner={onClickFrontCover}
              />
            </div>
          </div>
        )}
        {activeTab === 'inside' && (
          <div
            className="flex-shrink-0 overflow-hidden rounded-2xl"
            style={{ height: DESIGN_H * insideScale, width: INSIDE_DESIGN_W * insideScale }}
          >
            <div style={{ width: INSIDE_DESIGN_W, height: DESIGN_H, transform: `scale(${insideScale})`, transformOrigin: 'top left' }}>
              <InsidePage />
            </div>
          </div>
        )}
        {activeTab === 'back' && (
          <div
            className="flex-shrink-0 overflow-hidden rounded-2xl shadow-xl"
            style={{ height: DESIGN_H * scale, width: FRONT_DESIGN_W * scale }}
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
        src={`${import.meta.env.BASE_URL}video/bg.mp4`}
        autoPlay
        loop
        // muted
        playsInline
      />
      <div className="relative z-10">
        <InvitationPage onClickFrontCover={() => {
          console.log('123 :>> ', 123);
          videoRef.current?.play();
        }}/>
      </div>
    </div>
  )
}

export default App

