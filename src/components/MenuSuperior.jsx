import { Link } from "react-router-dom";
import "../css/MenuSuperior.css";

const MenuSuperior = () => {
  return (
    <nav style={{ backgroundColor: '#74512D' }} className="navbar navbar-expand-sm navbar-dark sticky-top">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src="src/assets/coffeecerto.png" alt="Logo" style={{ height: '40px' }} />
        </Link>
        <ul className="navbar-nav">
        <li className="nav-item">
            <Link to="/user" className="nav-link custom-link">Cadastrar Usuário</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link custom-link">Incluir Café</Link>
          </li>
          <li className="nav-item">
            <Link to="/manutencao" className="nav-link custom-link">Manutenção de Café's</Link>
          </li>
          <li className="nav-item">
            <Link to="/ranked" className="nav-link custom-link">Melhores Avaliações</Link>
          </li>
          <li className="nav-item">
            <button className="btn btn-sm btn-outline-secondary custom-button" style={{ height: '40px', color: '#EBE3D5 !important',
    transition: 'color 0.3s ease, text-shadow 0.3s ease', marginLeft:'10px'}}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MenuSuperior;
