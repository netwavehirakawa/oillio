(function($) {
	$(function() {

		if (Device.type == 'PC') {

			$("img.imgover").mouseover(function() {
				$(this).attr("src",$(this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_on$2"));
			}).mouseout(function(){
				$(this).attr("src",$(this).attr("src").replace(/^(.+)_on(\.[a-z]+)$/, "$1$2"));
			}).each(function(){
				$("<img>").attr("src",$(this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_on$2"));
			});
		
			$('.over').hover(function() {
				if ($('.haslayout-sp').eq(0).css('display') == 'none') {
					$(this).css({'opacity': 0.8});
				}
			},function(){
				$(this).css({'opacity': 1});
			});

		}

		$('.pagetop').find('a').click(function(){
			$('html,body').scrollTop(0);
			return false;
		});

		$('.lastrecipeRecipe').find('img').css('visibility','hidden');
		$('.lastrecipeRecipe').css('background-image','url(../assets/top/images/bnr_lastrecipe_recipe.jpg)');
		
	});
})(jQuery);