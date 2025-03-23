import "../styles/components/NoteInput.css";

function NoteInput({ placeholder }) {
  return (
    <div className="note-input">
      <div className="note-label">Notes:</div>
      <input type="text" placeholder={placeholder} />
    </div>
  );
}

export default NoteInput;
