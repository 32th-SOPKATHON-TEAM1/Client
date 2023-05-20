//api 함수 : api파일 안에 저장
import axios from "axios";

export async function postEmotionData(emotion) {
  try {
    const data = await axios.post(`https://api.mindphoto.kro.kr/post`,emotion);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}