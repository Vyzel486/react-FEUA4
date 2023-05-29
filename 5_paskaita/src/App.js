// Sukurkite šiuos komponentus:
// Posts;
// Post;
// Pagrindiniame komponente (App.js), turi būti randamas <Posts/>, komponentas, kuris savyje laikys <Post/> komponentą. kuris atvaizduos duomenis (props: title ir body). <Posts/> komponentas, informaciją pasiims iš čia:
// URI https://jsonplaceholder.typicode.com/posts
// Būtina naudoti: useState, useEffect

// import Posts from "./components/Posts/Posts";
// import Photos from "./components/Photos/Photos";
// import RandomPhotos from "./components/RaandomPhotos/RandomPhotos";
// import Component from "./components/QuestionsAnswers/QuestionsAnswers";
import QuestionsAnswers from "./components/QuestionsAnswers/QuestionsAnswers";

const App = () => {
  return (
    <div>

      {/* <div><Posts /></div>
      <div>
        <RandomPhotos />
      </div> */}
      {/* <div>
        <Component />
      </div> */}
      <div>
        <QuestionsAnswers surname='Povilanskas' age={27} />
      </div>
      
    </div>
  );
};

export default App;
