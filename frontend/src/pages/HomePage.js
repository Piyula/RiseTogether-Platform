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
        <h2 className="section-title">Born from the heart of Sri Lanka</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Community Vision</h3>
            <p>Rise Together began with a single observation: rural communities are rich with hidden potential, but lack the bridges to connect their skills with widespread opportunity.</p>
          </div>
          <div className="card">
            <h3>Shared Growth</h3>
            <p>We build an inclusive network fostering trust and collaboration while enabling digital literacy, financial inclusion, and resilient progress is shared and empowerment is standard.</p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section">
        <h2 className="section-title">Our Core Values</h2>
        <div className="card-grid">
          <div className="card"><h3>Inclusion</h3><p>The pillars that sustain our collective growth. Every unique experience is valued, regardless of location or background.</p></div>
          <div className="card"><h3>Growth</h3><p>Committing to continuous learning and sustainable economic benefits for the entire community ecosystem.</p></div>
          <div className="card"><h3>Empower</h3><p>Providing resources, tools & skills to enable individuals to take charge of their own economic future.</p></div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="section">
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <h2 className="section-title">Leadership Team</h2>
          <a href="#" style={{color:'#0044ff', fontWeight:600, textDecoration:'none'}}>View All Team &rarr;</a>
        </div>
        <div className="card-grid">
          <div className="card"><h3>Dr. Malini Silva</h3><p>Executive Director</p></div>
          <div className="card"><h3>Rohan Jayawardena</h3><p>Head of Community Impact</p></div>
          <div className="card"><h3>Kavindi Fernando</h3><p>Director of Operations</p></div>
          <div className="card"><h3>Arjan Perera</h3><p>Lead Network Strategist</p></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <h2 className="section-title">A Dynamic Path to Progress</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Skill-Based Matching</h3>
            <p>Our intelligent platform identifies local talents and connects them with community projects that need those specific strengths, ensuring nobody is left behind.</p>
            <div style={{marginTop:8}}>
              <span className="btn2" style={{fontSize:'0.85rem',padding:'4px 12px',margin:'0 4px 0 0'}}>Agriculture</span>
              <span className="btn2" style={{fontSize:'0.85rem',padding:'4px 12px',margin:'0 4px'}}>Textiles</span>
              <span className="btn2" style={{fontSize:'0.85rem',padding:'4px 12px'}}>Tech</span>
            </div>
          </div>
          <div className="card">
            <h3>Community Nodes</h3>
            <p>Physical hubs that instill inclusive values, offer digital education, financial collaboration, and local culture-building.</p>
            <div style={{marginTop:8, color:'#d94f4f', fontWeight:600}}>12+ Active Districts</div>
          </div>
          <div className="card">
            <h3>Impact Driven</h3>
            <p>Measuring success not just in numbers, but in the dignity and independence of every individual we reach.</p>
          </div>
          <div className="card">
            <h3>Digital Literacy</h3>
            <p>Bridging the rural-urban divide by bringing online school tools to the doorsteps of those who need them most.</p>
            <a href="#" style={{color:'#0044ff',fontWeight:600,fontSize:'0.95rem'}}>Learn more &rarr;</a>
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
      <section className="mission-section section">
        <h2 className="section-title" style={{color:'#fff'}}>Our Mission</h2>
        <div>To create an inclusive ecosystem where every individual in Sri Lanka, regardless of their location, has the opportunity to rise by contributing their unique skills to the collective growth of their community.</div>
        <div style={{display:'flex',gap:32,marginTop:24}}>
          <div>Inclusion<br/><span style={{fontWeight:400}}>No one left behind.</span></div>
          <div>Equity<br/><span style={{fontWeight:400}}>Fair share for all.</span></div>
        </div>
        <div className="mission-quote">“The strength of the collective is only as vibrant as the inclusion of every unique star.”<br/><span style={{fontWeight:600}}>— Founder</span></div>
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