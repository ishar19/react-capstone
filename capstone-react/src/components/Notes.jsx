import { useState } from "react";

export default function Notes() {
  const [notes, setNotes] = useState(localStorage.getItem("notes") ?? ""); // this thing runs only on first render
  const handleChange = (e) => {
    setNotes(e.target.value);
    localStorage.setItem("notes", e.target.value);
  };
  return (
    <div
      style={{
        background: "#F1C75B",
        width: "30vw",
        padding: "16px",
        marginTop: "12px",
      }}
    >
      <h1>Notes</h1>
      <textarea
        onChange={handleChange}
        value={notes}
        style={{
          background: "#F1C75B",
          width: "30vw",
          maxWidth: "30vw",
          height: "40vh",
          maxHeight: "40vh",
          border: "none",
        }}
        // rows={20}
        // cols={40}
      ></textarea>
    </div>
  );
}
