'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {CiLocationOn} from 'react-icons/ci'
import {LiaLessThanSolid} from 'react-icons/lia'
import replaceAndRemoveChar from '../../../utils/replaceAndRemoveChar'
import '../../../styles/product-page.css'

import Ingredients from "../_components/ingredients"
import { useState, useEffect } from 'react'
  //for capitalizing letter
  function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() +str.slice(1)
}


const ProductPage = () => {
    const product =JSON.parse(localStorage.getItem('mayvenProduct'))
    const router = useRouter()
   
    
    const deleteItemFromLocalStorage = () => {
        localStorage.removeItem("mayvenProduct")
    }
    


  return (
    <div className='product-page'>

    <div style={{display:'inline-block'}}>
    <Link
        href={`/search/${product.searchPageQuery}`}
        className='back-to-searchpage'
        onClick={deleteItemFromLocalStorage}
    >
        <LiaLessThanSolid
            size={20}
        /> Back to Search Results
    </Link>
    </div>

    <div className='product-page-main'>
        <div className='productpage-main-left'>
        <div className='brand-logo-wrapper'>
            <img src={product.logoURL} alt='brand-logo'/>
        </div>

            <h2 className='product-title'>
                {(product.productTitle).toUpperCase()}
            </h2>
            <div className='product-img-wrapper'>
                <img src={product.imageURL} alt='product-img'/>
            </div>

            <Ingredients productIngredients={product.ingredients} />

            <div className='click-to-buy'>
                <h2>Click below to buy:</h2>
                <div style={{display:'inline-block'}}>
                <Link
                href={product.productURL}
                target='_blank'
                className='product-link'
                
                >
                <div className='brand-logo-wrapper'>
                    <img src={product.logoURL} alt='brand-logo'/>
                </div>
                </Link>
                </div>

            </div>
        </div>


        <div className='productpage-main-right'>
            <div className='location'>
            <div className='location-left map-img'>
            <img  src={product.location.stateMapURL} alt='map-img'/>
                
            </div>
            <div className='location-right'>
                    {/* Icon */}
                    <CiLocationOn 
                    size={25}
                    />
                {/* Info */}
                <div className='location-info'>
                    <div>
                    <Link
                    href={`/search/${replaceAndRemoveChar(product.location?.city)}`}
        className='back-to-searchpage'
        onClick={deleteItemFromLocalStorage}

                    >
                    {product.location?.city}
                    </Link>
                    </div>

                    <div>
                    <Link
                    href={`/search/${replaceAndRemoveChar(product.location?.state)}`}
        className='back-to-searchpage'
        onClick={deleteItemFromLocalStorage}>
{product.location?.state}
        </Link>
                    </div>

                </div>
                
            </div>

            </div>

            <div className='product-brand-values'>
                <p>Brand Values</p>
                <div className='product-details'>
                {
                    product.brandValues.map((brandValue, indexName)=>{
                        return (<div className='product-brand-item' key={brandValue} onClick={() => router.push(`/search/${replaceAndRemoveChar(brandValue)}`)}>{brandValue}</div>)
                    })
                }
                </div>
            </div>

            <div className='product-claims'>
                <p>Product/Label Claims</p>
                <div className='product-details'>
                {
                    product['product/labelClaims'].map((productClaim)=>{
                        return ( <div className='product-claims-item' key={productClaim} onClick={() => router.push(`/search/${replaceAndRemoveChar(productClaim)}`)}>{productClaim}</div>)
                    })
                }
                </div>
            </div>

            <div className='product-attributes'>
                <p>Product Attributes</p>
                <div className='product-details'>
                {
                    product.productAttributes.map((productAttribute)=>{
                        return <div 
                        className='product-attributes-item' 
                        key={productAttribute}
                        onClick={() => router.push(`/search/${replaceAndRemoveChar(productAttribute)}`)}
                        >
                        {capitalizeFirstLetter(productAttribute)}
                        </div>
                    })
                }
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ProductPage