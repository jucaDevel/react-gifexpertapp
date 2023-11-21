export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=QlpZDudj6Wl3OQSh0hBWF1z81AuLGlY9`;
    const res = await fetch( url );
    const {data} = await res.json();

    const gifs = data.map(img => {
      return{
        id:img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    });
    
    console.log(gifs);
    /*Retorna una promesa con el contenido de las imagenes*/
    return gifs;
  }