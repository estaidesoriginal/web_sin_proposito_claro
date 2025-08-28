<!DOCTYPE HTML>
<html>
<head>
    <title>Formulario de Contacto - Escape Velocity</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    <link rel="stylesheet" href="assets/css/main.css" />
</head>
<body>
 <section id="contact-form" class="inner form-container">

    <header>
        <h2>Contactanos</h2>
        <p>Completa el formulario y te responderemos lo antes posible.</p>
    </header>

    <form id="contactForm" onsubmit="event.preventDefault(); valformulario();">
        <div class="fields">
            <div class="field half">
                <label for="email">Correo electrónico</label>
                <input type="email" name="email" id="email" placeholder="Ingrese su correo electronico..." required />
            </div>
            <div class="field half">
                <label for="subject">Asunto</label>
                <input type="text" name="subject" id="subject" placeholder="Asunto..." required />
            </div>
            <div class="field">
                <label for="message">Mensaje</label>
                <textarea name="message" id="message" rows="5" placeholder="Escribe su mensaje aquí..." required></textarea>
            </div>
        </div>

        <ul class="actions">
            <li><input type="submit" value="Enviar" class="primary" /></li>
            <li><input type="reset" value="Borrar" /></li>
        </ul>
    </form>
</section>

<script>
function valformulario() {
    // Tu validación y lógica de envío aquí
    // ...

    // Limpiar el formulario después de enviar
    document.getElementById('contactForm').reset();
}
</script>

</body>

</html>
