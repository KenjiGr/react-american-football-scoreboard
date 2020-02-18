import React, {useState} from "react";
import "./App.css";

const BottomRow = () => {
  const [homeFoul, setHomeFoul] = useState(0);
  const [awayFoul, setAwayFoul] = useState(0);
  const [period, setPeriod] = useState(0);
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Fouls</h3>
        <div className="down__value">{homeFoul}</div>
        <div>
        <button onClick={()=> setHomeFoul(homeFoul + 1)}>+1</button>
        <button onClick={()=> setHomeFoul(homeFoul - homeFoul)}>R</button>
        </div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">Shotclock</h3>
        <div className="toGo__value">24</div>
        <button></button>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Period</h3>
        <div className="ballOn__value">{period}</div>
        <div>
        <button onClick={()=> setPeriod(period + 1)}>+1</button>
        <button onClick={()=> setPeriod(period - period)}>R</button>
        </div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Fouls</h3>
        <div className="quarter__value">{awayFoul}</div>
        <div>
        <button onClick={()=> setAwayFoul(awayFoul + 1)}>+1</button>
        <button onClick={()=> setAwayFoul(awayFoul - awayFoul)}>R</button>
        </div>
      </div>
    </div>
  );
};

export default BottomRow;
