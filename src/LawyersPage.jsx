import axios from "axios";
import { useState, useEffect } from "react";
import { LawyersIndex } from "./LawyersIndex";

export function LawyersPage() {
  const [lawyers, setLawyers] = useState([]);

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("http://localhost:3000/lawyer.json").then((response) => {
      console.log(response.data);
      setLawyers(response.data);
    });
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <LawyersIndex lawyers={lawyers} />
    </main>
  );
}
