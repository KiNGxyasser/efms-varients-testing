import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {legacy_createStore} from 'redux'
import rootReducer from './redux/reducer.js'
import {Provider} from 'react-redux'


const store = legacy_createStore(rootReducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
