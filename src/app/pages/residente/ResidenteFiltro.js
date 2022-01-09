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
                        DNI
                    </label>

                    <input type="text" className="form-control" />
                </div>

                <div className="col-lg-12">
                    <label htmlFor="name" className="form-label">
                        Nombre
                    </label>

                    <input type="text" className="form-control" />
                </div>

                <div className="col-lg-12">
                    <label htmlFor="name" className="form-label">
                        No. residencia
                    </label>

                    <InputNumber inputId="withoutgrouping" mode="decimal" useGrouping={false} />
                </div>

                <div className="col-lg-12">
                    <label htmlFor="name" className="form-label">
                        Estado
                    </label>

                    <div className="nav-group nav-group-fluid bg-white">
                        <label>
                            <input type="radio" className="btn-check" name="type" value="has" defaultChecked />
                            <span className="btn btn-sm btn-color-muted btn-active btn-active-primary">Activo</span>
                        </label>

                        <label>
                            <input type="radio" className="btn-check" name="type" value="users" />
                            <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Inactivo</span>
                        </label>

                        <label>
                            <input type="radio" className="btn-check" name="type" value="orders" />
                            <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Todos</span>
                        </label>
                    </div>
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
