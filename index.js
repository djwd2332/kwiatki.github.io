// Purely for restarting animation
const repaint = () => {
  const markup = document.body.innerHTML;
  document.body.innerHTML = '';
  requestAnimationFrame(() => document.body.innerHTML = markup);
};
document.body.addEventListener('click', repaint);