import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  bio?: string;
  imageSrc: string;
  onClick: () => void;
}

interface TeamMemberData {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
}

interface TeamModalProps {
  member: TeamMemberData | null;
  onClose: () => void;
}

const TeamMember = ({ name, role, imageSrc, onClick }: TeamMemberProps) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-102 transition-all duration-300 group cursor-pointer">
    <div className="relative h-80">
      <Image
        src={`${
          process.env.NODE_ENV === "production" ? "/castelnau-website" : ""
        }${imageSrc}`}
        alt={name}
        fill
        className="object-cover object-top"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    <div className="p-6 bg-gradient-to-br from-white to-gray-50">
      <h4 className="text-xl font-bold mb-2 text-castelnau-darkgreen">
        {name}
      </h4>
      <p className="text-castelnau-green font-medium mb-3">{role}</p>
      <button 
        onClick={onClick}
        className="inline-flex items-center text-green-600 hover:text-green-800 font-medium transition-colors duration-200"
      >
        Read bio
        <span className="ml-2">→</span>
      </button>
    </div>
  </div>
);

const TeamModal = ({ member, onClose }: TeamModalProps) => {
  if (!member) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center space-x-4">
              <div className="relative w-20 h-20 rounded-full overflow-hidden">
                <Image
                  src={`${
                    process.env.NODE_ENV === "production" ? "/castelnau-website" : ""
                  }${member.imageSrc}`}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-castelnau-darkgreen">
                  {member.name}
                </h3>
                <p className="text-castelnau-green font-medium">{member.role}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          <div className="text-gray-700 leading-relaxed">
            {member.bio}
          </div>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMemberData | null>(null);

  const castelnauTeam: TeamMemberData[] = [
    {
      name: "Gary Channon",
      role: "Chief Investment Officer",
      bio: "Gary joined Phoenix in 1998, having previously worked at Nikko Securities Europe and Goldman Sachs International. He leads Phoenix's investment approach, combining deep fundamental research with a behavioural and statistical framework to identify value.",
      imageSrc: "/team_images/gary_channon.jpg",
    },
    {
      name: "Richard Brown",
      role: "Chief Executive Officer",
      bio: "Richard has extensive experience in investment management and corporate strategy. He leads the executive team in driving Castelnau Group's strategic vision and growth initiatives.",
      imageSrc: "/team_images/richard_brown",
    },
    {
      name: "Lorraine Smyth",
      role: "Phoenix Partner, Chief of Staff",
      bio: "Lorraine brings deep operational expertise to the Phoenix partnership, overseeing key strategic initiatives and ensuring operational excellence across the organization.",
      imageSrc: "/team_images/lorraine_smyth.jpg",
    },
    {
      name: "Roderick Manzie",
      role: "Chief Operating Officer",
      bio: "Roderick oversees the group's operations, risk management and compliance functions, bringing extensive experience in financial services operations.",
      imageSrc: "/team_images/roderick_manzie.jpg",
    },
    {
      name: "Nathan Channon",
      role: "Chief Technology Officer",
      bio: "Nathan leads the technology vision and digital transformation initiatives across Castelnau Group, driving innovation in financial technology solutions.",
      imageSrc: "/team_images/nathan_channon.jpg",
    },
    {
      name: "Andrew Gerrie",
      role: "Entrepreneur in Residence",
      bio: "Andrew brings entrepreneurial expertise and strategic guidance to portfolio companies, helping drive growth and value creation initiatives.",
      imageSrc: "/team_images/andrew_gerrie.jpg",
    },
    {
      name: "Charlotte O'Shea",
      role: "Head of Innovation",
      bio: "Charlotte leads innovation initiatives and new business development, identifying emerging opportunities and trends in the investment landscape.",
      imageSrc: "/team_images/charlotte_oshea.jpg",
    },
    {
      name: "Jamie Broadhurst",
      role: "Business Analyst",
      bio: "Jamie provides analytical support across the organization, focusing on business intelligence and strategic analysis to support investment decisions.",
      imageSrc: "/team_images/jamie_broadhurst.jpg",
    },
    {
      name: "Tayra Erbes",
      role: "Marketing Associate",
      bio: "Tayra manages marketing initiatives and communications across Castelnau Group, building brand awareness and stakeholder engagement.",
      imageSrc: "/team_images/tayra_erbes.jpeg",
    },
  ];

  const boardMembers: TeamMemberData[] = [
    {
      name: "Richard Brown",
      role: "Chief Executive Officer",
      bio: "Richard has extensive experience in investment management and corporate strategy. He leads the executive team in driving Castelnau Group's strategic vision and growth initiatives.",
      imageSrc: "/team_images/richard_brown",
    },
    {
      name: "Joanna Duquemin Nicolle",
      role: "Non-executive director (Independent)",
      bio: "Joanna brings extensive governance and regulatory expertise to the board, with a strong background in financial services oversight and compliance.",
      imageSrc: "/team_images/joanna_nicolle.jpg",
    },
    {
      name: "Joanne Peacegood",
      role: "Non-executive Chair (Independent)",
      bio: "Joanne serves as the independent chair of the board, bringing extensive leadership experience and strategic oversight to guide the company's governance.",
      imageSrc: "/team_images/joanne_peacegood.jpg",
    },
    {
      name: "David Stevenson",
      role: "Non-executive director (Non-independent)",
      bio: "David provides strategic guidance and industry expertise to the board, leveraging his extensive experience in investment management and financial markets.",
      imageSrc: "/team_images/david_stevenson.jpg",
    },
    {
      name: "Andrew Whittaker",
      role: "Non-executive director (Independent)",
      bio: "Andrew has been with CGL since its IPO in 2021. With over 30 years in financial services, he was previously a Partner at James Capel and Managing Director at UBS.",
      imageSrc: "/team_images/andrew_whittaker.jpg",
    },
  ];

  return (
    <div id="our-team" className="scroll-mt-40 pt-16">
      {/* Castelnau Team Section */}
      <div className="mb-16">
        <h2 className="text-4xl font-serif font-bold text-castelnau-green mb-2">
          Castelnau Team
        </h2>
        <div className="w-full h-1 bg-gradient-to-r from-green-500 via-green-600 to-green-700 mb-8"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {castelnauTeam.map((member, index) => (
            <TeamMember 
              key={index} 
              {...member} 
              onClick={() => setSelectedMember(member)}
            />
          ))}
        </div>
      </div>

      {/* Board of Directors Section */}
      <div className="mb-16">
        <h2 className="text-4xl font-serif font-bold text-castelnau-green mb-2">
          Castelnau Board
        </h2>
        <div className="w-full h-1 bg-gradient-to-r from-green-500 via-green-600 to-green-700 mb-8"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {boardMembers.map((member, index) => (
            <TeamMember 
              key={index} 
              {...member} 
              onClick={() => setSelectedMember(member)}
            />
          ))}
        </div>
      </div>

      {/* Team Member Modal */}
      <TeamModal 
        member={selectedMember} 
        onClose={() => setSelectedMember(null)} 
      />
    </div>
  );
};

export default Team;
