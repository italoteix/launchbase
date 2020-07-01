const currentPage = location.pathname;
const menuItens = document.querySelectorAll('header .links a');

for (item of menuItens) {
  if (currentPage.includes(item.getAttribute('href'))) {
    item.classList.add('active');
  }
}

// Pagination
function paginate(selectedPage, totalPages) {
  let pages = [],
      oldPage;
  
  for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
  
    const firstAndLastPage = currentPage === 1 || currentPage === totalPages;
    const pageAfterSelectedPage = currentPage <= selectedPage + 2;
    const pageBeforeSelectedPage = currentPage >= selectedPage - 2;
  
    if (firstAndLastPage || pageAfterSelectedPage && pageBeforeSelectedPage) {
  
      if (oldPage && currentPage - oldPage > 2) {
        pages.push('...');
      }
      
      if (oldPage && currentPage - oldPage == 2) {
        pages.push(oldPage + 1);
      }
  
      pages.push(currentPage);
  
      oldPage = currentPage;
    }
  }

  return pages;
}

const pagination = document.querySelector('.pagination');

function createPagination(pagination) {
  const filter = +pagination.dataset.filter;
  const page = +pagination.dataset.page;
  const total = +pagination.dataset.total;
  const pages = paginate(page, total);
  
  let elements = "";
  
  for (let page of pages) {
    if (String(page).includes('...')) {
      elements += `<span>${page}</span>`;
    } else {
      if (filter) {
        elements += `<a href="?page=${page}&filter=${filter}" >${page}</a>`;
      } else {
        elements += `<a href="?page=${page}" >${page}</a>`;
      }
    }
  }
  
  pagination.innerHTML = elements;
}

if (pagination) createPagination(pagination);