import './SecondStep.css'
import {useState} from 'react'
import {Col,Container,Row,Form} from "react-bootstrap"
import Select from 'react-select';

const options = [
    { id: 1, value: "football", label: "Football ⚽" },
    { id: 2, value: "computer", label: "Computer 💻" },
    { id: 3, value: "play", label: "Play 🎮" },
    { id: 4, value: "music", label: "Play Music 🎵" },
    { id: 5, value: "photo", label: "Photography 📷" },
    { id: 6, value: "swim", label: "Swim 🏊‍♂️" },
    { id: 7, value: "run", label: "Run 🏃‍♂️" }
];
export default function SecondStep(){
    const [selectOption,setSelectOption]=useState(null)
    const hobbiesSer=JSON.stringify(selectOption)
    // console.log(hobbiesSer)
    localStorage.setItem('hobbies',hobbiesSer)
    const onChangeAdditionalHobbie=(e)=>{
        const sport= e.target.value;
        // console.log(sport)
        localStorage.setItem('aditionalHobbie',sport)
    }
return (<div>

<h2>Select your favourite sport</h2>    
<h4>Tell me about your hobbies</h4>
<Container className="p-5 text-center">
    <Row className="justify-content-md-center">
        <Col lg="7">
        <h5>Select your hobbies</h5>
        <Select defaultValue={selectOption} onChange={setSelectOption} options={options} inSearchable isMulti>
            
        </Select>
        </Col>
        <Col lg="7" className='mt-4'>
        <h5>Do you want to add more Hobbies?
            </h5>
            <Form.Control type='text' placeholder='Karate' onChange={((e)=>onChangeAdditionalHobbie(e))}></Form.Control>
            </Col>
    </Row>
</Container>
</div>)
}