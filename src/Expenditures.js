import React, {useState, useEffect} from 'react';
import './Styles/RevenueExpense.css';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import './EntryBox';
import { UCD_Expenses_Info}  from './UCD_Info';
import EntryBox from './EntryBox';


export default function Expenditures(props) {
  const [userData, setuserData] = useState([]);

  useEffect(() => {
    props.updateExpenditureData(userData);
  },[userData])

  //New Functions
  function prevTotal(dataset) {
    let total = 0;
    (dataset.length > 0) ? dataset.forEach(obj => total+=obj.value) : total = 0;
    return total
  }

  function _alreadyExists(name) {
    return userData.find(obj => obj.name === name);
  }

  function removeDataObjFromUserData(dataObj) {
    return (_alreadyExists(dataObj.name)) ? userData.filter(obj => obj.name !== dataObj.name) : userData;
  }

  function adjustDataObj(dataObj, prevTotal) {
    let updatedValue = (prevTotal < 100) ? 100 - prevTotal : 0;
    return {name: dataObj.name, value: updatedValue}
  }


  function changeUserData(dataObj, target) {
    let updatedDataset = removeDataObjFromUserData(dataObj);
    let pTotal = prevTotal(updatedDataset);
    let newTotal = pTotal + dataObj.value;
    let updatedDataObj = (newTotal < 100) ? dataObj : adjustDataObj(dataObj, pTotal);

    target.value = (target.value === "") ? 0 : updatedDataObj.value; 
    return setuserData([...updatedDataset, updatedDataObj]);
  }


  function getColor(name) {
    let expensesObj = UCD_Expenses_Info.find(expensesObj => expensesObj.name === name);
    return expensesObj.color
  }

  return (
    <div className='revenue-expense-container'>

      <h2>Expenditures</h2>
      <div className='revenue-expense-content'>
        <div className='piechart-container'>
          <PieChart width={300} height={250}>
            <Pie data={userData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
              {userData.map(data => <Cell key={data.name} fill={getColor(data.name)} />)}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        <div className='entryboxes-container'>
          {UCD_Expenses_Info.map(expensesInfo => <EntryBox key={expensesInfo.name} userData={userData} changeUserData={changeUserData} info={expensesInfo}/>)}
        </div>
        
        

      </div>
      <button className='next-button' onClick={() => props.changeStep()}>Next</button>

    </div>
  )
}
