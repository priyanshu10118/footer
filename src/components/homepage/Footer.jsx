import React from 'react'

function Footer() {
  return (
    <>
    <footer classname="site-footer bg-light">
    <div classname="container-fluid">

      <div classname="row">
        <div classname="col-md-6 mb-2">
          <h3>Your feedback is valuable to us.<br/>
            Could you please let us know how we did?</h3>
        </div>
        <div classname="col-md-4 padding mb-3 pr-6">
          <input type="email" placeholder="Enter your email"/>

        </div>
        <div classname="col-md-2 ">
          <button classname="sendFooterBtn">Send</button>
        </div>
      </div>
      <div classname="line">
        <hr/>
      </div>
    </div>
    <br/> 

    <div classname="row">
      <div classname="col-md-4 padding mt-4">
        <div classname="padding ml-3 ">
          <img src="footer images/newext.png" alt=""/>
          <br />
          <h3><br/>
            Operated by:<span> MSC KIIT</span><br/>
            Email:<span> support@msc.ac.in</span><br/>
            Phone no:<span> (+91)3856573974</span><br/></h3>
            <span>License No. 8292A-@BGHA<br/>
            Signed on January 02, 2022</span> <br/>
          <br/>

          <div classname ="icon" >
            <img classname="tw" src="footer images/twitter.png" alt="" />&nbsp&nbsp&nbsp&nbsp
            <img classname="insta" src="footer images/insta.png" alt="" />&nbsp&nbsp&nbsp&nbsp
            <img classname="git" src="footer images/git.png" alt="" />&nbsp&nbsp&nbsp&nbsp
            <img classname="mail" src="footer images/mail.png" alt="" />
          </div>
        </div>

      </div>

      <div classname="col-md-8 padding pl-4">
        <div classname="row">
          <div classname="col-md-3 ml-auto padding mt-4 padding pl-4">
            <h2 classname="footer-heading"><b>Business</b></h2>
            <a href="#">Business Trends</a><br />
            <a href="#">Startup</a><br />
            <a href="#">Leaders</a><br />
            <a href="#">Work Culture</a><br />
          </div>
          <div classname="col-md-3 ml-auto padding mt-4 padding pl-4">
            <h2 classname="footer-heading "><b>Technnology</b></h2>
            <a href="#">Discover</a><br />
            <a href="#">Gadgets</a><br />
            <a href="#">Video Games</a><br />
            <a href="#">Automobile</a><br />
          </div>
          <div classname="col-md-3 ml-auto padding mt-4 padding pl-4">
              <h2 classname="footer-heading "><b>Travel</b></h2>
            <a href="#">Discovery</a><br />
            <a href="#">Flights and Hotels</a><br />
            <a href="#">Tour & Destinations</a><br />
            <a href="#">Experience</a><br />
          </div>
          <div classname="col-md-3 ml-auto padding mt-4 padding pl-4">
             <h2 classname="footer-heading "><b>Entertainment</b></h2>
            <a href="#">Music & Podcasts</a><br />
            <a href="#">Art & Design</a><br />
            <a href="#">Movies</a><br />
          </div>

          <div classname="col-md-3 ml-auto padding mt-4 padding pl-4">
            <h2 classname="footer-heading "><b>Politics</b></h2>
            <a href="#">Capital Journal</a><br />
            <a href="#">National Security</a><br />
            <a href="#">Politics Video</a><br />
          </div>
          <div classname="col-md-3 ml-auto padding mt-4 padding pl-4">
            <h2 classname="footer-heading "><b>Sports</b></h2>
            <a href="#">Football</a><br />
            <a href="#">Racing</a><br />
            <a href="#">Basketball</a><br />
            <a href="#">Cricket</a><br />
          </div>
          <div classname="col-md-3 ml-auto padding mt-4 padding pl-4">
            <h2 classname="footer-heading "><b>Lifestyle</b></h2>
            <a href="#">Family</a><br />
            <a href="#">Psychology</a><br />
            <a href="#">Fashion</a><br />
            <a href="#">Food & Culture</a><br />
          </div>
          <div classname="col-md-3 ml-auto padding mt-4 padding pl-4">
            <h2 classname="footer-heading "><b>Help Center</b></h2>
            <a href="#">About Us</a><br />
            <a href="#">Contact</a><br />
            <a href="#">Privacy Policy</a><br />
            <a href="#">Terms & Conditions</a><br />
          </div>
        </div>
      </div>
    </div>
  </footer>
</>
    
  )
}

export default Footer