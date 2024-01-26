
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
    <div className='flex gap-2.5 max-w-[98%]'>
    {/* toggle filter button */}
                <button className='w-[25px] mt-1 h-[25px] flex items-center justify-center cursor-pointer border border-[#20b04b] text-[#20b04b] bg-[#e8ffef] rounded' onClick={toggleVisibility}>
                {
                    showIngredientsInDetail ?
                    <AiOutlineMinus />
                    :
                    <AiOutlinePlus />
                }
                    
                </button>
                <div className='max-w-[90%]'>
                {
                    showIngredientsInDetail ?
                    <div className='ingredients'><em className='text-[#717171]'>Ingredients: </em>
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
                    <div className='ingredients'><em className='text-[#717171]'>Ingredients: </em>
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