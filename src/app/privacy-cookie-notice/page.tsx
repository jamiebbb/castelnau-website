import React from 'react';
import { PageHero } from '@/components/ui/page-hero';

export default function PrivacyCookieNoticePage() {
  return (
    <div className="min-h-screen">
      <PageHero 
        title="Investor Privacy & Cookie Notice" 
        description="How we collect, use and protect your personal information"
      />
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 mb-8">
            Castelnau Group Limited ("CGL") recognises the importance of protecting your personal information. 
            This Privacy and Cookie Notice is designed to help you understand what data CGL collects and what CGL does with that data.
          </p>

          <p className="mb-8">
            This Privacy and Cookie Notice covers our privacy and cookie standards and processes and where relevant, 
            should be read in conjunction with our website terms and conditions or other legal documents.
          </p>

          <p className="mb-8">
            For the purposes of the Data Protection (Bailiwick of Guernsey) Law, 2017 (as amended) (the "Guernsey DP Law"), 
            the General Data Protection Regulation ((EU) 2016/679) ("GDPR") and the Privacy and Electronic Communications 
            Directive (2002/58/EC) (collectively, the "Data Protection Legislation"), CGL is the controller and is 
            responsible for your personal data.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#2D5A3D] mb-4">What is Personal Data?</h2>
            <p>
              Personal data is any information related to a person that can be used to directly or indirectly identify 
              the person. It can include, but is not limited to, a name, an email address, posts on social media, date of birth, 
              an IP address, residential address, contact details, corporate contact information, signature, nationality, 
              tax identification, credit history, correspondence records, passport number, bank account details, source of 
              funds details and details relating to an investor's investment activity.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#2D5A3D] mb-4">Third Party Processors</h2>
            <p>
              CGL has appointed certain third party processors, namely:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Northern Trust International Fund Administration Services (Guernsey) Limited (the "Administrator") to provide administration services</li>
              <li>Link Market Services (Guernsey) Limited (the "Registrar") to provide registrar services</li>
              <li>Link Market Services Limited (the "Receiving Agent") to provide receiving agent services</li>
              <li>Phoenix Asset Management Partners Limited (the "Investment Manager") to provide investment management services</li>
            </ul>
            <p className="mt-4">
              When providing their respective services to CGL, each of the Administrator, the Registrar, the Receiving Agent 
              and the Investment Manager will primarily be acting as a data processor for the purposes of the Data Protection Legislation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#2D5A3D] mb-4">CGL's Data Collection Processes</h2>
            <p>CGL's core data processing activities involve the processing of:</p>
            <ol className="list-decimal pl-6 mt-4 space-y-2">
              <li>Personal data of investors</li>
              <li>Personal data of potential investors</li>
            </ol>
            <p className="mt-4">
              The type of personal data we will collect will vary depending on what category you fall into above.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#2D5A3D] mb-4">Legal Basis for Processing</h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Where we need to perform the contract, we are about to enter into or have entered into with you</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests</li>
              <li>Where we need to comply with a legal or regulatory obligation</li>
              <li>(On exceptional occasions) where we have obtained your consent</li>
              <li>(On rare occasions) where it is needed in the public interest</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#2D5A3D] mb-4">Sharing Your Information</h2>
            <p>We may be required to share your personal data with third parties including:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Professional advisers including lawyers, bankers, auditors and insurers</li>
              <li>Regulators and other authorities who require reporting of processing activities in certain circumstances</li>
              <li>Third parties to whom we may choose to sell, transfer or merge parts of our business or our assets</li>
              <li>Fraud prevention agencies</li>
              <li>Event organisation companies and venues for events</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#2D5A3D] mb-4">International Transfers</h2>
            <p>
              Many of our external third parties are based outside the Bailiwick of Guernsey and the UK. 
              Whenever we transfer your personal data out of the Bailiwick of Guernsey and the UK, we will only 
              transfer your personal data to countries that have been deemed to provide an adequate level of protection.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#2D5A3D] mb-4">Data Retention</h2>
            <p>
              We will only retain your personal information for as long as is necessary to carry out the purposes 
              for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#2D5A3D] mb-4">Your Rights</h2>
            <p>The Data Protection Legislation provides the following rights for individuals:</p>
            <div className="space-y-4 mt-4">
              <div>
                <h4 className="font-semibold">1. The right to be informed</h4>
                <p>Individuals have the right to be informed about the collection and use of their personal data.</p>
              </div>
              <div>
                <h4 className="font-semibold">2. The right of access</h4>
                <p>Under the Data Protection Legislation, individuals have the right to obtain confirmation that their data is being processed and to access their personal data.</p>
              </div>
              <div>
                <h4 className="font-semibold">3. The right to rectification</h4>
                <p>The Data Protection Legislation includes a right for individuals to have inaccurate personal data rectified, or completed if it is incomplete.</p>
              </div>
              <div>
                <h4 className="font-semibold">4. The right to erasure</h4>
                <p>The right to erasure is also known as 'the right to be forgotten'. Individuals can make a request for erasure verbally or in writing.</p>
              </div>
              <div>
                <h4 className="font-semibold">5. The right to restrict processing</h4>
                <p>Individuals have the right to request the restriction or suppression of their personal data in certain circumstances.</p>
              </div>
              <div>
                <h4 className="font-semibold">6. The right to data portability</h4>
                <p>The right to data portability allows individuals to obtain and reuse their personal data for their own purposes across different services.</p>
              </div>
              <div>
                <h4 className="font-semibold">7. The right to object</h4>
                <p>Individuals have the right in certain circumstances to object to processing based on legitimate interests.</p>
              </div>
              <div>
                <h4 className="font-semibold">8. Rights in relation to automated decision making and profiling</h4>
                <p>Individuals have the right not to be subject to automated decision-making, including profiling, which has legal or other significant effects.</p>
              </div>
              <div>
                <h4 className="font-semibold">9. Right to withdraw consent</h4>
                <p>If applicable, individuals have the right to withdraw their consent.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#2D5A3D] mb-4">Cookies</h2>
            <p>
              Cookies are small files which are stored on a user's computer. When you visit a site for the first time, 
              a cookie is downloaded onto your PC. When you subsequently visit the same site, the cookie will then 
              'remember' that you have visited the site before and may customise your experience appropriately.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">CGL's Use Of Cookies</h3>
            <p>We may use cookies for the following purposes:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Usage preferences - some cookies 'remember' the settings preferences of the user concerned or whether they have already seen a 'pop up' message in a previous session</li>
            </ul>
            <p className="mt-4">
              Where our use of cookies involves the processing of personal data, such personal data will be processed 
              by us in accordance with this Privacy and Cookie Notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#2D5A3D] mb-4">Email Interaction Tracking</h2>
            <p>
              We may collect and process information about your interactions with the emails we send, including whether 
              you open the email and click on any links contained within it. This information is linked to your email 
              address and allows us to identify you as the recipient.
            </p>
            <p className="mt-4">We use this data to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Understand your interests and preferences</li>
              <li>Improve the relevance and effectiveness of our communications</li>
              <li>Enhance our marketing and investor relations efforts</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#2D5A3D] mb-4">Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, 
              used or accessed in an unauthorised way, altered or disclosed. However, the transmission of information via 
              the internet is never completely secure. Although we will do our best to protect your personal data, we 
              cannot guarantee the security of your data transmitted to our site; any transmission is at your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#2D5A3D] mb-4">Contact</h2>
            <p>
              Questions, comments and requests regarding this Privacy and Cookie Notice should be 
              addressed to Castelnau Group Limited, registered office: PO Box 255, Trafalgar Court, Les Banques, 
              St Peter Port, Guernsey GY1 3QL
            </p>
            <p className="mt-4">
              You also have the right to make a complaint to us or your local supervisory authority:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>In the Bailiwick of Guernsey: Office of the Data Protection Authority - <a href="https://www.odpa.gg" className="text-[#2D5A3D] hover:underline">www.odpa.gg</a></li>
              <li>In the UK: Information Commissioner's Office (ICO) - <a href="https://www.ico.org.uk" className="text-[#2D5A3D] hover:underline">www.ico.org.uk</a></li>
              <li>If you are an EU data subject, you may lodge the complaint with the supervisory authority in the EU member state of your residence</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
} 