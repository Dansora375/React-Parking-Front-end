const entryTime = props.entryTime;
function HoraEntrada() {

    let date = entryTime.getDate();
    let month = entryTime.getMonth() + 1;
    let year = entryTime.getFullYear();
    let fecha = date + "/" + month + "/" + year;
    let hour = entryTime.getHours();
    let minutes = entryTime.getMinutes();
    let seconds = entryTime.getSeconds();
    let time = `${hour}:${minutes}:${seconds}`;
    
    // return newDate.toLocaleTimeString()
    //mostrar fecha
    return (
        <>
            <p>{time}<br/>{fecha}</p>
        </>
    )
    //`${date}/${month}/${year}/${time}`
    }

export default HoraEntrada