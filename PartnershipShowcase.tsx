import { useState } from "react";
import { MapPin, Users, Heart, Calendar } from "lucide-react";

const partnerships = [
  {
    name: "Local Middle School",
    location: "Bay Area, CA",
    type: "Middle School",
    studentsReached: 0,
    established: "Coming Soon",
    description: "We're actively seeking partnerships with middle schools to bring confidence-building programs to 6th-8th grade girls.",
    impact: "Partnership opportunity available - contact us to discuss bringing Swervy Cares to your school.",
    coordinator: "Open Position",
    programs: ["Monthly Workshops", "Kit Distributions", "Peer Mentoring"],
    testimonial: "Ready to partner with schools that want to help their students build confidence and self-worth.",
    image: "🏫",
    color: "from-pink-400 to-purple-500"
  },
  {
    name: "STEM Organization",
    location: "West Coast",
    type: "STEM Organization",
    studentsReached: 0,
    established: "Coming Soon",
    description: "Looking to partner with STEM organizations to show that tech and beauty can coexist, encouraging girls to pursue both.",
    impact: "Partnership opportunity available - perfect for organizations wanting to integrate self-care into STEM education.",
    coordinator: "Open Position",
    programs: ["Tech + Beauty Workshops", "Coding Sessions", "Founder Talks"],
    testimonial: "Excited to show girls they can be successful engineers AND embrace their personal style.",
    image: "💻",
    color: "from-blue-400 to-teal-500"
  },
  {
    name: "Community Center",
    location: "Target Cities",
    type: "Community Center",
    studentsReached: 0,
    established: "Coming Soon",
    description: "Seeking community centers interested in after-school programs that provide safe spaces for self-care education.",
    impact: "Partnership opportunity available - ideal for centers serving young girls who need confidence support.",
    coordinator: "Open Position",
    programs: ["After-School Sessions", "Summer Camps", "Leadership Training"],
    testimonial: "Ready to bring positive programming to communities where girls need support and encouragement.",
    image: "🏢",
    color: "from-teal-400 to-green-500"
  },
  {
    name: "High School",
    location: "Nationwide",
    type: "High School",
    studentsReached: 0,
    established: "Coming Soon",
    description: "Looking for high schools interested in integrating self-care into health and wellness curriculum.",
    impact: "Partnership opportunity available - perfect for schools prioritizing student mental health and confidence.",
    coordinator: "Open Position",
    programs: ["Curriculum Integration", "Peer Support Groups", "Teacher Training"],
    testimonial: "Excited to partner with schools that understand the connection between confidence and academic success.",
    image: "🎓",
    color: "from-orange-400 to-pink-500"
  },
  {
    name: "Youth Mentorship Program",
    location: "Multiple States",
    type: "Mentorship Program",
    studentsReached: 0,
    established: "Coming Soon",
    description: "Seeking mentorship programs interested in incorporating self-care activities into mentor-mentee relationships.",
    impact: "Partnership opportunity available - great for programs wanting to strengthen bonds through shared activities.",
    coordinator: "Open Position",
    programs: ["Mentor Training", "Joint Activities", "Family Engagement"],
    testimonial: "Ready to provide mentors and mentees with concrete activities that build important life skills.",
    image: "👭",
    color: "from-purple-400 to-blue-500"
  },
  {
    name: "Public Library Teen Space",
    location: "Various Cities",
    type: "Public Library",
    studentsReached: 0,
    established: "Coming Soon",
    description: "Looking for libraries interested in hosting workshops that reach girls who might not access traditional programs.",
    impact: "Partnership opportunity available - perfect for libraries wanting to support the whole person, not just academic needs.",
    coordinator: "Open Position",
    programs: ["Workshop Series", "Resource Displays", "Peer Education"],
    testimonial: "Excited to help libraries serve their communities with comprehensive support for young girls.",
    image: "📚",
    color: "from-green-400 to-blue-500"
  }
];

const partnershipTypes = [
  { type: "All", count: partnerships.length },
  { type: "Schools", count: partnerships.filter(p => p.type.includes("School")).length },
  { type: "Community Centers", count: partnerships.filter(p => p.type.includes("Community") || p.type.includes("YMCA")).length },
  { type: "Organizations", count: partnerships.filter(p => p.type.includes("Organization") || p.type.includes("Program")).length }
];

