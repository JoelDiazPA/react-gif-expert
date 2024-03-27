
export const GifItem = ( { title, url, id } ) => {

  return (
    <div className="flex flex-col justify-center items-center align-content-center mb-20 mr-20">
        <img src={ url } alt={ title }></img>
        <p> { title }</p>
    </div>
  )
}
