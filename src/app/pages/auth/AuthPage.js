import { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import Login from './Login';
import Register from './Register';

export default function AuthPage() {
  const [showMessage, setShowMessage] = useState(true);

  return (
    <>
      <div className="vh-100 d-flex justify-content-center align-items-center position-relative"
        style={{ background: 'linear-gradient(0deg, #001529, #00d1b2)' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-xl-5 col-md-8">
              <Routes>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="" element={<Navigate to="login" />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>

      <footer className="position-absolute start-50 translate-middle-x" style={{ bottom: '12px' }}>
        <span className="text-white-50">
          App Residencial &copy; Todos los derechos reservados
        </span>
      </footer>

      <Modal show={showMessage}>
        <Modal.Header className="p-5 bg-dark border-bottom border-primary border-3">
          <Modal.Title className="text-white">
            Mensaje
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            La siguiente aplicación es un prototipo de otra ya existente por lo que esta no contiene
            todas las funcionalidades para los fines, por ende se puede encontrar algunos escenarios
            no funcionales.
          </p>

          <h6>Credenciales para inicio de sesion</h6>

          <ul className="pl-3">
            <li>
              <strong>Usuario o correo:&nbsp;</strong>
              <span>admin@admin.com</span>
            </li>

            <li>
              <strong>Contraseña:&nbsp;</strong>
              <span>admin123</span>
            </li>
          </ul>

          <div className="row mt-5">
            <div className="col-12 d-grid">
              <button className="btn btn-primary" onClick={() => setShowMessage(false)}>
                Seguir
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
