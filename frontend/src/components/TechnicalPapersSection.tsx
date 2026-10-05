import { FileText } from "lucide-react";

export default function TechnicalPapersSection() {
  const papers = [
    { title: "Placeholder Technical Paper 1", missing: true },
    { title: "Placeholder Technical Paper 2", missing: true },
    { title: "Placeholder Technical Paper 3", missing: true },
  ];

  return (
    <section id="technical-papers" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy-deep">TECHNICAL PAPERS LIST</h2>
          <div className="w-24 h-1.5 bg-gold mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Research, case studies, and advanced methodologies published by our leadership.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {papers.map((paper, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-dashed border-gray-300 shadow-sm hover:border-gold transition-all">
              <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center mb-4 text-navy">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{paper.title}</h3>
              {paper.missing && (
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-500 text-xs font-semibold rounded-full mt-2">
                  Content Missing
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
