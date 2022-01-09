import { useToaster } from 'react-hot-toast';

export default function Toast() {
    const { toasts } = useToaster();
    const toastConfig = {
        blank: { bg: 'bg-primary', icon: 'bi-info-circle-fill' },
        success: { bg: 'bg-success', icon: 'bi-check-circle-fill' },
        error: { bg: 'bg-danger', icon: 'bi-x-circle-fill' }
    };

    const toastIconClass = (type) => {
        const defaultClass = 'bi fs-1 text-white float-start me-2 ';
        return defaultClass + toastConfig[type].icon;
    };

    const toastClass = (type) => {
        const defaultClass = 'toast show shadow-none border-0 mb-2 ';
        return defaultClass + toastConfig[type].bg;
    };

    if (!toasts.length) {
        return null;
    }

    return (
        <div className="position-absolute top-0 end-0 mt-3 me-3" style={{ zIndex: '9999' }}>
            {toasts.map(toast => (
                <div key={toast.id} className={toastClass(toast.type)}>
                    <div className="toast-body text-white p-5">
                        <i className={toastIconClass(toast.type)}></i>
                        <p className="m-0 fs-6 fw-bold">
                            {toast.message}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
