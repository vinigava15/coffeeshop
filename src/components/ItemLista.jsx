import "../css/ItemLista.css";
//const ItemLista = (props) => { 
//no código abaixo fiz a desestruturação de props
const ItemLista = ({
    id,
    name,
    descricao,
    price,
    avaliacao,
    excluirClick,
    alterarClick}) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{descricao}</td>
            <td>{price}</td>
            <td>{avaliacao}</td>
            <td className="text-center">
                <i className="exclui text-danger fw-bold" title="Excluir" onClick={excluirClick}>&#10008;</i>
                <i className="altera text-sucess fw-bold ms-2" title="Alterar" onClick={alterarClick}>&#36;</i>
            </td>
        </tr>
    );
};

export default ItemLista;