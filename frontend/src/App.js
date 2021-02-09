import { Route, Switch } from 'react-router-dom'
import Background from './components/Background'
import Blog from './components/Blog'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Notification from './components/Notification'


function App() {

  return (
    <div >
      <NavBar />
      <Background />
      <Notification />
      <main>
        <Switch>
          {/* BLOGPOST */}
          <Route path='/blogposts/:id'>
            <div>saddsaadsas</div>
          </Route>

          {/* BLOG */}
          <Route path='/blogposts'>
            <Blog />
          </Route>

          {/* HOME */}
          <Route path='/' exact={true}>
            <Home />
          </Route>

          {/* Non existing route */}
          <Route path='/' >
            <h1>404</h1>
          </Route>
        </Switch>

      </main>
    </div >
  )
}

export default App
