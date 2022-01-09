import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="card">
      <div className="card-header bg-dark border-bottom border-primary border-3 p-5">
        <div className="card-title text-white m-0 fs-2">
          Solicitar registro
        </div>

        <img src="https://play-lh.googleusercontent.com/gd7vl3Bb-PPYSzae1LJSO3gsuhY5u6vlpbB2CPa-sC5MzWVZo9zo4Q1ImKbrbbDGtA" alt="Logo"
          className="w-45px" />
      </div>

      <div className="card-body">
        <div className="row">
          <div className="col-12">
            <h3 className="text-center">
              Caracteristica no disponible
            </h3>
          </div>
        </div>

        <div className="separator separator-content mt-10 mb-5 border-secondary">
          <span className="fs-1 text-secondary">
            &bull;
          </span>
        </div>

        <div className="row align-items-center justify-content-between">
          <div className="col-6">
            <span className="text-muted">
              Ya tengo una cuenta
            </span>
          </div>
          <div className="col-6 d-grid">
            <Link to="/auth/login" className="btn btn-success">
              Iniciar sesión
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
