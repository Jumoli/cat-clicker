/**
 * Created by andreekeiner on 12.11.18.
 */
$(document).ready(function(){

    var catCountArray = {
        'cat1' : 0,
        'cat2' : 0,
        'cat3' : 0,
        'cat4' : 0,
        'cat5' : 0

    };

    $('.show-cat').click(function(){
        var id = $(this).find('img').attr('id');
        catCountArray[id] ++;
        if(catCountArray[id] <= 1){
            $('.clicks').html('This cat picture has been clicked for ' + catCountArray[id] + ' time')
        } else {
            $('.clicks').html('This cat picture has been clicked for ' + catCountArray[id] + ' times')
        }
    });
    $('input:radio').click(function(){


        var catSelect = $(this).val();
        if(catCountArray[catSelect] > 0 ){
            if(catCountArray[catSelect] <= 1){
                $('.clicks').html('This cat picture has been clicked for ' + catCountArray[catSelect] + ' time')
            } else {
                $('.clicks').html('This cat picture has been clicked for ' + catCountArray[catSelect] + ' times')
            }
        } else{
            $('.clicks').html("");
        }

        $('.show-cat').html('<img id="' + catSelect + '" src="img/' + catSelect + '.jpg">');
    });


});
