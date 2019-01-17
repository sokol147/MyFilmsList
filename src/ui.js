import Store from './storage';

class UI{
  constructor(){
    this.Store = new Store();
  }
  static displayFilms(){

    const films = Store.getFilms();

    films.forEach((film) => {
      UI.addFilmToList(film);
    })
  }

  static addFilmToList(film){
    const list = document.querySelector('#film-list');

    const row = document.createElement('tr');

    row.innerHTML = `
      <td class="item-title">${film.title}</td>
      <td class="item-status">${film.status}</td>
      <td><a href="#" class="delete"></a></td>
    `;

    list.appendChild(row);
  }

  static clearFields(){
    document.querySelector('#title').value = '';
    document.querySelector('#status').value = '';
  }
}

export default UI;