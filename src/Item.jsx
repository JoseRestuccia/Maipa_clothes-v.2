import Tag from '../src/tag'
const Item = (props) => {
    console.log(props.imagen)
    return (
    <div className="card">
        <div className="card__top">
            <img src={props.imagen} alt="zapato" />
            <span className="card__price">{props.precio}</span>
        </div>
    </div>
    )
}

export default Item
