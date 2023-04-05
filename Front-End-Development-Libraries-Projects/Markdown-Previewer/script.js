const initialState = `# Welcome to my Markdown Previewer
## This was built with React.js
**Feel free to try it out with anything you want just enter it into the box on the left**

Here's a pretty random list of things
- Orange
- Monkey
- Eagle

[If you want to visit my website and find me you can here, just click this text, y'know the blue text, the one you're reading right now](https://robertsevan.com/)

Here is some inline code 
\`<div class="woahaclass"><h1>and heres a heading</h1></div>\`

Look a block of code, and it's doing math!
  \`\`\`
  let x = 1;
  let y = 2;
  let z = x + y;
  \`\`\`
  
  And now a quote from Monogatari
  > 斜め七十七度の並びで泣く泣く嘶くナナハン七台難なく並べて長眺め
  Naname nanajyuunana-do no narabi de nakunaku inanaku nanahan nanadai nannaku narabete naganagame.
  
  **And last but not least this project was coded for:**
  ![freeCodeCamp](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

class App extends React.Component {
  state = {
    text: initialState
  }
  
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  
  render() {
    const {text} = this.state;
    
    const markdown = marked.parse(text, { breaks: true });
    
    return(
    <div>
        <h1 className="text-center m-4">Preview Your Markdown</h1>
        <div className="row">
          <div className="col-6">
            <h5 className="text-center">Enter Markdown text:</h5>
            <textarea rows="25" className="form-control p-2" id="editor" value={text} onChange={this.handleChange}/>
          </div>
          <div className="col-6" >
            <h5 className="text-center">Result:</h5>
            <div className="preview p-2" id="preview" dangerouslySetInnerHTML={{__html: markdown}}>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));