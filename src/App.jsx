import SetDate from './components/setdate/setdate';
import MostArticleByProject from './components/MostArticleByProject';
import Button from './components/Button.jsx';
import WikiAfricaTopArticles from './components/africanArticlesList.jsx';
import { Footer } from './components/footer.jsx';
import ResultatGallery from './components/ResultatGallery.jsx';
import NavBar from './components/NavBar.jsx';
import ExportDropdownButton from './components/DropdownExport.jsx';
import { useState } from 'react';
import ResultListArticles from './components/ResultListArticles.jsx';
function App() {
    const handleClick = () => {};
    const [showArticles, setShowArticles] = useState(false);

    const handleClicked = () => {
        setShowArticles(!showArticles);
    };
    return (
        <div>
            <NavBar />
            <ExportDropdownButton />
            <button onClick={handleClicked}>Toggle Articles/Gallery</button>
            {showArticles ? <ResultListArticles /> : <ResultatGallery />}
            <SetDate />
            <MostArticleByProject project='fr.wikipedia' />
            <Button text='submit' event={handleClick}></Button>
            <WikiAfricaTopArticles />
            <Footer />
        </div>
    );
}

export default App;
