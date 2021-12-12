$(document).ready(function () {
    var currentFloor = 2; // переменная с текущим этажом
    var floorPath =$(".home-image path");// каждый отдельный этаж в SVG
    var counterUp = $(".counter-up");/* Кнопка увеличения этажа */
    var counterDown = $(".counter-down");/* Кнопка уменьшения этажа */

    // функция при наведении мышкой на этаж
    floorPath.on('mouseover', function () {
        floorPath.removeClass("current-floor");//удаляем активный класс у этажа
        currentFloor = $(this).attr("data-floor");//получаем значение этажа
        $('.counter').text(currentFloor);//записываем значение в счетчик справа
    });
    // отслеживаем клик по кнопке вверх
    counterUp.on('click', function () {
        if (currentFloor < 18) { // проверяем значение этажа, оно не должно быть больше 18
            currentFloor++; // прибавляем один этаж 
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2,
            useGrouping: false }); // форматируем переменную с этажом, чтобы было 01 а не 1
            $('.counter').text(usCurrentFloor); //записываем значение в счетчик справа
            floorPath.removeClass("current-floor"); //удаляем активный класс у этажа
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
        }
    });

    counterDown.on('click', function () {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2,
            useGrouping: false });
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    })
});
