///////////////////////////////////////////////////////////
// author mtdtks 2015/08/17
///////////////////////////////////////////////////////////

/** ラベルを置き換える関数
 *@replace label to neweord 
 *@Desc chLabel(changeWord, newWord)
 */
var chLabel = function (changeWord, newWord){
  document.body.innerHTML = document.body.innerHTML.replace(changeWord, newWord, 'g');
};

//ジャンル-プルダウン
function selectchange(){
    chg = document.getElementsByName("note1")[0];
    //console.log(chg);
    chg.setAttribute('list','categ');
    chg.setAttribute('autocomplete', 'on');

    var element = document.createElement('datalist');
    element.id = "categ";
    var objBody = document.getElementsByName("note1")[0];
    objBody.appendChild(element);

    var select = document.getElementById("categ");
    var selectBox = {
'000_総記':'000総記',
'001_全集・叢書・選集':'001全集・叢書・選集',
'010_百科事典':'010百科事典',
'020_年鑑・雑誌':'020年鑑・雑誌',
'040_情報科学':'040情報科学',
'100_哲学・西洋哲学':'100哲学・西洋哲学',
'101_日本思想':'101日本思想',
'102_東洋思想':'102東洋思想',
'110_心理(学)':'110心理(学)',
'111_易占・風水・まじない':'111易占・風水・まじない',
'112_心霊・オカルト・念力':'112心霊・オカルト・念力',
'120_倫理(学)':'120倫理(学)',
'140_宗教(学)［全般］':'140宗教(学)［全般］',
'141_神道':'141神道',
'150_仏教':'150仏教',
'160_キリスト教':'160キリスト教',
'200_歴史全般(歴史学･文化史)':'200歴史全般(歴史学･文化史)',
'201_考古学・先史学':'201考古学・先史学',
'210_日本史(全般)':'210日本史(全般)',
'211_日本史(原始・古代)':'211日本史(原始・古代)',
'212_日本史(中世)':'212日本史(中世)',
'213_日本史(近世)':'213日本史(近世)',
'214_日本史(近代)':'214日本史(近代)',
'215_日本史(現代)':'215日本史(現代)',
'219_日本史(地方史・郷土史)':'219日本史(地方史・郷土史)',
'220_世界史(全般･その他)':'220世界史(全般･その他)',
'2210_欧米史(全般)':'2210欧米史(全般)',
'2211_イギリス史':'2211イギリス史',
'2212_ドイツ史':'2212ドイツ史',
'2213_フランス史':'2213フランス史',
'2214_スペイン史(イスパニア)':'2214スペイン史(イスパニア)',
'2215_イタリア史':'2215イタリア史',
'2216_ロシア史(ソビエト連邦)':'2216ロシア史(ソビエト連邦)',
'2217_アメリカ史(北米・ﾗﾃﾝｱﾒﾘｶ)':'2217アメリカ史(北米・ﾗﾃﾝｱﾒﾘｶ)',
'2220_東洋史(全般)':'2220東洋史(全般)',
'2222_中国史':'2222中国史',
'2223_朝鮮史':'2223朝鮮史',
'2226_インド史':'2226インド史',
'2227_中近東史':'2227中近東史',
'230_伝記・人物・系譜(全般)':'230伝記・人物・系譜(全般)',
'231_伝記・人物(日本)':'231伝記・人物(日本)',
'232_伝記・人物(世界)':'232伝記・人物(世界)',
'250_地理・地誌(全般)':'250地理・地誌(全般)',
'251_地理・地誌(日本)':'251地理・地誌(日本)',
'2511_地理・地誌(多摩・八王子)':'2511地理・地誌(多摩・八王子)',
'252_地理・地誌(世界)':'252地理・地誌(世界)',
'260_旅行・紀行':'260旅行・紀行',
'300_社会科学総記':'300社会科学総記',
'310_政治':'310政治',
'311_国防・軍事・戦史':'311国防・軍事・戦史',
'320_法律':'320法律',
'330_経済・財政・統計':'330経済・財政・統計',
'340_経営・社史':'340経営・社史',
'360_社会':'360社会',
'370_教育・学校史':'370教育・学校史',
'390_民族学・風習(全般)':'390民族学・風習(全般)',
'391_民族学・風習(日本)':'391民族学・風習(日本)',
'392_民族学・風習(世界)':'392民族学・風習(世界)',
'400_自然科学全般':'400自然科学全般',
'410_数学':'410数学',
'420_物理学':'420物理学',
'430_化学':'430化学',
'440_天文・地学':'440天文・地学',
'441_天文学':'441天文学',
'442_地学・地球科学':'442地学・地球科学',
'450_生物科学':'450生物科学',
'451_植物学':'451植物学',
'452_動物学':'452動物学',
'470_医学(薬学･歯学)':'470医学(薬学･歯学)',
'500_技術総記[工学･工業]':'500技術総記[工学･工業]',
'510_土木工学':'510土木工学',
'520_建設工学・建築学':'520建設工学・建築学',
'530_機械工学':'530機械工学',
'540_電気工学[原子力工学]':'540電気工学[原子力工学]',
'550_コンピュータ[電子通信]':'550コンピュータ[電子通信]',
'560_海洋･船舶･軍事工学':'560海洋･船舶･軍事工学',
'570_金属･鉱山工学':'570金属･鉱山工学',
'580_その他の工業(化学･製造工業)':'580その他の工業(化学･製造工業)',
'600_産業総記':'600産業総記',
'610_農林業':'610農林業',
'620_水産業':'620水産業',
'630_商業':'630商業',
'650_運輸･交通･通信事業':'650運輸･交通･通信事業',
'700_美術総記(美術史・芸術評論)':'700美術総記(美術史・芸術評論)',
'710_絵画彫刻全般':'710絵画彫刻全般',
'7110_日本美術・全般':'7110日本美術・全般',
'7111_日本美術・浮世絵(春画)':'7111日本美術・浮世絵(春画)',
'712_西洋美術':'712西洋美術',
'713_東洋美術':'713東洋美術',
'714_書道':'714書道',
'716_彫刻':'716彫刻',
'718_版画':'718版画',
'719_仏教美術':'719仏教美術',
'720_写真・印刷・工芸(全般)':'720写真・印刷・工芸(全般)',
'721_写真集':'721写真集',
'722_タレント写真集':'722タレント写真集',
'724_工芸':'724工芸',
'726_デザイン':'726デザイン',
'730_音楽・舞踏(全般)':'730音楽・舞踏(全般)',
'731_クラシック':'731クラシック',
'740_演劇・映画(全般)':'740演劇・映画(全般)',
'741_古典芸能[能楽・狂言･歌舞伎]':'741古典芸能[能楽・狂言･歌舞伎]',
'742_演劇':'742演劇',
'743_映画':'743映画',
'750_スポーツ［全般］':'750スポーツ［全般］',
'752_武術・格闘技［全般］':'752武術・格闘技［全般］',
'754_プロレス［全般］':'754プロレス［全般］',
'755_自動車・バイク':'755自動車・バイク',
'756_アウトドア［全般］':'756アウトドア［全般］',
'757_登山・山岳':'757登山・山岳',
'758_釣り・猟':'758釣り・猟',
'760_諸芸娯楽(全般)':'760諸芸娯楽(全般)',
'761_茶道・花道・香道':'761茶道・花道・香道',
'762_将棋':'762将棋',
'763_囲碁':'763囲碁',
'765_ミリタリー・兵器':'765ミリタリー・兵器',
'766_鉄道':'766鉄道',
'770_家政学･生活科学':'770家政学･生活科学',
'771_料理･食品':'771料理･食品',
'780_CD・レコード':'780CD・レコード',
'781_VHS・LD':'781VHS・LD',
'782_DVD・Blu-rayDisc':'782DVD・Blu-rayDisc',
'784_TVゲーム':'784TVゲーム',
'785_PCソフト':'785PCソフト',
'790_コミック全般':'790コミック全般',
'800_語学総記・言語学':'800語学総記・言語学',
'810_日本語(学)':'810日本語(学)',
'811_日本語・辞典(事典)':'811日本語・辞典(事典)',
'820_英語(学)':'820英語(学)',
'821_英語・辞典(事典)':'821英語・辞典(事典)',
'840_ドイツ語(学)':'840ドイツ語(学)',
'841_ドイツ語・辞典(事典)':'841ドイツ語・辞典(事典)',
'850_フランス語(学)':'850フランス語(学)',
'851_フランス語・辞典(事典)':'851フランス語・辞典(事典)',
'870_外国語(学)':'870外国語(学)',
'8701_外国語・辞典(事典)':'8701外国語・辞典(事典)',
'871_中国語(学)':'871中国語(学)',
'8711_中国語・辞典(事典)':'8711中国語・辞典(事典)',
'900_文学総記':'900文学総記',
'901_日本文学・全集':'901日本文学・全集',
'902_海外文学・全集':'902海外文学・全集',
'910_日本文学・総記':'910日本文学・総記',
'920_日本文学・詩歌':'920日本文学・詩歌',
'930_日本文学・小説物語':'930日本文学・小説物語',
'931_日本文学・古典文学':'931日本文学・古典文学',
'932_日本文学・近代文学':'932日本文学・近代文学',
'950_日本文学・評論随筆':'950日本文学・評論随筆',
'970_外国文学・小説物語':'970外国文学・小説物語',
'972_中国文学・小説物語':'972中国文学・小説物語',
'980_外国文学・評論随筆':'980外国文学・評論随筆',
'982_中国文学・漢文漢詩':'982中国文学・漢文漢詩',


    };
    for ( var i in selectBox ) {
        var option = document.createElement('option');

        option.setAttribute('value', i);
        option.innerHTML = selectBox[i];

    select.appendChild(option);
    }
}

