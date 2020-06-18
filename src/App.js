import React from 'react';
import './App.css';
import HelloWorld from './projects/hello-world/index'

const project = <HelloWorld message='React Training'/>

const App = () => (
  <div className="App">
    { project }
  </div>
)

export default App;
