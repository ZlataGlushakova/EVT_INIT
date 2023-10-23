let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
let personalMovieDB = {
    count: numberOfFilms,
    movies: {}
};
for (let i = 0; i < 1; i++) {
    let film = prompt('Один из последних просмотренных фильмов?');
    let rating = prompt('На сколько оцените его?');
    if (film != null && rating != null && film !== '' && rating !== '' && film.length <= 50) {
        personalMovieDB.movies[film] = rating;
      } else {
        i--;
      }
    }
    console.log(personalMovieDB);