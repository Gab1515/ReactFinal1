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
               <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombres</Form.Label>
            <Form.Control
              input
              name="nombres"
              type="nombres"
              placeholder="Enter nombres"
              onChange={(e) => handleInput(e)}
            
            />
   </Form.Group>

   <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Identificacion</Form.Label>
            <Form.Control
              input
              name="identificacion"
              type="text"
              placeholder="Enter cedula"
              onChange={(e) => handleInput(e)}
   
            />
   </Form.Group>

   <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Fecha de Nacimiento</Form.Label>
            <Form.Control
              input
              name="fecha de nacimiento"
              type="date"
              placeholder="Enter fecha de nacimiento"
              onChange={(e) => handleInput(e)}
           
            />
   </Form.Group>

   <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              input
              name="elefono"
              type="text"
              placeholder="Enter telefono"
              onChange={(e) => handleInput(e)}
       
            />
   </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              input
              name="email"
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
              name="contraseña"
              type="password"
              placeholder="Password"
              onChange={(e) => handleInput(e)}
       
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Rol</Form.Label>
            <Form.Control
              input
              name="rol"
              type="Rol"
              placeholder="Enter rol"
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