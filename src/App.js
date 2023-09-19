import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';

export default function App(){
    const [term, setTerm]= useState('')
    const [urlsArr, setUrlsArr] = useState([])
    const handleInputChange = (e)=>{
        setTerm(e.target.value)
    }
    const handlButtonClick = async (term) =>{
        const ImageSearch = await searchImages(term)
        console.log(ImageSearch.map(obj => obj.urls.regular))
        setUrlsArr(ImageSearch.map(obj => obj.urls.regular))
    }
    console.log("urlsArr",urlsArr)
    return (
        <div>
            <SearchBar term={term} handlButtonClick={handlButtonClick} handleInputChange={handleInputChange}/>
            <ImageList arr={urlsArr}/>
        </div>
    )
}
