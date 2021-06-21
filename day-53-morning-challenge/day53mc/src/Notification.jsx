import { useEffect, useRef } from "react"

export default function Notification({error, text, showNotificatoin, setShowNotification}){
    let popupRef = useRef();
    useEffect(() => {
        if(showNotificatoin === true) {
            popupRef.current.style.opacity = 10;
            let intervalID = setTimeout(() => setShowNotification(false), 2000);
            popupRef.current.addEventListener('mouseover', () => {
                clearTimeout(intervalID);
            });
            popupRef.current.addEventListener('mouseout', () => {
                intervalID = setTimeout(() => setShowNotification(false), 2000);
            })

            
        }else popupRef.current.style.opacity = 0; 
    },[showNotificatoin])
    return (
        <div ref={popupRef} className={`notification-popup ${error ? 'red-bg' : 'black-bg'} `}>{text}</div>
    )
}