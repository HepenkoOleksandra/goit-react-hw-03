

const SearchBox = () => {
  return (
     <label>
        <span>Find contacts by name</span>
        <br />
        <input
          type="text"
          name="name"
        //   placeholder="jorik@i.ua"
          required
        />
      </label>
  )
}

export default SearchBox