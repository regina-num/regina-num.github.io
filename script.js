$(document).ready(function(){$('a[href^="#"]').on("click",function(a){a.preventDefault();var t=$(this).attr("href"),n=$(t).offset().top-$("div.top_panel").height()-25;$("html, body").animate({scrollTop:n},600)}),$(".slicknav_nav a").click(function(a){a.preventDefault();var t=$(this).attr("href"),n=$(t).offset().top-$("div.top_panel").height()-5;$("html, body").animate({scrollTop:n},600),$(".slicknav_btn").removeClass("slicknav_open").addClass("slicknav_collapsed"),$(".slicknav_nav").addClass("slicknav_hidden").attr("aria-hidden","true").css("display","none")})});