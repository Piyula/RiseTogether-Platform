import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="dashboard-header">
        <h3>EMPOWERING COMMUNITIES</h3>
        <h1>
          <span className="rise">Rise Together,</span>
          <span className="build"> Build Your Future</span>
        </h1>
        <p>Unlocking collective potential through skill sharing and community-driven programs in the heart of Sri Lanka.</p>
        <div>
          <button className="btn">Join the Movement</button>
          <button className="btn2">How it Works</button>
        </div>
      </header>

      {/* Story Section */}
      <section className="section">
        <span className="section-subtitle">OUR STORY</span>
        <h2 className="section-titles">Born from the heart of Sri Lanka</h2>        
        <div className="card-grid">         
          <div className="born">
            <p>Rise Together began with a single observation: rural communities are rich with hidden potential, but lack the bridges to connect their skills with widespread opportunity.</p>
            <p>We build an inclusive network fostering trust and collaboration while enabling digital literacy, financial inclusion, and resilient progress is shared and empowerment is standard.</p>
          </div>
         <div className="cardss">
            <img src="/child.png" alt="Community" /> 
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section">
        <h2 className="section-title">Our Core Values   </h2>
        <p className="sub-titles">The pillars that sustain our collective growth. </p>
     
        <div className="card-grid">
          <div className="card"><h3>Inclusion</h3>
              <img src="/icon (1).png" alt="Inclusion" /> 
              <p>The pillars that sustain our collective growth. Every unique experience is valued, regardless of location or background.</p>
          </div>
          <div className="card">
            <h3>Growth</h3>
            <img src="/icon2.png" alt="Growth" /> 
            <p>Committing to continuous learning and sustainable economic benefits for the entire community ecosystem.</p>
          </div>
          <div className="card">
            <h3>Empower</h3>
            <img src="/icon1.png" alt="Empower" /> 
            <p>Providing resources, tools & skills to enable individuals to take charge of their own economic future.</p>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="section">
          <h2 className="section-title">Leadership Team</h2>
          <p className="sub-titles">The leaders who guide our mission forward.</p>
           
       
        <div className="card-grid">
          <div className="cards">           
            <img src="/img1.png" alt="Dr. Malini Silva" />
            <h3>Dr. Malini Silva</h3>
            <p>Executive Director Leads Rise Together’s vision, strategy, and partnerships to ensure the platform effectively supports underserved communities through jobs, sponsorships, and social care services.
            </p>
          </div>
          <div className="cards">   
            <img src="/img2.png" alt="Rohan Jayawardena" />
            <h3>Rohan Jayawardena</h3>
            <p>Head of Community Impact     Drives community outreach and social programs, ensuring the platform creates meaningful impact for job seekers, orphanages, elder homes, and vulnerable families.</p>
          </div>
          <div className="cards">            
            <img src="/img3.png" alt="Kavindi Fernando" />
            <h3>Kavindi Fernando</h3>
            <p>Director of Operations  Oversees daily platform operations, administrative systems, and service efficiency to ensure smooth, secure, and transparent user experiences.</p>
          </div>
          <div className="cards">          
            <img src="/img4.jpg" alt="Arjan Perera" />
            <h3>Arjan Perera</h3>
            <p>Lead Network Strategist  Builds partnerships with employers, NGOs, and sponsors to expand opportunities, strengthen support networks, and grow the platform’s social reach.</p>
          </div>
          <div className="cards">          
            <img src="/img5.jpg" alt="Arjan Perera" />
            <h3>Nadeesha Wijesinghe</h3>
            <p>Leads the development and improvement of Rise Together’s digital platform, ensuring innovative solutions, user-friendly features, and secure technology systems that enhance accessibility for all users.</p>
          </div>
          <div className="cards">          
            <img src="/img9.jpg" alt="Arjan Perera" />
            <h3>ASanjaya De Mel</h3>
            <p>Builds strong relationships with businesses, NGOs, and social organizations to create new opportunities, secure sponsorships, and expand Rise Together’s mission through sustainable collaborations.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <h2 className="section-title">A Dynamic Path to Progress</h2>
        <p className="sub-titles">We bridge the gap between hidden potential and sustainable opportunity using our unique community ecosystem.</p>
        <div className="features-grid">
          {/* Top Row */}
          <div className="features-row">
            {/* Skill-Based Matching */}
            <div className="feature-card skill-matching">
              <div className="feature-icon">
                <img src="/skill1.jpg" alt="Skill-Based Matching" />
              </div>
              <div>
                <h3>Skill-Based Matching</h3>
                <p>Our intelligent platform identifies unique local talents and connects them with community projects that need those specific strengths, ensuring nobody is left behind.</p>
                <div className="feature-tags">
                  <span>Agriculture</span>
                  <span>Textiles</span>
                  <span>Tech</span>
                </div>
              </div>
            </div>
            {/* Community Nodes */}
            <div className="feature-card community-nodes">
              <div className="feature-icon">
                <img src="/skill2.jpg" alt="Community Nodes" />
              </div>
              <div>
                <h3>Community Nodes</h3>
                <p>Physical hubs in rural Sri Lanka where digital skills meet traditional craftsmanship.</p>
                <div className="feature-number">
                  <span>12+</span>
                  <div>ACTIVE DISTRICTS</div>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom Row */}
          <div className="features-row">
            {/* Impact Driven */}
            <div className="feature-card impact-driven">
              <div className="feature-icon">
                <img src="/skill3.png" alt="Impact Driven" />
              </div>
              <div>
                <h3>Impact Driven</h3>
                <p>Measuring success not just in numbers, but in the dignity and independence of every individual we reach.</p>
              </div>
            </div>
            {/* Digital Literacy */}
            <div className="feature-card digital-literacy">
              <div className="feature-illustration">
                <img src="/skill4.jpg" alt="Digital Literacy" />
              </div>
              <div>
                <h3>Digital Literacy</h3>
                <p>Bridging the rural-urban divide by bringing essential digital tools to the doorsteps of those who need them most.</p>
                <a href="#" className="learn-more-link">Learn more &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories Section */}
      <section className="section impact-stories">
        <h2 className="section-title">Impact Stories</h2>
        <div className="card-grid">
          <div className="impact-card">
            <div className="story-title">Anita's Craft Revival</div>
            <div className="story-text">“Through Rise Together, I found a mentor. The results in my career and life have inspired others in my community to bring us together.”</div>
            <div style={{marginTop:8, fontWeight:600, color:'#888'}}>Anita Perera</div>
          </div>
          <div className="impact-card">
            <div className="story-title">Sahan's Tech Bridge</div>
            <div className="story-text">“I was matched with a local cooperative that needed digital literacy volunteers. I shared my skills right here in my village!”</div>
            <div style={{marginTop:8, fontWeight:600, color:'#888'}}>Sahan Jayasinghe</div>
          </div>
          <div className="impact-card">
            <div className="story-title">Grove Roots Co-op</div>
            <div className="story-text">“Creating our organization was our only solution to reach the poorest workers and deliver hope to their children.”</div>
            <div style={{marginTop:8, fontWeight:600, color:'#888'}}>Grove Green Team</div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section ">
        <div className="mission-card"> 
          <h2 className="sections-title" >Our Mission</h2>
          <div className="top1">
            <p>To create an inclusive ecosystem where every individual in Sri Lanka, regardless of their location, has the opportunity to rise by contributing their unique skills to the collective growth of their community.
              <br/>
              <div className="values">
                <h6>Inclusion</h6>
                <h6>Equity</h6>
             </div>
            </p>
             

             <div className="card1">
               <div className="mission-quote">“The strength of the collective is only as vibrant<br/> as the inclusion of every unique star.”<br/>
                 <div className="founder">
                   <img src="/img8.jpg" alt="Digital Literacy" />
                   <p>Founder <br/>Rise Together Initiative</p>
                 </div>
               </div>
             </div>

             
          </div>
          
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section">
        <div className="contact-info">
          <span className="section-subtitle">CONNECT WITH US</span>
          <h2 className="section-title" style={{fontSize:'1.5rem'}}>Let's build the future together</h2>
          <div style={{margin:'18px 0'}}>
            <div><b>Our Office</b><br/>456 Unity Plaza, Colombo 03, Sri Lanka</div>
            <div style={{marginTop:12}}><b>Email Us</b><br/>hello@risetogether.lk<br/>support@risetogether.lk</div>
            <div style={{marginTop:12}}><b>Phone</b><br/>+94 12 345 5678<br/>Mon - Fri, 9am - 5pm</div>
          </div>
        </div>
        <form className="contact-form">
          <div style={{display:'flex',gap:16}}>
            <input type="text" placeholder="Your full name" style={{flex:1,padding:10,borderRadius:8,border:'1px solid #e5e7eb',marginBottom:12}} />
            <input type="email" placeholder="Your email address" style={{flex:1,padding:10,borderRadius:8,border:'1px solid #e5e7eb',marginBottom:12}} />
          </div>
          <input type="text" placeholder="Subject" style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #e5e7eb',marginBottom:12}} />
          <textarea placeholder="How can we help?" style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #e5e7eb',marginBottom:12,minHeight:60}} />
          <button className="btn" type="submit" style={{width:'100%'}}>Send Message</button>
        </form>
      </section>

      {/* Call to Action Section */}
      <section className="section" style={{textAlign:'center'}}>
        <h2 className="section-title" style={{color:'#222'}}>Ready to make an impact?</h2>
        <p>Join thousands of others building a more inclusive and prosperous future together.</p>
        <button className="btn">Start Your Journey</button>
        <button className="btn2" style={{marginLeft:12}}>Support Now</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div>Rise Together</div>
        <div style={{marginTop:8}}>&copy; 2024 Rise Together. Built for Collective Growth.</div>
        <div style={{marginTop:8}}>
          <a href="#" style={{color:'#888',marginRight:16}}>Privacy Policy</a>
          <a href="#" style={{color:'#888',marginRight:16}}>Terms of Service</a>
          <a href="#" style={{color:'#888',marginRight:16}}>Community Guidelines</a>
          <a href="#" style={{color:'#888'}}>Support</a>
        </div>
      </footer>
    </>
  );
}



export default HomePage;