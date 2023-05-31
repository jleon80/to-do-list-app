import './App.css';
import Navbar from './components/Navbar';
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';
import TasksList from './components/TasksList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='main-container-list'>
        <h1>My Tasks</h1>
        <TasksList />
      </div>
    </div>
  );
}

export default App;
