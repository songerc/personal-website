import React, {Component} from 'react';


class Header extends Component {
    
    state = {
        menuItems: [
            {title: 'home', id: 1},
            {title: 'about', id: 2},
            {title: 'portfolio', id: 3},
            {title: 'contact', id: 4}
        ],
        show: false
    };

    switch = () => {
        this.setState(prevState =>({
            show: !prevState.show
        }));
    }


    render() {
        return (
            this.props.breakpoints['xs'] || this.props.breakpoints['sm'] ? (<>
            <div style={{marginBottom: -25, fontSize:'5.5em', fontWeight:300, color: '#e0e1dd'}} >
                                <span style={{marginTop: 0, marginLeft: 10, marginBottom: 0, padding: 0, gridRowStart: 1}}>cole</span>
                            </div>
                            <div style={{marginTop: -60, fontSize:'5.5em', fontWeight:300, color: '#e0e1dd'}}>    
                                <span style={{marginTop: 0, marginLeft: 10, marginBottom: 0, gridRowStart: 2, padding: 0}}>songer</span>
                            </div>
                            </>) : (
            <header>
                <div  className="header-wrap">
                    <div className="left-div" style={{fontWeight: 300, fontSize: '5.5em'}}>
                        <div className="first">
                            <div style={{marginBottom: -25}}>
                                <span style={{marginTop: 0, marginLeft: 10, marginBottom: 0, padding: 0, gridRowStart: 1}}>cole</span>
                            </div>
                            <div style={{marginTop: -60}}>    
                                <span style={{marginTop: 0, marginLeft: 10, marginBottom: 0, gridRowStart: 2, padding: 0}}>songer</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="right-div">
                        <div>
                            <ul id='nav' style={{listStyleType: 'none', fontSize: '2.25em', marginRight: 10,  bottom: 0}}>
                                <li><a style={{color: '#93D5FF'}} >home</a></li>
                                <li><a href='#' id='1' onClick={this.props.handleClick} >about</a></li>
                                <li><a href='#' id='2' onClick={this.props.handleClick} >portfolio</a></li>
                                <li><a href='#' id='3' onClick={this.props.handleClick} >contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            )
        )
    }
}

export default Header;