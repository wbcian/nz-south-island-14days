var D = [
  {
    d: "3/28",
    wd: "六",
    type: "flight",
    ch: 0,
    icon: "✈️",
    title: "台灣出發",
    loc: "",
    drv: "",
    tags: [],
    det: [{ l: "18:30", v: "✈️ NZ78 桃園 → Auckland（機上過夜）" }],
    info: [{ icon: "✈️", label: "NZ78 桃園 → Auckland 18:30" }],
  },

  {
    d: "3/29",
    wd: "日",
    type: "flight",
    ch: 0,
    icon: "✈️",
    title: "抵達紐西蘭！",
    loc: "🏨 Golden Hotel, Christchurch",
    drv: "",
    tags: [
      { t: "Riverside Market", c: "f" },
      { t: "超市大採買", c: "f" },
    ],
    det: [
      { l: "10:10", v: "抵達 Auckland" },
      { l: "13:00", v: "✈️ NZ543 轉機飛 Christchurch" },
      { l: "14:25", v: "抵達 Christchurch" },
      { l: "15:30", v: "取車、前往飯店" },
      { l: "晚上", v: "🍽️ Riverside Market 或超市採買" },
    ],
    info: [
      { icon: "✈️", label: "NZ543 Auckland → Christchurch 13:00" },
      {
        icon: "🚗",
        label: "Ezi 取車 17:00",
        sub: "訂單 628108565｜⛽ 柴油 DIESEL（黑色幫浦）",
      },
      {
        icon: "🏨",
        label: "Golden Hotel",
        sub: "229 Riccarton Rd｜📞 +64 33599188｜NZD 422.4 當天現付",
      },
      {
        icon: "🍽️",
        label: "Riverside Market",
        url: "https://www.google.com/maps/search/?api=1&query=Riverside+Market+Christchurch",
        sub: "河邊市集，多元美食",
      },
    ],
  },

  {
    d: "3/30",
    wd: "一",
    type: "longdrive",
    ch: 1,
    icon: "🚗",
    title: "穿越南阿爾卑斯山",
    loc: "🏨 Rainforest Motel, Fox Glacier",
    drv: "6.5–7hr",
    tags: [
      { t: "🪨 Castle Hill", c: "n" },
      { t: "Arthur's Pass", c: "n" },
      { t: "Otira Viaduct", c: "n" },
      { t: "Hokitika", c: "c" },
    ],
    det: [
      { l: "07:30", v: "出發！今天全程最長車程日 🚗" },
      { l: "09:00", v: "🪨 Castle Hill 壯觀巨石群（1.5–2hr）" },
      { l: "11:45", v: "🏔️ Arthur's Pass 國家公園" },
      { l: "15:00", v: "🍽️ Hokitika 午晚餐" },
      { l: "18:00", v: "抵達 Fox Glacier" },
    ],
    info: [
      {
        icon: "🏨",
        label: "Rainforest Motel ✅",
        sub: "Fox Glacier｜NZD 387.21 已付",
      },
      {
        icon: "⛽",
        label: "NPD Hokitika (24hr)",
        url: "https://www.google.com/maps/search/?api=1&query=NPD+Hokitika&query_place_id=ChIJG803aGsvL20Rr9wUBaK2jsA",
        sub: "必加滿油！過後油價貴 20–30分/L",
      },
    ],
  },

  {
    d: "3/31",
    wd: "二",
    type: "adventure",
    ch: 1,
    icon: "🧊",
    title: "Fox Glacier 冰川健行",
    loc: "🏨 Marina Terrace, Wanaka",
    drv: "4.5–5hr",
    heroAct: "🧊 Fox Glacier 冰川健行（約 4hr）",
    tags: [
      { t: "🧊 冰川健行", c: "a" },
      { t: "Lake Matheson", c: "n" },
      { t: "Kai Kikokiko", c: "f" },
    ],
    det: [
      { l: "08:50", v: "🧊 Fox Glacier 冰川健行（約 4hr）", c: "hl" },
      { l: "", v: "👨‍👩‍👧 不參加可去 Lake Matheson 鏡湖散步" },
      { l: "14:00", v: "🚗 6 號公路南下 Wanaka（沿途超美）" },
      { l: "18:30", v: "🍽️ Kai Kikokiko 慢烤肉 或 Burrito Craft" },
    ],
    info: [
      {
        icon: "🧊",
        label: "Fox Glacier Guiding ✅",
        sub: "08:30 集合｜約 4hr｜爸媽可去 Lake Matheson",
      },
      {
        icon: "🏨",
        label: "Marina Terrace",
        url: "https://www.google.com/maps/search/?api=1&query=Marina+Terrace+Wanaka&query_place_id=ChIJS-a9UuFP1akRWCOq35ngxgs",
        sub: "65 Lakeside Rd, Wanaka",
      },
      {
        icon: "🍽️",
        label: "Kai Kikokiko",
        url: "https://www.google.com/maps/search/?api=1&query=Kai+Kikokiko+Wanaka&query_place_id=ChIJBZbXK1NP1akROjJMgx6Wms0",
        sub: "16–20:30，週三休",
      },
      {
        icon: "⛽",
        label: "Haast 加油站（應急）",
        sub: "油量低於半箱才補，價格偏高",
      },
    ],
  },

  {
    d: "4/1",
    wd: "三",
    type: "adventure",
    ch: 1,
    icon: "🏔️",
    title: "Roy's Peak 健行日",
    loc: "🏨 Marina Terrace（續住）",
    drv: "",
    heroAct: "🥾 Roy's Peak 登頂（16km / 5–6hr）",
    tags: [
      { t: "🥾 Roy's Peak 16km", c: "a" },
      { t: "Curbside Coffee", c: "f" },
      { t: "Bistro Gentil", c: "f" },
    ],
    det: [
      { l: "早上", v: "☕ Curbside Coffee & Bagels" },
      { l: "07:30", v: "🏔️ Roy's Peak（5–6hr / 16km）", c: "hl" },
      { l: "", v: "⚠️ 帶登山杖、護膝、水、補給品" },
      { l: "下午", v: "休息 / Wanaka 湖畔散步" },
      { l: "18:00", v: "🍽️ Bistro Gentil 晚餐", c: "hl" },
    ],
    info: [
      {
        icon: "🏨",
        label: "Marina Terrace（續住）",
        url: "https://www.google.com/maps/search/?api=1&query=Marina+Terrace+Wanaka&query_place_id=ChIJS-a9UuFP1akRWCOq35ngxgs",
      },
      {
        icon: "☕",
        label: "Curbside Coffee & Bagels",
        url: "https://www.google.com/maps/search/?api=1&query=Curbside+Coffee+Bagels+Wanaka",
        sub: "早餐外帶上山",
      },
      {
        icon: "🍽️",
        label: "Bistro Gentil ✅",
        url: "https://maps.app.goo.gl/dLt2wKLjP1irvciu6",
        sub: "18:00 晚餐",
      },
    ],
  },

  {
    d: "4/2",
    wd: "四",
    type: "leisure",
    ch: 2,
    icon: "🚗",
    title: "前進皇后鎮！",
    loc: "🏨 LakeRidge Queenstown（住 3 晚）",
    drv: "~1hr",
    tags: [
      { t: "🍔 Fergburger", c: "f" },
      { t: "🚡 Gondola & Luge", c: "a" },
      { t: "Willow Tree", c: "n" },
    ],
    det: [
      { l: "11:30", v: "🍔 Fergburger — 皇后鎮必吃漢堡！", c: "hl" },
      { l: "12:30", v: "🛒 超市採購（有亞洲超市）" },
      { l: "15:00", v: "Check-in 放行李" },
      { l: "16:00", v: "🚡 Gondola 纜車 + Luge 溜溜車 🌅", c: "hl" },
    ],
    info: [
      {
        icon: "🏨",
        label: "LakeRidge Queenstown",
        url: "https://www.google.com/maps/search/?api=1&query=LakeRidge+Queenstown&query_place_id=ChIJ80FKHn4d1akROuKJJyeUkpY",
        sub: "51 Thompson St｜Check-in 15:00",
      },
      {
        icon: "⛽",
        label: "NPD Frankton 加滿油",
        url: "https://www.google.com/maps/search/?api=1&query=NPD+Frankton&query_place_id=ChIJpZLBPFEe1akRqKakG-EnnmY",
        sub: "比 Wanaka 便宜約 10分/L",
      },
      {
        icon: "🍔",
        label: "Fergburger ⚠️ 需電話預約",
        url: "https://www.google.com/maps/search/?api=1&query=Fergburger+Queenstown",
      },
    ],
  },

  {
    d: "4/3",
    wd: "五",
    type: "adventure",
    ch: 2,
    icon: "🚤",
    title: "Shotover Jet + 探索",
    loc: "🏨 LakeRidge Queenstown（續住）",
    drv: "",
    heroAct: "🚤 Shotover Jet 峽谷飆速！",
    tags: [
      { t: "🚤 Shotover Jet", c: "a" },
      { t: "Arrowtown", c: "c" },
      { t: "Glenorchy", c: "n" },
    ],
    det: [
      { l: "10:00", v: "🚤 Shotover Jet 峽谷飆速！", c: "hl" },
      { l: "12:00", v: "🍽️ 午餐" },
      { l: "下午", v: "🏘️ Arrowtown 或 Glenorchy（擇一）" },
    ],
    info: [
      { icon: "🚤", label: "Shotover Jet ✅ 已付款", sub: "10:00 出發" },
      {
        icon: "🏨",
        label: "LakeRidge Queenstown（續住）",
        url: "https://www.google.com/maps/search/?api=1&query=LakeRidge+Queenstown&query_place_id=ChIJ80FKHn4d1akROuKJJyeUkpY",
      },
    ],
  },

  {
    d: "4/4",
    wd: "六",
    type: "leisure",
    ch: 2,
    icon: "🛍️",
    title: "Queenstown 悠閒日",
    loc: "🏨 LakeRidge Queenstown（續住）",
    drv: "",
    tags: [
      { t: "☕ Odd Saint", c: "f" },
      { t: "🥾 QT Hill", c: "a" },
      { t: "🍽️ Rata Restaurant", c: "f" },
      { t: "🛍️ 購物", c: "c" },
      { t: "🌌 極光機會", c: "s" },
    ],
    det: [
      { l: "08:30", v: "☕ Odd Saint 早餐" },
      { l: "10:00", v: "🥾 Queenstown Hill 輕鬆步道" },
      { l: "下午", v: "🛍️ Queenstown Mall 購物" },
      { l: "17:30", v: "🍽️ Rata Restaurant 晚餐（5 位）", c: "hl" },
    ],
    info: [
      {
        icon: "🍽️",
        label: "Rata Restaurant ✅",
        url: "https://www.google.com/maps/search/?api=1&query=Rata+Restaurant+Queenstown",
        sub: "Ref: 69693936｜📞 +643-4429393｜⚠️ 12hr 內取消 = $100/人",
      },
      {
        icon: "🏨",
        label: "LakeRidge Queenstown（續住）",
        url: "https://www.google.com/maps/search/?api=1&query=LakeRidge+Queenstown&query_place_id=ChIJ80FKHn4d1akROuKJJyeUkpY",
      },
      {
        icon: "☕",
        label: "Odd Saint 早餐",
        url: "https://www.google.com/maps/search/?api=1&query=Odd+Saint+Queenstown&query_place_id=ChIJA8EbBLEd1akRJbkD-mmn_lA",
      },
      {
        icon: "🌌",
        label: "南極光觀測推薦點",
        sub: "最佳時間 22:00–02:00，面朝南方天空",
      },
      {
        icon: "📍",
        label: "Lake Hayes",
        url: "https://www.google.com/maps/search/?api=1&query=Lake+Hayes+Queenstown",
        sub: "離市區車程 15 分鐘，湖面倒映極光，光害低",
      },
      {
        icon: "📍",
        label: "Moke Lake",
        url: "https://www.google.com/maps/search/?api=1&query=Moke+Lake+Queenstown",
        sub: "遠離市區燈光，湖畔視野開闊",
      },
      {
        icon: "📍",
        label: "Bob's Cove",
        url: "https://www.google.com/maps/search/?api=1&query=Bobs+Cove+Queenstown",
        sub: "Glenorchy 方向，沿途光害極低",
      },
    ],
  },

  {
    d: "4/5",
    wd: "日",
    type: "adventure",
    ch: 3,
    icon: "🚗",
    title: "前往 Mt. Cook",
    loc: "🏨 The Lakes Motel, Twizel",
    drv: "2.5–3hr",
    heroAct: "🥾 Hooker Valley Track（來回 3hr）",
    tags: [
      { t: "🍒 Cromwell 水果", c: "f" },
      { t: "🐟 Salmon", c: "f" },
      { t: "🥾 Hooker Valley", c: "a" },
      { t: "🌌 極光機會", c: "s" },
    ],
    det: [
      {
        l: "10:30",
        v: "🍒 Cromwell 水果攤 + Jackson Orchard（冰淇淋！）",
      },
      { l: "12:30", v: "🐟 High Country Salmon 生鮭魚午餐", c: "hl" },
      { l: "14:30", v: "🥾 Hooker Valley Track（來回 3hr）", c: "hl" },
      { l: "晚上", v: "🌟 Mt. Cook 暗空保護區看星星 / 🌌 留意南極光！" },
    ],
    info: [
      {
        icon: "🏨",
        label: "The Lakes Motel Twizel",
        url: "https://www.google.com/maps/search/?api=1&query=The+Lakes+Motel+Twizel&query_place_id=ChIJEcBsq-IfK20RxoNUCErWkF8",
        sub: "10 MacKenzie Dr, Twizel｜復活節 Mt. Cook 已滿",
      },
      {
        icon: "⛽",
        label: "McKeown 24/7 Twizel",
        url: "https://www.google.com/maps/search/?api=1&query=McKeown+Petroleum+Twizel&query_place_id=ChIJh9wxRfwfK20RIodAfo9kTco",
        sub: "24hr 自助，價格低｜Mt. Cook 無加油站",
      },
      {
        icon: "🐟",
        label: "High Country Salmon",
        url: "https://www.google.com/maps/search/?api=1&query=High+Country+Salmon+Twizel",
        sub: "新鮮生鮭魚，路過必停",
      },
      {
        icon: "🍒",
        label: "Jackson Orchard",
        url: "https://www.google.com/maps/search/?api=1&query=Jackson+Orchard+Cromwell",
        sub: "Cromwell 果園，冰淇淋必吃",
      },
      {
        icon: "🌌",
        label: "南極光觀測推薦點（Twizel 就能看！）",
        sub: "Aoraki Mackenzie 暗天保護區內，不必開去 Mt. Cook。最佳時間 22:30–02:00",
      },
      {
        icon: "📍",
        label: "Lake Ruataniwha 湖畔",
        url: "https://www.google.com/maps/search/?api=1&query=Lake+Ruataniwha+Twizel",
        sub: "Twizel 車程 7 分鐘，攝影師熱門極光拍攝點，朝南視野開闊",
      },
      {
        icon: "📍",
        label: "Wairepo Arm",
        url: "https://www.google.com/maps/search/?api=1&query=Wairepo+Arm+Twizel",
        sub: "Lake Ruataniwha 的一部分，Twizel 鎮旁步行可達，湖面倒映極光",
      },
    ],
  },

  {
    d: "4/6",
    wd: "一",
    type: "adventure",
    ch: 3,
    icon: "🛶",
    title: "冰河探索 → Lake Tekapo",
    loc: "🏨 Great Scott, Lake Tekapo（住 2 晚）",
    drv: "~1hr",
    heroAct: "🛶 Glacier Explorers 冰川船！",
    tags: [
      { t: "🛶 Glacier Explorers", c: "a" },
      { t: "⛪ 牧人教堂", c: "c" },
      { t: "🌟 星空", c: "s" },
      { t: "🌌 極光機會", c: "s" },
    ],
    det: [
      { l: "09:45", v: "🛶 Glacier Explorers 冰川船！", c: "hl" },
      { l: "13:30", v: "🚗 前往 Lake Tekapo" },
      { l: "下午", v: "⛪ 牧人教堂 + 湖邊散步" },
      { l: "晚上", v: "🌟 暗空保護區觀星 — 世界級星空！🌌 有機會看到南極光" },
    ],
    info: [
      {
        icon: "🛶",
        label: "Glacier Explorers ✅ 已付款",
        url: "https://maps.app.goo.gl/9XM1K45QgKTkXUQo7",
        sub: "09:45 出發",
      },
      {
        icon: "🏨",
        label: "Great Scott",
        url: "https://www.google.com/maps/search/?api=1&query=Great+Scott+Lake+Tekapo&query_place_id=ChIJw0djCgR1K20RoS6UG2eGfzg",
        sub: "34 Scott St, Lake Tekapo",
      },
      {
        icon: "🌌",
        label: "南極光觀測推薦點",
        sub: "Lake Tekapo 全區光害極低，最佳時間 22:00–02:00",
      },
      {
        icon: "📍",
        label: "牧人教堂（Church of the Good Shepherd）",
        url: "https://www.google.com/maps/search/?api=1&query=Church+of+the+Good+Shepherd+Lake+Tekapo",
        sub: "極光 + 教堂是經典構圖！湖畔朝南方向",
      },
      {
        icon: "📍",
        label: "Mt. John Observatory 山頂",
        url: "https://www.google.com/maps/search/?api=1&query=Mt+John+Observatory+Lake+Tekapo",
        sub: "1,029m 山頂 360° 無遮擋視野，需確認夜間是否開放",
      },
    ],
  },

  {
    d: "4/7",
    wd: "二",
    type: "stargazing",
    ch: 3,
    icon: "🌟",
    title: "Lake Tekapo 觀星日",
    loc: "🏨 Great Scott（續住）",
    drv: "",
    tags: [
      { t: "🚶 Peninsula Walkway", c: "n" },
      { t: "🔭 Mt. John", c: "s" },
      { t: "☕ Astro Cafe", c: "f" },
      { t: "🌟 觀星 21:45", c: "s" },
      { t: "🌌 極光機會", c: "s" },
    ],
    det: [
      { l: "09:30", v: "🚶 Peninsula Walkway 半島步道" },
      {
        l: "13:30",
        v: "🔭 Mt. John Observatory + Astro Cafe（山頂絕景！）",
        c: "hl",
      },
      { l: "下午", v: "湖邊放空 / 自由活動" },
      { l: "21:45", v: "🌟 變色龍觀星團 — 專業導覽觀星", c: "hl" },
    ],
    info: [
      { icon: "🌟", label: "變色龍觀星團 ✅", sub: "21:45 場次｜已報名" },
      {
        icon: "🌌",
        label: "今晚是最佳極光觀測夜！",
        sub: "觀星團結束（約 23:30）後可到牧人教堂湖畔繼續等待，午夜前後是極光最活躍時段。推薦 App：Aurora Go 即時預報（Kp≥5 就值得守候！）",
      },
      {
        icon: "📍",
        label: "牧人教堂湖畔（觀星後步行前往）",
        url: "https://www.google.com/maps/search/?api=1&query=Church+of+the+Good+Shepherd+Lake+Tekapo",
        sub: "觀星結束後最佳極光等候點，朝南方向湖畔",
      },
      {
        icon: "🏨",
        label: "Great Scott（續住）",
        url: "https://www.google.com/maps/search/?api=1&query=Great+Scott+Lake+Tekapo&query_place_id=ChIJw0djCgR1K20RoS6UG2eGfzg",
      },
      {
        icon: "☕",
        label: "Astro Cafe",
        url: "https://www.google.com/maps/search/?api=1&query=Astro+Cafe+Mt+John+Lake+Tekapo",
        sub: "Mt. John 山頂，景色絕美",
      },
    ],
  },

  {
    d: "4/8",
    wd: "三",
    type: "longdrive",
    ch: 4,
    icon: "🚗",
    title: "回到 Christchurch",
    loc: "🏨 Bella Vista Motel, Christchurch",
    drv: "~3hr",
    tags: [
      { t: "🥧 Fairlie Bakery", c: "f" },
      { t: "Riverside Market", c: "f" },
    ],
    det: [
      {
        l: "10:30",
        v: "🥧 Fairlie Bakery — 必吃 Porkbelly 肉派！",
        c: "hl",
      },
      { l: "13:00", v: "🍽️ Riverside Market 午餐" },
      { l: "下午", v: "Christchurch 市區散步" },
      { l: "晚上", v: "🧳 收拾打包" },
    ],
    info: [
      {
        icon: "🏨",
        label: "Bella Vista Motel",
        url: "https://www.google.com/maps/search/?api=1&query=Bella+Vista+Motel+Christchurch&query_place_id=ChIJY5Xl3y2KMW0Rh4_fGGaOsY0",
        sub: "193 Bealey Ave, Christchurch",
      },
      {
        icon: "🥧",
        label: "Fairlie Bakery",
        url: "https://www.google.com/maps/search/?api=1&query=Fairlie+Bakehouse",
        sub: "必吃 Porkbelly 肉派",
      },
      {
        icon: "🍽️",
        label: "Riverside Market",
        url: "https://www.google.com/maps/search/?api=1&query=Riverside+Market+Christchurch",
        sub: "午餐",
      },
    ],
  },

  {
    d: "4/9",
    wd: "四",
    type: "flight",
    ch: 4,
    icon: "✈️",
    title: "飛 Auckland",
    loc: "🏨 JetPark Auckland Airport",
    drv: "",
    tags: [],
    det: [
      { l: "上午", v: "Christchurch 最後閒逛" },
      { l: "13:00", v: "✈️ NZ554 → Auckland (到機場，15:00 飛奧克蘭)" },
      { l: "16:00", v: "JetPark Check-in（免費機場 Shuttle）" },
    ],
    info: [
      {
        icon: "⛽",
        label: "BP Russley Rd（還車前加滿）",
        url: "https://www.google.com/maps/search/?api=1&query=BP+Russley+Road+Christchurch&query_place_id=ChIJXVTwYK70MW0RzEiO2fE705w",
        sub: "24hr，近機場，海外卡可用",
      },
      {
        icon: "🚗",
        label: "Ezi 還車 11:30",
        sub: "CHC Airport，Novotel 後方停車場",
      },
      { icon: "✈️", label: "NZ554 Christchurch → Auckland 13:00" },
      {
        icon: "🏨",
        label: "JetPark Auckland Airport",
        url: "https://www.google.com/maps/search/?api=1&query=JetPark+Auckland+Airport&query_place_id=ChIJfU5sqJlPDW0RR8ciVCBjIOw",
        sub: "63 Westney Rd, Māngere｜免費 Shuttle",
      },
    ],
  },

  {
    d: "4/10",
    wd: "五",
    type: "flight",
    ch: 4,
    icon: "✈️",
    title: "回家！",
    loc: "",
    drv: "",
    tags: [],
    det: [
      { l: "09:40", v: "✈️ NZ77 Auckland → Taipei（11.5hr）" },
      { l: "17:05", v: "🏠 抵達桃園 — 歡迎回家！" },
    ],
    info: [
      {
        icon: "✈️",
        label: "NZ77 Auckland → Taipei 09:40",
        sub: "飛行約 11.5hr",
      },
    ],
  },
];

