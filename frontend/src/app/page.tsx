import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ClipboardCheck, Search, Wrench, Shield, Home as HomeIcon, LineChart, User, Phone, Mail, MapPin, MessageCircle, ChevronRight } from "lucide-react";
import AboutSection from "@/components/AboutSection";
import VerticalsSection from "@/components/VerticalsSection";
import KnowledgeSection from "@/components/KnowledgeSection";
import CareersSection from "@/components/CareersSection";
import DynamicServices from "@/components/DynamicServices";

export default function Home() {
  const stats = [
    { label: "Rail & Highway Bridge Surveys", value: "400+" },
    { label: "Bridges Monitoring", value: "4000+" },
    { label: "Repairs (25 Years)", value: "750+" },
    { label: "Infra Cos Served", value: "100+" },
    { label: "States Projects", value: "11" },
  ];

  return (
    <div className="flex flex-col flex-grow">
      {/* Premium Hero Section */}
      <section id="home" className="relative bg-[#051121] text-white overflow-hidden min-h-[90vh] flex items-center pt-20">
        {/* Dynamic Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Structural repair engineers working on a bridge"
            fill
            priority
            className="object-cover opacity-30 mix-blend-luminosity transform scale-105 animate-[slowZoom_20s_ease-in-out_infinite_alternate]"
            sizes="100vw"
          />
          {/* Advanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#051121] via-[#081B33]/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#051121]/50 to-[#051121]" />
          
          {/* Signature Blueprint Grid */}
          <div className="absolute inset-0 blueprint-grid opacity-20 mask-image-b" />
        </div>

        {/* Floating Scan Line */}
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-50 shadow-[0_0_15px_rgba(232,169,60,0.8)] animate-[scan_6s_ease-in-out_infinite]" />

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center py-12">
          
          {/* Left Column (Text) */}
          <div className="max-w-2xl">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md text-gold text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8 shadow-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
              </span>
              Est. 2001 — 25 Years of Excellence
            </div>

            <h1 className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight mb-6 drop-shadow-2xl">
              Engineering&apos;s<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">
                Holistic Solutions
              </span><br />
              to Repairs & Life-Extension of Structures.
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light border-l-4 border-gold pl-6">
              From Diagnosis to Repair. From Rehabilitation to Life Extension. Structures may age. Engineering can extend their life. Buildings | Industrial Assets | Infrastructure
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/login"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-navy-deep bg-gradient-to-r from-gold to-yellow-400 overflow-hidden shadow-[0_0_30px_rgba(232,169,60,0.3)] hover:shadow-[0_0_40px_rgba(232,169,60,0.5)] transition-all duration-300 hover:-translate-y-1"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                <span className="relative flex items-center">
                  Login / Register
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-base font-bold rounded-xl text-white bg-white/5 hover:bg-white/10 hover:border-white/40 backdrop-blur-md transition-all duration-300"
              >
                Explore Our Solutions
              </Link>
            </div>
          </div>

          {/* Right Column (Glassmorphism Stats & Visuals) */}
          <div className="hidden lg:grid grid-cols-2 gap-4 relative">
            <div className="absolute -inset-10 bg-gold/5 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="flex flex-col gap-4 translate-y-12">
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-gold to-yellow-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-gold/20">
                  <Search className="text-navy-deep w-6 h-6" />
                </div>
                <div className="font-mono text-4xl font-bold text-white mb-1">4000+</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Structures Assessed</div>
              </div>
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-teal to-emerald-500 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-teal/20">
                  <Shield className="text-white w-6 h-6" />
                </div>
                <div className="font-mono text-4xl font-bold text-white mb-1">100%</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Safety Compliance</div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/20">
                  <Wrench className="text-white w-6 h-6" />
                </div>
                <div className="font-mono text-4xl font-bold text-white mb-1">750+</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Projects Repaired</div>
              </div>
              
              {/* Active Project Highlight */}
              <div className="bg-gradient-to-br from-navy-deep to-[#051121] border border-gold/30 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 blur-[30px]" />
                <div className="text-[10px] text-gold font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" /> Live Project
                </div>
                <div className="font-bold text-white mb-1">NH-44 Bridge Retrofit</div>
                <div className="text-xs text-gray-400">Karnataka, India</div>
                <div className="mt-4 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gold rounded-full w-[70%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Stats Strip */}
      <section className="bg-gold text-navy-deep py-8 border-y-4 border-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-mono text-3xl md:text-4xl font-bold">{stat.value}</span>
                <span className="text-sm font-semibold uppercase tracking-wider mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Section ── */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-full bg-navy-deep flex items-center justify-center flex-shrink-0">
                  <span className="font-mono font-bold text-gold text-xl">25</span>
                </div>
                <div>
                  <div className="font-heading font-bold text-navy-deep text-2xl">Years of Excellence</div>
                  <div className="text-sm text-concrete">Established 2001</div>
                </div>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-deep mb-6">ABOUT US</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Rehab Technologies, a national leader in engineering, design, and advisory services headquartered in Hyderabad, India. Recognized as a market leader in technology consulting services in Building, Industrial and Infrastructure sectors.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Operating across the country since 2001, we provide specialized engineering, design, and consulting services offering end-to-end solutions to clients.
              </p>
              <ul className="space-y-3">
                {[
                  "Engineering the structural repair, rehabilitation, and redesign.",
                  "Rectifying severe structural issues.",
                  "Forensic Investigation & Failure Analysis.",
                  "Construction Chemicals & Application Technology.",
                  "Techno-Legal Consultancy & Dispute Support."
                ].map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-gold rounded-full" />
                    </div>
                    <span className="text-gray-700 text-sm">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="bg-navy-deep rounded-2xl p-8 text-white flex flex-col sm:flex-row gap-8 items-start">
                <div className="relative w-40 h-56 md:w-48 md:h-64 rounded-2xl overflow-hidden border-2 border-gold/50 flex-shrink-0 shadow-lg shadow-gold/10">
                  <Image src="/ceo.png" alt="Dr. P. Srinivasa Reddy" fill className="object-cover object-top" unoptimized priority />
                </div>
                <div className="flex-1">
                  <div className="text-gold font-heading text-5xl font-bold mb-0 leading-none">&ldquo;</div>
                  <blockquote className="text-lg italic leading-relaxed text-gray-200 mb-6 relative z-10 -mt-2">
                    Technology is not just about products, it&apos;s about creating solutions that add value, build trust and sustain business for tomorrow.
                  </blockquote>
                  <div>
                    <div className="font-bold text-gold text-lg">Dr. P. Srinivasa Reddy</div>
                    <div className="text-sm text-gray-400">CEO & Chief Consulting Engineer</div>
                    <div className="text-xs text-gray-500 mt-1">Techno-Legal Expert (35 Years Exp)</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[["ISO Certified", "Quality Assured"], ["Pan India", "11+ States"], ["24/7 Support", "Always Available"], ["Expert Team", "Certified Engineers"]].map(([t1, t2]) => (
                  <div key={t1} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <div className="font-bold text-navy-deep text-sm">{t1}</div>
                    <div className="text-xs text-concrete mt-0.5">{t2}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />

      {/* Why Choose Us & Quote */}
      <section id="verticals" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-deep mb-6">WHY CHOOSE US?</h2>
              <ul className="space-y-4">
                {[
                  "Independent & Unbiased Advisory",
                  "Deep Technical Expertise & Practical Experience",
                  "Transparent Processes & Ethical Approach",
                  "Focus on Value Addition & Long-Term Impact",
                  "Commitment to Quality, Safety & Sustainability",
                ].map((point, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal/10 flex items-center justify-center text-teal mt-0.5 mr-4">
                      <Shield className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-navy-deep text-white p-10 rounded-2xl relative shadow-2xl shadow-navy-deep/20">
              <div className="absolute top-8 left-8 text-gold/20 font-serif text-8xl leading-none">"</div>
              <blockquote className="relative z-10 text-xl font-medium leading-relaxed mb-6 italic">
                Not just repairs, but a longer life. We pledge to extend the life of structures with science, experience & integrity.
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center text-gold border border-gold/50">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-gold">Dr. P. Srinivasa Reddy</div>
                  <div className="text-sm text-gray-400">CEO, Rehab Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VerticalsSection />

      {/* Services Section */}
      <section id="services" className="py-20 bg-app-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy-deep">WHY CHOOSE REHAB TECHNOLOGIES?</h2>
            <div className="w-24 h-1.5 bg-gold mx-auto mt-4 rounded-full" />
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">We combine technical expertise, advanced technology and a hands-on approach across three specialized verticals (RBN, ISR, NIR) to deliver holistic solutions for the repair, rehabilitation and life-extension of structures.</p>
          </div>
          
          <DynamicServices />
        </div>
      </section>

      {/* ── Projects Section ── */}
      <section id="projects" className="py-20 bg-navy-deep text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white">OUR PROJECTS</h2>
            <div className="w-24 h-1.5 bg-gold mx-auto mt-4 rounded-full" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Trusted by Indian Railways, NHAI, MoRTH, State Departments & 100+ Infrastructure Companies.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Railway Bridge Repair", loc: "Indian Railways", type: "Rehabilitation", stat: "Completed" },
              { title: "Highway Flyover", loc: "NHAI & MoRTH", type: "Condition Survey", stat: "Completed" },
              { title: "Industrial Asset", loc: "Trusted by Indian Railways, NHAI, MoRTH & State Departments", type: "Retrofitting", stat: "Completed" },
              { title: "Metro Pillar", loc: "Trusted by Indian Railways, NHAI, MoRTH & State Departments", type: "Waterproofing", stat: "Completed" },
              { title: "Government Complex", loc: "State PWDs", type: "Repair", stat: "Completed" },
              { title: "Port Facility", loc: "Trusted by Indian Railways, NHAI, MoRTH & State Departments", type: "Investigation", stat: "Completed" },
            ].map((proj, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-gold/50 hover:bg-white/10 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-gold uppercase tracking-wider bg-gold/10 px-2 py-1 rounded">{proj.type}</span>
                  <span className="text-xs font-medium text-teal bg-teal/10 px-2 py-1 rounded">{proj.stat}</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-gold transition-colors">{proj.title}</h3>
                <p className="text-sm text-gray-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0"></span>
                  {proj.loc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-12">
            {[["400+", "Bridge Surveys"], ["750+", "Repairs Completed"], ["11", "States Covered"]].map(([val, label]) => (
              <div key={label} className="text-center">
                <div className="font-mono text-4xl font-bold text-gold">{val}</div>
                <div className="text-sm text-gray-400 mt-1 uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <KnowledgeSection />
      <CareersSection />

      {/* Reach Us Section */}
      <section className="py-20 bg-app-bg" id="contact">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-deep">REACH US</h2>
            <div className="w-20 h-1.5 bg-gold mx-auto mt-4 rounded-full" />
            <p className="text-concrete mt-4 text-sm">We&apos;re available to answer your questions and discuss your project.</p>
          </div>
          <div className="space-y-3">
            {/* Call */}
            <a href="tel:+919849000463" className="flex items-center bg-white rounded-xl border border-gray-100 shadow-sm p-4 hover:border-gold/60 hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5 text-navy-deep" />
              </div>
              <div className="ml-4 flex-1">
                <div className="font-bold text-navy-deep">Call</div>
                <div className="text-sm text-concrete">+91 98490 00463</div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gold transition-colors" />
            </a>
            {/* WhatsApp */}
            <a href="https://wa.me/919849000463" target="_blank" rel="noopener noreferrer" className="flex items-center bg-white rounded-xl border border-gray-100 shadow-sm p-4 hover:border-gold/60 hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-[#25D366]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
              </div>
              <div className="ml-4 flex-1">
                <div className="font-bold text-navy-deep">WhatsApp</div>
                <div className="text-sm text-concrete">Chat with our team</div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gold transition-colors" />
            </a>
            {/* Email */}
            <a href="mailto:rehabtechhyd@yahoo.com" className="flex items-center bg-white rounded-xl border border-gray-100 shadow-sm p-4 hover:border-gold/60 hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5 text-navy" />
              </div>
              <div className="ml-4 flex-1">
                <div className="font-bold text-navy-deep">Email</div>
                <div className="text-sm text-concrete">rehabtechhyd@yahoo.com</div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gold transition-colors" />
            </a>
            {/* Head Office */}
            <a href="https://maps.google.com/?q=303+HSR+Arutla+Apartment+Vivek+Nagar+Hyderabad" target="_blank" rel="noopener noreferrer" className="flex items-center bg-white rounded-xl border border-gray-100 shadow-sm p-4 hover:border-gold/60 hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <MapPin className="w-5 h-5 text-navy" />
              </div>
              <div className="ml-4 flex-1">
                <div className="font-bold text-navy-deep">Head Office</div>
                <div className="text-sm text-concrete">303, HSR Arutla Apartment, Vivek Nagar,<br />Hyderabad 500020</div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gold transition-colors" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-deep text-gray-400 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center text-navy-deep font-bold text-lg">
                R
              </div>
              <span className="font-heading font-bold text-white tracking-wider text-xl">
                REHAB TECHNOLOGIES
              </span>
            </div>
            <p className="text-sm">
              Engineering the Next Life of Structures.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-gold" /> +91 98490 00463</li>
              <li className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-gold" /> rehabtechhyd@yahoo.com</li>
              <li className="flex items-start gap-2"><MapPin className="w-3.5 h-3.5 text-gold mt-0.5 flex-shrink-0" /> 303, HSR Arutla Apartment, Vivek Nagar, Hyderabad 500020</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-gold transition-colors">Our Services</Link></li>
              <li><Link href="/login" className="hover:text-gold transition-colors">Client Login</Link></li>
              <li><Link href="#contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 pt-8 border-t border-white/10 text-sm text-center">
          &copy; {new Date().getFullYear()} Rehab Technologies. All Rights Reserved. | Engineering&apos;s Holistic Solutions to Repairs & Life-Extension of Structures
        </div>
      </footer>
    </div>
  );
}
