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
        name: "V/c bạn Cát Hưng",
        groupName: "HƯNG",
        sayOur: "chúng mình",
        message:
          "Vì khoảng cách địa lý, chúng mình hiểu rằng hai bạn sẽ gặp khó khăn trong việc về Việt Nam tham dự trực tiếp, nhưng vẫn rất mong hai bạn có thể "
      },
      [Language.en]: {
        name: "My Friends: Cat Hung",
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
        name: "V/c bạn Uyển Như",
        groupName: "NHƯ",
        sayOur: "chúng mình",
        message:
          "Khoảng cách từ Melbourne về Đà Nẵng khá xa, lại thêm công việc bận rộn, nhưng mình vẫn rất mong hai bạn có thể thu xếp thời gian về Đà Nẵng và"
      },
      [Language.en]: {
        name: "My Friends: Uyen Nhu & ❤️",
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
          "Khoảng cách từ HCM ra Đà Nẵng khá xa, lại thêm công việc bận rộn, nhưng tụi em vẫn rất mong gia đình mình có thể thu xếp thời gian về Đà Nẵng và"
      },
      [Language.en]: {
        name: "Our dear chi Hanh & anh Hung and your little family",
        groupName: "YOU",
        sayOur: "our",
        message:
          "Even though the distance from HCM to Da Nang is quite far and you're both busy, but we sincerely hope you and your little family can make time to"
      }
    }
  },
  {
    id: "416E6820DA74", // Anh Út
    type: "invite",
    side: "groom",
    data: {
      [Language.vi]: {
        name: "Anh Út",
        groupName: "ANH",
        sayOur: "chúng em",
        message: ""
      },
      [Language.en]: {
        name: "Our dear brother anh Ut",
        groupName: "YOU",
        sayOur: "our",
        message: ""
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
        sayOur: "chúng mình",
        message:
          "Khoảng cách từ HCM ra Đà Nẵng khá xa, lại thêm công việc bận rộn, nhưng tụi em vẫn rất mong gia đình mình có thể thu xếp thời gian về Đà Nẵng và"
      },
      [Language.en]: {
        name: "Our dear chi Hanh & anh Hung and your little family",
        groupName: "YOU",
        sayOur: "our",
        message:
          "Even though the distance from HCM to Da Nang is quite far and you're both busy, but we sincerely hope you and your little family can make time to"
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
        name: "V/c bạn Ngọc Khánh (Nơ)",
        groupName: "KHÁNH",
        sayOur: "chúng mình",
        message:
          "Khoảng cách từ Úc về Việt Nam khá xa, lại thêm công việc bận rộn, nhưng Boi vẫn rất mong Nơ và gia đình nhỏ của mình có thể thu xếp thời gian về Đà Nẵng và"
      },
      [Language.en]: {
        name: "BFs: Caroline",
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
        groupName: "ÂN",
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
        name: "Hai bạn Thọ & Hương",
        groupName: "THỌ & HƯƠNG",
        sayOur: "chúng mình",
        message:
          "Khoảng cách từ Đài Loan về Việt Nam khá xa, lại thêm công việc bận rộn, nhưng mình vẫn rất mong hai bạn có thể thu xếp thời gian về Đà Nẵng và"
      },
      [Language.en]: {
        name: "My Friends: Huong & Tho",
        groupName: "YOU",
        sayOur: "our",
        message:
          "Even though the distance from Taiwan to Vietnam is quite far and you're both busy, we still sincerely hope you can make time to come to Da Nang"
      }
    }
  },
  {
    id: "546875616E204D6169", // Thuan Mai
    type: "invite",
    side: "groom",
    data: {
      [Language.vi]: {
        name: "Bạn Thuận & ❤️",
        groupName: "THUẬN",
        sayOur: "chúng mình",
        message:
          "Khoảng cách từ Đài Loan về Việt Nam khá xa, lại thêm công việc bận rộn, nhưng mình vẫn rất mong hai bạn có thể thu xếp thời gian về Đà Nẵng và"
      },
      [Language.en]: {
        name: "My Friends: Thuan & ❤️",
        groupName: "YOU",
        sayOur: "our",
        message:
          "Even though the distance from Taiwan to Vietnam is quite far and you're both busy, we still sincerely hope you can make time to come to Da Nang"
      }
    }
  },
  {
    id: "44757920486F616E67", // Duy Hoang
    type: "invite",
    side: "groom",
    data: {
      [Language.vi]: {
        name: "Bạn Duy Hoàng & ❤️",
        groupName: "HOÀNG",
        sayOur: "chúng mình",
        message:
          "Khoảng cách từ Hàn Quốc về Việt Nam khá xa, lại thêm công việc bận rộn, nhưng mình vẫn rất mong hai bạn có thể thu xếp thời gian về Đà Nẵng và"
      },
      [Language.en]: {
        name: "My Friends: Duy Hoang & ❤️",
        groupName: "YOU",
        sayOur: "our",
        message:
          "Even though the distance from Korea to Vietnam is quite far and you're both busy, we still sincerely hope you can make time to come to Da Nang"
      }
    }
  },
  {
    id: "54FA2042F46E", // Tú Bôn
    type: "invite",
    side: "groom",
    data: {
      [Language.vi]: {
        name: "Em Tú",
        groupName: "TÚ",
        sayOur: "anh chị",
        message:
          "Khoảng cách từ Mỹ về Việt Nam khá xa, lại thêm công việc bận rộn, nhưng anh chị vẫn rất mong em có thể thu xếp thời gian về Đà Nẵng và"
      },
      [Language.en]: {
        name: "Tu Bon",
        groupName: "YOU",
        sayOur: "our",
        message:
          "Even though the distance from the United States to Vietnam is quite far and you're busy, we still sincerely hope you can make time to come to Da Nang"
      }
    }
  },
  {
    id: "4E67F420561036E204B6861", // Kha Ngô
    type: "notice",
    side: "groom",
    data: {
      [Language.vi]: {
        name: "Em Kha",
        groupName: "KHA",
        sayOur: "anh chị",
        message:
          "Khoảng cách từ Gia Lai về Đà Nẵng khá xa, lại thêm em phải đang đi làm nhiệm vụ quân sự quan trọng. Tuy nhiên, em hoàn toàn có thể gửi những lời chúc tốt đẹp của mình vào “hộp thư chúc phúc” bên dưới nhé."
      },
      [Language.en]: {
        name: "Kha Ngo",
        groupName: "YOU",
        sayOur: "our",
        message: `Even though the distance from Gia Lai to Da Nang and your special circumstances, we understand that you may not be able to attend in person. However, you can still send your best wishes to the "blessing box" below.`
      }
    }
  },
  {
    id: "5468E16920441B01A16E67", // Thái Dương
    type: "invite",
    side: "groom",
    data: {
      [Language.vi]: {
        name: "V/c bạn Thái & Hồng",
        groupName: "THÁI & HỒNG",
        sayOur: "chúng mình",
        message:
          "Dịp lễ dài ngày sẽ có nhiều kế hoạch bản thân, nhưng rất mong hai bạn có thể thu xếp thời gian ở Đà Nẵng và"
      },
      [Language.en]: {
        name: "BFs: Thai & Hong",
        groupName: "YOU",
        sayOur: "our",
        message: "We sincerely hope you can make time to be in Da Nang and"
      }
    }
  },
  {
    id: "5472616E20486F", // Tran Ho
    type: "invite",
    side: "groom",
    data: {
      [Language.vi]: {
        name: "V/c bạn Trân & Huy",
        groupName: "TRÂN & HUY",
        sayOur: "chúng mình",
        message:
          "Dịp lễ dài ngày sẽ có nhiều kế hoạch bản thân, nhưng rất mong hai bạn có thể thu xếp thời gian ở Đà Nẵng và"
      },
      [Language.en]: {
        name: "My dear friends: Tran & Huy",
        groupName: "YOU",
        sayOur: "our",
        message: "We sincerely hope you can make time to be in Da Nang and"
      }
    }
  },
  {
    id: "546869656E205068756E67", // Thien Phung
    type: "invite",
    side: "groom",
    data: {
      [Language.vi]: {
        name: "V/c bạn Thiện & Hoàng",
        groupName: "THIỆN & HOÀNG",
        sayOur: "chúng mình",
        message:
          "Dịp lễ dài ngày sẽ có nhiều kế hoạch bản thân, nhưng rất mong hai bạn có thể thu xếp thời gian ở Đà Nẵng và"
      },
      [Language.en]: {
        name: "BFs: Thien & Hoang",
        groupName: "YOU",
        sayOur: "our",
        message:
          "Although busy with personal plans during the holiday, we sincerely hope you can make time to be in Da Nang and"
      }
    }
  },
  {
    id: "5469EA6E201106FE06E", // Tiên Đoàn
    type: "invite",
    side: "groom",
    data: {
      [Language.vi]: {
        name: "bạn Quỳnh Tiên",
        groupName: "TIÊN",
        sayOur: "chúng mình",
        message:
          "Dịp lễ dài ngày sẽ có nhiều kế hoạch bản thân, nhưng rất mong Tiên có thể thu xếp thời gian ở Đà Nẵng và"
      },
      [Language.en]: {
        name: "My dear friend: Quynh Tien",
        groupName: "YOU",
        sayOur: "our",
        message:
          "Although busy with personal plans during the holiday, we sincerely hope you can make time to be in Da Nang and"
      }
    }
  },
  {
    id: "486FE06E672048691EC770", // Hoàng Hiệp
    type: "invite",
    side: "groom",
    data: {
      [Language.vi]: {
        name: "bạn Hoàng Hiệp & Ly ❤️",
        groupName: "HAI BẠN",
        sayOur: "chúng mình",
        message: ""
      },
      [Language.en]: {
        name: "BFs: Hoang Hiep & Ly ❤️",
        groupName: "YOU",
        sayOur: "our",
        message: ""
      }
    }
  },
  {
    id: "616E68205175616E67", // A Quang
    type: "invite",
    side: "groom",
    data: {
      [Language.vi]: {
        name: "anh Quang & ❤️",
        groupName: "ANH QUANG",
        sayOur: "chúng em",
        message: ""
      },
      [Language.en]: {
        name: "Our dear brother: Anh Quang & ❤️",
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
    id: "43F46E67204D696E68", // Công Minh
    type: "invite",
    side: "groom",
    data: {
      [Language.vi]: {
        name: "V/c bạn Công Minh",
        groupName: "HAI BẠN",
        sayOur: "chúng mình",
        message: ""
      },
      [Language.en]: {
        name: "Our dear friend: Cong Minh",
        groupName: "YOU",
        sayOur: "our",
        message: ""
      }
    }
  },
  {
    id: "4269EA6E204CEA", // Biên Lê
    type: "invite",
    side: "groom",
    data: {
      [Language.vi]: {
        name: "V/c anh Biên Lê",
        groupName: "ANH CHỊ",
        sayOur: "chúng em",
        message: ""
      },
      [Language.en]: {
        name: "Our dear anh: Bien Le",
        groupName: "YOU",
        sayOur: "our",
        message: ""
      }
    }
  },
  {
    id: "54E0692054721EA76E", // Tài Trần
    type: "invite",
    side: "groom",
    data: {
      [Language.vi]: {
        name: "Em Tài & ❤️",
        groupName: "TÀI",
        sayOur: "anh chị",
        message:
          "Khoảng cách từ Trung Quốc về Việt Nam khá xa, lại thêm công việc bận rộn, nhưng anh chị vẫn rất mong hai em có thể thu xếp thời gian về Đà Nẵng và"
      },
      [Language.en]: {
        name: "Our dear friend: Tai Tran & ❤️",
        groupName: "YOU",
        sayOur: "our",
        message:
          "Even though the distance from the China to Vietnam is quite far and you're busy, we still sincerely hope you can make time to come to Da Nang"
      }
    }
  },
  {
    id: "42F969204CEA2050681B01A16E67", // a Phương
    type: "invite",
    side: "groom",
    data: {
      [Language.vi]: {
        name: "V/c anh Phương & chị Phượng",
        groupName: "ANH CHỊ",
        sayOur: "chúng em",
        message: ""
      },
      [Language.en]: {
        name: "Our dear anh Phuong & chi Phuong and your little family",
        groupName: "YOU",
        sayOur: "our",
        message: ""
      }
    }
  },
  {
    id: "4DE86F", // Mèo
    type: "invite",
    side: "groom",
    data: {
      [Language.vi]: {
        name: "V/c em Tâm & Phát",
        groupName: "TÂM & PHÁT",
        sayOur: "anh chị",
        message: ""
      },
      [Language.en]: {
        name: "Our dear em Tam & Phat and your little family",
        groupName: "YOU",
        sayOur: "our",
        message: ""
      }
    }
  },
  {
    id: "56E26E20416E68", // Vân Anh
    type: "invite",
    side: "groom",
    data: {
      [Language.vi]: {
        name: "em Vân Anh",
        groupName: "VÂN ANH",
        sayOur: "anh chị",
        message: ""
      },
      [Language.en]: {
        name: "Our dear sister Van Anh",
        groupName: "YOU",
        sayOur: "our",
        message: ""
      }
    }
  },
  {
    id: "42E16368", // Bách
    type: "invite",
    side: "groom",
    data: {
      [Language.vi]: {
        name: "em Bách",
        groupName: "BÁCH",
        sayOur: "anh chị",
        message: ""
      },
      [Language.en]: {
        name: "Our dear brother Bách",
        groupName: "YOU",
        sayOur: "our",
        message: ""
      }
    }
  },
  {
    id: "48691EBF75", // Hiếu
    type: "invite",
    side: "groom",
    data: {
      [Language.vi]: {
        name: "em Hiếu",
        groupName: "HIẾU",
        sayOur: "anh chị",
        message: ""
      },
      [Language.en]: {
        name: "Our dear brother Hiếu",
        groupName: "YOU",
        sayOur: "our",
        message: ""
      }
    }
  },
  {
    id: "4B686F61", // Khoa
    type: "invite",
    side: "groom",
    data: {
      [Language.vi]: {
        name: "em Khoa & ❤️",
        groupName: "KHOA",
        sayOur: "anh chị",
        message: ""
      },
      [Language.en]: {
        name: "Our dear brother Khoa & ❤️",
        groupName: "YOU",
        sayOur: "our",
        message: ""
      }
    }
  },
  {
    id: "56F520561036E204E676812961", // Võ Văn Nghĩa
    type: "invite",
    side: "groom",
    data: {
      [Language.vi]: {
        name: "Em Nghĩa & ❤️",
        groupName: "NGHĨA",
        sayOur: "anh chị",
        message: ""
      },
      [Language.en]: {
        name: "Our dear friend: Nghia & ❤️",
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
    id: "541ED1205579EA6E", // Tố Uyên
    type: "invite",
    side: "bride",
    data: {
      [Language.vi]: {
        name: "bạn Tố Uyên",
        groupName: "UYÊN",
        sayOur: "chúng mình",
        message:
          "Khoảng cách từ HCM ra Đà Nẵng khá xa, lại thêm công việc bận rộn, nhưng tụi mình vẫn rất mong Uyên có thể thu xếp thời gian về Đà Nẵng và"
      },
      [Language.en]: {
        name: "My dear friend: Uyen",
        groupName: "YOU",
        sayOur: "our",
        message:
          "Even though the distance from HCM to Da Nang is quite far and you're busy, but we still sincerely hope you can make time to come to Da Nang"
      }
    }
  },
  {
    id: "4B696D205472696E68", // Kim Trinh
    type: "invite",
    side: "bride",
    data: {
      [Language.vi]: {
        name: "bạn Kim Trinh",
        groupName: "TRINH",
        sayOur: "chúng mình",
        message:
          "Khoảng cách từ Phú Quốc về Hội An khá xa, lại thêm công việc bận rộn, nhưng tụi mình vẫn rất mong Trinh có thể thu xếp thời gian về Hội An và"
      },
      [Language.en]: {
        name: "My dear friend: Kim Trinh",
        groupName: "YOU",
        sayOur: "our",
        message:
          "Even though the distance from Phu Quoc to Hoi An is quite far and you're busy, but we still sincerely hope you can make time to come to Hoi An"
      }
    }
  },
  {
    id: "431EA96D2054681ECB6E68", // Cẩm Thịnh
    type: "invite",
    side: "bride",
    data: {
      [Language.vi]: {
        name: "V/c bạn Cẩm Thịnh",
        groupName: "THỊNH",
        sayOur: "chúng mình",
        message:
          "Khoảng cách từ Mỹ về Việt Nam khá xa, lại thêm công việc bận rộn, nhưng tụi mình vẫn rất mong Thịnh có thể thu xếp thời gian về Đà Nẵng và"
      },
      [Language.en]: {
        name: "My dear friends: Cẩm Thịnh & ❤️",
        groupName: "YOU",
        sayOur: "our",
        message:
          "Even though the distance from the United States to Vietnam is quite far and you're both busy, we still sincerely hope you can make time to come to Da Nang"
      }
    }
  },
  {
    id: "51751EF36E68204C616E", // Quỳnh Lan
    type: "invite",
    side: "bride",
    data: {
      [Language.vi]: {
        name: "bạn Quỳnh Lan",
        groupName: "LAN",
        sayOur: "chúng mình",
        message:
          "Khoảng cách từ Úc về Việt Nam khá xa, lại thêm công việc bận rộn, nhưng tụi mình vẫn rất mong Lan có thể thu xếp thời gian về Đà Nẵng và"
      },
      [Language.en]: {
        name: "My dear friend: Lan",
        groupName: "YOU",
        sayOur: "our",
        message:
          "Even though the distance from Australia to Vietnam is quite far and you're busy, we still sincerely hope you can make time to come to Da Nang"
      }
    }
  },
  {
    id: "486FE06E67205468751EF5", // Hoàng Thuỵ
    type: "invite",
    side: "bride",
    data: {
      [Language.vi]: {
        name: "bạn Hoàng Thuỵ",
        groupName: "THỤY",
        sayOur: "chúng mình",
        message:
          "Khoảng cách từ HCM về Hội An khá xa, lại thêm công việc bận rộn, nhưng tụi mình vẫn rất mong Thụy có thể thu xếp thời gian về Hội An và"
      },
      [Language.en]: {
        name: "My dear friend: Hoàng Thuỵ",
        groupName: "YOU",
        sayOur: "our",
        message:
          "Even though the distance from HCM to Hoi An is quite far and you're busy, but we still sincerely hope you can make time to come to Hoi An"
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
        groupName: "ANH HENRY",
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
    id: "426F6E", // Bon
    type: "invite",
    side: "bride",
    data: {
      [Language.vi]: {
        name: "chị Bon",
        groupName: "CHỊ BON",
        sayOur: "chúng em",
        message: ""
      },
      [Language.en]: {
        name: "Ms. Bon",
        groupName: "YOU",
        sayOur: "our",
        message: ""
      }
    }
  },
  {
    id: "54681EA36F2053616E67", // Thảo Sang
    type: "invite",
    side: "groom",
    data: {
      [Language.vi]: {
        name: "chị Thảo Sang",
        groupName: "CHỊ SANG",
        sayOur: "chúng em",
        message: ""
      },
      [Language.en]: {
        name: "Friends: Thao Sang",
        groupName: "YOU",
        sayOur: "our",
        message: ""
      }
    }
  },
  {
    id: "51751ED163204B68E16E68", // Quốc Khánh
    type: "invite",
    side: "groom",
    data: {
      [Language.vi]: {
        name: "bạn Quốc Khánh & ❤️",
        groupName: "KHÁNH",
        sayOur: "chúng mình",
        message: ""
      },
      [Language.en]: {
        name: "Friends: Quoc Khanh & ❤️",
        groupName: "YOU",
        sayOur: "our",
        message: ""
      }
    }
  },
  {
    id: "1101036E672048691EBF75", // Đăng Hiếu
    type: "invite",
    side: "groom",
    data: {
      [Language.vi]: {
        name: "bạn Đăng Hiếu & ❤️",
        groupName: "HIẾU",
        sayOur: "chúng mình",
        message: ""
      },
      [Language.en]: {
        name: "Friends: Đăng Hiếu & ❤️",
        groupName: "YOU",
        sayOur: "our",
        message: ""
      }
    }
  },
  {
    id: "4C1EC720546869EA6E", // Tấn Thiện
    type: "invite",
    side: "groom",
    data: {
      [Language.vi]: {
        name: "bạn Tấn Thiện (Lệ) & ❤️",
        groupName: "THIỆN",
        sayOur: "chúng mình",
        message: ""
      },
      [Language.en]: {
        name: "Friends: Tấn Thiện (Lệ) & ❤️",
        groupName: "YOU",
        sayOur: "our",
        message: ""
      }
    }
  },
  {
    id: "431B01EDD6E672048656E7279", // Cường Henry
    type: "invite",
    side: "groom",
    data: {
      [Language.vi]: {
        name: "V/c bạn Cường (Henry)",
        groupName: "CƯỜNG",
        sayOur: "chúng mình",
        message:
          "Khoảng cách từ Mỹ về Việt Nam khá xa, lại thêm công việc bận rộn, nhưng mình vẫn rất mong bạn có thể thu xếp thời gian về Đà Nẵng và"
      },
      [Language.en]: {
        name: "My dear friend: Henry",
        groupName: "YOU",
        sayOur: "our",
        message:
          "Even though the distance from the United States to Vietnam is quite far and you're both busy, we still sincerely hope you can make time to come to Da Nang"
      }
    }
  },
  {
    id: "4B6576696E204E677579656E", // Kevin Nguyen
    type: "notice",
    side: "bride",
    data: {
      [Language.vi]: {
        name: "Em Khôi Nguyễn (Rô)",
        groupName: "KHÔI",
        sayOur: "anh chị",
        message:
          "Vì khoảng cách địa lý, anh chị hiểu rằng em có thể không thể tham dự trực tiếp. Tuy nhiên, em hoàn toàn có thể gửi những lời chúc tốt đẹp của mình vào “hộp thư chúc phúc” bên dưới nhé."
      },
      [Language.en]: {
        name: "Khoi Nguyen",
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
