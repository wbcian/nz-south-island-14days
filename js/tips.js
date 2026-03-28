/* ── Tips data ── */
var TIPS = [
  {
    id: "prep",
    icon: "🛫",
    title: "行前準備",
    items: [
      { text: "離線地圖", note: "偏遠地區可能無訊號，出發前下載離線地圖或租 GPS" },
      { text: "下載 CamperMate App", note: "可查營地、加油站、廁所等資訊" },
      { text: "油量規劃", note: "偏遠地區加油站稀少，隨時注意油量並把握機會加油", links: [{ text: "加油操作參考影片", url: "https://www.youtube.com/shorts/lQrigkUw1kA" }] },
      { text: "租車確認", note: "確認車子的狀況、加油要加多少（通常 91）、還車前是否要加滿" },
      { text: "攜帶證件", note: "必須隨身攜帶有效駕照（非英文需附翻譯或國際駕照）" },
      { text: "高速公路", note: "南島高速公路多是免費的，綠底白字指示牌" },
    ],
  },
  {
    id: "checklist",
    icon: "📝",
    title: "租車檢查",
    items: [
      { text: "檢查車輛外觀", note: "取車過程中會有工作人員一同檢視，但建議用錄影方式完整記錄（尤其有明顯傷痕處 & 擋風玻璃），保護自己" },
      { text: "檢查胎紋", note: "確認胎紋是否正常、是否已快磨平" },
      { text: "檢查車燈", note: "出發前先檢查車燈、遠燈、方向燈以及剎車燈" },
      { text: "檢查空調", note: "避免夏日無冷氣、冬季無暖氣" },
      { text: "檢查剎車狀況", note: "在停車場試踩油門和剎車，提早熟悉油門和剎車的感覺" },
      { text: "熟悉導航", note: "先在停車場設定好 Apple CarPlay / Android Auto 再上路", links: [{ text: "租車公司比較與攻略", url: "https://timtingtravel.com/nz-rental-car/" }] },
    ],
  },
  {
    id: "fuel",
    icon: "⛽",
    title: "加油",
    items: [
      { text: "信用卡預借現金 PIN 碼", note: "自助加油機可能需要信用卡 PIN 碼" },
      { text: "大城市加油比較便宜", note: "也可以透過 Apps 查詢油價" },
      { text: "隨時注意油量", note: "郊區可能連訊號都沒有也沒有加油站，先確定好沿途哪裡有加油站", hl: true },
      { text: "千萬不要加錯油", note: "Diesel（柴油）、Unleaded 91（91 汽油）和 Premium 95（95 汽油）", hl: true },
      { text: "加油操作", note: "螢幕上會詢問欲加多少錢的油，可輸入指定金額或選擇加滿「Fill」" },
    ],
  },
  {
    id: "driving",
    icon: "🚗",
    title: "基本駕駛規則",
    items: [
      { text: "靠左行駛", note: "方向盤在右側", hl: true },
      { text: "所有人都必須繫安全帶" },
      { text: "不可以手持電話" },
      { text: "方向燈至少提前 3 秒打" },
      { text: "看到小動物不要按喇叭", note: "減速慢行" },
      { text: "超越腳踏車保持 1.5m 安全距離" },
      { text: "人行道", note: "沒有隆起交通島的一律要讓行人先過" },
    ],
  },
  {
    id: "speed",
    icon: "⚡",
    title: "速限與測速",
    items: [
      { text: "測速照相很密集", note: "長假期間容忍度通常只有 4 km/h", hl: true },
      { text: "進出小鎮注意速限", note: "速限常從 100 驟降到 50，請在通過標誌牌之前就將車速降至規定範圍內", hl: true },
      { text: "出彎要加速到速限", note: "不要離最高速限差太多" },
      { text: "不要擋道", note: "後方跟著 3~4 輛車以上，會被視為「不體貼駕駛」，輕則 NZ$150 罰單，重則以粗心駕駛起訴" },
    ],
  },
  {
    id: "roundabout",
    icon: "🔄",
    title: "圓環（Roundabout）",
    items: [
      { text: "一律停下確認右側來車", note: "順時針行駛", hl: true },
      { text: "第一個出口（左轉）", note: "打左轉燈" },
      { text: "第二個出口（直走）", note: "進入不打燈，離開前打左轉燈" },
      { text: "第三個出口（右轉）", note: "進入打右轉燈，離開前打左轉燈" },
    ],
  },
  {
    id: "overtaking",
    icon: "↗️",
    title: "超車",
    items: [
      { text: "基本從右側超車", note: "除非前車要右轉或停止" },
      { text: "前方 100 公尺要沒有來車", note: "彎道禁止超車" },
      { text: "車道標線辨識", note: "內虛白外實黃 → 可以超車；車道被佔用可以利用分隔帶超車" },
      { text: "禁止超越停下的車輛", note: "有因行人或鐵路停下的車輛禁止超越" },
      { text: "超車道限速 100 km/h", note: "超車完畢盡速回左側車道" },
      { text: "靠左行駛原則", note: "雙線道遇到超車道，除非超車否則一律靠左行駛" },
    ],
  },
  {
    id: "intersection",
    icon: "🔀",
    title: "路口與轉彎",
    items: [
      { text: "直行保持同一車道", note: "左側左轉、右側可右轉" },
      { text: "右轉進入單行道", note: "選最靠近自己這側的車道。大原則：外側進外側、內側進內側" },
      { text: "市區右轉可利用 Flush Median", note: "中央等待區：從小路進主幹道可暫停再匯入", links: [{ text: "轉彎官方文件", url: "https://www.nzta.govt.nz/roadcode/general-road-code/about-driving/key-driving-skills/turning" }] },
      { text: "紅燈不可左轉", note: "與台灣不同", hl: true },
    ],
  },
  {
    id: "bridge",
    icon: "🌉",
    title: "單線橋（One-Lane Bridge）",
    items: [
      { text: "藍色底", note: "你有優先路權" },
      { text: "紅色圈圈白底小紅色箭頭", note: "對方優先，你要讓行", hl: true },
    ],
  },
  {
    id: "railway",
    icon: "🚂",
    title: "鐵路平交道",
    items: [
      { text: "黃色菱形火車圖", note: "收油、準備停" },
      { text: "X 形牌（Crossbuck）", note: "當作「可能隨時要停」" },
      { text: "紅燈／鈴／柵欄任何一個動了", note: "立刻停", hl: true },
      { text: "看到 2 TRACKS", note: "第一班過後也要再看一次兩邊" },
      { text: "Keep Clear 區", note: "前方出路不確定是否能通過就不要進入" },
    ],
  },
  {
    id: "uturn",
    icon: "↩️",
    title: "迴轉（U-turn）",
    items: [
      { text: "沒有禁止就可以做", note: "但優先權最低，必須讓所有其他車輛、自行車、行人先行" },
      { text: "提早打右轉燈", note: "靠左行駛，迴轉是向右打方向盤" },
      { text: "馬路不夠寬就不要勉強", note: "可利用圓環迴轉" },
      { text: "禁止迴轉", note: "高速公路（Motorway）、No U-turn 標誌處、單行道" },
    ],
  },
  {
    id: "parking",
    icon: "🅿️",
    title: "停車",
    items: [
      { text: "靠左停車", note: "順行方向停在左側（單行道可停兩側）。逆向停車容易被開單", hl: true },
      { text: "P 標誌", note: "藍底白字，會標示星期、分鐘數限制及是否付費，超時會被開罰單" },
      { text: "先繳費制度", note: "停好車後預先規劃停留時間並繳費。近年改為「Pay by Plate（車牌繳費）」無紙化模式" },
      { text: "絕對禁止停車", note: "人行道、交通島、計程車招呼站、公車站｜距路口／行人穿越道 6m 以內｜車道出入口 1m 以內｜消防栓 50cm 以內（黃色標記）｜黃色虛線｜黃色交叉格紋" },
      { text: "時間限制", note: "若沒有特別註明確切時間，通常指 8am-6pm，其他時間不受限制", links: [{ text: "停車官方文件", url: "https://www.nzta.govt.nz/roadcode/general-road-code/about-driving/stopping-and-parking" }] },
    ],
  },
  {
    id: "buslane",
    icon: "🚌",
    title: "公車道與共乘車道",
    items: [
      { text: "Bus Lane 罰單陷阱", note: "路口上方有自動攝影機，違規約 $150 NZD", hl: true },
      { text: "左轉可切入公車道", note: "但最多 50 公尺（約 4 台公車長）。分隔線從實線變虛線或綠色油漆中斷 → 可以切入" },
      { text: "注意腳踏車共用", note: "讓腳踏車先通過" },
      { text: "沒標時段的公車道", note: "等於 24 小時運作" },
      { text: "Transit Lane T2/T3", note: "T2 = 至少 2 人、T3 = 至少 3 人。多數只在尖峰時段運作" },
    ],
  },
  {
    id: "etiquette",
    icon: "🤝",
    title: "禮儀與文化",
    items: [
      { text: "後方有車請讓道", note: "在山路開得慢且後方有車尾隨，找安全處或 Slow Vehicle Bay 靠左讓車（後方 3~4 台車就該注意了）", hl: true },
      { text: "揮手致意", note: "別人讓道或在單線橋禮讓你，當地人習慣在方向盤上抬手指或輕輕揮手表示感謝" },
      { text: "不要亂按喇叭", note: "喇叭只用於緊急警告" },
    ],
  },
  {
    id: "police",
    icon: "🚔",
    title: "警察攔檢",
    items: [
      { text: "靠左停", note: "盡量完全駛離車道" },
      { text: "停妥後", note: "熄火 → 開車內燈（夜間）→ 雙手放方向盤上" },
      { text: "留在車上", note: "準備證件、保持友善" },
      { text: "隨機攔車是正常的", note: "紐西蘭警察可無理由隨機攔車（酒測、藥駕檢測等）" },
    ],
  },
  {
    id: "resources",
    icon: "📚",
    title: "參考資源",
    items: [
      { text: "自駕攻略", links: [{ text: "紐西蘭自駕 18 件必知注意事項", url: "https://timtingtravel.com/nz-driving-tips/" }] },
      { text: "路線規劃", links: [{ text: "官方 Journey Planner", url: "https://www.journeys.nzta.govt.nz/journey-planner" }] },
      { text: "影片教學", links: [{ text: "Go Rent 影片介紹（含圓環教學）", url: "https://www.youtube.com/watch?v=w9JffsH-oRw" }] },
      { text: "官方文件", links: [
        { text: "NZTA 繁體中文 PDF", url: "https://www.nzta.govt.nz/assets/resources/driving-in-nz/docs/driving-in-nz-traditional-chinese.pdf" },
        { text: "超車規則", url: "https://www.nzta.govt.nz/roadcode/general-road-code/about-driving/key-driving-skills/passing" },
        { text: "所有駕駛技巧規則", url: "https://www.nzta.govt.nz/roadcode/general-road-code/about-driving/key-driving-skills" },
        { text: "主要標誌類型", url: "https://nzta.govt.nz/roadcode/general-road-code/about-signs/main-types-of-signs#temporary_signs" },
        { text: "限速標誌", url: "https://nzta.govt.nz/roadcode/general-road-code/about-limits/speed-limits#open_road" },
        { text: "讓路規則", url: "https://nzta.govt.nz/roadcode/general-road-code/about-driving/giving-way/the-give-way-rules#reading_traffic_signals" },
      ] },
      { text: "線上測驗", links: [
        { text: "官方題庫", url: "https://nzta.govt.nz/roadcode/theory-test-questions/general-questions/signs-and-markings-questions" },
        { text: "Driving Tests NZ", url: "https://www.drivingtests.co.nz/roadcode/car/" },
      ] },
    ],
  },
];

