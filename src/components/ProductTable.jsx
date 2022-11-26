import React from 'react';
import IngredientInfo from "./IngredientInfo";

const ProductTable = ({products}) => {
    return (
        <div className='products-table'>
            <div className='storage-table-header'>
                <span>Name</span>
                <span>Capacity</span>
                <span>Amount</span>
                <span>Cost for 1</span>
                <span>Cost</span>
            </div>
            {products !== undefined && products.map((product,index) =>
                <div
                    className='ingredient-info'
                >
                    <span className='product-name'>{product.product.name}</span>
                    <span className='product-capacity'>{product.product.capacity}</span>
                    <span className='product-amount'>{product.amount}</span>
                    <span className='product-cost1'>{product.product.price}</span>
                    <span className='product-cost'>{product.product.price * product.amount}</span>
                </div>
            )}
        </div>
    );
};

export default ProductTable;