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
if (loginBtn) {
    loginBtn.addEventListener('click', function() {
        const passInput = document.getElementById('password-input').value;
        if (passInput === "1234") {
            document.getElementById('login-screen').style.display = 'none';
        } else {
            alert("Contraseña de red incorrecta.");
            document.getElementById('password-input').value = "";
        }
    });
}

/* --- LÓGICA PARA ABRIR Y CERRAR EL ARCHIVADOR --- */

const folderIcon = document.getElementById('folder-icon');
if (folderIcon) {
    // Al hacer doble clic en el icono, se abre el archivador
    folderIcon.addEventListener('dblclick', function() {
        document.getElementById('archivador-window').style.display = 'flex';
    });
}

const closeArchivadorBtn = document.getElementById('close-archivador-btn');
if (closeArchivadorBtn) {
    // Al hacer clic en la "X" (representada por la 'r' en la fuente clásica o texto), se cierra
    closeArchivadorBtn.addEventListener('click', function() {
        document.getElementById('archivador-window').style.display = 'none';
    });
}
