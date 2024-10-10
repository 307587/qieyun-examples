/* 推導老國音

@author 307587

攷：
https://zh.wikiversity.org/zh/%E8%80%81%E5%9C%8B%E9%9F%B3%E8%88%87%E5%BB%A3%E9%9F%BB%E5%B0%8D%E6%AF%94
https://syimyuzya.github.io/qieyun-autoderiver/

音：
https://github.com/baopaau/rime-bepemefeve/blob/main/bepemefeve.dict.yaml
 */

/** @type { 音韻地位['屬於'] } */
const is = (...x) => 音韻地位.屬於(...x);
/** @type { 音韻地位['判斷'] } */
const when = (...x) => 音韻地位.判斷(...x);

if (!音韻地位) return [
  ['標調方式', [1, '調號', '調值']],
  //['常母平聲陰聲韻聲母和船母平聲聲母', [2, 'tʂʰ', 'ʂ']],　//待考
];

const 聲母規則 = () => when([
  ['幫母', [['C類', 'f'], ['', 'p']]],
  ['滂母', [['C類', 'f'], ['', 'pʰ']]],
  ['並母', [['C類', 'f'], ['平聲', 'pʰ'], ['', 'p']]],
  ['明母', [['微韻', 'v'], ['C類 非 流通攝', 'w'], ['', 'm']]],

  ['端母', 't'],
  ['透母', 'tʰ'],
  ['定母', [['平聲', 'tʰ'], ['', 't']]],
  ['泥孃母', 'n'],
  ['來母', 'l'],

  ['精母', 'ts'],
  ['清母', 'tsʰ'],
  ['從母', [['平聲', 'tsʰ'], ['', 'ts']]],
  ['心邪母', 's'],

  ['知莊章母', 'tʂ'],
  ['徹初昌母', 'tʂʰ'],
  ['澄崇母', [['平聲', 'tʂʰ'], ['', 'tʂ']]],
  ['常母', 'ʂ'],
  //['常母', [['平聲 陽聲韻', 'tʂʰ'], ['', 'ʂ']]], //待考
  ['生俟書船母', 'ʂ'],
  ['日母', [['止攝 開口', ''], ['', 'ɻ']]],

  ['見母', 'k'],
  ['溪母', 'kʰ'],
  ['羣母', [['平聲', 'kʰ'], ['', 'k']]],
  ['疑母', 'ŋ'],
  ['影云以母', ''],
  ['曉匣母', 'x'],
], '無聲母規則');

const 舒聲韻母規則 = () => when([

], '無韻母規則');

const 入聲韻母規則 = () => when([

], '無韻母規則');

const 聲調規則 = () => when([
  ['平聲', [['清音', '1'], ['濁音', '2']]],
  ['上聲', [['全濁', '4'], ['', '3']]],
  ['去聲', '4'],
  ['入聲', '5'],
], '無聲調規則');

let 聲母 = 聲母規則();
let 韻母 = is`舒聲` ? 舒聲韻母規則() : 入聲韻母規則();
let 聲調 = 聲調規則();

if (選項.標調方式 === '調號') return 聲母 + 韻母 + 聲調;
if (選項.標調方式 === '調值') {
  if (聲調 === '1') 聲調 = '⁵⁵';
  if (聲調 === '2') 聲調 = '³⁵';
  if (聲調 === '3') 聲調 = '²¹⁴';
  if (聲調 === '4') 聲調 = '⁵¹';
  if (聲調 === '5') 聲調 = '⁵';
}

return 聲母 + 韻母 + 聲調;
