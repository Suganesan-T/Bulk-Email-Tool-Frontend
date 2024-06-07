import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Content.css';
import { Link } from 'react-router-dom';
import img7 from '../Images/7.png';
import img8 from '../Images/8.png';
import img9 from '../Images/9.jpg';
import img10 from '../Images/10.png';
import img11 from '../Images/11.png';
import img12 from '../Images/12.jpg';
import img13 from '../Images/13.png';
import Footer from './Footer';
import Header from './Header';


function Content() {
  return (
    <div>
      <div className='content-page'>
      <Header />

      <div className="container my-5">
        {/* Introductory Section */}
        <div className="text-center mb-5">
          <h1 className="font-weight-bold">Streamlined Email Marketing with MailWare</h1>
          <p className="lead" style={{ color: 'white' }}>
            In today's fast-paced digital world, managing email campaigns efficiently is crucial for businesses of all sizes. MailWare is designed to revolutionize your email marketing efforts by providing a comprehensive, all-in-one solution. With MailWare, you can easily manage and send bulk emails to a large audience without the hassle of manual processes. Here's how MailWare can transform your email marketing strategy:
          </p>
          <hr className="featurette-divider mt-5" />
        </div>

        {/* Features Sections */}
        {sections.map((section, index) => (
          <div key={index} className="row featurette mb-5">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                {section.title}
              </h2>
              <br />
              <p className="lead">{section.content}</p>
            </div>
            <div className="col-md-5 mb-3">
              <img src={section.image} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" alt="Feature" width="500" height="500" />
            </div>
            <hr className="featurette-divider mt-3" style={{color: 'black'}} />
          </div>
        ))}

        {/* Call to Action */}
        <div className="text-center mt-5">
          <Link to="/plans" className="btn btn-primary btn-lg">
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
    
  );
}

const sections = [
  {
    title: "Effortless Email Campaign Management",
    subtitle: "Simplify your workflow.",
    content: "MailWare simplifies the process of creating and managing email campaigns. Whether you're targeting a small group or a vast audience, MailWare's user-friendly interface allows you to design, schedule, and send emails with just a few clicks. Say goodbye to the tedious task of manually adding recipients and organizing emails one by one.",
    image: img7,
  },
  {
    title: "Bulk Emailing Made Easy",
    subtitle: "Reach everyone at once.",
    content: "The core feature of MailWare is its ability to handle bulk emailing seamlessly. You can send thousands of emails simultaneously, ensuring your message reaches your entire audience promptly. This feature is particularly useful for businesses looking to announce new products, share important updates, or promote special offers.",
    image: img8,
  },
  {
    title: "Flexible Recipient Management",
    subtitle: "Manage with ease.",
    content: "With MailWare, you have the flexibility to manage your recipient list efficiently. You can either manually type the recipients' email addresses or upload a CSV file containing the details. This versatility saves time and reduces the risk of errors, making your email campaigns more reliable and effective.",
    image: img9,
  },
  {
    title: "Real-Time Analytics and Reporting",
    subtitle: "Monitor your success.",
    content: "Track the performance of your email campaigns with MailWare's robust analytics and reporting tools. Gain insights into open rates, click-through rates, and overall engagement to understand what works best for your audience. Use this data to refine your strategies and achieve better results over time.",
    image: img12,
  },
  {
    title: "Secure and Reliable",
    subtitle: "Your data is safe with us.",
    content: "At MailWare, we prioritize the security and privacy of your data. Our platform ensures that your email lists and campaign data are protected with advanced security measures. You can trust MailWare to deliver your emails reliably, without worrying about data breaches or delivery failures.",
    image: img10,
  },
  {
    title: "24/7 Support",
    subtitle: "We’re here for you.",
    content: "Our dedicated support team is available around the clock to assist you with any questions or issues you may encounter. Whether you need help setting up your first campaign or troubleshooting an issue, we're here to ensure your experience with MailWare is smooth and successful.",
    image: img11,
  },
  {
    title: "Elevate Your Email Marketing",
    subtitle: "Reach new heights.",
    content: "By choosing MailWare, you're opting for a powerful tool that streamlines your email marketing process and maximizes your reach. Focus on crafting compelling messages and let MailWare handle the rest. Experience the ease and efficiency of automated email marketing with MailWare.",
    image: img13,
  }
];

export default Content;
