//test
//alert("test");
//get_default
/*
$(function() {
    var str = localStorage.getItem("test");
    var obj = JSON.parse(str);
    alert(obj['place']);
});
*/
// localStorageのキー
var key = "test";  
var key2 = "memo";
// localStorageの文字列をJSONで取得
var getObject = function() {
    var str = localStorage.getItem(key);
    return JSON.parse(str);
};
var getObject2 = function() {
    var str = localStorage.getItem(key2);
    return JSON.parse(str);
};

// JSONを文字列でlocalStorageに保存
var setObject = function(obj) {
    var str = JSON.stringify(obj);
    localStorage.setItem(key, str);
};
var setObject2 = function(obj) {
    var str = JSON.stringify(obj);
    localStorage.setItem(key2, str);
};

// localStorageに保存したデータの表示
var showStorage = function() {
    var obj = getObject();
    $('#value').val(obj.place);
    //alert($('#value').val(obj.place));
};
var showStorage2 = function() {
    var obj = getObject2();
    $('#mtext').val(obj.memotext);
    //alert($('#mtext').val(obj.memotext));
};

$(function(){
    // オプションデータの更新
    $('#put').click(function() {
        var key = $('#key').val();
        var value = $('#value').val();
        var obj = getObject(key);
        if (!obj) {
          obj = new Object();
        }
        obj[key] = value;
        setObject(obj);
        showStorage();
        alert("保存しました\r" + "部署設定:" + value);
    });
    // オプションデータの表示
    showStorage();
});
$(function(){ //memotext
    // オプションデータの更新
    $('#put2').click(function() {
        var key = $('#memo').val();
        var value = $('#mtext').val();
        var obj = getObject2(key);
        if (!obj) {
          obj = new Object();
        }
        obj[key] = value;
        setObject2(obj);
        showStorage2();
        alert("保存しました\r" + "デフォルトメモ:" + value);
    });
    // オプションデータの表示
    showStorage2();
});
