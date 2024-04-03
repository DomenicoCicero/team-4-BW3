import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";

const ExpModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="white" onClick={handleShow}>
        <FaPlus />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi esperienza</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span className="text-secondary" style={{ fontSize: "10px" }}>
            * Indica che è obbligatorio
          </span>
          <Form>
            <Form.Group className="my-3">
              <Form.Label>Qualifica*</Form.Label>
              <Form.Control type="text" placeholder="Esempio: Retail Sales Manager" required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Tipo di impiego</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Seleziona</option>
                <option value="">A tempo pieno</option>
                <option value="">Part-time</option>
                <option value="">Autonomo</option>
                <option value="">Freelance</option>
                <option value="">A contratto</option>
                <option value="">Stage</option>
                <option value="">Apprendistato</option>
                <option value="">Stagionale</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Label>Nome azienda*</Form.Label>
              <Form.Control type="text" placeholder="Esempio: Microsoft" required />
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Label>Località</Form.Label>
              <Form.Control type="text" placeholder="Esempio: Milano, Italia" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Tipo di località</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Seleziona</option>
                <option value="">In sede</option>
                <option value="">Ibrida</option>
                <option value="">Da remoto</option>
              </Form.Select>
            </Form.Group>
            <Form.Check type="switch" id="custom-switch" label="Attualmente ricopro questo ruolo" className="my-3" />
            <Form.Group>
              <Form.Label className="d-block">Data di inizio*</Form.Label>
              <Form.Select aria-label="Default select example" className="select-w me-1" required>
                <option>Mese</option>
                <option value="">Gennaio</option>
                <option value="">Febbraio</option>
                <option value="">Marzo</option>
                <option value="">Aprile</option>
                <option value="">Maggio</option>
                <option value="">Giugno</option>
                <option value="">Luglio</option>
                <option value="">Agosto</option>
                <option value="">Settembre</option>
                <option value="">Ottobre</option>
                <option value="">Novembre</option>
                <option value="">Dicembre</option>
              </Form.Select>
              <Form.Select aria-label="Default select example" className="select-w" required>
                <option>Anno</option>
                <option value="">2024</option>
                <option value="">2023</option>
                <option value="">2022</option>
                <option value="">2021</option>
                <option value="">2020</option>
                <option value="">2019</option>
                <option value="">2018</option>
                <option value="">2017</option>
                <option value="">2016</option>
                <option value="">2015</option>
                <option value="">2014</option>
                <option value="">2013</option>
                <option value="">2012</option>
                <option value="">2011</option>
                <option value="">2010</option>
                <option value="">2009</option>
                <option value="">2008</option>
                <option value="">2007</option>
                <option value="">2006</option>
                <option value="">2005</option>
                <option value="">2004</option>
                <option value="">2003</option>
                <option value="">2002</option>
                <option value="">2001</option>
                <option value="">2000</option>
                <option value="">1999</option>
                <option value="">1998</option>
                <option value="">1997</option>
                <option value="">1996</option>
                <option value="">1995</option>
                <option value="">1994</option>
                <option value="">1993</option>
                <option value="">1992</option>
                <option value="">1991</option>
                <option value="">1990</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Label>Settore*</Form.Label>
              <Form.Control type="text" placeholder="Esempio: Sviluppo software" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Label>Competenze</Form.Label>
              <Form.Control type="text" placeholder="Competenze (es. project management)" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ExpModal;
