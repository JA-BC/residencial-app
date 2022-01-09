import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Axios } from '../../core/services';
import { handlerError } from '../../core/helpers';

export default function ResidenteForm(props) {
  const { show, close, model } = props;

  const { register, handleSubmit, formState: form, reset } = useForm({
    defaultValues: model,
    mode: 'onChange'
  });

  const [isLoading, setIsLoading] = useState(false);

  const tiposResidente = [
    { key: 'Propietario', value: 1 },
    { key: 'Inquilino', value: 2 },
    { key: 'Dependiente', value: 3 }
  ];

  const onSubmit = (values) => {
    createOrUpdate(values).then(model => {
      if (model) {
        close(model);
        reset();
      }
    });
  };

  const createOrUpdate = async (model) => {
    let endpoint = '/residente/create';

    if (model.id) {
      endpoint = '/residente/update/' + model.id;
    }

    setIsLoading(true);
    const res = await Axios.post(endpoint, model)
      .catch(handlerError)
      .finally(() => setIsLoading(false));

    if (!res?.data) {
      return;
    }

    return { ...res.data };
  };

  return (
    <Modal show={show} backdrop="static" keyboard={false} size="xl">
      <Modal.Header className="p-5 bg-dark border-bottom border-primary border-3">
        <Modal.Title className="text-white">
          Residente
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="min-h-300px">
        <form>
          <div className="row gy-4">
            <div className="col-lg-3">
              <label htmlFor="dni" className="form-label required">
                Identificacion
              </label>

              <input type="text" className="form-control" id="dni"
                {...register('dni', { required: true, minLength: 11 })} maxLength="11" />
            </div>

            <div className="col-lg-3">
              <label htmlFor="name" className="form-label required">
                Nombre
              </label>

              <input type="text" className="form-control" id="name"
                {...register('nombre', { required: true })} />
            </div>

            <div className="col-lg-3">
              <label htmlFor="lastname" className="form-label required">
                Apellido
              </label>

              <input type="text" className="form-control" id="lastname"
                {...register('apellido', { required: true })} />
            </div>

            <div className="col-lg-3">
              <label htmlFor="birth" className="form-label">
                Fecha de nacimiento
              </label>

              <input type="date" className="form-control" id="birth"
                {...register('nacimiento')} max={new Date().toISOString().split('T')[0]} />
            </div>

            <div className="col-lg-3">
              <label htmlFor="type" className="form-label required">
                Tipo de residente
              </label>

              <select id="type" className="form-control"
                {...register('tipoResidente', { required: true })}>
                {tiposResidente.map(x => <option {...x}>{x.key}</option>)}
              </select>
            </div>

            <div className="col-lg-3">
              <label htmlFor="phone" className="form-label">
                Telefono
              </label>

              <input type="tel" className="form-control" id="phone"
                {...register('telefono')} />
            </div>

            <div className="col-lg-3">
              <label className="form-label required">
                Genero
              </label>

              <div className="d-flex">
                <div className="form-check form-check-custom">
                  <input className="form-check-input" type="radio" id="checkMan"
                    {...register('genero', { required: true })} value="M" />
                  <label className="form-check-label" htmlFor="checkMan">
                    M
                  </label>
                </div>

                <div className="form-check form-check-custom ms-3">
                  <input className="form-check-input" type="radio" id="checkFemale"
                    {...register('genero', { required: true })} value="F" />
                  <label className="form-check-label" htmlFor="checkFemale">
                    F
                  </label>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <label htmlFor="checkActive" className="form-label required">
                Activo
              </label>

              <div className="form-check form-switch form-check-custom form-check-success">
                <input className="form-check-input" type="checkbox" id="checkActive"
                  {...register('activo')} />
              </div>
            </div>
          </div>
        </form>
      </Modal.Body>

      <Modal.Footer className="py-2 border-0 row justify-content-between">
        <div className="col-auto">
          <button className="btn btn-danger" onClick={() => close(null)}>
            Cancelar
          </button>
        </div>
        <div className="col-auto">
          <button className="btn btn-primary" onClick={handleSubmit(onSubmit)}
            disabled={!form.isValid || (form.isValid && !form.isDirty) || isLoading}>
            {isLoading ? 'Procesando...' : 'Guardar'}

            {isLoading && <div className="spinner-grow spinner-grow-sm bg-white ms-2"></div>}
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
