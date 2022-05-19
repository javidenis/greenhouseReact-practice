import './ClimateStats.css';
import { useClimate } from '../../context/ClimateContext'

function ClimateStats() {
  const { actualHumidity, actualTemperature } = useClimate()
  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {actualTemperature}°F
      </div>
      <div className="humidity">
        Humidity {actualHumidity}%
      </div>
    </div>
  )
}

export default ClimateStats;