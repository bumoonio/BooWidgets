// BooTxWidgets 1.0 by Bumoon https://bumoon.io
let divBootx = "divBootx" + Math.random().toString(36).slice(2), pBootx = "pBootx" + Math.random().toString(18).slice(1); !function () { var e = document.getElementsByTagName("bootransferwidget"), t = e[0].innerHTML; if (3 != t.split(";").length)return e[0].innerHTML='<'+pBootx+' style="color:red;text-align:center;display:block;margin:auto">Invalid Parameter</'+pBootx+'>';o=document.createElement("link"),o.rel="stylesheet",o.href="https://fonts.googleapis.com/css?family=Cabin:300,400,700",document.getElementsByTagName("head")[0].appendChild(o),e[0].addEventListener("click",(function(e){window.open("https://boo.bumoon.io/transfer?to="+t.split(";")[0]+"&token="+t.split(";")[1]+"&amount="+t.split(";")[2],"_blank")})),e[0].innerHTML='<'+divBootx+' id="BooTxWidgetSelector" style="cursor:pointer;border:1px solid grey;background-blend-mode:overlay;display:flex;text-align:center;width:100%;height:89px;padding:10px;margin:auto;background-image:url(https://raw.githubusercontent.com/bumoonio/BooWidgets/master/boowidget.png),linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8));background-repeat:no-repeat;background-size:cover;border-radius:20px"><boologo style="background-image:url(https://raw.githubusercontent.com/bumoonio/BooWidgets/master/boologo.png);margin:auto;margin-left:5px;margin-right:14px;width:65px;height:65px;background-size:contain;background-repeat:no-repeat"></boologo><innertext style="text-align:start;margin-top:16px;align-self:center;width:80px;color:#f2f2f2"><txwith style="font-size:12px;display:inherit;font-family:cabin;line-height:0.05">Transfer With</txwith><bootext style="font-family:cabin;font-weight:bold;font-size:44px!important;line-height:1.4">Boo!</bootext></innertext></'+divBootx+'>'}();