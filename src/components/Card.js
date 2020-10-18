import React from 'react';
import itemList from './itemList';

const Card = (props) => {
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
        </div>
    ));
};

export default Card;

/*

<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src={ item.url } alt={ item.name }>
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">{ item.name }</p>
        <p class="subtitle is-6">{ item.price }</p>
      </div>
    </div>
    <div class="content">
      { item.description }
    </div>
  </div>
</div>

*/