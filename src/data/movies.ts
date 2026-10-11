export interface Movie {
  id: number;
  title: string;
  year: number;
  genre: string[];
  rating: number;
  poster: string;
  overview: string;
  director: string;
  backdrop?: string;
}

export const genres = [
  "Tous", "Action", "Drame", "Science-Fiction", "Thriller", "Comédie", "Aventure", "Horreur", "Animation", "Romance", "Fantastique"
];

export const movies: Movie[] = [
  {
    id: 1, title: "Oppenheimer", year: 2023, genre: ["Drame", "Thriller"],
    rating: 8.9, poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/nb3xI8XI3w4pMVZ38VijbsyBqP4.jpg",
    overview: "L'histoire de J. Robert Oppenheimer et de son rôle dans le développement de la bombe atomique.",
    director: "Christopher Nolan"
  },
  {
    id: 2, title: "Dune: Part Two", year: 2024, genre: ["Science-Fiction", "Aventure", "Action"],
    rating: 8.5, poster: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nez7S.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
    overview: "Paul Atreides s'unit aux Fremen pour mener la révolte contre ceux qui ont détruit sa famille.",
    director: "Denis Villeneuve"
  },
  {
    id: 3, title: "Poor Things", year: 2023, genre: ["Comédie", "Drame", "Fantastique"],
    rating: 8.0, poster: "https://image.tmdb.org/t/p/w500/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/bQS43HSLZzMjZkcHJz4fGc7fNdz.jpg",
    overview: "Bella Baxter, ramenée à la vie par un scientifique excentrique, part à la découverte du monde.",
    director: "Yorgos Lanthimos"
  },
  {
    id: 4, title: "Killers of the Flower Moon", year: 2023, genre: ["Drame", "Thriller"],
    rating: 7.8, poster: "https://image.tmdb.org/t/p/w500/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/1X7vow16X7CnCoexXh4H4F2yDJv.jpg",
    overview: "Dans les années 1920, des membres de la nation Osage sont assassinés pour le pétrole sous leurs terres.",
    director: "Martin Scorsese"
  },
  {
    id: 5, title: "The Batman", year: 2022, genre: ["Action", "Thriller", "Drame"],
    rating: 7.8, poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/b0PlSFdDwbyFAJlMe1mDBOYLfmX.jpg",
    overview: "Batman traque un tueur en série sadique qui s'en prend à l'élite de Gotham City.",
    director: "Matt Reeves"
  },
  {
    id: 6, title: "Everything Everywhere All at Once", year: 2022, genre: ["Action", "Aventure", "Comédie"],
    rating: 8.4, poster: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/fYtHxTxlhzD4QWfEbrC1rypysQb.jpg",
    overview: "Une immigrante chinoise se retrouve impliquée dans une aventure à travers le multivers.",
    director: "Daniel Kwan, Daniel Scheinert"
  },
  {
    id: 7, title: "Spider-Man: Across the Spider-Verse", year: 2023, genre: ["Animation", "Action", "Aventure"],
    rating: 8.7, poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
    overview: "Miles Morales traverse le multivers et rencontre une équipe de Spider-People.",
    director: "Joaquim Dos Santos"
  },
  {
    id: 8, title: "Barbie", year: 2023, genre: ["Comédie", "Aventure"],
    rating: 7.0, poster: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/nHf61UzkfFno5dR2GKMHwNt40Nh.jpg",
    overview: "Barbie vit une crise existentielle et part explorer le monde réel avec Ken.",
    director: "Greta Gerwig"
  },
  {
    id: 9, title: "Anatomie d'une chute", year: 2023, genre: ["Drame", "Thriller"],
    rating: 7.8, poster: "https://image.tmdb.org/t/p/w500/kQs6keheMwCxJxrzV83VUwFtHkB.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/9jPoyxjiEYPylUIMI3Ntixf8z3M.jpg",
    overview: "Sandra est soupçonnée du meurtre de son mari, retrouvé mort au pied de leur chalet.",
    director: "Justine Triet"
  },
  {
    id: 10, title: "Top Gun: Maverick", year: 2022, genre: ["Action", "Drame"],
    rating: 8.3, poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/AaV1YIdWKJELECnttYWHbOCm4SD.jpg",
    overview: "Maverick forme une équipe de jeunes pilotes pour une mission périlleuse.",
    director: "Joseph Kosinski"
  },
  {
    id: 11, title: "The Holdovers", year: 2023, genre: ["Comédie", "Drame"],
    rating: 7.9, poster: "https://image.tmdb.org/t/p/w500/VHSzNBTwxV8vh7wylo7O9CLdac.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/xyMRtUMKrFNIE3CMwIaGIBJ6kbT.jpg",
    overview: "Un professeur acariâtre doit surveiller des étudiants pendant les vacances de Noël 1970.",
    director: "Alexander Payne"
  },
  {
    id: 12, title: "Guardians of the Galaxy Vol. 3", year: 2023, genre: ["Action", "Aventure", "Comédie"],
    rating: 7.9, poster: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
    overview: "Peter Quill doit rallier son équipe pour protéger Rocket et défendre l'univers.",
    director: "James Gunn"
  },
  {
    id: 13, title: "Saltburn", year: 2023, genre: ["Drame", "Thriller"],
    rating: 7.0, poster: "https://image.tmdb.org/t/p/w500/qjhahNLSZ705B5JP92YMEYPocPz.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/iyBJlGMmcdT2KxWt0KHOqem0sO1.jpg",
    overview: "Un étudiant d'Oxford est invité à passer l'été dans le somptueux domaine de son camarade.",
    director: "Emerald Fennell"
  },
  {
    id: 14, title: "John Wick: Chapter 4", year: 2023, genre: ["Action", "Thriller"],
    rating: 7.7, poster: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/7I6VUdPj6tQECNHdviJkUHD2u89.jpg",
    overview: "John Wick découvre un moyen de battre la Grande Table, mais doit d'abord affronter de nouveaux ennemis.",
    director: "Chad Stahelski"
  },
  {
    id: 15, title: "Godzilla Minus One", year: 2023, genre: ["Action", "Science-Fiction", "Drame"],
    rating: 7.9, poster: "https://image.tmdb.org/t/p/w500/hkxxMIGaiCTmrEArK7J56JTKUlB.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/fY3lD0jM5AoHJMunjGWqJ0hRteI.jpg",
    overview: "Le Japon d'après-guerre doit faire face à Godzilla, une menace terrifiante.",
    director: "Takashi Yamazaki"
  },
  {
    id: 16, title: "The Zone of Interest", year: 2023, genre: ["Drame"],
    rating: 7.4, poster: "https://image.tmdb.org/t/p/w500/hUu9zyZmDd8VZegKi1iK1Vk0RYS.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/fxs3yJh9fGIlGlqUPMPa46DQSO0.jpg",
    overview: "Le commandant d'Auschwitz et sa femme mènent une vie idyllique à côté du camp.",
    director: "Jonathan Glazer"
  },
  {
    id: 17, title: "Furiosa: A Mad Max Saga", year: 2024, genre: ["Action", "Aventure", "Science-Fiction"],
    rating: 7.6, poster: "https://image.tmdb.org/t/p/w500/iADOJ8Zymht2JPMoy3R7xceZprc.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/shrwC6U8Bkst9c9GDwi7eIIF0sA.jpg",
    overview: "L'histoire de l'origine de Furiosa, enlevée enfant et devenue guerrière du Wasteland.",
    director: "George Miller"
  },
  {
    id: 18, title: "Inside Out 2", year: 2024, genre: ["Animation", "Comédie", "Aventure"],
    rating: 7.6, poster: "https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/p5ozvmdgsmbWe0H8Xk7Rc8SCwAB.jpg",
    overview: "Riley entre dans l'adolescence et de nouvelles émotions font leur apparition.",
    director: "Kelsey Mann"
  },
  {
    id: 19, title: "Alien: Romulus", year: 2024, genre: ["Horreur", "Science-Fiction", "Thriller"],
    rating: 7.2, poster: "https://image.tmdb.org/t/p/w500/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/9SSEUrSqhljBMzRe4aBTh17wUFB.jpg",
    overview: "Un groupe de jeunes colonisateurs explore une station spatiale abandonnée et y découvre le xénomorphe.",
    director: "Fede Álvarez"
  },
  {
    id: 20, title: "Challengers", year: 2024, genre: ["Drame", "Romance"],
    rating: 7.5, poster: "https://image.tmdb.org/t/p/w500/H6vke7zGiuLsz4v4RPeReb9rsv.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/jz8mMIqjoFCIVpXxABSJI6MpK6G.jpg",
    overview: "Deux anciens meilleurs amis tennismen s'affrontent dans un match sous le regard de la femme qu'ils aiment.",
    director: "Luca Guadagnino"
  },
];