//AMP-プルダウン
function selectchange2(){
    chg = document.getElementsByName("code1")[0];
    //console.log(chg);
    chg.setAttribute('list','amps');
    chg.setAttribute('autocomplete', 'on');

    var element = document.createElement('datalist');
    element.id = "amps";
    var objBody = document.getElementsByName("code1")[0];
    objBody.appendChild(element);

    var select = document.getElementById("amps");
    var selectBox = {
        '0_Off'     : '0_Off',
        '1_Watch'   : '1_Watch',
        '2_On'      : '2_On',
    };

    for ( var i in selectBox ) {
        var option = document.createElement('option');

        option.setAttribute('value', i);
        option.innerHTML = selectBox[i];

    select.appendChild(option);
    }
}





//目録分野-プルダウン

function selectchange3(){
    chg = document.getElementsByName("note2")[0];
    //console.log(chg);
    chg.setAttribute('list','hcateg');
    chg.setAttribute('autocomplete', 'on');

    var element = document.createElement('datalist');
    element.id = "hcateg";
    var objBody = document.getElementsByName("note2")[0];
    objBody.appendChild(element);

    var select = document.getElementById("hcateg");
    var selectBox = {
// ver.201602
'0000_三多摩全域' : '0000_三多摩全域',
'1000_南多摩全域' : '1000_南多摩全域',
'1201_八王子市' : '1201_八王子市',
'1209_町田市' : '1209_町田市',
'1212_日野市' : '1212_日野市',
'1224_多摩市' : '1224_多摩市',
'1225_稲城市' : '1225_稲城市',
'2000_北多摩全域' : '2000_北多摩全域',
'2202_立川市' : '2202_立川市',
'2203_武蔵野市' : '2203_武蔵野市',
'2204_三鷹市' : '2204_三鷹市',
'2206_府中市' : '2206_府中市',
'2207_昭島市' : '2207_昭島市',
'2208_調布市' : '2208_調布市',
'2210_小金井市' : '2210_小金井市',
'2211_小平市' : '2211_小平市',
'2213_東村山市' : '2213_東村山市',
'2214_国分寺市' : '2214_国分寺市',
'2215_国立市' : '2215_国立市',
'2219_狛江市' : '2219_狛江市',
'2220_東大和市' : '2220_東大和市',
'2221_清瀬市' : '2221_清瀬市',
'2222_東久留米市' : '2222_東久留米市',
'2223_武蔵村山市' : '2223_武蔵村山市',
'2229_西東京市' : '2229_西東京市',
'3000_西多摩全域' : '3000_西多摩全域',
'3205_青梅市' : '3205_青梅市',
'3218_福生市' : '3218_福生市',
'3227_羽村市' : '3227_羽村市',
'3228_あきる野市' : '3228_あきる野市',
'3303_瑞穂町' : '3303_瑞穂町',
'3305_日の出町' : '3305_日の出町',
'3307_檜原村' : '3307_檜原村',
'3308_奥多摩町' : '3308_奥多摩町',
    };
    for ( var i in selectBox ) {
        var option = document.createElement('option');

        option.setAttribute('value', i);
        option.innerHTML = selectBox[i];

    select.appendChild(option);
    }
}

