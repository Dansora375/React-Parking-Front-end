function HoraEntrada() {

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let fecha = date + "/" + month + "/" + year;
    let hour = newDate.getHours();
    let minutes = newDate.getMinutes();
    let seconds = newDate.getSeconds();
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