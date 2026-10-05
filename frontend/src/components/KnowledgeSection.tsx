import { BookOpen, FileText, Briefcase, GraduationCap, Building } from "lucide-react";
import Image from "next/image";

export default function KnowledgeSection() {
  const cards = [
    {
      title: "Third-Party Funding for Repairing Buildings Nationally",
      desc: "Pros and Cons. Exploring 'Repair now, pay later' financing models for structural safety.",
      icon: Building,
      author: "Dr. P. Srinivasa Reddy",
    },
    {
      title: "Badly Repaired Buildings Endangering Lives",
      desc: "Neglect today, tragedy tomorrow. Why structural safety is a constitutional obligation of building owners.",
      icon: Shield,
      author: "Technical Paper",
    },
    {
      title: "Managing Crisis in Business",
      desc: "Leadership and crisis-management principles for infrastructure companies.",
      icon: Briefcase,
      author: "Management Series",
    },
    {
      title: "Waterproofing from Practicing Engineers' Perspective",
      desc: "For Durable & Sustainable Construction. Including Materials Technology, Legal Framework, and Contracts Administration.",
      icon: BookOpen,
      author: "Published Book",
    },
    {
      title: "RBN Project Management Executive Development Program",
      desc: "7-step schedule for Construction Chemicals Companies. Facilitated by Dr. P. Srinivasa Reddy.",
      icon: GraduationCap,
      author: "Training Program",
    },
    {
      title: "Techno-Legal Expertise in Infrastructure",
      desc: "Understanding construction-industry stakeholder requirements and the essential legal framework.",
      icon: FileText,
      author: "Legal Update",
    },
  ];

  return (
    <section id="knowledge" className="flex flex-col bg-app-bg py-20">

      {/* Partnerships */}
      <section className="py-16 px-6 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Anurag University */}
          <div className="bg-app-bg rounded-2xl p-8 border border-gray-200">
            <div className="text-sm font-bold text-navy mb-2 uppercase tracking-widest">Strategic Collaboration</div>
            <h3 className="font-heading text-2xl font-bold text-navy-deep mb-4">Rehab Technologies & Anurag University</h3>
            <p className="text-gray-600 mb-6">
              Joining hands to develop skills, solutions & sustainability for the built environment. Fostering an innovation hub for advanced materials and Atmanirbhar Bharat through knowledge & technology.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Construction Chemicals & Advanced Materials</li>
              <li>• Structural Repairs, Retrofitting & Rehabilitation</li>
              <li>• Industry-relevant curriculum & skill development</li>
            </ul>
          </div>

          {/* A&E InfraLegal */}
          <div className="bg-app-bg rounded-2xl p-8 border border-gray-200 flex flex-col justify-center">
            <div className="text-sm font-bold text-navy mb-2 uppercase tracking-widest">Strategic Partnership</div>
            <h3 className="font-heading text-2xl font-bold text-navy-deep mb-4">A&E InfraLegal Associates</h3>
            <Image src="/logos/ae-infralegal.jpg" alt="A&E InfraLegal Associates" width={180} height={80} className="object-contain mix-blend-multiply mb-4" />
            <p className="text-gray-600 text-lg italic">
              &quot;Building stronger infrastructure. Creating lasting relationships.&quot;
            </p>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm font-bold text-navy-deep mb-1">From Conventional Thinking to Transformative Solutions:</p>
              <p className="text-xs text-gray-500">Traditional vs Innovation. Data driven, research based, scalable solutions, system driven, long-term value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Publications & Programs */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-navy-deep mb-4">PUBLICATIONS & PROGRAMS</h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 bg-navy/5 text-navy rounded-lg flex items-center justify-center mb-4 group-hover:bg-navy group-hover:text-gold transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-navy-deep mb-2">{card.title}</h4>
                  <p className="text-sm text-gray-600 mb-4 flex-grow">{card.desc}</p>
                  <div className="text-xs font-bold text-gold uppercase tracking-wider">{card.author}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
}

// Temporary icon fallback if shield is missing in import
function Shield(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
}
