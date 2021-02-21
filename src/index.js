import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from '@testing-library/react';
import { Container, Row, Col, Badge, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const earlyPhaseList = [
  "1 Zwilling +  2 Drillinge",
  "4 Zwillinge mit nur geraden oder nurungeraden Zahlen",
  "1 Siebenerfolge",
  "2 Zwillinge mit geraden + 2 Zwillinge mitungeraden Zahlen",
  "7 Karten einer Farbe +  3 einer anderen Farbe",
  "1 Viererfolge mit jeweils doppelten Zahlen",
  "2 Zwillinge + 1 Vierling",
  "6 Karten einer Farbe + 1 Drilling",
  "1 Drilling mit zweistelligen Zahlen + 1 Fünferfolge mit einstelligen Zahlen",
  "1 Zwilling + 1 Vierling",
  "1 Drilling mit geraden + 1 Drilling mit ungeraden Zahlen",
  "Achterfolge mit genau einem niedrigen und einem hohen Joker",
  "1 Zwilling + 2 Drillinge",
  "Siebenerfolge mit einer zweistelligen Zahl am Ende",
  "2 Vierlinge, insgesamt aus maximal 3 Farben",
  "1 Zweierfolge + 1 Drilling + 1 Viererfolge",
  "6 gerade + 3 ungerade Zahlen, ohne Joker",
  "7 Karten mit einstelligen Zahlen einer Farbe"
];

const midPhaseList = [
  "5 Karten einer Farbe + 4 einer anderen Farbe",
  "1 Zwilling + 1 Drilling + 1 Vierling",
  "1 Drilling + 1 Viererfolge, beide ohne Joker",
  "1 Zwilling + 1 Drilling + 1 Vierling mit mindestens einem Joker insgesamt",
  "3 Drillinge mit einstelligen Zahlen",
  "2 Vierlinge",
  "10 Karten aus zwei Farben, ohne Joker",
  "Viererfolge aus zwei abwechselnden Farben + 2 Zwillinge",
  "3 Drillinge ohne Joker",
  "2 Drillinge + 1 einfarbige Dreierfolge",
  "3 Dreierfolgen mit wenigstens einer Zahl dazwischen, maximal ein Joker insgesamt",
  "1 Vierling + 5 beliebige zweistellige Zahlen",
  "Neunerfolge mit maximal einem Joker",
  "1 Vierling ohne Joker + 1 Zwilling + 1 Drilling",
  "6 beliebige Karten einer Farbe+ 1 Dreierfolge einer anderen Farbe",
  "1 Dreierfolge aus genau zwei Farben+1 Viererfolge aus genau drei Farben",
  "1 Drilling + 1 Vierling, beide gleich nur mit geraden oder ungeraden Zahlen",
  "1 Sechserfolge + 1 Drilling, beide ohne Joker",
]

const latePhaseList = [
  "1 Vierling mit einstelligen Zahlen + 2 Zwillinge mit zweistelligen Zahlen",
  "1 Viererfolge einer Farbe + 1 Vierling mit unterschiedlichen Farben",
  "1 Zehnerfolge",
  "1 Achterfolge ohne Joker",
  "3 Drillinge mit jeweils unterschiedlichen Farben; maximal ein Joker insgesamt",
  "1 Viererfolge + 1 Vierling, beide mit jeweils allen Farben",
  "Neunerfolge",
  "1 Vierling ohne Joker + 1 Vierling mit genau einem Joker",
  "1 Vierling + 1 Fünferfolge ohne die Farbendes Vierlings",
  "Neunerfolge aus maximal zwei Farben",
  "1 Vierling aus zwei Farben + 1 Viererfolge aus den beiden anderen Farben",
  "Sechserfolge aus 2 abwechselnden Farben",
  "1 Drilling mit geraden Zahlen + 2 Drillingemit ungeraden Zahlen, oder umgekehrt",
  "1 Viererfolge einer Farbe + 1 Vierling",
  "1 Vierer- + 1 Fünferfolge jeweils einer Farbe",
  "3 Zweierfolgen + 1 Drilling",
  "1 Dreier- und 1 Viererfolge mit jeweils nur einer Farbe",
  "1 Fünferfolge mit allen Farben + 1 Drilling",
]

const lastPhaseList = [
  "1 Fünferfolge einer Farbe mit Zweierabstand+1 Vierling ohne die Farbe der Folge",
  "1 Fünfling aus exakt 3 Farben + 1 Viererfolge",
  "3 Dreierfolgen mit jeweils gleichen Farben",
  "1 Fünferfolge ohne Joker + 1 Fünfling",
  "Sechserfolge aus drei abwechselnden Farbenbei gleicher Farb-Reihenfolge, max. ein Joker",
  "1 Vierer- und 1 Fünferfolge, insgesamt max. drei Farben und max. ein Joker",
]


function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

class GetEarlyPhases extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      earlyPhases: getRandom(earlyPhaseList, 3),
      midPhases: getRandom(midPhaseList, 3),
      latePhases: getRandom(latePhaseList, 3),
      lastPhase: getRandom(lastPhaseList, 1),
    };
    this.regenerate = this.regenerate.bind(this);
  }


  regenerate() {
    this.setState({
      earlyPhases: getRandom(earlyPhaseList, 3),
      midPhases: getRandom(midPhaseList, 3),
      latePhases: getRandom(latePhaseList, 3),
      lastPhase: getRandom(lastPhaseList, 1),
    });
  }

  render() {
    // const earlyListItems = this.state.earlyPhases.map((phase) => <li> {phase} </li>)
    // const midListItems = this.state.midPhases.map((phase) => <li> {phase} </li>)
    // const lateListItems = this.state.latePhases.map((phase) => <li> {phase} </li>)
    // const lastListItem = this.state.lastPhase.map((phase) => <li> {phase} </li>)

    const listItems = this.state.earlyPhases.concat(this.state.midPhases).concat(this.state.latePhases).concat(this.state.lastPhase);
    const listItemsMapped = listItems.map((phase, index) => <ListGroup.Item><Badge pill variant="dark">{index+1}</Badge> {phase}</ListGroup.Item>);
    

    return (
      <div>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} lg={4}>
              <ListGroup variant="flush" id="roundcorners">
              <h2>Die 10 Phasen</h2>
                {listItemsMapped}
              </ListGroup>
            </Col>
            <Col sm={8} md={6} lg={8}>3 of 3</Col>
          </Row>
        </Container>

        <button onClick={() => this.regenerate()}> Regenerate </button>
      </div>
    )
  }
}

// ========================================

ReactDOM.render(
  <GetEarlyPhases />,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
