import { Icon } from '@iconify/react';
import LeafIcon from '../assets/leaf-icon';
import AndIcon from '../assets/and-icon';
import LaurelWreathIcon from '../assets/laurel-wreath-icon';
import { Language, type Client } from '../shared/theme/data';
import LeftFamily from './LeftFamily';
import RightFamily from './RightFamily';
import { createClient } from "@supabase/supabase-js";
import { useState } from 'react';
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);


interface Props {
  client?: Client;
  lang: Language;
  onClickInside?: () => void;
}

export default function InsidePage({ client, lang, onClickInside }: Props) {
  const [isTyping, setIsTyping] = useState(false);
  const [typedMessage, setTypedMessage] = useState('');

  const handleClickInside = () => {
    if (isTyping) return; // Prevent multiple clicks while typing
    return onClickInside?.();
  }

  const handleSendMessage = async (message: string) => {
    const { error } = await supabase.from('wishes').insert([{ id: client?.id.toString(), name: client?.data[lang].name ,context: message }]);
    if (error) {
      console.error('Error submitting message:', error);
      return;
    }
    setIsTyping(false);
    setTimeout(() => {
      onClickInside?.();
    }, 500);
  }

  return (
    <div
      className="flex h-full cursor-pointer"
      onClick={handleClickInside}
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
          <LeftFamily lang={lang} side={client?.side || 'groom'} />
          <RightFamily lang={lang} side={client?.side || 'groom'} />
        </div>

        {/* Announcement */}
        <div className="absolute top-[170px] text-center">
          <p className="text-text-wedding-primary font-times text-sm">
            {(lang !== Language.en ? 'Trân trọng báo tin' : 'Cordially announce that')}
          </p>
          <p className="text-text-wedding-primary font-times text-sm font-semibold">
            {(lang !== Language.en ? 'Lễ Thành Hôn & Vu Quy' : 'Wedding Ceremony & Reception')}{' '}
            <span className="font-times font-normal">{lang !== Language.en ? 'của con chúng tôi' : 'of our children'}</span>
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-6">
          {/* Left name */}
          <p className="text-text-wedding-red font-script text-5xl">
            {client?.side !== 'bride' ? 'Nguyễn Phước Huy' : 'Nguyễn Thụy Trân'}
          </p>

          {/* Trưởng Nữ & Trưởng Nam */}
          <div className="text-text-wedding-primary flex items-center gap-4 text-sm">
            <span className="font-times">{client?.side !== 'bride' ? (lang !== Language.en ? 'Trưởng Nam' : 'Libra') : (lang !== Language.en ? 'Trưởng Nữ' : 'Sagittarius')}</span>
            <Icon
              className="text-text-wedding-red h-6 w-6 italic"
              icon="mingcute:love-fill"
            />
            <span className="font-times">{client?.side !== 'bride' ? (lang !== Language.en ? 'Trưởng Nữ' : 'Sagittarius') : (lang !== Language.en ? 'Trưởng Nam' : 'Libra')}</span>
          </div>

          {/* Right name */}
          <p className="text-text-wedding-red font-script text-5xl">
            {client?.side !== 'bride' ? 'Nguyễn Thụy Trân' : 'Nguyễn Phước Huy'}
          </p>
        </div>

        {/* Ceremony details */}
        <div className="text-center">
          <p className="text-text-wedding-primary font-times text-sm">
            {lang !== Language.en ? 'Hôn lễ được cử hành tại Tư Gia Nam vào lúc' : 'The wedding ceremony will be held at'}
          </p>
          <p className="text-text-wedding-primary font-times text-sm font-semibold">
            {lang !== Language.en ? '09H00, NGÀY 02 THÁNG 05 NĂM 2026' : '09:00 AM, MAY 2, 2026'}
            
          </p>
          <p className="font-times text-xs">
            {lang !== Language.en ? '(Nhằm ngày 16 tháng 03 năm Bính Ngọ)' : '(Corresponding to March 16, Binh Ngo year)'}
          </p>
        </div>
      </div>

      {/* Right panel — venue & time */}
      <div className="relative flex flex-1 flex-col items-center justify-between gap-0 px-5 pb-8 pt-3 bg-[#F5E1DA]">
        {/* H & T monogram */}
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

        <div className="mt-4 flex flex-col items-center justify-center gap-1">
          <p className="text-text-wedding-primary font-times text-sm tracking-[0.2em]">
            {client?.type !== 'notice' ? (lang !== Language.en ? 'TRÂN TRỌNG KÍNH MỜI' : 'CORDIALLY INVITE') : (lang !== Language.en ? 'TRÂN TRỌNG BÁO TIN ĐẾN' : 'CORDIALLY ANNOUNCE TO') }
          </p>
          <span className="border-text-wedding-red/40 w-[250px] min-h-[14px] border-b border-dotted text-center font-times font-vibes text-md font-semibold text-[#c59846] tracking-[0.1em]">
            {client?.data[lang].name}
          </span>
          <p className="text-text-wedding-primary text-justify font-times text-sm px-[32px]">
            {client?.type !== 'notice' ? (lang !== Language.en ? `${client?.data[lang].message || ''} đến dự buổi tiệc chung vui cùng gia đình ${client?.data[lang].sayOur || 'chúng tôi'} tại` : `${client?.data[lang].message} to join us in celebrating with our family at`) : (lang !== Language.en ? `về ngày vui đám cưới của ${client?.data[lang].sayOur}. ${client?.data[lang].message}` : `about our upcoming happy wedding. ${client?.data[lang].message}`) }
          </p>
        </div>

        {/* Venue */}
        {
          client?.type !== 'notice' ? 
            <div className="flex flex-col text-center">
              <p className="text-text-wedding-primary font-times text-sm">
                {lang !== Language.en ? 'Trung tâm hội nghị tiệc cưới' : 'Wedding Conference Center'}
              </p>
              <p className="text-text-wedding-red font-times text-xl font-semibold tracking-wider">
                {client?.side !== 'bride' ? 'GOLDEN PHOENIX' : 'PHÚ KHANG'}
              </p>
              <p className="text-text-wedding-primary font-times text-xs font-semibold">
                 {client?.side !== 'bride' 
                 ? `${lang !== Language.en ? 'SẢNH C - TẦNG 1' : 'HALL C - 1ST FLOOR'}` 
                 : `${lang !== Language.en ? 'SẢNH RUBY' : 'RUBY HALL'}` } 
              </p>
              <p className="font-times text-xs font-normal">
                 {client?.side !== 'bride' 
                 ? `${lang !== Language.en ? 'A8.2 Lô 1-2 Đường 2/9, P. Hoà Cường, TP. Đà Nẵng' : 'A8.2 Lot 1-2, 2/9 Street, Hoa Cuong Ward, Da Nang City'}` 
                 : `${lang !== Language.en ? '140 Nguyễn Duy Hiệu, P. Hội An Đông, TP. Đà Nẵng' : '140 Nguyen Duy Hieu, Hoi An Dong Ward, Da Nang City'}` } 
                
              </p>
            </div>
          : <></>
        }
        

        {/* Date & time */}
        {client?.type !== 'notice' ? 
          <div className="text-center">
            <p className="text-text-wedding-primary font-times text-sm font-bold">
              {lang !== Language.en ? 'VÀO LÚC: 11H00' : 'SATURDAY'}
            </p>
            <div className="mt-1 flex items-center justify-center gap-2">
              <span className="text-sm font-bold text-text-wedding-red">{lang !== Language.en ? 'THỨ BẢY' : '11:00'}</span>
              <span className="px-3 text-2xl font-bold text-text-wedding-red">
                {client?.side !== 'bride' 
                  ? `02` 
                  : `25` }
              </span>
              <span className="text-sm font-bold text-text-wedding-red">
                {client?.side !== 'bride' 
                  ? `${lang !== Language.en ? 'THÁNG 05' : '-MAY-'}` 
                  : `${lang !== Language.en ? 'THÁNG 04' : 'APRIL'}` } 
              </span>
            </div>
            <p className="text-text-wedding-primary font-times text-sm font-bold tracking-[0.3em]">
              2026
            </p>
            <p className="font-times text-xs">
              {client?.side !== 'bride' 
                  ? `${lang !== Language.en ? '(Nhằm ngày 16 tháng 03 năm Bính Ngọ)' : '(Corresponding to March 16, Binh Ngo year)'}` 
                  : `${lang !== Language.en ? '(Nhằm ngày 09 tháng 03 năm Bính Ngọ)' : '(Corresponding to March 09, Binh Ngo year)'}` } 
              
            </p>
          </div>
          : 
          <div className='flex flex-col gap-1 justify-center items-center w-full px-8'>
            <textarea
                className="min-h-[150px] text-text-wedding-primary text-justify font-times text-xs bg-neutral-100 border border-[#C4A08A]/40 w-full rounded-md p-2 focus:outline-none"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsTyping(true);
                }}
                onChange={(e) => {
                  setTypedMessage(e.target.value)
                }}
            />
            <button
              className="px-2 py-1 bg-[#7e3549] text-text-wedding-pink rounded-md text-[10px] cursor-pointer disabled:bg-[#7e3549]/50"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                // Here you would typically send the typedMessage to your backend or database
                handleSendMessage(typedMessage);
              }}
            >
              {lang !== Language.en ? 'Gửi' : 'Send'}
            </button>
          </div>
        }

        {/* Closing */}
          {client?.type !== 'notice' ? (lang !== Language.en ? 
            (
              <p className="text-center font-times text-xs uppercase tracking-[0.08em]">
                SỰ HIỆN DIỆN CỦA {client?.data[lang].groupName || 'QUÝ VỊ'} <br />
                LÀ NIỀM VINH HẠNH CHO GIA ĐÌNH {client?.data[lang].sayOur?.toUpperCase() || 'CHÚNG TÔI'} <br />
                RẤT HÂN HẠNH ĐƯỢC ĐÓN TIẾP!
              </p>
            ) : <p className="text-center font-times text-xs uppercase tracking-[0.08em]">
                YOUR PRESENCE IS AN HONOR TO US <br />
                WE LOOK FORWARD TO WELCOMING YOU <br />
                BEST REGARDS!
              </p>
            ) : (lang !== Language.en ? 
                  <p className="text-center font-times text-xs uppercase tracking-[0.08em] px-6">
                    MỖI LỜI CHÚC TỪ {client?.data[lang].groupName || 'QUÝ VỊ'} LÀ NIỀM VUI VÀ SỰ TRÂN QUÝ ĐỐI VỚI {client?.data[lang].sayOur || 'CHÚNG TÔI'}. XIN CHÂN THÀNH CẢM ƠN TÌNH CẢM VÀ SỰ QUAN TÂM MÀ EM ĐÃ DÀNH.
                  </p>
                  : <p className="text-center font-times text-xs uppercase tracking-[0.08em] px-6">
                        YOUR EVERY WISH IS A JOY AND A TREASURE TO US. <br /> WE SINCERELY APPRECIATE YOUR LOVE AND CARE.<br />BEST REGARDS!
                    </p>
              ) }
        
      </div>
    </div>
  );
}
