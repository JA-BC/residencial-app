import { InputNumber } from 'primereact/inputnumber';

export default function ResidenteFiltro({ onClose }) {

  const onSubmit = (event) => {
    event.preventDefault();
    onClose();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row gy-4">
        <div className="col-lg-12">
          <label htmlFor="name" className="form-label">
            No. residencia
          </label>

          <InputNumber inputId="withoutgrouping" mode="decimal" useGrouping={false} />
        </div>

        <div className="col-lg-12 d-grid">
          <button className="btn btn-light-primary" type="submit">
            <i className="bi bi-search fs-3"></i>
            Buscar
          </button>
        </div>
      </div>
    </form>
  );
}
