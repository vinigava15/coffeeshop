import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer" style={{ background: 'linear-gradient(to bottom, #543310, #000000)' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="footer-link custom-link">Home</Link>
              </li>
              <li>
                <Link to="/about" className="footer-link custom-link">About</Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link custom-link">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Redes Sociais</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="footer-link custom-link">Facebook</a>
              </li>
              <li>
                <a href="#" className="footer-link custom-link">Twitter</a>
              </li>
              <li>
                <a href="#" className="footer-link custom-link">Instagram</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contato</h5>
            <ul className="list-unstyled">
              <li>
                <span className="footer-link custom-link">Endereço: Rua Senai, 123</span>
              </li>
              <li>
                <span className="footer-link custom-link">Telefone: (99) 1234-5678</span>
              </li>
              <li>
                <span className="footer-link custom-link">Email: coffeeshop@coffeshop.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
