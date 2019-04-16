$(document).ready(function () {
    let txt1 = $('#s1').text();
    let txt2 = $('.s2').text();
    let txt3 = $('#second i').text();
    let txt4 = $('q[title]').text();
    let txt5 = $('a[target="_blank"]').text();
    let txt6 = $('span.extra:eq(1)').text();

    alert(txt1 + txt2 + txt3 + txt4 + txt5 + txt6);
})