/* 過去バージョン
'0000_三多摩全域':'0000_三多摩全域',
'1000_南多摩全域':'1000_南多摩全域',
'1201_八王子市':'1201_八王子市',
'1209_町田市':'1209_町田市',
'1212_日野市':'1212_日野市',
'1224_多摩市':'1224_多摩市',
'1225_稲城市':'1225_稲城市',
'2000_北多摩全域':'2000_北多摩全域',
'2202_立川市':'2202_立川市',
'2203_武蔵野市':'2203_武蔵野市',
'0220_河川':'0220_河川',
'0230_人物':'0230_人物',
*/

//目録分野サブ-プルダウン
function selectchange4(){
    chg = document.getElementsByName("note3")[0];
    //console.log(chg);
    chg.setAttribute('list','hcateg_sub');
    chg.setAttribute('autocomplete', 'on');

    var element = document.createElement('datalist');
    element.id = "hcateg_sub";
    var objBody = document.getElementsByName("note3")[0];
    objBody.appendChild(element);

    var select = document.getElementById("hcateg_sub");
    var selectBox = {
'9160_宗教（神道・仏教、他）' : '9160_宗教（神道・仏教、他）',
'9210_考古学・遺跡調査資料' : '9210_考古学・遺跡調査資料',
'9213_歴史' : '9213_歴史',
'9289_人物・一族・組織' : '9289_人物・一族・組織',
'9290_地誌・地理' : '9290_地誌・地理',
'9291_河川' : '9291_河川',
'9292_高尾山' : '9292_高尾山',
'9293_多摩の山' : '9293_多摩の山',
'9299_地図' : '9299_地図',
'9300_社会（政治・経済・教育）' : '9300_社会（政治・経済・教育）',
'9380_風俗習慣・民俗学' : '9380_風俗習慣・民俗学',
'9460_生き物' : '9460_生き物',
'9600_技術・産業・商業' : '9600_技術・産業・商業',
'9682_街道' : '9682_街道',
'9685_交通・乗り物' : '9685_交通・乗り物',
'9689_観光ガイド' : '9689_観光ガイド',
'9700_作品（絵画・写真・文芸・音楽）' : '9700_作品（絵画・写真・文芸・音楽）',
    };
    for ( var i in selectBox ) {
        var option = document.createElement('option');

        option.setAttribute('value', i);
        option.innerHTML = selectBox[i];

    select.appendChild(option);
    }
}

