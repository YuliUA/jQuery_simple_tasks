$(document).ready(function () {
    //функція для генерування випадкового числа із заданим максимумом
    let randomVal = maxVal => Math.round(Math.random() * maxVal);

    //функція зміни розмірів, кольору і координат об'єкта
    function newColorVal() {

        let randomBackColor = `#${randomVal(9)}${randomVal(9)}${randomVal(9)}`;
        let randomBorderColor = `#${randomVal(9)}${randomVal(9)}${randomVal(9)}`; let randomShadowColor = `#${randomVal(9)}${randomVal(9)}${randomVal(9)}`;
        $('.box-wraper').css({
            background: randomBackColor,
            borderColor: randomBorderColor,
            boxShadow: `0 0 50px 5px ${randomShadowColor}`

        })
    }

    //подія 

    let maxCoordX = $(window).width()-50;
    let maxCoordY = $(window).height()-50;
   setInterval(()=>{
       $('.box-wraper').animate({
            left: `${randomVal(maxCoordX)}px`,
            top: `${randomVal(maxCoordY)}px`
        },2000,'linear',
        setInterval(() => newColorVal(), 200)
    )},1000)
})
