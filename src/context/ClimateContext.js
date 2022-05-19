// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%

import { createContext, useContext, useState, useEffect } from 'react';

export const ClimateContext = createContext();

export const useClimate = () => useContext(ClimateContext);

export default function ClimateProvider({ children }) {
    const [temperature, setTemperature] = useState(50);
    const [humidity, setHumidity] = useState(40)
    const [actualTemperature, setActualTemperature] = useState(50)
    const [actualHumidity, setActualHumidity] = useState(40)

    useEffect(() => {
        let timer;
        if (temperature !== actualTemperature) {
            timer = setTimeout(() => {
                setActualTemperature(temperature > actualTemperature ? actualTemperature + 1 : actualTemperature - 1)
            }, 1000)
        }

        return () => { clearTimeout(timer) }
    }, [temperature, actualTemperature, setActualTemperature])

    useEffect(() => {
        let timer;
        if (humidity !== actualHumidity) {
            timer = setTimeout(() => {
                setActualHumidity(humidity > actualHumidity ? actualHumidity + 1 : actualHumidity - 1)
            }, 1000)
        }
        return () => { clearTimeout(timer) }
    }, [humidity, actualHumidity, setActualHumidity])
    return (
        <ClimateContext.Provider value={{ temperature, setTemperature, humidity, setHumidity, actualTemperature, setActualTemperature, setActualHumidity, actualHumidity }}>{children}
        </ClimateContext.Provider>
    );
}
