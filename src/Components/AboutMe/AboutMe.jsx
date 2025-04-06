import "./AboutMe.css"
const AboutMe = () => {
  return (
    <div>
        <div className='container2'>
          
    <div className='wrapperAboutMe'>
        <div className='cols cols0'>
          <h1 className='welcome'>Hi There 👋</h1>
          <br/>
          <h2 className='headers'>A Bit About Me </h2>
          <p className='paragraphs'>Full Stack developer ,Specialized In JavaScript ,NodeJS and React.</p><br/>
          <h2 className='headers'>My Story</h2>
          <p className='paragraphs'>I Studied Civil Engineering in the Middle East University ,But after graduation i didn&apos;t see my self in the Civil Engineering field ,Soo i decided to change my career to the development career as i saw my self there and i will be better in this field .</p><br/>
          <p className='paragraphs'>Soo ,I decided to take a full stack BootCamp from MERAKI Academy ,And it was for a period of 6 months within 500 hours of learning and practicing.</p>
          
        </div>
            <div className='cols cols1'>
                <div className='imgboxAboutMe'>
                    <img src='../../public/images/AliImage.png'/>
        
                </div>
            </div>
    </div>
  </div>
    
    </div>
  )
}

export default AboutMe