var chapters = [
  {
    name: "序章",
    sub: "出發",
    route: "台灣 → Auckland → Christchurch",
    color: "var(--ch1)",
    days: [0, 1],
  },
  {
    name: "西海岸",
    sub: "冰川與山脈",
    route:
      "Christchurch → Castle Hill → Arthur's Pass → Hokitika → Fox Glacier → Wanaka",
    color: "var(--ch2)",
    days: [2, 3, 4],
  },
  {
    name: "皇后鎮",
    sub: "冒險之都",
    route: "Wanaka → Queenstown（3 晚）",
    color: "var(--ch3)",
    days: [5, 6, 7],
  },
  {
    name: "山湖",
    sub: "壯闊秘境",
    route: "Queenstown → Mt. Cook → Lake Tekapo",
    color: "var(--ch4)",
    days: [8, 9, 10],
  },
  {
    name: "歸途",
    sub: "回程",
    route: "Lake Tekapo → Christchurch → Auckland → 台灣",
    color: "var(--ch5)",
    days: [11, 12, 13],
  },
];

var mainEl = document.getElementById("main");

chapters.forEach(function (ch, ci) {
  var sec = document.createElement("section");
  sec.className = "chapter";
  sec.id = "ch-" + ci;
  sec.style.setProperty("--ch-color", ch.color);
  var html =
    '<div class="ch-hdr" data-anim>' +
    '<span class="ch-num">Ch.' +
    (ci + 1) +
    "</span>" +
    '<span class="ch-title">' +
    ch.name +
    '<span class="ch-sub">' +
    ch.sub +
    "</span></span>" +
    "</div>" +
    '<div class="ch-route" data-anim>' +
    ch.route +
    "</div>";

  ch.days.forEach(function (di, idx) {
    var day = D[di];
    var tags = day.tags
      .map(function (t) {
        return '<span class="tag tag-' + t.c + '">' + t.t + "</span>";
      })
      .join("");
    var tl = day.det
      .map(function (r) {
        return (
          '<div class="tl-row"><span class="tl-time">' +
          r.l +
          '</span><span class="tl-val' +
          (r.c ? " " + r.c : "") +
          '">' +
          r.v +
          "</span></div>"
        );
      })
      .join("");
    var heroA =
      day.type === "adventure" && day.heroAct
        ? '<div class="hero-act">' + day.heroAct + "</div>"
        : "";
    var starsH = "";
    if (day.type === "stargazing") {
      var s = "";
      for (var k = 0; k < 22; k++)
        s +=
          '<div class="st" style="top:' +
          Math.random() * 100 +
          "%;left:" +
          Math.random() * 100 +
          "%;animation-delay:" +
          Math.random() * 3 +
          's"></div>';
      starsH = '<div class="stars">' + s + "</div>";
    }

    var infoPanel = "";
    if (day.info && day.info.length) {
      infoPanel =
        '<div class="day-info-panel">' +
        day.info
          .map(function (item) {
            var content = item.url
              ? '<a href="' +
                item.url +
                '" target="_blank" rel="noopener">' +
                item.label +
                "</a>"
              : item.label;
            return (
              '<div class="info-row">' +
              '<span class="info-icon">' +
              item.icon +
              "</span>" +
              '<div class="info-content">' +
              '<div class="info-label">' +
              content +
              "</div>" +
              (item.sub ? '<div class="info-sub">' + item.sub + "</div>" : "") +
              "</div></div>"
            );
          })
          .join("") +
        "</div>";
    }
    var toggleBtn =
      day.info && day.info.length
        ? '<button class="day-toggle" aria-label="展開詳細資訊"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></button>'
        : "";

    html +=
      '<div class="day-entry type-' +
      day.type +
      '" data-anim style="transition-delay:' +
      idx * 0.07 +
      's">' +
      starsH +
      '<div class="day-head">' +
      '<span class="day-badge">' +
      day.d +
      "（" +
      day.wd +
      "）</span>" +
      '<div class="day-info">' +
      '<div class="day-title">' +
      day.icon +
      " " +
      day.title +
      "</div>" +
      (day.loc ? '<div class="day-loc">' + day.loc + "</div>" : "") +
      (day.drv ? '<div class="day-drive">🚗 約 ' + day.drv + "</div>" : "") +
      "</div>" +
      toggleBtn +
      "</div>" +
      heroA +
      (tl ? '<div class="day-tl">' + tl + "</div>" : "") +
      (tags ? '<div class="day-tags">' + tags + "</div>" : "") +
      infoPanel +
      "</div>";
  });

  sec.innerHTML = html;
  mainEl.appendChild(sec);
});