export default function PartnershipShowcase() {
  const [selectedPartner, setSelectedPartner] = useState<typeof partnerships[0] | null>(null);
  const [filter, setFilter] = useState("All");

  const filteredPartnerships = filter === "All" 
    ? partnerships 
    : partnerships.filter(p => {
        if (filter === "Schools") return p.type.includes("School");
        if (filter === "Community Centers") return p.type.includes("Community") || p.type.includes("YMCA");
        if (filter === "Organizations") return p.type.includes("Organization") || p.type.includes("Program");
        return true;
      });

  const totalStudents = partnerships.reduce((sum, p) => sum + p.studentsReached, 0);

  if (selectedPartner) {
    return (
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setSelectedPartner(null)}
            className="mb-8 text-swervy-pink hover:text-pink-600 font-semibold flex items-center space-x-2"
          >
            <span>←</span>
            <span>Back to Partnerships</span>
          </button>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{selectedPartner.image}</div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">{selectedPartner.name}</h1>
              
              <div className="flex justify-center items-center space-x-6 text-gray-600 mb-6">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{selectedPartner.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>{selectedPartner.studentsReached} students reached</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Since {selectedPartner.established}</span>
                </div>
              </div>

              <span className={`bg-gradient-to-r ${selectedPartner.color} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                {selectedPartner.type}
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">About Our Partnership</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {selectedPartner.description}
                </p>

                <h4 className="font-semibold text-gray-800 mb-2">Programs & Activities:</h4>
                <ul className="space-y-2">
                  {selectedPartner.programs.map((program, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-swervy-pink rounded-full"></div>
                      <span className="text-gray-700">{program}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Impact & Results</h3>
                <div className="bg-gradient-to-r from-swervy-pink to-swervy-purple text-white rounded-xl p-6 mb-6">
                  <p className="font-semibold">{selectedPartner.impact}</p>
                </div>

                <h4 className="font-semibold text-gray-800 mb-2">Partnership Coordinator:</h4>
                <p className="text-gray-700 mb-4">{selectedPartner.coordinator}</p>

                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">What They're Saying:</h4>
                  <p className="text-gray-700 italic">"{selectedPartner.testimonial}"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="partnerships" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Amazing Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seeking partnerships with schools and organizations to create lasting impact in communities across the country.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-swervy-pink mb-2">0</div>
            <div className="text-gray-600">Active Partners</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-swervy-turquoise mb-2">6</div>
            <div className="text-gray-600">Partnership Types Available</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-500 mb-2">Multiple</div>
            <div className="text-gray-600">States Open</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-pink-500 mb-2">Ready</div>
            <div className="text-gray-600">To Launch</div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {partnershipTypes.map((type) => (
            <button
              key={type.type}
              onClick={() => setFilter(type.type)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === type.type
                  ? 'bg-swervy-pink text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow'
              }`}
            >
              {type.type} ({type.count})
            </button>
          ))}
        </div>

        {/* Partnership Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPartnerships.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer hover:transform hover:scale-105"
              onClick={() => setSelectedPartner(partner)}
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">{partner.image}</div>
                <span className={`bg-gradient-to-r ${partner.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                  {partner.type}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2">{partner.name}</h3>
              
              <div className="flex items-center space-x-2 text-gray-600 mb-3">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{partner.location}</span>
              </div>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {partner.description}
              </p>

              <div className="flex justify-between items-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-swervy-pink">{partner.studentsReached}</div>
                  <div className="text-xs text-gray-500">Students Reached</div>
                </div>
                <div className="text-swervy-pink font-semibold hover:text-pink-600 text-sm">
                  Learn More →
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Want to Partner With Us?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're always looking for new schools, community centers, and organizations to partner with. If you work with young girls and want to bring confidence-building programs to your community, we'd love to hear from you.
          </p>
          <a 
            href="mailto:aishniragh@icloud.com?subject=Partnership Opportunity" 
            className="bg-gradient-to-r from-swervy-pink to-swervy-purple text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-block"
          >
            Start a Partnership
          </a>
        </div>
      </div>
    </section>
  );
}