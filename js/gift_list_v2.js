;(function () {
    
    'use strict';


    var setListeners = function(){
        // Lift card and show stats on Mouseover
        $('.gift-card').hover(function(){
                $(this).addClass('animate');
                $('div.carouselNext, div.carouselPrev').addClass('visible');            
             }, function(){
                $(this).removeClass('animate');         
                $('div.carouselNext, div.carouselPrev').removeClass('visible');
        }); 
        
        $('.view_details').click(function(){
            var gift_price = $(this).parent().find('.gift_price').first().text();
            gift_price = Number(gift_price.replace('R$', ''))

            var gift_name = $(this).parent().find('.gift_name').first().text();

            $('#gift_value').val(gift_price);
            $('#gift_name').val(gift_name);
        });
    }
    
    var required = ['email', 'name', 'gift_value']
    function form_valid(response){
        for (var [key, value] of Object.entries(response)) {
            if (required.indexOf(key) >=0 && (value == '' || value == 0)){
                
                $(".modal").animate({ scrollTop: 0 }, "slow");

                $("#"+key).focus();
                return false;
            }
        }
        return true;
    }

    var setupSubmit = function() {
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keyZncJ4VRsoKkmKn'}).base('app737JYUVmFkYR86');


        $('#gift-rqst-btn').click(function(){

            // do some validations before
            var response = {}

            $.each($('#gift-modal form').serializeArray(), (i, input) =>{
                response[input.name] = input.value;
            });

            if (!form_valid(response)){
                return;
            }

            base('Gifts').create({
                "Email": response.email,
                "Name": response.name,
                "Gift": response.gift_name,
                "Gift Value": Number(response.gift_value),
                "Payment Method": response.payment_method,
                "Payment Channel": response.payment_channel,
                "Message": response.message
            }, function(err, record) {
                if (err) { console.error(err); return; }
                window.alert('Show de bola! Agradecemos sua resposta.')
                window.location.href = '/';
            });
        })
    }


    $(function(){
        setListeners();
        setupSubmit();
    });

}());
