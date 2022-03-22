import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const { nickname } = useParams();

  return <div>{nickname}</div>;
}
