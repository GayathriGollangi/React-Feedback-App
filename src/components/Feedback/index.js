// Write your React code here.
import {Component} from 'react'
import './index.css'

export default class Feedback extends Component {
  state = {
    isEmojiClicked: true,
  }

  setIsFeedbackSelected = () => {
    this.setState(prevState => ({isEmojiClicked: false}))
  }

  renderEmojiContainer = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">
            How satisfied are you with our customer support performance
          </h1>
          <ul className="emojis-container">
            {emojis.map(eachEmoji => (
              <li key={eachEmoji.id}>
                <img
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                  className="emoji"
                  onClick={this.setIsFeedbackSelected}
                />
                <p className="emoji-name">{eachEmoji.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderSuccessfulContainer = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="thank-container">
        <div className="heart">
          <img src={loveEmojiUrl} alt="love emoji" className="heart-emoji" />
        </div>
        <h1 className="thq">Thank you</h1>
        <p>
          We will use your feedback to improve our customer support perfomance
        </p>
      </div>
    )
  }

  render() {
    const {isEmojiClicked} = this.state
    return (
      <div className="app-container">
        <div className="container">
          {isEmojiClicked
            ? this.renderEmojiContainer()
            : this.renderSuccessfulContainer()}
        </div>
      </div>
    )
  }
}
