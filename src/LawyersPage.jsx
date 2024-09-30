import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { LawyersShow } from "./LawyersShow"; // Import LawyersShow
import { LawyersIndex } from "./LawyersIndex"; // Assuming you have LawyersIndex

export function LawyersPage() {
  const [lawyers, setLawyers] = useState([]);
  const [isLawyerShowVisible, setIsLawyerShowVisible] = useState(false);
  const [currentLawyer, setCurrentLawyer] = useState({});

  const fetchLawyers = () => {
    console.log("fetchLawyers");
    axios.get("http://localhost:3000/lawyers.json").then((response) => {
      console.log(response.data);
      setLawyers(response.data);
    });
  };

  // Show the selected lawyer in the modal
  const handleShow = (lawyer) => {
    console.log("handleShow", lawyer);
    setIsLawyerShowVisible(true);
    setCurrentLawyer(lawyer);
  };

  // Close the modal
  const handleClose = () => {
    console.log("handleClose");
    setIsLawyerShowVisible(false);
  };

  useEffect(fetchLawyers, []);

  return (
    <main>
      <h1>All Lawyers</h1>
      <LawyersIndex lawyers={lawyers} onShow={handleShow} />

      {/* Modal to display lawyer details */}
      <Modal show={isLawyerShowVisible} onClose={handleClose}>
        {/* Use LawyersShow to display current lawyer's details */}
        <LawyersShow lawyer={currentLawyer} />
      </Modal>
    </main>
  );
}
