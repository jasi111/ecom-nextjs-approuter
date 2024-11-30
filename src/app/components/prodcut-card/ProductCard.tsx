'use client'
import React, {useContext} from "react";
import Link from "next/link";
import Image from "next/image";
import './ProductCard.css';
import { CartContext } from '../../context/CartContext'
import { useRouter } from 'next/navigation';

function ProductCard(props: any) {
    var product = props.product;
    const cartContext = useContext(CartContext);
    const router = useRouter();

    if (!cartContext) {
        throw new Error('CartContext must be used within a CartProvider');
    }

    const { addToCart } = cartContext;
    return (
        <div className="h-100 d-flex flex-column">
            <Link href={'/products/' + product.id} className="d-flex justify-content-center align-items-center">
      {/* <button onClick={() => router.push(`/products/${product.id}`)}> */}
            
                <Image
                    src={product.image}
                    className="card-img-top object-fit-contain w-50 mx-auto"
                    alt="..."
                    width={500}
                    height={500}
                />
                {/* </button> */}
            </Link>
            <div className="card-body d-flex flex-column">
                <div>
                <Link href={'/products/' + product.id} className='fw-semibold text-center text-decoration-none text-dark'>
      {/* <button onClick={() => router.push(`/products/${product.id}`)}> */}
                
                      {product.title}
                      </Link>
                      {/* </button> */}
                </div>
                <h5 className="mt-2 fw-bold">AED {product.price}</h5>


                <Link href=''onClick={() => addToCart(product)} className="btn bg-blue text-light mt-auto"               >
                    Add to Cart
                </Link>
            </div>


        </div>

    );
}

export default ProductCard;
