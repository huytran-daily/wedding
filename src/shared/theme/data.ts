export const Language = {
  vi: "vi",
  en: "en"
} as const;

export type Language = (typeof Language)[keyof typeof Language];

export interface Client {
  id: string;
  type: "invite" | "notice";
  side: "groom" | "bride";
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
  };
}

export const clients: Client[] = [
  {
    id: "43E17420481B06E67", // Cát Hưng
    type: "invite",
    side: "groom",
    data: {
      [Language.vi]: {
        name: "V/c bạn Hưng & Lộc",
        groupName: "HAI BẠN",
        sayOur: "chúng mình",
        message:
          "Vì khoảng cách địa lý, chúng mình hiểu rằng hai bạn sẽ gặp khó khăn trong việc về Việt Nam tham dự trực tiếp, nhưng vẫn rất mong hai bạn có thể "
      },
      [Language.en]: {
        name: "Friends: Hung & Loc",
        groupName: "YOU",
        sayOur: "our",
        message:
          "We understand that due to geographical distance, it may be difficult for you to attend in person, but we still hope you can come to"
      }
    }
  },
  {
    id: "5579656E204E6875", // Uyen Nhu
    type: "invite",
    side: "groom",
    data: {
      [Language.vi]: {
        name: "V/c bạn Như",
        groupName: "HAI BẠN",
        sayOur: "chúng mình",
        message:
          "Khoảng cách từ Melbourne về Đà Nẵng khá xa, lại thêm công việc bận rộn, nhưng mình vẫn rất mong hai bạn có thể thu xếp thời gian về Đà Nẵng và"
      },
      [Language.en]: {
        name: "Friends: Nhu and your husband",
        groupName: "YOU",
        sayOur: "our",
        message:
          "Even though the distance from Melbourne to Da Nang is quite far and you're both busy, but we sincerely hope you can make time to"
      }
    }
  },
  {
    id: "4E677579656E2054686920486F6E672048616E68", // Nguyen Thi Hong Hanh
    type: "invite",
    side: "groom",
    data: {
      [Language.vi]: {
        name: "G/đ chị Hạnh & anh Hùng",
        groupName: "ANH CHỊ",
        sayOur: "chúng em",
        message:
          "Khoảng cách từ Sài Gòn ra Đà Nẵng khá xa, lại thêm công việc bận rộn, nhưng tụi em vẫn rất mong gia đình mình có thể thu xếp thời gian về Đà Nẵng và"
      },
      [Language.en]: {
        name: "Our dear chi Hanh & anh Hung and your little family",
        groupName: "YOU",
        sayOur: "our",
        message:
          "Even though the distance from Saigon to Da Nang is quite far and you're both busy, but we sincerely hope you and your little family can make time to"
      }
    }
  },
  {
    id: "63681ECB20421A1", // chị Bơ
    type: "invite",
    side: "bride",
    data: {
      [Language.vi]: {
        name: "G/đ chị Hạnh & anh Hùng",
        groupName: "ANH CHỊ",
        sayOur: "chúng em",
        message:
          "Khoảng cách từ Sài Gòn ra Đà Nẵng khá xa, lại thêm công việc bận rộn, nhưng tụi em vẫn rất mong gia đình mình có thể thu xếp thời gian về Đà Nẵng và"
      },
      [Language.en]: {
        name: "Our dear chi Hanh & anh Hung and your little family",
        groupName: "YOU",
        sayOur: "our",
        message:
          "Even though the distance from Saigon to Da Nang is quite far and you're both busy, but we sincerely hope you and your little family can make time to"
      }
    }
  },
  {
    id: "546FE06E204CEA", // Toàn Lê
    type: "invite",
    side: "groom",
    data: {
      [Language.vi]: {
        name: "V/c bạn Toàn & My Lăng",
        groupName: "HAI BẠN",
        sayOur: "chúng mình",
        message:
          "Vì khoảng cách địa lý, chúng mình hiểu rằng hai bạn sẽ gặp khó khăn trong việc về Việt Nam tham dự trực tiếp, nhưng vẫn rất mong hai bạn có thể "
      },
      [Language.en]: {
        name: "BFs: Toan Le & My Lang",
        groupName: "YOU",
        sayOur: "our",
        message:
          "We understand that due to geographical distance, it may be difficult for you to attend in person, but we still hope you can come to"
      }
    }
  },
  {
    id: "4E676F63204B68616E68", // Ngọc Khánh
    type: "invite",
    side: "groom",
    data: {
      [Language.vi]: {
        name: "V/c bạn Khánh & Joshua",
        groupName: "HAI BẠN",
        sayOur: "chúng mình",
        message:
          "Khoảng cách từ Úc về Việt Nam khá xa, lại thêm công việc bận rộn, nhưng Boi vẫn rất mong Nơ và gia đình nhỏ của mình có thể thu xếp thời gian về Đà Nẵng và"
      },
      [Language.en]: {
        name: "BFs: Caroline & Joshua",
        groupName: "YOU",
        sayOur: "our",
        message:
          "Even though the distance from Australia to Vietnam is quite far and you're both busy, Boi still sincerely hopes Nơ and your little family can make time to come to Da Nang"
      }
    }
  },
  {
    id: "4D1EF920C26E", // Mỹ Ân
    type: "invite",
    side: "groom",
    data: {
      [Language.vi]: {
        name: "V/c bạn Mỹ Ân & Aric",
        groupName: "HAI BẠN",
        sayOur: "chúng mình",
        message:
          "Khoảng cách từ Mỹ về Việt Nam khá xa, lại thêm công việc bận rộn, nhưng mình vẫn rất mong hai bạn có thể thu xếp thời gian về Đà Nẵng và"
      },
      [Language.en]: {
        name: "My dear friends: An & Aric",
        groupName: "YOU",
        sayOur: "our",
        message:
          "Even though the distance from the United States to Vietnam is quite far and you're both busy, we still sincerely hope you can make time to come to Da Nang"
      }
    }
  },

  {
    id: "1101EE9632054681ECD", // Đức Thọ
    type: "invite",
    side: "groom",
    data: {
      [Language.vi]: {
        name: "V/c bạn Thọ & Hương",
        groupName: "HAI BẠN",
        sayOur: "chúng mình",
        message:
          "Khoảng cách từ Đài Loan về Việt Nam khá xa, lại thêm công việc bận rộn, nhưng mình vẫn rất mong 2 bạn có thể thu xếp thời gian về Đà Nẵng và"
      },
      [Language.en]: {
        name: "Friends: Huong and Tho",
        groupName: "YOU",
        sayOur: "our",
        message:
          "Even though the distance from Taiwan to Vietnam is quite far and you're both busy, we still sincerely hope you can make time to come to Da Nang"
      }
    }
  },
  {
    id: "54FA2042F46E", // Tú Bôn
    type: "notice",
    side: "groom",
    data: {
      [Language.vi]: {
        name: "Em Tú",
        groupName: "EM",
        sayOur: "anh chị",
        message:
          "Vì khoảng cách địa lý, anh chị hiểu rằng em có thể không thể tham dự trực tiếp. Tuy nhiên, em hoàn toàn có thể gửi những lời chúc tốt đẹp của mình vào “hộp thư chúc phúc” bên dưới nhé."
      },
      [Language.en]: {
        name: "Tu Bon",
        groupName: "YOU",
        sayOur: "our",
        message:
          'Due to geographical distance, we understand that you may not be able to attend in person. However, you can still send your best wishes to the "blessing box" below.'
      }
    }
  },
  {
    id: "486FE06E672048691EC770", // Hoàng Hiệp
    type: "invite",
    side: "groom",
    data: {
      [Language.vi]: {
        name: "bạn Hoàng Hiệp & Ly",
        groupName: "HAI BẠN",
        sayOur: "chúng mình",
        message: ""
      },
      [Language.en]: {
        name: "BFs: Hoang Hiep & Ly",
        groupName: "YOU",
        sayOur: "our",
        message: ""
      }
    }
  },
  {
    id: "4D696E6820487579EA6E", // Minh Huyên
    type: "invite",
    side: "groom",
    data: {
      [Language.vi]: {
        name: "bạn Minh Huyên & ❤️",
        groupName: "HAI BẠN",
        sayOur: "chúng mình",
        message: ""
      },
      [Language.en]: {
        name: "BFs: Minh Huyen & ❤️",
        groupName: "YOU",
        sayOur: "our",
        message: ""
      }
    }
  },
  {
    id: "51751EBF20436869", // Quế Chi
    type: "invite",
    side: "groom",
    data: {
      [Language.vi]: {
        name: "bạn Quế Chi & ❤️",
        groupName: "CHI",
        sayOur: "chúng mình",
        message: ""
      },
      [Language.en]: {
        name: "BFs: Que Chi & ❤️",
        groupName: "YOU",
        sayOur: "our",
        message: ""
      }
    }
  },
  {
    id: "4E681B0204E681B0", // Như Như
    type: "invite",
    side: "groom",
    data: {
      [Language.vi]: {
        name: "bạn Như Như & ❤️",
        groupName: "NHƯ",
        sayOur: "chúng mình",
        message: ""
      },
      [Language.en]: {
        name: "BFs: Nhu & ❤️",
        groupName: "YOU",
        sayOur: "our",
        message: ""
      }
    }
  },
  {
    id: "48656E7279", // Henry
    type: "invite",
    side: "bride",
    data: {
      [Language.vi]: {
        name: "anh Henry",
        groupName: "QUÝ ANH",
        sayOur: "chúng em",
        message: ""
      },
      [Language.en]: {
        name: "Mr. Henry",
        groupName: "YOU",
        sayOur: "our",
        message: ""
      }
    }
  },
  {
    id: "506F6E65", // Bone
    type: "invite",
    side: "bride",
    data: {
      [Language.vi]: {
        name: "chị Bone",
        groupName: "QUÝ CHỊ",
        sayOur: "chúng em",
        message: ""
      },
      [Language.en]: {
        name: "Ms. Bone",
        groupName: "YOU",
        sayOur: "our",
        message: ""
      }
    }
  },
  {
    id: "4B6576696E204E677579656E", // Kevin Nguyen
    type: "notice",
    side: "bride",
    data: {
      [Language.vi]: {
        name: "Em Khôi (Rô)",
        groupName: "EM",
        sayOur: "anh chị",
        message:
          "Vì khoảng cách địa lý, anh chị hiểu rằng em có thể không thể tham dự trực tiếp. Tuy nhiên, em hoàn toàn có thể gửi những lời chúc tốt đẹp của mình vào “hộp thư chúc phúc” bên dưới nhé."
      },
      [Language.en]: {
        name: "Kevin",
        groupName: "YOU",
        sayOur: "our",
        message:
          'Due to geographical distance, we understand that you may not be able to attend in person. However, you can still send your best wishes to the "blessing box" below.'
      }
    }
  },
  {
    id: "4E68E02067E169", // Nhà gái
    type: "invite",
    side: "bride",
    data: {
      [Language.vi]: {
        name: "Tất cả người thân, bạn bè thân thiết",
        groupName: "MỌI NGƯỜI",
        sayOur: "chúng con/em",
        message:
          "Thay cho những tấm thiệp hồng chưa được trao tay. Vợ chồng chúng con/em, Trân trọng kính mời quý cô, dì, chú, bác, anh, chị, em, bạn bè gần xa... bớt chút thời gian thu xếp công việc đến chung vui cùng gia đình chúng con/em. "
      },
      [Language.en]: {
        name: "All our close friends and family",
        groupName: "ALL OF YOU",
        sayOur: "our",
        message:
          "Instead of the pink cards that have not been handed out, we, the couple, respectfully invite all of you, dear relatives, uncles, aunts, brothers, sisters, friends near and far... to take some time to arrange your work and join us in celebrating with our family."
      }
    }
  },
  {
    id: "4E68E02074726169", // Nhà trai
    type: "invite",
    side: "groom",
    data: {
      [Language.vi]: {
        name: "Tất cả người thân, bạn bè thân thiết",
        groupName: "MỌI NGƯỜI",
        sayOur: "chúng con/em",
        message:
          "Thay cho những tấm thiệp hồng chưa được trao tay. Vợ chồng chúng con/em, Trân trọng kính mời quý cô, dì, chú, bác, anh, chị, em, bạn bè gần xa... bớt chút thời gian thu xếp công việc đến chung vui cùng gia đình chúng con/em. "
      },
      [Language.en]: {
        name: "All our close friends and family",
        groupName: "ALL OF YOU",
        sayOur: "our",
        message:
          "Instead of the pink cards that have not been handed out, we, the couple, respectfully invite all of you, dear relatives, uncles, aunts, brothers, sisters, friends near and far... to take some time to arrange your work and join us in celebrating with our family."
      }
    }
  }
];
