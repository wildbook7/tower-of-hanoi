function move(btn) {
  // ボタンIDを基準に移動
  var src = "#dish" + btn.id.substr(0,1);
  var tgt = "#dish" + btn.id.substr(1,1);
  $(tgt).val($(src).val().substr(0,1) + $(tgt).val());
  $(src).val($(src).val().substr(1));
}

/**
 * 移動ボタンのdisabled設定
 */
function setBottons() {
  $("#btnAB").prop("disabled", $("#dishA").val().equals(""));
  $("#btnAC").prop("disabled", $("#dishA").val().equals(""));
  $("#btnBA").prop("disabled", $("#dishB").val().equals(""));
  $("#btnBC").prop("disabled", $("#dishB").val().equals(""));
  $("#btnCA").prop("disabled", $("#dishC").val().equals(""));
  $("#btnCB").prop("disabled", $("#dishC").val().equals(""));
}

function start() {
  // dishAに設定し、ゲーム開始
  $("#dishA").val("123");
  $("#dishB").val("");
  $("#dishC").val("");
  setBottons();
}
