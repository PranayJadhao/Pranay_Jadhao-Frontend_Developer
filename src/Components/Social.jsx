import "../Styles/Social.css"

const Social=()=>{
    return(
        <div >
{/* <h1 className="border-red-800">
    YOUR GETWAY TO <br></br> DEFI ON BITCOIN
</h1> */}
<img id="heroImg" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGlMijvQo6I0WeGxyD-Tpt96826hGYom4B0w&usqp=CAU'/>
<div id="container" >
<h1>YOUR GETWAY</h1>
<h1>TO</h1>
<h1>DEFI ON <span id="bitcoin">BITCOIN</span> </h1>
</div>

<div id="socialEnd" className="text-center mx-5">
    <p className="w-100">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
</div>

<div className="text-center">
    <button id="getBtn" >Get Started </button>
</div>
        </div>

    )
}

export default Social;