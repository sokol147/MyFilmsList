import UI from './ui';
import Film from './film';
import Store from './storage';

document.addEventListener('DOMContentLoaded', UI.displayFilms);

document.querySelector('#film-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const status = document.querySelector('#status').value;

  if(title === ''){
    alert('Enter film title');
  } else {
    const film = new Film(title, status);

    UI.addFilmToList(film);

    Store.addFilm(film);
  
    UI.clearFields();
  }
});

document.querySelector('#film-list').addEventListener('click', (e) => {
  if(e.target.classList.contains('delete')) {
    e.target.parentElement.parentElement.remove();
  }
  Store.removeFilm(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
})
