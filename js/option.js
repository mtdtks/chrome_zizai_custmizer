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
    $('#value').val(obj['place']);
};
$(function(){
    // オプションデータの更新
    $('#put').click(function() {
        var key = $('#key').val();
        var value = $('#value').val();
        var obj = getObject();
        if (!obj) {
            obj = new Object();
        }
        obj[key] = value;
        setObject(obj);
        showStorage();
        alert("Update OK");
    });
    // オプションデータの表示
    showStorage();
});
