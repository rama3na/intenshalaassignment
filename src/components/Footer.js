import React from 'react'
import '../components/Footer.css'
function Footer() {
  return (
    <div className="bg-dark  text-white text-center ">
      

      <div className="container">
        <div className="foot0">
          <div className="foot1">
          <img src="https://yt3.googleusercontent.com/ytc/AGIKgqN2mSr-5HfhYdQLSj_KYpgpxy8hijd8PZbRmkW5=s900-c-k-c0x00ffffff-no-rj" width="50px" className='mt-2' alt=""/>
          </div>
          <div className="foot2">
          <div className="drop1">
            <div className="dropdown ">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/India-flag-a4.jpg/1024px-India-flag-a4.jpg" width="40px" alt="" />
                <button className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown">India</button>
                <ul className="dropdown-menu">
                    <li><a href="#" className="text-decoration-none text-white">India</a></li>
                     <li><a href="#" className="text-decoration-none text-white">Africa</a></li>
                    <li><a href="#" className="text-decoration-none text-white">America</a></li>
                    
                </ul>
            </div>
            
                <div className="dropdown">
                    <img src="" width="40px" alt="" />
                    <button className="btn btn-info dropdown-toggle border" data-bs-toggle="dropdown">English</button>
                    <ul className="dropdown-menu">
                    <li><a href="#" className="text-decoration-none text-white">Telugu</a></li>
                     <li><a href="#" className="text-decoration-none text-white">Hindi</a></li>
                    <li><a href="#" className="text-decoration-none text-white">Portugal</a></li>
                         
                    </ul>
                </div>
            
        </div>
          </div>
        </div>
      </div>

      <div className="row mt-3">
            <div className="col-sm-3">
            <h5>About Foodie</h5>
             <a href="#" class="text-decoration-none text-white">Who we are</a><br/>
             <a href="#" class="text-decoration-none text-white">Blog</a><br/>
             <a href="#" class="text-decoration-none text-white">Work with us</a><br/>
             <a href="#" class="text-decoration-none text-white">Investor relations</a><br/>
             <a href="#" class="text-decoration-none text-white">Report fraud</a><br/>
             <a href="#" class="text-decoration-none text-white">Contact us</a>
            </div>
            <div class="col-sm-3">
            <h5>Foodie universe</h5>
             <a href="#" class="text-decoration-none text-white">Foodie</a><br/>
             <a href="#" class="text-decoration-none text-white">Feeding india</a><br/>
             <a href="#" class="text-decoration-none text-white">Hyperpure</a><br/>
             <a href="#" class="text-decoration-none text-white">Foodieland</a><br/>
              
        </div>
        <div class="col-sm-3">
            <h5>For Restaurents</h5>
             <a href="#" class="text-decoration-none text-white">Partner with us</a><br/>
             <a href="#" class="text-decoration-none text-white">Apps for you</a><br/>
             <h5 class="mb-3 mt-3">For Enterprises</h5>
             <a href="#" class="text-decoration-none text-white">Foodie for work</a><br/>
            
        </div>
        <div class="col-sm-3">
            <h5>Learn more</h5>
             <a href="#" class="text-decoration-none text-white">Privacy</a><br/>
             <a href="#" class="text-decoration-none text-white">Security</a><br/>
             <a href="#" class="text-decoration-none text-white">Terms</a><br/>
             <a href="#" class="text-decoration-none text-white">Sitemap</a><br/>
              
        </div>
      </div>

    </div>
  )
}

export default Footer;