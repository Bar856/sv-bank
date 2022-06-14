import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './compoments/Header';
import LoginPage from './compoments/LoginPage';
import RegisterPage from './compoments/RegisterPage';
import { useState } from 'react';
import CustomerPage from './compoments/CustomerPage';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Admin from './compoments/Admin';
function App() {
  
  class CustomerClass{
    constructor(id,fullName,password,balance){
        this.id = id;
        this.fullName = fullName;
        this.password = password;
        this.balance=balance;
        this.expenses= [];
    }   
    addExpenses(expense){
      expense.id = this.expenses.length+1;
      this.expenses.push(expense)
    }
  }
  class Expense{
    constructor(id,company,price){
      this.company=company;
      this.price=price;
      this.id = id;
    }
  }

  const adminUser = new CustomerClass('1','ADMIN','ADMIN','1')
  const [customers, setCustomers] = useState([adminUser]);
  const [customerLogIn, setCustomerLogIn] = useState('');
  
  const checkLogin= (username,password) =>{
    let tmpuser = customers.filter(cust => cust.fullName == username && cust.password == password )[0]
    if (typeof tmpuser == 'undefined'){
      return false
    }
    else{
      setCustomerLogIn(tmpuser);
      return true
    }
  }
  const getCustLink = () =>{
    return '/sv-bank/' + customerLogIn.fullName;
  }
  const addNewCust = (id,fullName,password,balance) => {
    let tmpUsers = [...customers]
    let tmpCust = checkLogin;
    let custFound = false;
    tmpUsers.forEach(cust => {
      if (cust === customerLogIn){
        cust.id = id;
        cust.fullName = fullName;
        cust.password = password;
        cust.balance = balance;
        tmpCust = cust;
        custFound = true;
      }
    })
    if (custFound){
      setCustomers(tmpUsers)
      setCustomerLogIn(tmpCust)
    }else{
      let newCust = new CustomerClass(id,fullName,password,balance);
      setCustomers([...customers,newCust])
    }
    
  }
  const addExpensesFn = (price,comp) => {
    let newExpense = new Expense(0,comp,price)
    let tmpCusts = [...customers]
    tmpCusts.forEach((cust,i)=>{
      if (cust === customerLogIn){
        cust.addExpenses(newExpense)
      }
    })
    setCustomers(tmpCusts);
  }
  const deleteExpense = (expenseId,custId) =>{
    let tmpCusts = [...customers];
    tmpCusts.forEach(cust=>{
      if (cust.id == custId){
        cust.expenses.splice(expenseId,1)
      }
    })
    setCustomers(tmpCusts)
  }
  const deleteUser = (userId) =>{
    let tmpCusts = [...customers];
    tmpCusts.forEach((cust,i)=>{
      if (cust.id == userId){
        tmpCusts.splice(i,1)
      }
    })
    setCustomers(tmpCusts)
  }
  return (
    <div className="App" style={{direction:"ltr"}}>
      <Router>
        <Header title='SV Bank'/>
        <Routes>
          <Route path='/sv-bank' element={<LoginPage getCustLink={getCustLink} checkLogin = {checkLogin}/>}/>
          <Route path='/sv-bank/register' element={<RegisterPage addNewCust={addNewCust}/>}/>
          <Route path='/sv-bank/edit' element={<RegisterPage getCustLink={getCustLink} addNewCust={addNewCust}/>}/>
          <Route path='/sv-bank/ADMIN' element={<Admin deleteExpense={deleteExpense} deleteUser={deleteUser} customers={customers} />}/>
          <Route path={getCustLink()} element={<CustomerPage getCustLink={getCustLink} addExpensesFn={addExpensesFn} customer={customerLogIn}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
