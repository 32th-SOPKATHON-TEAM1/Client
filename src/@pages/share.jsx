import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import ShareHeader from "../@components/common/share/ShareHeader";
import ShareButton from "../@components/common/shareButton";

export default function Share() {
  const [photos, setPhotos] = useState();

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/`);
  };

  async function fetchPhotoInfo() {
    const response = await getPhotoInfo();
    setPhotos(response);
  }
  useEffect(() => {
    fetchPhotoInfo();
    console.log(photos);
  }, []);

  return (
    <>
      <St.ShareWrapper>
        <ShareHeader headerText={`헤더입니다.`} />
        <St.Img>이미지입니다.</St.Img>
        <ShareButton
          text={`나도 사진 찍으러 가기`}
          // onClick={() => handleCopyClipBoard(`${baseUrl}${location.pathname}`)}
          onClick={handleNavigate}/>
      </St.ShareWrapper>
    </>
  );
}
const St = {
  ShareWrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 66.7rem;
  `,
  Img: styled.div``,
  Button: styled.button``,
};
