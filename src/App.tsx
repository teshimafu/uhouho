import React from 'react';
import './App.css';
import { Convertor } from './Convertor';
import logo from './gori.png';
import logo2 from './gori2.png';

class App extends React.Component<{}, { text: string, answer?: string, g?: boolean, t?: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { text: "" }
  }
  private change = () => {
    let resp = Convertor.convertor(this.state.text);
    this.setState({ answer: resp.text, g: resp.g, t: resp.t });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>ゴリラ語変換<span style={{ textDecorationLine: 'line-through' }}>クソ</span>ツール</h1>
        </header>
        <div>
          <h3>ゴリラ語を入れてね？</h3>
          <input type="text" value={this.state.text} onChange={(e) => this.setState({ text: e.target.value })}></input>
          <button onClick={this.change}>変換！</button>
          {this.state.answer &&
            <div>
              <div>翻訳結果</div>
              <div>{this.state.answer}</div>
              {this.state.g ? <img src={logo2} alt="logo" /> : <img src={logo} alt="logo" />}
              {this.state.g && <div>※う,ほ,ウ,ホ,っ,ッ以外を使うと怒られちゃうぞ♡</div>}

            </div>
          }
        </div>
      </div>
    );
  }
}

export default App;
