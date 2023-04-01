import AddPromo from "../forms/addPromo/addPromo";
import Promo from "./Promo";
import React, { useEffect, useState } from "react";

function PromoRePage() {
  const [promocoes, setPromocoes] = useState([]);

  const addPromo = (newPromo) => {
    setPromocoes([...promocoes, newPromo]);
  };

  return (
    <div>
      <div>
      <Promo promocoes={promocoes} /> 
        <AddPromo addPromo={addPromo} />
        
      </div>
    </div>
  );
}

export default PromoRePage;
