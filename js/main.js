///////////////////////////////////////////////////////////
// author mtdtks 2015/08/17
///////////////////////////////////////////////////////////

/*
 * テスト
 */
alert(testAlert);



/** ラベルを置き換える関数
 *@replace label to neweord 
 *@Usage chLabel(changeWord, newWord)
 *@Param {string} changeWord - 変更する対象のID
 *@Param {string} neWord - 置き換える文字列
 */
var chLabel = function (changeWord, newWord){
  document.body.innerHTML = document.body.innerHTML.replace(changeWord, newWord, 'g');
};

/** プルダウンメニューを追加する
 *プルダウンループ
 *@Usage addSelecter([{string} rabelName],[{string} listName])
 *@Param {string} rabelName - 追加する項目のターゲットのID
 *@Param {string} listName - 追加するリストのID
 */

/*
function addSelecter(rabelName, listName){
    chg = document.getElementsByName("rabelName")[0];
    chg.setAttribute('list', listName);
    chg.setAttribute('autocomplete', 'on');

    var element = document.createElement('datalist');
    element.id = listName;
    var objBody = document.getElementsByName("rabelName")[0];
    objBody.appendChild(element);

    var select = document.getElementById(listName);
    var selectBox = {
        'listID1'     : 'listValue1',
        'listID2'   : 'listValue2',
        'listID3'      : 'listValue3',
    };

    for ( var i in selectBox ) {
        var option = document.createElement('option');

        option.setAttribute('value', i);
        option.innerHTML = selectBox[i];

    select.appendChild(option);
    }
}
*/

// プルダウンループ
/*
 * @desc サジェスト・リストを項目に追加する
 * @Usage sadjestAdd(elementID, SadjestData, categoryName)
 * @Param {String} elementID - 対象のDOMのIDorNAME
 * @Param {Array} SdData - サジェストのデータ配列
 * @Param {String} categ_name - サジェストデータにはIDが必要、重複はNG
 */
function sadjestAdd(ID, SdData, categ_name){
    chg = document.getElementsByName(ID)[0];
    //console.log(chg);
    chg.setAttribute('list', categ_name);
    chg.setAttribute('autocomplete', 'on');

    var element = document.createElement('datalist');
    element.id = categ_name;
    var objBody = document.getElementsByName(ID)[0];
    objBody.appendChild(element);

    var select = document.getElementById(categ_name);

    var selectBox = SdData;

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
    sadjestAdd("note1", MAIN_GENRE, "main_category");
    //selectchange();
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
    var idval = trval.match(/\d{8}/); //8桁の数字
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
