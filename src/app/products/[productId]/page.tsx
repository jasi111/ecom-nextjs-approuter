import React from 'react'
import { ProductsService } from '@/app/services/products-service';
import { Metadata } from 'next';
import Link from 'next/link'
import './productDetail.css'


// Meta data to show dynamic data, pruct tile on browser title bar
// export async function generateMetadata(props:any) {
//     console.log('generate:',props)
//     const productId = props.params.productId;
//     var product;
//     if(productId){
//         product =await ProductsService.getProductById(productId)
//         return{
//             title:product.title
//         }
//     }
//   return{
//     title:'Product Detail Page'
//   }
//   };


async function ProductDetail(props: any) {
    console.log('print props', props)

    //reading params from url
    const prodId = props.params.productId;//productId is file name [productId] for receiving dynamic value
    var productDetail;
    if (prodId) {
        productDetail = await ProductsService.getProductById(prodId);
    }
    console.log('print props', props)
    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>           
          <div className="d-flex justify-content-center ">
              <div className="border w-50 p-5 d-flex justify-content-center align-items-center ">
                  {productDetail?.image ? (
                      <img src={productDetail.image} alt='' height={300} width={300} className="object-fit-contain" />
                  ) : (
                      <p>Loading image...</p>
                  )}
              </div>
              <div className="w-50 border ">
                  <h3 className="mt-5 mb-3 ms-3">{productDetail.title}</h3>


                  <p className="p-3 fw-semibold text-capitalize lh-lg" style={{ textAlign: "justify" }}>
                      {productDetail.description}
                  </p>
                  <h4 className='ms-3'>Price: ${productDetail.price}</h4>

                  <div className=''>
                      <a href="" className="text-nowrap  ms-3 text-decoration-none">
                          <i
                              className="bi bi-star-fill text-warning"
                              style={{ fontSize: "1.1rem" }}
                          ></i>
                          <i
                              className="bi bi-star-fill text-warning"
                              style={{ fontSize: "1.1rem" }}
                          ></i>
                          <i
                              className="bi bi-star-fill text-warning"
                              style={{ fontSize: "1.1rem" }}
                          ></i>
                          <i
                              className="bi bi-star-fill text-warning"
                              style={{ fontSize: "1.1rem" }}
                          ></i>
                          <i
                              className="bi bi-star-fill text-warning"
                              style={{ fontSize: "1.1rem" }}
                          ></i>
                      </a>
                  </div>

                  <Link
                      className="btn ms-3 bg-green text-light mt-5 px-4 mb-5"
                      href='/cart'>
                      Add to Cart
                  </Link>

                  <Link
                      href='/cart'
                      className="btn bg-green text-light ms-5 mt-5 mb-5 px-4"
                  >
                      Buy Now
                  </Link>
              </div>
          </div>


      </div>

       
    )
}

export default ProductDetail;