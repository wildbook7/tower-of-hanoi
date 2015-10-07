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
  $("#btnAB").prop("disabled", $("#dishA").val() == "");
  $("#btnAC").prop("disabled", $("#dishA").val() == "");
  $("#btnBA").prop("disabled", $("#dishB").val() == "");
  $("#btnBC").prop("disabled", $("#dishB").val() == "");
  $("#btnCA").prop("disabled", $("#dishC").val() == "");
  $("#btnCB").prop("disabled", $("#dishC").val() == "");
}

function start() {
  // dishAに設定し、ゲーム開始
  $("#dishA").val("123");
  $("#dishB").val("");
  $("#dishC").val("");
  setBottons();
}
