export default function Card({
    degree = "none",
    colour ="purple",
    font = "0",
    image = "icon",
    image="icon/personTwo.png"
}) {
    return(
        <div style={{backgroundColor: coluor, fontSize:font}}>
            {
                colour === "red" ?      <img src={'icon/person.png'} width = '50'/> :
                colour === "blue" ?     <img src={'icon/personThree.png'} width = '50'/> :
                                        <img src={image} width = '50'/>
            }
        </div>
    )
 }