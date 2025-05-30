import React, { useContext} from 'react';
import { ShopContext } from '../CONTENT/ShopContext';
import dropdown_icon from '../COMPONENT/Assets/dropdown_icon.png';
import Items from '../COMPONENT/Items/Items';
import './ShopCategory.css';

export default function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);

  

  return (
    <div className="shop-category">
      <img className='shopcategory-banner' src={props.banner} alt={`${props.category} banner`} />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="Sort dropdown icon" />
        </div>
      </div>
      <div className="shopcategory-product">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Items
                        key={i}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                      />
          } else {
            return null;
          }
        })}
      </div>

      <div className="shopcategory-loadmore">Explore More</div>

      
    </div>
  );
}

