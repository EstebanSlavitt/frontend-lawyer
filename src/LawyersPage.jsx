import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { LawyersShow } from "./LawyersShow"; // Import LawyersShow
import { LawyersIndex } from "./LawyersIndex"; // Assuming you have LawyersIndex

export function LawyersPage() {
  const [lawyers, setLawyers] = useState([]);
  const [isLawyerShowVisible, setIsLawyerShowVisible] = useState(false);
  const [currentLawyer, setCurrentLawyer] = useState({});

  // Fetch all lawyers
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

  // Update the selected lawyer
  const handleUpdate = (id, params, successCallback) => {
    console.log("handleUpdate", params);
    axios.patch(`http://localhost:3000/lawyers/${id}.json`, params).then((response) => {
      setLawyers(
        lawyers.map((lawyer) => {
          if (lawyer.id === response.data.id) {
            return response.data;
          } else {
            return lawyer;
          }
        })
      );
      successCallback(); // Reset or trigger actions after successful update
      handleClose(); // Close the modal after the update
    });
  };

  // Delete the selected lawyer
  const handleDestroy = (id) => {
    console.log("handleDestroy", id);
    axios.delete(`http://localhost:3000/lawyers/${id}.json`).then(() => {
      setLawyers(lawyers.filter((lawyer) => lawyer.id !== id));
      handleClose(); // Close the modal after deleting the lawyer
    });
  };

  useEffect(fetchLawyers, []);

  return (
    <main>
      <h1>All Lawyers</h1>
      <LawyersIndex lawyers={lawyers} onShow={handleShow} />

      {/* Modal to display and update lawyer details */}
      <Modal show={isLawyerShowVisible} onClose={handleClose}>
        {/* Use LawyersShow to display current lawyer's details, handle updates, and deletion */}
        <LawyersShow lawyer={currentLawyer} onUpdate={handleUpdate} onDestroy={handleDestroy} />
      </Modal>
    </main>
  );
}
