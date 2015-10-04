function move() {
  // ボタンIDを基準に移動
}

/**
 * 移動ボタンのdisabled設定
 */
function setBottons() {
  $("#btnAB").prop("disabled", false);
}

function start() {
  // dishAに設定し、ゲーム開始
  $("#dishA").val("123");
  $("#dishB").val("");
  $("#dishC").val("");
  setBottons();
}
