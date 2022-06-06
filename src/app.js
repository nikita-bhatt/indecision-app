import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import 'normalize.css/normalize.css'
import './styles/style.scss'
const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard component
    </div>
);
const AddExpensePage = () => (
    <div>
        This is from my add Expense component
    </div>
);
const EditExpensePage = () => (
    <div>
        This is from my Edit Expense component
    </div>
);
const helpPage = () => (
    <div>
        This is from my help component
    </div>
);

const routes = (
    <BrowserRouter>
    <div>
        <Route path = "/"  component = {ExpenseDashboardPage} exact = {true}/>
        <Route path = "/create" component = {AddExpensePage}/>
        <Route path = "/edit" component = {EditExpensePage}/>
        <Route path = "/help" component = {helpPage}/>
    </div>
        
    </BrowserRouter>
);
ReactDOM.render(routes,document.getElementById('app'));
