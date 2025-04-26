export const _0xdbc730 = {}
_0xdbc730.hash = {
  md5cycle: function (_0x3761c6, _0x4ca095) {
    var _0x1771d3 = _0x3761c6[0];
    var _0x1a7eaf = _0x3761c6[1];
    var _0x8b99e6 = _0x3761c6[2];
    var _0x407922 = _0x3761c6[3];
    _0x1771d3 = _0xdbc730.hash.ff(_0x1771d3, _0x1a7eaf, _0x8b99e6, _0x407922, _0x4ca095[0], 7, -680876936);
    _0x407922 = _0xdbc730.hash.ff(_0x407922, _0x1771d3, _0x1a7eaf, _0x8b99e6, _0x4ca095[1], 12, -389564586);
    _0x8b99e6 = _0xdbc730.hash.ff(_0x8b99e6, _0x407922, _0x1771d3, _0x1a7eaf, _0x4ca095[2], 17, 606105819);
    _0x1a7eaf = _0xdbc730.hash.ff(_0x1a7eaf, _0x8b99e6, _0x407922, _0x1771d3, _0x4ca095[3], 22, -1044525330);
    _0x1771d3 = _0xdbc730.hash.ff(_0x1771d3, _0x1a7eaf, _0x8b99e6, _0x407922, _0x4ca095[4], 7, -176418897);
    _0x407922 = _0xdbc730.hash.ff(_0x407922, _0x1771d3, _0x1a7eaf, _0x8b99e6, _0x4ca095[5], 12, 1200080426);
    _0x8b99e6 = _0xdbc730.hash.ff(_0x8b99e6, _0x407922, _0x1771d3, _0x1a7eaf, _0x4ca095[6], 17, -1473231341);
    _0x1a7eaf = _0xdbc730.hash.ff(_0x1a7eaf, _0x8b99e6, _0x407922, _0x1771d3, _0x4ca095[7], 22, -45705983);
    _0x1771d3 = _0xdbc730.hash.ff(_0x1771d3, _0x1a7eaf, _0x8b99e6, _0x407922, _0x4ca095[8], 7, 1770035416);
    _0x407922 = _0xdbc730.hash.ff(_0x407922, _0x1771d3, _0x1a7eaf, _0x8b99e6, _0x4ca095[9], 12, -1958414417);
    _0x8b99e6 = _0xdbc730.hash.ff(_0x8b99e6, _0x407922, _0x1771d3, _0x1a7eaf, _0x4ca095[10], 17, -42063);
    _0x1a7eaf = _0xdbc730.hash.ff(_0x1a7eaf, _0x8b99e6, _0x407922, _0x1771d3, _0x4ca095[11], 22, -1990404162);
    _0x1771d3 = _0xdbc730.hash.ff(_0x1771d3, _0x1a7eaf, _0x8b99e6, _0x407922, _0x4ca095[12], 7, 1804603682);
    _0x407922 = _0xdbc730.hash.ff(_0x407922, _0x1771d3, _0x1a7eaf, _0x8b99e6, _0x4ca095[13], 12, -40341101);
    _0x8b99e6 = _0xdbc730.hash.ff(_0x8b99e6, _0x407922, _0x1771d3, _0x1a7eaf, _0x4ca095[14], 17, -1502002290);
    _0x1a7eaf = _0xdbc730.hash.ff(_0x1a7eaf, _0x8b99e6, _0x407922, _0x1771d3, _0x4ca095[15], 22, 1236535329);
    _0x1771d3 = _0xdbc730.hash.gg(_0x1771d3, _0x1a7eaf, _0x8b99e6, _0x407922, _0x4ca095[1], 5, -165796510);
    _0x407922 = _0xdbc730.hash.gg(_0x407922, _0x1771d3, _0x1a7eaf, _0x8b99e6, _0x4ca095[6], 9, -1069501632);
    _0x8b99e6 = _0xdbc730.hash.gg(_0x8b99e6, _0x407922, _0x1771d3, _0x1a7eaf, _0x4ca095[11], 14, 643717713);
    _0x1a7eaf = _0xdbc730.hash.gg(_0x1a7eaf, _0x8b99e6, _0x407922, _0x1771d3, _0x4ca095[0], 20, -373897302);
    _0x1771d3 = _0xdbc730.hash.gg(_0x1771d3, _0x1a7eaf, _0x8b99e6, _0x407922, _0x4ca095[5], 5, -701558691);
    _0x407922 = _0xdbc730.hash.gg(_0x407922, _0x1771d3, _0x1a7eaf, _0x8b99e6, _0x4ca095[10], 9, 38016083);
    _0x8b99e6 = _0xdbc730.hash.gg(_0x8b99e6, _0x407922, _0x1771d3, _0x1a7eaf, _0x4ca095[15], 14, -660478335);
    _0x1a7eaf = _0xdbc730.hash.gg(_0x1a7eaf, _0x8b99e6, _0x407922, _0x1771d3, _0x4ca095[4], 20, -405537848);
    _0x1771d3 = _0xdbc730.hash.gg(_0x1771d3, _0x1a7eaf, _0x8b99e6, _0x407922, _0x4ca095[9], 5, 568446438);
    _0x407922 = _0xdbc730.hash.gg(_0x407922, _0x1771d3, _0x1a7eaf, _0x8b99e6, _0x4ca095[14], 9, -1019803690);
    _0x8b99e6 = _0xdbc730.hash.gg(_0x8b99e6, _0x407922, _0x1771d3, _0x1a7eaf, _0x4ca095[3], 14, -187363961);
    _0x1a7eaf = _0xdbc730.hash.gg(_0x1a7eaf, _0x8b99e6, _0x407922, _0x1771d3, _0x4ca095[8], 20, 1163531501);
    _0x1771d3 = _0xdbc730.hash.gg(_0x1771d3, _0x1a7eaf, _0x8b99e6, _0x407922, _0x4ca095[13], 5, -1444681467);
    _0x407922 = _0xdbc730.hash.gg(_0x407922, _0x1771d3, _0x1a7eaf, _0x8b99e6, _0x4ca095[2], 9, -51403784);
    _0x8b99e6 = _0xdbc730.hash.gg(_0x8b99e6, _0x407922, _0x1771d3, _0x1a7eaf, _0x4ca095[7], 14, 1735328473);
    _0x1a7eaf = _0xdbc730.hash.gg(_0x1a7eaf, _0x8b99e6, _0x407922, _0x1771d3, _0x4ca095[12], 20, -1926607734);
    _0x1771d3 = _0xdbc730.hash.hh(_0x1771d3, _0x1a7eaf, _0x8b99e6, _0x407922, _0x4ca095[5], 4, -378558);
    _0x407922 = _0xdbc730.hash.hh(_0x407922, _0x1771d3, _0x1a7eaf, _0x8b99e6, _0x4ca095[8], 11, -2022574463);
    _0x8b99e6 = _0xdbc730.hash.hh(_0x8b99e6, _0x407922, _0x1771d3, _0x1a7eaf, _0x4ca095[11], 16, 1839030562);
    _0x1a7eaf = _0xdbc730.hash.hh(_0x1a7eaf, _0x8b99e6, _0x407922, _0x1771d3, _0x4ca095[14], 23, -35309556);
    _0x1771d3 = _0xdbc730.hash.hh(_0x1771d3, _0x1a7eaf, _0x8b99e6, _0x407922, _0x4ca095[1], 4, -1530992060);
    _0x407922 = _0xdbc730.hash.hh(_0x407922, _0x1771d3, _0x1a7eaf, _0x8b99e6, _0x4ca095[4], 11, 1272893353);
    _0x8b99e6 = _0xdbc730.hash.hh(_0x8b99e6, _0x407922, _0x1771d3, _0x1a7eaf, _0x4ca095[7], 16, -155497632);
    _0x1a7eaf = _0xdbc730.hash.hh(_0x1a7eaf, _0x8b99e6, _0x407922, _0x1771d3, _0x4ca095[10], 23, -1094730640);
    _0x1771d3 = _0xdbc730.hash.hh(_0x1771d3, _0x1a7eaf, _0x8b99e6, _0x407922, _0x4ca095[13], 4, 681279174);
    _0x407922 = _0xdbc730.hash.hh(_0x407922, _0x1771d3, _0x1a7eaf, _0x8b99e6, _0x4ca095[0], 11, -358537222);
    _0x8b99e6 = _0xdbc730.hash.hh(_0x8b99e6, _0x407922, _0x1771d3, _0x1a7eaf, _0x4ca095[3], 16, -722521979);
    _0x1a7eaf = _0xdbc730.hash.hh(_0x1a7eaf, _0x8b99e6, _0x407922, _0x1771d3, _0x4ca095[6], 23, 76029189);
    _0x1771d3 = _0xdbc730.hash.hh(_0x1771d3, _0x1a7eaf, _0x8b99e6, _0x407922, _0x4ca095[9], 4, -640364487);
    _0x407922 = _0xdbc730.hash.hh(_0x407922, _0x1771d3, _0x1a7eaf, _0x8b99e6, _0x4ca095[12], 11, -421815835);
    _0x8b99e6 = _0xdbc730.hash.hh(_0x8b99e6, _0x407922, _0x1771d3, _0x1a7eaf, _0x4ca095[15], 16, 530742520);
    _0x1a7eaf = _0xdbc730.hash.hh(_0x1a7eaf, _0x8b99e6, _0x407922, _0x1771d3, _0x4ca095[2], 23, -995338651);
    _0x1771d3 = _0xdbc730.hash.ii(_0x1771d3, _0x1a7eaf, _0x8b99e6, _0x407922, _0x4ca095[0], 6, -198630844);
    _0x407922 = _0xdbc730.hash.ii(_0x407922, _0x1771d3, _0x1a7eaf, _0x8b99e6, _0x4ca095[7], 10, 1126891415);
    _0x8b99e6 = _0xdbc730.hash.ii(_0x8b99e6, _0x407922, _0x1771d3, _0x1a7eaf, _0x4ca095[14], 15, -1416354905);
    _0x1a7eaf = _0xdbc730.hash.ii(_0x1a7eaf, _0x8b99e6, _0x407922, _0x1771d3, _0x4ca095[5], 21, -57434055);
    _0x1771d3 = _0xdbc730.hash.ii(_0x1771d3, _0x1a7eaf, _0x8b99e6, _0x407922, _0x4ca095[12], 6, 1700485571);
    _0x407922 = _0xdbc730.hash.ii(_0x407922, _0x1771d3, _0x1a7eaf, _0x8b99e6, _0x4ca095[3], 10, -1894986606);
    _0x8b99e6 = _0xdbc730.hash.ii(_0x8b99e6, _0x407922, _0x1771d3, _0x1a7eaf, _0x4ca095[10], 15, -1051523);
    _0x1a7eaf = _0xdbc730.hash.ii(_0x1a7eaf, _0x8b99e6, _0x407922, _0x1771d3, _0x4ca095[1], 21, -2054922799);
    _0x1771d3 = _0xdbc730.hash.ii(_0x1771d3, _0x1a7eaf, _0x8b99e6, _0x407922, _0x4ca095[8], 6, 1873313359);
    _0x407922 = _0xdbc730.hash.ii(_0x407922, _0x1771d3, _0x1a7eaf, _0x8b99e6, _0x4ca095[15], 10, -30611744);
    _0x8b99e6 = _0xdbc730.hash.ii(_0x8b99e6, _0x407922, _0x1771d3, _0x1a7eaf, _0x4ca095[6], 15, -1560198380);
    _0x1a7eaf = _0xdbc730.hash.ii(_0x1a7eaf, _0x8b99e6, _0x407922, _0x1771d3, _0x4ca095[13], 21, 1309151649);
    _0x1771d3 = _0xdbc730.hash.ii(_0x1771d3, _0x1a7eaf, _0x8b99e6, _0x407922, _0x4ca095[4], 6, -145523070);
    _0x407922 = _0xdbc730.hash.ii(_0x407922, _0x1771d3, _0x1a7eaf, _0x8b99e6, _0x4ca095[11], 10, -1120210379);
    _0x8b99e6 = _0xdbc730.hash.ii(_0x8b99e6, _0x407922, _0x1771d3, _0x1a7eaf, _0x4ca095[2], 15, 718787259);
    _0x1a7eaf = _0xdbc730.hash.ii(_0x1a7eaf, _0x8b99e6, _0x407922, _0x1771d3, _0x4ca095[9], 21, -343485551);
    _0x3761c6[0] = _0xdbc730.hash.add32(_0x1771d3, _0x3761c6[0]);
    _0x3761c6[1] = _0xdbc730.hash.add32(_0x1a7eaf, _0x3761c6[1]);
    _0x3761c6[2] = _0xdbc730.hash.add32(_0x8b99e6, _0x3761c6[2]);
    _0x3761c6[3] = _0xdbc730.hash.add32(_0x407922, _0x3761c6[3]);
  },
  cmn: function (_0x27aa42, _0x56daf9, _0x125cad, _0x100365, _0xa2bc27, _0x73c8ec) {
    _0x56daf9 = _0xdbc730.hash.add32(_0xdbc730.hash.add32(_0x56daf9, _0x27aa42), _0xdbc730.hash.add32(_0x100365, _0x73c8ec));
    return _0xdbc730.hash.add32(_0x56daf9 << _0xa2bc27 | _0x56daf9 >>> 32 - _0xa2bc27, _0x125cad);
  },
  ff: function (_0x19e1a5, _0xae1fba, _0x516f9c, _0x355320, _0x53b297, _0x303dfe, _0x3069f1) {
    return _0xdbc730.hash.cmn(_0xae1fba & _0x516f9c | ~_0xae1fba & _0x355320, _0x19e1a5, _0xae1fba, _0x53b297, _0x303dfe, _0x3069f1);
  },
  gg: function (_0x2ee250, _0x4dbe18, _0x6a9655, _0x44ed9c, _0x5043c2, _0x12b28c, _0x5300e6) {
    return _0xdbc730.hash.cmn(_0x4dbe18 & _0x44ed9c | _0x6a9655 & ~_0x44ed9c, _0x2ee250, _0x4dbe18, _0x5043c2, _0x12b28c, _0x5300e6);
  },
  hh: function (_0x1477d0, _0x82b5c0, _0x26e3a8, _0x4ce953, _0x4968b0, _0x502b68, _0xe81040) {
    return _0xdbc730.hash.cmn(_0x82b5c0 ^ _0x26e3a8 ^ _0x4ce953, _0x1477d0, _0x82b5c0, _0x4968b0, _0x502b68, _0xe81040);
  },
  ii: function (_0x19a4fa, _0x12d2fa, _0x262558, _0x509f5d, _0x50b97b, _0xb0c3f1, _0x48466f) {
    return _0xdbc730.hash.cmn(_0x262558 ^ (_0x12d2fa | ~_0x509f5d), _0x19a4fa, _0x12d2fa, _0x50b97b, _0xb0c3f1, _0x48466f);
  },
  md51: function (_0xd02ab0) {
    var _0x20361e = _0xd02ab0.length;
    var _0x458f5c = [1732584193, -271733879, -1732584194, 271733878];
    var _0xefc17;
    for (_0xefc17 = 64; _0xefc17 <= _0xd02ab0.length; _0xefc17 += 64) {
      _0xdbc730.hash.md5cycle(_0x458f5c, _0xdbc730.hash.md5blk(_0xd02ab0.substring(_0xefc17 - 64, _0xefc17)));
    }
    _0xd02ab0 = _0xd02ab0.substring(_0xefc17 - 64);
    var _0x804830 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (_0xefc17 = 0; _0xefc17 < _0xd02ab0.length; _0xefc17++) {
      _0x804830[_0xefc17 >> 2] |= _0xd02ab0.charCodeAt(_0xefc17) << (_0xefc17 % 4 << 3);
    }
    _0x804830[_0xefc17 >> 2] |= 128 << (_0xefc17 % 4 << 3);
    if (_0xefc17 > 55) {
      _0xdbc730.hash.md5cycle(_0x458f5c, _0x804830);
      for (_0xefc17 = 0; _0xefc17 < 16; _0xefc17++) {
        _0x804830[_0xefc17] = 0;
      }
    }
    _0x804830[14] = _0x20361e * 8;
    _0xdbc730.hash.md5cycle(_0x458f5c, _0x804830);
    return _0x458f5c;
  },
  md5blk: function (_0x33e13e) {
    var _0x5f2db2 = [];
    var _0x1c45ce;
    for (_0x1c45ce = 0; _0x1c45ce < 64; _0x1c45ce += 4) {
      _0x5f2db2[_0x1c45ce >> 2] = _0x33e13e.charCodeAt(_0x1c45ce) + (_0x33e13e.charCodeAt(_0x1c45ce + 1) << 8) + (_0x33e13e.charCodeAt(_0x1c45ce + 2) << 16) + (_0x33e13e.charCodeAt(_0x1c45ce + 3) << 24);
    }
    return _0x5f2db2;
  },
  hex_chr: "0123456789abcdef".split(""),
  rhex: function (_0x337746) {
    var _0x310f41 = "";
    var _0x2b3e69 = 0;
    for (; _0x2b3e69 < 4; _0x2b3e69++) {
      _0x310f41 += _0xdbc730.hash.hex_chr[_0x337746 >> _0x2b3e69 * 8 + 4 & 15] + _0xdbc730.hash.hex_chr[_0x337746 >> _0x2b3e69 * 8 & 15];
    }
    return _0x310f41;
  },
  hex: function (_0xb58cc5) {
    for (var _0x1eb172 = 0; _0x1eb172 < _0xb58cc5.length; _0x1eb172++) {
      _0xb58cc5[_0x1eb172] = _0xdbc730.hash.rhex(_0xb58cc5[_0x1eb172]);
    }
    return _0xb58cc5.join("");
  },
  md5: function (_0x1d7008) {
    return _0xdbc730.hash.hex(_0xdbc730.hash.md51(_0x1d7008));
  },
  add32: function (_0x5e8cf5, _0x18a3e5) {
    var _0x4b5ae2 = (_0x5e8cf5 & 65535) + (_0x18a3e5 & 65535);
    var _0x378d6b = (_0x5e8cf5 >> 16) + (_0x18a3e5 >> 16) + (_0x4b5ae2 >> 16);
    return _0x378d6b << 16 | _0x4b5ae2 & 65535;
  }
}

