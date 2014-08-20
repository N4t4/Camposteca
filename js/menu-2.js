$(document).ready(function () {
		
	/**Menu-2********************************/
	if ($(".menu-2").length > 0) {
			var menu_2_atual = -1;
			var menu_2_view = function () {
				window.location.replace("eventos.html")
			}
			function Menu2Events() {
					$(".menu-2>.main>#view>li>a").click(menu_2_view);
					$(".menu-2>.main").mousemove(function (e) {
							$(".menu-2>.main>#view>li").stop();
					});
					$(".menu-2>.main>*").mouseout(function () {
							if ($("#block").css("display") != "block")
									Menu2onWalk();
					});
			}
			$(".start_walk_text_menu").click(function () {
					setTimeout(function () { Menu2Events(); }, 500);
					setTimeout(function () { Menu2onWalk(); }, 1000);
			});
			function Menu2At(item) {
					menu_2_atual++;
					if (menu_2_atual > $(".menu-2>.main>#source>li").length - 1) {
							menu_2_atual = 0;
					}
					$(item).html($(".menu-2>.main>#source>li").eq(menu_2_atual).html());
					$(".menu-2>.main>#view>li>a").click(menu_2_view);
			}
			function Menu2AtPosItem(item) {
					var pos = $(item).position();
					var limit = getTop(".menu-2>.main") + $(".menu-2>.main").height();

					if (pos.top + 1 > limit)//Tolerância de 1 px
					{
							var pos = $(".menu-2>.main>#view").height();
							$(item).css("top", "-=" + pos + "px");
							Menu2At($(item));
							Menu2Events();
					}
			}
			function Menu2onWalk() {
					$(".menu-2>.main>#view>li").each(function () {

							var new_top = ("+=" + (getRealHeight($(this))).toString() + "px");

							$(this).animate(
									{ top: new_top },
									2500,
									function () {
											Menu2onWalk();
											Menu2AtPosItem(this);
									}
							);

					});
			}
			function Mnu2Init() {
					menu_2_atual = $(".menu-2>.main>#view>li").length - 1;

					var m_top = $("#view").height() - $(".menu-2>.main").height();
					m_top *= m_top > 0 ? -1 : 1;

					$(".menu-2>.main>#view").css("margin-top", m_top + "px");

					var i = 0;
					$(".menu-2>.main>#source>li").each(function () {

							if (i >= 0 && i <= $(".menu-2>.main>#view>li").length - 1) {
									$(".menu-2>.main>#view>li").eq($(".menu-2>.main>#source>li").length - i - ($(".menu-2>.main>#source>li").length - $(".menu-2>.main>#view>li").length + 1)).html($(this).html());
							}
							i++;
					});
			}
			Mnu2Init();
			if ($(".start_menu-2").length == 0) {
					setTimeout(function () { Menu2Events(); }, 500);
					setTimeout(function () { Menu2onWalk(); }, 1000);
			}
	}
	/****************************************/

});
