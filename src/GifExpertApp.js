import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Geralt']);

    return( 
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories = { setCategories }/>
            <hr/>
            <ol>
                {
                    categories.map( category =>
                        <GifGrid 
                            key = {category}
                            category = {category} 
                        />
                    )
                }
            </ol>  
        </>
    );
};