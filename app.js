const dialog = document.querySelector('#attendance-dialog');
const toast = document.querySelector('#toast');
const menuButton = document.querySelector('.mobile-menu');
const sidebar = document.querySelector('.sidebar');

document.querySelector('#open-attendance').addEventListener('click', () => dialog.showModal());
dialog.addEventListener('close', () => {
  if (dialog.returnValue === 'confirm') {
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 3200);
  }
});
menuButton.addEventListener('click', () => {
  const isOpen = sidebar.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
document.querySelectorAll('.side-nav a, .bottom-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.side-nav a, .bottom-nav a').forEach((item) => item.classList.remove('active'));
    document.querySelectorAll(`[href="${link.getAttribute('href')}"]`).forEach((item) => item.classList.add('active'));
    sidebar.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});
