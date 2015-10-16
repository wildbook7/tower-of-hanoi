/**
 * ページ構築後に実行する処理
 */
$(function() {
  start();
});

function beTransparent() {
  if ($("#chkTransparent").prop("checked")) {
    $(".dish").css("color", "#b5e61d");
  } else {
    $(".dish").css("color", "initial");
  }
  setLayers();
}

function move(btn) {
  // ボタンIDを基準に移動
  var src = "#dish" + btn.id.substr(3, 1);
  var tgt = "#dish" + btn.id.substr(4, 1);
  $(tgt).val($(src).val().substr(0, 1) + $(tgt).val());
  $(src).val($(src).val().substr(1));
  setBottons();
  setLayers();
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

/**
 * スポンジケーキの表示
 */
function setLayers() {
  var transparentFlag = $("#chkTransparent").prop("checked");
  
  $.each(["A", "B" ,"C"], function(index, value) {
    var dishValue = $("#dish" + value).val();
    var layerSize;
    for(var layer = 1; layer <= 6; layer++) {
      layerSize = dishValue.substr(-1);
      if (transparentFlag || layerSize == "") {
        $("#layer"+ value + layer).attr("class", "nothing");
        $("#layer"+ value + layer).css("width", layerSize + "30%");
      } else {
        $("#layer"+ value + layer).attr("class", "layer");
        $("#layer"+ value + layer).css("width", layerSize + "0%");
      }
      dishValue = dishValue.substr(0, dishValue.length - 1);
    }
  });
  
  // イチゴの表示
  if ($("#dishA").val() == "" && $("#dishB").val() == "") {
    $("#layerC" + ($("#dishC").val().length + 1)).attr("class", "strawberry");
  }
}

function start() {
  // dishAに設定し、ゲーム開始
  $("#dishA").val("1234");
  $("#dishB").val("");
  $("#dishC").val("");
  setBottons();
  setLayers();
}
