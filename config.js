// CUT START
var disableSetup = false; // Manually set to true to disable setup page menu option
var topBarCenterText = "Glory to Jesus Christ!!! Glory to Him Forever!!!";

// Grid layout desired
var layout_cols = 4;
var layout_rows = 1;

// Menu items
// Structure is as follows: HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
var aURL = [
  [
    "#8ff0a4",
    "Calendar",
    "https://www.stnectarios.org/EasternRiteCalendar/",
    1,
    "L"
  ],
  [
    "#8ff0a4",
    "The Prologue from Ochrid Site 1",
    "https://www.ochrid.org/index.en",
    1,
    "L"
  ],
  [
    "#8ff0a4",
    "The Prologue from Ochrid Site 2",
    "https://www.ohrid-prolog.com/?lang=en",
    1,
    "L"
  ],
  [
    "#2196f3",
    "ROCOR",
    "https://synod.com/synod/indexeng.htm",
    1,
    "R"
  ],
  [
    "#2196f3",
    "Diocese of Chicago and Mid-America",
    "https://chicagodiocese.org/",
    1,
    "R"
  ],
  [
    "#3584e4",
    "Saint Paul the Apostle Orthodox Monastery",
    "https://www.saintpaulsmonastery.org/",
    1,
    "R"
  ],
  [
    "#3584e4",
    "Holy Trinity Monastery",
    "https://jordanville.org/",
    1,
    "R"
  ],
  [
    "#8ff0a4",
    "Jordanville Prayerbook - 1986",
    "https://www.holynewmartyrs.org/prayerbook",
    1,
    "L"
  ],
  [
    "#8ff0a4",
    "Orthodox Liturgical Texts  And Resources",
    "http://www.saintjonah.org/services/",
    1,
    "L"
  ]
];

// Feed items
// Structure is as follows: target URL
// The values are [target link]
var aRSS = [];

// Dashboard Tiles items
// Tile Structure is Title, Source URL
// To display a website on the tiles use "iframe|" keyword before the tile URL
// [Title, Source URL],
// the comma at the end is important!
var aIMG = [
  [
    "",
    "S21lg.webp"
  ],
  [
    "",
    "T22lg.webp"
  ],
  [
    "",
    "J23lg.webp"
  ],
  [
    "",
    "CS956lg.webp"
  ]
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, tiles will be rotated every 5000 milliseconds (5s)
var tileDelay = [
  0,
  0,
  0,
  0
];

// CUT END