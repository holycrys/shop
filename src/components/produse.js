import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {formatCurrency} from '../util';
import './clienti.css';


const Produse = () => {

  const { produsId } = useParams();

  const [produse, setProduse] = useState([]);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");
 
  useEffect(() => {
    fetch("http://localhost:80/produse.php")
      .then((rezultat) => rezultat.json())
      .then((sirproduse) => setProduse(sirproduse));
  }, [produsId]);

  const prod = produse.filter(({ id_produs }) => id_produs === produsId);
  const count=prod.length;
  
  const filterProducts = (e) => {
    if(e.target.value === ""){
      setSize({size:e.target.value, produse: prod});
    } else {
      setSize({
        size: e.target.value,
        produse: prod.filter(
          produs =>produs.availablesSize.indexOf(e.target.value) >=0
          )
      });
    }; 
  };

  const sortProducts = (e) => {

  }

  return (  
    <div>
      <div className='filter'>
        <div className='filter-result'>{count} Produse</div>
        <div className='filter-sort'>
          Order{" "}
          <select value={sort} onChange={sortProducts}>
            <option>Latest</option>
            <option value='lowest'>Lowest</option>
            <option value='highest'>Highest</option>
          </select>
        </div>
        <div className='filter-size'>
          Filter{" "}
          <select value={size} onChange={filterProducts}>
            <option value="">ALL</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
      </div>
      <div className='stil'></div>
      <div>
        <ul className='produse'>  
           {prod.map((produs) => (
              <li key={(produs.id)}>
                <div className='produs'>
                  <a href={"#" + produs.id}>
                    <img src={produs.src} alt={produs.name} />
                    <p>{produs.name}</p>
                  </a>
                  <div className='produs-price'>
                    <div>{formatCurrency(produs.price)}</div>
                    <button className='button primary'>Add To Cart</button>
                  </div>
                </div>
              </li>
             ))}
        </ul>
      </div> 
    </div>  
          
        
     
  
  );
}

export default Produse;