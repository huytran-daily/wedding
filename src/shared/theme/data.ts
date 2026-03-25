
export const Language = {
  vi: 'vi',
  en: 'en',
} as const;

export type Language = (typeof Language)[keyof typeof Language];


export interface Client {
	id: string;
	type: 'invite' | 'notice'
	side: 'groom' | 'bride';
	data: {
		[Language.vi]: {
			name: string;
			groupName: string;
			sayOur: string;
      message: string;
		};
		[Language.en]: {
			name: string;
			groupName: string;
			sayOur: string;
      message: string;
		};
	}
}

export const clients: Client[] = [
  {
    id: '1',
    type: 'invite',
    side: 'groom',
    data: {
      [Language.vi]: {
        name: 'V/c bạn Toàn & My Lăng',
        groupName: 'HAI BẠN',
        sayOur: 'chúng mình',
        message: 'Vì khoảng cách địa lý, chúng mình hiểu rằng hai bạn sẽ gặp khó khăn trong việc về Việt Nam tham dự trực tiếp, nhưng vẫn rất mong hai bạn có thể ',

      },
      [Language.en]: {
        name: 'BFs: Toan Le & My Lang',
        groupName: 'YOU',
        sayOur: 'ours',
        message: 'We understand that due to geographical distance, it may be difficult for you to attend in person, but we still hope you can come to',
      },
    },
  },
  {
    id: '2',
    type: 'invite',
    side: 'bride',
    data: {
      [Language.vi]: {
        name: 'anh Henry',
        groupName: 'QUÝ ANH',
        sayOur: 'chúng em',
        message: '',
      },
      [Language.en]: {
        name: 'Mr. Henry',
        groupName: 'YOU',
        sayOur: 'our',
        message: '',
      },
    },
  },
  {
    id: '3',
    type: 'notice',
    side: 'bride',
    data: {
      [Language.vi]: {
        name: 'Em Khôi (Rô)',
        groupName: 'EM',
        sayOur: 'anh chị',
        message: 'Vì khoảng cách địa lý, anh chị hiểu rằng em có thể không thể tham dự trực tiếp. Tuy nhiên, em hoàn toàn có thể gửi những lời chúc tốt đẹp của mình vào “hộp thư chúc phúc” bên dưới.',
      },
      [Language.en]: {
        name: 'Kevin',
        groupName: 'YOU',
        sayOur: 'our',
        message: 'Due to geographical distance, we understand that you may not be able to attend in person. However, you can still send your best wishes to the "blessing box" below.',
      },
    },
  },
];
