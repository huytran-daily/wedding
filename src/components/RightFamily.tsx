import { Language } from "../shared/theme/data";

interface Props {
	lang: Language;
	side: 'groom' | 'bride';
}

export default function RightFamily({ lang, side }: Props) {
	if (side !== 'bride') {
		return (
			<div className="flex-1">
      <p className="font-times text-sm tracking-wider">
        {(lang !== Language.en ? 'Nhà gái:' : 'Bride\'s family:')}
      </p>
      <p className="text-text-wedding-primary mt-0.5 font-times text-sm">
        {(lang !== Language.en ? 'Ông' : 'Mr.')}{' '}
        <strong className="font-times text-sm font-semibold">
          NGUYỄN BỘI QUỲNH
        </strong>
      </p>
      <p className="text-text-wedding-primary font-times text-sm">
        {(lang !== Language.en ? 'Bà' : 'Mrs.')}{' '}
        <strong className="font-times text-sm font-semibold">
          PHÙNG THỊ CHÂU
        </strong>
      </p>
      <p className="mt-0.5 font-times text-sm">
        {(lang !== Language.en ? 'Ngô Quyền, phường Hội An' : 'Hoi An, Da Nang City')} 
      </p>
      <p className="font-times text-sm">{(lang !== Language.en ? 'TP. Đà Nẵng' : '')}</p>
    </div>
		)
	}
	return  (
		<div className="flex-1">
			<p className="font-times text-sm">
				{(lang !== Language.en ? 'Nhà trai:' : 'Groom\'s family:')}
			</p>
			<p className="text-text-wedding-primary mt-0.5 font-times text-sm">
				{(lang !== Language.en ? 'Ông' : 'Mr.')}{' '}
				<strong className="font-times text-sm font-semibold">
					NGUYỄN PHƯỚC DIỆM
				</strong>
			</p>
			<p className="text-text-wedding-primary font-times text-sm font-semibold">
				{(lang !== Language.en ? 'Bà' : 'Mrs.')}{' '}
				<strong className="font-times text-sm font-semibold">
					LÊ NGỌC HOA
				</strong>
			</p>
			<p className="mt-0.5 font-times text-sm">{(lang !== Language.en ? 'Lê Cơ, phường Hoà Cường' : 'Hoa Cuong, Da Nang City')}</p>
			<p className="font-times text-sm">{(lang !== Language.en ? 'TP. Đà Nẵng' : '')}</p>
		</div>
	)
}
