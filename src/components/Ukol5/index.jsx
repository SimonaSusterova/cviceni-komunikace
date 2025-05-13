

/*
Zadání: Vyřešte tento úkol podobně jako předchozí, pouze s tím rozdílem, že tentokrát budete mít
  dvě pole, do kterých uživatel může psát jméno a příjmení. Výsledné jméno a příjmení se mají
  zobrazit pod nadpisem oddělené mezerou. Budete tedy potřebovat dva stavy, každý pro jedno pole.
*/

//původní zadání
// export const Ukol5 = () => {
//   return (
//     <>
//       <p>Jméno: Patrik Pokoutník</p>
//       <InputField label="Jméno" type="text" />
//       <InputField label="Příjmení" type="text" />
//     </>
//   );
// };


//správně
import { useState } from "react";
import { InputField } from "./InputField";

export const Ukol5 = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <>
      <p>Jméno: {firstName} {lastName}</p>
      <InputField
        label="Jméno"
        type="text"
        value={firstName}
        onValueChange={setFirstName}
      />
      <InputField
        label="Příjmení"
        type="text"
        value={lastName}
        onValueChange={setLastName}
      />
    </>
  );
};