/* 過去バージョン
'0_【目録リストから外す】':'0_【目録リストから外す】',
'200_【保留用】':'200_【保留用】',
'210_文書・文献資料・肉筆':'210_文書・文献資料・肉筆',
'220_歴史':'220_歴史',
'230_寺社仏閣':'230_寺社仏閣',
'240_民俗・文化史':'240_民俗・文化史',
'250_乗り物・交通':'250_乗り物・交通',
'260_自然・生物':'260_自然・生物',
'270_団体史・学校史・社史':'270_団体史・学校史・社史',
'280_趣味・画集':'280_趣味・画集',
'290_雑誌・逐次刊行物':'290_雑誌・逐次刊行物',
'295_発掘調査資料':'295_発掘調査資料',
*/

//書籍_サイズNo.-プルダウン
function selectchange5(){
    chg = document.getElementsByName("note4")[0];
    //console.log(chg);
    chg.setAttribute('list','bsize');
    chg.setAttribute('autocomplete', 'on');

    var element = document.createElement('datalist');
    element.id = "bsize";
    var objBody = document.getElementsByName("note4")[0];
    objBody.appendChild(element);

    var select = document.getElementById("bsize");
    var selectBox = {
        '1_並'     : '1_並',
        '2_大'     : '2_大',
        '3_セット' : '3_セット',
        '4_特大'   : '4_特大',
        '5_ｺﾐｯｸｾｯﾄ': '5_ｺﾐｯｸｾｯﾄ',
    };
    for ( var i in selectBox ) {
        var option = document.createElement('option');

        option.setAttribute('value', i);
        option.innerHTML = selectBox[i];

    select.appendChild(option);
    }
}

