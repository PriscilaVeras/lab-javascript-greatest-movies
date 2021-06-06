// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require('./data');

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movieList) {
  const allDirectors = movieList.map((only) => only.director);
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movieList) {
  const stevenMovies = movieList.filter(
    (movie) => movie.director === 'Steven Spielberg'
  );
  const stevenDrama = stevenMovies.filter((genero) =>
    genero.genre.includes('Drama')
  );

  return stevenDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movieList) {
  const scoreAllMovies = movieList.map((movieScore) => movieScore.score);

  const averageAllMovies = scoreAllMovies.reduce(function (
    acc,
    scoreAtual,
    index
  ) {
    if (index === scoreAllMovies.length - 1) {
      acc += scoreAtual;
      return acc / scoreAllMovies.length;
    }
    return acc + scoreAtual;
  },
  0);

  return parseFloat(averageAllMovies.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movieList) {
  const dramaMovies = movieList.filter((genero) =>
    genero.genre.includes('Drama')
  );

  const scoreDrama = dramaMovies.map((scoreAll) => scoreAll.score);

  const AllScore = scoreDrama.reduce(function (acc, scoreAtual, index) {
    if (index === scoreDrama.length - 1) {
      acc += scoreAtual;
      return acc / scoreDrama.length;
    }
    return acc + scoreAtual;
  }, 0);

  return parseFloat(AllScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movieList) {
  let yearsTitles = movieList.map((movieCurrent) => ({
    year: movieCurrent.year,
    title: movieCurrent.title
  }));

  yearsTitles.sort((a, b) => {
    return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
  });

  yearsTitles.sort((a, b) => a.year - b.year);

  return yearsTitles;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movieList) {
  const orderAlpha = movieList.map((ordemTitle) => ordemTitle.title);

  let elementOrder = orderAlpha.sort().slice(0, 20);

  return elementOrder;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movieList) {
  const movieMinutes = movieList.map((duration) => duration.duration);

  console.log(movieMinutes);

  /*

  function hoursMinutes(hour, min) {
    let minutes = hour * 60 + min;
    return minutes;
  }

  return movieMinutes;*/
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
