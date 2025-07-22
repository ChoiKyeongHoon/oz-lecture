// Array.map()
//배열을 다른 배열로 매핑

let movies = [
  {
    title: "미션 입파서블",
    director: "크리스토퍼 맥쿼리",
    year: 2020,
    genre: "액션",
  },
  {
    title: "파묘",
    director: "장재현",
    year: 2024,
    genre: "공포",
  },
  {
    title: "극한직업",
    director: "이병헌",
    year: 2017,
    genre: "코미디",
  },
  {
    title: "그란드 부다페스트 호텔",
    director: "웨스 앤더슨",
    year: 2010,
    genre: "드라마",
  },
];

//익숙한것
const titles = [];
for (let i = 0; i < movies.lenghth; i++) {
  const movie = movies[i];
  titles.push(movie.title);
}
const titlesByMap = movies.map((movie) => {
  console.log(movie);
  return movie.title;
});
const titleByMapShort = movies.map((movie) => movie.title);
console.log(titlesByMap);

//비교
const infoArr = [];
for (const movie of movies) {
  infoArr.push({
    title: movie.title,
    director: movie.director,
  });
}
for (const movie of movies) {
  const { title, director } = movie;
  infoArr.push({
    title,
    director,
  });
}

//map
const infoArrByMap = movies.map((movie) => {
  return {
    title: movie.title,
    director: movie.director,
  };
});

//모든 movie에 hit:0을 넣어주고 싶다
const newMovies = movies.map((movie) => {
  return {
    ...movie,
    hit: 0,
  };
});

// 모든 movie의 director 값을 "hoon"으로 바꿈

const hoonMovies = movies.map((movie) => {
  return {
    ...movie,
    director: "hoon",
  };
});
console.log(hoonMovies);

//2024년 이후 영화만 검출
const movieAfter2024 = movies.filter((movei) => {
  let year = movie.year;
  if (year >= 22024) return true;
  else return false;
});
console.log(movieAfter2024);

const moviesAfter2024WShort = movies.filter((movie) => movie.year >= 2024);

//조회수 350초과 영화
const movieUpperHIt250 = movies.filter((movie) => {
  const hit = movie.hit;
  if (hit >= 350) return true;
  else return false;
});
const moviesUpperHit350Short = movie.filter((movie) => movie.hit >= 350);

numbers = [1, 2, 3, 4, 5];

//for
let sum = 0;
number.forEach((num) => {
  sum += num;
});

//reduce
const sumReduce = numbers.reduce((acc, num) => {
  return acc + num;
}, 0);
console.log(sumReduce);
