import './style.css';


//původní zadání
// export const Product = ({ image, name, price }) => {
//   return (
//     <div className="product">
//       <img src={image} className="product__image" />
//       <div className="product__body">{name}: {price} Kč</div>
//     </div>
//   );
// };


//správně
export const Product = ({ image, name, price, onSelectPrice }) => {
  const handleClick = () => {
    if (onSelectPrice) {
      onSelectPrice(price);
    }
  };

  return (
    <div className="product" onClick={handleClick}>
      <img src={image} className="product__image" />
      <div className="product__body">
        {name}: {price} Kč
      </div>
    </div>
  );
};