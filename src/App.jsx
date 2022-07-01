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
  }, [search]) // bu virgül ve köşeli parantez app ilk render dan sonra çağırması için konuldu, bu şekilde useEffect hook u diğer hook ve değişkenleri takip edebilir

  return (
  <div className="flex flex-col items-center h-screen bg-gray-200">
    <div className='flex flex-col items-center bg-amber-100 p-4 rounded-lg '>
      <div className="mb-3 pt-0">
        <input 
        onKeyDown={(e)=> setSearch(e.target.value)}   // onChange her değişikliği API den çağırır, public free api sınırını hızla tüketmiş oluruz, bunun yerine yazıp tıklayınca veya enter layınca çalışan onSubmit event ları daha avantajlı olur
        type="text"
        placeholder="Placeholder"
        className="bg-red-200"/>
      </div>
      { city && <City city={city}/> } {/* short circuit */}
    </div>
  </div>
  );
}

export default App;
