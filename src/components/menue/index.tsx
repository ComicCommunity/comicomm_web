import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import React from "react"

type linkset = { text: string, url: string, isLocal: Boolean }

const menuesetli: linkset[] = [
    { 
        text: "CC08参加サークル一覧",
        url: "/circlecut",
        isLocal: true 
    },
    { 
        text: "こみこみについて", 
        url: "/aboutus", 
        isLocal: true 
    }, 
    { 
        text: "一般参加の方へ", 
        url: "/participation", 
        isLocal: true 
    }, 
    { 
        text: "サークル参加の方へ", 
        url: "/forcircle", 
        isLocal: true 
    }, 
    { 
        text: "Twitter", 
        url: "https://twitter.com/ComiCommKyoto", 
        isLocal: false 
    },

]

const single = (menue: linkset) =>
    <li>
        {menue.isLocal ? <Link to={menue.url}>{menue.text}</Link> : <a href={menue.url}>{menue.text}</a>}
    </li>

const menue =
    <div className="menue">
        <Link to="/">
            <StaticImage className="menue_logo" src="../../../static/images/hidariue.png" alt="hidariue" placeholder="blurred" objectFit="contain" />
        </Link>
        <ul>{menuesetli.map(set => single(set))}</ul>
    </div>

export default menue
