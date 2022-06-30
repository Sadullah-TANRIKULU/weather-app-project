import axios from "axios";
import { useEffect, useState } from "react";
import './App.css';
import './index.css';
import City from "./City";

function App() {
  const [city, setCity] = useState();
  const key = "9c87b0059f285dd4ae40868308ff23ca";
  const [search, setSearch] = useState("");
  
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getApi();
  }, [search]) // bu virgül ve köşeli parantez app ilk çalıştığında çağırması için konuldu, bu şekilde useEffect hook u diğer hook ve değişkenleri takip edebilir

  return (
  <div className="App">
    <div>
      <div className="mb-3 pt-0">
        <input 
        onKeyDown={(e)=> setSearch(e.target.value)}   // onChange yerine onKeyDown koydum api sınırını hızla aşmamak için, yani her harfe basınca değil yazıp enterlayınca api ye get request yapsın diye
        type="text"
        placeholder="Placeholder"
        className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
      </div>
      { city && <City city={city}/> } {/* short circuit */}
    </div>
  </div>
  );
}

export default App;
