import React from "react";
import MainScreen from "../MainScreen";
import { Link } from "react-router-dom";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import notes from "../../data/notes";

const MyNotes = () => {
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      console.log("Deleting note with id:", id);
      // Add logic to handle deleting the note
    }
  };

  return (
    <MainScreen title="Welcome Back Harry ..">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
      <Accordion defaultActiveKey="0">
        {notes.map((note) => (
          <Accordion.Item eventKey={note._id} key={note._id}>
            <Card style={{ margin: 10, border: "none" }}>
              <Card.Header
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "none",
                  padding: 0,
                }}
              >
                <Accordion.Header as="div" style={{ flex: 1 }}>
                  <span
                    style={{
                      color: "black",
                      textDecoration: "none",
                      cursor: "pointer",
                      fontSize: 18,
                    }}
                  >
                    {note.title}
                  </span>
                </Accordion.Header>
                <div style={{ marginLeft: "auto" }}>
                  <Button href={`/notes/${note._id}`} variant="primary">
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="mx-2"
                    onClick={() => deleteHandler(note._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Header>
              <Accordion.Body>
                <Card.Body>
                  <h4>
                    <Badge bg="success">Category - {note.category}</Badge>
                  </h4>
                  <blockquote className="blockquote mb-0">
                    <p>{note.content}</p>
                    <footer className="blockquote-footer">
                      created on -date
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Body>
            </Card>
          </Accordion.Item>
        ))}
      </Accordion>
    </MainScreen>
  );
};

export default MyNotes;
