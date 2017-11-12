import React, {Component} from 'react'
import Person from './Person/Person'
import Radium, {StyleRoot} from 'radium'

class App extends Component {
  constructor (props) {
    super()
    this.state = {
      persons : [
        {name:'alex', age: 26, id:'abcd'},
        {name:'lorena', age: 19, id:'adsad'},
        {name:'carlos', age: 24, id:'acvcv'},
        {name:'ricardo', age: 64, id:'aber'},
        {name:'sofia', age: 14, id:'abllm'},
      ],
      showList : false
    }
  }

  showList = () => {
    let showList =  this.state.showList
    this.setState({
      showList : !showList
    })
  }

  showIndex = (indexPerson) => {
    const person = this.state.persons.slice()
    person.splice(indexPerson, 1)
    this.setState({
      persons : person
    })
  }

  changeName = (e, personId) => {

    const personIndex =  this.state.persons.findIndex( person => {
      return person.id === personId
    })

    const person = {...this.state.persons[personIndex]}
    person.name = e.target.value
    console.log(person)

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({ persons : persons})  
  }

  render () {

    let personList = null

    const button = {
      backgroundColor : 'green',
      ':hover' : {
        backgroundColor: 'salmon'
      }
    }

    if (this.state.showList) {
      personList =  (
        <div>
          {this.state.persons.map( (person) => {
            return (
              <Person 
                key={person.id}
                nombre={person.name}
                changeName={(e) => this.changeName(e, person.id)}
                click={() => this.showIndex(person.id)}/>
            )
          })}
        </div>
      )

      button.backgroundColor = 'red'
      button[':hover'] = {
        backgroundColor: 'lightgreen'
      }
    }

    let switchButton = 'show list'
    if(this.state.showList) switchButton = 'hidden list'

    const classes = []

    if(this.state.persons.length <= 2) {
      classes.push('red')
    }

    if(this.state.persons.length <= 1) {
      classes.push('bold')
    }

    return (
      <StyleRoot>
        <div className='box'>
          <div className='itembox'>
            <h1 className={classes.join(' ')}>Persons List</h1>
            <button style={button} onClick={this.showList}>{switchButton}</button>
            {personList}
          </div>
        </div>
      </StyleRoot>
    )
  }
}

export default Radium(App)
