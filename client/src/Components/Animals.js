import React, { Component } from 'react';
import axios from 'axios'



class Animals extends Component {
constructor() {
    super()
    this.state = {
        animals: [],
        newAnimal: '',
        updateAnimalValue: '',
        BASE_URL: 'http://localhost:3000'

    }
}


getAnimals = () => {
    axios.get('http://localhost:3000/api/getanimals').then(response => {
        console.log(response.data)
    this.setState({
        animals: response.data
    })
})
}

// updateAnimalValue= (value) => {
//     axios.put(`http://localhost:3000/api/updateanimal/${id}`).then(response => {
//         this.setState({
//         updateAnimalValue: value
//     })
// }

// updateAnimal = 

// deleteAnimal = (value) => {
//     axiox.delete(`http://localhost:3000/api/deleteanimal/${id}`)
//     this.setState({
//        animals: response.data
//     })
// }

handleNewAnimalChange = (val) => {
    this.setState({
        newAnimal: val
    })
}

submitnewAnimal = () => {
    console.log('in here?"')
    axios.post('https://localhost:3000/api/addNewAnimal', {newAnimal: this.state.newAnimal}).then(response => {
        this.setState({
            newAnimal: response.data
        })
    })
}

render() {
    return (
        <div>

        {this.state.animals.map( newAnimal => {
            return <div key={newAnimal.id}>{newAnimal.name}

            <img src = {newAnimal.imageUrl}/>
            
          
            </div>
        })}
             Enter New Animal: <input value={this.state.newAnimal} onChange={(e) => {this.handleNewAnimalChange(e.target.value)}}></input><button onClick={this.submitnewAnimal}>Submit new animal!</button>
             <button onClick={this.getAnimals}>Get Animals></button> 
            
      </div>
    )
}
}

export default Animals;

