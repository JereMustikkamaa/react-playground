import { Route, Switch } from 'react-router-dom'
import Background from './components/Background'
import Blog from './components/Blog'
import Blogpost from './components/Blogpost'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Notification from './components/Notification'
import ReactTransitions from './components/ReactTransitions'


function App() {

  return (
    <div >
      <NavBar />
      <Notification />
      <main>
        <Switch>
          {/* BLOGPOST */}
          <Route path='/blogposts/:id'>
            <Background blur_always={true} />
            <Blogpost />
          </Route>

          {/* BLOG */}
          <Route path='/blogposts' >
            <Background blur_always={true} />
            <Blog />
          </Route>

          {/* REACT TRANSITION GROUPS */}
          <Route path='/react-transition-groups' exact={true}>
            <Background key='home' blur_always={false} />
            <ReactTransitions />
          </Route>

          {/* HOME */}
          <Route path='/' exact={true}>
            <Background key='home' blur_always={false} />
            <Home />
          </Route>

          {/* Non existing route */}
          <Route path='/' >
            <Background key='404' blur_always={true} />
            <h1>404</h1>
          </Route>
        </Switch>

      </main>
    </div >
  )
}

export default App
