import { useState } from "react";


export const AddCategory = ( {onNewCategory} ) => {

    const [inputValue, setinputValue] = useState('');

    const onInputChange = (event) => {
        setinputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if( inputValue.trim().length <= 1) return; 

        // setCategories( categories => [inputValue, ...categories]);
        setinputValue('');
        onNewCategory( inputValue.trim() );
    }

  return (
    <form onSubmit={ onSubmit }>
      <input className='w-full mt-6'
          type="text"
          placeholder="Buscar Gifs"
          value={inputValue}
          onChange={ onInputChange }
      >
      </input>
    </form>
  )
}
