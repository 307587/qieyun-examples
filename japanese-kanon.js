/* 推導日語漢音
 *
 * 説明
 * 以下代碼爲生成推導日語漢音的函數體
 * 
 * 以字音假名遣形式表示，拗音用對應的小假名表示
 * 
 * 有開關可控制：-m -n 之分、-wi -we 合拗音、wiwe 小假名表示、狂 ク𛅥ャウ vs キャウ
 * 
 * 函數接受音韻地位，返回對應的推導日語漢音
 * 
 */

const is = (x) => 音韻地位.屬於(x);

const 開關 = {};

開關.分mn = true; // 開：サム　關：サン
開關.wiwe = true; // 開：ク𛅥ン　關：ケン
開關.小假名wiwe = true; // 開：ク𛅥ン　關：クヱン
開關.kwiyau = true;  // 開：ク𛅥ャウ　關：キャウ

function 聲母規則() {
    if (is('幫母')) return 'f';
    if (is('滂母')) return 'f';
    if (is('並母')) return 'f';
    if (is('明母')) return 'm';
    if (is('端母')) return 't';
    if (is('透母')) return 't';
    if (is('定母')) return 't';
    if (is('泥母')) return 'd';
    if (is('知母')) return 't';
    if (is('徹母')) return 't';
    if (is('澄母')) return 't';
    if (is('孃母')) return 'd';
    if (is('精母')) return 's';
    if (is('清母')) return 's';
    if (is('從母')) return 's';
    if (is('心母')) return 's';
    if (is('邪母')) return 's';
    if (is('莊母')) return 's';
    if (is('初母')) return 's';
    if (is('崇母')) return 's';
    if (is('生母')) return 's';
    if (is('俟母')) return 's';
    if (is('章母')) return 's';
    if (is('昌母')) return 's';
    if (is('船母')) return 's';
    if (is('書母')) return 's';
    if (is('常母')) return 's';
    if (is('見母')) return 'k';
    if (is('溪母')) return 'k';
    if (is('羣母')) return 'k';
    if (is('疑母')) return 'g';
    if (is('影母')) return '0';
    if (is('曉母')) return 'k';
    if (is('匣母')) return 'k';
    if (is('云母')) return '0';
    if (is('以母')) return '0';
    if (is('來母')) return 'r';
    if (is('日母')) return 'z';
    throw new Error('無聲母規則');
}

