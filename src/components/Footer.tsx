import React from 'react';
import { GraduationCap, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8" />
              <div>
                <h3 className="text-xl font-bold">Success Mantra Institute</h3>
                <p className="text-blue-200">Excellence in Education</p>
              </div>
            </div>
            <p className="text-blue-200">
              Empowering students to achieve their dreams through quality education and expert guidance.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-blue-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="text-blue-200 hover:text-white transition-colors">About</a></li>
              <li><a href="/courses" className="text-blue-200 hover:text-white transition-colors">Courses</a></li>
              <li><a href="/registration" className="text-blue-200 hover:text-white transition-colors">Registration</a></li>
              <li><a href="/contact" className="text-blue-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-blue-200">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-blue-200">info@successmantra.edu</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-blue-200">123 Education Street, Learning City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; 2025 Success Mantra Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;