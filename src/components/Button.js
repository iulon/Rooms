import {ReactComponent as Send} from '../images/svg/send.svg'
export default function Button({text, customClass, customStyle, onClick}) {
    return (
       <button
           onClick={onClick}
           className={` Button ${customClass ? customClass : ""}`}>
            {text}
            <Send className='send'/>
        </button>
    );
} 