import styles from "./AddAtomButtons.module.css"
import Atom from "../Atom"



export default function AddAtomButton(props){

    const AtomButtonsArray = ["H","C","O","N","P"]
    
    return(
        
        <div className={styles.MainContainer}>

            {AtomButtonsArray.map((el) => {
                return(
                    <div className={styles.ButtonContainer}>

                    <Atom text = {el} className={styles.Atom}/>
    
                    <div className={styles.InnerContainer}>
    
                        <button id={styles.Add1ButtonContainer} onClick={() => props.AddNewAtomState(el,1)}>
    
                            <svg className={styles.Add1Vector} viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 20.8225H46V26.7315H0V20.8225Z" fill="url(#paint0_linear_25_55)"/>
                                <path d="M25.9605 0.00876869L25.8922 47L20.1078 46.9912L20.176 0L25.9605 0.00876869Z" fill="url(#paint1_linear_25_55)"/>
                                <defs>
                                <linearGradient id="paint0_linear_25_55" x1="9.60759" y1="8.225" x2="40.7665" y2="41.729" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#0CC5FF" stop-opacity="0.97"/>
                                <stop offset="1" stop-color="#05FF69" stop-opacity="0.67"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_25_55" x1="9.60759" y1="8.225" x2="40.7665" y2="41.729" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#0CC5FF" stop-opacity="0.97"/>
                                <stop offset="1" stop-color="#05FF69" stop-opacity="0.67"/>
                                </linearGradient>
                                </defs>
                            </svg>
    
                        </button>
    
                        <button id={styles.Add2ButtonContainer} onClick={() => props.AddNewAtomState(el,2)}>
    
                            <svg className={styles.Add2Vector} viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 12.4049H27V15.9252H0V12.4049Z" fill="url(#paint0_linear_44_2)"/>
                                <path d="M15.2377 0.0052239L15.1976 28L11.8024 27.9948L11.8425 0L15.2377 0.0052239Z" fill="url(#paint1_linear_44_2)"/>
                                <defs>
                                <linearGradient id="paint0_linear_44_2" x1="13.5" y1="0" x2="13.5" y2="28" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#F8C617" stop-opacity="0.56"/>
                                <stop offset="1" stop-color="#FF3D00" stop-opacity="0.97"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_44_2" x1="13.5" y1="0" x2="13.5" y2="28" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#F8C617" stop-opacity="0.56"/>
                                <stop offset="1" stop-color="#FF3D00" stop-opacity="0.97"/>
                                </linearGradient>
                                </defs>
                            </svg>
    
                        </button>
    
                    </div>
    
                </div>
                )
            })}    
            
        </div>

    )
}