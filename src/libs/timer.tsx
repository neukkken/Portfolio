import React from "react";

export const Timer = ({initialTime, onTimeUp}: any) => {
    const [time, setTime] = React.useState(initialTime);

    React.useEffect(() => {
        if(time> 0){
            const timerId = setTimeout(() => {
                setTime(time - 1)
            }, 1000)

            return () => clearTimeout(timerId)
        }else{
            onTimeUp(() => setTime(initialTime))
        }
    }, [time, initialTime, onTimeUp])

    return(
        <>
            <h1>Tiempo {time}</h1>
        </>
    )
}