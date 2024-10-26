import { useState } from 'react';

const ProductForm = ({ products, onQuantityChange, onProductChange }) => {
    const [quantity, setQuantity] = useState(1);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleProductChange = (event) => {
        setSelectedIndex(event.target.value);
        onProductChange(event.target.value);
    };

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
        onQuantityChange(quantity + 1);
    };

    const decrementQuantity = () => {
        const newQuantity = quantity > 0 ? quantity - 1 : 0;
        setQuantity(newQuantity);
        onQuantityChange(newQuantity);
    };

    return (
        <div className="product-form">
            <label>Product:</label>
            <select value={selectedIndex} onChange={handleProductChange}>
                {products.map((product, index) => (
                    <option key={index} value={index}>
                        {product.name}
                    </option>
                ))}
            </select>

            <div className="quantity-controls">
                <button onClick={decrementQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={incrementQuantity}>+</button>
            </div>
        </div>
    );
};

export default ProductForm;
