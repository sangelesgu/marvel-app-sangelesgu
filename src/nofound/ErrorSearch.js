import React from "react";
import { useParams } from "react-router-dom";

export const ErrorSearch = () => {
  const { name } = useParams();
  const text = `No found hero with name: ${name}. Back to characters.`;

  return (
    <div className="container text-center mt-5">
      <div className="alert alert-danger" role="alert">
        <blockquote>{text}</blockquote>
      </div>
    </div>
  );
};
