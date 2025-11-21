import React from "react";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-5 gap-8">

        {/* About */}
        <div className="md:col-span-1">
          <p className="text-sm mb-4">
            We’re on mission to provide transformational learning outcomes to learners career.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-800"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-gray-500 hover:text-gray-800"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-500 hover:text-gray-800"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="text-gray-500 hover:text-gray-800"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        {/* Our Company */}
        <div>
          <h3 className="font-semibold mb-3">Our Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Hire From Us</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms and Conditions</a></li>
            <li><a href="#" className="hover:underline">Refund Policy</a></li>
            <li><a href="#" className="hover:underline">Student Reviews</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-3">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Testimonials</a></li>
            <li><a href="#" className="hover:underline">Knowledge Center</a></li>
            <li><a href="#" className="hover:underline">Podcasts</a></li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h3 className="font-semibold mb-3">Courses</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Post Graduate Program in Data Science & Analysis with Generative AI Specialization</a></li>
            <li><a href="#" className="hover:underline">Post Graduate Program in Data Science & Analytics</a></li>
            <li><a href="#" className="hover:underline">Full Stack Development (MERN)</a></li>
            <li><a href="#" className="hover:underline">Digital Marketing Bootcamp</a></li>
            <li><a href="#" className="hover:underline">Post Graduate Program in Cloud Computing</a></li>
            <li><a href="#" className="hover:underline">Post Graduate Program in Digital Marketing</a></li>
            <li><a href="#" className="hover:underline">Salesforce Development Program</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Get Contact</h3>
          <p className="text-sm mb-2"><i className="fas fa-phone-alt mr-2"></i> Phone: +91 9325013467</p>
          <p className="text-sm"><i className="fas fa-envelope mr-2"></i> E-mail: info@fireblazeaischool.in</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 text-center py-4 text-sm text-gray-600">
        © 2025 <span className="text-yellow-500">Fireblaze Technologies Private Limited</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;