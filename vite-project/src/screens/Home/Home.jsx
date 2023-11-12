import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = ({ handleInput, handleRegister }) => {
  
  return (
    <div className="container d-flex  justify-content-center align-items-center  vh-100">
      <div >
        <h2 className="text-center mb-4">Registro</h2>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              input
              name="Email"
              type="email"
              placeholder="Enter email"
              onChange={(e) => handleInput(e)}
            />
            <Form.Text className="text-muted">
              Nunca compartiremos su correo electrónico con nadie más.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              input
              name="Contraseña"
              type="password"
              placeholder="Password"
              onChange={(e) => handleInput(e)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Recordar datos" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Registrar
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Home;