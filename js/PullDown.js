/*
 * プルダウンメニューをまとめる
 */


/*
 * テスト用 テスト済んだらmain.js側を削除
 */
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

