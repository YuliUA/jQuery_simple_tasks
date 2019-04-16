$(document).ready(function () {
    let maxW = 500;
    let maxH = 500;

    //функція для генерування випадкового числа із заданим максимумом
    let randomVal = maxVal => Math.round(Math.random() * maxVal);

    //функція зміни кольору
    function newProperties() {
        let randomColor = `#${randomVal(9)}${randomVal(9)}${randomVal(9)}${randomVal(9)}${randomVal(9)}${randomVal(9)}`;
        $('.box-wraper').css({
            background: randomColor
        })
    }

    //подія при кліку на об'єкт
    $(document).on('click', function () {
        let w = randomVal(maxW); // випадкове значення ширини;
        let h = randomVal(maxH); //випадкове значення висоти;
        let maxCoordX = $(window).width() - w;
        let maxCoordY = $(window).height() - h;
        console.log(w, h)
        $('.box-wraper').animate({
                width: `${w}px`,
                height: `${h}px`,
                left: `${randomVal(maxCoordX)}px`,
                top: `${randomVal(maxCoordY)}px`
            }, randomVal(1500) + 500,
            'easeInBack',
            newProperties()
        )
    })

})
