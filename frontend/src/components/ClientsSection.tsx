import Image from "next/image";
import Link from "next/link";
import { User, ArrowRight } from "lucide-react";

export default function ClientsSection() {
  const institutions = [
    { name: "Aditya Birla Group", src: "aditya-birla.jpeg" },
    { name: "Anurag University", src: "anurag-university.jpeg" },
    { name: "CCP Cera-Chem", src: "ccp.jpeg" },
    { name: "Dr. Fixit", src: "dr-fixit.png", hasBg: true },
    { name: "ESCI", src: "esci.jpeg" },
    { name: "Fosroc", src: "fosroc.jpeg" },
    { name: "ICI", src: "ici.jpeg" },
    { name: "IEI", src: "iei.jpeg" },
    { name: "IIBE", src: "iibe.jpeg" },
    { name: "National Academy of Construction", src: "nac.png" },
    { name: "NACE", src: "nace.jpg" },
    { name: "Pidilite", src: "pidilite.jpeg" },
    { name: "Siddhartha Academy of Higher Education", src: "siddhartha-academy.png", hasBg: true },
    { name: "Sika", src: "sika.jpeg" },
    { name: "Vaagdevi College of Engineering", src: "vaagdevi-college.png" },
  ];

  const clients = [
    { name: "AARVEE", src: "aarvee.png" },
    { name: "Adani", src: "adani.png", hasBg: true },
    { name: "APRDC", src: "aprdc.png" },
    { name: "ASK Associates", src: "ask-associates.jpeg" },
    { name: "Continental Engineering Corp", src: "continental-engineering.jpeg" },
    { name: "Daelim", src: "daelim.jpeg" },
    { name: "Gammon", src: "gammon.jpeg" },
    { name: "GHMC", src: "ghmc.png", hasBg: true },
    { name: "GMR", src: "gmr.jpeg" },
    { name: "Government of AP", src: "govt-of-ap.jpeg" },
    { name: "GVR", src: "gvr.jpeg" },
    { name: "IVRCL", src: "ivrcl.jpeg" },
    { name: "Jawaharlal Nehru Pharma City", src: "jn-pharma-city.jpeg" },
    { name: "KMC", src: "kmc.png", hasBg: true },
    { name: "Knowledge Centre @ Anurag University", src: "knowledge-centre.jpg" },
    { name: "L&T", src: "lt.png" },
    { name: "LEA", src: "lea.jpeg" },
    { name: "Limak", src: "limak.png" },
    { name: "Malkajgiri Municipal Corporation", src: "malkajgiri-mc.png", hasBg: true },
    { name: "NCC", src: "ncc.jpeg" },
    { name: "Power Mech", src: "power-mech.png", hasBg: true },
    { name: "Ramky Pharma City", src: "visakha-pharmacity.jpeg" },
    { name: "RBN Startup company", src: "rbn-startup.jpg" },
    { name: "SHILADIA", src: "sheladia.png" },
    { name: "Soma", src: "soma.png" },
    { name: "South Central Railway", src: "south-central-railway.jpeg" },
    { name: "Vizag SEZ", src: "vizag-sez.jpg" },
  ];

  return (
    <div id="companies" className="bg-gray-50 border-t border-gray-100">
      {/* Top Heading */}
      <div className="pt-20 px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy-deep">KEY CLIENTS</h2>
        <div className="text-lg md:text-xl font-medium text-concrete mt-2 tracking-wide">TRUSTED BY INDUSTRY & INFRASTRUCTURE LEADERS</div>
        <div className="w-24 h-1.5 bg-gold mx-auto mt-6 rounded-full" />
      </div>

      {/* Dr. Profile Block */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 text-center">
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-navy/5 inline-flex flex-col items-center mx-auto hover:shadow-2xl transition-all border-b-4 border-gold">
           <div className="w-24 h-24 bg-navy-deep rounded-full flex items-center justify-center text-gold mb-4 shadow-lg border-2 border-gold/30">
              <User className="w-10 h-10" />
           </div>
           <h3 className="font-heading text-2xl font-bold text-navy-deep">DR. P. SRINIVASA REDDY</h3>
           <Link href="/#about" className="inline-flex items-center text-gold font-bold mt-4 hover:text-navy-deep transition-colors group text-sm uppercase tracking-wider">
             Professional Profile <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
           </Link>
        </div>
      </div>

      <div className="pb-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <h3 className="font-heading text-2xl font-bold text-navy">COMPANIES & INDUSTRY ASSOCIATIONS</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {institutions.map((inst, i) => (
            <div key={i} className={`flex flex-col items-center justify-center p-4 w-full h-40 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all ${inst.hasBg ? 'bg-white' : 'bg-transparent'}`}>
              <Image src={`/logos/${inst.src}`} alt={inst.name} width={200} height={100} className="object-contain max-h-20 max-w-full mix-blend-multiply mb-3" />
              <span className="text-xs text-center font-bold text-gray-700 leading-tight">{inst.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-navy-deep py-16 overflow-hidden border-t-4 border-gold">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white">CLIENTS & ORGANIZATIONS SERVED</h2>
        </div>
        
        <div className="relative w-full flex overflow-hidden group">
          <div className="animate-marquee whitespace-nowrap flex items-center space-x-12 group-hover:[animation-play-state:paused] pr-12 min-w-full flex-shrink-0">
            {clients.map((client, i) => (
              <div key={i} className={`inline-flex flex-col items-center justify-center w-56 h-40 p-4 rounded-xl flex-shrink-0 ${client.hasBg ? 'bg-white' : ''}`}>
                <Image src={`/logos/${client.src}`} alt={client.name} width={180} height={80} className={`object-contain max-h-16 w-auto filter grayscale hover:grayscale-0 transition-all duration-300 mb-3`} />
                <span className="text-[11px] font-bold text-gray-400 uppercase text-center whitespace-normal leading-tight">{client.name}</span>
              </div>
            ))}
          </div>
          <div className="animate-marquee whitespace-nowrap flex items-center space-x-12 group-hover:[animation-play-state:paused] pr-12 min-w-full flex-shrink-0" aria-hidden="true">
            {clients.map((client, i) => (
              <div key={`dup-${i}`} className={`inline-flex flex-col items-center justify-center w-56 h-40 p-4 rounded-xl flex-shrink-0 ${client.hasBg ? 'bg-white' : ''}`}>
                <Image src={`/logos/${client.src}`} alt={client.name} width={180} height={80} className={`object-contain max-h-16 w-auto filter grayscale hover:grayscale-0 transition-all duration-300 mb-3`} />
                <span className="text-[11px] font-bold text-gray-400 uppercase text-center whitespace-normal leading-tight">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-app-bg py-16 text-center px-6 border-b border-gray-200">
        <h3 className="text-sm md:text-base font-bold text-concrete mb-3 uppercase tracking-[0.2em]">TRUST BUILT THROUGH</h3>
        <div className="font-heading text-2xl md:text-4xl font-bold text-navy-deep tracking-wider">ENGINEERING • EXPERIENCE • RESULTS</div>
      </div>
    </div>
  );
}
