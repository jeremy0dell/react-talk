import React from 'react'

export default class App extends React.Component {
  state = {
    word: '',
    wordList: []
  }
  handleWordChange = (event) => {
    this.setState({
      word: event.target.value
    })
  }
  handleAddWord = (word) => {

    this.setState({
      wordList: [...this.state.wordList, word]
    })
  }
  render() {
    const { word, wordList } = this.state

    return (
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '50vw',
        backgroundColor: 'lightblue',
        border: '2px solid orange'
      }}>
        <WordList words={wordList} />
        <Form
          word={word}
          handleChange={this.handleWordChange}
          handleSubmit={this.handleAddWord}
        />
      </div>
    )
  }
}

export const WordList = ({ words }) =>
  <div style={{
    width: '25vh',
    color: 'black'
  }}>
    <div>This is the list!</div>
    {words.map(word =>
      <div key={word}>
        • {word}
      </div>)}
  </div>

export const Form = ({ word, handleChange, handleSubmit }) =>
  <div style={{ width: '20vh' }}>
    <input
      style={{ width: 150  }}
      type="text"
      placeholder="Put a word!"
      value={word}
      onChange={handleChange}
    />
    <button
      style={{ width: 100, height: 50, marginTop: 50 }}
      onClick={() => handleSubmit(word)}
    >
      Click me to add!
    </button>
  </div>
