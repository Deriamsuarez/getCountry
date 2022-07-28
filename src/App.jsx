import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import CountryCard from './components/CountryCard'
import AddCountry from './components/AddCountry'

function App() {
  const [data, setData] = useState(0)
  const[country, setCountry] = useState("dominican")

  function changeCountry(){
    let inputValue = document.getElementById('searchAnotherCountry').value
     setCountry(inputValue.toLowerCase())
     return country
 }

  useEffect(() => {
    const url = `https://restcountries.com/v2/name/${country}`
    axios.get(url)
      .then(res => setData(res.data))
  }, [country])

  return (
    <div className="App">
      <CountryCard data={data} />
      <AddCountry data={data} changeCountry={changeCountry}/>
    </div>
  )
}

export default App
