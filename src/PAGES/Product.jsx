import React, { useContext } from 'react';
import { ShopContext } from '../CONTENT/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../COMPONENT/Breadcrums/Breadcrum';
import ProductDisplay from '../COMPONENT/ProductDisplay/ProductDisplay';
import Descriptionbox from '../COMPONENT/Descriptionbox/Descriptionbox';
import RelatedProduct from '../COMPONENT/RelatedProduct/RelatedProduct';

export default function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>; // Display a message if product is not found
  }

  return (
    <div>
      <Breadcrum product={product} />
      {/* Display product details here */}
      <ProductDisplay product={product}/>
      <Descriptionbox/>
      <RelatedProduct/>
    </div>
  );
}
