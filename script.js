document.addEventListener('DOMContentLoaded', function() {
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

      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        this.textContent = '🙈';
      } else {
        passwordInput.type = 'password';
        this.textContent = '👁️';
      }
    });
  });
});