import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ClipboardCheck, Search, Wrench, Shield, Home as HomeIcon, LineChart, User, Phone, Mail, MapPin, MessageCircle, ChevronRight } from "lucide-react";
import AboutSection from "@/components/AboutSection";
import VerticalsSection from "@/components/VerticalsSection";
import KnowledgeSection from "@/components/KnowledgeSection";
import CareersSection from "@/components/CareersSection";
import DynamicServices from "@/components/DynamicServices";
import ClientsSection from "@/components/ClientsSection";
import TechnicalPapersSection from "@/components/TechnicalPapersSection";

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
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-gold"></div>
              <span className="text-gold font-bold tracking-widest text-sm uppercase">REHAB TECHNOLOGIES</span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] mb-6 uppercase tracking-wide">
              ENGINEERING&apos;S HOLISTIC<br/>SOLUTIONS TO <span className="text-gold">REPAIRS &<br />LIFE-EXTENSION</span> OF STRUCTURES
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-8 font-serif">
              From Diagnosis to Repair. From Rehabilitation to Life Extension.
            </p>

            <div className="flex flex-wrap items-center gap-8 mb-10">
              <div className="flex items-center gap-3">
                <HomeIcon className="w-8 h-8 text-gold" />
                <span className="font-medium text-sm tracking-wider uppercase">Buildings</span>
              </div>
              <div className="flex items-center gap-3">
                <Wrench className="w-8 h-8 text-gold" />
                <span className="font-medium text-sm tracking-wider uppercase">Industrial Assets</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-8 h-8 text-gold" />
                <span className="font-medium text-sm tracking-wider uppercase">Infrastructure</span>
              </div>
            </div>

            <div>
              <Link
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded bg-gradient-to-r from-gold to-yellow-500 text-navy-deep hover:from-yellow-400 hover:to-gold transition-colors shadow-lg"
              >
                Explore Our Solutions <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right Column (Quote) */}
          <div className="hidden lg:flex justify-end items-start h-full pt-10 relative">
            <div className="max-w-sm text-right relative z-10">
               <div className="text-6xl text-gold font-serif leading-none mb-[-20px] opacity-80 text-left">&ldquo;</div>
               <p className="text-3xl font-serif text-white italic leading-snug text-left pl-6">
                 Structures may age.<br />Engineering can<br />extend their life.&rdquo;
               </p>
               <div className="w-16 h-1 bg-gold ml-6 mt-6"></div>
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
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-deep mb-6">OVERVIEW AND OPERATIONS</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Rehab Technologies, a national leader in engineering, design, and advisory services headquartered in Hyderabad, India. Recognized as a market leader in technology consulting services in Building, Industrial and Infrastructure sectors.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Experts in providing specialized engineering, design, and consulting services for structural Repairs, Rehabilitation & Retrofitting with focused technology verticals like RBN, ISR and NIR, offering end-to-end solutions to clients in Building, Industrial and Infrastructure sectors, operating across the country since 2001 onward.
              </p>
              <ul className="space-y-3">
                {[
                  "Engineering the structural repair, rehabilitation, and redesign.",
                  "Rectifying severe structural issues.",
                  "Forensic Investigation and Failure Analysis with Techno-Legal domain expertise, following high-profile failures."
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
                  <h3 className="font-heading text-2xl font-bold text-white mb-4">Leadership Team</h3>
                  <div className="text-gold font-heading text-5xl font-bold mb-0 leading-none">&ldquo;</div>
                  <blockquote className="text-sm italic leading-relaxed text-gray-200 mb-6 relative z-10 -mt-2">
                    A wise person goes beyond merely knowing the rules; it means a person knows how to react in a particular situation, how to analyse a situation and come to the right conclusion. Only those with experience in dealing with problems of various kinds will have professional proficiency, i.e. holistic knowledge.
                  </blockquote>
                  <div>
                    <div className="font-bold text-gold text-lg">Dr. P. Srinivasa Reddy</div>
                    <div className="text-xs text-gray-400">Professional profile: CEO & Chief Consulting Engineer</div>
                    <div className="text-xs text-gray-500 mt-1">Companies worked with, Government Projects and Institutions associated</div>
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
              <div className="absolute top-8 left-8 text-gold/20 font-serif text-8xl leading-none">&quot;</div>
              <blockquote className="relative z-10 text-xl font-medium leading-relaxed mb-6 italic">
                Not just repairs, but a longer life. We pledge to extend the life of structures with science, experience &amp; integrity.
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

      <ClientsSection />
      <KnowledgeSection />
      <TechnicalPapersSection />
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

          <div className="mt-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h3 className="font-heading text-2xl font-bold text-navy-deep mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gold" />
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gold" />
              </div>
              <input type="text" placeholder="Subject" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gold" />
              <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gold resize-none"></textarea>
              <button type="button" className="bg-navy-deep text-white px-8 py-3 rounded-lg font-bold hover:bg-gold transition-colors">Submit Request</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-deep text-gray-400 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Image src="/logomain.png" width={210} height={70} alt="Rehab Technologies" className="object-contain" />
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
              <li><Link href="/#" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link href="/#about" className="hover:text-gold transition-colors">About</Link></li>
              <li><Link href="/#verticals" className="hover:text-gold transition-colors">Verticals</Link></li>
              <li><Link href="/#services" className="hover:text-gold transition-colors">Services</Link></li>
              <li><Link href="/#projects" className="hover:text-gold transition-colors">Projects</Link></li>
              <li><Link href="/#knowledge" className="hover:text-gold transition-colors">Knowledge Centre</Link></li>
              <li><Link href="/#careers" className="hover:text-gold transition-colors">Careers</Link></li>
              <li><Link href="/#contact" className="hover:text-gold transition-colors">Contact</Link></li>
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
