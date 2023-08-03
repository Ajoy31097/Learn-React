import './Card.css'

function card(props){
    return(<div className="Card">{props.children}</div>);
}

export default card;