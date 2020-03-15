import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    data: null,
  };

  componentDidMount() {
    fetch("https://www.reddit.com/r/christianmemes.json")
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          data: res.data,
        });
      })
  }

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          Big Brain App
        </header>

        <div>
          {data && data.children.map(function(child) {
            return (
              <div>
                <h3>{child.data.title}</h3>
                <img alt="Meme" src={child.data.url} />
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
