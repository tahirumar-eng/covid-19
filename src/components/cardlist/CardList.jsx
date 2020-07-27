import React from 'react'
const CardList=({data})=>{
    const{total,title,img}=data
    return(
        <div class="card" style={{width: "25rem"}}>
  <img src={img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h4 class="card-title" style={{color:"blue",fontWeight:'bold'}}>{total}</h4>
    <h4 class="card-text" style={{fontWeight:'bold'}}>{title}</h4>
    
  </div>
</div>

    )
}
export default CardList