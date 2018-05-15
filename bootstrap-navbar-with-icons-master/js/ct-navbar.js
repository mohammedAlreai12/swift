searchVisible = 0;
transparent = true;
hasTransparent = false;

$(document).ready(function(){
   
   $('[data-toggle="search"]').click(function(){
        if(searchVisible == 0){
            searchVisible = 1;
            $('.navbar-search-form').fadeIn(function(){
                $('.navbar-search-form input').focus();
            });
        } else {
            searchVisible = 0;
            $(this).children('p').html('Search');
            $(this).blur();
            $('.navbar-search-form').fadeOut(function(){
                $('.navbar-search-form input').blur();
            });
        } 
    });
    
});

