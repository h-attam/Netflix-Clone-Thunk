import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "./../utils/api";
import Loader from "../components/Loader";
import { baseImgUrl } from "../constants";

const DetailPage = () => {
  const [movie, setMovie] = useState(null);
  //*url'den filmin id sini useParams methodu ile aldık.
  const { id } = useParams();

  useEffect(() => {
    api
      .get(`movie/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(movie);
  return;
  <div>
    {!movie ? (
      <Loader />
    ) : (
      <div>
        {/*üst alan*/}
        <div>
          <img src={baseImgUrl + movie.backdrop_path} alt="" />
          <div>
            <h2 className="text-3xl font-semibold" >{movie.title} </h2>
          </div>
        </div>
      </div>
    )}{" "}
  </div>;
};

export default DetailPage;
