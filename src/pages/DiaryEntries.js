import Button from "react-bootstrap/Button";

export const DiaryEntries = () => {
  return (
    <div className="diary-entries" style={{ padding: "2rem" }}>
      <Button href="/add">Add Entry</Button>
    </div>
  );
};
