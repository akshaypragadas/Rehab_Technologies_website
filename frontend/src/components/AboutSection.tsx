import Image from "next/image";
import { Shield, ChevronRight, User, Briefcase, FileText } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="flex flex-col bg-app-bg py-20">

      {/* Overview Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold text-navy-deep mb-6">Our Operations</h2>
            <ul className="space-y-4">
              {[
                "National leader in engineering, design, and advisory services headquartered in Hyderabad.",
                "Market leader in technology consulting services in Building, Industrial and Infrastructure sectors.",
                "Engineering the structural repair, rehabilitation, and redesign.",
                "Rectifying severe structural issues.",
                "Forensic Investigation and Failure Analysis with Techno-Legal domain expertise."
              ].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold mt-0.5">
                    <Shield className="w-3 h-3" />
                  </div>
                  <span className="text-gray-700">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl shadow-navy/5 relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gold to-yellow-400 rounded-t-2xl"></div>
            <h3 className="font-heading text-xl font-bold text-navy-deep mb-4">Sectors We Serve</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Residential & Commercial", "Industrial Facilities", 
                "Bridges & Flyovers", "Railway & Metro", 
                "Dams & Irrigation", "Highways & Expressways", 
                "Airports", "Ports & Marine Structures"
              ].map(sector => (
                <div key={sector} className="bg-gray-50 rounded-lg p-3 text-sm font-medium text-concrete border border-gray-100">
                  {sector}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-deep mb-4">LEADERSHIP TEAM</h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full mb-6" />
            <p className="text-concrete max-w-3xl mx-auto">
              Our business is driven by three Strategic Business Verticals (SBV): RBN, ISR and NIR. Each is headed internally by competent professionals.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { name: "Dr. P Srinivasa Reddy", role: "Chief Consulting Engineer" },
              { name: "P Pruneeth Reddy", role: "Head - RBN (Repairing Buildings Nationally)" },
              { name: "B B Satpathy", role: "Head - ISR (Industrial Structures Repairs)" },
              { name: "C J Manohar", role: "Head - NIR (National Infrastructure Refurbishment)" },
            ].map((leader, i) => (
              <div key={i} className="bg-app-bg rounded-xl p-6 text-center border border-gray-100 hover:border-gold/50 transition-colors">
                <div className="w-16 h-16 mx-auto bg-navy-deep rounded-full flex items-center justify-center text-gold mb-4 shadow-lg">
                  <User className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-navy-deep">{leader.name}</h4>
                <p className="text-sm text-concrete mt-1">{leader.role}</p>
              </div>
            ))}
          </div>

          <div className="bg-navy-deep text-white rounded-3xl p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[80px]"></div>
            <div className="relative z-10 max-w-3xl">
              <h3 className="font-heading text-2xl font-bold text-gold mb-4">Why Global Companies Choose Us</h3>
              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  "Independent & Unbiased Advisory",
                  "Deep Technical Expertise & Practical Experience",
                  "Transparent Processes & Ethical Approach",
                  "Focus on Value Addition & Long-Term Impact",
                  "Commitment to Quality, Safety & Sustainability"
                ].map((pt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-gray-300 text-sm leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
