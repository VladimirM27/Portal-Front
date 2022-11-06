import React from 'react';
const IngredientInfoCommon = ({change}) => {
    function changeRowState() {
      change();
    }
    return (
        <div className='ingredient-info'
          onClick={changeRowState}>
          <span className='ingredient-info_name'>Milk</span>
          <span className='ingredient-info_type'>Meat</span>
          <span className='ingredient-info_vendor'>Volodymyr Motrechko</span>
          <span className='ingredient-info_capacity'>{Math.random(1,100)}</span>
          <span className='ingredient-info_amount'>300</span>
          <span className='ingredient-info_cost'>22.80</span>
          <span className='ingredient-info_exp'>24.11.2022</span>
          <div className="ingredient-info_state">
            <div className='ingredient-status'>
              WELL
            </div>
          </div>
        </div>
      // <tbody className='ingredient-info' 
      //   >
      //   <tr>
      //     <td>Milk</td>
      //     <td>Meat</td>
      //     <td>Volodymyr Motrechko</td>
      //     <td>{Math.random(1,100)}</td>
      //     <td>300</td>
      //     <td>22.80</td>
      //                 <td>24.11.2022</td>
      //                 <td>
      //       <div className='ingredient-status'>
      //         WELL
      //       </div>
      //                 </td>
      //   </tr>
      // </tbody>
    )
}

export default IngredientInfoCommon