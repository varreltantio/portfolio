$('.page-scroll').on('click', function(e) {
    const tujuan = $(this).attr('href');
    const elemenTujuan = $(tujuan);

    $('html').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1500, 'easeInOutExpo');

    e.preventDefault();
});
