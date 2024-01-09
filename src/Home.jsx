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
  const [showTable, setShowTable] = useState(0); /* 0 = Not show, 1 = show UserTable, 2 = show adminTable */

  useEffect(()=>
  {
    setMembers(mockEmployees);
  }
    ,[]);

  function clickUserBtn() {
    setHeading("Home - User Sector");
    setShowTable(1);
  }

  function clickAdminBtn() {
    setHeading("Home - Admin Sector");
    setShowTable(2);
  }

  function createData(name, lastname, position)
  {
    let randomId = undefined;
    let newData = [];


    do 
    {
      randomId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER); /* use Max number of safty that JS can have*/
    } while (members.some((element) => element.id === randomId))
    
    // console.log(randomId); /* Just check ID */

    newData = [...members, 
    {
      id: randomId,
      name: name, 
      lastname: lastname, 
      position: lastname
    }]
    // console.log(newData); /* Just check data */
    setMembers(newData);
  }

  return (
    <Layout>
      <div className="Home-container">
        <h1>Generation Thailand<br />{heading}</h1>
        <div className="btn-container">
          <button className="btn-info" id="btn-user" onClick={clickUserBtn}>User Home Sector</button>
          <button className="btn-info" id="admin-user" onClick={clickAdminBtn}>Admin Home Sector</button>
        </div>
        {showTable === 1 && <UserTable members={members} />}
        {showTable === 2 && <AdminTable members={members} deleteData={setMembers} createData={createData} />}
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

function AdminTable({ members, deleteData, createData }) {

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");

  function sendDeleteData(id)
  {
    const checkData = members.filter((item) => item.id !== id);
    deleteData(checkData);
  }

  function submitData(event)
  {
    event.preventDefault();
    // console.log(name, lastname, position);
    createData(name, lastname, position);
  }

  return (
    <div className="AdminTable-container">
      <div className="form-container">
        <h3>Create User Here</h3>
        <form action="" className="createUserForm">
          <input type="text" id="name" name="name" placeholder="Name" onChange={(ev)=>{setName(ev.target.value)}}/>
          <input type="text" id="lastName" name="lastName" placeholder="Last Name" onChange={(ev)=>{setLastname(ev.target.value)}}/>
          <input type="text" id="position" name="position" placeholder="Position" onChange={(ev)=>{setPosition(ev.target.value)}}/>
          <button type="submit" onClick={submitData}>Save</button>
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
                <td><button onClick={() => {sendDeleteData(element.id)}}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home
