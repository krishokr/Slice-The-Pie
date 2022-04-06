import React, {useState} from 'react';
import Revenues from './Revenues';
import Expenditures from './Expenditures';
import CompareExpenditures from './CompareExpenditures';
import CompareRevenues from './CompareRevenues';
import Header from './Header';
import ProgressBar from './ProgressBar';

export default function MainView() {
  const [step, setstep] = useState(1);

  function changeStep() {
    return (step === 4) ? setstep(1) : setstep(step+1);
  }

  return (
    <div>
      <Header />
      <ProgressBar step={step} />
      {step === 1 ? <Revenues changeStep={changeStep}/> : ''}
      {step === 2 ? <Expenditures changeStep={changeStep}/> : ''}
      {step === 3 ? <CompareRevenues changeStep={changeStep}/> : ''}
      {step === 4 ? <CompareExpenditures changeStep={changeStep}/> : ''}
    </div>
  )
}
