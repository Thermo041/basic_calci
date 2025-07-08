import styles from "./buttoncont.module.css"

function Buttoncont({setbtn,val}){

  function clicks(i)
  {
    if(i==="C")
    {
      setbtn("")
    }
    else if(i==="=")
  {
    setbtn(eval(val))
  }
    else{
    setbtn(val+i)
    }
  }
    
    let arr=["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."]

    return(
        <>
        <div className={styles.buttoncont}>
                  
                  {arr.map(i=>(
                    <button key={i} onClick={()=>{clicks(i)}}>{i}</button>
                  ))}

                  {/* <button className={styles.button}>1</button>
                  <button className={styles.button}>2</button>
                  <button className={styles.button}>3</button>
                  <button className={styles.button}>4</button>
                  <button className={styles.button}>1</button>
                  <button className={styles.button}>2</button>
                  <button className={styles.button}>3</button>
                  <button className={styles.button}>4</button> */}
                </div>
        </>
    )
}

export default Buttoncont