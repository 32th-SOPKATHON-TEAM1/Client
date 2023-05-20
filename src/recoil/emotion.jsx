import { atom } from "recoil";

export const emotionData = atom({
  key: "emotionData",
  default: { name: "", title: "", emotions: [] },
});

export const clickedEmotion = atom({
  key: "clickedEmotion",
  default: "",
});

export const responseEmotion = atom({
  key: "responseEmotion",
  default: [],
});
