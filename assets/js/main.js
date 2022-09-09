// jQuery(document).ready(function($) {

//     $('.level-bar-inner').css('width', '0');
    
//     $(window).on('load', function() {

//         $('.level-bar-inner').each(function() {
        
//             var itemWidth = $(this).data('level');
            
//             $(this).animate({
//                 width: itemWidth
//             }, 800);
            
//         });

//     });
   
// });

jQuery(document).ready(function($) {

    var skilldict = {
        1: "Learning",
        2: "Working knowledge",
        3: "Proficient"
    }

    $(window).on('load', function() {

        $('.level-container').each(function() {

            var level = $(this).data('level');
            var barwidth = level * 33;
            $(this).find('.level-percent').css('width',`${barwidth}%`);
            $(this).prop('title', `${skilldict[level]}`);

            $(this).find('.level-step').each(function() {
                if($(this).attr('id') <= level) {
                    $(this).addClass("completed"); 
                }
            });
        });
    });
});