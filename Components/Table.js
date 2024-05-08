
import React from 'react';
import './Table.css'; 

const Table = ({ submissions = [] }) => {
    return (
        <div>
        <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Profile Photo</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission, index) => (
            <tr key={index}>
              <td>{submission.firstName}</td>
              <td>{submission.lastName}</td>
              <td>{submission.email}</td>
              <td>{submission.gender}</td>
              <td>{submission.profilePhoto ? 'Yes' : 'No'}</td>
              <td>{submission.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>

      </div>
    )}

    export default Table;