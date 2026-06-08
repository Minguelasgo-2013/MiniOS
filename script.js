// Reloj del sistema en tiempo real
function runClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    if (h < 10) h = '0' + h;
    if (m < 10) m = '0' + m;
    if (clock) clock.innerText = h + ':' + m;
}
runClock();
setInterval(runClock, 1000);

// Validación de inicio de sesión (1234)
const loginBtn = document.getElementById('login-btn');
const loginScreen = document.getElementById('login-screen');

if (loginBtn) {
    loginBtn.addEventListener('click', function() {
        const passInput = document.getElementById('password-input').value;
        if (passInput === "1234") {
            // Ocultamos por completo el login para liberar la pantalla
            loginScreen.style.setProperty('display', 'none', 'important');
        } else {
            alert("Contraseña de red incorrecta.");
            document.getElementById('password-input').value = "";
        }
    });
}

/* --- LÓGICA PARA ABRIR Y CERRAR EL ARCHIVADOR --- */
const folderIcon = document.getElementById('folder-icon');
const archivadorWindow = document.getElementById('archivador-window');

if (folderIcon) {
    // SOPORTE DOBLE CLIC
    folderIcon.addEventListener('dblclick', function() {
        archivadorWindow.style.display = 'flex';
    });

    // SOPORTE UN SOLO CLIC (Por si falla el doble clic en tu navegador/pantalla)
    folderIcon.addEventListener('click', function() {
        archivadorWindow.style.display = 'flex';
    });
}

const closeArchivadorBtn = document.getElementById('close-archivador-btn');
if (closeArchivadorBtn) {
    // Al hacer clic en la X se oculta la ventana
    closeArchivadorBtn.addEventListener('click', function() {
        archivadorWindow.style.display = 'none';
    });
}
