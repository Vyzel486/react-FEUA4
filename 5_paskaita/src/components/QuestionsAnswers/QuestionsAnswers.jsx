// 1. Kuo skiriasi klasiniai komponentai nuo funkcinių?

// Klasiniai komponentai React.js yra komponentai, kurie yra apibrėžti kaip klasės. Jie paveldi React.Component arba react.PureComponent klasę ir turi savo būseną (state) bei gyvavimo ciklą (lifecycle).

// Pavyzdys:

// import React from "react";

// class Component extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }

//   handleClick() {
//     this.setState({ count: this.state.count + 1 });
//   }

//   render() {
//     return (
//       <div>
//         <p>Count: {this.state.count}</p>
//         <button onClick={() => this.handleClick()}>Increase Count</button>
//       </div>
//     );
//   }
// }

// export default Component;


// Funkciniai komponentai React.js yra komponentai, kurie yra apibrėžti kaip paprastos funkcijos. Jie priima "props" objektą kaip argumentą ir grąžina JSX elementą, kuris apibrėžia komponento išvaizdą.

// Pavyzdys:

// import { useState } from "react";

// function Component() {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={handleClick}>Increase Count</button>
//     </div>
//   );
// }

// export default Component

// Šiame pavyzdyje turime funkcinį komponentą "Component", kuris naudoja React Hooks, pvz., "useState", norint saugoti ir atnaujinti būseną.
// Skirtumas yra apibrėžimo sintakse: klasiniai komponentai yra apibrėžti kaip klasės, o funkciniai komponentai - kaip funkcijos.


// 2. Kokiomis ypatybėmis pasižymi React? 

// React yra populiari ir galinga JavaScript biblioteka, skirta kurti vartotojo sąsajas. Štai keletas svarbių React ypatybių:

// Virtualus DOM: React naudoja virtualų DOM (Document Object Model) modelį, kuris yra efektyvesnis už realų DOM manipulavimą. Tai leidžia React optimizuoti atvaizdavimo procesą, minimalizuoti realaus DOM atnaujinimus ir padidinti našumą.

// Komponentinė architektūra: React skatina kurti programą iš atskirų komponentų. Komponentai yra pernaudojami, lengvai valdomi ir palaiko hierarchinę struktūrą. Tai skatina modulinį programavimą, padeda išlaikyti tvarkingą kodą ir lengva dalintis bei pernaudoti komponentus.

// JSX sintaksė: JSX (JavaScript XML) yra išplėstinė JavaScript sintaksė, kuri leidžia rašyti HTML panašų kodą React komponentuose. Tai suteikia galimybę kombinuoti JavaScript ir HTML, lengvai generuoti vartotojo sąsajas ir pagerinti kodo skaitomumą.

// Būsenos valdymas: React suteikia priemonių valdyti komponento būseną. Būsena gali būti apibrėžta ir atnaujinama komponente, o kiekvienas būsenos pakeitimas sukelia automatinį persirenderinimą. Tai leidžia kurti interaktyvias sąsajas, kurios dinamiškai reaguoja į vartotojo veiksmus.

// Komponentų gyvavimo ciklas: React palaiko komponentų gyvavimo ciklą, kuris leidžia atlikti veiksmus įvairiose ciklo fazėse (pvz., komponento montavimas, atnaujinimas, išmontavimas). Tai suteikia galimybę valdyti komponentų elgesį ir vykdyti veiksmus tam tikrose ciklo fazėse.

// React Hooks: Nuo React versijos 16.8, įdiegus React Hooks, buvo pridėta galimybė naudoti būseną ir kitas React funkcionaliteto dalis funkciniuose komponentuose. Hooks leidžia valdyti būseną ir vykdyti kitus komponentų gyvavimo ciklo veiksmus funkcinėje sintaksėje, nereikalaujant kurti klasinių komponentų.

// Komponentų testavimas: React yra lengvai testuojama biblioteka. Yra įvairios priemonės ir bibliotekos, kurios leidžia rašyti testus ir vykdyti komponentų

// 3. Kuo yra ypatingas React naudojamas DOM?

// React naudojamas DOM yra ypatingas tuo, kad jis naudoja virtualų DOM (Document Object Model) modelį, kuris turi keletą privalumų ir savybių:

// Efektyvus atnaujinimų valdymas: React naudoja virtualų DOM, kuris yra atmintyje esantis atvaizdavimo kopijos medis. Kai komponento būsena pasikeičia, React palygina virtualų DOM su realiu DOM ir randa tikrus pokyčius. Tada jis atlieka tik tuos pokyčius realiame DOM, kurie yra būtini atnaujinti. Tai leidžia efektyviai atnaujinti tik reikiamas DOM dalis ir sumažina realaus DOM manipuliavimo sąnaudas.

// Greitas atvaizdavimas: Virtualus DOM leidžia React efektyviai atnaujinti tik reikiamas DOM dalis. Tai suteikia aukštą našumą ir greitą atvaizdavimą, ypač su didelėmis arba sudėtingomis sąsajomis, kuriose yra daug komponentų.

// Kodo abstrakcija: React naudojimas virtualaus DOM slepia realų DOM sudėtingumą ir teikia abstrakciją programuotojui. Programuotojui nereikia tiesiogiai manipuliuoti DOM elementais ir jų savybėmis. Vietoje to, jis rašo JSX (JavaScript XML) kodą, kuris panašus į HTML ir leidžia apibrėžti vartotojo sąsają kaip komponentų medį. React pasirūpina atnaujinimais realiame DOM pagal komponentų būsenos pokyčius.

// Nešališkumas: Virtualus DOM leidžia React būti nešališkam, tai yra, jis nesiima prielaidų apie tai, kaip DOM turėtų atrodyti. Tai reiškia, kad programuotojai gali kurti savo vartotojo sąsajas naudodami React, nepriklausomai nuo naudojamos DOM platformos (pvz., naršyklės). Tai suteikia daugiau lankstumo ir pernaudojamumo.

// Visos šios savybės daro React naudojamą DOM efektyviu, greitu ir lengvai naudojamu. Tai yra vienas iš pagrindinių React privalumų ir pagrindų, dėl kurių jis tampa populiariu karkasu vartotojo sąsajoms kurti.

// 4. Sugalvoti savo komponentą kuris turės kelis props, pora state ir JSX nemažiau 20 eilučių


import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import './QuestionsAnswers.css';

const QuestionsAnswers = ({ surname, age }) => {
  const [isShowingInfo, setIsShowingInfo] = useState(null);
  const [users, setUsers] = useState([]);

  const showInfo = () => {
    setIsShowingInfo(!isShowingInfo);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((response) => {
        setUsers(response);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Hello, {users[0].name}!</h2>
      <p>Age: {age}</p>

      <button onClick={showInfo}>
        {isShowingInfo ? 'Hide Info' : 'Show Info'}
      </button>

      {isShowingInfo && (
        <div>
          <p>Additional information:</p>
          <ul>
            <li>Name: {users[0].name}</li>
            <li>Surname: {surname}</li>
            <li>Address: {users[0].address.city}</li>
            <li>Age: {age}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

QuestionsAnswers.propTypes = {
  surname: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default QuestionsAnswers;