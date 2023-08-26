
export default function Special () {
    return (
     <>
       <div>
         <h2>Specials</h2>
         <button className="btn"> See More</button>
         </div>
        <div className="special-img">
          <img src ="/src/asset/salad.jpg" width = "128" height= "128" alt="restuarant"/>
  
        <div className="menu-info">
          <h4>Buruta Cheese Salad</h4> 
          <p>$15.00</p>
          <p>description</p>
        </div>
          <button>+$7 delivery</button>
        </div>
     </>
    )
  }