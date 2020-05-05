import React from 'react'

import Banner from '../../components/Banner'

function Pitch(){
  return(
    <div>
      <Banner />
      <h1>Link alternativo</h1>

      <div><a href="https://storyboarders.com/storyboard/jnx4oj4ebp-testeexport">Veja o Pitch</a></div>

      <video controls="" autoplay="" name="media"><source src="https://digitalizeme.s3-sa-east-1.amazonaws.com/digitalizeme-pitch-investidor.mp4" type="video/mp4"></video>
    </div>
  )
}

export default Pitch