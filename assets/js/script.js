const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(document).ready(function() {
    $(".navbar-nav a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
    $(".card img").hover(function(){
        $(this).next(".card-body").toggle();
    });

    $(".iconoa").on("click", function () {
        $(this).css({
            'background': 'green'
        })
    });

    $(".iconob").on("click", function () {
        $(this).css({
            'background': 'green'
        })
    });
});