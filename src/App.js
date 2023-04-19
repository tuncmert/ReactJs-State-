import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [progressBar, setProgressBar] = useState(0);
  const [users, setUsers] = useState([{ id: 1, firstName: "Mert", lastName: "Tunc", age: 25, ismember: true }, { id: 2, firstName: "Ahmet", lastName: "Tunc", age: 26, ismember: false }]);
  const [member, setUser] = useState({});
  const [id, setId] = useState(users.length + 1);
  return (
    <div className="container">
      <div>
        <h3>{count}</h3>
        <button type='button' className='btn btn-sm btn-primary me-1' onClick={() => setCount(count + 1)}>Increase</button>
        <button type='button' className='btn btn-sm btn-danger' onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
      <div className='mt-3'>
        <button type='button' className='btn btn-info btn-sm mb-2' onClick={() => setProgressBar(progressBar + 5)}>Progress</button>
        <div className="progress">
          <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: progressBar }}></div>
        </div>
      </div>
      <div>
        <table className="table mb-2">
          <thead>
            <tr className='text-center'>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Age</th>
              <th scope="col">Member ?</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, i) => {
                return <tr className='text-center' key={i}>
                  <th scope="row">{user.id}</th>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.age}</td>
                  <td>{user.ismember ? "Member" : "Not Member!"}</td>
                </tr>
              })
            }
          </tbody>
        </table>

        <form className='mb-4' id='userForm'>
          <div className="mb-2">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input type="text" className="form-control" id="firstName" placeholder='Enter Your First Name' onChange={(e) => setUser({ ...member, firstName: e.target.value })} />
          </div>
          <div className="mb-2">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input type="text" className="form-control" id="lastName" placeholder='Enter Your Last Name' onChange={(e) => setUser({ ...member, lastName: e.target.value })} />
          </div>
          <div className="mb-2">
            <label htmlFor="age" className="form-label">Age</label>
            <input type="number" className="form-control" id="age" placeholder='Enter Your Age' onChange={(e) => setUser({ ...member, age: e.target.value })} />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="isMember" onChange={(e) => setUser({ ...member, ismember: e.target.checked })} />
            <label className="form-check-label" htmlFor="isMember">Member ?</label>
          </div>
          <button type="button" className="btn btn-primary btn-sm" onClick={() => {
            setId(id + 1);
            setUsers([...users, { ...member, id: id }]);
            document.getElementById('userForm').reset();
          }
          }>Save</button>
        </form>
      </div>


    </div>
  );
}

export default App;
