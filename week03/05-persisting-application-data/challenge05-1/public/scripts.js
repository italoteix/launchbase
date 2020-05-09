const headerItens = document.querySelectorAll('header a');

for (let item of headerItens) {
  if (location.pathname.includes(item.getAttribute('href'))) {
    item.classList.add('active');
  }
}
