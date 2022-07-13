const SearchBar = props => {
  const {
    locationChoice,
    setLocationChoice,
    periodChoice,
    setPeriodChoice,
    capacityChoice,
    setCapacityChoice
  } = props

  return (
    <div className='searchbar-container'>
      <form className='searchbar-form'>
        <select
          className='searchbar-select'
          value={locationChoice}
          onChange={e => setLocationChoice(e.target.value)}
        >
          <option className='searchbar-option' value=''>
            Votre destination
          </option>
          <option className='searchbar-option' value='Pangée'>
            Pangée
          </option>
        </select>
        <select
          className='searchbar-select'
          value={periodChoice}
          onChange={e => setPeriodChoice(e.target.value)}
        >
          <option className='searchbar-option' value=''>
            Saison de votre choix
          </option>
          <option className='searchbar-option' value='Printemps'>
            Printemps
          </option>
          <option className='searchbar-option' value='Eté'>
            Ete
          </option>
          <option className='searchbar-option' value='Automne'>
            Automne
          </option>
          <option className='searchbar-option' value='Hiver'>
            Hiver
          </option>
        </select>
        <select
          className='searchbar-select'
          value={capacityChoice}
          onChange={e => setCapacityChoice(e.target.value)}
        >
          <option className='searchbar-option' value=''>
            Capacité
          </option>
          <option className='searchbar-option' value='Solo'>
            Solo
          </option>
          <option className='searchbar-option' value='Couple'>
            Couple
          </option>
          <option className='searchbar-option' value='Tribu'>
            Tribu
          </option>
        </select>
      </form>
    </div>
  )
}

export default SearchBar
