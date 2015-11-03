###
readyイベント
###
$ ->
  # 初期化
  start()
  
  # 移動ボタン
  $("#btnAB").click -> move(@)
  $("#btnAC").click -> move(@)
  $("#btnBA").click -> move(@)
  $("#btnBC").click -> move(@)
  $("#btnCB").click -> move(@)
  $("#btnCA").click -> move(@)
  
  # はじめからボタン
  $("#btnSTART").click -> start()
  
  # ケーキを透明にするオプション
  $("#chkTransparent").click ->
    if $("#chkTransparent").prop("checked")
      $(".dish").css("color", "#b5e61d")
    else
      $(".dish").css("color", "initial")
    setLayers()

###
移動ボタンのdisabled設定
###
setBottons = ->
  a = $("#dishA").val()
  b = $("#dishB").val()
  c = $("#dishC").val()
  a = if(a == "") then "9" else a.substr(0, 1)
  b = if(b == "") then "9" else b.substr(0, 1)
  c = if(c == "") then "9" else c.substr(0, 1)
  $("#btnAB").prop("disabled", (a >= b))
  $("#btnAC").prop("disabled", (a >= c))
  $("#btnBC").prop("disabled", (b >= c))
  $("#btnBA").prop("disabled", (b >= a))
  $("#btnCA").prop("disabled", (c >= a))
  $("#btnCB").prop("disabled", (c >= b))

###
スポンジケーキの表示
###
setLayers = ->
  transparentFlag = $("#chkTransparent").prop("checked")
  
  for i in ["A", "B" ,"C"]
    dishValue = $("#dish" + i).val()
    for layer in [1..6]
      layerSize = dishValue.substr(-1) # ケーキ層の大きさ
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

###
dishAにケーキを設定し、ゲーム開始
###
start = ->
  $("#dishA").val("1234")
  $("#dishB").val("")
  $("#dishC").val("")
  setBottons()
  setLayers()

###
ボタンIDを基準に移動
###
move = (btn) ->
  src = "#dish" + btn.id.substr(3, 1)
  tgt = "#dish" + btn.id.substr(4, 1)
  $(tgt).val($(src).val().substr(0, 1) + $(tgt).val())
  $(src).val($(src).val().substr(1))
  setBottons()
  setLayers()
