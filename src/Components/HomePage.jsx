import React from 'react';
import Header from './Header';
import '../CSS/Homepage.css';
import { Link } from 'react-router-dom';
import img from '../Images/1.png'
import img2 from '../Images/2.png'
import img3 from '../Images/3.png'
import img4 from '../Images/4.png'
import img5 from '../Images/5.png'
import img6 from '../Images/6.png'
import img14 from '../Images/14.png';
import img15 from '../Images/15.png';
import img16 from '../Images/16.png';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
  return (
    <div className="home-page">
      <Header />

      {/* Carousel */}
      <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel" data-bs-interval="5000">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active"> 
            <img src={img} className="d-block w-100" alt="Slide 1" width="1500" height="600" aria-hidden="true" preserveAspectRatio="xMidYMid slice"></img>
            <div className="container">
              <div className="carousel-caption text-start">
                <h1 className="carousel-heading" style={{color:"black"}}>Revolutionize Your Email Marketing</h1>
                <p className="carousel-text" style={{color: "silver"}} >With MailWare, sending bulk emails has never been easier. Reach thousands of recipients with just one click.</p>
                <p><Link className="btn btn-lg btn-primary" to="/plans">Get Started Now</Link></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="Slide 2" width="1500" height="600"/>
            <div className="container">
              <div className="carousel-caption">
                <h1 className="carousel-heading" style={{color:'white'}}>Effortless Bulk Emailing</h1>
                <p className="carousel-text" style={{color:`orange`}} >Type recipients manually or upload a CSV file to effortlessly send emails to a large audience.</p>
                <p><Link className="btn btn-lg btn-primary" to="/features">Learn More</Link></p>
              </div>  
            </div>
          </div>
          <div className="carousel-item ">
            <img src={img4} className="d-block w-100" alt="Slide 3" width="1500" height="600" />
            <div className="container">
              <div className="carousel-caption text-end mt-5">
                <h1 className="carousel-heading">Boost Your Reach</h1>
                <p className="carousel-text " style={{color:'black'}}>Enhance your communication strategy and connect with your audience like never before.</p>
                <p><Link className="btn btn-lg btn-primary" to="/features">Browse Features</Link></p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Marketing content */}
      <div className="container marketing mt-3">
        <div className="row">
          <div className="col-lg-4 text-center">
            <img src={img16} className="bd-placeholder-img rounded-circle" alt="Placeholder" width="150" height="140" />
            <h2 className="fw-normal">Simple & Intuitive</h2>
            <p>MailWare's user-friendly interface makes it easy for anyone to send bulk emails without any hassle.</p>
            {/* <p><a className="btn btn-primary" href="#">Learn More »</a></p> */}
          </div>
          <div className="col-lg-4 text-center">
            <img src={img15} className="bd-placeholder-img rounded-circle" alt="Placeholder" width="150" height="140" />
            <h2 className="fw-normal">Powerful Features</h2>
            <p>Utilize advanced features like CSV upload and recipient management to streamline your email campaigns.</p>
            {/* <p><a className="btn btn-primary" href="#">View Features »</a></p> */}
          </div>
          <div className="col-lg-4 text-center">
            <img src={img14} className="bd-placeholder-img rounded-circle" alt="Placeholder" width="150" height="140" />
            <h2 className="fw-normal">Secure & Reliable</h2>
            <p>Trust MailWare to securely handle your data and ensure your emails reach the intended recipients.</p>
            {/* <p><Link className="btn btn-primary" to="/plans">Get Started »</Link></p> */}
          </div>
        </div>

        {/* Featurettes */}
        <hr className="featurette-divider mt-5 mb-5" />
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">Email Marketing Made Easy <span className="text-muted">— Simplify your workflow.</span></h2><br></br>
            <p className="lead">MailWare offers an all-in-one solution to manage and send bulk emails effectively. No more manual efforts, just streamlined email marketing.MailWare simplifies the process of creating and managing email campaigns. Whether you're targeting a small group or a vast audience, MailWare's user-friendly interface allows you to design, schedule, and send emails with just a few clicks. Say goodbye to the tedious task of manually adding recipients and organizing emails one by one.</p>
          </div>
          <div className="col-md-5">
            <img src={img3} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" alt="Placeholder" />
          </div>
        </div>
        <hr className="featurette-divider mt-5 mb-5" />
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">Advanced Analytics <span className="text-muted">— Monitor your success.</span></h2><br></br>
            <p className="lead">Track the performance of your email campaigns with MailWare's robust analytics and reporting tools. Gain insights into open rates, click-through rates, and overall engagement to understand what works best for your audience. Use this data to refine your strategies and achieve better results over time.

            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img src={img5} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" alt="Placeholder" />
          </div>
        </div>
        <hr className="featurette-divider mt-5 mb-5" />
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">24/7 Support <span className="text-muted">— We’re here for you.</span></h2><br></br>
            <p className="lead">Our dedicated support team is available around the clock to assist you with any questions or issues you may encounter. Whether you need help setting up your first campaign or troubleshooting an issue, we're here to ensure your experience with MailWare is smooth and successful.</p>
          </div>
          <div className="col-md-5">
            <img src={img6} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" alt="Placeholder" />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default HomePage;
