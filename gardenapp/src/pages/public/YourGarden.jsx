import { useState } from 'react';
import MuiAutocomplete from '../../components/MuiAutocomplete';
import hardinessZones from '../../data/hardinessZones.json'
import { Divider } from '@mui/material';


function YourGarden() {

  const [locations, setLocations] = useState(hardinessZones.slice())
  
  const filterByLocation = (event) => {
    console.log("FILTREERIN")
    const response = hardinessZones.filter(area => area.location === event.target.innerText)
    setLocations(response)
  }

  
  return (
      <div >
      <img className="picture" src="blog.jpg" alt="" />
      <MuiAutocomplete filterByLocation={filterByLocation} />
      <br />
      {locations.map(area => 
      <div key={area.location}> 
        <div>{area["location"]}</div>
        <Divider/>
        <div>{area["hardinessZone"]}</div>
        <Divider/>
        <div>{area["firstFrost"]}</div>
        <Divider/>
        <div>{area["lastFrost"]}</div>    
        </div>)}
    </div>
  );
}

export default YourGarden