/* ── Info panel toggle ── */
mainEl.addEventListener("click", function (e) {
  if (e.target.closest("a")) return;
  if (e.target.closest(".day-info-panel")) return;
  var entry = e.target.closest(".day-entry");
  if (entry && entry.querySelector(".day-info-panel")) {
    entry.classList.toggle("open");
  }
});

/* ── Nav indicator ── */
var tabs = document.querySelectorAll(".nav-tab");
var ind = document.getElementById("navInd");
var navW = document.getElementById("navW");
var curCh = 0;

function setInd(i) {
  var t = tabs[i];
  if (!t) return;
  var r = t.getBoundingClientRect(),
    w = navW.getBoundingClientRect();
  ind.style.left = r.left - w.left + "px";
  ind.style.width = r.width + "px";
  document.documentElement.style.setProperty("--ch-color", chapters[i].color);
  curCh = i;
}
requestAnimationFrame(function () {
  setInd(0);
});

/* ── Scroll spy ── */
var chEls = document.querySelectorAll(".chapter");
var spy = new IntersectionObserver(
  function (es) {
    es.forEach(function (e) {
      if (e.isIntersecting) {
        var i = +e.target.id.replace("ch-", "");
        tabs.forEach(function (t, j) {
          t.classList.toggle("active", j === i);
        });
        setInd(i);
      }
    });
  },
  { rootMargin: "-48% 0px -48% 0px" }
);
chEls.forEach(function (el) {
  spy.observe(el);
});

