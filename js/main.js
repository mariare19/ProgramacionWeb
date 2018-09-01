$(document).ready(function () {
    $("#estilo1").click(function () {
        $('body').css('font-family', 'Slabo');
        $('.img-marketing').addClass('img-circle');
        $('.featurette-image').removeClass('img-circle');
        $('body').css('background-color', 'white')
        $('li').removeClass('active');
        $(this).parent('li').addClass('active');
    });

    $("#estilo2").click(function () {
        $('body').css('font-family', 'Verdana');
        $('.img-marketing').removeClass('img-circle');
        $('.featurette-image').addClass('img-circle');
        $('body').css('background-color', 'white')
        $('li').removeClass('active');
        $(this).parent('li').addClass('active');
    });

    $("#estilo3").click(function () {
        $('body').css('font-family', 'Courier New');
        $('body').css('background-color', '#c8cbd1');
        $('li').removeClass('active');
        $(this).parent('li').addClass('active');
    });

    $("#estilo4").click(function () {
        $('body').css('font-family', 'Lucida Console');
        $('body').css('background-color', '#cfe8c0');
        $('li').removeClass('active');
        $(this).parent('li').addClass('active');
    });

    $("#estilo5").click(function () {
        $('body').css('font-family', 'Georgia');
        $('.img-marketing').addClass('img-circle');
        $('.featurette-image').removeClass('img-circle');
        $('body').css('background-color', '#e8c0d0');
        $('li').removeClass('active');
        $(this).parent('li').addClass('active');
    });
});

function infoLugar(lugar) {
    alert("Este lugar este en el departamento de: " + lugar.getAttribute("data-lugar"));
}