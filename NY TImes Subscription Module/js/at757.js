      /*
      variables to track..
      */     
      var campaignId = getParameterByName('campaignId'); //in case sent in QS...
      var bundle_select = 'smart'; //default bundle
      var OC_sel = '373674'; //this is reset after step1 Continue button is clicked
      var offerchains = new Array(); //the codes per bundle
      offerchains['smart'] = '373674'; 
      offerchains['tablet'] = '1000008';
      offerchains['ada'] = '1000010';      
       //POPup Details for Bundles
       var reg_prices = new Array(); 
         reg_prices['smart'] = '$3.75'; 
         reg_prices['tablet'] = '$5.00';
         reg_prices['ada'] = '$8.75';


      function getParameterByName(name) 
      {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.search);
        if(results == null)
          return "";
        else
          return decodeURIComponent(results[1].replace(/\+/g, " "));
      }


$(document).ready(function() {

		  function getClassicDetails() {
		        $('.uncommon').hide(); //hide any element particular to a product ...
		          var deetwanted = $(this).attr('id').substr(11); //remove the leading 'link-deets-' to find which product link click
		          $('.'+deetwanted).show(); //show the elements particular to this product type
		          if(deetwanted=='ada') { //if Ada, show all
		            $('li.smart,li.tablet').show();
		            $('#icon-holder').css({width:'34%'}); 
		          } else if(deetwanted=='tablet') {
		            $('#icon-holder').css({width:'18%'});
		          } else {
		            $('#icon-holder').css({width:'16%'});
		          }
		          $('#price-per-week').html(reg_prices[deetwanted]); //lastly, set the price
		        //$('.modal-backdrop').show().click(function(){ closeModal()}); 
		        $('#prod-details').show();  
		 }

        $('.link-deets').on("click",getClassicDetails);
        $('#closeBox').on("click",function() {
          $('#prod-details').fadeOut(); 
        });



     //Step 1 Sub Content ///
	   	 $('#step1Dropdowns h3').on("click",function() {
	   	 	var pos = $('#step1Dropdowns h3').index($(this));
	   	 	$('#step1Dropdowns h3').not(':eq('+pos+')').removeClass('chosen'); //for all links
	   	 	$(this).toggleClass('chosen'); //give styling of the 'link' as 'chosen'
	   	 	$('#subcontent div.toggs').not(':eq('+pos+')').hide(); //HIDE ANY OPEN ONES EXCEPT THIS ONE, cause use toggle...
	        $('#subcontent div.toggs:eq('+pos+')').toggle(); //show THE REQUESTED content 
         });


     //end of Step 1 Sub Content ///


})  //end of doc ready