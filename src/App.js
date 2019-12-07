import React, {useState, useCallback} from 'react';
import {useBreakpoint} from './components/Utilities/Breakpoint.js';
import './App.css';
import { useTrail, animated } from 'react-spring';
import Panel from './components/Panel';

const items = ['home', 'about', 'portfolio', 'contact']
const config = {mass: 1, tension: 50, friction: 50, duration: 750}

function App() {
  const breakpoints = useBreakpoint();
    const [show, setShow] = useState(false);//false);
    const [clickedValue, setClickedValue] = useState(null);
    const handleClick = (e) => {
      setClickedValue(Number(e.currentTarget.id));
      e.currentTarget.id === '0' ? setShow(false) : setShow(show => !show);
    };
    const changePage = (e) => {
      setClickedValue(Number(e.currentTarget.id));
      e.currentTarget.id === '0' && setShow(false)
    };
    const showFooter = (breakpoints['xs'] || breakpoints['sm']) || show;
    const trail = useTrail(items.length, {
      config, 
      opacity: showFooter ? 1 : 0,
      x: showFooter ? 0 : 50,
      height: showFooter ? 80 : 0,
      from : {opacity: 0, x: 20, height: 0}
    });
    return (
      <div className="App">
        <div className='first-div'>
          <Panel handleClick={handleClick} breakpoints={breakpoints} currentPage={clickedValue}/>
        </div>
        
        <div className="content">
        
          {trail.map(({ x, height, ...rest}, index) => (
            <animated.div
              key={items[index]}
              className="test"
              style={{...rest, borderTop: '.1em solid #93D5FF', transform: x.interpolate(x => `translate3d(0,${x}px, 0)`), gridColumn: index+1, cursor: 'pointer', padding: 10}}
              id={index}
              onClick={changePage}
            >
              <a href='#' style={{textDecoration: 'none', color: index===clickedValue ? (index < 3 ? '#93D5FF' : '#6491AD') : '#e0e1dd'}} >{items[index]}</a>
            </animated.div>
          ))}
        </div>
      </div>
    )
}

export default App;
