import React from "react";
import axios from "axios";

export default async function getPhotoInfo(id) {
  try {
    const data = await axios.get(`{base_url}/post/${id}`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
}
