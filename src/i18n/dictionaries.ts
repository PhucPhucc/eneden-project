import type { Locale } from "./config";

export const dictionaries = {
  vi: {
    metadata: {
      title: "Eneden",
      description:
        "Một hành trình nhập vai vào trái tim những khu rừng nguyên sinh Việt Nam đang biến mất.",
    },
    language: {
      label: "Ngôn ngữ",
      vi: "Tiếng Việt",
      en: "English",
      zh: "中文",
    },
    nav: {
      logoAlt: "Logo Eneden",
      links: [
        { href: "#hero", label: "Khu rừng" },
        { href: "#species", label: "Loài quý hiếm" },
        { href: "#museum", label: "Sách Đỏ" },
        { href: "#action", label: "Bảo tồn" },
      ],
      learn: "Tìm hiểu",
      protect: "Hành động",
      openMenu: "Mở menu điều hướng",
      closeMenu: "Đóng menu điều hướng",
    },
    hero: {
      heading: "Khu rừng đang thì thầm... lời từ biệt.",
      subtitle:
        "Một hành trình nhập vai vào trái tim những khu rừng nguyên sinh Việt Nam đang biến mất.",
    },
    quote:
      "Hãy lắng nghe thật gần. Dưới tiếng ồn của thế giới hiện đại, lá phổi cổ xưa của Đông Nam Á đang thở những nhịp cạn dần. Rừng nguyên sinh Việt Nam, từng là biển xanh thẳm rộng lớn, nay co lại thành những hòn đảo của sương mù và ký ức.",
    story: {
      panels: [
        {
          id: "intro",
          label: "Bóng hình dưới tán rừng",
          title: "Những sinh linh của sương mù",
          body: "Sâu trong dãy Trường Sơn, những loài vật cổ xưa hơn ký ức vẫn di chuyển qua các cánh rừng đang thu hẹp từng ngày. Mỗi bước chân đưa chúng ta đến gần hơn ranh giới mong manh của thế giới ấy, và của chính chúng ta.",
        },
        {
          id: "saola",
          label: "Cực kỳ nguy cấp",
          title: "Sao La",
          body: "Kỳ lân châu Á, chỉ được phát hiện vào năm 1992. Có thể còn dưới 100 cá thể. Nó lướt qua tầng lá rậm như một linh ảnh, lặng lẽ chứng kiến vương quốc của mình biến mất.",
        },
        {
          id: "langur",
          label: "Nguy cấp",
          title: "Voọc mông trắng",
          body: "Loài linh trưởng có hoa văn nổi bật, bị giới hạn trong những khu rừng núi đá vôi bị chia cắt. Chúng dõi nhìn thế giới đang lấn tới từ các vách cao, nơi sự im lặng chỉ bị phá vỡ bởi tiếng khai thác đá xa xa.",
        },
        {
          id: "threats",
          label: "Bên bờ tồn vong",
          title: "Chia cắt. Khai thác. Săn bắt.",
          body: "Các mối đe dọa thường vô hình cho đến khi sự im lặng trở nên tuyệt đối. Chúng ta đang chứng kiến cuộc xóa nhòa lặng lẽ của hàng thiên niên kỷ tiến hóa, trừ khi hành động ngay bây giờ.",
        },
      ],
    },
    museum: {
      badge: "Sách Đỏ Việt Nam",
      heading: "Bảo tàng Sách Đỏ",
      description:
        "Các loài động vật quý hiếm trong Sách Đỏ Việt Nam, mỗi loài là một câu chuyện về sự sống đang dần biến mất.",
      comingSoon: "MÔ HÌNH 3D SẮP RA MẮT",
      modelTitle: "Mô hình 3D",
      facts: {
        habitat: "Sinh cảnh",
        discovered: "Phát hiện",
        population: "Quần thể",
      },
      species: [
        {
          id: "saola",
          name: "Sao La",
          scientificName: "Pseudoryx nghetinhensis",
          status: "CR",
          statusLabel: "Cực kỳ nguy cấp",
          habitat: "Dãy Trường Sơn, Việt Nam và Lào",
          discovered: "1992",
          population: "Ước tính dưới 100 cá thể",
          description:
            "Kỳ lân châu Á, một trong những loài thú hiếm nhất thế giới, được phát hiện năm 1992.",
        },
        {
          id: "ca-thu-lu",
          name: "Cá Thù Lù",
          scientificName: "Heniochus",
          status: "VU",
          statusLabel: "Sẽ nguy cấp",
          habitat: "Rạn san hô, miền Trung Việt Nam",
          discovered: "Chưa rõ",
          population: "Thiếu dữ liệu",
          description:
            "Cá bướm rạn san hô với vây lưng dài đặc trưng, hiện diện trong vùng biển Việt Nam.",
        },
        {
          id: "vooc-cat-ba",
          name: "Voọc Cát Bà",
          scientificName: "Trachypithecus poliocephalus",
          status: "CR",
          statusLabel: "Cực kỳ nguy cấp",
          habitat: "Đảo Cát Bà, Hải Phòng",
          discovered: "Chưa rõ",
          population: "Khoảng 60-70 cá thể",
          description:
            "Một trong những loài linh trưởng quý hiếm nhất Trái Đất, đặc hữu đảo Cát Bà.",
        },
        {
          id: "rua-ho-guom",
          name: "Rùa Hồ Gươm",
          scientificName: "Rafetus swinhoei",
          status: "CR",
          statusLabel: "Cực kỳ nguy cấp",
          habitat: "Hồ Gươm và hồ Đồng Mô",
          discovered: "Chưa rõ",
          population: "Không quá 4 cá thể toàn cầu",
          description:
            "Rùa giải Hồ Gươm huyền thoại, biểu tượng gắn với lịch sử độc lập của Việt Nam.",
        },
        {
          id: "te-te",
          name: "Tê Tê Java",
          scientificName: "Manis javanica",
          status: "CR",
          statusLabel: "Cực kỳ nguy cấp",
          habitat: "Rừng thấp, Nam Việt Nam",
          discovered: "Chưa rõ",
          population: "Suy giảm nhanh chóng",
          description:
            "Tê tê Sunda, một trong những loài động vật bị buôn bán trái phép nhiều nhất thế giới.",
        },
        {
          id: "vuon-den",
          name: "Vượn Đen Má Trắng",
          scientificName: "Nomascus leucogenys",
          status: "CR",
          statusLabel: "Cực kỳ nguy cấp",
          habitat: "Bắc Việt Nam và Lào",
          discovered: "Chưa rõ",
          population: "Ước tính dưới 500 cá thể",
          description:
            "Vượn đen má trắng phương Bắc, nổi tiếng với tiếng hót buổi sáng đặc trưng.",
        },
      ],
    },
    cta: {
      heading: "Vẫn còn thời gian.",
      body: "Đồng hành cùng kiểm lâm. Hỗ trợ phục hồi sinh cảnh. Đừng để tán rừng biến mất trong im lặng.",
      button: "Bảo vệ sự im lặng",
    },
    footer: {
      copyright:
        "© 2026 Eneden. Dành tặng những khu rừng nguyên sinh Việt Nam.",
      links: ["Dữ liệu khoa học", "Quyền riêng tư", "Liên hệ"],
    },
    stubs: {
      details: "Chi tiết",
      map: "Bản đồ",
    },
  },
  en: {
    metadata: {
      title: "Eneden",
      description:
        "An immersive journey into the heart of Vietnam's disappearing primary forests.",
    },
    language: {
      label: "Language",
      vi: "Tiếng Việt",
      en: "English",
      zh: "中文",
    },
    nav: {
      logoAlt: "Eneden logo",
      links: [
        { href: "#hero", label: "The Forest" },
        { href: "#species", label: "Species" },
        { href: "#museum", label: "Red Data Book" },
        { href: "#action", label: "Conservation" },
      ],
      learn: "Learn More",
      protect: "Protect Now",
      openMenu: "Open nav menu",
      closeMenu: "Close nav menu",
    },
    hero: {
      heading: "The Forest is Whispering... Goodbye.",
      subtitle:
        "An immersive journey into the heart of Vietnam's disappearing primary forests.",
    },
    quote:
      "Listen closely. Beneath the hum of the modern world, the ancient lungs of Southeast Asia are drawing shallow breaths. The primary forests of Vietnam, once a vast, emerald sea, are shrinking into isolated islands of mist and memory.",
    story: {
      panels: [
        {
          id: "intro",
          label: "Ghosts of the Canopy",
          title: "Giants of the Mist",
          body: "Deep in the Annamite Range, creatures older than memory move through forests shrinking by the day. Each step brings us closer to the edge of their world, and ours.",
        },
        {
          id: "saola",
          label: "Critically Endangered",
          title: "The Saola",
          body: "The Asian Unicorn, discovered only in 1992. Fewer than 100 may remain. It slips through dense foliage like a spirit, a quiet observer of its vanishing realm.",
        },
        {
          id: "langur",
          label: "Endangered",
          title: "Delacour's Langur",
          body: "A strikingly patterned primate confined to isolated limestone karst forests. They watch the encroaching world from high ledges, their silence broken only by distant quarrying.",
        },
        {
          id: "threats",
          label: "The Edge of Existence",
          title: "Fragmentation. Logging. Poaching.",
          body: "The threats are invisible until the silence becomes absolute. We are witnessing the quiet erasure of millennia of evolution, unless we act now.",
        },
      ],
    },
    museum: {
      badge: "Vietnam Red Data Book",
      heading: "Red Data Book Museum",
      description:
        "Rare animals listed in the Vietnam Red Data Book, each one a story of life slowly disappearing.",
      comingSoon: "3D MODEL COMING SOON",
      modelTitle: "3D Model",
      facts: {
        habitat: "Habitat",
        discovered: "Discovered",
        population: "Population",
      },
      species: [
        {
          id: "saola",
          name: "Saola",
          scientificName: "Pseudoryx nghetinhensis",
          status: "CR",
          statusLabel: "Critically Endangered",
          habitat: "Annamite Range, Vietnam and Laos",
          discovered: "1992",
          population: "Estimated under 100 individuals",
          description:
            "The Asian Unicorn, one of the rarest mammals on Earth, first documented in 1992.",
        },
        {
          id: "ca-thu-lu",
          name: "Bannerfish",
          scientificName: "Heniochus",
          status: "VU",
          statusLabel: "Vulnerable",
          habitat: "Coral reefs, central Vietnam",
          discovered: "Unknown",
          population: "Data deficient",
          description:
            "A coral reef butterflyfish with a distinctive trailing dorsal fin, found in Vietnamese waters.",
        },
        {
          id: "vooc-cat-ba",
          name: "Cat Ba Langur",
          scientificName: "Trachypithecus poliocephalus",
          status: "CR",
          statusLabel: "Critically Endangered",
          habitat: "Cat Ba Island, Hai Phong",
          discovered: "Unknown",
          population: "About 60-70 individuals",
          description:
            "One of the rarest primates on Earth, endemic to Cat Ba Island.",
        },
        {
          id: "rua-ho-guom",
          name: "Hoan Kiem Turtle",
          scientificName: "Rafetus swinhoei",
          status: "CR",
          statusLabel: "Critically Endangered",
          habitat: "Hoan Kiem Lake and Dong Mo Lake",
          discovered: "Unknown",
          population: "No more than 4 globally",
          description:
            "The legendary Hoan Kiem softshell turtle, a symbol tied to Vietnam's independence history.",
        },
        {
          id: "te-te",
          name: "Sunda Pangolin",
          scientificName: "Manis javanica",
          status: "CR",
          statusLabel: "Critically Endangered",
          habitat: "Lowland forests, southern Vietnam",
          discovered: "Unknown",
          population: "Rapidly declining",
          description:
            "The Sunda pangolin, among the most heavily trafficked animals in the world.",
        },
        {
          id: "vuon-den",
          name: "Northern White-cheeked Gibbon",
          scientificName: "Nomascus leucogenys",
          status: "CR",
          statusLabel: "Critically Endangered",
          habitat: "Northern Vietnam and Laos",
          discovered: "Unknown",
          population: "Estimated under 500 individuals",
          description:
            "A northern white-cheeked gibbon known for its distinctive morning song.",
        },
      ],
    },
    cta: {
      heading: "There is Still Time.",
      body: "Stand with the rangers. Support habitat restoration. Refuse to let the canopy vanish without a sound.",
      button: "Protect the Silence",
    },
    footer: {
      copyright: "© 2026 Eneden. Dedicated to the primary forests of Vietnam.",
      links: ["Scientific Data", "Privacy Policy", "Contact Agency"],
    },
    stubs: {
      details: "Details",
      map: "Map",
    },
  },
  zh: {
    metadata: {
      title: "Eneden",
      description: "一段深入越南正在消失的原始森林核心的沉浸式旅程。",
    },
    language: {
      label: "语言",
      vi: "Tiếng Việt",
      en: "English",
      zh: "中文",
    },
    nav: {
      logoAlt: "Eneden 标志",
      links: [
        { href: "#hero", label: "森林" },
        { href: "#species", label: "珍稀物种" },
        { href: "#museum", label: "红皮书" },
        { href: "#action", label: "保护" },
      ],
      learn: "了解更多",
      protect: "立即行动",
      openMenu: "打开导航菜单",
      closeMenu: "关闭导航菜单",
    },
    hero: {
      heading: "森林正在低语……告别。",
      subtitle: "一段深入越南正在消失的原始森林核心的沉浸式旅程。",
    },
    quote:
      "请仔细聆听。在现代世界的喧嚣之下，东南亚古老的肺叶正变得呼吸微弱。越南的原始森林曾是一片辽阔的翡翠之海，如今正收缩成雾与记忆中的孤岛。",
    story: {
      panels: [
        {
          id: "intro",
          label: "树冠下的幽影",
          title: "雾中的巨灵",
          body: "在安南山脉深处，比记忆更古老的生灵仍穿行于日渐缩小的森林。每一步都让我们更接近它们世界的边缘，也更接近我们自身的边缘。",
        },
        {
          id: "saola",
          label: "极危",
          title: "中南大羚",
          body: "亚洲独角兽，直到 1992 年才被发现。现存数量可能不足 100 只。它像幽灵般掠过浓密枝叶，静静注视着自己的栖息王国消失。",
        },
        {
          id: "langur",
          label: "濒危",
          title: "德氏叶猴",
          body: "这种花纹醒目的灵长类只栖息在被割裂的石灰岩喀斯特森林中。它们从高处岩壁凝望逼近的世界，沉默偶尔被远处采石声打破。",
        },
        {
          id: "threats",
          label: "存亡边缘",
          title: "破碎化。砍伐。偷猎。",
          body: "威胁往往隐而不见，直到沉默变得绝对。我们正在目睹数千年进化被悄然抹去，除非现在行动。",
        },
      ],
    },
    museum: {
      badge: "越南红皮书",
      heading: "红皮书博物馆",
      description:
        "越南红皮书中的珍稀动物，每一个物种都是关于生命逐渐消失的故事。",
      comingSoon: "3D 模型即将推出",
      modelTitle: "3D 模型",
      facts: {
        habitat: "栖息地",
        discovered: "发现时间",
        population: "种群",
      },
      species: [
        {
          id: "saola",
          name: "中南大羚",
          scientificName: "Pseudoryx nghetinhensis",
          status: "CR",
          statusLabel: "极危",
          habitat: "越南和老挝的安南山脉",
          discovered: "1992",
          population: "估计少于 100 只",
          description:
            "亚洲独角兽，地球上最稀有的哺乳动物之一，首次记录于 1992 年。",
        },
        {
          id: "ca-thu-lu",
          name: "马夫鱼",
          scientificName: "Heniochus",
          status: "VU",
          statusLabel: "易危",
          habitat: "越南中部珊瑚礁",
          discovered: "未知",
          population: "数据不足",
          description: "一种珊瑚礁蝴蝶鱼，拥有醒目的长背鳍，可见于越南海域。",
        },
        {
          id: "vooc-cat-ba",
          name: "吉婆叶猴",
          scientificName: "Trachypithecus poliocephalus",
          status: "CR",
          statusLabel: "极危",
          habitat: "海防吉婆岛",
          discovered: "未知",
          population: "约 60-70 只",
          description: "地球上最稀有的灵长类之一，为吉婆岛特有物种。",
        },
        {
          id: "rua-ho-guom",
          name: "还剑湖鳖",
          scientificName: "Rafetus swinhoei",
          status: "CR",
          statusLabel: "极危",
          habitat: "还剑湖和同模湖",
          discovered: "未知",
          population: "全球不超过 4 只",
          description: "传说中的还剑湖巨鳖，是与越南独立历史相连的象征。",
        },
        {
          id: "te-te",
          name: "马来穿山甲",
          scientificName: "Manis javanica",
          status: "CR",
          statusLabel: "极危",
          habitat: "越南南部低地森林",
          discovered: "未知",
          population: "快速下降",
          description: "马来穿山甲，世界上遭非法贩运最严重的动物之一。",
        },
        {
          id: "vuon-den",
          name: "北白颊长臂猿",
          scientificName: "Nomascus leucogenys",
          status: "CR",
          statusLabel: "极危",
          habitat: "越南北部和老挝",
          discovered: "未知",
          population: "估计少于 500 只",
          description: "北白颊长臂猿，以清晨独特的鸣唱而闻名。",
        },
      ],
    },
    cta: {
      heading: "仍然来得及。",
      body: "与护林员并肩。支持栖息地修复。不要让树冠在无声中消失。",
      button: "守护这片寂静",
    },
    footer: {
      copyright: "© 2026 Eneden。献给越南的原始森林。",
      links: ["科学数据", "隐私政策", "联系我们"],
    },
    stubs: {
      details: "详情",
      map: "地图",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
