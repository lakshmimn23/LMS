let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () => {
    profile.classList.toggle('active');
    search.classList.remove('active');
}

let search = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () => {
    search.classList.toggle('active');
    profile.classList.remove('active');
}

/* header profile */

