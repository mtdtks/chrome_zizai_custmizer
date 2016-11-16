/*
 * テキストカラーを変更する処理
 */
var chLabel = function (changeWord, newWord){
  document.body.innerHTML = document.body.innerHTML.replace(changeWord, newWord, 'g');
};
//.style.color = "red";
var chColor = function (target){
  //document.getElementsByName(target).style.background = "#FF0000";
  document.body.innerHTML = document.body.innerHTML.replace(target, target, 'g').style.color = "red";
};

//var target = [];
//var target = [
    //'ISBN',
    //'著者'
//];

//var targetText = "ISBN";

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
  //var targetText = "ISBN";
  //chColor(targetText);

/*
var cellVal = new Array;
jQuery(function($) {
  var tblTbody = document.getElementsByClassName('form');
	// td内のtrをループ。rowsコレクションで,行位置取得。
	for (var i=0, rowLen=tblTbody.rows.length; i<rowLen; i++) {
		// tr内のtdをループ。cellsコレクションで行内セル位置取得。
		for (var j=0, colLen=tblTbody.rows[i].cells.length ; j<colLen; j++) {
		  //i行目のj列目のセルを取得
		  var cells = tblTbody.rows[i].cells[j];
		  //取得した値をテキストエリアへ表示
		  //document.getElementById("txtArea_javascript_sample_table_1").value += i + "行目" + j + "列目の値は「" + cells.innerHTML + "」です。\n";
      cellVal[i][j] = tblbody.rows[i].cells[j];
      console.log(tblbody.rows[i].cells[j]);
		}
  }
});
*/
/*
var tText;
tText = document.getElementsByClassName('form').table.rows[1].cells[0].firstChild.data;
alert(tText);
*/

var alt;
alt = document.getElementsByClassName("product_info").table;
var txt;
txt = alt.tbody.rows[1].cells[0].value;
alert('txt');

}

