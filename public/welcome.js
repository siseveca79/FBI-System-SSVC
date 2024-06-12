document.addEventListener('DOMContentLoaded', () => {
  const email = sessionStorage.getItem('email');
  const token = sessionStorage.getItem('token');

  if (!email || !token) {
    alert('Unauthorized');
    window.location.href = '/';
    return;
  }

  document.getElementById('email').innerText = `Bienvenido, ${email}`;
  const tokenDisplay = document.getElementById('token');
  tokenDisplay.innerText = `Token: ${token}`;

  document.getElementById('toggleToken').addEventListener('click', () => {
    if (tokenDisplay.style.display === 'none') {
      tokenDisplay.style.display = 'block';
    } else {
      tokenDisplay.style.display = 'none';
    }
  });
});
