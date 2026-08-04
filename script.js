document.addEventListener('DOMContentLoaded', function() {
  // SVG Path Data Mata Terbuka (Sudah diperbarui)
  const eyeOpenPath = `
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  `;

  // SVG Path Data Mata Dicoret / Tertutup
  const eyeSlashPath = `
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
  `;

  // Logic Login Form
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    const errorBox = document.getElementById('errorBox');

    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;

      if (email && password.length >= 6) {
        errorBox.style.display = 'none';
        alert('Login berhasil (contoh)! Hubungkan form ini ke backend Anda.');
      } else {
        errorBox.style.display = 'block';
      }
    });
  }

  // Logic Register Form
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    const errorBox = document.getElementById('errorBox');

    registerForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;

      let message = '';

      if (!email) {
        message = 'Email wajib diisi.';
      } else if (password.length < 6) {
        message = 'Kata sandi minimal 6 karakter.';
      } else if (password !== confirmPassword) {
        message = 'Konfirmasi kata sandi tidak cocok.';
      }

      if (message) {
        errorBox.textContent = message;
        errorBox.style.display = 'block';
      } else {
        errorBox.style.display = 'none';
        alert('Pendaftaran berhasil (contoh)! Hubungkan form ini ke backend Anda.');
      }
    });
  }

  // Logic Toggle Show/Hide Password
  const toggleButtons = document.querySelectorAll('.toggle-password');
  toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      const passwordInput = document.getElementById(targetId);
      const svgElement = this.querySelector('svg');

      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        svgElement.innerHTML = eyeSlashPath; // Ubah ke ikon mata dicoret
      } else {
        passwordInput.type = 'password';
        svgElement.innerHTML = eyeOpenPath;  // Ubah ke ikon mata terbuka
      }
    });
  });
});