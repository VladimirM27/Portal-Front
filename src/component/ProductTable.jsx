import React from 'react';
import IngredientInfo from "./IngredientInfo";

const ProductTable = () => {
    const trArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
    return (
        <div className='products-table'>
            <div className='storage-table-header'>
                <span>Name</span>
                <span>Capacity</span>
                <span>Amount</span>
                <span>Cost for 1</span>
                <span>Cost</span>
            </div>
            {trArr.map((trItem,index) =>
                <div
                    className='ingredient-info'
                >
                    <span className='product-name'>Milk</span>
                    <span className='product-capacity'>1 l</span>
                    <span className='product-amount'>3</span>
                    <span className='product-cost1'>20</span>
                    <span className='product-cost'>60</span>
                </div>
            )}
        </div>
    );
};

export default ProductTable;