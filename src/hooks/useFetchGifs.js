import { useState,useEffect } from "react"
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });
    useEffect(()=>{
        getGifs(category)
          .then( images =>{
            setTimeout(()=>{
                setState({
                    data:images,
                    loading:false
                });
            },3000);
          }); 
          /*Recibe la promesa y usa el setImages para settear la info de las imagenes*/
      }, [ category ]); //Solo se ejecutará esa función cuando el componente es renderizado por primera vez o cuando cambie la categoría

      /*El state es la data de un arreglo del useState*/
    return state;
}