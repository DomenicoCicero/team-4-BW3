import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { FaPen } from "react-icons/fa";

const jwt =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBkMDFkMGY5NGY0YTAwMTkzNzkxNjUiLCJpYXQiOjE3MTIxMjg0NjQsImV4cCI6MTcxMzMzODA2NH0.rrAz-vY_R1pN6Zjj9pjzUoV5PUAFIOfYKwZONwGTEzo";

const PostModalPut = props => {
  const initialForm = {
    text: props.post.text,
  };
  const [show, setShow] = useState(false);
  const [form, setForm] = useState(initialForm);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlePut = e => {
    e.preventDefault();
    fetch(`https://striveschool-api.herokuapp.com/api/posts/${props.post._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: jwt,
      },
      body: JSON.stringify(form),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel reperimento dei dati");
        }
      })
      .then(data => {
        alert("Post modificato con successo");
        handleClose();
      })
      .catch(err => {
        console.log("ERRORE", err);
      });
  };

  return (
    <>
      <Button variant="white" className="mb-2" onClick={handleShow}>
        <FaPen />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica Post</Modal.Title>
        </Modal.Header>
        <Form className="px-2" onSubmit={handlePut}>
          <Form.Group className="mb-3">
            <Form.Label>Modifica testo del post</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              required
              onChange={e => {
                setForm({
                  ...form,
                  text: e.target.value,
                });
              }}
              value={form.text}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-25">
            Modifica
          </Button>
        </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PostModalPut;
