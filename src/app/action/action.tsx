import Link from "next/link";

const allMovies = [
  {
    imageSrc:
      "https://m.media-amazon.com/images/M/MV5BMTY3MTI5NjQ4Nl5BMl5BanBnXkFtZTcwOTU1OTU0OQ@@._V1_QL75_UY562_CR0,0,380,562_.jpg",
    title: "Pacific Rim",
    meta: "2013 PG-13 2h 11m",
  },
  {
    imageSrc:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR8,0,380,562_.jpg",
    title: "The Godfather",
    meta: "1972 R 2h 55m",
  },
  {
    imageSrc:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    title: "The Dark Knight",
    meta: "2008 PG-13 2h 32m",
  },
];

export function searchAction(prev: any, formData: FormData) {
  const term = formData.get("term") as string;

  const regex = new RegExp(term, "i");

  const data = allMovies.filter((item) => item.title.match(regex));

  return data.map((item) => (
    <Link
      key={item.title}
      href="#"
      className="p-3 flex flex-row gap-3 hover:bg-slate-200 transition-colors rounded-md"
    >
      <img className="w-20" src={item.imageSrc} />
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl text-bold">{item.title}</h1>
        <span>{item.meta}</span>
      </div>
    </Link>
  ));
}
