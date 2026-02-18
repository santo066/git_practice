import "./Trainers.css";

function Trainers() {
  const trainers = [
    {
      id: 1,
      name: "John Smith",
      specialty: "Strength Training",
      certification: "NASM CPT",
      experience: "10+ years",
      bio: "Expert in powerlifting and strength development",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      specialty: "Cardio & HIIT",
      certification: "ACE CPT",
      experience: "8+ years",
      bio: "Passionate about high-intensity training and endurance",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
    },
    {
      id: 3,
      name: "Emma Davis",
      specialty: "Yoga & Flexibility",
      certification: "Yoga Alliance RYT",
      experience: "7+ years",
      bio: "Certified yoga instructor specializing in flexibility",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
    },
    {
      id: 4,
      name: "Mike Williams",
      specialty: "Functional Training",
      certification: "ISSF CPT",
      experience: "9+ years",
      bio: "Specializes in functional movements and injury prevention",
      image:
        "https://images.unsplash.com/photo-1507529541307-9863072d199c?w=400&h=500&fit=crop",
    },
    {
      id: 5,
      name: "Lisa Wong",
      specialty: "Pilates & Core",
      certification: "Pilates Method Alliance",
      experience: "6+ years",
      bio: "Expert in core strengthening and body conditioning",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
    },
    {
      id: 6,
      name: "David Chen",
      specialty: "Nutrition & Wellness",
      certification: "ISSN-SNS",
      experience: "12+ years",
      bio: "Nutrition specialist and wellness coach",
      image:
        "https://images.unsplash.com/photo-1507529541307-9863072d199c?w=400&h=500&fit=crop",
    },
  ];

  return (
    <div className="trainers">
      {/* Header */}
      <section className="trainers-header">
        <h1>Our Expert Trainers</h1>
        <p>
          Meet our certified fitness professionals ready to guide your journey
        </p>
      </section>

      {/* Trainers Grid */}
      <section className="trainers-grid">
        {trainers.map((trainer) => (
          <div key={trainer.id} className="trainer-card">
            <div className="trainer-image">
              <img src={trainer.image} alt={trainer.name} />
            </div>
            <div className="trainer-info">
              <h3>{trainer.name}</h3>
              <p className="specialty">{trainer.specialty}</p>
              <p className="bio">{trainer.bio}</p>
              <div className="trainer-details">
                <div className="detail">
                  <strong>📜 Certification:</strong>
                  <span>{trainer.certification}</span>
                </div>
                <div className="detail">
                  <strong>⏳ Experience:</strong>
                  <span>{trainer.experience}</span>
                </div>
              </div>
              <button className="btn btn-primary">Book Session</button>
            </div>
          </div>
        ))}
      </section>

      {/* Training Options */}
      <section className="training-options">
        <h2>Training Options</h2>
        <div className="options-grid">
          <div className="option-card">
            <h3>🏋️ One-on-One Sessions</h3>
            <p>
              Personalized training tailored to your specific goals and fitness
              level
            </p>
            <ul>
              <li>Custom workout plans</li>
              <li>Nutrition guidance</li>
              <li>Progress tracking</li>
            </ul>
          </div>
          <div className="option-card">
            <h3>👥 Small Group Training</h3>
            <p>Train with 2-4 others for motivation and community support</p>
            <ul>
              <li>Affordable pricing</li>
              <li>Motivating environment</li>
              <li>Flexible schedules</li>
            </ul>
          </div>
          <div className="option-card">
            <h3>📱 Online Coaching</h3>
            <p>Get expert guidance from anywhere in the world</p>
            <ul>
              <li>Remote sessions</li>
              <li>Custom programs</li>
              <li>24/7 support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="qualifications">
        <h2>Our Trainers' Qualifications</h2>
        <div className="qual-grid">
          <div className="qual-item">
            <h4>✓ Certified Professionals</h4>
            <p>All trainers hold recognized fitness certifications</p>
          </div>
          <div className="qual-item">
            <h4>✓ Continuous Education</h4>
            <p>Regular training updates and specialization courses</p>
          </div>
          <div className="qual-item">
            <h4>✓ Experience</h4>
            <p>Average 8+ years of professional coaching experience</p>
          </div>
          <div className="qual-item">
            <h4>✓ Client Success</h4>
            <p>Proven track record of transforming member fitness</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Trainers;
