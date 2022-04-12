import React, {useState} from 'react';
import Revenues from './Revenues';
import Expenditures from './Expenditures';
import CompareExpenditures from './CompareExpenditures';
import CompareRevenues from './CompareRevenues';
import Header from './Header';
import ProgressBar from './ProgressBar';

export default function MainView() {
  const [step, setstep] = useState(1);
  const [revenueData, setrevenueData] = useState([]);
  const [expenditureData, setexpenditureData] = useState([]);

  function changeStep() {
    return (step === 4) ? setstep(1) : setstep(step+1);
  }

  function updateRevenueData(dataset) {
    return setrevenueData(dataset);
  }

  function updateExpenditureData(dataset) {
    return setexpenditureData(dataset);
  }

  console.log(expenditureData);

  return (
    <div>
      <Header />
      <ProgressBar step={step} />
      {step === 1 ? <Revenues updateRevenueData={updateRevenueData} changeStep={changeStep}/> : ''}
      {step === 2 ? <Expenditures updateExpenditureData={updateExpenditureData} changeStep={changeStep}/> : ''}
      {step === 3 ? <CompareRevenues revenueData={revenueData} changeStep={changeStep}/> : ''}
      {step === 4 ? <CompareExpenditures expenditureData={expenditureData} changeStep={changeStep}/> : ''}
    </div>
  )
}
