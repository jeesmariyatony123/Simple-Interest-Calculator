import './App.css'
// material UI
import { TextField, Stack, Button } from '@mui/material';
// usestate 
import { useState } from 'react'

function App() {

  //1st step == create state to store data
  const [interest, setInterest] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)


  const [principleAmountValid, setPrincipleAmountValid] = useState(true)
  const [rateAmountValid, setRateAmountValid] = useState(true)
  const [yearAmountValid, setYearAmountValid] = useState(true)

  console.log(principle);


  // reset definition
  const handleReset = () => {
    console.log("Inside HandleReset function");
    //reset all state
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setPrincipleAmountValid(true)
    setRateAmountValid(true)
    setYearAmountValid(true)

  }

  // validation checking 
  // 1 function for 3 textboxes
  const handleValidation = (tag) => {
    console.log("Inside HandleValidation");
    // console.log(e.value);
    const { value, name } = tag
    console.log(value, name);
    // console.log(typeof value);

    // regular expression


    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));

    if (!!value.match(/^\d*\.?\d+$/)) {
      //valid
      if (name == "principle") {
        setPrinciple(value)
        setPrincipleAmountValid(true)
      } else if (name == "rate") {
        setRate(value)
        setRateAmountValid(true)
      } else {
        setYear(value)
        setYearAmountValid(true)
      }
    } else {
      //invalid
      if (name == "principle") {
        setPrinciple(value)
        setPrincipleAmountValid(false)
      } else if (name == "rate") {
        setRate(value)
        setRateAmountValid(false)
      } else {
        setYear(value)
        setYearAmountValid(false)
      }
    }

  }

  // calculating SI
  const handleCalculate = () => {
    if (principle && rate && year) {
      setInterest(principle * year * rate / 100)
    } else {
      alert("Please fill the form completely!!!")
    }
  }

  return (
    <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center bg-dark '>
      <div style={{ width: '600px', height: '95vh' }} className='bg-light p-5 rounded my-5'>
        <h3>Simple Interest Calculator</h3>
        <p>Calculate your simple interest Easily</p>
        <div className="d-flex justify-content-center align-items-center bg-warning p-5 rounded shadow flex-column text-light">
          <h1>₹ {interest}</h1>
          <p>Total Simple Interest</p>
        </div>
        <form className="mt-5">
          {/* {principle} */}
          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic-principle" label="₹ Principle Amount" variant="outlined" value={principle || ""} name='principle' onChange={e => handleValidation(e.target)} />
          </div>
          {!principleAmountValid && <div className="text-danger mb-3">*Invalid Principle Amount</div>}
          {/* {rate} */}
          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic-rate" label="Rate of Interest (p.a) %" variant="outlined" value={rate || ""} name='rate' onChange={e => handleValidation(e.target)} />
          </div>
          {!rateAmountValid && <div className="text-danger mb-3">*Invalid Rate Amount</div>}
          {/* {time} */}
          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic-time" label="Time Period (Yr)" variant="outlined" value={year || ""} name='year' onChange={e => handleValidation(e.target)} />
          </div>
          {!yearAmountValid && <div className="text-danger mb-3">*Invalid Year</div>}
          {/* btn collection */}
          <Stack direction="row" spacing={2}>
            <Button disabled={!principleAmountValid || !rateAmountValid || !yearAmountValid} onClick={handleCalculate} style={{ width: '50%', height: '70px' }} className='bg-dark' variant="contained">CALCULATE</Button>
            <Button onClick={handleReset} style={{ width: '50%', height: '70px' }} variant="outlined">RESET</Button>
          </Stack>
        </form>
      </div>
    </div>
  )
}

export default App
