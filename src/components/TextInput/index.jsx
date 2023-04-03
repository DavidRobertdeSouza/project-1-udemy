import './styles.css'

export const TextInput = ( {handleChange, searchValue, placeholder} ) => {
  return(
    <input 
      onChange={handleChange}
      value={searchValue}
      type='search' 
      className='text-input'
      placeholder={placeholder}
    />
  )
}