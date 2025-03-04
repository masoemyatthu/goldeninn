$(document).ready(function(){

    // Start Nav Bar
    $(window).scroll(function(){

        let position = $(this).scrollTop();
        // console.log(position);

        if(position >= 200){
            $('.navbar').addClass('navmenus');
        }else{
            $('.navbar').removeClass('navmenus');
        }
        
    });

        $('.navbuttons').click(function(){
            $(this).toggleClass('crossxs');
        });
    // End Nav Bar


    // Start Welcome Section

        $('.filters').hide();

        // Show only the pool images by default
        $('.filters.pool').show('slide', 500);

        $('.welcomelists').click(function(){
            
            $(this).addClass('activeitems').siblings().removeClass('activeitems');
            
            let filtervalue = $(this).data('filter');
            console.log(filtervalue);

            if(filtervalue === 'pool'){
                $('.pool').show('slide',500);
            }else{
                $('.filters').hide();

                $('.filters').not('.'+filtervalue).hide('slide',500);
                $('.filters').filter('.'+filtervalue).show('slide',500);

            }

        });
    // End Welcome Section



});