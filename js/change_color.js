/*
 * テキストカラーを変更する処理
 */
var chLabel = function (changeWord, newWord){
  document.body.innerHTML = document.body.innerHTML.replace(changeWord, newWord, 'g');
};
//.style.color = "red";
var chColor = function (target){
  document.getElementsByName(target).style.color = "red";
};

//var target = [];
//var target = [
    //'ISBN',
    //'著者'
//];

var targetText = "ISBN";

//alert(REG.edit);
var url = location.href;

if( REG.edit.test(url) ){
    //alert("testOK");
  /*
  for(var i in target){//json形式を交互にループ
    alert(target[i]);
    chLabel(target[i]);
  }
  */
  chLabel(targetText);

}

