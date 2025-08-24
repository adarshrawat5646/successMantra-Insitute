import React from 'react';
import { BookOpen, Award, Users, Clock, Check } from 'lucide-react';

const Courses = () => {
  const academicCourses = [
    {
      class: 'Classes 1-5',
      subjects: ['Mathematics', 'English', 'Hindi', 'EVS', 'Science'],
      boards: ['CBSE', 'UP Board'],
      features: ['Interactive Learning', 'Activity-based Teaching', 'Regular Assessments']
    },
    {
      class: 'Classes 6-8',
      subjects: ['Mathematics', 'Science', 'Social Science', 'English', 'Hindi'],
      boards: ['CBSE', 'UP Board'],
      features: ['Concept Building', 'Problem-solving Skills', 'Regular Tests']
    },
    {
      class: 'Classes 9-10',
      subjects: ['Mathematics', 'Science', 'Social Science', 'English', 'Hindi'],
      boards: ['CBSE', 'UP Board'],
      features: ['Board Exam Preparation', 'Mock Tests', 'Individual Attention']
    },
    {
      class: 'Classes 11-12',
      subjects: ['PCM', 'PCB', 'Commerce', 'Arts'],
      boards: ['CBSE', 'UP Board'],
      features: ['JEE/NEET Preparation', 'Board Exam Focus', 'Career Guidance']
    }
  ];

  const competitiveExams = [
    {
      name: 'SSC (Staff Selection Commission)',
      description: 'Comprehensive preparation for all SSC exams including CGL, CHSL, MTS, and Stenographer.',
      duration: '6-12 months',
      subjects: ['Quantitative Aptitude', 'English Language', 'General Knowledge', 'Reasoning'],
      features: ['Regular Mock Tests', 'Previous Year Papers', 'Current Affairs Updates']
    },
    {
      name: 'Banking Exams',
      description: 'Complete preparation for IBPS, SBI, RBI and other banking examinations.',
      duration: '8-12 months',
      subjects: ['Quantitative Aptitude', 'Reasoning', 'English Language', 'Banking Awareness'],
      features: ['Interview Preparation', 'Group Discussions', 'Personality Development']
    },
    {
      name: 'Defense Services',
      description: 'Specialized coaching for NDA, CDS, AFCAT and other defense examinations.',
      duration: '12-18 months',
      subjects: ['Mathematics', 'General Knowledge', 'English', 'Current Affairs'],
      features: ['Physical Fitness Guidance', 'SSB Interview Preparation', 'Personality Development']
    },
    {
      name: 'UPSC Civil Services',
      description: 'Comprehensive preparation for UPSC Prelims and Mains examinations.',
      duration: '18-24 months',
      subjects: ['General Studies', 'Optional Subjects', 'Essay Writing', 'Current Affairs'],
      features: ['Answer Writing Practice', 'Interview Preparation', 'Study Material']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Courses</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive education programs designed to help students excel in academics and competitive examinations
          </p>
        </div>
      </section>

      {/* Academic Courses */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BookOpen className="h-12 w-12 text-blue-800 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Academic Courses</h2>
            <p className="text-xl text-gray-600">Complete syllabus coverage for CBSE and UP Board</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {academicCourses.map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-blue-800 mb-3">{course.class}</h3>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Boards:</h4>
                  <div className="flex space-x-2">
                    {course.boards.map((board, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {board}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Subjects:</h4>
                  <div className="flex flex-wrap gap-2">
                    {course.subjects.map((subject, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Exams */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Award className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Competitive Exam Preparation</h2>
            <p className="text-xl text-gray-600">Specialized coaching for various competitive examinations</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {competitiveExams.map((exam, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{exam.name}</h3>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    {exam.duration}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6">{exam.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Subjects Covered:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {exam.subjects.map((subject, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-2 rounded text-sm">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    Special Features:
                  </h4>
                  <ul className="space-y-2">
                    {exam.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl mb-8">Choose the right course and take the first step towards success.</p>
          <a
            href="/registration"
            className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            Register Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Courses;