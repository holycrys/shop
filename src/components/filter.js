import React, { useState } from 'react';

const Filter = ({count,size, sort, filterProducts, sortProducts}) => {

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
        <select value={size} onChange={e =>filterProducts(e.target.value)}>
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

    </div>
    
   );
}
 
export default Filter;