import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import logo from "/images/Logo.svg";
import img1 from "/images/37933187_1072728609550584_4171040820742324224_n.jpg";
import img2 from "/images/357047720_2544912345665529_8378176853640163633_n.jpg";
import img3 from "/images/463437119_2926437560846337_1548436230307158174_n.jpg";
import { login } from "../auth"; // ajusta el path según tu estructura

const images = [img1, img2, img3];

const Login = ({ setAuth }) => {
  const [index, setIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleLogin = () => {
    if (login(email, password)) {
      setAuth(true);
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="login-page">
      <svg className="svg-deco svg-top-left" width="300" height="300" viewBox="0 0 300 300">
        <circle cx="150" cy="150" r="120" fill="#00924522" />
        <circle cx="100" cy="100" r="80" fill="#f7941d33" />
      </svg>

      <svg className="svg-deco svg-bottom-right" width="300" height="300" viewBox="0 0 300 300">
        <circle cx="150" cy="150" r="120" fill="#f7941d22" />
        <circle cx="200" cy="200" r="80" fill="#00924533" />
      </svg>

      <NavLink to="/Home" className="back-icon">
        <i className="bi bi-arrow-left"></i>
      </NavLink>
      <div className="outer-container">
        <div className="login-container">
          <div className="box-login-container">
            <img src={logo} alt="Logo" className="logo" />
            <h2 className="bienvenido">Bienvenido</h2>
            <input
              type="email"
              placeholder="Correo"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn-login" onClick={handleLogin}>Acceder</button>
            <p className="footer-login">© 2025 Coonadoc. Todos los derechos reservados.</p>
          </div>
        </div>

        <div className="carousel-container">
          <div className="carousel-box">
            <div className="carousel" style={{ transform: `translateX(-${index * 100}%)` }}>
              {images.map((src, i) => (
                <div className="carousel-slide" key={i}>
                  <img src={src} alt={`Imagen ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
