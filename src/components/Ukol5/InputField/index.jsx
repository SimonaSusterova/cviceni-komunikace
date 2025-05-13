//původní zadání

// export const InputField = ({ label, type, value, onValueChange }) => {
//   return (
//     <div className="input-field">
//       <label className="input-field__label">{label}</label>
//       <input
//         className="input-field__input"
//         type={type}
//       />
//     </div>
//   );
// };


//správně
import './style.css';

export const InputField = ({ label, type, value, onValueChange }) => {
  const handleChange = (event) => {
    if (onValueChange) {
      onValueChange(event.target.value);
    }
  };

  return (
    <div className="input-field">
      <label className="input-field__label">{label}</label>
      <input
        className="input-field__input"
        type={type}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};