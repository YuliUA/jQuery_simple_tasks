$(document).ready(function () {
    //функція для генерування випадкового числа із заданим максимумом
    let randomVal = maxVal => Math.round(Math.random() * maxVal);

    //функція зміни розмірів, кольору і координат об'єкта
    function newProperties() {
        //встановлюємо максимальні значення
        //в пікселях
        let maxW = 500;
        let maxH = 500;
        let w = randomVal(maxW); // випадкове значення ширини;
        let h = randomVal(maxH); //випадкове значення висоти;
        let maxCoordX = $(window).width() - w;
        let maxCoordY = $(window).height() - h;
        let randomColor = `#${randomVal(9)}${randomVal(9)}${randomVal(9)}${randomVal(9)}${randomVal(9)}${randomVal(9)}`;
        $('.box-wraper').css({
            width: `${w}px`,
            height: `${h}px`,
            background: randomColor,
            left: `${randomVal(maxCoordX)}px`,
            top: `${randomVal(maxCoordY)}px`
        })
    }

    //подія при кліку на об'єкт
    $('.box-wraper').on('click', function () {
        newProperties()
    })

})
