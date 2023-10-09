const Namespace = require("../classes/Namespace");
const Room = require("../classes/Room");

const wikiNs = new Namespace(
  1,
  "Wikipedia",
  "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/103px-Wikipedia-logo-v2.svg.png",
  "/wiki"
);

const mozillaNs = new Namespace(
  2,
  "Mozilla",
  "https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png",
  "/mozilla"
);

const linuxNs = new Namespace(
  3,
  "Linux",
  "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png",
  "/linux"
);

wikiNs.addRoom(new Room(1, "New article", 1, false));
wikiNs.addRoom(new Room(2, "Editors", 1, false));
wikiNs.addRoom(new Room(3, "Other", 1, false));


mozillaNs.addRoom(new Room(1, "Firefox", 2, false));
mozillaNs.addRoom(new Room(2, "SeaMonkey", 2, false));
mozillaNs.addRoom(new Room(3, "SpiderMonkey", 2, false));
mozillaNs.addRoom(new Room(4, "Rust", 2, false));



linuxNs.addRoom(new Room(1, "Red Hat", 3, false));
linuxNs.addRoom(new Room(2, "Ubuntu", 3, false));
linuxNs.addRoom(new Room(3, "CentOS", 3, false));
linuxNs.addRoom(new Room(3, "MacOS", 3, false));



const namespaces = [wikiNs, mozillaNs, linuxNs];

module.exports = namespaces;
