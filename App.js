// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Form from './Components/Form';
import Table from './Components/Table';
import './App.css';

function App() {
  const [submissions, setSubmissions] = useState([]);

  const handleFormSubmit = (formData) => {
    setSubmissions([...submissions, formData]);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/form" element={<Form onSubmit={handleFormSubmit} />} />
          <Route path="/" element={
            <>
              <h1>Employee List</h1>
              <Link to="/form">
                <button>Add Employee</button>
              </Link>
              <Table submissions={submissions} />
            </>
          } />
          <Route path="/" element={<Table submissions={submissions} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
