import styles from './index.module.css'

interface Props {
    type: 'text' | 'email' | 'number'
    placeHolder: string
    defaultValue: string
}

export default function InputFatec({type, placeHolder, defaultValue}: Props){
    return (
        <input 
        className={styles.inputFatec}
        type={type} 
        placeholder={placeHolder} 
        defaultValue={defaultValue} />
    )
}