tabs.forEach(function (t, i) {
  t.onclick = function () {
    var el = document.getElementById("ch-" + i);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
});

/* ── Fade-in on scroll ── */
var anim = new IntersectionObserver(
  function (es) {
    es.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        anim.unobserve(e.target);
      }
    });
  },
  { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
);
document.querySelectorAll("[data-anim]").forEach(function (el) {
  anim.observe(el);
});

/* ── Progress bar + Back to top (single throttled scroll handler) ── */
var pbar = document.getElementById("pbar");
var btt = document.getElementById("btt");
var tick = false;
window.addEventListener("scroll", function () {
  if (!tick) {
    requestAnimationFrame(function () {
      var s = window.scrollY,
        h = document.documentElement.scrollHeight - window.innerHeight;
      pbar.style.width = h > 0 ? Math.min((s / h) * 100, 100) + "%" : "0%";
      btt.classList.toggle("show", s > 500);
      tick = false;
    });
    tick = true;
  }
});
btt.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

/* ── Number counter ── */
function countUp(el, target, dur) {
  var t0 = null;
  function step(ts) {
    if (!t0) t0 = ts;
    var p = Math.min((ts - t0) / dur, 1),
      e = 1 - Math.pow(1 - p, 3),
      v = Math.round(e * target);
    el.textContent = target >= 1000 ? v.toLocaleString() : v;
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
var statNums = document.querySelectorAll(".stat-num[data-target]");
var sObs = new IntersectionObserver(
  function (es) {
    es.forEach(function (e) {
      if (e.isIntersecting) {
        statNums.forEach(function (el) {
          countUp(el, +el.dataset.target, 1400);
        });
        sObs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.5 }
);
var sr = document.querySelector(".stats-row");
if (sr) sObs.observe(sr);

/* ── Resize ── */
window.addEventListener("resize", function () {
  setInd(curCh);
});
