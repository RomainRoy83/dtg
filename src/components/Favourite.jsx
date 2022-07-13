import React, { useState } from 'react'
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';
import './Favourite.scss'

const Favourite = () => {

    const [isFavorite, setIsFavorite] = useState(false)


    function handleClickFavorite() {
    isFavorite ? setIsFavorite(false) : setIsFavorite(true);
}

  return (
            <div onClick={handleClickFavorite} >
                {isFavorite ? <PetsOutlinedIcon style={{ color: 'green', fontSize: 540 }}/>  : <BugReportOutlinedIcon style={{ color: 'red', fontSize: 540 }}/> }
            </div>
  )
}

export default Favourite