_0xdbc730.FoldChlg = {
  URLSafeBase64CharCode2IntMap: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -1, -1, -1, -1, -1, -1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, -1, -1, -1, -1, 63, -1, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  URLSafeBase64Int2CharMap: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "-", "_"],
  URLSafeBase64CharToInt: function (_0x4c758a) {
    if (typeof _0x4c758a === "string") {
      _0x4c758a = _0x4c758a.charCodeAt(0);
    }
    var _0x2eba7d = this.URLSafeBase64CharCode2IntMap[_0x4c758a % 256];
    if (_0x2eba7d < 0) {
      throw "arg charCode must be within chars [a-zA-Z0-9:;] '" + _0x4c758a + "'";
    }
    return _0x2eba7d;
  },
  URLSafeBase64IntToChar: function (_0xc8a0bf) {
    if (_0xc8a0bf < 0 || _0xc8a0bf > 63) {
      throw "arg i must be between 0 .. 63 inclusive";
    }
    return this.URLSafeBase64Int2CharMap[_0xc8a0bf % 64];
  },
  URLSafeBase4096IntToChar: function (_0x227456) {
    if (_0x227456 > 4095 || _0x227456 < 0) {
      throw "arg i must be between 0 .. 4095 inclusive";
    }
    return "" + this.URLSafeBase64IntToChar(_0x227456 >> 6) + this.URLSafeBase64IntToChar(_0x227456 & 63);
  },
  URLSafeBase64Str2IntArray: function (_0x2c7f8b) {
    var _0x26c05d = [];
    for (var _0x4d15c4 = 0; _0x4d15c4 < _0x2c7f8b.length; _0x4d15c4++) {
      _0x26c05d.push(this.URLSafeBase64CharToInt(_0x2c7f8b.charAt(_0x4d15c4)));
    }
    return _0x26c05d;
  },
  URLSafeBase64IntArray2String: function (_0x47fbbd) {
    var _0x17b416 = [];
    for (var _0xddcc32 = 0; _0xddcc32 < _0x47fbbd.length; _0xddcc32++) {
      _0x17b416.push(this.URLSafeBase64IntToChar(_0x47fbbd[_0xddcc32]));
    }
    return _0x17b416[_0x5e6f("0x2fd")]("");
  },
  hashIntAry: function (_0x24e202) {
    var _0x2c7272 = 0;
    var _0x598ca6;
    for (_0x598ca6 = 0; _0x598ca6 < _0x24e202.length; _0x598ca6++) {
      _0x2c7272 = (_0x2c7272 << 5) - _0x2c7272 + _0x24e202[_0x598ca6];
      _0x2c7272 = _0x2c7272 & _0x2c7272;
    }
    if (_0x2c7272 < 0) {
      _0x2c7272 *= -1;
    }
    return _0x2c7272;
  },
  solve: function (_0x2ffbc4, _0x58b40d, _0x44c1a6) {
    if (!_0x2ffbc4 || _0x58b40d < 1) {
      return "0";
    }
    var _0x5aca29 = [];
    var _0x3b9df9 = this.URLSafeBase64Str2IntArray(_0x2ffbc4);
    var _0x123ae6 = null;
    for (var _0x2655a1 = 0; _0x2655a1 < _0x58b40d; _0x2655a1++) {
      _0x3b9df9 = this.foldBase64IntArray(_0x3b9df9, 31);
      _0x123ae6 = this.hashIntAry(this.foldBase64IntArray(_0x3b9df9, _0x44c1a6));
      _0x5aca29.push(this.URLSafeBase4096IntToChar(_0x123ae6 % 4096));
    }
    return _0x5aca29.join("");
  },
  foldBase64IntArray: function (a1, foldCount) {
    var a2 = a1.slice().reverse();
    var a3 = a1.slice();
    var offset = 0;
    var x = 0;
    var y = 0;
    var z = 0;
    var i = 0;
    for (i = 0; i < foldCount; i++) {
      offset++;
      for (x = 0; x < a1.length; x++) {
        a3[x] = (Math.floor((a3[x] + a2[(x + offset) % a2.length]) * 73 / 8) + y + z) % 64;
        z = Math.floor(y / 2);
        y = Math.floor(a3[x] / 2);
      }
    }
    return a3;
  }
}

