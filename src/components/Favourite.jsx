import React, { useState } from 'react'
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined'
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined'

const Favourite = ({ likes, setLikes }) => {
  const [isFavorite, setIsFavorite] = useState(false)

  function handleClickFavorite() {
    console.log('fct click')
    isFavorite
      ? setIsFavorite(false) || setLikes(likes - 1)
      : setIsFavorite(true) || setLikes(likes + 1)
  }
  console.log(isFavorite)
  console.log(likes)

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
