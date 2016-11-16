
/*
 * 入力項目をマスクする為のスクリプト。現在まだテスト中
 */


var hyde1 = function (){
  //document.getElementsByName("label").style.display = "none";
  //document.getElementsByName("label").input = "test";
  lbl=document.getElementsByName("label")[0];
  /*
  if(lbl.item(0).value===""){
    lbl.item(0).value="test_write";
  }
  */
  lbl.type = "hidden";

};

var hydeISBN = function (){
  isbn = document.getElementById("master_search_isbn");
  isbn.type = "hidden";
};


//実行
//hyde1();
//hydeISBN();
