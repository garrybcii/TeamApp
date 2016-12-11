/*Post to API*/
var sendData = function(data, method) {
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/api/' + method,
        data: JSON.stringify(data),
        contentType: 'application/json; charset=utf-8',
        crossDomain: true,
        dataType: 'json',
        success: function(data, status, jqXHR) {
            if (method == 'adduser') {
                var name = $('input.fname').val();
                $('input.fname, input.age, input.fcolor').val('')
                $('body').append('<p style="color:green">' + name + ' sucessfully added.</p>');
            }

            if (method == 'finduser') {

                console.log(data.Results)
            }


        },
        error: function(jqXHR, status) {
            // error handler
            console.log(jqXHR);
            alert('fail' + status.code);
        }
    });
}


/*Handlers*/

$(document).on('click', '.submitUser', function() {
    var name = $('input.fname').val();
    var age = $('input.age').val();
    var color = $('input.fcolor').val();

    var data = {
        firstName: name,
        age: age,
        favColor: color
    }

    sendData(data, 'adduser');
})

$(document).on('click', '.findUser', function() {
    var name = $('input.fname').val();
    var age = $('input.age').val();
    var color = $('input.fcolor').val();

    var data = {
        firstName: name,
        age: age,
        favColor: color
    }

    sendData(data, 'finduser');
})