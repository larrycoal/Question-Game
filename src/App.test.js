import ReactDom from 'react-dom'
import { BrowserRouter } from "react-router-dom"
import store from './store';
import {Provider} from 'react-redux'
import App from './App';
import playerReducer from './store/Reducer/playerReducer';

const AppTest = (
  <Provider store={store}>
      <BrowserRouter>
          <App/>
      </BrowserRouter>
  </Provider>
)
describe("App Component", () => {
  let container

  beforeEach(() => {
      container = document.createElement('div')
      document.body.appendChild(container)
      ReactDom.render(AppTest, container)
  })
  afterEach(() => {
      document.body.removeChild(container);
      container.remove()
  })

  it("Login renders correctly", () => {
      const input = document.querySelectorAll('input')
      const button = document.querySelectorAll('button')
      expect(input).toHaveLength(2)
      expect(input[0].type).toBe("text")
      expect(input[1].type).toBe("password")
      expect(button).toHaveLength(1)
     
  })
  it("renders Home correctly",()=>{
    const input = document.querySelectorAll('input')
    const button = document.querySelectorAll('button')
    expect(input).toHaveLength(2)
    expect(button).toHaveLength(1)
  })
})
describe("reducer",()=>{
  it("login reducer",()=>{
  let player = playerReducer({isAuthenticated:false},{type:"login"})
  expect(player).toEqual({isAuthenticated:true})
  })
  it("logout reducer",()=>{
    let player = playerReducer({isAuthenticated:true},{type:"logout"})
    expect(player).toEqual({isAuthenticated:false})
    })
})