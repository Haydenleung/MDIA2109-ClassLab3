export default function Card({
    degree = "none",
    colour ="purple",
    font = "0",
    image= "icon/person-01.svg",
    studentNumber= ""
}) {
    return(
        <div style={{fontSize:font}}>
            {
                studentNumber === "A0004567" ?  <img src={'icon/person01.svg'} /> :
                studentNumber === "A0001234" ?  <img src={'icon/person02.svg'} /> :
                studentNumber === "A0007890" ?  <img src={'icon/person03.svg'} /> :
                studentNumber === "A0007828" ?  <img src={'icon/person04.svg'} /> :
                studentNumber === "A0003425" ?  <img src={'icon/person05.svg'} /> :
                                                <img src={image}/>
            }
            <div>{degree}</div>
        </div>
    )
 }