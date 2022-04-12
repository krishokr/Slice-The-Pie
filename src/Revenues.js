import React, {useState} from 'react';
import './Styles/RevenueExpense.css';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import './EntryBox';
import { UCD_Revenues_Info }  from './UCD_Info';
import EntryBox from './EntryBox';


export default function Revenues(props) {
  const [userData, setuserData] = useState([])
  console.log(userData);
  // const userData = [
  //   {
  //     "name": "Group A",
  //     "value": 400
  //   },
  //   {
  //     "name": "Group B",
  //     "value": 300
  //   },
  //   {
  //     "name": "Group C",
  //     "value": 300
  //   },
  //   {
  //     "name": "Group D",
  //     "value": 200
  //   },
  //   {
  //     "name": "Group E",
  //     "value": 278
  //   },
  //   {
  //     "name": "Group F",
  //     "value": 189
  //   }
  // ];

  function getTotal(name) {
    let total = 0;
    userData.forEach(data => {
      data.name !== name ? total += data.value : total += 0
    })
    return total
  }

  function adjustValue(prevTotal) {
      return 100 - prevTotal
  }

  function indexOfDuplicateValue(name) {
    return userData.findIndex(obj => obj.name === name)
  }

  function replaceDuplicateValue(data, index) {
    let newUserData = [...userData];
    newUserData[index] = {name: data.name, value: data.value}
    return newUserData
  }

  function _isDuplicate(data) {
    return (indexOfDuplicateValue(data) !== -1)
  }

  function _isGreaterThan100(data) {
    return ((data.value + getTotal(data.name) || data.value) > 100)
  }

  function getPrevObj(name) {
    let obj = userData.find(obj => obj.name === name);
    return obj
  }

  function _isDuplicateAndGreaterThan100(data) {
    let updatedValue = adjustValue(getTotal(data.name));
    let objForDuplicateFunction = {name: data.name, value: updatedValue};
    let updatedUserData = replaceDuplicateValue(objForDuplicateFunction, indexOfDuplicateValue(data.name));
    return updatedUserData
  }

  function changeUserData(data) {
    
    if (_isDuplicate(data) && _isGreaterThan100(data)) {
      console.log('Is greater than 100 and duplicate.');
        let updatedUserData = _isDuplicateAndGreaterThan100(data);
        console.log('Updated user data: '+updatedUserData)
        return setuserData(updatedUserData);
    }

    if (_isGreaterThan100(data)) {
      console.log('Is greater than 100.')
      let updatedValue = adjustValue(getTotal(data.name));
      let updatedObj = {name: data.name, value: updatedValue}
      return setuserData([...userData, updatedObj]);
    }

    if (_isDuplicate(data.name)) {
      console.log('Is duplicate.')
      console.log('gggg' + data.value);
        let updatedUserData = replaceDuplicateValue(data, indexOfDuplicateValue(data.name));
        return setuserData(updatedUserData);
    }

    

    return setuserData([...userData, data]);

  }

  function getColor(name) {
    let revenueObj = UCD_Revenues_Info.find(revenueObj => revenueObj.name === name);
    console.log(revenueObj);
    return revenueObj.color
  }

  return (
    <div className='revenue-expense-container'>

      <h2>Revenues</h2>
      <div className='revenue-expense-content'>
        <div className='piechart-container'>
          <PieChart width={730} height={250}>
            <Pie data={userData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8">
              {console.log(userData)}
              {userData.map(data => <Cell key={data.name} fill={getColor(data.name)} />)}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        <div className='entryboxes-container'>
          {UCD_Revenues_Info.map(revenueInfo => <EntryBox key={revenueInfo.name} userData={userData} changeUserData={changeUserData} info={revenueInfo}/>)}
        </div>
        
        

      </div>
      <button className='next-button' onClick={() => props.changeStep()}>Next</button>

    </div>
      
  )
}
