import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h1>I Like {name}</h1>
      <img src={picture} alt={name} />
    </div>
  )
}
const foodILike = [ 
  {
    id: 1,
    name: "Kimchi",
    image: "https://cdn.pixabay.com/photo/2019/03/09/15/12/kimchi-4044268_1280.jpg"
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image: "https://cdn.pixabay.com/photo/2016/04/05/09/17/pork-1308988_1280.jpg"
  },
  {
    id: 3,
    name: "Kimbap",
    image: "https://cdn.pixabay.com/photo/2017/08/08/09/44/food-photography-2610864_1280.jpg"
  },
  {
    id: 4,
    name: "Macaron",
    image: "https://cdn.pixabay.com/photo/2020/03/19/21/40/easter-4948871_1280.jpg"
  }
]

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
