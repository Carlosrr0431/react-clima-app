export const getImagen = async(descripcion) => {

    // console.log("GET IMAGE: ", descripcion);

    // const resp = await fetch(`https://api.pexels.com/v1/search?query=nevando&lang='es-ES'` ,{
    //     headers:{
    //         Authorization: '563492ad6f91700001000001857c54491d734650a2713162e7e978dd'
    //     },
    // });

    // const data = await resp.json();

    // return data;

    console.log("GET IMAGE: ", descripcion);

    const resp = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${descripcion}&client_id=519ZQzwTQXrIWAOIuhoBK9kHktpJ3KY5dWrs7YsnBLU` ,{
        headers:{
            Authorization: '519ZQzwTQXrIWAOIuhoBK9kHktpJ3KY5dWrs7YsnBLU'
        },
    });

    const data = await resp.json();

    return data;
}
