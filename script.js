setTimeout(() => {
  document.body.style.overflow = "visible";
  const div = document.querySelector('.fc-ab-root');
  if (div) {
    div.remove();
  }
}, 2000);