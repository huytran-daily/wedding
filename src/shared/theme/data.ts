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
    id: "546FE06E204CEA",
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
        sayOur: "ours",
        message:
          "We understand that due to geographical distance, it may be difficult for you to attend in person, but we still hope you can come to"
      }
    }
  },
  {
    id: "4E676F63204B68616E68",
    type: "invite",
    side: "groom",
    data: {
      [Language.vi]: {
        name: "V/c bạn Khánh & Joshua",
        groupName: "HAI BẠN",
        sayOur: "chúng mình",
        message:
          "Vì khoảng cách địa lý, chúng mình hiểu rằng hai bạn sẽ gặp khó khăn trong việc về Việt Nam tham dự trực tiếp, nhưng vẫn rất mong hai bạn có thể "
      },
      [Language.en]: {
        name: "BFs: Caroline & Joshua",
        groupName: "YOU",
        sayOur: "ours",
        message:
          "We understand that due to geographical distance, it may be difficult for you to attend in person, but we still hope you can come to"
      }
    }
  },
  {
    id: "54FA2042F46E",
    type: "invite",
    side: "groom",
    data: {
      [Language.vi]: {
        name: "Em Tú",
        groupName: "EM",
        sayOur: "anh chị",
        message:
          "Vì khoảng cách địa lý, anh chị hiểu rằng em sẽ gặp khó khăn trong việc về Việt Nam tham dự trực tiếp, nhưng vẫn rất mong em có thể "
      },
      [Language.en]: {
        name: "Tu Bon",
        groupName: "YOU",
        sayOur: "ours",
        message:
          "We understand that due to geographical distance, it may be difficult for you to attend in person, but we still hope you can come to"
      }
    }
  },
  {
    id: "48656E7279",
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
    id: "506F6E65",
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
    id: "4B6576696E204E677579656E",
    type: "notice",
    side: "bride",
    data: {
      [Language.vi]: {
        name: "Em Khôi (Rô)",
        groupName: "EM",
        sayOur: "anh chị",
        message:
          "Vì khoảng cách địa lý, anh chị hiểu rằng em có thể không thể tham dự trực tiếp. Tuy nhiên, em hoàn toàn có thể gửi những lời chúc tốt đẹp của mình vào “hộp thư chúc phúc” bên dưới."
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
    id: "4E68E02067E169",
    type: "invite",
    side: "bride",
    data: {
      [Language.vi]: {
        name: "Tất cả người thân, bạn bè thân thiết",
        groupName: "MỌI NGƯỜI",
        sayOur: "chúng mình",
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
    id: "4E68E02074726169",
    type: "invite",
    side: "groom",
    data: {
      [Language.vi]: {
        name: "Tất cả người thân, bạn bè thân thiết",
        groupName: "MỌI NGƯỜI",
        sayOur: "chúng mình",
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