//商品ランク-プルダウン
function selectchange6(){
    chg = document.getElementsByName("code3")[0];
    //console.log(chg);
    chg.setAttribute('list','irank');
    chg.setAttribute('autocomplete', 'on');

    var element = document.createElement('datalist');
    element.id = "irank";
    chg.appendChild(element);

    var select = document.getElementById("irank");
    var selectBox = {
        '0_' : '0_',
        '1_R': '1_R',
        '2_A': '2_A',
        '3_B': '3_B',
        '4_C': '4_C',
        '5_D': '5_D',
        '6_E': '6_E',
    };
    for ( var i in selectBox ) {
        var option = document.createElement('option');

        option.setAttribute('value', i);
        option.innerHTML = selectBox[i];

    select.appendChild(option);
    }
}
//保管場所-プルダウン
function selectchange7(){
    chg = document.getElementsByName("stock_place")[0];
    //console.log(chg);
    chg.setAttribute('list','stkplc');
    chg.setAttribute('autocomplete', 'on');

    var element = document.createElement('datalist');
    element.id = "stkplc";
    chg.appendChild(element);

    var select = document.getElementById("stkplc");
    var selectBox = {
        '12_配送センター' : '12_配送センター',
        '10_支店' : '10_支店',
        '9_本店' : '9_本店',
    };
    for ( var i in selectBox ) {
        var option = document.createElement('option');

        option.setAttribute('value', i);
        option.innerHTML = selectBox[i];

    select.appendChild(option);
    }
}

//書籍_形態№-プルダウン
function selectchange8(){
    chg = document.getElementsByName("code4")[0];
    //console.log(chg);
    chg.setAttribute('list','formid');
    chg.setAttribute('autocomplete', 'on');

    var element = document.createElement('datalist');
    element.id = "formid";
    var objBody = document.getElementsByName("code4")[0];
    objBody.appendChild(element);

    var select = document.getElementById("formid");
    var selectBox = {
        '1_ハードカバー' : '1_ハードカバー',
        '2_文庫'         : '2_文庫',
        '3_新書'         : '3_新書',
        '4_ソフトカバー･冊子':'4_ソフトカバー･冊子',
        '5_辞典・図鑑'   : '5_辞典・図鑑',
        '6_図録・カタログ':'6_図録・カタログ',
        '7_雑誌・季刊誌':'7_雑誌・季刊誌',
        '8_和綴じ本'     :'8_和綴じ本',
        '9_その他'       :'9_その他',
        '10_CD'          :'10_CD',
        '11_DVD/BD'      :'11_DVD/BD',
        '12_VHS'         : '12_VHS',
        '13_ゲーム'      : '13_ゲーム',
        '14_PCソフトウェア': '14_PCソフトウェア ',
    };
    for ( var i in selectBox ) {
        var option = document.createElement('option');

        option.setAttribute('value', i);
        option.innerHTML = selectBox[i];

    select.appendChild(option);
    }
}


//自店用コード5
//AMP_出品フラグ
function selectchange9(){
    chg = document.getElementsByName("code5")[0];
    //alert(chg);
    chg.setAttribute('list','ampflg');
    chg.setAttribute('autocomplete', 'on');

    var element = document.createElement('datalist');
    element.id = "ampflg";
    var objBody = document.getElementsByName("code5")[0];
    objBody.appendChild(element);

    var select = document.getElementById("ampflg");
    var selectBox = {
        '0_Amazonに出品する' : '0_Amazonに出品する',
        '1_Amazonに出品しない' : '1_Amazonに出品しない',
    };
    for ( var i in selectBox ) {
        var option = document.createElement('option');

        option.setAttribute('value', i);
        option.innerHTML = selectBox[i];

    select.appendChild(option);
    }
}


