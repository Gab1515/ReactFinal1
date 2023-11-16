import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = ({ handleInput, handleRegister }) => {
  
  return (
    <div className="container d-flex  justify-content-center align-items-center  vh-00">
  
      <div >
        <h2 className="text-center mb-4">Registro</h2>
        <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
  <Form.Label>Username</Form.Label>
  <Form.Control
    
    name="nombreusuario"
    type="nombreusuario"
    placeholder="Enter nombreusuario"
    onChange={(e) => handleInput(e)}
  />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Email</Form.Label>
  <Form.Control
    
    name="email"
    type="email"
    placeholder="Enter email"
    onChange={(e) => handleInput(e)}
  />
  <Form.Text className="text-muted">
    Nunca compartiremos su correo electrónico con nadie más.
  </Form.Text>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicIdentification">
  <Form.Label>Identification Number</Form.Label>
  <Form.Control
  
    name="identificacion"
    type="text"
    placeholder="Enter cedula"
    onChange={(e) => handleInput(e)}
  />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Password</Form.Label>
  <Form.Control
    
    name="contraseña"
    type="password"
    placeholder="Password"
    onChange={(e) => handleInput(e)}
  />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPhoneNumber">
  <Form.Label>Phone Number</Form.Label>
  <Form.Control
    
    name="elefono"
    type="text"
    placeholder="Enter telefono"
    onChange={(e) => handleInput(e)}
  />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicProducts">
  <Form.Label>Products</Form.Label>
  <Form.Control
    
    name="producto"
    type="Rol"
    placeholder="Enter producto"
    onChange={(e) => handleInput(e)}
  />
</Form.Group>


          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Recordar datos" />
          </Form.Group>

          <Button className="mb-3" variant="primary" type="submit">
            Registrar
          </Button>
        </Form>
      </div>  
       </div>
  );
};

export default Home;