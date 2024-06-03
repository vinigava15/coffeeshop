import { useEffect, useState } from "react";
import { api } from "../config_axios";
import "../css/loading.css";

const RankingCafes = () => {
  const [cafes, setCafes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCafes = async () => {
      try {
        const response = await api.get("coffee/ranked");
        setCafes(response.data);
      } catch (error) {
        console.error("Erro ao buscar cafés:", error);
      } finally {
        // Colocando um setTimeout para garantir que a animação dure pelo menos 3 segundos
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };

    fetchCafes();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
        <div>Carregando...</div>
      </div>
    );
  }

  return (
    <div className="container mt-5" style={{ backgroundColor: '#543310', padding: '20px', borderRadius: '17px', marginBottom: '180px'}}>
      <h2 className="mb-4" style={{ fontFamily: 'cursive', color: 'white' }}>Cafés Mais Bem Avaliados</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Avaliação</th>
          </tr>
        </thead>
        <tbody>
          {cafes.map((cafe) => (
            <tr key={cafe.id}>
              <td>{cafe.name}</td>
              <td>{cafe.description}</td>
              <td>R${cafe.price.toFixed(2)}</td>
              <td>{cafe.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="col-md-6 p-5 d-flex align-items-center justify-content-center" style={{ marginLeft: '316px' }}>
        <img src="src/assets/coffee farm-cuate.png" alt="Café" className="img-fluid rounded" style={{ height: '490px' }} />
      </div>
    </div>
  );
};

export default RankingCafes;