function 韻母規則() {
	// 果攝
	if (is('開口 一等 歌韻')) return 'a';
	if (is('開口 三等 戈韻')) return 'a';
	if (is('合口 一等 戈韻')) return 'wa';
	if (is('合口 三等 戈韻')) return 'wa';
	// 假攝
	if (is('開口 二等 麻韻')) return 'a';
	if (is('開口 三等 麻韻')) return 'ya';
	if (is('合口 二等 麻韻')) return 'wa';
	// 遇攝
	if (is('一等 模韻')) return 'o';
	if (is('三等 魚韻')) return is('莊組') ? 'o' : 'yo';
	if (is('三等 虞韻')) return is('幫見影組') ? 'u' : (is('知組') ? 'yuu' : 'yu');
	// 蟹攝
	if (is('開口 一等 咍韻')) return 'ai';
	if (is('開口 二等 佳韻')) return 'ai';
	if (is('開口 二等 皆韻')) return 'ai';
	if (is('開口 四等 齊韻')) return 'ei';
	if (is('開口 一等 泰韻')) return 'ai';
	if (is('開口 二等 夬韻')) return 'ai';
	if (is('開口 三等 祭韻')) return 'ei';
	if (is('開口 三等 廢韻')) return 'ai';
	if (is('合口 一等 灰韻')) return 'wai';
	if (is('合口 二等 佳韻')) return 'wai';
	if (is('合口 二等 皆韻')) return 'wai';
	if (is('合口 四等 齊韻')) return 'wei';
	if (is('合口 一等 泰韻')) return 'wai';
	if (is('合口 二等 夬韻')) return 'wai';
	if (is('合口 三等 祭韻')) return 'wei';
	if (is('合口 三等 廢韻')) return 'wai';
	// 止攝
	if (is('開口 三等 支韻')) return 'i';
	if (is('開口 三等 脂韻')) return 'i';
	if (is('開口 三等 之韻')) return 'i';
	if (is('開口 三等 微韻')) return 'i';
	if (is('合口 三等 支韻 重紐A類')) return 'i';
	if (is('合口 三等 支韻')) return 'wi';
	if (is('合口 三等 脂韻 重紐A類')) return 'i';
	if (is('合口 三等 脂韻')) return 'wi';
	if (is('合口 三等 微韻')) return 'wi';
    // 效攝
	if (is('一等 豪韻 幫組')) return 'ou';
	if (is('一等 豪韻')) return 'au';
	if (is('二等 肴韻')) return 'au';
	if (is('三等 宵韻')) return 'eu';
	if (is('四等 蕭韻')) return 'eu';
	// 流攝
	if (is('一等 侯韻')) return 'ou';
	if (is('三等 尤韻')) return is('幫組') ? (is('明母') ? 'ou' : 'uu') : 'iu';
	if (is('三等 幽韻')) return 'iu';
	// 咸攝
	if (is('開口 一等 談韻')) return 'am';
	if (is('開口 二等 銜韻')) return 'am';
	if (is('開口 二等 咸韻')) return 'am';
	if (is('開口 三等 鹽韻')) return 'em';
	if (is('開口 三等 嚴韻')) return 'em';
	if (is('開口 四等 添韻')) return 'em';
	if (is('開口 一等 覃韻')) return 'am';
	if (is('合口 三等 凡韻')) return 'am';
	// 深攝
	if (is('三等 侵韻')) return 'im';
	// 山攝
	if (is('開口 一等 寒韻')) return 'an';
	if (is('開口 二等 刪韻')) return 'an';
	if (is('開口 二等 山韻')) return 'an';
	if (is('開口 三等 仙韻')) return 'en';
	if (is('開口 四等 先韻')) return 'en';
	if (is('合口 一等 桓韻')) return 'wan';
	if (is('合口 二等 刪韻')) return 'wan';
	if (is('合口 二等 山韻')) return 'wan';
	if (is('合口 三等 仙韻')) return 'wen';
	if (is('合口 四等 先韻')) return 'wen';
	// 臻攝
	if (is('開口 一等 痕韻')) return 'on';
	if (is('開口 三等 眞韻')) return 'in';
	if (is('開口 三等 臻韻')) return 'in';
	if (is('開口 三等 欣韻')) return 'in';
	if (is('開口 三等 元韻')) return 'en';
	if (is('合口 一等 魂韻')) return 'on';
    if (is('合口 三等 眞韻')) return 'win';
    if (is('合口 三等 諄韻 重紐A類')) return 'in';
	if (is('合口 三等 諄韻')) return is('來母') ? 'in' : 'yun';
	if (is('合口 三等 文韻')) return 'un';
	if (is('合口 三等 元韻')) return is('幫組') ? 'wan' : 'wen';
	// 宕攝
	if (is('開口 一等 唐韻')) return 'aŋ';
	if (is('開口 三等 陽韻')) return is('莊組') ? 'aŋ' : 'yaŋ';
	if (is('合口 一等 唐韻')) return 'waŋ';
	if (is('合口 三等 陽韻')) return is('見組 或 影曉母') ? 'wiyaŋ' : 'waŋ';
	// 梗攝
	if (is('開口 二等 庚韻')) return is('見幫知組 或 匣母') ? 'aŋ' : 'eŋ';
	if (is('開口 二等 耕韻')) return 'aŋ';
	if (is('開口 三等 庚韻')) return 'eŋ';
	if (is('開口 三等 清韻')) return 'eŋ';
	if (is('開口 四等 青韻')) return 'eŋ';
	if (is('合口 二等 庚韻')) return 'waŋ';
	if (is('合口 二等 耕韻')) return 'waŋ';
	if (is('合口 三等 庚韻')) return 'weŋ';
	if (is('合口 三等 清韻')) return 'yeŋ';
	if (is('合口 四等 青韻')) return 'weŋ';
	// 曾攝
	if (is('開口 一等 登韻')) return 'oŋ';
	if (is('開口 三等 蒸韻')) return 'yoŋ';
	if (is('合口 一等 登韻')) return 'oŋ';
	if (is('合口 三等 蒸韻')) return 'yoŋ';
	// 通攝
	if (is('一等 東韻')) return 'oŋ';
	if (is('三等 鍾韻')) return 'yoŋ';
    if (is('一等 冬韻')) return 'oŋ';
    if (is('三等 東韻 幫組')) return !is('入聲') || is('明母') ? 'oŋ': 'uŋ';
    if (is('三等 東韻 知影組')) return 'iŋ';
    if (is('三等 東韻 日來以母')) return 'iŋ';
    if (is('三等 東韻 見組 入聲')) return 'iŋ';
	if (is('三等 東韻')) return 'yuŋ';
	// 江攝
	if (is('二等 江韻')) return 'aŋ';
	throw new Error('無韻母規則');
}

