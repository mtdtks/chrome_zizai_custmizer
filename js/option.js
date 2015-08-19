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
//test
var getObject = function() {
    
    var str = localStorage.getItem(key);
    return JSON.parse(str);
};
//memo
var getObject2 = function() {
    
    var str = localStorage.getItem(key2);
    return JSON.parse(str);
};

// JSONを文字列でlocalStorageに保存
var setObject = function(obj) {
    var str = JSON.stringify(obj);
    alert(obj);
    localStorage.setItem(key, str);
    localStorage.setItem(key2, str);
};
// localStorageに保存したデータの表示
var showStorage = function() {
    var obj = getObject();
    $('#value').val(obj['test']);
    $('#value').val(obj['memo']);
};
$(function(){
    // オプションデータの更新
    $('#put').click(function() {
        var key = $('#key').val();
        var key2 = $('#key2').val();
        var value = $('#value').val();
        var value2 = $('#value2').val();
        var t = getObject();
        var m = getObject2();
        var obj = t + m;
        if (!obj) {
            obj = new Object();
        }
        obj[key] = value;
        obj[key2] = value;
        setObject(obj);
        showStorage();

        alert("Update OK");
    });
    // オプションデータの表示
    showStorage();
});
