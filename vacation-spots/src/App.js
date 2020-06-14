import React from 'react';

import Spot from './Spot'
import vacationSpots from './vacationSpots'

function App() {
  const spotCard = vacationSpots.map(spot => <Spot key={spot.id} spot={spot} />)
  return (
    <div className="App" style={{ marginLeft: 500 }}>
      {spotCard}
    </div>
  );
}

export default App;
