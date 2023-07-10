import React from 'react'
import './index.css'

const Products = ({data}) => {
  return (
    <div>
            <div className="row mx-3 my-3">
                {data.map(data =>  
                <div className="col-md-4">
                    <div class="card" style={{"width": "16rem"}}>
                    <img class="card-img-top" src={data.recipe.image} alt="Card img cap" />
                    <div class="card-body">
                    <center>
                        <h5 class="card-title">{data.recipe.label}</h5>
                        <p class="card-text">Total Amount Of Calories : {Math.round(data.recipe.calories)}</p>
                        <a href="/" class="btn btn-primary">Buy</a>
                        </center>
                    </div>
                    </div>
                </div>
                )}
            </div>
        </div>
  )
}

export default Products
