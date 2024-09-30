import axios from "axios";
import { useState, useEffect } from "react";

export function LawyersPage() {
  const [lawyer, setLawyer] = useState(null);

  const fetchLawyer = () => {
    console.log("fetchLawyer");
    axios.get("http://localhost:3000/lawyers/1.json").then((response) => {
      console.log(response.data);
      setLawyer(response.data);
    });
  };

  useEffect(fetchLawyer, []);

  return (
    <main>
      {lawyer ? (
        <div className="lawyer-details">
          <h1>{lawyer.name}</h1>
          <p>Specialization: {lawyer.specialization}</p>
          <p>Years of Experience: {lawyer.experience}</p>
          <img src={lawyer.url} alt={`${lawyer.name}'s profile`} />
        </div>
      ) : (
        <p>Loading lawyer details...</p>
      )}
    </main>
  );
}
