'use client';

import { useEffect, useRef, useState } from 'react';
import { revealSection } from '../lib/animations';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';

const scheduleData = [
  { jour: "Lundi", cours: "Hatha", heure: "7h30", places: 3 },
  { jour: "Mardi", cours: "Vinyasa", heure: "12h00", places: 5 },
  { jour: "Mercredi", cours: "Yin", heure: "19h00", places: 2 },
  { jour: "Jeudi", cours: "Hatha", heure: "7h30", places: 4 },
  { jour: "Vendredi", cours: "Vinyasa", heure: "12h00", places: 6 },
  { jour: "Samedi", cours: "Yin", heure: "10h00", places: 3 },
  { jour: "Samedi", cours: "Privé", heure: "Sur demande", places: null },
];

export default function Schedule() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState("Tous");

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion && sectionRef.current) {
      revealSection(sectionRef.current);
    }
  }, []);

  const filteredSchedule = activeTab === "Tous" ? scheduleData : scheduleData.filter(item => item.cours === activeTab);

  const getPlacesText = (places: number | null): string => {
    if (places === null) return "-";
    return `${places} places`;
  };

  const getPlacesClass = (places: number | null): string => {
    if (places === null) return "text-on-surface/40";
    return places <= 2 ? "text-amber-600 font-medium" : "text-on-surface/40";
  };

  const getWhatsAppLink = (cours: string, jour: string, heure: string): string => {
    const message = `Bonjour, je souhaite réserver le cours de ${cours} le ${jour} à ${heure}.`;
    return `https://wa.me/33612345678?text=${encodeURIComponent(message)}`;
  };

  return (
    <section ref={sectionRef} id="horaires" className="bg-surface py-32 w-full">
      <div className="w-full max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center">
          <p className="text-xs tracking-widest text-on-surface/40 mb-3 font-plus-jakarta uppercase">Horaires</p>
          <h2 className="font-noto-serif text-3xl md:text-4xl text-primary mt-3 mb-2" style={{ letterSpacing: '-0.02em' }}>
            Trouvez votre créneau
          </h2>
          <p className="font-plus-jakarta text-sm text-on-surface/50 text-center mb-12">
            Studio Lumière · 14 rue des Oliviers, Montpellier 34000
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="rounded-full p-1 w-full justify-center" style={{ background: '#e5e2d9' }}>
            {["Tous", "Hatha", "Vinyasa", "Yin", "Privé"].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="rounded-full font-plus-jakarta text-sm data-[state=active]:text-surface data-[state=inactive]:text-on-surface/60"
                style={activeTab === tab ? { background: 'linear-gradient(135deg, #28351c 0%, #3e4c31 100%)' } : undefined}
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeTab} className="mt-8">
            <div className="rounded-3xl overflow-hidden" style={{ background: '#e5e2d9', boxShadow: '0 20px 40px rgba(40,53,28,0.06)' }}>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr style={{ background: '#d8d5cc' }}>
                      <th className="text-xs uppercase tracking-wide text-on-surface/50 py-4 px-6 text-left font-plus-jakarta">Jour</th>
                      <th className="text-xs uppercase tracking-wide text-on-surface/50 py-4 px-6 text-left font-plus-jakarta">Cours</th>
                      <th className="text-xs uppercase tracking-wide text-on-surface/50 py-4 px-6 text-left font-plus-jakarta">Heure</th>
                      <th className="text-xs uppercase tracking-wide text-on-surface/50 py-4 px-6 text-left font-plus-jakarta">Places</th>
                      <th className="text-xs uppercase tracking-wide text-on-surface/50 py-4 px-6 text-left font-plus-jakarta">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredSchedule.map((item, index) => (
                      <tr key={index} className="hover:bg-surface-low/60 transition" style={{ borderTop: '1px solid rgba(40,53,28,0.06)' }}>
                        <td className="py-4 px-6 font-plus-jakarta font-medium text-on-surface">{item.jour}</td>
                        <td className="py-4 px-6 font-plus-jakarta text-on-surface/60">{item.cours}</td>
                        <td className="py-4 px-6 font-plus-jakarta text-on-surface/60">{item.heure}</td>
                        <td className={`py-4 px-6 font-plus-jakarta ${getPlacesClass(item.places)}`}>{getPlacesText(item.places)}</td>
                        <td className="py-4 px-6">
                          <a
                            href={getWhatsAppLink(item.cours, item.jour, item.heure)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-plus-jakarta text-sm text-primary hover:underline underline-offset-2"
                          >
                            Réserver
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <p className="font-plus-jakarta text-sm text-on-surface/40 text-center mt-8 italic">
          Pas d'abonnement. Pas d'engagement. Paiement à la séance.
        </p>
      </div>
    </section>
  );
}
