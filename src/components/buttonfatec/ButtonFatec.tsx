import './ButtonFatec.css' // className='button-fatec'
import styles from './ButtonFatec.module.css' // className={styles.buttonFatec}

interface Props {
    type: 'submit' | 'button' | 'reset'
    label: string
}

function ButtonFatec({type,label}:Props){
    return (
        <button 
        className={styles.buttonFatec}
        type={type}>
            {label}
        </button>
    )
}

export default ButtonFatec