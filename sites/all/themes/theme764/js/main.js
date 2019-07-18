$(document).ready(function(){
  
    function height_match(target){
		var big_height = 0;

		$(target).each(function(){
			if(big_height < $(this).height()){
				big_height = $(this).height();
			}
		})		

		$(target).height(big_height);
	}
	
	height_match('.block-services');


});