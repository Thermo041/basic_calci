// import { useState } from 'react'

import './App.css'

import styles from "./App.module.css"

import Inputs from './components/inputs'

import Buttoncont from './components/buttoncont'
import { use, useState } from 'react'

function App() {

  let [btn,setbtn]=useState("")

  return (
    <>
      <div className={styles.cont}>

       <Inputs val={btn}/>

       <Buttoncont setbtn={setbtn} val={btn} />

      </div>
    </>
  )
}

export default App
