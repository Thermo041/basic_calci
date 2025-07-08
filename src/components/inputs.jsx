import styles from "./inputs.module.css"

function Inputs ({val}){


     return(
        <>
          <input type="text" value={val} readOnly className={styles.inputs} />
        </>
     )
}

export default Inputs