import styles from '@/styles/About.module.css'

export default function Banner({
    company = "unemployed",
    department ="unemployed",
    name = "N/A",
    image= "icon/apple.png",
    font = "0"
}) {
    return(
        <div style={{fontSize:font}}>
            {
                company === "Apple" ?         <img src={'icon/apple.png'} /> :
                company === "Microsoft" ?     <img src={'icon/microsoft.png'} /> :
                company === "Samsung" ?       <img src={'icon/samsung.png'} /> :
                                                <img src={image}/>
            }
            <div><span className={styles.subheading}>Name</span><span>{name}</span></div>
            <div><span className={styles.subheading}>Department</span><span>{department}</span></div>
        </div>
    )
 }