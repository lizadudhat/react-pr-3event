import React, { useState } from 'react';
import './style.css'
import { SiSwiggy } from "react-icons/si";

const restro = ({ menu, item }) => {
    const [itemMenu, setItemMenu] = useState(menu);
    const [restroitem, setrestro] = useState(item);

    const restrodata = (cat) => {
        if(cat == "All"){
            setrestro(item);
        }else{
            const f = item.filter((product) => product.catogry === cat);
            setrestro(f);
        }
       
    }

    return (
        <div>
      <h2 className='header' ><SiSwiggy /> Swiggy</h2>

            <button className='btn btn-light  mt-3 ' onClick={() =>restrodata("All")}>All</button>
            {itemMenu.map((i, index) => (
                <button onClick={() => restrodata(i.catogry)} className='btn btn-warning mt-3 mx-3' key={index}> {i.catogry}</button>
            ))}
            <br /><br />
            <div className='container'>
                <div className='row'>
                    {restroitem.map((item, index) => (
                        <div key={index} className='col-lg-4'>
                            <div className="main-card mt-5" style={{ width: '18rem', height: "25rem" }}>
                                <img className="card-img-top" src={item.image} alt="Product" />
                               
                                    <h5 className="card-name mt-1">Food-Name:- {item.name}</h5>
                                    <p className="card-price mt-2">Price:- {item.price}</p>
                                    <button className='btn btn-warning  w-90'>Add To Cart</button>
                                </div>
                            </div> 
                       
                    ))}
                </div>
            </div>
        </div>
    );
}

export default restro;
