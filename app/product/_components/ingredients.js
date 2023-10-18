
'use client'
import React,{useState} from 'react'
import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai"


// For shortening url
function shortenString(str, maxLen, separator = ' ') {
    if (str.length <= maxLen) return str;
    return str.substr(0, str.lastIndexOf(separator, maxLen));
  }

const Indredients = ({productIngredients}) => {
    const [showIngredientsInDetail, setShowIngredientsInDetail] = useState(false)
    const toggleVisibility = () => {
        setShowIngredientsInDetail(!showIngredientsInDetail)
      }
  return (
    <div className='product-ingredients'>
                <button className='toggle-ingredients' onClick={toggleVisibility}>
                {
                    showIngredientsInDetail ?
                    <AiOutlineMinus />
                    :
                    <AiOutlinePlus />
                }
                    
                </button>
                <div className='ingredients-box'>
                {
                    showIngredientsInDetail ?
                    <div className='ingredients'><em>Ingredients: </em>
                        { productIngredients.split('\n\n').map((str, index) =>{
                            return <span key={`${index}`}>
                            
                                <div>{str.split('\n').map((s, index)=>{
                                    return <div key={`ing-${index}`}>
                                        {s}
                                    </div>
                                })
                                }
                                </div>
                                <br/>
                            </span>
                        }) }
                    </div>
                    :
                    <div className='ingredients'><em>Ingredients: </em>
                        {
                            shortenString(productIngredients, 120)   
                        }
                    </div>

                }
  
                </div>
    </div>
  )
}

export default Indredients