/**********************************************************************************************************************
 CUSTOM JQUERY-BASED DYNAMIC CONTENT
 *********************************************************************************************************************/
(function ($) {
	$(document).ready(function () {
			"use strict";
			/**********************************************************************************************
			 * Tweak CSS                                                                                 *
			 **********************************************************************************************/
			$('div.column h2').each(function () {
					$(this).prev('hr').addClass('narrow-bottom-margin dark-gray');
			});
			$('div.column > h3').each(function () {
					$(this).prev('hr:not(.subSection)').addClass('narrow-bottom-margin crimson');
			});

			/**********************************************************************************************
			 * Set column heights on fluid-width containters                                              *
			 **********************************************************************************************/
			$('.large-format-friendly > div.column.two').each(function () {
					var $this = $(this);
                    $this.height($this.parent().height());
			});
            
			/**********************************************************************************************
			 * Tweak HTML source to work around some quirks of WordPress setup                            *
			 **********************************************************************************************/
			var fySiteURL = window.location.pathname;
			switch(fySiteURL) {
				/* case '/':
					$('#menu-item-4').remove();
					$('#spine-sitenav ul li').first().css('border-top', 'none');
					$('#spine-sitenav').addClass('homeless');
					break; */
				case '/news/':
					$('div.column.one').first().parent('section').before('<section class="row single gutter pad-top"><div class="column one"><section class="article-header header-newsEvents"><div class="header-content"><h2>First Year Experience News</h2><h3>What\'s going on with our programs</h3></div></section></div></section>');
					break;
			}
			
			/**********************************************************************************************
			 * Implement Dynamic Behaviors of Responsive Elements                                         *
			 **********************************************************************************************/
			$('.drop-down-toggle').click(function () {
					$(this).next('.toggled-panel').toggle(500)
			});
			
			$('.read-more-toggle-in-ctrl').click(function () {
					$(this).toggle(500);
					$(this).next('.read-more-panel').toggle(500);
					$(this).next('.read-more-panel').next('.read-more-toggle-out-ctrl').toggle(500);
			});
			
			$('.read-more-toggle-out-ctrl').click(function () {
					$(this).toggle(500);
					$(this).next('.read-more-panel').toggle(500);
					$(this).next('.read-more-panel').next('.read-more-toggle-in-ctrl').toggle(500);
			});
			
			$('.content-flipper').click(function () {
					$(this).next('.flipped-content-front').toggle(500);
					$(this).next('.flipped-content-front').next('.flipped-content-back').fadeToggle(500);
			});
			
			$('.flipped-content-front').click(function () {
					$(this).toggle(500);
					$(this).next('.flipped-content-back').fadeToggle(500);
			});

	});
})(jQuery);