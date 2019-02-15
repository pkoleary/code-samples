

$(document).ready(function() {
      /*
      variables to track..
      */     

      function goToStep2() {
        $('#step1').slideUp('fast',function() {
          $('#step2').slideDown('slow'); 
        }); 
        
      }
      function goToStep3() {
        $('#step2').slideUp('fast',function() {
          $('#step3').slideDown('slow'); 
        }); 
        
      }

      function goToStep4() {
        $('#step3').slideUp('fast',function() {
          $('#step4').slideDown('slow'); 
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

     //Step 1 Sub Content ///


        //other Sub buttons //
         var othersub_btns = {};  
         ///  button possibilities : 
            // HD = Home Delivery, GS = Gift Subscription , ED = Education , CP = Corporate , CW = Crosswords
         othersub_btns.HD = 'https://www.nytimesathome.com/hd/205?MediaCode=W22EJ&CMP=3FQ4Q'; 
         othersub_btns.GS = 'http://www.nytimes.com/subscriptions/Multiproduct/lp4021.html?campaignId=3FQ69'; 
         othersub_btns.ED = 'http://www.nytimes.com/subscriptions/edu/lp1999.html?campaignId=3JRY8'; 
         othersub_btns.CP = 'http://www.nytimes.com/subscriptions/Multiproduct/lp4371.html?campaignId='+campaignId; 

         $.each(othersub_btns, function( key, url ) { //othersub_btns is defined in pagemaker js
          var btn_path = 'http://graphics8.nytimes.com/subscriptions/components/img/icons/icon_sm_def_'; 
          var btnboy = $('<img />').attr({src:btn_path+key+'.jpg',width:'195',height:'auto',id:key}).addClass('btn-icons').on('click',function() { 
            window.location = url});

          btnboy.appendTo('#subcontent div#othersubs-holder'); 
        });


/// for Other Subscription buttons.. when using IMAGES for whole button  ////
     //PRELOADING IMAGES //
      var img_path = 'http://graphics8.nytimes.com/subscriptions/components/img/icons/'; 
      var images = [
        'icon_sm_over_HD.jpg',
        'icon_sm_over_GS.jpg',
        'icon_sm_over_ED.jpg',
        'icon_sm_over_CP.jpg',
        'icon_sm_over_CW.jpg',
        'icon_sm_non_HD.jpg',
        'icon_sm_non_GS.jpg',
        'icon_sm_non_ED.jpg',
        'icon_sm_non_CP.jpg',
        'icon_sm_non_CW.jpg'
      ];  

      for(i=0;i<images.length;i++) {  
        var img = new Image(); 
        img.src = img_path+images[i]; //PRELOAD
      }

    $('#othersubs-holder img').on("mouseover",function() {
          //set each of the imgs to dark
          $('#othersubs-holder img').each(function() {
              var darkImg = img_path+"icon_sm_non_"+$(this).attr('id')+".jpg"; 
              $(this).attr("src",darkImg); 
          });
          //show the over version of thIs image. 
          var overImg = img_path+"icon_sm_over_"+$(this).attr('id')+".jpg";
          $(this).attr("src",overImg); 
      }
    ); // 

    $("#othersubs-holder").on("mouseout",function() { //the hover off function for Icon div
        //set all images to default. 
      $('#othersubs-holder img.btn-icons').each(function() {
              var defImg = img_path+"icon_sm_def_"+$(this).attr('id')+".jpg"; 
              $(this).attr({src:defImg}); 
          });
    });

     //end of Step 1 Sub Content ///

})  //end of doc ready



