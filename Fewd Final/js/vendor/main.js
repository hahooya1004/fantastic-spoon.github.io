function activateSidebar() {
    $('.sidebar').addClass('active-sidebar');
}
$('.hamburger').on('click', activateSidebar);

function deactivateSidebar() {
    $('.sidebar').removeClass('active-sidebar');
}
$('.close').on('click', deactivateSidebar);





    function showModal() {
        $('body').append('<div class="background-overlay"></div>');
        $('body').addClass('open');
    }

    function hideModal() {
        $('body').removeClass('open');
        $('.background-overlay').remove();
    }

    $('#showmodal').on('click', showModal);
    $('.close').on('click', hideModal);




    $(document).ready(function () {
        $("#myCarousel").carousel();
        $(".item1").click(function () {
            $("#myCarousel").carousel(0);
        });
        $(".item2").click(function () {
            $("#myCarousel").carousel(1);
        });
        $(".item3").click(function () {
            $("#myCarousel").carousel(2);
        });
        $(".item4").click(function () {
            $("#myCarousel").carousel(3);
        });
        $(".left").click(function () {
            $("#myCarousel").carousel("prev");
        });
        $(".right").click(function () {
            $("#myCarousel").carousel("next");
        });
    });

