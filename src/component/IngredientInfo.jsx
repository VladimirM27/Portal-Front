import React, { useState } from 'react';
import IngredientInfoActive from './IngredientInfoActive';
import IngredientInfoCommon from './IngredientInfoCommon';
const IngredientInfo = ({setSupleModalActive}) => {
  const [rowState,setRowState] = useState(false);
  const changeToActive =(e) => {
    setRowState(!rowState);
  }
  return (
    <div className='storage-table-body'>
      {rowState ? 
          <IngredientInfoActive setSupleModalActive={setSupleModalActive} change={changeToActive}/> : <IngredientInfoCommon change={changeToActive}/>}
    </div>
  )
}

export default IngredientInfo