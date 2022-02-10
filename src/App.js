import Navbar from './Components/Navbar/Navbar'
import Home from './Containers/Home/Home';
import AddArticle from './Containers/AddArticle/AddArticle';
import Contact from './Containers/Contact/Contact';
import Article from './Containers/Article/Article';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/ecrire" exact element={<AddArticle />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="articles/:slug" exact element={<Article />} />
      </Routes>
    </>
  );
}

export default App;
