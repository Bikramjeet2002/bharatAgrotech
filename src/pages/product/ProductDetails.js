import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  return <div>details</div>;
}

export default ProductDetails;
