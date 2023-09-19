import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../components/ImageList.css'

const ImageList = ({arr}) =>{
    return(
        <div className='image-list'>
            <ul>
            {arr.map(el =>(
                    <li key={uuidv4()}>
                        <img src={el} alt="" style={{width: "200px"}} />
                    </li>
            )
            )
            }
            </ul>
        </div>
    )
}


export default ImageList;