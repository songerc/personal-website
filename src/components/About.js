import React, {useState, useCallback} from 'react';
import {useTransition, animated} from 'react-spring';
const pages = [
    ({style}) => <animated.div style={{...style, gridRow: '1 / auto', gridColumn: '2/5'}}><h1 style={{color: '#e0e1dd'}}>About Cole Songer</h1></animated.div>,
    ({style}) => <animated.div style={{...style, gridRow: '1 / auto', gridColumn: '2/5'}}><h1 style={{color: '#e0e1dd'}}>About AC Bland</h1></animated.div>,
    ({style}) => <animated.div style={{...style,  gridRow: '1 / auto', gridColumn: '2 / 5'}}><h1 style={{color: '#e0e1dd'}}>About Peanut Songer</h1></animated.div>,
    ({style}) => <animated.div style={{...style,  gridRow: '1 / auto', gridColumn: '2 / 5'}}><h1 style={{color: '#e0e1dd'}}>About Friend Songer</h1></animated.div>
]

export const About = () => {
    const [index, set] = useState(0);
    const onClick = useCallback(() => set(state => (state+1)%4),[] )
    const transitions = useTransition(index, p => p, {
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
        config: {
            duration: 500
        }
      })
    return (
        <div className='about-me' style={{display: 'grid', gridGap: '5px', overflowY: 'scroll', gridTemplateColumns: 'repeat(5, minmax(17vw, .5fr))', gridTemplateRows: 'repeat(3, 30vh)'}}>
            {transitions.map(({ item, key, props }) => {
                const Page = pages[item]
                return <Page key={key} style={props}/>
            })}
            <div style={{gridColumn: 5, gridRow: 2, cursor: 'pointer'}} onClick={onClick}>
            <svg width="40" height="50" viewBox="0 0 42 53">
              <path d="M0,0 l40,25 l-40,25" fill="none" stroke="black" stroke-width="3" />
            </svg>
            </div>
            </div>
    )
}