import { useEffect, useState } from 'react';
import './App.css';
import Entry from "./component/EntryBox/entry"
import Container from './component/Containers/container';
import ColorChangeCOntainer from './component/ColorChangeContainer/colorchangecontainer';
import axios from 'axios'


function App(props) {


  const [name, setName] = useState([])
  const [color, setColor] = useState("")
  const [healthUsers, setHealthUsers] = useState([])



  useEffect(() => {
    //To get data from the backend on loading and displays
    try {
      axios.get('http://localhost:5000/getUsers')
        .then((response) => setHealthUsers(response.data))//console.log(response.data[0].Fname))
        .catch(error => console.log(error))
    } catch (error) {

    }

  }, []);



  function saveNote(textcatch) {
    setName((prev) => {
      return [...prev, textcatch]
    })
    console.log(textcatch, "yere")
  }

  function onhandleColor(catchValue) {
    setColor(catchValue)
  }



  let colorVal = { background: `${color}` }

  return (
    <div className="App">
      <div className="outside-box">

        <div style={{}} className='inner-container'>
          <Entry colorStyle={colorVal} catchText={saveNote} />
        </div>
        {/* input box to change the color */}
        <ColorChangeCOntainer colorChanger={onhandleColor} />
        {/* {note.map((notechild)=>{
          return <h5>{notechild.Fname}</h5>
        })} */}
      </div >
      <div className='outside-display'>
        {name.map((item, id) => {
          console.log(id)
          // console.log(item)
          return <div className='display-container'>
            <Container key={id} content={item.content} title={item.title} />
          </div>
        })}
      </div>
      <div style={{ fontWeight: "bold" }}>First name     Phone      Address</div>
      {healthUsers.map((users, id) => {
        return <div>
          <table key={id}>
            <tr>
              <td>{users.Fname}</td>
              <td>{users.phone}</td>
              <td>{users.address}</td>
            </tr>
          </table>
        </div>
      })}

    </div>
  );
}

export default App;
