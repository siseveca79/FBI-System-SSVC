document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = form.email.value;
    const password = form.password.value;

    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      sessionStorage.setItem('token', data.token);
      sessionStorage.setItem('email', data.email);
      setTimeout(() => {
        sessionStorage.removeItem('token');
      }, 120000);
      window.location.href = '/welcome.html';
    } else {
      alert('Unauthorized');
    }
  });
});
