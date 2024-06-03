import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { api } from "../config_axios";
import ItemLista from "./ItemLista";

const ManutencaoCafe = () => {
    const { register, handleSubmit, reset } = useForm();
    const [cafe, setCafe] = useState([]);

    const obterLista = async () => {
        try {
            const lista = await api.get("/coffee/all");
            setCafe(lista.data);
        } catch (error) {
            alert(`Erro: Não foi possível obter os dados: ${error}`);
        }
    };

    useEffect(() => {
        obterLista();
    }, []);

    const filtrarLista = async (campos) => {
        try {
            const lista = await api.get(`/coffee/filtro/${campos.palavra}`);
            setCafe(lista.data);
        } catch (error) {
            alert(`Erro: Não foi possível obter os dados: ${error}`);
        }
    };

    const excluir = async (id, name) => {
        if (!window.confirm(`Confirma a exclusão do café ${name}?`)) {
            return;
        }
        try {
            await api.delete(`/coffee/deleteCoffee/${id}`);
            setCafe(cafe.filter(Cafe => Cafe.id !== id));
        } catch (error) {
            alert(`Erro: Não foi possível excluir o café ${name}: ${error}`);
        }
    };

    const alterar = async (id, name) => {
        const novoPrice = prompt(`Digite o novo preço do café ${name}`);
        if (novoPrice === "" || novoPrice === null || isNaN(novoPrice)) {
            alert('Digite um preço válido! (preço em branco ou não numérico)');
            return;
        }
        try {
            const response = await api.put(`/coffee/updateCoffee/${id}`, { 
                id, 
                name, 
                description: 'Alguma descrição',  // Aqui, garanta que todos os campos necessários estejam presentes
                price: novoPrice, 
                rating: 5  // Aqui, garanta que todos os campos necessários estejam presentes
            });
            if (response.status === 200) {
                const indiceCafe = cafe.findIndex(Cafe => Cafe.id === id);
                const CafeAtualizado = [...cafe];
                CafeAtualizado[indiceCafe].price = novoPrice;
                setCafe(CafeAtualizado);
            } else {
                throw new Error('Erro ao atualizar o café');
            }
        } catch (error) {
            alert(`Erro: Não foi possível alterar o café ${name}: ${error}`);
        }
    };
    

    return (
        <div className="container" style={{ marginBottom: '180px' }}>
            <div className="row">
                <div className="col-sm-7">
                    <h4 className="fst-italic mt-3">Manutenção de Cafés</h4>
                </div>
                <div className="col-sm-5">
                    <form onSubmit={handleSubmit(filtrarLista)}>
                        <div className="input-group mt-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nome"
                                required
                                {...register("palavra")}
                            />
                            <input
                                type="submit"
                                className="btn btn-primary"
                                value="Pesquisar"
                            />
                            <input
                                type="button"
                                className="btn btn-danger"
                                value="Todos"
                                onClick={() => { reset({ palavra: "" }); obterLista(); }}
                            />
                        </div>
                    </form>
                </div>
            </div>

            <table className="table table-striped mt-3">
                <thead>
                    <tr>
                        <th>Cód.</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {cafe.map((cafe) => (
                        <ItemLista
                            key={cafe.id}
                            id={cafe.id}
                            name={cafe.name}
                            descricao={cafe.description}
                            price={cafe.price}
                            avaliacao={cafe.rating}
                            excluirClick={() => excluir(cafe.id, cafe.name)}
                            alterarClick={() => alterar(cafe.id, cafe.name)}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManutencaoCafe;