/* ── Render ── */
(function () {
  var mainEl = document.getElementById("tips-main");
  var pillsEl = document.getElementById("tips-pills");

  /* Build pill tabs */
  TIPS.forEach(function (sec) {
    var btn = document.createElement("button");
    btn.className = "tips-pill";
    btn.textContent = sec.icon + " " + sec.title;
    btn.dataset.target = sec.id;
    btn.onclick = function () {
      var el = document.getElementById("sec-" + sec.id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    };
    pillsEl.appendChild(btn);
  });

  /* Build sections */
  TIPS.forEach(function (sec) {
    var html = '<div class="tips-sec" id="sec-' + sec.id + '">' +
      '<button class="tips-sec-head" aria-expanded="true">' +
      '<span class="tips-sec-icon">' + sec.icon + '</span>' +
      '<span class="tips-sec-title">' + sec.title + '</span>' +
      '<svg class="tips-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>' +
      '</button>' +
      '<div class="tips-sec-body open">';

    sec.items.forEach(function (item) {
      var cls = item.hl ? " tips-item-hl" : "";
      html += '<div class="tips-item' + cls + '">';
      html += '<div class="tips-item-text">' + item.text + '</div>';
      if (item.note) {
        html += '<div class="tips-item-note">' + item.note + '</div>';
      }
      if (item.links && item.links.length) {
        html += '<div class="tips-item-links">';
        item.links.forEach(function (lk) {
          html += '<a href="' + lk.url + '" target="_blank" rel="noopener">' + lk.text + ' ↗</a>';
        });
        html += '</div>';
      }
      html += '</div>';
    });

    html += '</div></div>';
    mainEl.insertAdjacentHTML("beforeend", html);
  });

  /* Accordion toggle */
  mainEl.addEventListener("click", function (e) {
    var head = e.target.closest(".tips-sec-head");
    if (!head) return;
    var body = head.nextElementSibling;
    var open = body.classList.toggle("open");
    head.setAttribute("aria-expanded", open);
  });

  /* Scroll spy for pills */
  var secs = document.querySelectorAll(".tips-sec");
  var pills = document.querySelectorAll(".tips-pill");
  var spy = new IntersectionObserver(
    function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) {
          var id = e.target.id.replace("sec-", "");
          pills.forEach(function (p) {
            p.classList.toggle("active", p.dataset.target === id);
          });
          /* scroll active pill into view */
          var active = pillsEl.querySelector(".tips-pill.active");
          if (active) {
            active.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
          }
        }
      });
    },
    { rootMargin: "-20% 0px -70% 0px" }
  );
  secs.forEach(function (el) { spy.observe(el); });

  /* Back to top */
  var btt = document.getElementById("btt");
  var tick = false;
  window.addEventListener("scroll", function () {
    if (!tick) {
      requestAnimationFrame(function () {
        btt.classList.toggle("show", window.scrollY > 400);
        tick = false;
      });
      tick = true;
    }
  });
  btt.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
})();
