import React, {useState} from 'react'
import './EnterData.css'
import axios from "axios";
import { Link, useHistory } from "react-router-dom";


function EnterData() {

    let history = useHistory();


    const [input, setInput] = useState({
        name:'',
        birthday:'',
        age:'',
        address:'',
        mobile:''
    })

    function handleChange(event) {
        const {name, value} = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        const newTask = {
            name: input.name,
            birthday: input.birthday,
            age: input.age,
            address: input.address,
            mobile:input.mobile
        }

        axios.post('http://localhost:3001/create', newTask)

        history.push("/submit");
    }


    return (
        <div className="container">
            <form>
            <label> Name: <input type="text" name="name" onChange={handleChange}/> </label>
            <label for="birthday"> Birthday: <input type="date" id="birthday" name="birthday" onChange={handleChange}/> </label>
            <label for="age"> Age: <input type="number" name="age" onChange={handleChange}/> </label>
            <label for="address">Address: <textarea name="address" form="usrform" onChange={handleChange}>Enter text here...</textarea></label>
            <label for="mobile">Mobile:<input type="number" name="mobile" onChange={handleChange}/></label>

            <label><input type="submit" value="Submit" onClick={handleClick}/></label>
            </form>

            <Link to='/'>
                <h3>Go to home</h3>
            </Link>

        </div>
    )
}

export default EnterData