//初期値の自動入力
function default_val(place){
    //入力されていた場合は実行しない
    //場所を入力
    sp=document.getElementsByName("stock_place");
    if(sp.item(0).value===""){
    sp.item(0).value=place;
    }
    //冊数を入力
    nm=document.getElementsByName("sets_num");
    if(nm.item(0).value===""){
    nm.item(0).value="1冊";
    }

    //AMP_LowPriceを入力
    cd1=document.getElementsByName("code1");
    if(cd1.item(0).value===""){
    cd1.item(0).value="0_Off";
    }
    //ジャンル初期値を入力
    nt1=document.getElementsByName("note1");
    if(nt1.item(0).value===""){
    nt1.item(0).value="----_---";
    }
    //サイズを入力
    nt4=document.getElementsByName("note4");
    if(nt4.item(0).value===""){
    nt4.item(0).value="1_並";
    }
    //Rank
    cd3=document.getElementsByName("code3");
    if(cd3.item(0).value===""){
    cd3.item(0).value="4_C";
    }
    //書籍_形態№*
    cd4=document.getElementsByName("code4");
    if(cd4.item(0).value===""){
    cd4.item(0).value="1_ハードカバー";
    }
    //AMP_出品フラグ*
    cd5=document.getElementsByName("code5");
    if(cd5.item(0).value===""){
    cd5.item(0).value="0_Amazonに出品する";
    }

}
function default_val_memo(memo){ //memoの反映
    var cd=document.getElementsByName("note5");
    if(cd.item(0).value===""){
    cd.item(0).value=memo;
    }

}
/*
//むりぽ
var optionPlace;
var optionMemo;
//chrome.runtimeの値を渡すだけの関数
function keyPipe(text,option){
  option = text;
  return option;
}
*/
//在庫ステータスプルダウン初期値設定
//販売可能をデフォルトにする
function change_pulldown(){
   pulldown_option = document.getElementById("status").getElementsByTagName('option');
         pulldown_option[1].selected = true;
}

function focus2isbn(){
    var isbnfocus = document.getElementById("master_search_isbn");
    isbnfocus.focus();
}

//展開ボタンクリック
function open_form_button(){
    var click1 = document.getElementById("sub_info_btn");
    var click2 = document.getElementById("sub_manager_btn");
    click1.click();
    click2.click();
}

var url = location.href;
//test
//alert(url);

//入力モードurl例
//https://www.kosho.or.jp/koshoadmin/products/product.php(or php?)

//入力時だけの完全一致バージョン
//var re = /^https:\/\/www\.kosho\.or\.jp\/koshoadmin\/products\/product\.php$|^https:\/\/www\.kosho\.or\.jp\/koshoadmin\/products\/product\.php\?$/;

//入力モード+エディットモードurl
var re = /https:\/\/www\.kosho\.or\.jp\/koshoadmin\/products\/product\.php*/;

//エディットモードオープン時
//https://www.kosho.or.jp/koshoadmin/products/product.php?mode=pre_edit&product_id=7077948&is_popup=true
//在庫複製モードのurl例　→入力時と同じでOK
//https://www.kosho.or.jp/koshoadmin/products/product.php?mode=copy&product_id=9391272&is_popup=ture
//写真アップ時
//https://www.kosho.or.jp/koshoadmin/products/product.php?#main_large_image
//https://www.kosho.or.jp/koshoadmin/products/product.php?#sub_large_image

//エディットモードurl
var editurl = /https:\/\/www\.kosho\.or\.jp\/koshoadmin\/products\/product\.php\?mode=pre_edit\&product_id=*/;
var picurl = /https:\/\/www\.kosho\.or\.jp\/koshoadmin\/products\/product\.php\?#*/;




//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
//実行_START
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

if ( re.test(url) ){

  var chName = {
    '自店用コード1'    : 'AMP_LowPrice*',
    '自店用テキスト1'  : 'ジャンル',
    '（分類コード）'   : '',
    '自店用テキスト2'  : '目録分類',
    '（自店分類）'     : '',
    '自店用テキスト3'  : '目録分類_サブ',
    '自店用テキスト4'  : '書籍_サイズNo.*',
    '自店用テキスト5'  : '在庫メモ',
    '自店用コード2'    : 'AMP販売価格',
    '自店用コード3'    : '商品ランク*',
    '自店用コード4'    : '書籍_形態№*',
    '自店用コード5'    : 'AMP_出品フラグ*',
  };

  for(var key in chName){//json形式を交互にループ
    //test ok
    //alert("key=" + key + ", " + "chName[key]=" + chName[key]);
    chLabel(key, chName[key]);
  }

    //プルダウンは最後に実行しないといけないみたい。
    selectchange();
    selectchange2();
    selectchange3();
    selectchange4();
    selectchange5();
    selectchange6();
    selectchange7();
    selectchange8();
    selectchange9();

    //フォーム展開
    open_form_button();

    //isbnにフォーカス
    focus2isbn();
/*
 *  urlで判断しない方が良いかも
    if (!editurl.test(url) && !picurl.test(url)){  //更新モードオープン時

        } else {
        console.log('zizai_mask:edit_mode=enabled');
       }
*/
    //NEWVERSION NH_Original_IDで判断する

    //NHマスターid確認
    //新規はnull
    var trval = $('tr').eq(20).text(); //trから探す
    var idval = trval.match(/\d{8}/);　//8桁の数字
    console.log('NH_Original_ID:' + idval);

    //■■■■■■memo■■■■■■■
    //どうもchrome.runtimeはグローバル変数に取ってこれないみたいだ。
    //しょうがないので関数default_val_memoを定義した。

    //background.jsから取得する place
    chrome.runtime.sendMessage({method: "getLocalStorage", key: "test"}, function(response) {
        //test
        //alert(response.data);
        var obj = JSON.parse(response.data);
        var optionPlace = obj.place;
        //alert(optionPlace);

       //デフォルト値の入力
       default_val(optionPlace);
        //keyPipe(place, optionPlace);
        //alert(keyPipe(place, optionPlace));
    });
    //background.jsから取得する memotext
    chrome.runtime.sendMessage({method: "getLocalStorage_memo", key: "memo"}, function(response) {
        var obj = JSON.parse(response.data);
        var optionMemo = obj.memotext;
        //alert("local: " + optionMemo);

        //メモ欄の入力
        default_val_memo(optionMemo);
    });

    if (idval === null){ //新規入力
        change_pulldown();
        //default_val(optionPlace); ローカル変数を外に出せない...
        console.log('zizai_mask:input_mode=enabled');
    } else {
        console.log('zizai_mask:edit_mode=enabled');　//更新、既に入力されている場合はデフォルトを変更しない。
    }

}



