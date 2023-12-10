import { useState } from 'react';
import { useGetWeatherQuery } from './api/apiSlice';
import './App.css';
import Spinner from './components/spinner/Spinner';
import { useDebounce } from 'use-debounce';


function App() {
  const [town, setTown] = useState('London');
  const [townDebounce] = useDebounce(town, 1000);
  const {data ={} , isLoading,isSuccess,isError} = useGetWeatherQuery(townDebounce);

console.log(data);
  if (isLoading ) {
    return <Spinner/>;
} 
     return (
    <div className="App">
         <form className="form" >
              <input
                  required
                  type="text" 
                  name="town" 
                  className="form-control" 
                  id="town" 
                  placeholder="Search..."
                  value={town}
                  onChange={(e) => setTown(e.target.value)}
                 />
         </form>
        <div className={`info_weather ${data.main.temp>0 ? 'warm' : 'cold'}`}>
            <div>{data.name} ,{data.sys.country}</div>
            <div className='temp'>
                {data.main.temp}°C
            </div>

            <div>{data.weather[0].description}</div>
           
         </div>

    </div>
  );
}

export default App;
