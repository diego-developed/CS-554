import React, {useState} from 'react';

import './App.css';

import {useQuery, useMutation} from '@apollo/client';
//Import the file where my query constants are defined
import queries from '../queries';



function Add(props) {
  const [addEmployee] = useMutation(queries.ADD_EMPLOYEE, {
    update(cache, {data: {addEmployee}}) {
      const {employees} = cache.readQuery({
        query: queries.GET_EMPLOYEES
      });
      cache.writeQuery({
        query: queries.GET_EMPLOYEES,
        data: {employees: employees.concat([addEmployee])}
      });
    }
  });

  const [addEmployer] = useMutation(queries.ADD_EMPLOYER, {
    update(cache, {data: {addEmployer}}) {
      const {employers} = cache.readQuery({
        query: queries.GET_EMPLOYERS_WITH_EMPLOYEES
      });
      cache.writeQuery({
        query: queries.GET_EMPLOYERS_WITH_EMPLOYEES,
        data: {employers: employers.concat([addEmployer])}
      });
    }
  });

  const {data} = useQuery(queries.GET_EMPLOYERS);

  

  if (data) {
    var {employers} = data;
  }
  let body = null;
  if (props.type === 'employee') {
    let firstName;
    let lastName;
    let employerId;
    body = (
        <div className='card'>
      <form
        className='form'
        id='add-employee'
        onSubmit={(e) => {
          e.preventDefault();
          addEmployee({
            variables: {
              firstName: firstName.value,
              lastName: lastName.value,
              employerId: parseInt(employerId.value)
            }
          });
        
          employerId.value = '1';
          document.getElementById("add-employee").reset()
          alert('Employee Added');
          props.closeAddFormState()
         
          
        }}
      >
        <div className='form-group'>
          <label>
            First Name:
            <br />
            <input
              ref={(node) => {
                firstName = node;
              }}
              required
              autoFocus={true}
            />
          </label>
        </div>
        <br />
        <div className='form-group'>
          <label>
            Last Name:
            <br />
            <input
              ref={(node) => {
                lastName = node;
              }}
              required
            />
          </label>
        </div>
        <br />

        <div className='form-group'>
          <label>
            Employer:
            <select
              className='form-control'
              ref={(node) => {
                employerId = node;
              }}
            >
              {employers &&
                employers.map((employer) => {
                  return (
                    <option key={employer._id} value={employer._id}>
                      {employer.name}
                    </option>
                  );
                })}
            </select>
          </label>
        </div>

        <br />
        <br />
        <button className='button add-button' type='submit'>
          Add Employee
        </button>
        <button className='button cancel-button' onClick={()=>{
            document.getElementById("add-employee").reset()
            props.closeAddFormState()
        }} >
          Cancel
        </button>
      </form>
      </div>
    );
  } else if (props.type === 'employer') {
    let name;
    body = (
        <div className='card'>
      <form
        className='form'
        id='add-employer'
        onSubmit={(e) => {
          e.preventDefault();
          addEmployer({
            variables: {
              name: name.value
            }
          });
          document.getElementById("add-employer").reset()
          alert('Employer Added');
          props.closeAddFormState()
          
          
        }}
      >
        <div className='form-group'>
          <label>
            Employer Name:
            <br />
            <input
              ref={(node) => {
                name = node;
              }}
              required
              autoFocus={true}
            />
          </label>
        </div>
        <br />

        <br />
        <br />
        <button className='button' type='submit'>
          Add Employer
        </button>
        <button className='button' onClick={()=>{
            document.getElementById("add-employer").reset()
            props.closeAddFormState()
        }} >
          Cancel
        </button>
      </form>
      </div>
    );
  }
  return (
    <div>
        {body}
    </div>
  );
}

export default Add;


