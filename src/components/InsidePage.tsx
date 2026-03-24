import { Icon } from '@iconify/react';
import LeafIcon from '../assets/leaf-icon';
import AndIcon from '../assets/and-icon';
import LaurelWreathIcon from '../assets/laurel-wreath-icon';

interface Props {
  onClickInside?: () => void;
}

export default function InsidePage({ onClickInside }: Props) {
  return (
    <div
      className="flex h-full cursor-pointer"
      onClick={onClickInside}
    >
      {/* Left panel — decorative envelope flap */}
      <div className="relative w-[17%] flex-shrink-0 overflow-hidden border-r border-[#C4A08A]/60 bg-transparent">
        <div
          style={{
            clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 40% 100%, 0 50%)'
          }}
          className="absolute inset-0 bg-[#F5E1DA]"
        />
        <div className="absolute h-full w-full -translate-x-1/3 -translate-y-1/5">
          <LeafIcon color="#7e3549" />
        </div>
      </div>

      {/* Center panel — family info & names */}
      <div className="relative flex flex-1 flex-col items-center justify-between border-r border-[#C4A08A]/40 px-5 py-10 bg-[#F5E1DA]">
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
      <div className="relative flex flex-1 flex-col items-center justify-between gap-3 px-5 pb-10 pt-5 bg-[#F5E1DA]">
        <div>
          {/* <div className="h-10 w-60 rounded-full">
            <LeafIcon className="h-full w-full" />
          </div> */}

          {/* H & T monogram */}
          <div className="mt-2 flex w-full flex-col items-center justify-center text-center">
            <div className="text-text-wedding-primary relative flex h-[80px] w-[80px] items-center justify-center gap-0.5 leading-none">
              <LaurelWreathIcon className="absolute -rotate-0 h-45 w-45" color="#7e3549" />
              <span className="text-text-wedding-red absolute left-3 top-[15px] font-times text-4xl font-medium">
                H
              </span>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <AndIcon 
                width="20" 
                height="20" 
                fill="#7e3549"
                // fill="#6B2D3E"
                className="my-svg text-text-wedding-red"
              />
              </div>
              <span className="text-text-wedding-red absolute bottom-[5px] right-4 font-times text-4xl font-medium">
                T
              </span>
            </div>
          </div>
        </div>

        <div className="absolute top-[150px] flex flex-col items-center justify-center gap-2">
          <p className="text-text-wedding-primary font-times text-sm tracking-[0.2em]">
            TRÂN TRỌNG KÍNH MỜI
          </p>
          <span className="border-text-wedding-red/40 w-[250px] min-h-[16px] border-b border-dotted text-center font-times font-vibes text-md font-semibold text-[#c59846]">
            {/* BFs: Toan Le & My Lang */}
          </span>
          <p className="text-text-wedding-primary text-center font-times text-sm">
            đến dự buổi tiệc chung vui cùng gia đình chúng mình tại
          </p>
        </div>

        {/* Venue */}
        <div className="mt-[114px] flex flex-col text-center">
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
            <span className="text-sm font-bold text-text-wedding-red">THỨ BẢY</span>
            <span className="border-x border-[#7B3547]/50 px-3 text-2xl font-bold text-text-wedding-red">
              02
            </span>
            <span className="text-sm font-bold text-text-wedding-red">THÁNG 05</span>
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
          SỰ HIỆN DIỆN CỦA QUÝ BẠN <br />
          LÀ NIỀM VINH HẠNH CHO GIA ĐÌNH CHÚNG MÌNH <br />
          RẤT HÂN HẠNH ĐƯỢC ĐÓN TIẾP!
        </p>
      </div>
    </div>
  );
}
