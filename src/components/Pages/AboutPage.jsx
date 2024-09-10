import React from 'react'
import FinancialServicesOffer from '../FinancialServicesOffer'
import AboutUsImg from '../../assets/AboutUs.webp'
import Achievements from '../Achievements'

const AboutPage = () => {
  return (
    <>
        <img src={AboutUsImg} alt="SKG SIP CART" style={{width:'100%', minHeight:'45vh', objectFit:'cover'}} />
      <div className='container d-flex align-items-center flex-column mb-5'>
        <h2 className='text-center mt-5' style={{ fontWeight: '700' }}>
          WELCOME TO SKG SIP CART
        </h2>
        <div className='mb-4 underline-div'></div>
        <div className='mx-5 mt-3 about-container-text'>
          <p >
            SKG SIP CART is one of the renowned financial services firms in the industry. The management team has more than 15 years of experience in the financial sector. Founder members are management graduate from reputed business institute and are MDRT (Million Dollar Round Table) USA, one of the highest recognitions for financial advisor globally, members since 2008. We are serving more than 2500 families & corporate and providing customized solutions according to their need. The firm is well equipped to provide scientific updated technology-based solutions to its clients. What makes us unique from others a “customer first approach”.
          </p>
          <p >
            Our rich experience in financial services, combined with executional capabilities, strong process & system orientation, has enabled us to shape a rising growth trajectory in our businesses. From a humble beginning, WFS over the years has evolved out to be a professionally managed, quality conscious and customer focused financial / investment and insurance advisory firm. Financial Planning & Investment advisory services. WFS is client-focused and committed to complete financial planning & wealth management. As an experienced client advisor, we know that clients today demand a level of personal service and sustainable investment performance that can only be provided by the strongest financial organizations.
          </p>
          <p >
            The Company delivers financial products and services to its retail, corporate and institutional clients. The Company’s retail clients have access to offering like child education/marriage planning, retirement solutions, tax planning, investment instruments (Mutual Funds, Bonds etc.), as well as Life/Health insurance and portfolio Management Services. Insurance Broking As a part of the broking industry in India, we understand that the essence of insurance broking is customer relationships based on trust, the kind of trust that assures our customers that their best interests are always kept in mind. We have consistently demonstrated that the best way to serve customers is to understand their business and their needs, and then to craft customized solutions and provide superior customer support – support that is personalized, thorough and always there when our customers need it. In addition, we have developed product-specific competencies that allow us to respond to unique demands and opportunities in specific vertical MARKETS.
          </p>
          <p >
            We have been involved as insurance consultants with our clients. And have been instrumental in setting up an insurance intelligence over the period of time This expertise does not flow only from the knowledge on insurance and insurance policies, but more importantly from handling complicated claims situations which requires an understanding of company’s claim process and the client’s background. This intimate knowledge which we have inherited, gives us a definite edge over the others in the community. Mission Our purpose is to enable individuals manage financial risk. We provide investment solutions and services tailored to meet the specific and ever-changing financial risk exposures facing our customers. We build value for our clients through the strength of our customers’ satisfaction and by consistently providing services when needed. Vision Our primary purpose as an organization is to deliver high quality financial services. We will continue to be known as the firm where personal attention will never become obsolete. We want to employ people who go the extra mile for clients. We want a culture of growth, profitability and enthusiasm
          </p>
        </div>
      </div>
      <Achievements/>
      <FinancialServicesOffer />
    </>
  )
}

export default AboutPage