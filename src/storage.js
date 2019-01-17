class Store{
  static getFilms(){
    let films;
    if(localStorage.getItem('films') === null){
      films = [];
    } else {
      films = JSON.parse(localStorage.getItem('films'));
    }

    return films;
  }

  static addFilm(film){
    const films = Store.getFilms();

    films.push(film);

    localStorage.setItem('films', JSON.stringify(films));
  }

  static removeFilm(title){
    const films = Store.getFilms();

    films.forEach((film, index) => {
      if(film.title === title){
        films.splice(index, 1);
      }
    });

    localStorage.setItem('films', JSON.stringify(films));
  }
}

export default Store;