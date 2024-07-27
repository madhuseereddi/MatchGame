import React, {Component} from 'react'
import Navbar from '../Navbar'
import ImagesList from '../ImagesList'
import TabsList from '../TabsList'
import ResultCard from '../ResultCard'
import './index.css'

class MatchGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      randomNumber: Math.floor(Math.random() * 30),
      tabName: 'FRUIT',
      score: 0,
      timer: 60,
      loseIt: false,
    }
  }

  componentDidMount() {
    this.startTimer()
  }

  componentWillUnmount() {
    this.clearTimer()
  }

  startTimer = () => {
    this.timerID = setInterval(() => {
      this.setState(prevState => {
        if (prevState.timer === 1) {
          clearInterval(this.timerID)
          return {timer: 0, loseIt: true}
        }
        return {timer: prevState.timer - 1}
      })
    }, 1000)
  }

  clearTimer = () => {
    clearInterval(this.timerID)
  }

  switchingTab = id => {
    this.setState({tabName: id})
  }

  imageClicked = id => {
    const {imagesList} = this.props
    const {randomNumber, score} = this.state

    const index = imagesList.findIndex(eachItem => eachItem.id === id)

    if (randomNumber === index) {
      this.setState({
        randomNumber: Math.floor(Math.random() * imagesList.length),
        score: score + 1,
      })
    } else {
      this.clearTimer()
      this.setState({loseIt: true})
    }
  }

  resetIt = () => {
    this.setState({
      randomNumber: Math.floor(Math.random() * 30),
      score: 0,
      timer: 60,
      loseIt: false,
    })
    this.startTimer()
  }

  render() {
    const {imagesList, tabsList} = this.props
    const {randomNumber, tabName, timer, loseIt, score} = this.state

    const filteredList = imagesList.filter(
      eachItem => eachItem.category === tabName,
    )

    return (
      <div className="full-bg">
        <Navbar propsList={this.state} />
        {!loseIt ? (
          <div className="dec-width">
            <div className="random-img-div">
              <img
                src={imagesList[randomNumber].imageUrl}
                className="random-img"
                alt="match"
              />
            </div>

            <ul className="tabs-list">
              {tabsList.map(eachItem => (
                <TabsList
                  key={eachItem.tabId}
                  eachItem={eachItem}
                  switchingTab={this.switchingTab}
                  isActive={eachItem.tabId === tabName}
                />
              ))}
            </ul>

            <ul className="itemslist">
              {filteredList.map(eachItem => (
                <ImagesList
                  key={eachItem.id}
                  eachItem={eachItem}
                  imageClicked={this.imageClicked}
                />
              ))}
            </ul>
          </div>
        ) : (
          <ResultCard propsList={this.state} resetIt={this.resetIt} />
        )}
      </div>
    )
  }
}

export default MatchGame
