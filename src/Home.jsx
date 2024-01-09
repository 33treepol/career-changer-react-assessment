import { useState, useEffect } from "react";
import Layout from "./layout";
import './style/home.css'

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

const Home = () => {

  const [members, setMembers] = useState([]);
  const [heading, setHeading] = useState("React - Assessment");
  const [showTable, setShowTable] = useState(undefined);

  useEffect(()=>
  {
    setMembers(mockEmployees);
  }
    ,[members]);

  function clickUserBtn() {
    setHeading("Home - User Sector");
    setShowTable(<UserTable members={members} />);
  }

  function clickAdminBtn() {
    setHeading("Home - Admin Sector");
    setShowTable(<AdminTable members={members} />);

  }

  return (
    <Layout>
      <div className="Home-container">
        <h1>Generation Thailand<br />{heading}</h1>
        <div className="btn-container">
          <button className="btn-info" id="btn-user" onClick={clickUserBtn}>User Home Sector</button>
          <button className="btn-info" id="admin-user" onClick={clickAdminBtn}>Admin Home Sector</button>
        </div>
        {showTable}
      </div>
    </Layout>
  )
}

function UserTable({ members }) {
  return (
    <table className="Table-container">
      <thead>
        <tr>
          <th>Name</th>
          <th>Last Name</th>
          <th>Position</th>
        </tr>
      </thead>
      <tbody>
        {members.map((element) => {
          return (
            <tr key={element.id}>
              <td>{element.name}</td>
              <td>{element.lastname}</td>
              <td>{element.position}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function AdminTable({ members }) {

  function deleteData()
  {
    
  }

  return (
    <div className="AdminTable-container">
      <div className="form-container">
        <h3>Create User Here</h3>
        <form action="" className="createUserForm">
          <input type="text" id="name" name="name" placeholder="Name" />
          <input type="text" id="lastName" name="lastName" placeholder="Last Name" />
          <input type="text" id="position" name="position" placeholder="Position" />
          <button type="submit">Save</button>
        </form>
      </div>
      <table className="Table-container">
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {members.map((element) => {
            return (
              <tr key={element.id}>
                <td>{element.name}</td>
                <td>{element.lastname}</td>
                <td>{element.position}</td>
                <td><button onClick={deleteData}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}



export default Home
