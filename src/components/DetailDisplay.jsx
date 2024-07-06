import React from "react";
import { baseImgUrl } from "../constants";

const DetailDisplay = ({ title, data }) => {
 

  // data'nın varlığını ve bir dizi olup olmadığını kontrol et
  if (!data || !Array.isArray(data)) {
    return <div>Veri bulunamadı</div>;
  }

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="flex gap-5">{data?.map((item) => item.logo_path ? (
        <div key={item.id} className="bg-white py-1 px-2 rounded-md">
            <img className="w-[100px] object-contain h-[40px] " src={
                baseImgUrl + item.logo_path
            } alt="" />
        </div>
      ): (
        <span className="border py-1 px-2 rounded-md ">{item.name} </span>
      ) )}</div>
    </div>
  );
};

export default DetailDisplay;
