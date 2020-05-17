import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h1>I Like {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

const foodILike = [ 
  {
    id: 1,
    name: "Kimchi",
    image: "https://cdn.pixabay.com/photo/2019/03/09/15/12/kimchi-4044268_1280.jpg",
    rating: 4.5
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image: "https://cdn.pixabay.com/photo/2016/04/05/09/17/pork-1308988_1280.jpg",
    rating: 5.0
  },
  {
    id: 3,
    name: "Kimbap",
    image: "https://cdn.pixabay.com/photo/2017/08/08/09/44/food-photography-2610864_1280.jpg",
    rating: 3.9
  },
  {
    id: 4,
    name: "Macaron",
    image: "https://cdn.pixabay.com/photo/2020/03/19/21/40/easter-4948871_1280.jpg",
    rating: 4.8
  }
]

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
