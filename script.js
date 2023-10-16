
var myButton = document.getElementById('button');

myButton.addEventListener('click', function (event){
    event.preventDefault();
    var templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    emailjs.send('service_sc4gm47', 'template_31242vf', templateParams)
        .then(function(response) {
        alert("Mesajul a fost trimis cu succes!");
        console.log('SUCCESS!', reßsponse.status, response.text);
        }, function(error) {
        console.log('FAILED...', error);
        alert("Mesajul nu a fost trimis, a aparut o eroare" + error);
        });
        setTimeout(function() {
            location.reload(); // actualizez pagina
        }, 2000);
})
