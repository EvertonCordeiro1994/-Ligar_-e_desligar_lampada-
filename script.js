$('input').change(function () {
    if (this.checked) {
        $('body').css('background', 'white');
        $('#corpo').css('background', 'white');
        $('img').attr('src', './acesa.jpeg');

        
    } else {
        $('body').css('background', 'black');
        $('#corpo').css('background', 'black');
        $('img').attr('src', './apagada.jpeg');
       
    }
})
