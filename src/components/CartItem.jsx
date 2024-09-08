import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import veg from "../assets/veg.png";
import nonveg from "../assets/nonveg.png";
import { removeItem, updateItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

const CartItem = ({ name, price, itemCount, resId, vegClassifier, id }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(itemCount);

    const renderIcon = () => {
        switch (vegClassifier) {
            case "VEG":
                return <img src={veg} className="w-3 h-3" />;
            case "NONVEG":
                return <img src={nonveg} className="w-3 h-3" />;
            case "EGG":
                return <img src={nonveg} className="w-3 h-3" />;
            default:
                return ""; // Optionally return a default icon or null
        }
    };

    const handleDecrease = () => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity - 1;
            if (newQuantity <= 0) {
                dispatch(removeItem(id));
                return 0;
            }
            dispatch(updateItem({ id, quantity: newQuantity }));
            return newQuantity;
        });
    };

    const handleIncrease = () => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + 1;
            dispatch(updateItem({ id, quantity: newQuantity }));
            return newQuantity;
        });
    };

    return (
        <div className='flex justify-between w-full py-3'>
            <div className='flex items-center w-1/2 gap-2 text-md'>
                {renderIcon()}
                {name}
            </div>
            <div className='border border-gray-300 h-[30px]'>
                <button
                    className='px-2 border-r border-gray-300'
                    onClick={handleDecrease}
                >
                    <FaMinus className='text-xs' />
                </button>
                <span className='px-3 font-bold text-green-700'>{quantity}</span>
                <button
                    className='px-2 border-l border-gray-300'
                    onClick={handleIncrease}
                >
                    <FaPlus className='text-xs' />
                </button>
            </div>
            <div className='text-gray-600 text-md'>₹{price * quantity}</div>
        </div>
    );
};

export default CartItem;