//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
//実行_END
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

//▲▲▲zizai_mask_code_end▲▲▲

//▼▼▼受注管理設定▼▼▼
//受注検索の画面でデフォルトを今日の日付に設定する
//https://www.kosho.or.jp/koshoadmin/order/
function default_pulldown(){

    pulldown_option = document.getElementsByName("search_sorderyear")[0].getElementsByTagName('option');
    for(i=0; i<pulldown_option.length;i++){
        if(pulldown_option[i].value == myYear){
            pulldown_option[i].selected = true;
            break;
        }
    }
        //alert(pulldown_option[0]);
    pulldown_option2 = document.getElementsByName("search_sordermonth")[0].getElementsByTagName('option');
    for(i=0; i<pulldown_option2.length;i++){
        if(pulldown_option2[i].value == myMonth){
            pulldown_option2[i].selected = true;
            break;
        }
    }
    pulldown_option3 = document.getElementsByName("search_sorderday")[0].getElementsByTagName('option');
    for(i=0; i<pulldown_option3.length;i++){
        if(pulldown_option3[i].value == myDate){  //
            pulldown_option3[i].selected = true;
            break;
        }
    }

    pulldown_option4 = document.getElementsByName("search_eorderyear")[0].getElementsByTagName('option');
    for(i=0; i<pulldown_option4.length;i++){
        if(pulldown_option4[i].value == myYear){
            pulldown_option4[i].selected = true;
            break;
        }
    }
    pulldown_option5 = document.getElementsByName("search_eordermonth")[0].getElementsByTagName('option');
    for(i=0; i<pulldown_option5.length;i++){
        if(pulldown_option5[i].value == myMonth){
            pulldown_option5[i].selected = true;
            break;
        }
    }
    pulldown_option6 = document.getElementsByName("search_eorderday")[0].getElementsByTagName('option');
    for(i=0; i<pulldown_option6.length;i++){
        if(pulldown_option6[i].value == myDate){
            pulldown_option6[i].selected = true;
            break;
        }
    }
}

//詳細検索を展開
//https://www.kosho.or.jp/koshoadmin/order/?

function search_form_open(){
    var clickopen = document.getElementById("order_search_cond_btn");
    clickopen.click();
}

var order_search = /https:\/\/www\.kosho\.or\.jp\/koshoadmin\/order\/*/;
if ( order_search.test(url) ){

    now = new Date();

    var myYear  = now.getFullYear();    // 年
    var myMonth = now.getMonth()+1; // 月
    var myDate  = now.getDate();    // 日
    //test
    //alert(myYear + "," + myMonth + "," + myDate);

    //プルダウンを今日の日付に
    default_pulldown();
    //フォームオープン
    search_form_open();

    console.log('zizai_mask:order_mode=enabled');
    } else {
    console.log('zizai_mask:order_mode=disabled');
}
//▲▲▲受注管理設定▲▲▲
