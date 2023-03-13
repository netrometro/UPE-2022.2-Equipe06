import api from  '../../../services/api.js';

const Card = ({Name, description, price}) => {
    return(
        <div className="card">           
            <h2>{Name}</h2>
            <h3>{description}</h3>
            <p>{price}</p>
        </div>

    );
}

export default Card;
