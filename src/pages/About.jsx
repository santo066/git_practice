import "./About.css";

function About() {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About FitLife Gym</h1>
        <p>Your Partner in Fitness Excellence</p>
      </section>

      {/* History Section */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Founded in 2010, FitLife Gym has been dedicated to helping
              thousands of individuals achieve their fitness goals. What started
              as a small gym with basic equipment has grown into a
              state-of-the-art fitness facility with world-class amenities and a
              vibrant community.
            </p>
            <p>
              Our mission is simple: to empower our members with the tools,
              knowledge, and support they need to transform their lives through
              fitness.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=400&fit=crop"
            alt="FitLife Gym"
          />
        </div>
      </section>

      {/* Mission & Values */}
      <section className="mission-values">
        <div className="mission-value-card">
          <h3>🎯 Our Mission</h3>
          <p>
            To create an inclusive fitness community where every member can
            achieve their personal best and maintain a healthy, active
            lifestyle.
          </p>
        </div>
        <div className="mission-value-card">
          <h3>💎 Our Vision</h3>
          <p>
            To be the most trusted and inspiring fitness destination, known for
            transforming lives and creating lasting health impacts.
          </p>
        </div>
        <div className="mission-value-card">
          <h3>❤️ Our Values</h3>
          <p>
            Excellence, Community, Integrity, and Inclusivity guide everything
            we do. We believe fitness is for everyone.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-section alt">
        <h2>Why Join FitLife Gym?</h2>
        <div className="why-choose-grid">
          <div className="why-card">
            <h4>🏆 Expert Guidance</h4>
            <p>Certified trainers with years of experience</p>
          </div>
          <div className="why-card">
            <h4>🔧 Equipment & Facilities</h4>
            <p>Latest fitness technology and equipment</p>
          </div>
          <div className="why-card">
            <h4>📅 Flexible Schedule</h4>
            <p>Classes at convenient times for everyone</p>
          </div>
          <div className="why-card">
            <h4>👥 Community</h4>
            <p>Supportive member community and events</p>
          </div>
          <div className="why-card">
            <h4>💪 Results Driven</h4>
            <p>Proven methods to achieve your goals</p>
          </div>
          <div className="why-card">
            <h4>🎁 Member Benefits</h4>
            <p>Exclusive perks and special programs</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat-card">
          <h3>5000+</h3>
          <p>Active Members</p>
        </div>
        <div className="stat-card">
          <h3>50+</h3>
          <p>Classes Per Week</p>
        </div>
        <div className="stat-card">
          <h3>20+</h3>
          <p>Expert Trainers</p>
        </div>
        <div className="stat-card">
          <h3>16</h3>
          <p>Years of Excellence</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
              alt="John Smith"
            />
            <h4>John Smith</h4>
            <p>Gym Manager & Fitness Expert</p>
          </div>
          <div className="team-member">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop"
              alt="Lisa Johnson"
            />
            <h4>Lisa Johnson</h4>
            <p>Head Trainer & Nutrition Coach</p>
          </div>
          <div className="team-member">
            <img
              src="https://images.unsplash.com/photo-1507529541307-9863072d199c?w=300&h=300&fit=crop"
              alt="David Chen"
            />
            <h4>David Chen</h4>
            <p>Yoga & Flexibility Specialist</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
