import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/",

  //yapılacak bütün isteklere eklenecek olan headerlar
  headers: {
    accept: "application/json",

    //yetkilendirme
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY} `,
  },
  params:{
    language:"tr_TR"
  },
});
