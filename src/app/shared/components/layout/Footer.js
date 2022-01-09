export default function Footer() {
  return (
    <div className="container-fluid bg-white border-top border-gray-300 py-5">
      <div className="row">
        <div className="col-6">
          <span className="text-muted">
            App Residencial &copy; Todos los derechos reservados
          </span>
        </div>

        <div className="col-6 text-end">
          <a href="mailto:jbernabel.dev@gmail.com">
            <i className="bi bi-envelope fs-1 text-muted text-hover-primary"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
