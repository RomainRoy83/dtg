import React, { useState } from 'react'
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined'
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined'

const Favourite = () => {
  const [isFavorite, setIsFavorite] = useState(false)

  function handleClickFavorite() {
    isFavorite ? setIsFavorite(false) : setIsFavorite(true)
  }

  return (
    <div onClick={handleClickFavorite}>
      {isFavorite ? (
        <PetsOutlinedIcon style={{ color: 'green', fontSize: 30 }} />
      ) : (
        <BugReportOutlinedIcon style={{ color: 'red', fontSize: 30 }} />
      )}
    </div>
  )
}

export default Favourite