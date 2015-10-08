function move(btn) {
  // ボタンIDを基準に移動
  var src = "#dish" + btn.id.substr(3,1);
  var tgt = "#dish" + btn.id.substr(4,1);
  $(tgt).val($(src).val().substr(0,1) + $(tgt).val());
  $(src).val($(src).val().substr(1));
  setBottons();
}

/**
 * 移動ボタンのdisabled設定
 */
function setBottons() {
  var a = $("#dishA").val().substr(0,1);
  var b = $("#dishB").val().substr(0,1);
  var c = $("#dishC").val().substr(0,1);
  $("#btnAB").prop("disabled", (a == "" || a > b);
  $("#btnAC").prop("disabled", (a == "" || a > c);
  $("#btnBC").prop("disabled", (b == "" || b > c);
  $("#btnBA").prop("disabled", (b == "" || b > a);
  $("#btnCA").prop("disabled", (c == "" || c > a);
  $("#btnCB").prop("disabled", (c == "" || c > b);
}

function start() {
  // dishAに設定し、ゲーム開始
  $("#dishA").val("123");
  $("#dishB").val("");
  $("#dishC").val("");
  setBottons();
}
