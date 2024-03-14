document.addEventListener('DOMContentLoaded', function () {
    var quotes = [
        "Стань успішним",
        "Стань талановитим",
        "Стань впливовим",
        "Стань спритним",
        "Стань винахідливим",
        "Стань вмілим",
        "Стань надійним",
        "Стань цілеспрямованим",
        "Стань відданим",
        "Стань енергійним",
        "Стань стратегічним",
        "Стань креативним",
        "Стань врівноваженим",
        "Стань сильним",
        "Стань допитливим",
        "Стань дисциплінованим",
        "Стань амбіційним",
        "Стань рішучим"
        // ... Додайте решту цитат тут
    ];

    var options = {
        strings: quotes,
        typeSpeed: 50,
        backSpeed: 10,
        backDelay: 2100,
        startDelay: 0,
        loop: true,
        showCursor: false,
    };
    var typed = new Typed('#quote-container', options);

   
});