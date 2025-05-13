import './style.css';

//původní zadání
// export const IconButton = ({ label }) => {
//   return (
//     <button className="icon-button">
//       <i className="user-icon" />
//       <div className="button-label">{label}</div>
//     </button>
//   );
// };

//správně

export const IconButton = ({ label, onSelectName }) => {
  const handleClick = () => {
    if (onSelectName) {
      onSelectName(label);
    }
  };

  return (
    <button className="icon-button" onClick={handleClick}>
      <i className="user-icon" />
      <div className="button-label">{label}</div>
    </button>
  );
};