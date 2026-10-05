import { ClipboardCheck, Search, Wrench, Shield, Home as HomeIcon, LineChart, FileText } from "lucide-react";

export default function DynamicServices() {
  const servicesData = [
    {
      name: "Feasibility Studies & Design",
      description: "Offers feasibility studies, detailed repair & rehabilitation and retrofitting design, refurbishment project supervision, technical due diligence, structural audits, and life-extension of structures.",
      icon: ClipboardCheck
    },
    {
      name: "Test Results Evaluation",
      description: "Evaluating comprehensive geotechnical and structural test results (soil, concrete, and foundation tests) mandated by the project authority.",
      icon: Search
    },
    {
      name: "Engineering Assessments",
      description: "Engineering assessments, specifically covering the SCOPE OF SERVICES.",
      icon: LineChart
    },
    {
      name: "Structural Blueprints",
      description: "Knowledge Specialists & Technology Leaders tasked with drafting the final blueprint for required structural interventions to restore the structures to a fully safe and functional condition.",
      icon: FileText
    },
    {
      name: "Waterproofing & Protection",
      description: "To protect and strengthen its foundation against severe seepage and piping issues.",
      icon: Shield
    },
    {
      name: "Execution & Implementation",
      description: "Execution: Physical rehabilitation work implementation with full-fledged activities.",
      icon: Wrench
    },
    {
      name: "Specialized Deployment",
      description: "Deploying specialized engineering teams, sophisticated machinery and TRAINED, CERTIFIED & VALIDATED technicians and workers.",
      icon: HomeIcon
    }
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {servicesData.map((service, i) => {
        const Icon = service.icon;
        return (
          <div key={i} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-gold/50 transition-all group">
            <div className="w-14 h-14 bg-navy/5 text-navy rounded-lg flex items-center justify-center mb-6 group-hover:bg-navy group-hover:text-gold transition-colors">
              <Icon className="w-7 h-7" />
            </div>
            <h3 className="font-heading text-xl font-bold mb-3">{service.name}</h3>
            <p className="text-concrete text-sm">{service.description}</p>
          </div>
        );
      })}
    </div>
  );
}
