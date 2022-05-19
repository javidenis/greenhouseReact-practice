import ReactSlider from "react-slider";
import './Thermometer.css';
import { useClimate } from '../../context/ClimateContext'
import { useEffect } from 'react';

function Thermometer() {
  const { temperature, setTemperature, actualTemperature, setActualTemperature } = useClimate()

  useEffect(() => {
    let timer;
    if (temperature !== actualTemperature) {
      timer = setTimeout(() => {
        setActualTemperature(temperature > actualTemperature ? actualTemperature + 1 : actualTemperature - 1)
      }, 1000)
    }

    return () => { clearTimeout(timer) }
  }, [temperature, actualTemperature, setActualTemperature])
  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {actualTemperature}°F</div>
      <ReactSlider
        value={temperature}
        onAfterChange={(val) => { setTemperature(val) }}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;