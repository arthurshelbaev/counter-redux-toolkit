import { configureStore, createReducer } from '@reduxjs/toolkit';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import App from './components/App'
import "./styles.css"

const root = ReactDOM.createRoot(document.getElementById('root'));

const initialState = {
  number: 0,
  theme: "dark"
}

const counterReducer = createReducer(initialState, (builder) => {
  builder.addCase("plus", (state, action) => {
    state.number += 1
  })
  .addCase("minus", (state, action) => {
    if (state.number > 0) state.number -= 1 
    else return state
  })
  .addCase("breeak", (state, action) => {
    state.number = 0
  })
})

const store = configureStore({
  reducer: counterReducer
})

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)