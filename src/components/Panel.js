import React, { useState, Component, useEffect } from 'react';
import {Transition, animated} from 'react-spring/renderprops';
import Header from './Header';
import Portfolio from './Portfolio';
import {About} from './About';
import {Contact} from './Contact';


export default class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentPage !== this.props.currentPage) {

            this.setState({index: Number(this.props.currentPage)})
        }
    }
    render() {
        const elements = [
            (style) => <animated.div style={{...style, height: 0 }}><Header breakpoints={this.props.breakpoints} handleClick={this.props.handleClick}/></animated.div>,
            (style) => <animated.div style={{...style, height: 0 }}><About /></animated.div>,
            (style) => <animated.div style={{...style, height: 0, color: 'white' }}><Portfolio/></animated.div>,
            (style) => <animated.div style={{...style, height: 0 , color: 'white' }}><Contact /></animated.div>
        ]
        console.log("Index: ", this.state.index)
        return (
            <div className='main' style={{marginLeft: '5vw', width: '90vw', willChange: 'transform, opacity'}}>
                <Transition
                    
                    items={this.state.index}
                    from={{ opacity: 0, transform: 'translate3d(0vh,0vh,-60px)' }}
                    enter={{ opacity: 1, transform: 'translate3d(0vh,0vh,-60px)' }}
                    leave={{ opacity: 0, transform: 'translate3d(0vh,0vh,-200px)' }}
                    config={{duration: 500, friction: 800}}>
                    {index => elements[index]}
                    </Transition>
            </div>
        )
    }

}

// const Panel = ({handleClick, currentPage}) => {
//     //console.log(currentPage)
//     const [index, set] = useState(0);
//     useEffect(() => {
//         set(Number(currentPage));
//     }, [index, currentPage]);
//     const transition = useTransition(index, p => p, {
//         from: {opacity: 0, transform: 'translate3d(0, 0, -10px)', height: 0},
//         enter: {opacity: 1, transform: 'translate3d(0, 0, 0)'},
//         leave: {opacity: 0, transform: 'translate3d(0, 0, -200px)'},
//         config: {
//             duration: 500,
//             friction: 800
//         }
//     })
//     const elements = [
//         ({style}) => <animated.div style={{...style }}><Header handleClick={handleClick}/></animated.div>,
//         ({style}) => <animated.div style={{...style }}><About /></animated.div>,
//         ({style}) => <animated.div style={{...style, height: '0vh', color: 'white' }}><Portfolio/></animated.div>,
//         ({style}) => <animated.div style={{...style , height: '0vh', color: 'white' }}><Contact /></animated.div>
//     ]
//     return (
//         <div className='main' style={{marginLeft: '5vw', width: '90vw'}}>
//             {transition.map(({item, props, key}) => {
//                 const Page = elements[item];
//                 return <Page key={key} style={props}/>
//             })}
//         </div>
//     )
// }

// export default Panel;