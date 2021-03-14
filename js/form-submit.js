$(function() { 
    $('form').submit(function(event) {
        event.preventDefault();
        let formData = {
            name: $('#name').val(),
            email: $('#email').val()
        };

        $.ajax({
            type: 'POST',
            url: 'http://localhost/myprograms/process.php',
            data: formData,
            dataType: 'json',
            encode: true
        })
        .done(function(data) {
            console.log(data);
        });
    });
});