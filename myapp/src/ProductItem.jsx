import React from 'react'

export default function ProductItem(d) {
    console.log(d);
  return (
    <div class="card" >
  <img class="card-img-top" src={d.item.image} alt="Card image"/>
  <div class="card-body">
    <h4 class="card-title">{d.item.title}</h4>
    <p class="card-text">{d.item.description}</p>
    <a href="#" class="btn btn-primary">{d.i}</a>
  </div>
</div>

  )
}
