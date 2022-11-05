export const eleMap = {
  anemo: '风',
  cryo: '冰',
  electro: '雷',
  geo: '岩',
  hydro: '水',
  pyro: '火',
  dendro: '草'
}

// 元素反应类型及基数
export const erType = {
  vaporize: { type: 'pct', num: ({ element }) => element === '水' ? 2 : 1.5 }, // 蒸发
  melt: { type: 'pct', num: ({ element }) => element === '火' ? 2 : 1.5 }, // 融化
  burning: { type: 'fusion', num: () => 1 }, // 燃烧
  superConduct: { type: 'fusion', num: () => 2 }, // 超导
  swirl: { type: 'fusion', num: () => 2.4 }, // 扩散
  electroCharged: { type: 'fusion', num: () => 4.8 }, // 感电
  shatter: { type: 'fusion', num: () => 6 }, // 碎冰
  overloaded: { type: 'fusion', num: () => 8 }, // 超载
  bloom: { type: 'fusion', num: () => 8 }, // 绽放
  burgeon: { type: 'fusion', num: () => 12 }, // 烈绽放
  hyperBloom: { type: 'fusion', num: () => 12 }, // 超绽放
  aggravate: { type: 'bonus', num: () => 4.6 }, // 超激化
  spread: { type: 'bonus', num: () => 5.0 } // 蔓激化
}

export const attrMap = {
  atk: { type: 'pct', val: 5.83, title: '大攻击', text: '5.8%' },
  hp: { type: 'pct', val: 5.83, title: '大生命', text: '5.8%' },
  def: { type: 'pct', val: 7.29, title: '大防御', text: '7.3%' },
  recharge: { type: 'plus', val: 6.48, title: '元素充能', text: '6.5%' },
  mastery: { type: 'plus', val: 23.31, title: '元素精通', text: '23.3' },
  cpct: { type: 'plus', val: 3.89, title: '暴击率', text: '3.9%' },
  cdmg: { type: 'plus', val: 7.77, title: '暴击伤害', text: '7.8%' }
}

// 各等级精通基础伤害
export const eleBaseDmg = {
  1: 4.291,
  2: 4.634,
  3: 4.976,
  4: 5.319,
  5: 5.661,
  6: 6.162,
  7: 6.660,
  8: 7.217,
  9: 7.842,
  10: 8.536,
  11: 9.300,
  12: 10.165,
  13: 11.112,
  14: 12.141,
  15: 13.437,
  16: 14.770,
  17: 16.105,
  18: 17.431,
  19: 18.781,
  20: 20.146,
  21: 21.528,
  22: 22.926,
  23: 24.311,
  24: 25.703,
  25: 27.102,
  26: 28.300,
  27: 29.526,
  28: 30.745,
  29: 32.432,
  30: 34.073,
  31: 35.668,
  32: 37.257,
  33: 38.854,
  34: 40.456,
  35: 42.277,
  36: 44.130,
  37: 46.018,
  38: 47.927,
  39: 49.889,
  40: 51.846,
  41: 53.850,
  42: 56.041,
  43: 58.376,
  44: 60.838,
  45: 64.016,
  46: 67.136,
  47: 70.382,
  48: 73.753,
  49: 77.267,
  50: 80.900,
  51: 84.189,
  52: 87.633,
  53: 91.121,
  54: 94.655,
  55: 99.650,
  56: 104.100,
  57: 108.597,
  58: 113.238,
  59: 118.152,
  60: 123.221,
  61: 128.392,
  62: 134.776,
  63: 141.378,
  64: 148.135,
  65: 156.111,
  66: 162.868,
  67: 169.874,
  68: 176.949,
  69: 184.168,
  70: 191.410,
  71: 198.693,
  72: 206.169,
  73: 212.789,
  74: 219.436,
  75: 228.557,
  76: 236.687,
  77: 244.853,
  78: 252.806,
  79: 261.198,
  80: 269.361,
  81: 277.499,
  82: 285.744,
  83: 294.092,
  84: 302.546,
  85: 313.459,
  86: 322.238,
  87: 331.371,
  88: 340.864,
  89: 351.274,
  90: 361.713
}