import { useState, useEffect } from 'react';
import { PageWrapper, Pagination, DialogPopup } from "../../shared/components";
import { usePagination } from '../../core/hooks';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Axios } from '../../core/services';
import { handlerError } from '../../core/helpers';
import { Estado } from '../../shared/templates';
import Filtro from './ResidenciaFiltro';
import Form from './ResidenciaForm';

export default function ResidenciaPage() {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [model, setModel] = useState({});
  const [showDialog, setShowDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { setOptions, ...pagination } = usePagination();

  const onPageChange = (page) => {
    setOptions({ page });
    getData();
  };

  const onCloseForm = (model) => {
    if (model) {
      const items = [...data];

      if (model?.id) {
        const index = items.findIndex(x => x.id === model.id);
        items.splice(index, 1);
      }

      setData([model, ...items]);
    }

    setShowForm(false);
    setModel({});
  }

  const onEdit = (model) => {
    setModel(model);
    setShowForm(true);
  };

  const onDelete = async (isAccepted) => {
    if (isAccepted) {
      setIsLoading(true);

      const res = await Axios.post('residencia/remove', {
        id: model.id
      }).catch(handlerError)
      .finally(() => setIsLoading(false));

      if (!res?.data) {
        return;
      }

      setData(data.filter(x => x.id !== model.id));
    }

    setShowDialog(false);
    setModel({});
  };

  const getData = async () => {
    setIsLoading(true);

    const params = {
      page: pagination.page,
      limit: pagination.limit
    };

    const res = await Axios.get('/residencia/find', { params })
      .catch(handlerError)
      .finally(() => setIsLoading(false));

    if (!res?.data) {
      return;
    }

    const { data, pagination: { totalCount } } = res.data;

    setData(data);
    setOptions({ totalCount });
  };

  useEffect(() => {
    getData();
  }, []);

  const actionButtons = (item) => (
    <div className="d-flex pe-2">
      <button className="btn btn-icon btn-sm btn-active-color-primary mx-1"
        onClick={() => onEdit(item)}>
        <i className="bi bi-pencil fs-3"></i>
      </button>

      <button className="btn btn-icon btn-sm btn-active-color-primary mx-1"
        onClick={() => { setShowDialog(true); setModel(item); }}>
        <i className="bi bi-trash fs-3"></i>
      </button>
    </div>
  );

  return (
    <>
      <PageWrapper name="Residencias" filterTpl={Filtro} onAdd={() => setShowForm(true)}>
        <DataTable value={data} responsiveLayout="stack" className="min-h-500px"
          loading={isLoading} loadingIcon="spinner-border text-white border-3 w-45px h-45px"
          emptyMessage={<h6 className="text-center text-muted">No existen registros</h6>}>

          <Column header="Numero" field="numero" />

          <Column header="Tipo" body={'Sin asignar'} />

          <Column header="Propietario" body={'Sin asignar'} />

          <Column header="Poblada" body={(poblada) => poblada ? 'Si' : 'No'} />

          <Column header="" headerClassName="w-10px"
            body={(item) => actionButtons(item)} bodyClassName="p-0 text-end" />
        </DataTable>

        <Pagination {...pagination} onChange={onPageChange} />
      </PageWrapper>

      {/* Form */}
      {showForm && <Form show={true} close={onCloseForm} model={model}></Form>}

      {/* Dialog */}
      <DialogPopup show={showDialog} header="Eliminar registro"
        close={(accept) => onDelete(accept)}
        message="¿Esta seguro de realizar esta accion?" />
    </>
  );
}
