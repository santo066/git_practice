import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Build Your Best Self</h1>
          <p>Join FitLife Gym and transform your fitness journey</p>
          <Link to="/classes" className="btn btn-primary">
            Explore Classes
          </Link>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop"
            alt="Gym equipment"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose FitLife Gym?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img
              src="https://images.unsplash.com/photo-1577221084712-56ceb8e4737c?w=400&h=300&fit=crop"
              alt="Professional Trainers"
            />
            <h3>Expert Trainers</h3>
            <p>Certified professionals ready to guide your fitness journey</p>
          </div>
          <div className="feature-card">
            <img
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=300&fit=crop"
              alt="Modern Equipment"
            />
            <h3>Modern Equipment</h3>
            <p>State-of-the-art fitness facilities and technology</p>
          </div>
          <div className="feature-card">
            <img
              src="https://images.unsplash.com/photo-1611286891726-8fac03c3a91f?w=400&h=300&fit=crop"
              alt="Group Classes"
            />
            <h3>Variety of Classes</h3>
            <p>From yoga to high-intensity training, we have it all</p>
          </div>
          <div className="feature-card">
            <img
              src="https://images.unsplash.com/photo-1544367567-0d6fcffe7f1f?w=400&h=300&fit=crop"
              alt="Member Community"
            />
            <h3>Community Support</h3>
            <p>Join a supportive community of fitness enthusiasts</p>
          </div>
        </div>
      </section>

      {/* Popular Classes Preview */}
      <section className="popular-classes">
        <h2>Popular Classes</h2>
        <div className="classes-preview">
          <div className="class-item">
            <span className="class-icon">🏃</span>
            <h4>Cardio Blast</h4>
            <p>High-energy cardio sessions</p>
          </div>
          <div className="class-item">
            <span className="class-icon">💪</span>
            <h4>Weight Training</h4>
            <p>Build strength and muscle</p>
          </div>
          <div className="class-item">
            <span className="class-icon">🧘</span>
            <h4>Yoga & Flexibility</h4>
            <p>Improve flexibility and mindfulness</p>
          </div>
          <div className="class-item">
            <span className="class-icon">⚽</span>
            <h4>Functional Training</h4>
            <p>Improve overall fitness</p>
          </div>
        </div>
        <Link to="/classes" className="btn btn-secondary">
          View All Classes
        </Link>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>Member Success Stories</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-header">
              <span className="stars">⭐⭐⭐⭐⭐</span>
            </div>
            <p>
              "FitLife Gym transformed my fitness completely. The trainers are
              amazing!"
            </p>
            <strong>- Sarah Johnson</strong>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-header">
              <span className="stars">⭐⭐⭐⭐⭐</span>
            </div>
            <p>
              "Best investment I made for my health. Highly recommend joining!"
            </p>
            <strong>- Mike Williams</strong>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-header">
              <span className="stars">⭐⭐⭐⭐⭐</span>
            </div>
            <p>
              "The community here is so supportive and motivating. Love it!"
            </p>
            <strong>- Emma Davis</strong>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Start Your Fitness Journey?</h2>
        <p>Join thousands of members achieving their fitness goals</p>
        <button className="btn btn-primary btn-large">Get Started Today</button>
      </section>
    </div>
  );
}

export default Home;
