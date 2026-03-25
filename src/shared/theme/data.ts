
export const Language = {
  vi: 'vi',
  en: 'en',
} as const;

export type Language = (typeof Language)[keyof typeof Language];


export interface Client {
	id: string;
	type: 'invite' | 'notice'
	side: 'huy' | 'tran';
	data: {
		[Language.vi]: {
			name: string;
			groupName: string;
			sayOur: string;
		};
		[Language.en]: {
			name: string;
			groupName: string;
			sayOur: string;
		};
	}
}

export const clients: Client[] = [
  {
    id: '1',
    type: 'invite',
    side: 'huy',
    data: {
      [Language.vi]: {
        name: 'V/c bạn Toàn & My Lăng',
        groupName: 'HAI BẠN',
        sayOur: 'chúng mình',
      },
      [Language.en]: {
        name: 'BFs: Toan Le & My Lang',
        groupName: 'YOU',
        sayOur: 'our',
      },
    },
  },
  {
    id: '2',
    type: 'invite',
    side: 'tran',
    data: {
      [Language.vi]: {
        name: 'anh Henry',
        groupName: 'QUÝ ANH',
        sayOur: 'chúng em',
      },
      [Language.en]: {
        name: 'Mr. Henry',
        groupName: 'YOU',
        sayOur: 'our',
      },
    },
  },
  {
    id: '3',
    type: 'notice',
    side: 'tran',
    data: {
      [Language.vi]: {
        name: 'Em Khôi (Rô)',
        groupName: 'QUÝ EM',
        sayOur: 'anh chị',
      },
      [Language.en]: {
        name: 'Kevin',
        groupName: 'YOU',
        sayOur: 'our',
      },
    },
  },
];