let 聲母 = 聲母規則();
let 韻母 = 韻母規則();


// == 韻尾規則 ==

// 入聲韻尾
if (is('入聲')) {
	if (韻母.endsWith('m')) {
		韻母 = 韻母.slice(0, -1) + 'fu';
	} else if (韻母.endsWith('n')) {
		韻母 = 韻母.slice(0, -1) + 'tu';
	} else if (韻母.endsWith('ŋ')) {
		韻母 = 韻母.slice(0, -1) + (韻母[韻母.length - 2] == 'e' ? 'ki' : 'ku');
	}
}

// 鼻音韻尾同化鼻音聲母
// NV > BV | NVN > NVN
//   例外：蚊 ブン　NVN > NVN → mun > bun
if (聲母 == 'm' && (!韻母.endsWith('ŋ') || 韻母.startsWith('u') || is('唐陽東韻'))) {
    聲母 = 'b'
}

// 後鼻音韻尾
if (韻母.endsWith('ŋ')) {
    韻母 = 韻母.slice(0, -1) + (['e', 'i'].includes(韻母[韻母.length - 2]) ? 'i': 'u')
}

// 汚 0o -> wo
// 翁 0ou -> wou
if (is('影母') && (is('模韻') || is('東韻'))) {
    聲母 = 'w'
}

// == 韻頭規則 ==

// PyV > PV
if (is('幫組 三等') && (韻母.startsWith('y'))) {
    韻母 = 韻母.slice(1)
}

// JwV > JV
if (is('以母 合口') && (韻母.startsWith('w'))) {
    韻母 = 韻母.slice(1)
}


// == 韻母規則 ==

// 水 swi > スイ ｜ 類 rwi > ルイ |　對 twi > ツイ
if (['s', 't', 'r'].includes(聲母) && 韻母 == 'wi') {
    韻母 = 'u' + 韻母.slice(1)
}

if (韻母 == 'ii') {
    韻母 = 'yuu'
}

// == 特殊字規則 ==
if (字頭 == '寧') {
    聲母 = 'n'
}

