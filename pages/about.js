import Head from 'next/head'
import styles from '@/styles/About.module.css'
import data from '../data/employee.json'
import { useState } from 'react'
import Banner from '@/components/Card/about'
import Link from 'next/link'

export default function About(){
   const [person, setPerson] = useState([...data]);
   return(
      <>
      <Head>
        <title>Team Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <nav className={styles.nav}>
          <span><Link href="/">Home</Link></span>
          <span><Link href="about">About</Link></span>
        </nav>
        <div className={styles.content}>
            {
              person && person.map((info, index) => {
                if(info.experience === 2){
                  return(
                     <Banner key={index} company={info.companyName}  department={info.department} name={info.name} font="10px"/>
                  )
                }
              })
            }
        </div>
      </main>
    </>
   ) 
}