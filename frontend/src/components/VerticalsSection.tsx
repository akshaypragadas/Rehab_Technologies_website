import { Briefcase, Shield, Wrench, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function VerticalsSection() {
  return (
    <section className="flex flex-col bg-app-bg py-20">

      {/* Verticals Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* RBN */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-2 h-full bg-gold transition-all duration-300 group-hover:w-4"></div>
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 border border-blue-100">
                  <Shield className="w-10 h-10" />
                </div>
                <h2 className="font-heading text-4xl font-bold text-navy-deep mb-2">RBN</h2>
                <div className="text-lg font-medium text-concrete mb-4">Repairing Buildings Nationally</div>
                <div className="text-xs font-bold uppercase tracking-widest text-gold bg-gold/10 inline-block px-3 py-1 rounded">Startup Recognised by Govt. of India</div>
              </div>
              <div className="md:col-span-3 space-y-4 text-gray-700">
                <p>
                  <strong>Concrete Healthcare Professional Services.</strong> Connecting Building Owners, Professionals, Service Providers, Technology & Materials on One Integrated Platform.
                </p>
                <p>
                  With 600+ Investigation Associates and 4,500+ Implementation Service Providers, RBN is a national movement towards Scientific, Sustainable & Professional Building Repairs and Life Extension.
                </p>
                <ul className="grid sm:grid-cols-2 gap-3 mt-4">
                  <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-gold" /> Expert Assessment & Diagnosis</li>
                  <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-gold" /> Advanced Rehabilitation</li>
                  <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-gold" /> Mobile Diagnostic Centre</li>
                  <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-gold" /> Strengthening & Retrofitting</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ISR & NIR Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6 border border-amber-100">
                <Wrench className="w-8 h-8" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-navy-deep mb-2">ISR</h2>
              <div className="font-medium text-concrete mb-6">Industrial Structures Repairs</div>
              <p className="text-gray-600 leading-relaxed">
                Specialized repair, rehabilitation and life-extension services tailored explicitly for complex industrial assets, ensuring minimal downtime and maximum safety compliance.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-6 border border-teal-100">
                <Briefcase className="w-8 h-8" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-navy-deep mb-2">NIR</h2>
              <div className="font-medium text-concrete mb-6">National Infrastructure Refurbishment</div>
              <p className="text-gray-600 leading-relaxed">
                Refurbishment, repair, rehabilitation and life-extension of India's vast infrastructure assets, encompassing bridges, highways, ports, and critical national projects.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-deep py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Partner with our RBN Ecosystem</h2>
          <p className="text-gray-400 mb-8">Calling practicing civil engineers, consultants & technical professionals in AP, Telangana & Odisha to join hands as Channel Partners.</p>
          <Link href="/#contact" className="inline-flex items-center justify-center px-8 py-4 bg-gold hover:bg-yellow-400 text-navy-deep font-bold rounded-xl transition-colors">
            Become a Partner
          </Link>
        </div>
      </section>
    </section>
  );
}
