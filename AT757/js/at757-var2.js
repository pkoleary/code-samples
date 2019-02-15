

$(document).ready(function() {
      /*
      variables to track..
      */     
      function goToStep2() {
        $('#step1').slideUp('fast',function() {
          $('#step2').slideDown('slow');
		  $('.numberCircle.numberCircleactive').removeClass('numberCircleactive', 500);
		  $('.step.active').removeClass('active', 500);
		   $('.numberCircle#number2').toggleClass('numberCircleactive', 500);
		  $('.step#headerStep2').toggleClass('step active', 500);
      	  return false;
        });
      
      }
      function goToStep3() {
        $('#step2').slideUp('fast',function() {
          $('#step3').slideDown('slow');
		  $('.numberCircle.numberCircleactive#number2').removeClass('numberCircleactive', 500);
		  $('.step.active').removeClass('active', 500);
		  $('.numberCircleactive#number2').toggleClass('numberCircle', 500);
		  $('.active#headerStep2').toggleClass('step', 500);
		  $('.numberCircle#number3').toggleClass('numberCircleactive', 500);
		  $('.step#headerStep3').toggleClass('step active', 500);
      	  return false;
        });
  
      }

      function goToStep4() {
        $('#step3').slideUp('fast',function() {
          $('#step4').slideDown('slow');
		  $('.numberCircle.numberCircleactive#number3').removeClass('numberCircleactive', 500);
		  $('.step.active').removeClass('active', 500);
		  $('.numberCircleactive#number3').toggleClass('numberCircle', 500);
		  $('.active#headerStep3').toggleClass('step', 500);
		  $('.numberCircle#number4').toggleClass('numberCircleactive', 500);
		  $('.step#headerStep4').toggleClass('step active', 500);
      	  return false;
        });

      }

     //step 1 button: choose Bundle  ...
     $('#btn-step1').on("click",function() {
        //set selected bundle
        bundle_select = $('#tbl-bundles input[type=radio]:checked').val(); //smart, tab, ...
        OC_sel = offerchains[bundle_select];
        goToStep2(); 
       }); 

     //step 2 button: entered Acct..  ...
     $('#btn-step2').on("click",function() {
        goToStep3(); 
       }); 

     //step 3 button: entered Billing..  ...
     $('#btn-step3').on("click",function() {
        goToStep4(); 
       }); 

})  //end of doc ready



