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

// Abrir el explorador de archivos con doble clic en la carpeta CSS
const folderIcon = document.getElementById('folder-icon');
if (folderIcon) {
    folderIcon.addEventListener('dblclick', function() {
        document.getElementById('files-window').style.display = 'flex';
    });
}

// Cerrar la ventana de archivos
const closeWindowBtn = document.getElementById('close-window-btn');
if (closeWindowBtn) {
    closeWindowBtn.addEventListener('click', function() {
        document.getElementById('files-window').style.display = 'none';
    });
}
