document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleTheme");
    const themeIcon = document.getElementById("themeIcon");

    // Si existe una clase 'dark-theme' en el body, ya está activado
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-theme");
        themeIcon.textContent = "🌙";
    } else {
        themeIcon.textContent = "🌞"; 
    }

    // Función para alternar entre modo claro y oscuro
    toggleButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-theme");

        // Cambia el ícono según el tema
        if (document.body.classList.contains("dark-theme")) {
            themeIcon.textContent = "🌙";  
            localStorage.setItem("theme", "dark"); 
        } else {
            themeIcon.textContent = "🌞";  
            localStorage.setItem("theme", "light");
        }
    });

    // Validación y manejo del formulario
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const mensaje = document.getElementById("mensaje").value;

        // Validación básica
        if (nombre === "" || email === "" || mensaje === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Mostrar el mensaje de confirmación
        const confirmationMessage = document.getElementById("confirmationMessage");
        confirmationMessage.textContent = "¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.";
        confirmationMessage.style.display = "block"; 

        // Centrar el mensaje de confirmación
        confirmationMessage.style.textAlign = "center";
        confirmationMessage.style.marginTop = "20px";

        // Limpiar el formulario después de enviarlo (opcional)
        contactForm.reset();
    });
});
