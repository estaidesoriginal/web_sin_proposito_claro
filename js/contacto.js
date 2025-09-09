function valformulario() {
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    document.getElementById('modalEmail').textContent = email;
    document.getElementById('modalSubject').textContent = subject;
    document.getElementById('modalMessage').textContent = message;

    document.getElementById('contactForm').reset();

    alert("Solicitud enviada con exito");
}
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_ucmygaf';
   const templateID = 'template_z8q5rp9';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("lWDqvGY4Fj9noKYtz");

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!valformulario()) return;

            const userEmail = contactForm.Email.value;
            const subject = contactForm.Asunto.value;

            const templateParams = {
                userEmail: Email,
                subject: Asunto,
                message: 'Hemos recibido su solicitud correctamente. Nuestro equipo está revisando su caso y nos pondremos en contacto con usted a la brevedad, Agradecemos su paciencia y quedamos atentos para asistirle en lo que necesite. Saludos cordiales, Saludos cordiales.'
            };
            emailjs.send("service_ucmygaf", "template_z8q5rp9", templateParams)
                .then(() => {
                    alert("Correo enviado con éxito al usuario");
                    contactForm.reset();
                })
                .catch((error) => {
                    alert("Error al enviar: " + JSON.stringify(error));
                });
        });
    }
});