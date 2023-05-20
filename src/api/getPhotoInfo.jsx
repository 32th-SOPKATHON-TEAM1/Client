import axios from "axios";

export default async function getPhotoInfo(id) {
  try {
    const data = await axios.get(`https://api.mindphoto.kro.kr/post/${id}`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
}

// import axios from "axios";

// export async function getPhotoInfo(id) {
//   try {
//     const data = await axios.get(`https://api.mindphoto.kro.kr/post/${id}`);
//     console.log(data);
//     return data.data;
//   } catch (error) {
//     console.log(error);
//   }
// }
