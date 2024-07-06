import { useSelector } from "react-redux";

const Hero = () => {

  const {isLoading, error, movies } = useSelector(store => store.movies);
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:max-h-[400px] gap-5 mb-10 ">
      <div className="flex flex-col gap-6 items-center justify-center">
        <h1 className="text-5xl font-bold">No Exit</h1>
        <p className="text-3xl text-start">
        The movie tells the story of a group of people struggling to survive inside a crashed airplan is about the human experience.
        </p>
        <p>
          <span className="text-3xl">IMDB:</span>
          <span className="text-3xl text-yellow-400 ms-2 font-semibold">6.4</span>
        </p>
        <div className="flex gap-5">
          <button className="p-3 text-3xl bg-red-600 rounded hover:bg-red-700">
          Watch Movie
          </button>
          <button className="p-3 text-3xl bg-blue-600 rounded hover:bg-blue-700">
          Add to List
          </button>
        </div>
      </div>
      <div>
        <img
          className="  float-center hero-img my-4 ml-6 object-contain rounded max-h-[300px] "
          src="https://image.tmdb.org/t/p/original/4woSOUD0equAYzvwhWBHIJDCM88.jpg"
        />
      </div>
    </div>
  );
};

export default Hero;
