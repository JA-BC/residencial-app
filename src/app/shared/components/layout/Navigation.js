import React from 'react';
import { Dropdown } from 'react-bootstrap';
import userPhoto from '../../../../assets/img/user/user.jpg';

export default function Navigation() {

  const avatarToggle = React.forwardRef((props, ref) => {
    const { onClick } = props;

    return (
      <div className="symbol symbol-40px symbol-circle cursor-pointer" ref={ref}
        onClick={onClick}>
        <img src={userPhoto} alt="Usuario" />
      </div>
    );
  });

  return (
    <div className="navbar navbar-expand bg-white navbar-light py-0">
      <div className="input-group w-300px ms-3">
        <span className="input-group-text border-0 bg-white">
          <i className="bi bi-search fs-3"></i>
        </span>

        <input type="text" className="form-control form-control-flush" placeholder="Buscar" />
      </div>

      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Dropdown className="nav-link">
            <Dropdown.Toggle as={avatarToggle}></Dropdown.Toggle>

            <Dropdown.Menu className="w-200px py-2">
              <div className="d-flex border-bottom border-secondary p-3">
                <div className="me-auto">
                  <h6 className="m-0">John Doe</h6>
                  <span className="text-muted">
                    Administrador
                  </span>
                </div>

                <span className="bullet bullet-vertical bg-success h-35px"></span>
              </div>

              <Dropdown.Item className="fs-6 py-3 border-bottom border-secondary">
                Mi perfil
              </Dropdown.Item>

              <Dropdown.Item className="btn btn-danger py-2 mt-2 ms-2 text-center"
                style={{ width: 'calc(100% - 16px)' }}>
                Salir
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
      </ul>
    </div>
  );
}
