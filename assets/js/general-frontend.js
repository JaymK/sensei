jQuery(document).ready( function($) {

	/***************************************************************************************************
	 * 	1 - General Functions.
	 ***************************************************************************************************/

	jQuery(function() {
	    jQuery(".meter > span").each(function() {
	    	jQuery(this)
	    		.data("origWidth", jQuery(this).css('width'))
	    		.width(0)
	    		.animate({
	    			width: jQuery(this).data("origWidth")
	    		}, 1200);
		});

		jQuery(".answer_message.has_notes span").mouseover(function() {
			jQuery(this).siblings(".notes").show();
		});
		jQuery(".answer_message.has_notes span").mouseout(function() {
			jQuery(this).siblings(".notes").hide();
		});
	});

});