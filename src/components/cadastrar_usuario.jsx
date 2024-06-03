import { useForm } from "react-hook-form";
import { api } from "../config_axios";
import { useState } from "react";

const Cadastrar_Usuario = () => {
  const { register, handleSubmit,reset } = useForm();
  const [aviso, setAviso] = useState("");

  const salvar = async (campos) => {
    try {
      //vamos enviar os dados digitados para a rota /user do backend
      const response = await api.post("user/createUsers", campos);
      setAviso(`Usuário cadastrado com sucesso!"`);
      reset();
    } catch (error) {
      setAviso("Erro ao cadastrar usuário!");
    }
  };

  return (
    <div style={{ backgroundColor: '#543310' }} className="container-fluid text-light min-vh-100 d-flex align-items-center">
      <div className="container text-dark rounded" style={{ backgroundColor: '#FFF2E1', marginLeft: '25px', padding: '40px'}}>
        <h4 className="fst-italic mb-3">Cadastrar Usuário</h4>
        <form onSubmit={handleSubmit(salvar)}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              required
              autoFocus
              {...register("username")}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              required
              {...register("email")}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="status">Senha:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              required
              {...register("password")}
            />
          </div>
                   
          <input
            type="submit"
            className="btn btn-primary mt-3"
            value="Enviar"
          />
          <input
            type="reset"
            className="btn btn-danger mt-3 ms-3"
            value="Limpar"
          />
        </form>
        <div className="alert mt-3">{aviso}</div>
      </div>
      <div className="col-md-6 p-5 d-flex align-items-center justify-content-center">
        <img src="src/assets/coffee cup-cuate.png" alt="Café" className="img-fluid rounded" style={{ height: '490px' }} />
      </div>
    </div>
  );
};

export default Cadastrar_Usuario;