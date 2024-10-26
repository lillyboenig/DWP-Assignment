
const OrderInfo = ({ productName, price, quantity }) => {
    const totalPrice = price * quantity;

    return (
        <div className="order-info">
            <p>Product: {productName}</p>
            <p>Price: ${price.toFixed(2)}</p>
            <p>Quantity: {quantity}</p>
            <p>Total: ${totalPrice.toFixed(2)}</p>
        </div>
    );
};

export default OrderInfo;
