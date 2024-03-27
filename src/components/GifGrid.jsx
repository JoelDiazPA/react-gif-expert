import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

  const { images, isLoading} = useFetchGifs( category );

  

  return (
    <div className="p-6">
        <h3 className="text-6xl font-bold ml-3">{ category }</h3> {
          
          isLoading && (<h2>Cargando</h2>)
        }

        

        <div className='flex flex-row flex-wrap ml-6'>
          {
            images.map( image => (
              <GifItem 
              key={ image.id }
              title={ image.title}
              url={ image.url }/>
            ))
          }
      </div>

    </div>
  )
}
