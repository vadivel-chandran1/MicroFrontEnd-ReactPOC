import React, { useState } from 'react'

const SideBar = p => {
  const [activeItem, setActive] = useState('home')

  const clickHandler = n => {
    setActive(n)
    p.history.push(`/${n}`)
  }

  const navItem = (label, name) => {
    let cName = 'nav-item'
    if (activeItem === name) {
      cName += ' active'
    }

    return (
      <li className={cName} onClick={() => clickHandler(name)}>
        <p className='nav-link' style={{ marginBottom: 0 }}>
          {label}
        </p>
      </li>
    )
  }

  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <p className='navbar-brand' style={{ marginBottom: 0 }}>
          Micro FE React Demo
        </p>
        <div className='collapse navbar-collapse' id='navbarColor02'>
          <ul className='navbar-nav mr-auto'>
            {navItem('Home', '')}
            {navItem('Example 1', 'ex1')}
            {navItem('Example 2', 'ex2')}
            {navItem('Example 3', 'ex3')}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default SideBar

// class SideBar extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       activeItem: ''
//     }
//   }

//   async clickHandler(n) {
//     await this.setState({ activeItem: n })
//     await this.props.history.push(`/${n}`)
//   }

//   navItem(label, name) {
//     let cName = 'nav-item'
//     if (this.state.activeItem === name) {
//       cName += ' active'
//     }
//     return (
//       <li className={cName} onClick={() => this.clickHandler(name)} >
//         <a className="nav-link">{label}</a>
//       </li>
//     )
//   }

//   render() {
//     return (
//       <div>
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//           <a className="navbar-brand">Micro FE Demo</a>
//           <div className="collapse navbar-collapse" id="navbarColor02">
//             <ul className="navbar-nav mr-auto">
//               {this.navItem('Home', '')}
//               {this.navItem('Example 1', 'ex1')}
//               {this.navItem('Example 2', 'ex2')}
//               {this.navItem('Example 3', 'ex3')}
//             </ul>
//           </div>
//         </nav>
//       </div>
//     )
//   }
// }
