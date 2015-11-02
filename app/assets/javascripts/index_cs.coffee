# dishAにケーキを設定し、ゲーム開始
start = ->
  $("#dishA").val("1234")
  $("#dishB").val("")
  $("#dishC").val("")
  setBottons()
  setLayers()

# ページ構築後に実行する処理
$ ->
  start()

# ケーキを透明にするオプション
$("#chkTransparent").click ->
  alert("why")
#  if $("#chkTransparent").prop("checked")
#    $(".dish").css("color", "#b5e61d")
#  else
#    $(".dish").css("color", "initial")
#  setLayers()

move = (btn) ->
  # ボタンIDを基準に移動
  src = "#dish" + btn.id.substr(3, 1)
  tgt = "#dish" + btn.id.substr(4, 1)
  $(tgt).val($(src).val().substr(0, 1) + $(tgt).val())
  $(src).val($(src).val().substr(1))
  setBottons()
  setLayers()

# 移動ボタンのdisabled設定
setBottons = ->
  a = $("#dishA").val()
  b = $("#dishB").val()
  c = $("#dishC").val()
  a = (a == "")? "9" : a.substr(0, 1)
  b = (b == "")? "9" : b.substr(0, 1)
  c = (c == "")? "9" : c.substr(0, 1)
  $("#btnAB").prop("disabled", (a >= b))
  $("#btnAC").prop("disabled", (a >= c))
  $("#btnBC").prop("disabled", (b >= c))
  $("#btnBA").prop("disabled", (b >= a))
  $("#btnCA").prop("disabled", (c >= a))
  $("#btnCB").prop("disabled", (c >= b))

# スポンジケーキの表示
setLayers = ->
  transparentFlag = $("#chkTransparent").prop("checked")
  
  for i in ["A", "B" ,"C"]
    dishValue = $("#dish" + i).val()
    layerSize
    for layer in [1..6]
      layerSize = dishValue.substr(-1)
      if transparentFlag || layerSize == ""
        $("#layer"+ i + layer).attr("class", "nothing")
        $("#layer"+ i + layer).css("width", layerSize + "30%")
      else
        $("#layer"+ i + layer).attr("class", "layer")
        $("#layer"+ i + layer).css("width", layerSize + "0%")
      dishValue = dishValue.substr(0, dishValue.length - 1)
  
  # イチゴの表示
  if $("#dishA").val() == "" && $("#dishB").val() == ""
    $("#layerC" + ($("#dishC").val().length + 1)).attr("class", "strawberry")
