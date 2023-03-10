import { Form, Button } from "react-bootstrap";
import { useState } from "react";

const FormForTask = ({ addToDoNewTask }) => {
  const [InputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!InputValue) return;
    addToDoNewTask(InputValue);
    setInputValue("");
  };

  return (
    <div>
      <Form className="container" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>New task</Form.Label>
          <div className="d-flex">
            <Form.Control
              type="text"
              placeholder="Enter your task"
              value={InputValue}
              onChange={(event) => setInputValue(event.target.value)}
            />
          </div>
          <Button className="mt-2 d-grid gap-2 col-6 mx-auto" variant="primary" size="lg" type="submit">
              Add
            </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default FormForTask;
