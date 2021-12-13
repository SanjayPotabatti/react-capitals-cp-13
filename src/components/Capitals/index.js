import {Component} from 'react/cjs/react.production.min'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {country: countryAndCapitalsList[0].country}

  onChangeCapital = event => {
    this.setState({country: event.target.value})
  }

  render() {
    const {country} = this.state

    return (
      <div className="bgContainer">
        <div className="cardContainer">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="selectContainer">
            <select className="selectStyle" onChange={this.onChangeCapital}>
              {countryAndCapitalsList.map(eachCountryDetails => (
                <option value={eachCountryDetails.country}>
                  {eachCountryDetails.capitalDisplayText}
                </option>
              ))}
            </select>
            <p> is capital of which country?</p>
          </div>

          <h1 className="heading">{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
