$('input').change(function () {
    if (this.checked) {
        $('body').css('background', 'white');
        $('#corpo').css('background', 'white');
        $('h1').css('color', 'black');
        $('img').attr('src', './images/acesa.jpeg');
        
        
    } else {
        $('body').css('background', 'black');
        $('#corpo').css('background', 'black');
        $('h1').css('color', 'rgb(100 116 139)');
        $('img').attr('src', './images/apagada.jpeg');
       
    }
})
