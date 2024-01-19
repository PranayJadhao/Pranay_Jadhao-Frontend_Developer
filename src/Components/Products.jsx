import "../Styles/Products.css"

const Products=()=>{

    const hrStyle = {
        width: '80%',   
        color: 'rgba(255, 179, 0, 0.721)',  
        backgroundColor: 'rgba(255, 179, 0, 0.721)',
        height: '3px' ,
        margin:'10px auto'
          
      };


    return(
<div>
    <div className="text-center">
        <h1 id="ourPro">Our <span id="ourPro1">Products</span></h1>
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        
    </div>
    <div>
        <div className="ourProDiv">
            <div className="Pro">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRtWnTtcSitvTQK0mkGCBqt3oblT7HIErP7Q&usqp=CAU'/>
                <h3>Bita Marketplaces</h3>
                <hr style={hrStyle}/>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
            <div className="Pro">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRtWnTtcSitvTQK0mkGCBqt3oblT7HIErP7Q&usqp=CAU'/>
               
                <h3>Bita Marketplaces</h3>
                <hr style={hrStyle}/>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
            <div className="Pro">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRtWnTtcSitvTQK0mkGCBqt3oblT7HIErP7Q&usqp=CAU'/>
               
                <h3>Bita Marketplaces</h3>
                <hr style={hrStyle}/>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
        </div>
        <div className="ourProDiv1">
        <div className="Pro">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRtWnTtcSitvTQK0mkGCBqt3oblT7HIErP7Q&usqp=CAU'/>
          
                <h3>Bita Marketplaces</h3>
                <hr style={hrStyle}/>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
            <div className="Pro">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRtWnTtcSitvTQK0mkGCBqt3oblT7HIErP7Q&usqp=CAU'/>
             
                <h3>Bita Marketplaces</h3>
                <hr style={hrStyle}/>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
        </div>
    </div>
</div>
    )
}

export default Products;