function 片假名化(拉丁轉寫) {
    const 五十音 = {
        '0': {'a': 'ア', 'i': 'イ', 'u': 'ウ', 'e': 'エ', 'o': 'オ'},
        'k': {'a': 'カ', 'i': 'キ', 'u': 'ク', 'e': 'ケ', 'o': 'コ'},
        'g': {'a': 'ガ', 'i': 'ギ', 'u': 'グ', 'e': 'ゲ', 'o': 'ゴ'},
        's': {'a': 'サ', 'i': 'シ', 'u': 'ス', 'e': 'セ', 'o': 'ソ'},
        'z': {'a': 'ザ', 'i': 'ジ', 'u': 'ズ', 'e': 'ゼ', 'o': 'ゾ'},
        't': {'a': 'タ', 'i': 'チ', 'u': 'ツ', 'e': 'テ', 'o': 'ト'},
        'd': {'a': 'ダ', 'i': 'ヂ', 'u': 'ヅ', 'e': 'デ', 'o': 'ド'},
        'n': {'a': 'ナ', 'i': 'ニ', 'u': 'ヌ', 'e': 'ネ', 'o': 'ノ'},
        'f': {'a': 'ハ', 'i': 'ヒ', 'u': 'フ', 'e': 'ヘ', 'o': 'ホ'},
        'b': {'a': 'バ', 'i': 'ビ', 'u': 'ブ', 'e': 'ベ', 'o': 'ボ'},
        'm': {'a': 'マ', 'i': 'ミ', 'u': 'ム', 'e': 'メ', 'o': 'モ'},  
        'y': {'a': 'ヤ', 'i': '○',  'u': 'ユ', 'e': 'エ', 'o': 'ヨ'},
        'r': {'a': 'ラ', 'i': 'リ', 'u': 'ル', 'e': 'レ', 'o': 'ロ'},
        'w': {'a': 'ワ', 'i': 'ヰ', 'u': '○', 'e': 'ヱ', 'o': 'ヲ'},
    }

    let [wi, we] = 開關.wiwe ? 開關.小假名wiwe ? ['𛅤', '𛅥'] : ['ヰ', 'ヱ'] : ['○', '○']

    const 小假名 = {
        'y': {'a': 'ャ', 'i': '○', 'u': 'ュ', 'e': '○', 'o': 'ョ'},
        'w': {'a': 'ヮ', 'i':  wi, 'u': '○', 'e':   we, 'o': '𛅦'},
    }

    // 二合拗音：wiyau > 𛅤ャウ
    if (拉丁轉寫 == 'kwiyau') {
        if (開關.kwiyau && 開關.wiwe)
            return 開關.小假名wiwe ? 'ク𛅤ャウ' : 'クヰヤウ'
        else
            return 'キャウ'
    }

    if (拉丁轉寫 == 'gwiyau') {
        if (開關.kwiyau && 開關.wiwe)
            return 開關.小假名wiwe ? 'グ𛅤ャウ' : 'グヰヤウ'
        else
            return 'ギャウ'
    }

    // CVVCV > CV.V.CV
    // Ref: https://stackoverflow.com/a/49407494/2719898
    const 音節正則 = /[^aeiou]*[wy]?[aeioumn](?:$|[^aeiou](?=[^aeiou]))?/gi;

    音節列表 = 拉丁轉寫.match(音節正則)

    假名列表 = 音節列表.map((音節) => {
        if (音節.length == 3) {
            // CGV := CyV / CwV 
            let [C, G, V] = 音節;

            const GtoV = {
                'y': 'i',
                'w': 'u'
            }

            if (C == '0')
                return 五十音[G][V]
            if (小假名[G][V] == '○')
                return 五十音[C][V]
            if (!['k', 'g'].includes(C) && G == 'w')
                return 五十音[C][V]

            return 五十音[C][GtoV[G]] + 小假名[G][V]
        }

        const C = 音節.length == 2 ? 音節[0] : '0'
        const V = 音節.slice(-1)

        if (V.match(/[aiueo]/)) {
            return 五十音[C][V]
        } else if (V == 'n') {
            return 'ン'
        } else if (V == 'm') {
            return 開關.分mn ? 'ム' : 'ン'
        } else {
            throw new Error(`未知規則音節： ${音節}`);
        }
    })

    return 假名列表.join('')
}


// return `${片假名化(聲母 + 韻母)} (${聲母 + 韻母})`
return 片假名化(聲母 + 韻母);