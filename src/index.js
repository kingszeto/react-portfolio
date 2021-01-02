import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';

function setMarkerPos(signID){

}
ReactDOM.render(
  <React.StrictMode>
    <Container>
      <Row>
        <Col xs={1}></Col>
        <Col xs={10}><App/></Col>
        <Col xs={1}></Col>
      </Row>
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);


  

// ReactDOM.render(<h1>Hello There</h1>, document.getElementById('root'))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
