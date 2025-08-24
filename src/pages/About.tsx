import React from 'react';
import { Target, Eye, Award, Users, BookOpen, Star } from 'lucide-react';

const About = () => {
  const achievements = [
    { number: '500+', text: 'Students Successfully Placed' },
    { number: '98%', text: 'Pass Percentage' },
    { number: '15+', text: 'Years of Excellence' },
    { number: '50+', text: 'Expert Faculty Members' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Success Mantra Institute</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Committed to nurturing academic excellence and shaping successful careers since 2009
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-blue-800 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To provide quality education that empowers students to excel in academics and competitive examinations. 
                We strive to create an environment that fosters learning, critical thinking, and character development, 
                preparing students for successful careers and meaningful contributions to society.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-orange-500 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To be the leading educational institution that transforms students into confident, competent, and 
                ethical individuals ready to face the challenges of tomorrow. We envision a future where every 
                student achieves their maximum potential and contributes positively to the global community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Director Bio */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg mx-auto flex items-center justify-center">
                <Users className="h-32 w-32 text-blue-800" />
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Director's Profile</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-blue-800 mb-3">Mr. Vikas Pandey</h3>
                <p className="text-orange-500 font-medium mb-4">Director & Chief Mentor</p>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Education:</strong> M.A. in Education, B.Ed., specialized training in competitive exam preparation
                  </p>
                  <p>
                    <strong>Experience:</strong> Over 15 years in education sector with expertise in CBSE, UP Board curriculum and competitive exam coaching
                  </p>
                  <p>
                    <strong>Specialization:</strong> Mathematics, Science, SSC, Banking, Defense services preparation
                  </p>
                  <p>
                    <strong>Achievements:</strong> Successfully mentored 500+ students in various competitive exams with 98% success rate
                  </p>
                </div>

                <blockquote className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-800 italic text-gray-700">
                  "My philosophy is simple - every student has unique potential. Our job is to identify, nurture, and 
                  guide that potential towards success. Success is not just about clearing exams; it's about building 
                  confidence and character."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl text-blue-100">Numbers that speak for our excellence</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-orange-300 mb-2">{achievement.number}</div>
                <div className="text-blue-100">{achievement.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Students Choose Us</h2>
            <p className="text-xl text-gray-600">The pillars of our educational excellence</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <BookOpen className="h-12 w-12 text-blue-800 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Comprehensive Curriculum</h3>
              <p className="text-gray-600">
                Complete coverage of CBSE and UP Board syllabi with additional focus on competitive exam preparation. 
                Our curriculum is regularly updated to match latest exam patterns.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Users className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Faculty</h3>
              <p className="text-gray-600">
                Highly qualified and experienced teachers with specialized knowledge in their subjects. 
                Regular training ensures they stay updated with latest teaching methodologies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Star className="h-12 w-12 text-emerald-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Track Record</h3>
              <p className="text-gray-600">
                15+ years of consistent results with 98% pass percentage and numerous selections in 
                competitive exams including SSC, Banking, NDA, and UPSC.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;