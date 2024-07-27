import axios from "axios"
import { useState, useEffect } from "react"
import Button from "../components/button"
import Title from "../components/title"

type QoutesFragmentProps = {
    onClickBack: () => void
}

const QoutesFragment = (props: QoutesFragmentProps) => {

    const [welcomeMessage, setWelcomeMessage] = useState("");
    const [quotes, setQuotes] = useState("");

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
    
        axios.get(`${import.meta.env.VITE_SERVICE_URI}/welcome`, {
          signal: signal
        }).then(res => {
          setWelcomeMessage(res.data.message)
          setQuotes(res.data.quotes)
        }).catch(_ => {
          window.location.href = "/login";
        })
        
    
        return () => {
          controller.abort();
        }
      }, [])
  

    return (
        <div>
            <Title text={welcomeMessage} />
            <p className="text-center text-wrap font-bold text-slate-400">{quotes}</p>
            <Button text='Back' type="button" onClick={props.onClickBack} />
        </div>
    )
}

export default QoutesFragment