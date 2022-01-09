import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function Login() {
  const { register, handleSubmit, formState: form } = useForm({
    mode: 'onChange'
  });

  const navigate = useNavigate();

  const onSubmit = (values) => {
    console.log(values);
    navigate('/app');
  };

  return (
    <div className="card">
      <div className="card-header bg-dark border-bottom border-primary border-3 p-5">
        <div className="card-title text-white m-0 fs-2">
          Iniciar sesión
        </div>

        <img src="https://play-lh.googleusercontent.com/gd7vl3Bb-PPYSzae1LJSO3gsuhY5u6vlpbB2CPa-sC5MzWVZo9zo4Q1ImKbrbbDGtA" alt="Logo"
          className="w-45px" />
      </div>

      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row gy-8">
            <div className="col-lg-12">
              <div className="input-group">
                <span className="input-group-text bg-white">
                  <i className="bi bi-person fs-1"></i>
                </span>

                <input type="text" className="form-control border-secondary"
                  placeholder="Usuario o correo" {...register('usuario', { required: true })} />
              </div>
            </div>

            <div className="col-lg-12">
              <div className="input-group">
                <span className="input-group-text bg-white">
                  <i className="bi bi-key fs-1"></i>
                </span>

                <input type="text" className="form-control border-secondary"
                  placeholder="Contraseña" {...register('contrasena', { required: true })} />
              </div>
            </div>

            <div className="col-8 d-grid mx-auto">
              <button type="submit" className="btn btn-primary" disabled={!form.isValid}>
                Ingresar
              </button>
            </div>
          </div>
        </form>

        <div className="separator separator-content mt-10 mb-5 border-secondary">
          <span className="fs-1 text-secondary">
            &bull;
          </span>
        </div>

        <div className="row align-items-center justify-content-between">
          <div className="col-8">
            <span className="text-muted">
              ¿No tienes una cuenta aun?
            </span>
          </div>
          <div className="col-4 d-grid">
            <Link to="/auth/register" className="btn btn-success">
              Solicitar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
