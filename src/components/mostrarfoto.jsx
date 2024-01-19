
export const MostrarFoto = ({mostrar, imagen}) => {

    return (
        <>
            {
                mostrar
                ? imagen.photos.map(foto => {
                
                    return <img alt={foto.alt} key={foto.alt} src={foto.src.medium}/>
                })
                : <p>...</p>
            }
        </>
    )
}
