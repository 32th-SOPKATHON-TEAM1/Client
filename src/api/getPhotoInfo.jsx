import React from 'react';
import axios from "axios";

export default async function getPhotoInfo() {
  try {
    const data = await axios.get(`{base_url}/post/{postId}`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
}
