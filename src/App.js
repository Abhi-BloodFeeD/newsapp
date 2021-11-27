// import logo from './logo.svg';
import './App.css';
import NewsBlock from './NewsBlock.jsx';
import requests from './requests';
function App() {
  return (
    <div className="App">
      <NewsBlock fetchUrl = {requests.fetchTopNews} header={'TOP NEWS'}/>
    </div>
  );
}

export default App;
