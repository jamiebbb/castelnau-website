import React from 'react';
import { PageHero } from '@/components/ui/page-hero';

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen">
      <PageHero 
        title="Website Terms & Conditions" 
        description="Important legal information on Castelnau Group Limited"
      />
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 mb-8">
            These Terms and Conditions contain important legal information on Castelnau Group Limited (CGL). 
            It should be read in conjunction with the Castelnau Investor Privacy and Cookie Notice.
          </p>

          <p className="mb-8">
            This website is owned and operated by Castelnau Group Limited, registered office: 
            PO Box 255, Trafalgar Court, Les Banques, St Peter Port, Guernsey GY1 3QL
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#2D5A3D] mb-4">Target Market</h2>
            <p>
              This website is not directed at you if CGL is prohibited by any law of any jurisdiction from making 
              the information on this site available to you and is not intended for any use that would be contrary 
              to local law or regulation.
            </p>
            <p className="mt-4">
              This website is for information purposes only and does not constitute an offer to sell or a solicitation 
              of an offer to buy any security that may be referenced on or through this website in which such an offer, 
              solicitation or distribution would be unlawful or in which the person making such offer or solicitation is 
              not qualified to do so or to anyone to whom it is unlawful to make such offer or solicitation. Nor does 
              this website constitute an offering or recommendation by CGL of any security, investment management service, 
              or advisory service. No investment advice, tax advice, or legal advice is provided through this website. 
              Products and services mentioned on this site are subject to legal and regulatory requirements in applicable 
              jurisdictions and may not be available in all jurisdictions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#2D5A3D] mb-4">Accuracy of Information</h2>
            <p>
              No warranty is made in respect to the information contained in this website. CGL believes that the 
              information contained and opinions expressed in this site are accurate at the date of publication. 
              Any prices contained in this website are indicative only and should not be relied upon for dealing purposes.
            </p>
            <p className="mt-4">
              Although CGL shall use all reasonable endeavours to ensure that the information contained on this website 
              is accurate and kept up to date, it cannot be held responsible for any losses or damage incurred as a 
              result of using any out of date or superseded information on this website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#2D5A3D] mb-4">Financial Advice</h2>
            <p>
              CGL does not give financial or investment advice. Nothing contained within this website should be 
              construed as the giving of investment advice or recommendation.
            </p>
            <p className="mt-4">
              Prospective investors should consult their own advisors prior to making any investment decisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#2D5A3D] mb-4">Products</h2>
            <h3 className="text-xl font-semibold mb-3">Castelnau Group Limited</h3>
            <p>
              Castelnau Group Limited is a Guernsey registered investment company and an Alternative Investment Fund (AIF). 
              An AIF is not subject to the same rules as mainstream retail products such as UCITS funds and therefore may 
              make more complex investments or have its own particular approach to risk or liquidity. Investment is intended 
              for professional clients and "sophisticated" or "High Net Worth" retail investors only, those considered as 
              "advanced", but is not suitable for retail investors with only basic knowledge of investments.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#2D5A3D] mb-4">General Risk Factors in Investing</h2>
            <p>
              The value of investments and any income from them may go down as well as up and investors may not get back 
              the amount invested. There can be no assurance that investment objectives will be achieved and investment 
              results may vary substantially over time. Past performance is not a reliable indicator of future performance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#2D5A3D] mb-4">Third-party Content</h2>
            <p>
              You may have access to a third party's website through this site. CGL is in no way responsible for the 
              content of any website to which this website may link. CGL is not responsible for, and makes no warranty 
              with respect to the contents, accuracy, completeness, timeliness, suitability, or reliability of the linked website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#2D5A3D] mb-4">Liability</h2>
            <p>
              CGL makes no warranty or representation that the website can be accessed at all times. The website may, 
              without notice, be temporarily unavailable or restricted for administrative or other reasons.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#2D5A3D] mb-4">Intellectual Property</h2>
            <p>
              All copyrights, trademarks, logos, service marks, trade names, or other intellectual property displayed on, 
              or used in conjunction with, this website are proprietary to CGL. The content of this website is protected 
              by applicable intellectual property law; CGL reserves all rights with respect to intellectual property 
              ownership of all material on this website and will enforce such rights to the full extent permissible by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#2D5A3D] mb-4">Modification</h2>
            <p>
              CGL reserves the right in its discretion to modify and/or change without restriction and without prior 
              warning or notice any information or material contained in these terms and conditions or otherwise any 
              applicable terms and conditions to relevant products and/or services available in or on this website. 
              Continued use of the website by you shall be deemed to indicate your continued consent to any such new, 
              modified, deleted or amended terms and conditions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 