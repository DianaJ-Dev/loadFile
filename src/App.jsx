import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import { PrivateRoute } from './components/PrivateRoute';

function App() {
  
  return (
    <Router>
      <div className="App"> 
        <Routes>
          <Route
            path="/login" element={<Login />}/>
          <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
            path="/*" element={<Login />}/>
        <Route/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
