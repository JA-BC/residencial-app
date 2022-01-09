import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Axios } from '../../core/services';
import { handlerError } from '../../core/helpers';

export default function ResidenciaForm(props) {
  const { show, close, model } = props;

  const { register, handleSubmit, formState: form, reset } = useForm({
    defaultValues: model,
    mode: 'onChange'
  });

  const [isLoading, setIsLoading] = useState(false);

  const tiposResidencia = [
    { key: 'Casa', value: 1 },
    { key: 'Apartamento', value: 2 }
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
    let endpoint = '/residencia/create';

    if (model.id) {
      endpoint = '/residencia/update/' + model.id;
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
          Residencia
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="min-h-300px">
        <form>
          <div className="row gy-4">
            <div className="col-lg-3">
              <label htmlFor="dni" className="form-label required">
                Numero
              </label>

              <input type="text" className="form-control" id="dni"
                {...register('numero', { required: true })} />
            </div>

            <div className="col-lg-3">
              <label htmlFor="type" className="form-label required">
                Tipo de Residencia
              </label>

              <select id="type" className="form-control"
                {...register('tipoResidencia', { required: true })}>
                {tiposResidencia.map(x => <option {...x}>{x.key}</option>)}
              </select>
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
