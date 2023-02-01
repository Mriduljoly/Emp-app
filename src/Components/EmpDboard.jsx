import {React, useState,useEffect} from 'react'
import axios from "axios"
import Table from "react-bootstrap/Table"
import "./Components/Eform.css";
const EmpDboard = () => {
 
    var [empData, setempData] = useState([]);
        useEffect(() => {
          fetchEmpdata();
        }, []);
    

    var aPi = "https://jsonplaceholder.typicode.com/users";

          const fetchEmpdata = () => {
           axios.get(aPi)
          
          .then((response) => {
            setempData(response.data);
          })
          .catch();
        };

	return (
		<><Navigation />
    <div style={{marginLeft: "8rem",marginRight: "8rem"}}>

		
	
		<Table striped bordered>
	
		  <thead>
			<tr>
			  <th>Id</th>
			  <th>Name</th>
			  <th>Email</th>
			</tr>
		  </thead>
		  <tbody>
			{empData.map((item,key) =>{
                    return(
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                     </tr>
                    );
                  })}
		  </tbody>
		</Table>
    </div></>
	);
};

export default EmpDboard