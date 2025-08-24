import React from 'react';
import { GraduationCap, Award, Users, BookOpen, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Students Enrolled' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: BookOpen, value: '50+', label: 'Courses Offered' },
    { icon: Star, value: '98%', label: 'Success Rate' },
  ];

  const features = [
    {
      title: 'Expert Faculty',
      description: 'Learn from experienced teachers with proven track records.',
      icon: GraduationCap,
    },
    {
      title: 'Comprehensive Curriculum',
      description: 'Complete coverage of CBSE, UP Board, and competitive exam syllabi.',
      icon: BookOpen,
    },
    {
      title: 'Personalized Attention',
      description: 'Small batch sizes ensuring individual attention to each student.',
      icon: Users,
    },
    {
      title: 'Proven Results',
      description: 'Consistent track record of excellent results and selections.',
      icon: Award,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Success Mantra Institute
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Your Gateway to Academic Excellence and Career Success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/registration"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/courses"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-12 w-12 text-blue-800 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Director Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Our Director</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-blue-800 mb-2">Mr. Vikas Pandey</h3>
                <p className="text-gray-600 mb-4">Director & Chief Mentor</p>
                <p className="text-gray-700 mb-4">
                  With over 15 years of experience in education and mentoring, Mr. Vikas Pandey has successfully guided thousands of students towards their academic and career goals.
                </p>
                <p className="text-gray-700">
                  His innovative teaching methods and personalized approach have made Success Mantra Institute a premier destination for quality education.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 rounded-lg">
              <div className="w-48 h-48 bg-blue-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <GraduationCap className="h-24 w-24 text-blue-800" />
              </div>
              <div className="text-center">
                <blockquote className="text-lg text-gray-700 italic">
                  "Education is not just about passing exams, it's about shaping futures and building confident individuals."
                </blockquote>
                <cite className="text-blue-800 font-semibold mt-2 block">- Vikas Pandey</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600">Discover what makes Success Mantra Institute special</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <feature.icon className="h-12 w-12 text-blue-800 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Success Journey?</h2>
          <p className="text-xl mb-8">Join thousands of successful students who achieved their dreams with us.</p>
          <Link
            to="/registration"
            className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
          >
            Register Today <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;