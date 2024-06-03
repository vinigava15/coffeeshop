import { useForm } from "react-hook-form";
import { api } from "../config_axios";
import { useState } from "react";

// Define o componente funcional 'Cadastrar_cafe'. 
const Cadastrar_cafe = () => {
  // Usa o hook 'useForm' para gerenciar o formulário. Extrai as funções 'register', 'handleSubmit' e 'reset'.
  const { register, handleSubmit, reset } = useForm();
  // Cria um estado 'aviso' e uma função 'setAviso' para manipulá-lo, inicializando 'aviso' com uma string vazia.
  const [aviso, setAviso] = useState("");

  // Define a função 'salvar' assíncrona que será chamada ao submeter o formulário.
  const salvar = async (campos) => {
    try {
      // Faz uma requisição POST para a API para criar um novo produto com os dados do formulário.
      const response = await api.post("coffee/createCoffee", campos);
      setAviso("Café cadastrado com sucesso!");
      // Reseta o formulário.
      reset();
    } catch (error) {
      setAviso("Erro ao cadastrar café!");
    }
  };

  // Retorna o JSX que define a estrutura do componente.
  return (
    // Define a estrutura de layout e estilo do componente.
    <div style={{ backgroundColor: '#543310' }} className="container-fluid text-light min-vh-100 d-flex align-items-center">
      <div className="container text-dark rounded" style={{ backgroundColor: '#FFF2E1', marginLeft: '25px'}}>
        <div className="row">
          <div className="col-md-14 p-5">
            <h4 className="fst-italic mb-3">Cadastrar Café</h4>
            <form onSubmit={handleSubmit(salvar)}>
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  autoFocus
                  // Registra o campo 'name' para que o 'react-hook-form' o gerencie.
                  {...register("name")}
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="description">Descrição</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  required
                  // Registra o campo 'description' para que o 'react-hook-form' o gerencie.
                  {...register("description")}
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="price">Preço:</label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  required
                  step="0.01"
                  // Registra o campo 'price' para que o 'react-hook-form' o gerencie.
                  {...register("price")}
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="rating">Avaliação:</label>
                <select
                  className="form-control"
                  id="rating"
                  required
                  // Registra o campo 'rating' para que o 'react-hook-form' o gerencie.
                  {...register("rating")}
                >
                  {/* Opções de números de 0 a 10 */}
                  {[...Array(11).keys()].map((num) => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
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
        </div>
      </div>
      <div className="col-md-6 p-5 d-flex align-items-center justify-content-center">
        <img src="src/assets/coffee cup-rafiki.png" alt="Café" className="img-fluid rounded" style={{ height: '490px' }} />
      </div>
    </div>
  );
};

// Exporta o componente 'Cadastrar_cafe' como padrão.
export default Cadastrar_cafe;
