import { atom } from "recoil";

export const emotionData = atom({
  key: "emotionData",
  default: { name: "솝트짱", title: "", emotions: [] },
});

export const clickedEmotion = atom({
  key: "clickedEmotion",
  default: "",
});
