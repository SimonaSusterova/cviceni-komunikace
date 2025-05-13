import { useState } from "react";

/*
Zadání: Začneme velmi jednoduše. Zařiďte, aby se po kliknutí na tlačítko zobrazilo jméno, které je
  uvnitř tlačítka. Zatím nejde o žádnou velkou komunikaci mezi komponentami, ale je to základ,
  který budeme dále rozvíjet.
*/

//původní zadání
// export const Ukol1 = () => {
//   const [jmeno, setJmeno] = useState("Jirka");

//   return (
//     <>
//       <p>
//         <strong>{jmeno}</strong>
//       </p>
//       <div>
//         <button>Jirka</button>
//         <button>Honza</button>
//         <button>Tomáš</button>
//         <button>Šimon</button>
//       </div>
//     </>
//   );
// };

//správně
export const Ukol1 = () => {
  const [jmeno, setJmeno] = useState("Jirka");

  return (
    <>
      <p>
        <strong>{jmeno}</strong>
      </p>
      <div>
        <button onClick={() => setJmeno("Jirka")}>Jirka</button>
        <button onClick={() => setJmeno("Honza")}>Honza</button>
        <button onClick={() => setJmeno("Tomáš")}>Tomáš</button>
        <button onClick={() => setJmeno("Šimon")}>Šimon</button>
      </div>
    </>
  );
};