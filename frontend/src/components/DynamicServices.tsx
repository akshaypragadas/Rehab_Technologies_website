"use client";
import { useEffect, useState } from "react";
import { apiGetServices } from "@/lib/api";
import { ClipboardCheck, Search, Wrench, Shield, Home as HomeIcon, LineChart, WrenchIcon } from "lucide-react";

export default function DynamicServices() {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiGetServices().then(setServices).catch(console.error).finally(() => setLoading(false));
  }, []);

  const iconMap: Record<string, any> = {
    ClipboardCheck, Search, Shield, HomeIcon, LineChart, Wrench: WrenchIcon
  };

  if (loading) {
    return <div className="text-center text-concrete py-12">Loading services...</div>;
  }

  const defaultServices = [
    { id: 's1', name: "Condition Survey & Health Monitoring", description: "Data-driven insights for informed decisions on structural health.", icon: "ClipboardCheck" },
    { id: 's2', name: "Investigation & Diagnosis", description: "Advanced NDT, material & structural investigation.", icon: "Search" },
    { id: 's3', name: "Repair Engineering & Design", description: "Advanced solutions for durable results and restoration.", icon: "Wrench" },
    { id: 's4', name: "Rehabilitation & Refurbishment", description: "Scientific solutions for enhancing load-carrying capacity & safety.", icon: "Shield" },
    { id: 's5', name: "Waterproofing & Protection", description: "Protecting structures against severe seepage and extending life.", icon: "HomeIcon" },
    { id: 's6', name: "Project Management & Quality Control", description: "Execution with sophisticated machinery and validated technicians.", icon: "LineChart" }
  ];

  const allServices = [...defaultServices, ...services];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {allServices.map((service, i) => {
        const Icon = iconMap[service.icon] || WrenchIcon;
        return (
          <div key={service.id || i} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-gold/50 transition-all group">
            <div className="w-14 h-14 bg-navy/5 text-navy rounded-lg flex items-center justify-center mb-6 group-hover:bg-navy group-hover:text-gold transition-colors">
              <Icon className="w-7 h-7" />
            </div>
            <h3 className="font-heading text-xl font-bold mb-3">{service.name}</h3>
            <p className="text-concrete">{service.description}</p>
          </div>
        );
      })}
    </div>
  );
}
