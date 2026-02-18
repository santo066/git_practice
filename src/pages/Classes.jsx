import { useState } from "react";
import "./Classes.css";

function Classes() {
  const [selectedLevel, setSelectedLevel] = useState("all");

  const classes = [
    {
      id: 1,
      name: "Cardio Blast",
      level: "beginner",
      time: "06:00 AM",
      duration: "45 min",
      instructor: "Sarah Johnson",
      capacity: 25,
      image:
        "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=400&h=300&fit=crop",
      description:
        "High-energy cardio workout to boost your heart rate and burn calories",
    },
    {
      id: 2,
      name: "Power Weight Training",
      level: "intermediate",
      time: "07:30 AM",
      duration: "60 min",
      instructor: "Mike Williams",
      capacity: 20,
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
      description: "Build strength and muscle with proper techniques and form",
    },
    {
      id: 3,
      name: "Yoga Flow",
      level: "beginner",
      time: "09:00 AM",
      duration: "60 min",
      instructor: "Emma Davis",
      capacity: 30,
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop",
      description:
        "Find your balance and flexibility through gentle yoga practice",
    },
    {
      id: 4,
      name: "HIIT Training",
      level: "advanced",
      time: "05:30 PM",
      duration: "45 min",
      instructor: "John Brown",
      capacity: 20,
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
      description:
        "Intense interval training for maximum results in minimum time",
    },
    {
      id: 5,
      name: "Pilates Core",
      level: "intermediate",
      time: "10:00 AM",
      duration: "50 min",
      instructor: "Lisa Wong",
      capacity: 25,
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop",
      description: "Strengthen your core with controlled Pilates movements",
    },
    {
      id: 6,
      name: "Boxing Fitness",
      level: "intermediate",
      time: "06:00 PM",
      duration: "55 min",
      instructor: "Alex Martinez",
      capacity: 15,
      image:
        "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=400&h=300&fit=crop",
      description:
        "Learn boxing basics while getting an amazing cardio workout",
    },
    {
      id: 7,
      name: "Zumba Dance",
      level: "beginner",
      time: "07:00 PM",
      duration: "50 min",
      instructor: "Maria Garcia",
      capacity: 35,
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop",
      description: "Dance your way to fitness with fun Zumba rhythms",
    },
    {
      id: 8,
      name: "Functional Training",
      level: "intermediate",
      time: "06:30 PM",
      duration: "60 min",
      instructor: "David Lee",
      capacity: 18,
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
      description: "Improve overall fitness with functional movement patterns",
    },
  ];

  const filteredClasses =
    selectedLevel === "all"
      ? classes
      : classes.filter((cls) => cls.level === selectedLevel);

  return (
    <div className="classes">
      {/* Header */}
      <section className="classes-header">
        <h1>Our Classes</h1>
        <p>Find the perfect class for your fitness level and goals</p>
      </section>

      {/* Filter */}
      <section className="filter-section">
        <div className="filter-buttons">
          <button
            className={`filter-btn ${selectedLevel === "all" ? "active" : ""}`}
            onClick={() => setSelectedLevel("all")}
          >
            All Classes
          </button>
          <button
            className={`filter-btn ${selectedLevel === "beginner" ? "active" : ""}`}
            onClick={() => setSelectedLevel("beginner")}
          >
            Beginner
          </button>
          <button
            className={`filter-btn ${selectedLevel === "intermediate" ? "active" : ""}`}
            onClick={() => setSelectedLevel("intermediate")}
          >
            Intermediate
          </button>
          <button
            className={`filter-btn ${selectedLevel === "advanced" ? "active" : ""}`}
            onClick={() => setSelectedLevel("advanced")}
          >
            Advanced
          </button>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="classes-grid">
        {filteredClasses.map((cls) => (
          <div key={cls.id} className="class-card">
            <div className="class-image">
              <img src={cls.image} alt={cls.name} />
              <span className={`level-badge ${cls.level}`}>{cls.level}</span>
            </div>
            <div className="class-info">
              <h3>{cls.name}</h3>
              <p className="description">{cls.description}</p>
              <div className="class-details">
                <div className="detail">
                  <span>🕐</span>
                  <span>{cls.time}</span>
                </div>
                <div className="detail">
                  <span>⏱️</span>
                  <span>{cls.duration}</span>
                </div>
                <div className="detail">
                  <span>👤</span>
                  <span>{cls.instructor}</span>
                </div>
                <div className="detail">
                  <span>👥</span>
                  <span>{cls.capacity} spots</span>
                </div>
              </div>
              <button className="btn btn-primary">Book Now</button>
            </div>
          </div>
        ))}
      </section>

      {/* Schedule Info */}
      <section className="schedule-info">
        <h2>Schedule Information</h2>
        <div className="info-cards">
          <div className="info-card">
            <h4>Monday - Friday</h4>
            <p>Classes: 6:00 AM - 8:00 PM</p>
          </div>
          <div className="info-card">
            <h4>Saturday</h4>
            <p>Classes: 8:00 AM - 6:00 PM</p>
          </div>
          <div className="info-card">
            <h4>Sunday</h4>
            <p>Classes: 9:00 AM - 5:00 PM</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Classes;
