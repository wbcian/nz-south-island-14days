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
      { l: "17:00", v: "取車、前往飯店" },
      { l: "晚上", v: "🍽️ Riverside Market 或超市採買" },
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
      { l: "13:00", v: "📷 Otira Viaduct 觀景台" },
      { l: "15:00", v: "🍽️ Hokitika 午晚餐" },
      { l: "18:00", v: "抵達 Fox Glacier" },
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
      { l: "09:30", v: "🌳 Frankton Willow Tree「最孤獨的樹」" },
      { l: "11:30", v: "🍔 Fergburger — 皇后鎮必吃漢堡！", c: "hl" },
      { l: "12:30", v: "🛒 超市採購（有亞洲超市）" },
      { l: "15:00", v: "Check-in 放行李" },
      { l: "16:00", v: "🚡 Gondola 纜車 + Luge 溜溜車 🌅", c: "hl" },
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
    ],
    det: [
      { l: "08:30", v: "☕ Odd Saint 早餐" },
      { l: "10:00", v: "🥾 Queenstown Hill 輕鬆步道" },
      { l: "下午", v: "🛍️ Queenstown Mall 購物" },
      { l: "17:30", v: "🍽️ Rata Restaurant 晚餐（5 位）", c: "hl" },
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
    ],
    det: [
      {
        l: "10:30",
        v: "🍒 Cromwell 水果攤 + Jackson Orchard（冰淇淋！）",
      },
      { l: "12:30", v: "🐟 High Country Salmon 生鮭魚午餐", c: "hl" },
      { l: "14:30", v: "🥾 Hooker Valley Track（來回 3hr）", c: "hl" },
      { l: "晚上", v: "🌟 Mt. Cook 暗空保護區看星星" },
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
    heroAct: "🛶 Glacier Explorers 冰河湖泛舟！",
    tags: [
      { t: "🛶 Glacier Explorers", c: "a" },
      { t: "⛪ 善牧人教堂", c: "c" },
      { t: "🌟 星空", c: "s" },
    ],
    det: [
      { l: "09:45", v: "🛶 Glacier Explorers 冰河湖泛舟！", c: "hl" },
      { l: "13:30", v: "🚗 前往 Lake Tekapo" },
      { l: "下午", v: "⛪ 善牧人教堂 + 湖邊散步" },
      { l: "晚上", v: "🌟 暗空保護區觀星 — 世界級星空！" },
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
      { l: "13:00", v: "✈️ NZ554 → Auckland" },
      { l: "16:00", v: "JetPark Check-in（免費機場 Shuttle）" },
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

var chColors = [
  "var(--ch1)",
  "var(--ch2)",
  "var(--ch3)",
  "var(--ch4)",
  "var(--ch5)",
];
var mainEl = document.getElementById("main");

chapters.forEach(function (ch, ci) {
  var sec = document.createElement("section");
  sec.className = "chapter";
  sec.id = "ch-" + ci;
  var html =
    '<div class="ch-hdr" data-anim style="--ch-color:' +
    ch.color +
    '">' +
    '<span class="ch-num" style="color:' +
    ch.color +
    '">Ch.' +
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
        ? '<div class="hero-act" style="border-color:' +
          ch.color +
          ";--ch-color:" +
          ch.color +
          '">' +
          day.heroAct +
          "</div>"
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

    html +=
      '<div class="day-entry type-' +
      day.type +
      '" data-anim style="transition-delay:' +
      idx * 0.07 +
      "s;--ch-color:" +
      ch.color +
      '">' +
      starsH +
      '<div class="day-head">' +
      '<span class="day-badge" style="background:' +
      ch.color +
      '">' +
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
      (day.drv
        ? '<div class="day-drive">🚗 約 ' + day.drv + "</div>"
        : "") +
      "</div>" +
      "</div>" +
      heroA +
      (tl ? '<div class="day-tl">' + tl + "</div>" : "") +
      (tags ? '<div class="day-tags">' + tags + "</div>" : "") +
      "</div>";
  });

  sec.innerHTML = html;
  mainEl.appendChild(sec);
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
  document.documentElement.style.setProperty("--ch-color", chColors[i]);
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

/* ── Progress bar ── */
var pbar = document.getElementById("pbar");
var tick = false;
window.addEventListener("scroll", function () {
  if (!tick) {
    requestAnimationFrame(function () {
      var s = window.scrollY,
        h = document.documentElement.scrollHeight - window.innerHeight;
      pbar.style.width =
        h > 0 ? Math.min((s / h) * 100, 100) + "%" : "0%";
      tick = false;
    });
    tick = true;
  }
});

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
var sObs = new IntersectionObserver(
  function (es) {
    es.forEach(function (e) {
      if (e.isIntersecting) {
        document
          .querySelectorAll(".stat-num[data-target]")
          .forEach(function (el) {
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

/* ── Back to top ── */
var btt = document.getElementById("btt");
window.addEventListener("scroll", function () {
  btt.classList.toggle("show", window.scrollY > 500);
});
btt.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

/* ── Resize ── */
window.addEventListener("resize", function () {
  setInd(curCh);
});
