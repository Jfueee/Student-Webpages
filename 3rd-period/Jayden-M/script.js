// Optional: Alert when someone clicks a game link
document.querySelectorAll('.card a').forEach(link => {
  link.addEventListener('click', () => {
    alert('Opening game in a new tab...');
  });
});

// Optional: Scroll animation on page load
window.addEventListener('load', () => {
  document.querySelector('.container').style.opacity = 0;
  document.querySelector('.container').style.transition = 'opacity 1.5s ease-in-out';
  setTimeout(() => {
    document.querySelector('.container').style.opacity = 1;
  }, 100);
});
