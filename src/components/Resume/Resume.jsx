import React from 'react'

const Resume = () => {
  return (
    <section className='test bg-primary py-20'>
      <center>
         <object className="test1" data={process.env.PUBLIC_URL + '/Images/Resume-Michael_Hong.pdf'} aria-labelledby="resume" type="application/pdf" ></object>      
      </center>
    </section>
  )
}

export default Resume