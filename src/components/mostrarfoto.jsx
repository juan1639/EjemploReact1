import './mostrarfoto.css'

export const MostrarFoto = ({alt, src, fotografo}) => {

    return (
        <>
            <figure className='contenedor-mostrar-foto'>
                <img alt={alt} src={src}/>
                <figcaption>Photographer: {fotografo}</figcaption>
            </figure>
        </>
    )
}
