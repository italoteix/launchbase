const headerItens = document.querySelectorAll('header a');

function setActiveHeader() {
  for (let item of headerItens) {
    if (location.pathname.includes(item.getAttribute('href'))) {
      item.classList.add('active');
    }
  }
}

if (headerItens) setActiveHeader();

// Pagination
const pagination = document.querySelector('.pagination');

function setPagination(currentPage, total) {
  const pages = [];
  let lastPage;

  for (let page = 1; page <= total; page++) {
    const isFirstOrLastPage = page === 1 || page === total;
    const pageBeforeSelectedPage = page > currentPage - 2;
    const pageAfterSelectedPage = page <  currentPage + 2;

    if (isFirstOrLastPage || pageBeforeSelectedPage && pageAfterSelectedPage) {
      console.log('x', page)

      if (lastPage && page - lastPage > 2) {
        pages.push('...');
      }
      
      if (lastPage && page - lastPage === 2) {
        pages.push(lastPage + 1);
      }

      pages.push(page);

      lastPage = page;
    }
  }

  console.log('p', pages)
  return pages;
}

function createPagination(pagination) {
  const currentPage = +pagination.dataset.page;
  const filter = pagination.dataset.filter;
  const total = +pagination.dataset.total;
  const pages = setPagination(currentPage, total);
  let element = "";

  for (let page of pages) {
    if (page === '...') {
      element += `<span>${page}</span>`
    } else {
      if (filter) {
        element += `<a href="?page=${page}&filter=${filter}">${page}</a>`
      } else {
        element += `<a href="?page=${page}">${page}</a>`
      }
    }
  }

  pagination.innerHTML = element;
}

if (pagination) createPagination(pagination);