_0xdbc730.kee = {
  URLSafeBase64CharCode2IntMap: _0xdbc730.FoldChlg.URLSafeBase64CharCode2IntMap,
  URLSafeBase64Int2CharMap: _0xdbc730.FoldChlg.URLSafeBase64Int2CharMap,
  TAIL_KEEINT: "",
  initTS: Date.now(),
  lastKeeTS: -1,
  ciderb64int: null,
  keehist: null,
  keehistPos: 0,
  tf: "",
  prevString: "",
  init: function (_0xc312f2) {
    this.TAIL_KEEINT = this.URLSafeBase64CharCode2IntMap[95];
    this.lastKeeTS = -1;
    this.ciderb64int = null;
    this.keehist = null;
    this.keehistPos = 0;
    this.prevString = "";
    if (_0xc312f2 == null || _0xc312f2.length < 64) {
      return;
    }
    if (_0xc312f2.length >= 64) {
      _0xc312f2 = _0xc312f2.substring(0, 64);
    }
    var _0x1c59a2 = new Array(_0xc312f2.length);
    var _0x490ff9 = this.URLSafeBase64CharCode2IntMap[_0xc312f2.charCodeAt(_0xc312f2.length - 1)];
    for (var _0x46234c = 0; _0x46234c < _0xc312f2.length; _0x46234c++) {
      var _0x16c42a = _0xc312f2.charCodeAt(_0x46234c);
      var _0x3e848d = this.URLSafeBase64CharCode2IntMap[_0x16c42a];
      _0x1c59a2[_0x46234c] = _0x3e848d ^ _0x490ff9;
      _0x490ff9 = _0x3e848d;
    }
    this.ciderb64int = _0x1c59a2;
    this.keehist = _0x1c59a2.slice(0, _0x1c59a2.length);
    this.keehistPos = 0;
  },
  getKey: function (_0x3f6f91) {
    var _0x31bc11 = "";
    var _0x1ba8d0 = _0x3f6f91;
    var _0x373ecd = this[_0x5e6f("0x330")];
    if (_0x1ba8d0 != null && _0x373ecd.length <= _0x1ba8d0.length) {
      _0x1ba8d0[_0x5e6f("0x181")]("").forEach(function (_0x35fbc1, _0xfb596d) {
        if (_0x35fbc1 != _0x373ecd[_0x5e6f("0x335")](_0xfb596d)) {
          _0x31bc11 += _0x35fbc1;
        }
      });
      this[_0x5e6f("0x330")] = _0x1ba8d0;
      return _0x31bc11[0];
    } else {
      this.prevString = _0x1ba8d0 == null ? "" : _0x1ba8d0;
      return _0x5e6f("0x336");
    }
  },
  play: function (_0xc801a8) {
    var _0x3ffa08 = this[_0x5e6f("0x331") + "rb6" + _0x5e6f("0x332")];
    if (_0x3ffa08 == null) {
      return false;
    }
    var _0x4eabfe = this[_0x5e6f("0x337")](_0xc801a8[_0x5e6f("0x15e")]);
    var _0x8e8fde = this["ke" + _0x5e6f("0x338") + "st"];
    var _0x11b8a8 = this.keehistPos;
    var _0x3200e4 = Date.now();
    var _0x358c73 = this["las" + _0x5e6f("0x339") + "eTS"];
    if (_0x11b8a8 === 0) {
      var _0x2b1a3c = Math[_0x5e6f("0x17f")]((_0x3200e4 - this["ini" + _0x5e6f("0x33a")]) / 500);
      if (_0x2b1a3c > 3900) {
        _0x2b1a3c = 3900;
      }
      var _0xc801a8 = Math[_0x5e6f("0x144")](_0x2b1a3c / 64);
      var _0x423d94 = Math[_0x5e6f("0x17f")](_0x2b1a3c % 64);
      _0x8e8fde[0] = _0x3ffa08[0] ^ _0xc801a8;
      _0x8e8fde[1] = _0x3ffa08[1] ^ _0x423d94;
      _0x8e8fde[2] = _0x3ffa08[2] ^ this[_0x5e6f("0x32b")];
      _0x11b8a8 += 2;
      this["ke" + _0x5e6f("0x33b") + "os"] = _0x11b8a8;
    }
    if (_0x4eabfe === "-" || _0x4eabfe === 45) {
      return false;
    }
    if (_0x4eabfe === "Ba" + _0x5e6f("0x33c") + _0x5e6f("0x33d") || _0x4eabfe === 8) {
      _0x4eabfe = "-";
    }
    if (typeof _0x4eabfe === _0x5e6f("0x15b") && _0x4eabfe[_0x5e6f("0x12d")] > 1) {
      return false;
    }
    var _0x1fe822 = typeof _0x4eabfe === _0x5e6f("0x15b") ? _0x4eabfe[_0x5e6f("0x2fa")](0) : _0x4eabfe;
    var _0x1e9aba = _0x1fe822 in this[_0x5e6f("0x322")] ? this.URLSafeBase64CharCode2IntMap[_0x1fe822] : -1;
    var _0x4e63de = _0xc801a8["ct" + _0x5e6f("0x33e") + "ey"] || _0xc801a8.altKey;
    if (_0x4e63de || _0x1e9aba < 0 || _0x11b8a8 > 52) {
      return false;
    }
    var _0x2b1a3c = Math[_0x5e6f("0x17f")]((_0x358c73 < 0 ? 0 : _0x3200e4 - _0x358c73) / 30);
    if (_0x2b1a3c > 63) {
      _0x2b1a3c = 63;
    }
    _0x8e8fde[_0x11b8a8] = _0x3ffa08[_0x11b8a8] ^ _0x1e9aba;
    _0x8e8fde[_0x11b8a8 + 1] = _0x3ffa08[_0x11b8a8 + 1] ^ _0x2b1a3c;
    _0x8e8fde[_0x11b8a8 + 2] = _0x3ffa08[_0x11b8a8 + 2] ^ this[_0x5e6f("0x32b")];
    this["ke" + _0x5e6f("0x333") + _0x5e6f("0x334")] = _0x11b8a8 + 2;
    this["las" + _0x5e6f("0x339") + _0x5e6f("0x33f")] = _0x3200e4;
    return true;
  },
  getKeesString: function () {
    if (this.ciderb64int == null) {
      return "0";
    }
    var _0x49e5a = new Array(this.keehist.length);
    for (var _0x302d6d = 0; _0x302d6d < this.keehist.length; _0x302d6d++) {
      _0x49e5a[_0x302d6d] = this.URLSafeBase64Int2CharMap[this.keehist[_0x302d6d]];
    }
    return _0x49e5a.join("");
  },
  _DEBUG_getkeehistoryReadable: function () {
    if (this.ciderb64int == null) {
      return "";
    }
    var _0x4755bc = "";
    var _0x28f645 = "";
    var _0x22ef48 = this.keehist[0] ^ this.ciderb64int[0];
    var _0x5d1a86 = this.keehist[1] ^ this.ciderb64int[1];
    var _0x288b26 = (_0x22ef48 * 64 + _0x5d1a86) / 2;
    for (var _0x541d0b = 2; _0x541d0b < this.keehist.length; _0x541d0b += 2) {
      var _0x373b96 = this.ciderb64int[_0x541d0b];
      var _0x55f1e1 = this.keehist[_0x541d0b] ^ _0x373b96;
      var _0x46c5c4 = this.URLSafeBase64Int2CharMap[_0x55f1e1];
      _0x4755bc += _0x46c5c4;
      if (_0x46c5c4 == "_") {
        lastpos = _0x541d0b;
      }
      _0x373b96 = this.ciderb64int[_0x541d0b + 1];
      _0x55f1e1 = this.keehist[_0x541d0b + 1] ^ _0x373b96;
      _0x28f645 += _0x55f1e1 + ",";
    }
    return _0x4755bc + "|" + _0x28f645 + _0x5e6f("0x340") + _0x288b26;
  }
};