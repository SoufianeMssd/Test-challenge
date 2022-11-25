import './App.css';
import EmployeeList from './employees/EmployeeList';
import { Header } from './style/default';

function App() {
  return (
    <div className="App">
      <Header>
        Test Challenge
      </Header>
      <EmployeeList />
    </div>
  );
}

export default App;
