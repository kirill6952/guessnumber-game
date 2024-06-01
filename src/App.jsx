import {useState} from 'react'
import './App.css'


function App() {

    const [tank, setTank] = useState(0)
    const [mpg, setMpg] = useState(0)
    const [distance, setDistance] = useState(0)
    const [result, setResult] = useState('')


    const onTankChange = (event) => {
        setTank(event.target.value);
    }

    const onMpgChange = (event) => {
        setMpg(event.target.value);
    }

    const onDistance = (event) => {
        setDistance(event.target.value)
    }

     const onCalculate = () =>{
        const carDistance = tank * mpg ;

        if(carDistance <= distance) {
            setResult('Топлива хватит')

        } else {
            setResult('Топлива не хватит')}

     }

    return (
        <>
            <div>

                <div>
                    <label htmlFor='tank'>Бензо-бак</label>
                    <input value={tank} onChange={onTankChange} name='tank' type='number'/>
                </div>

                <div>
                    <label htmlFor='mpg'>Мили В Галоне</label>
                    <input value={mpg} onChange={onMpgChange} name='mpg' type='number'/>
                </div>

                <div>
                    <label htmlFor='distance'>Дистанция</label>
                    <input value={distance} onChange={onDistance} name='distance' type='number'/>
                </div>

            </div>

            <button onClick={onCalculate}>Посчитать?</button>

            <span>{result}</span>

        </>
    )
}

export default App
