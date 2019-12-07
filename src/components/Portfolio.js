import React, { Component } from 'react'
import { config } from 'react-spring/renderprops'
import Grid from './Grid'
import { Slug, Fade } from './Primitives'
const data = [
  {
      name: 'Security Alarms',
      description: '#edd4b2 → #doa98f',
      css: 'linear-gradient(135deg, #845A6D 0%, #3E1929 100%)',//'url("'+SecurityAlarms+'")',//'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      height: 200
    },
    {
      name: 'Saint Petersburg',
      description: '#F3E0EC → #EAD5E6',
      css: 'linear-gradient(135deg, #F3E0EC 0%, #EAD5E6 100%)',
      height: 350
    },
    {
      name: 'Deep Blue',
      description: '#e0c3fc → #8ec5fc',
      css: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
      height: 150
    },
    {
      name: 'Ripe Malinka',
      description: '#f093fb → #f5576c',
      css: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      height: 300
    },
    {
      name: 'Perfect White',
      description: '#fdfbfb → #ebedee',
      css: 'linear-gradient(135deg, #E3FDF5 0%, #FFE6FA 100%)',
      height: 125
    },
]
class Cell extends Component {
  render() {
    const { toggle, name, description, css, active } = this.props
    return (
      <div
        className="cell"
        style={{ background: css, height: '100%', cursor: !active ? 'pointer' : 'auto' }}
        onClick={!active ? toggle : undefined}>
        <Fade show={active} delay={active ? 500 : 0}>
          <div className="details" style={{height: '100vh'}}>
            <Slug delay={600}>
              <div className="circle" style={{ background: css }} />
              <div className="close" style={{cursor: 'pointer', textAlign: 'right'}} onClick={toggle}>
                <span style={{marginRight: '10px'}}>X</span>
              </div>
              <h1>{name}</h1>
              <p>{description}</p>
            </Slug>
          </div>
        </Fade>
        <Fade
          show={!active}
          from={{ opacity: 0, transform: 'translate3d(0,140px,0)' }}
          enter={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
          leave={{ opacity: 0, transform: 'translate3d(0,0px,0)' }}
          delay={active ? 0 : 400}>
          <div className="default">
            <div style={{ zIndex: 1 }}>{name}</div>
          </div>
        </Fade>
      </div>
    )
  }
}

export default class Portfolio extends Component {
  state = { data }
  render() {
    return (
      <div  style={{
                        height: '90vh',
                      overflowY: 'scroll'}}>
      <Grid
        className="grid"
        // Arbitrary data, should contain keys, possibly heights, etc.
        data={this.state.data}
        // Key accessor, instructs grid on how to fet individual keys from the data set
        keys={d => d.name}
        // Can be a fixed value or an individual data accessor
        heights={d => d.height}
        // Number of columns
        columns={2}
        // Space between elements
        margin={10}
        // Removes the possibility to scroll away from a maximized element
        lockScroll={false}
        // Delay when active elements (blown up) are minimized again
        closeDelay={500}
        // Regular react-spring configs
        config={config.slow}
        style={{margin: 0, height: '100%'}}>
        {(data, active, toggle) => (
          <Cell {...data} active={active} toggle={toggle} />
        )}
      </Grid>
      </div>
    )
  }
}
// const Portfolio = () => {
//     const [open, set] = useState(null);
//     useEffect(() => {
//       set(true);
//     }, [])
//     const springRef = useRef();
    
//     const { size, opacity, ...rest } = useSpring({
//         ref: springRef,
//         config: config.stiff,
//         from: { size: '20%', background: 'hotpink' },
//         to: { size: open ? '100%' : '20%', background: open ? 'white' : 'hotpink' }
//       })
    
//       const transRef = useRef()
//       const transitions = useTransition(open ? data : [], item => item.name, {
//         ref: transRef,
//         unique: true,
//         trail: 400 / data.length,
//         from: { opacity: 0, transform: 'scale(0)' },
//         enter: { opacity: 1, transform: 'scale(1)' },
//         leave: { opacity: 0, transform: 'scale(0)' }
//       })
    
//       // This will orchestrate the two animations above, comment the last arg and it creates a sequence
//       useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.6])
      
//       return(
//           <>
//             <div 
//                 className='portfolio-elements' style={{
//                 ...rest,
//                 display: 'grid',
//                 width: size,
//                 height: size,
//                 gridTemplateColumns: 'repeat(3, minmax(100px, 1fr))',
//                 gridGap: '25px',
//                 padding: '25px',
//                 willChange: 'width, height'}} >
//                   {transitions.map(({ item, key, props}) => (
//                     <animated.div
//                         style={{...props, background: item.css, width: '20vw',
//                             height: '20vh',
//                             borderRadius: '5px',
//                             willChange: 'transform, opacity'}}
//                         key={key}
//                     ><h1>{item.name}</h1></animated.div>
//                 ))}
//             </div>
//         </>
//         )
// }

// export default Portfolio;