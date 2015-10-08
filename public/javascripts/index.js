function move(btn) {
  // ボタンIDを基準に移動
  var src = "#dish" + btn.id.substr(3, 1);
  var tgt = "#dish" + btn.id.substr(4, 1);
  $(tgt).val($(src).val().substr(0, 1) + $(tgt).val());
  $(src).val($(src).val().substr(1));
  setBottons();
}

/**
 * 移動ボタンのdisabled設定
 */
function setBottons() {
  var a = $("#dishA").val();
  var b = $("#dishB").val();
  var c = $("#dishC").val();
  a = (a == "")? "9" : a.substr(0, 1);
  b = (b == "")? "9" : b.substr(0, 1);
  c = (c == "")? "9" : c.substr(0, 1);
  $("#btnAB").prop("disabled", (a >= b));
  $("#btnAC").prop("disabled", (a >= c));
  $("#btnBC").prop("disabled", (b >= c));
  $("#btnBA").prop("disabled", (b >= a));
  $("#btnCA").prop("disabled", (c >= a));
  $("#btnCB").prop("disabled", (c >= b));
}

function start() {
  // dishAに設定し、ゲーム開始
  $("#dishA").val("1234");
  $("#dishB").val("");
  $("#dishC").val("");
  setBottons();
}
