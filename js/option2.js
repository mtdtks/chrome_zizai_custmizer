//test
//get_default
/*
$(function() {
    var str = localStorage.getItem("test");
    var obj = JSON.parse(str);
    alert(obj['place']);
});
*/

// localStorageのキー
var key = "memotext";  
// localStorageの文字列をJSONで取得
var getObject = function() {
    var str = localStorage.getItem(key);
    return JSON.parse(str);
};
// JSONを文字列でlocalStorageに保存
var setObject = function(obj) {
    var str = JSON.stringify(obj);
    localStorage.setItem(key, str);
};
// localStorageに保存したデータの表示
var showStorage = function() {
    var obj = getObject();
    $('#value2').val(obj['memo']);
};
$(function(){
    // オプションデータの更新
    $('#put2').click(function() {
        var key = $('#key2').val();
        alert(key);
        var value = $('#value2').val();
        alert(value);
        var obj = getObject();
        alert(obj);
        if (!obj) {
            obj = new Object();
        }
        obj[key] = value;
        alert(value);
        setObject(obj);
        showStorage();
        alert("Update OK");
    });
    // オプションデータの表示
    showStorage();
});
