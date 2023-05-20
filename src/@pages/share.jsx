import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import getPhotoInfo from "../api/getPhotoInfo";

export default function Share() {
  const [photos, setPhotos] = useState();
  async function fetchPhotoInfo() {
    const response = await getPhotoInfo();
    setPhotos(response);
  }
  
  useEffect(() => {
    fetchPhotoInfo;
  }, []);
  console.log(photos);

  return <div>share</div>;
}
