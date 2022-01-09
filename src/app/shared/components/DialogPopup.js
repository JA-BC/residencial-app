import { Modal } from 'react-bootstrap';

export default function DialogPopup(props) {
  const {
    header,
    message,
    show,
    close
  } = props;

  return (
    <Modal show={show} backdrop="static" keyboard={false} size="sm">
      <Modal.Body className="p-5">
        <div className="row justify-content-center gy-4">
          <div className="col-auto">
            <div className="badge badge-light-primary rounded-circle">
              <i className="bi bi-info-circle text-primary fs-3hx"></i>
            </div>
          </div>

          <div className="col-12">
            <h6 className="text-dark text-center fw-bold">
              {header}
            </h6>

            <p className="text-muted text-center">
              {message}
            </p>
          </div>

          <div className="col-12">
            <div className="row">
              <div className="col-6 d-grid">
                <button className="btn btn-primary btn-sm" onClick={() => close(true)}>
                  Si
                </button>
              </div>

              <div className="col-6 d-grid">
                <button className="btn btn-outline btn-outline-default btn-sm"
                  onClick={() => close(false)}>
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
