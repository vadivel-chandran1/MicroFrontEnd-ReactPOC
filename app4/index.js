import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'

const AppRoot = p => {
  console.log('====================================')
  console.log(`props ==> `, p)
  console.log('====================================')
  const s = {
    color: 'green',
    fontSize: '50px',
    fontWeight: 'bold'
  }
  return <div style={s}>Hello From App4 World</div>
}

const reactLifeCycles = singleSpaReact({
  React,
  ReactDOM,
  domElementGetter,
  rootComponent: AppRoot,
  suppressComponentDidCatchWarning: true
})

export const bootstrap = [reactLifeCycles.bootstrap]
export const mount = [reactLifeCycles.mount]
export const unmount = [reactLifeCycles.unmount]

function domElementGetter () {
  const APP_NAME = 'app4'
  const MOUNT_DIV = 'app'

  let el = document.getElementById(APP_NAME)

  if (!el) {
    el = document.createElement('div')
    el.id = APP_NAME
  }

  let app = document.getElementById(MOUNT_DIV)
  if (!app) {
    app = app.createElement('div')
    app.id = MOUNT_DIV
    document.body.appendChild(app)
  }

  app.appendChild(el)

  return el
}

// function domElementGetter () {
//     const APP_NAME = 'app4'
//     const MOUNT_DIV = 'container4'
//     // const APPS_CONTAINER_DIV = 'container43';
//     const EX4_CONTAINER_DIV = 'ex4-container'

//     let app = document.getElementById('app')
//     if (!app) {
//       app = document.createElement('div')
//       app.id = 'app'
//       document.body.appendChild(app)
//     }

//     let ex4ContainerDiv = document.getElementById(EX4_CONTAINER_DIV)
//     if (!ex4ContainerDiv) {
//       ex4ContainerDiv = document.createElement('div')
//       ex4ContainerDiv.id = EX4_CONTAINER_DIV
//       app.appendChild(ex4ContainerDiv)
//     }

//     let appsContainerDiv = document.getElementById(APPS_CONTAINER_DIV)
//     if (!appsContainerDiv) {
//       appsContainerDiv = document.createElement('div')
//       appsContainerDiv.id = APPS_CONTAINER_DIV
//       ex4ContainerDiv.appendChild(appsContainerDiv)
//     }

//     let mountDiv = document.getElementById(MOUNT_DIV)
//     if (!mountDiv) {
//       mountDiv = document.createElement('div')
//       mountDiv.id = MOUNT_DIV
//       appsContainerDiv.appendChild(mountDiv)
//     }

//     let el = document.getElementById(APP_NAME)
//     if (!el) {
//       el = document.createElement('div')
//       el.id = APP_NAME
//     }

//     mountDiv.appendChild(el)

//     return el
//   }
