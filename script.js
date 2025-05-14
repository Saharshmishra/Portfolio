// Smooth scrolling for nav links
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    const target = $(this.hash);
    if (target.length) {
        $('html, body').animate({
            scrollTop: target.offset().top - 70
        }, 800);
    }
});

// Form submission
$('#contact-form').on('submit', function (e) {
    e.preventDefault();
    const name = $('#name').val();
    const email = $('#email').val();
    const message = $('#message').val();
    if (name && email && message) {
        alert('Message sent successfully!');
        $(this)[0].reset();
    } else {
        alert('Please fill out all fields.');
    }
});