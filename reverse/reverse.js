import { _0xdbc730 } from "./utils/encrypt.js";
import { gotScraping } from "got-scraping";

function tsh(sitekey, host = "mtcap@mtcaptcha.com") {
  return "TH[" + _0xdbc730.hash.md5(host + sitekey) + "]";
}

function generateSessionGUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (_0x1622a7) {
    var _0x3e3332 = Math.random() * 16 | 0;
    var _0xdc0c65 = _0x1622a7 === "x" ? _0x3e3332 : _0x3e3332 & 3 | 8;
    return _0xdc0c65.toString(16);
  });
}

const siteKey = "MTPublic-F4pGivKj3"
const domain = 'account.sap.com'
const session = 'S1' + generateSessionGUID()

let params = new URLSearchParams({
  sk: siteKey,
  bd: domain,
  rt: Math.floor(Date.now()),
  tsh: tsh(siteKey),
  act: "$",
  ss: session,
  lf: 1,
  tl: "$",
  lg: "en",
  tp: "s"
}).toString();

let response = await gotScraping.get(`https://service.mtcaptcha.com/mtcv1/api/getchallenge.json?${params}`, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36'
  }
})

const body = JSON.parse(response.body)

const ct = body.result.challenge.ct
const fseed = body.result.challenge.foldChlg.fseed
const fslots = body.result.challenge.foldChlg.fslots
const fdepth = body.result.challenge.foldChlg.fdepth

_0xdbc730.kee.init(fseed)

// params = new URLSearchParams({
//   sk: siteKey,
//   ct,
//   fa: _0xdbc730.FoldChlg.solve(fseed, fslots, fdepth),
//   ss: session
// }).toString();

// response = await gotScraping.get(`https://service.mtcaptcha.com/mtcv1/api/getimage.json?${params}`, {
//   headers: {
//     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36'
//   }
// })
// console.log(response.body)

params = new URLSearchParams({
  ct,
  sk: siteKey,
  st: "$",
  lf: 1,
  bd: domain,
  rt: Math.floor(Date.now()),
  tsh: tsh(siteKey),
  fa: _0xdbc730.FoldChlg.solve(fseed, fslots, fdepth),
  qh: "$",
  act: "$",
  ss: session,
  tl: "$",
  lg: "en",
  tp: "s",
  kt: _0xdbc730.kee.getKeesString(),
  fs: fseed
}).toString();

response = await gotScraping.get(`https://service.mtcaptcha.com/mtcv1/api/solvechallenge.json?${params}`, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36'
  }
})

console.log(response.body)