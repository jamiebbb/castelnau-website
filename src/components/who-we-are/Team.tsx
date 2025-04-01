import React from 'react';
import Image from 'next/image';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  imageSrc: string;
}

const TeamMember = ({ name, role, description, imageSrc }: TeamMemberProps) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-102 transition-all duration-300 group">
    <div className="relative h-64">
      <Image 
        src={imageSrc} 
        alt={name} 
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    <div className="p-6 bg-gradient-to-br from-white to-gray-50">
      <h4 className="text-xl font-bold mb-2 text-castelnau-darkgreen">{name}</h4>
      <p className="text-castelnau-green font-medium mb-3">{role}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

const Team = () => {
  const teamMembers = [
    {
      name: "Gary Channon",
      role: "Chief Investment Officer",
      description: "Gary joined Phoenix in 1998, having previously worked at Nikko Securities Europe and Goldman Sachs International. He leads Phoenix's investment approach, combining deep fundamental research with a behavioural and statistical framework to identify value.",
      imageSrc: "/lovable-uploads/3503b171-9516-43a5-b44c-9af899c25e41.png"
    },
    {
      name: "Tristan Chapple",
      role: "Director",
      description: "Tristan joined Phoenix in 2017 from Barclays Investment Bank, bringing experience in capital markets. As Director, he focuses on private and listed small cap investments. He holds a BSc in Natural Sciences from Durham University and an MBA from London Business School.",
      imageSrc: "/lovable-uploads/0943dd4e-c9fa-42ff-ac4a-fc4435caa10e.png"
    },
    {
      name: "Charlotte Maby",
      role: "Investment Team",
      description: "Charlotte joined Phoenix in 2018 after graduating from Oxford University with a BA in Philosophy, Politics and Economics. At Phoenix, she is responsible for identifying and analysing investment opportunities as well as for portfolio management.",
      imageSrc: "/lovable-uploads/d0c87d8a-b6c8-4b43-bc85-feec0bab9862.png"
    },
    {
      name: "James Wilson",
      role: "Investment Team",
      description: "James joined Phoenix in 2020 from private equity firm Bain Capital, where he evaluated investments across multiple sectors. Prior to this, he was at Goldman Sachs in their Investment Banking Division. He holds a BSc in Economics from the University of Warwick.",
      imageSrc: "/lovable-uploads/3503b171-9516-43a5-b44c-9af899c25e41.png"
    },
    {
      name: "Steve Tatters",
      role: "Chief Operating Officer",
      description: "Steve joined Phoenix in 2016 as Chief Operating Officer and oversees the group's operations, risk management and compliance functions. Before Phoenix, he spent 15 years at J.P. Morgan Asset Management in senior operational roles. He is a chartered management accountant.",
      imageSrc: "/lovable-uploads/0943dd4e-c9fa-42ff-ac4a-fc4435caa10e.png"
    },
    {
      name: "Miles Staude",
      role: "Non-Executive Director",
      description: "Miles has over 20 years of experience in financial markets and investment management. He manages the Global Value Fund and serves as director of Staude Capital. Previously, he worked at Metage Capital and was a member of the investment team responsible for global equities at Merrill Lynch.",
      imageSrc: "/lovable-uploads/3503b171-9516-43a5-b44c-9af899c25e41.png"
    },
    {
      name: "Graham Shircore",
      role: "Non-Executive Director",
      description: "Graham is CEO of Gresham House Strategic plc and a Fund Manager at Gresham House Asset Management. He previously spent nine years at Aviva Investors, held roles at Rothschild and was appointed CEO of Stanley Gibbons in 2018. He has a first-class economics degree from Durham University.",
      imageSrc: "/lovable-uploads/0943dd4e-c9fa-42ff-ac4a-fc4435caa10e.png"
    },
    {
      name: "Christopher Mills",
      role: "Non-Executive Director",
      description: "Christopher founded Harwood Capital Management in 2011, previously serving as CIO of J.O. Hambro and CEO of North Atlantic Smaller Companies. He manages North Atlantic Smaller Companies Investment Trust and is a multi-award winning fund manager with over 40 years of experience.",
      imageSrc: "/lovable-uploads/3503b171-9516-43a5-b44c-9af899c25e41.png"
    },
    {
      name: "Andrew Whittaker",
      role: "Chairman",
      description: "Andrew has been Chairman of CGL since its IPO in 2021. With over 30 years in financial services, he was previously a Partner at James Capel and Managing Director at UBS. He's a Non-Executive Director on several boards, including Jupiter UK Growth Investment Trust and Merian Chrysalis.",
      imageSrc: "/lovable-uploads/0943dd4e-c9fa-42ff-ac4a-fc4435caa10e.png"
    }
  ];

  return (
    <div id="our-team" className="scroll-mt-40 pt-16">
      <h2 className="text-3xl font-serif font-bold text-castelnau-green mb-10 text-center">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
