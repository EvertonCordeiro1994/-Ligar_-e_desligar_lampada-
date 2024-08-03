const desligar = () => {
    $('#imagem').attr('src', './apagada.jpeg');
    $('#corpo').css('background', 'black');
    $('body').css('background', 'black');
    $('#corpo').removeClass('ligada').addClass('desligada');
};

const ligar = () => {
    $('#imagem').attr('src', './acesa.jpeg');
    $('#corpo').css('background', 'white');
    $('body').css('background', 'white');
    $('#corpo').removeClass('desligada').addClass('ligada');
};

$('#toggles').change(function() {
    if (this.checked) {
        ligar();
    } else {
        desligar();   
    }
});
