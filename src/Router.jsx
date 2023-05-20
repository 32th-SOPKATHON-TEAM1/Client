import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./@pages/landing";
import Loading from "./@pages/loading";
import Emotion from "./@pages/emotion";
import Print from "./@pages/print";
import Result from "./@pages/result";
import Share from "./@pages/share";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/emotion" element={<Emotion />} />
        <Route path="/print" element={<Print />} />
        <Route path="/result" element={<Result />} />
        <Route path="/:id" element={<Share />} />
      </Routes>
    </BrowserRouter>
  );
}
