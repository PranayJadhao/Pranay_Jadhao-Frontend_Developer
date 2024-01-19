import '../Styles/Join.css'

const Join=()=>{
    return (
        <div>
        <div id='join'>
            <div id='joinleft'>
                <h2>Join our Community</h2>
            </div>
            <div id='joinright'>
                <img src='https://icones.pro/wp-content/uploads/2021/05/icones-de-messagerie-jaune.png'/>
                <img src='https://www.clipartmax.com/png/small/134-1340259_follow-oths-marching-panthers-on-twitter-twitter-logo-gold-color.png'/>
                <img src='data:image/png;base64,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'/>
            </div>
        </div>

        <div id='end'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB2Zq3zv6szVuc74GNP9eatSRZABlDKdhYng&usqp=CAU'></img>
       <p>2023 All rights reserved</p>
        </div>
        </div>
    )
}

export default Join;