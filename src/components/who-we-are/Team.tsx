import React from "react";
import Image from "next/image";
import Link from "next/link";

interface TeamMemberProps {
  name: string;
  role: string;
  imageSrc: string;
  slug: string;
}

interface TeamMemberData {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
  slug: string;
}

const TeamMember = ({ name, role, imageSrc, slug }: TeamMemberProps) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-102 transition-all duration-300 group">
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
      <Link href={`/who-we-are/${slug}`}>
        <button className="inline-flex items-center text-green-600 hover:text-green-800 font-medium transition-colors duration-200">
          View Profile
          <span className="ml-2">→</span>
        </button>
      </Link>
    </div>
  </div>
);

const Team = () => {
  const castelnauTeam: TeamMemberData[] = [
    {
      name: "Richard Brown",
      role: "Chief Executive Officer",
      bio: "A former investment banker, Richard has over 14 years of corporate finance experience. He has advised firms ranging from the largest FTSE 100 companies to private businesses, UK-focused as well as international. Richard has also played an instrumental part in numerous high-profile M&A and ECM transactions and has significant experience of acting more generally as a key boardroom adviser. Richard most recently worked for more than seven years at Morgan Stanley in its UK investment banking and corporate broking team. He has previously worked at Peel Hunt and Barclays, having initially qualified as a chartered accountant at KPMG.",
      imageSrc: "/team_images/richard_brown",
      slug: "richard-brown",
    },
    {
      name: "Lorraine Smyth",
      role: "Phoenix Partner, Chief of Staff",
      bio: "Lorraine joined Phoenix in early 2016 to head up the Fund Operations and Accounting team. In early 2020 she transitioned to the role of COO of Castelnau Group and is now Chief of Staff. Lorraine has over twenty years' experience working in the finance industry. This includes working in the fund accounting and investment accounting sector for large banks in Dublin and London. She also worked as a client operations manager for a software vendor and has been involved in multiple accounting software implementation projects. Lorraine holds a Bachelor (Hons) degree in Economics, from University College Dublin. Away from work, Lorraine enjoys running, tag rugby, travelling and lots of coffee.",
      imageSrc: "/team_images/lorraine_smyth.jpg",
      slug: "lorraine-smyth",
    },
    {
      name: "Roderick Manzie",
      role: "Chief Operating Officer",
      bio: "Roddy is Chief Operating Officer at Castelnau Group. An investor in Phoenix since 1998, he joined Castelnau in August 2021 having been COO of Ocula Technologies, a portfolio company. Roddy brings over 30 years experience as a founder and COO of SME's, taking them from inception to acquisition. Holding a Bachelor's degree in Computer Studies, his technology career developed through the city's big bang' and has also undertaken many roles as a global IT strategy and outsourcing consultant to large financial institutions. Roddy's backgrounds in technology, entrepreneurship and management consulting allow him to assist Castelnau Group and the portfolio companies across a wide range of their commercial and IT activities. Roddy has represented the Investment manager on the Boards of Stanley Gibbons, Showpiece and Ocula, and has assisted as Interim head of IT at Dignity Funerals. Outside of work, Roddy's interests are photography, snowboarding and scuba diving.",
      imageSrc: "/team_images/roderick_manzie.jpg",
      slug: "roderick-manzie",
    },
    {
      name: "Nathan Channon",
      role: "Chief Technology Officer",
      bio: "Nathan leads the technology vision and digital transformation initiatives across Castelnau Group, driving innovation in financial technology solutions.",
      imageSrc: "/team_images/nathan_channon.jpg",
      slug: "nathan-channon",
    },
    {
      name: "Andrew Gerrie",
      role: "Entrepreneur in Residence",
      bio: "Andrew joined the Phoenix Board in 2020 as a Non-executive director. In 1994 Andrew co-founded Lush and then co-managed the business alongside the other founders. Today Lush generates just under £1bn in retail sales from approx. 1,000 stores and online channels, supported by 8 manufacturing facilities across the globe. Currently CEO of Silverwood Brands plc, which holds beauty brands including Balmonds, Nailberry, SteamCream, Cosmetics Science and Dr Baeltz. Andrew was Non-Executive Chairman of Hotel Chocolat plc since 2015 to 2023. Andrew holds a B.Com degree from Auckland University, New Zealand.",
      imageSrc: "/team_images/andrew_gerrie.jpg",
      slug: "andrew-gerrie",
    },
    {
      name: "Charlotte O'Shea",
      role: "Head of Innovation",
      bio: "Prior to her role as Head of Innovation at Castelnau Group Ltd since August 2022, Charlotte has made significant contributions to the wedding industry. In 2009, she founded Rock My Wedding, a highly acclaimed community platform that garnered multiple awards. In 2019, Rock My Wedding became part of the Castelnau portfolio, showcasing Charlotte's entrepreneurial vision and leadership. Charlotte's impact extends beyond digital platforms. In 2017, she authored 'Rock My Wedding: Your Day Your Way,' offering invaluable insights into crafting personalized wedding experiences. Recognizing the environmental challenges posed by the wedding industry, Charlotte pioneered 'Recycle My Wedding,' a resale platform aimed at reducing its carbon footprint. Launched in 2020, this innovative initiative underscores Charlotte's commitment to sustainability and forward-thinking solutions.",
      imageSrc: "/team_images/charlotte_oshea.jpg",
      slug: "charlotte-oshea",
    },
    {
      name: "Jamie Broadhurst",
      role: "Business Analyst",
      bio: "Jamie graduated from the University of Bristol with a BSc (Hons) degree in Economics. During his time at university, he completed a dissertation looking at the effects of herd behaviour within the cryptocurrency market, as well as playing weekly in an intramural 11-a-side team – Brystal Palace. When he was a teenager, he resold rare streetwear and sneakers, and separately, used arbitrage to profit from a difference in pricing of a virtual currency used in the video game, FIFA. He joined Castelnau Group in early 2023 and has been working closely with Dignity on enhancing their strategy. Alongside helping the senior Castelnau team with a number of initiatives, including building out the 'Castelnau Way' frameworks and the Graduate Program. In his spare time, Jamie enjoys running, swimming and watching Chelsea. He also loves a Sunday Roast and hanging out with his sister's Staffy.",
      imageSrc: "/team_images/jamie_broadhurst.jpg",
      slug: "jamie-broadhurst",
    },
    {
      name: "Tayra Erbes",
      role: "Marketing Associate",
      bio: "Tayra joined Castelnau Group in early 2024 as an intern, and after completing her internship, she transitioned into the Graduate Program as a Marketing Associate. In this role, she collaborates closely with the Head of Innovation and Chief of Staff on various strategic projects across the company's portfolio. Tayra holds a Bachelor's degree in Economics and Management from Bocconi University and a Master's in Strategic Marketing from Maastricht University. Outside of work, Tayra enjoys capturing moments with her film camera, exploring new destinations, and spending time with her sister.",
      imageSrc: "/team_images/tayra_erbes.jpeg",
      slug: "tayra-erbes",
    },
  ];

  const boardMembers: TeamMemberData[] = [
    {
      name: "Richard Brown",
      role: "Chief Executive Officer",
      bio: "A former investment banker, Richard has over 14 years of corporate finance experience. He has advised firms ranging from the largest FTSE 100 companies to private businesses, UK-focused as well as international. Richard has also played an instrumental part in numerous high-profile M&A and ECM transactions and has significant experience of acting more generally as a key boardroom adviser. Richard most recently worked for more than seven years at Morgan Stanley in its UK investment banking and corporate broking team. He has previously worked at Peel Hunt and Barclays, having initially qualified as a chartered accountant at KPMG.",
      imageSrc: "/team_images/richard_brown",
      slug: "richard-brown",
    },
    {
      name: "Joanna Duquemin Nicolle",
      role: "Non-executive director (Independent)",
      bio: "Joanna has over 30 years' experience working in the finance industry in Guernsey. Joanna is currently Chief Executive Officer of Elysium Fund Management Limited, having previously been a Director and the Company Secretary of Collins Stewart Fund Management Limited where she worked on, and led, numerous corporate finance assignments and stock exchange listings in addition to undertaking fund administration and company secretarial duties. Joanna has extensive experience in the provision of best practice corporate governance and company secretarial services to a diverse range of companies traded on the AIM market of the London Stock Exchange, listed on the Main Market of the London Stock Exchange, Euronext and The International Stock Exchange. Joanna qualified as an associate of The Chartered Institute of Secretaries and Administrators in 1994.",
      imageSrc: "/team_images/joanna_nicolle.jpg",
      slug: "joanna-nicolle",
    },
    {
      name: "Joanne Peacegood",
      role: "Non-executive Chair (Independent)",
      bio: "Joanne has over 20 years of experience in the asset management sector across a range of asset classes and including listed and private entities. Prior to becoming a non-executive director, Joanne worked for PwC in the Channel Islands, UK and Canada and was responsible for leading teams to deliver both audit and controls engagements to hundreds of reputable clients. Joanne specialised in alternative assets and has significant experience in auditing complex valuations. Joanne also has 10 years' experience in risk and quality, focusing on how businesses respond to the ever-changing regulatory requirements, risk assessments and assessing the internal control environment. Joanne is an FCA with the ICAEW, graduating with an Honours degree in Accounting and holds the IOD Diploma. Joanne is the Chair of the Guernsey Investment & Fund Association Executive Committee and also sits on the Guernsey International Business Association Council. Joanne resides in Guernsey.",
      imageSrc: "/team_images/joanne_peacegood.jpg",
      slug: "joanne-peacegood",
    },
    {
      name: "David Stevenson",
      role: "Non-executive director (Non-independent)",
      bio: "David Stevenson is a columnist for the Financial Times, Citywire and Money Week and author of a number of books on investment matters. He was the founding director of Rocket Science Group. Currently he is a director of SQN Secured Income Fund Plc, Gresham House Energy Storage Fund Plc, AltFi Limited and Brismo Limited and a strategy consultant to a number of asset management firms and investment banks.",
      imageSrc: "/team_images/david_stevenson.jpg",
      slug: "david-stevenson",
    },
    {
      name: "Andrew Whittaker",
      role: "Non-executive director (Independent)",
      bio: "Andrew is an experienced director and currently sits on several investment manager and investment fund boards specialising in debt, venture, renewables and buyouts. Andrew has over 20 years' experience in the investment sector and the funds industry. Andrew is currently Managing Director of Aver Partners, having previously been Managing Director at Ipes (Barings/Apex) and preceding that, Managing Director at Capita (Sinclair Henderson/Link). He has held senior management roles at Moscow Narodny (VTB Capital), DML (Hallibuton) and qualified whilst at Midland (HSBC/Montagu). Andrew graduated from Cardiff University and Aix-Marseille Université. He is a Chartered Management Accountant and is a Member of the Chartered Institute for Securities and Investment (CISI). Andrew is currently Chair of the British Venture Capital Association (BVCA) Channel Islands Working Group and a member of the Association of Investment Companies' (AIC) Technical Committee. He is a previous Chair of the Guernsey Investment Fund Association (GIFA), Council member of Guernsey International Business Association (GIBA), member of the Association of Real Estate Funds (AREF) Regulatory Committee and of Invest Europe's (formally European Venture Capital Association's (EVCA)) Technical Group.",
      imageSrc: "/team_images/andrew_whittaker.jpg",
      slug: "andrew-whittaker",
    },
  ];

  const phoenixTeam: TeamMemberData[] = [
    {
      name: "Gary Channon",
      role: "Chief Investment Officer & Co-Founder",
      bio: "Gary co-founded Phoenix Asset Management Partners Ltd in 1998 and has been the Chief Investment Officer since inception. Using the same strategy applied to the flagship Phoenix UK Fund, Gary also manages additional segregated accounts for institutional clients. Gary brings over 33 years of business and financial services experience. His career began in Fixed Income Trading at Nikko Securities Europe in 1987. He joined Goldman Sachs in 1989, working in Global Equity Derivative Products Trading. In 1992, Gary joined Nomura International PLC as Head of Equity Derivative Trading. He remained at Nomura International as Co-Head of Equity and Equity Derivatives Trading until moving on to co-found Phoenix. Gary's investment approach at Phoenix is long-term, value-based and focused. He looks out for businesses run by competent, honest managers, who act in the interest of shareholders. Ideal companies have strong pricing power to generate an enduring high return on capital. Gary identifies great companies with good management, and waits for the opportunity to invest in them at attractive prices. He lives and works in Barnes, South West London.",
      imageSrc: "/team_images/gary_channon.jpg",
      slug: "gary-channon",
    },
    {
      name: "Lorraine Smyth",
      role: "Phoenix Partner, Chief of Staff",
      bio: "Lorraine joined Phoenix in early 2016 to head up the Fund Operations and Accounting team. In early 2020 she transitioned to the role of COO of Castelnau Group and is now Chief of Staff. Lorraine has over twenty years' experience working in the finance industry. This includes working in the fund accounting and investment accounting sector for large banks in Dublin and London. She also worked as a client operations manager for a software vendor and has been involved in multiple accounting software implementation projects. Lorraine holds a Bachelor (Hons) degree in Economics, from University College Dublin. Away from work, Lorraine enjoys running, tag rugby, travelling and lots of coffee.",
      imageSrc: "/team_images/lorraine_smyth.jpg",
      slug: "lorraine-smyth",
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
              name={member.name}
              role={member.role}
              imageSrc={member.imageSrc}
              slug={member.slug}
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
              name={member.name}
              role={member.role}
              imageSrc={member.imageSrc}
              slug={member.slug}
            />
          ))}
        </div>
      </div>

      {/* Phoenix Team Section */}
      <div className="mb-16">
        <h2 className="text-4xl font-serif font-bold text-castelnau-green mb-2">
          Phoenix Team
        </h2>
        <div className="w-full h-1 bg-gradient-to-r from-green-500 via-green-600 to-green-700 mb-8"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {phoenixTeam.map((member, index) => (
            <TeamMember 
              key={index} 
              name={member.name}
              role={member.role}
              imageSrc={member.imageSrc}
              slug={member.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
