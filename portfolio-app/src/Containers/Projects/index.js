import React from 'react'
import "./index.css"

const Projects=()=> {
  return (
    <div className='Projects-Container'>
        <h3 className='Projects-title'><strong>PROJECTS</strong></h3>
        <div className='Projects-grid'>
        <div className='Projects-card'>
          <button onClick={()=>window.open("https://drive.google.com/file/d/1dz3wWd1sVwc7--olCD5B8qdgX997iWGZ/view?usp=sharing","_blank","noopener,noreferrer")}><h3>SMART CONTRACT BASED E-VOTING SYSTEM USING BLOCKCHAIN</h3></button>
        </div>
        <div className='Projects-card'>
          <button onClick={()=>window.open("https://drive.google.com/file/d/1bO3yDTWgASU6ujzEeJzMgLLnA1A9UK7y/view?usp=sharing","_blank","noopener,noreferrer")}><h3>COLLISION DETECTION WARNING SYSTEM USING ARDUINO</h3></button>
        </div>
        <div className='Projects-card'>
          <button onClick={()=>window.open("https://github.com/Monika1472/OneZShop/tree/main/practise","_blank","noopener,noreferrer")}><h3>ONE-Z APP</h3></button>
        </div>
        <div className='Projects-card'>
          <button onClick={()=>window.open("https://github.com/Monika1472/Query-Producer-Tool/tree/main","_blank","noopener,noreferrer")}><h3>DATA QUERY TOOL</h3></button>
        </div>
        <div className='Projects-card'>
          <button onClick={()=>window.open("https://github.com/Monika1472/KafkaProducerToolApp","_blank","noopener,noreferrer")}><h3>KAFKA PRODUCER TOOL</h3></button>
        </div>
        <div className='Projects-card'>
          <button onClick={()=>window.open("https://github.com/orgs/Project-Heart/repositories","_blank","noopener,noreferrer")}><h3>HEART DISEASE PREDICTION SYSTEM</h3></button>
        </div>
        </div>
    </div>
  )
}

export default Projects