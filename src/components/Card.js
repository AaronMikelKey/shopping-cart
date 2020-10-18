import React from 'react';
import { useHistory } from 'react-router-dom';
import itemList from './itemList';

const Card = (props) => {

  const history = useHistory();

    return itemList.map(item => (
        <div className="card column is-3" id={ item.name } key={ item.name }>
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={item.url} alt={item.name} />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{item.name}</p>
                        <p className="subtitle is-6">{item.price}</p>
                    </div>
                </div>
                <div className="content">
                    {item.description}
                </div>
            </div>
            <form onSubmit={function handleOnSubmit() {history.push(`/shoppingcart`)}}>
              <label htmlFor="quantity">Quantity:</label>
              <input type="number" name="quantity" onChange={props.handleChange} min="0"></input>
            </form> 
        </div>
    ));
};

export default Card;