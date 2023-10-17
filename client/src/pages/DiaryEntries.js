import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { ModalCus } from "../components/Modal";
import { Forms } from "../components/Forms";

export const DiaryEntries = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchAllEntries = async () => {
      try {
        const res = await fetch("http://localhost:8800/entries");
        console.log("response data: ", res.data);
        setEntries(res.data);
      } catch (err) {
        console.log("Error:", err);
      }
    };
    fetchAllEntries();
  }, []);

  console.log(`Entries: ${entries}`);

  return (
    <div className="diary-entries" style={{ padding: "2rem" }}>
      <ModalCus
        buttonText="Add Entry"
        modalHeader="Add New Entry"
        modalBody={<Forms />}
      />
    </div>
  );
};
