import '../index.css';
import App from '../App';

function Weather() {
  return (
    <div className="bg-[url('/weather.jpg')] bg-cover bg-center w-screen h-screen flex items-center justify-center">
      <div className="weather-data bg-gray-300 bg-opacity-80 p-8 rounded-lg shadow-lg">
        <h1 className="city text-2xl ">Addis Ababa</h1>
        <p className="temperature text-xl">65F</p>
        <input type="text" value = {location} onChange={event => setLocation(event.target.value)} onKeyDown={(searchLocation)} placeholder="Enter City" className="border p-2 rounded mr-2" />
        <button className="bg-blue-500  px-4 py-2 rounded">Search</button>
      </div>
    </div>
  );
}

export default Weather;