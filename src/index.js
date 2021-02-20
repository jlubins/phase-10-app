import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from '@testing-library/react';

const earlyPhaseList = [
  "1 Zwilling +  2 Drillinge",
  "4 Zwillinge mit nur geraden oder nurungeraden Zahlen",
  "1 Siebenerfolge"
];

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

// function AppHooks() {
//   const earlyPhaseList = [
//     "1 Zwilling +  2 Drillinge",
//     "4 Zwillinge mit nur geraden oder nurungeraden Zahlen",
//     "1 Siebenerfolge"
//   ];

//   // const [activePhase, setActivePhase] = useState(0);

//   // console.log(getRandom(earlyPhaseList, 3));
//   // console.log(getRandom(earlyPhaseList, 3));
//   // console.log(getRandom(earlyPhaseList, 3));


//   let [earlyPhases, getRandom] = useState(0);
//   // useEffect(() => {getRandom(earlyPhaseList, 3);})
//   let listItems = [earlyPhases, getRandom].map((phase) => <li> {phase} </li>);

//   return (
//     <>
//       <div className="container">
//         <div className="container-phaselist">
//           <ol>
//             {listItems}
//           </ol>
//         </div>
//         <div className="container-score">
//           <div>{/* status */}</div>
//           <ol>{/* TODO */}</ol>
//         </div>
//       </div>
//       <button onClick={() => this.getRandom(earlyPhaseList, 3)}> Generate </button>
//     </>
//   );
// }

class GetEarlyPhases extends React.Component {
  constructor(props) {
    super(props);

    this.state = {earlyPhases: getRandom(earlyPhaseList, 3)};
    this.regenerate = this.regenerate.bind(this);
  }


  regenerate() {
    this.setState({
      earlyPhases: getRandom(earlyPhaseList, 3)
    });
    console.log(this.state.earlyPhases);
  }

  render() {
    const listItems = this.state.earlyPhases.map((phase) => <li> {phase} </li>)
    return (
      <div>
        <ol>
          {listItems}
        </ol>

        <button onClick={() => this.regenerate()}> Regenerate </button>
      </div>
    )
  }
}

// class ListItem extends React.Component {
//   render() {
//     return (
//       <li className="listitem">
//         {this.props.value}
//       </li>
//     );
//   }
// }

// class PhaseList extends React.Component {
//   renderListItem(i) {
//     return <ListItem value={earlyPhaseList[activePhase].phase} />;
//   }

//   render() {
//     const status = 'Next player: X';

//     return (
//       <div>
//         <div className="status">{status}</div>
//         <ol className="phase-list">
//           {this.renderListItem()}
//           {this.renderListItem()}
//           {this.renderListItem()}
//         </ol>
//       </div>
//     );
//   }
// }

// class Container extends React.Component {
//   render() {
//     return (
//       <div className="container">
//         <div className="container-phaselist">
//           <PhaseList />
//         </div>
//         <div className="container-score">
//           <div>{/* status */}</div>
//           <ol>{/* TODO */}</ol>
//         </div>
//       </div>
//     );
//   }
// }

// ========================================

ReactDOM.render(
  <GetEarlyPhases />,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
