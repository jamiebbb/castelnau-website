'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Lightbulb, 
  Network, 
  TrendingUp, 
  GraduationCap, 
  MapPin, 
  Clock, 
  Mail,
  Award,
  Target,
  Building,
  Heart
} from 'lucide-react';

const GraduateProgramme = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Our Culture",
      description: "Experience a culture where learning, integrity and respect are paramount. We encourage thoughtful experimentation and the humility to learn from failures for incremental growth."
    },
    {
      icon: Users,
      title: "Diverse Teams",
      description: "We believe diverse teams are the best teams. You don't have to tick every box to be considered, and we're open to flexible working arrangements."
    },
    {
      icon: Network,
      title: "Our People and Network",
      description: "Access to incredible businesspeople and investors through partnerships with Sir Peter Wood (SPWOne), Andrew Gerrie (Silverwood Brands, Lush Cosmetics), and many others."
    },
    {
      icon: Building,
      title: "Diverse Portfolio",
      description: "Work across technology, data science, web-design, weddings, hobbies, collectables, luxury cosmetics, and end-of-life care businesses."
    }
  ];

  const opportunities = [
    {
      icon: Target,
      title: "Strategic Projects",
      description: "Work with skilled leaders on strategic projects, learning from their fields of expertise while participating in regular communication with The Castelnau Group Leadership Team."
    },
    {
      icon: TrendingUp,
      title: "Real Responsibilities",
      description: "Gain first-hand insight into business decision making with real responsibilities on important projects. Play a meaningful role in helping advance our businesses."
    },
    {
      icon: Award,
      title: "Career Opportunities",
      description: "If you make an impression, there are opportunities to secure a full-time role within the Group across technology, commercial, communications, marketing, brand and finance."
    }
  ];

  const developmentAreas = [
    "Planning and decision-making processes that guide business strategies",
    "Career opportunities in technology, commercial, communications, marketing, brand and finance",
    "Building your business network and developing invaluable soft skills",
    "Exposure to a variety of different businesses, operating models, strategies, and industries"
  ];

  const benefits_compensation = [
    "Salaries dependent on existing skills and experience",
    "Invitations to social events for networking with like-minded people",
    "Opportunities to connect with Fund Managers and Investment Analysts",
    "London-based role with travel to portfolio businesses within the UK"
  ];

  const requirements = [
    "Dynamic personality with an analytical mindset",
    "Strong collaboration and independent thinking skills",
    "Interest in business and investments",
    "Degree in business or financial subject (advantage, but will consider other backgrounds)",
    "Right to work in the UK",
    "Aptitude and strong interest in business or project management"
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-castelnau-green mb-6">
          Castelnau Business Experience Programme
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          Join us as a graduate on the Castelnau Business Experience Programme and help us tackle challenges that reshape our businesses.
        </p>
      </div>

      {/* Culture & Benefits Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {benefits.map((benefit, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-castelnau-green/10 rounded-lg">
                <benefit.icon className="h-6 w-6 text-castelnau-green" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* What to Expect */}
      <div className="bg-gradient-to-br from-castelnau-green/5 to-green-50 rounded-2xl p-8">
        <h2 className="text-3xl font-serif font-bold text-castelnau-green mb-8 text-center">
          What to Expect
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {opportunities.map((opportunity, index) => (
            <div key={index} className="text-center">
              <div className="p-4 bg-white rounded-lg mb-4 inline-block shadow-sm">
                <opportunity.icon className="h-8 w-8 text-castelnau-green mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{opportunity.title}</h3>
              <p className="text-gray-700 leading-relaxed">{opportunity.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Lightbulb className="h-5 w-5 text-castelnau-green mr-2" />
            The Opportunity is Unique
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Get exposed to a variety of different businesses, operating models, strategies, and industries. 
            Our portfolio spans from technology encompassing data science and web-design, to weddings, hobbies, 
            collectables, luxury cosmetics and end-of-life care. Check out the "Explore the Group" section 
            for more details on our diverse and exciting businesses.
          </p>
        </div>
      </div>

      {/* Personal Development */}
      <div>
        <h2 className="text-3xl font-serif font-bold text-castelnau-green mb-8 text-center">
          Personal Development
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {developmentAreas.map((area, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="p-1 bg-castelnau-green/10 rounded-full mt-1">
                <GraduationCap className="h-4 w-4 text-castelnau-green" />
              </div>
              <p className="text-gray-700 leading-relaxed">{area}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Salary & Benefits */}
      <div className="bg-gray-50 rounded-2xl p-8">
        <h2 className="text-3xl font-serif font-bold text-castelnau-green mb-8 text-center">
          Salary & Benefits
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {benefits_compensation.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="p-1 bg-castelnau-green/10 rounded-full mt-1">
                <Award className="h-4 w-4 text-castelnau-green" />
              </div>
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Job Details */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <MapPin className="h-5 w-5 text-castelnau-green mr-2" />
            Location & Working Hours
          </h3>
          <p className="text-gray-700 mb-2">London and travel to our portfolio businesses' locations within the UK.</p>
          <p className="text-sm text-gray-600">Candidates will need to have the right to work in UK.</p>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Clock className="h-5 w-5 text-castelnau-green mr-2" />
            Duration of Employment
          </h3>
          <p className="text-gray-700">We can offer a range of contracts from short term (2-5 months) and longer-term (12-18 months).</p>
        </Card>
      </div>

      {/* Requirements */}
      <div>
        <h2 className="text-3xl font-serif font-bold text-castelnau-green mb-8 text-center">
          And Now to YOU!
        </h2>
        
        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">What We're Looking For</h3>
            <p className="text-gray-700 mb-6">
              You will be dynamic, have an analytical mindset, be a collaborator, and an independent thinker. 
              Having an interest in business and investments is a benefit.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Qualifications</h4>
            <p className="text-gray-700 mb-4">
              A degree in a business or financial subject will be an advantage, however, we will also consider 
              applications which can demonstrate an aptitude and strong interest in business or project management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {requirements.map((requirement, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="p-1 bg-castelnau-green/10 rounded-full mt-1">
                  <Users className="h-4 w-4 text-castelnau-green" />
                </div>
                <p className="text-gray-700 text-sm">{requirement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Process */}
      <div className="bg-gradient-to-r from-castelnau-green to-castelnau-light-green rounded-2xl p-8 text-white text-center">
        <h2 className="text-3xl font-serif font-bold mb-6">Next Steps</h2>
        <p className="text-lg mb-8 opacity-90">
          Please send a CV along with a written cover letter (no longer than 250-400 words) outlining 
          why you believe that you are a good fit for our programme.
        </p>
        
        <div className="bg-white/10 rounded-lg p-6 mb-6">
          <Mail className="h-8 w-8 mx-auto mb-4" />
          <p className="text-xl font-semibold mb-2">Apply Now</p>
          <a 
            href="mailto:bep@castelnaugroup.com" 
            className="text-lg hover:underline font-medium"
          >
            bep@castelnaugroup.com
          </a>
        </div>

        <div className="text-sm opacity-80 space-y-2">
          <p><strong>Recruitment Company Statement:</strong> Castelnau Group intends to work directly with candidates, and we would ask recruitment agencies not to contact us in relation to this recruitment process.</p>
          <p><strong>Equal Opportunities Statement:</strong> Castelnau Group Services Ltd is an equal opportunity employer and prohibits discrimination and harassment of any kind. We are committed to equal employment opportunity for all employees and providing a work environment free of discrimination and harassment. All employment decisions are based on business needs, job requirements and individual qualifications. We encourage applicants of all ages.</p>
        </div>
      </div>
    </div>
  );
};

export default GraduateProgramme; 