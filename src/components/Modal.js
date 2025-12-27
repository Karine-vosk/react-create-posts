import { useNavigate } from 'react-router-dom';
import classes from './Modal.module.css';

function Modal ({children}) {
    const navigate = useNavigate();

    function onHandlerClose () {
        navigate('..');
    }

    return (
        <>
            <div className={classes.backdrop} onClick={onHandlerClose}></div>
            <dialog open className={classes.modal}>
                {children}
            </dialog>
        </>
    )
}

export default Modal;