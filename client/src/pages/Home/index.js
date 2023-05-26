import React from 'react'
import style from "./index.module.css"
import Pages from '../Pages'
import Plan from '../Plan'
import Trainer from '../Trainer'
import { Helmet } from 'react-helmet'

export default function Home() {
  return (
    <>
    <Helmet>
        <title>Home page</title>
    </Helmet>
    <div>
        <div className={style.div}>
            <div className={style.div2}>
                <h1>REAL FITNESS<br></br>
DEPENDS ON EXERCISE</h1><br></br>

            </div>

        </div>
    </div>
    <Pages></Pages>
    <Plan></Plan>
    <Trainer></Trainer>
    </>
  )
}
