(function (d) {
  var config = {
      kitId: "xvm0kzh",
      scriptTimeout: 3000,
      async: true,
    },
    h = d.documentElement,
    t = setTimeout(function () {
      h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
    }, config.scriptTimeout),
    tk = d.createElement("script"),
    f = false,
    s = d.getElementsByTagName("script")[0],
    a;
  h.className += " wf-loading";
  tk.src = "https://use.typekit.net/" + config.kitId + ".js";
  tk.async = true;
  tk.onload = tk.onreadystatechange = function () {
    a = this.readyState;
    if (f || (a && a != "complete" && a != "loaded")) return;
    f = true;
    clearTimeout(t);
    try {
      Typekit.load(config);
    } catch (e) {}
  };
  s.parentNode.insertBefore(tk, s);
})(document);

// 　プラグイン「slick」の起動とカスタマイズ
$(document).ready(function () {
  $(".slider").slick({
    autoplay: true, //自動再生on
    fade: true, //横スクロールではなくフェードアニメにする
    arrows: true, //矢印表示
    pauseOnHover: false, //ホバー時の再生停止をoff
    pauseOnFocus: false, //フォーカス時の再生停止をoff
    autoplaySpeed: 1500, //自動再生の速度（アニメーションの間隔）を0.5秒に
    speed: 2800, //アニメーションの動き自体の速度を2秒に
    cssEase: "linear", //フェードアニメーションのタイミングを線形に
  });
});

// トップに戻るボタン

$(function () {
  var pagetop = $("#page_top");
  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $("body, html").animate({ scrollTop: 0 }, 500);
    return false;
  });
});

//featureのコンテンツを１つずつフェードインさせる

$(function () {
  $(window).scroll(function () {
    $(".fade_in").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 200) {
        $(function () {
          $(".fade_in").each(function (i) {
            $(this)
              .delay(i * 300)
              .queue(function () {
                $(this).addClass("active");
              });
          });
        });
      }
    });
  });
});

$(function () {
  $(window).scroll(function () {
    $(".fade_in2").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 200) {
        $(function () {
          $(".fade_in2").each(function (i) {
            $(this)
              .delay(i * 200)
              .queue(function () {
                $(this).addClass("active");
              });
          });
        });
      }
    });
  });
});

// スマホナビの表示・非表示

$(function () {
  const hum = $("#hamburger, .close");
  const nav = $(".sp-nav");
  hum.on("click", function () {
    nav.toggleClass("toggle");
  });
});
