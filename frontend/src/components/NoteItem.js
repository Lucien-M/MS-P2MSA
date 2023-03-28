import React, { useContext } from "react";
import NoteContext from "../context/NoteContext";
import Accordion from "react-bootstrap/Accordion";

const NoteItem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  return (
    <Accordion defaultActiveKey="1">
      <Accordion.Item eventKey="1">
        <Accordion.Header style={{ fontWeight: "bold" }}>
          {note.title}
        </Accordion.Header>
        <Accordion.Body>
          <p>{note.description}</p>
          <i
            className="fas fa-trash mx-2"
            onClick={() => {
              deleteNote(note._id);
            }}
          ></i>
          <i
            className="fas fa-edit mx-2"
            onClick={() => {
              updateNote(note);
            }}
          ></i>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default NoteItem;
