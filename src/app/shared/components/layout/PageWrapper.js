import { OverlayTrigger, Popover } from 'react-bootstrap'

export default function PageWrapper({ children, ...props }) {
  const { name, onAdd } = props;
  const Filter = props.filterTpl;

  const filterPopup = (
    <Popover>
      <Popover.Body>
        <Filter onClose={() => document.body.click()} />
      </Popover.Body>
    </Popover>
  );

  return (
    <>
      <div className="bg-white border-top py-3 px-5 d-flex justify-content-between align-items-center">
        <h1 className="m-0">
          {name}
        </h1>

        <div>
          {Filter &&
            <OverlayTrigger trigger="click" placement="bottom" overlay={filterPopup}
              rootClose={true}>
              <button className="btn btn-light-primary">
                <i className="bi bi-funnel fs-3"></i>
                Filtrar
              </button>
            </OverlayTrigger>}

          <button className="btn btn-primary ms-3" onClick={onAdd}>
            Nuevo
          </button>
        </div>
      </div>

      <div className="container-fluid">
        <div className="card my-5 border border-gray-300">
          <div className="card-body p-0">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
