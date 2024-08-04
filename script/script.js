$('input').change(function () {
    if (this.checked) {
        $('body').css('background', 'white');
        $('#corpo').css('background', 'white');
        $('h1').css('color', 'black');
        $('img').attr('src', 'https://raw.githubusercontent.com/EvertonCordeiro1994/lampadaonoff/main/images/acesa.JPEG');
        
        
    } else {
        $('body').css('background', 'black');
        $('#corpo').css('background', 'black');
        $('h1').css('color', 'rgb(100 116 139)');
        $('img').attr('src', 'https://raw.githubusercontent.com/EvertonCordeiro1994/lampadaonoff/main/images/apagada.JPEG');
       
    }
})
