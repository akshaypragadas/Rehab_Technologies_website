import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CareersSection() {
  return (
    <section id="careers" className="flex flex-col bg-app-bg">
      <section className="bg-navy-deep text-white py-20 px-6 min-h-[60vh] flex flex-col justify-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-wider uppercase">
            Join Our Team
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 uppercase tracking-tight">
            Build a Stronger <span className="text-gold">Future</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            We are always looking for passionate engineers, technicians, and innovators to join our mission of extending the life of structures across India.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-2">No Open Roles Currently</h3>
            <p className="text-gray-400 text-sm mb-6">
              While we don't have any specific openings at the moment, we encourage talented professionals to send their resume for future opportunities.
            </p>
            <a href="mailto:rehabtechhyd@yahoo.com" className="inline-flex items-center justify-center px-6 py-3 bg-gold hover:bg-yellow-400 text-navy-deep font-bold rounded-lg transition-colors">
              Submit Your Resume <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
