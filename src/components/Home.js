import React from 'react'
import './home.css'
import {FaSearch} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {GrRestaurant} from 'react-icons/gr'
function Home() {
  return (
    <div > 
    <div className='head0'>
           
      <div  className="text  ">
         <h1 className=" text-white mt-5 me-5 ">Discover the best food & drinks in hyderabad</h1>
 </div>
 <div className="text">
 <form action="search" className="space w-50  border-black " >
    
   <input type="search" placeholder="Search for restaurent,cusine or a dish " className="form-control me-2 ms-2 mt-5 "  aria-label="  open search" />
 </form>
 
</div>
  
    </div>

    {/*cards */}
    <div className="container mt-4">
    <div className="row">
        <div className="col-sm-4">
            <div className="card  rounded shadow  ">
                <img src="https://paradise-biryani.s3.ap-south-1.amazonaws.com/Biryani.jpg"    className="w-100 pic" height='240px' alt=""/>
                <div className="card-body"> 
                    <h4>Chicken biryani</h4>
                    <p><GrRestaurant/>  Mekong restaurent</p>
                    <p>⭐⭐⭐⭐★</p>
                    <button className="btn btn-danger mx-auto">Order</button>
                </div>
            </div>
        </div>
        <div className="col-sm-4">
            <div className="card  rounded shadow" >
                <img src=" https://media.istockphoto.com/id/467633623/photo/mutton-gosht-biryani-a-rice-preparation-with-meat-and-spices.jpg?s=612x612&w=0&k=20&c=vFfNgN__VRlyG-riz7IVlj1L0j5t0W30NbOeCfDioHg=" height='240px'   className="w-100 pic" alt=""/>
                <div className="card-body"> 
                    <h4>Mutton biryani</h4>
                    <p><GrRestaurant/> Dum punkh Begums</p>
                    <p>⭐⭐⭐★★</p>
                    <button className="btn btn-danger mx-auto">Order</button>
                </div>
            </div>
        </div>
        <div className="col-sm-4">
            <div className="card  rounded shadow">
                <img src="https://media.istockphoto.com/id/1364069594/photo/fish-biriyani.jpg?s=612x612&w=0&k=20&c=GP24S04qZQsXldbC334ubMkAXbs47vGUtJJ62nodsls="  height='240px'  className="w-100 pic" alt=""/>
                <div className="card-body">
                    <h4>Fish biryani</h4>
                    <p><GrRestaurant/> Amara restaurent</p>
                    <p>⭐⭐⭐★★</p>
                    <button className="btn btn-danger mx-auto">Order</button>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="container mt-4">
    <div className="row">
        <div className="col-sm-4">
            <div className="card  rounded shadow  ">
                <img src=" https://media.istockphoto.com/id/1223571600/photo/thai-tom-yum-fried-rice-or-prawn-biryani-in-white-plate-on-black-slate-backdrop-thailand.jpg?s=612x612&w=0&k=20&c=o9bthcBjj5P-u6nUz9Op8WEUbFzdSRy99EhXj_1bI38="    className="w-100 pic" height='240px' alt=""/>
                <div className="card-body"> 
                    <h4>Prawns biryani</h4>
                    <p><GrRestaurant/> Paradise</p>
                    <p>⭐⭐⭐★★</p>
                    <button className="btn btn-danger mx-auto">Order</button>
                </div>
            </div>
        </div>
        <div className="col-sm-4">
            <div className="card  rounded shadow" >
                <img src="  https://spicecravings.com/wp-content/uploads/2020/10/Egg-Biryani-Featured-1.jpg" height='240px'   className="w-100 pic" alt=""/>
                <div className="card-body"> 
                    <h4>Egg biryani</h4>
                    <p><GrRestaurant/> Absolute barbeque</p>
                    <p>⭐⭐⭐★★</p>
                    <button className="btn btn-danger mx-auto">Order</button>
                </div>
            </div>
        </div>
        <div className="col-sm-4">
            <div className="card  rounded shadow ">
                <img src="https://static.wixstatic.com/media/91e241_0cf76aa5613b4055be2f922f71edeaa0~mv2.jpg/v1/crop/x_0,y_1,w_518,h_378/fill/w_560,h_408,al_c,lg_1,q_80,enc_auto/Ustaadi%20Hyderabadi%20Veg%20Biryani.jpg"  height='240px'  className="w-100 pic" alt=""/>
                <div className="card-body">
                    <h4>Vegg biryani</h4>
                    <p><GrRestaurant/> Barbeque nation</p>
                    <p>⭐⭐⭐★★</p>
                    <button className="btn btn-danger mx-auto">Order</button>
                </div>
            </div>
        </div>
    </div>
</div>



<div className="container mt-5   ">
<h1 className="display-6">Popular localities in and around  <b>Hyderabad</b></h1>
<div className="row">
    <div className="col-sm-4 ">
        <a href="#" className="text-decoration-none">
            <div  className="head1">
            <div className="head2 text-black ">
                <h5>Jubilee Hills</h5>
                <p>434 Places</p>
            </div>
            
        </div>
        </a>
        <a href="#" className="text-decoration-none">
            <div  className="head1">
            <div className="head2 text-black">
                <h5>Kukatpally</h5>
                <p>434 Places</p>
            </div>
            
        </div>
        </a>
        <a href="#" className="text-decoration-none">
            <div  className="head1">
            <div className="head2 text-black">
                <h5>Hitech City</h5>
                <p>434 Places</p>
            </div>
            
        </div>
        </a>
    </div>
    <div className="col-sm-4">
        <a href="#" className="text-decoration-none">
            <div  className="head1">
            <div className="head2 text-black">
                <h5>Gachibowli</h5>
                <p>434 Places</p>
            </div>
             
        </div>
        </a>
        <a href="#" className="text-decoration-none">
            <div  className="head1">
            <div className="head2 text-black">
                <h5>Madapur</h5>
                <p>434 Places</p>
            </div>
             
        </div>
        </a>
        <a href="#" className="text-decoration-none">
            <div  className="head1">
            <div className="head2 text-black">
                <h5>Begumpet</h5>
                <p>434 Places</p>
            </div>
            
        </div>
        </a>
    </div>
    <div className="col-sm-4">
        <a href="#" className="text-decoration-none">
            <div  className="head1">
            <div className="head2 text-black">
                <h5>Banjara Hills</h5>
                <p>434 Places</p>
            </div>
            
        </div>
        </a>
        <a href="#" className="text-decoration-none">
            <div  className="head1">
            <div className="head2 text-black">
                <h5>KOndapur</h5>
                <p>434 Places</p>
            </div>
            
        </div>
        </a>
        <div className="drop  w-100 h-25 "  >
        
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">more</button>
                <ul className="dropdown-menu dropdown-menu-dark">
                    <li><a href="#" className="dropdown-item">Golkonda</a></li>
                    <hr />
                    <li><a href="#" className="dropdown-item">Charminar</a></li>
                    <li><a href="#" className="dropdown-item">Tand Bund</a></li>
                </ul>
            </div>
        
    </div>
    </div>
</div>
</div>
   </div>
  );
}

export default Home;