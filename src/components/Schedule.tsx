'use client';

import { useEffect, useRef, useState } from 'react';
import { revealSection } from '../lib/animations';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';

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
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState("Tous");

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion && sectionRef.current) {
      revealSection(sectionRef.current);
    }
  }, []);

  const filteredSchedule = activeTab === "Tous" ? scheduleData : scheduleData.filter(item => item.cours === activeTab);

  const getPlacesText = (places) => {
    if (places === null) return "-";
    return `${places} places`;
  };

  const getPlacesClass = (places) => {
    if (places === null) return "text-text-muted";
    return places <= 2 ? "text-amber-600 font-medium" : "text-text-muted";
  };

  const getWhatsAppLink = (cours, jour, heure) => {
    const message = `Bonjour, je souhaite réserver le cours de ${cours} le ${jour} à ${heure}.`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/33612345678?text=${encodedMessage}`;
  };

  return (
    <section ref={sectionRef} id="horaires" className="bg-cream py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center">
          <p className="text-xs tracking-widest text-text-light mb-3">HORAIRES</p>
          <h2 className="font-dm-serif text-3xl md:text-4xl text-text-main mt-3 mb-2">
            Trouvez votre créneau
          </h2>
          <p className="font-inter text-sm text-text-muted text-center mb-12">
            Studio Lumière · 14 rue des Oliviers, Montpellier 34000
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="bg-sand rounded-full p-1 w-full justify-center">
            <TabsTrigger value="Tous" className="rounded-full data-[state=active]:bg-sage data-[state=active]:text-white data-[state=inactive]:text-text-muted">
              Tous
            </TabsTrigger>
            <TabsTrigger value="Hatha" className="rounded-full data-[state=active]:bg-sage data-[state=active]:text-white data-[state=inactive]:text-text-muted">
              Hatha
            </TabsTrigger>
            <TabsTrigger value="Vinyasa" className="rounded-full data-[state=active]:bg-sage data-[state=active]:text-white data-[state=inactive]:text-text-muted">
              Vinyasa
            </TabsTrigger>
            <TabsTrigger value="Yin" className="rounded-full data-[state=active]:bg-sage data-[state=active]:text-white data-[state=inactive]:text-text-muted">
              Yin
            </TabsTrigger>
            <TabsTrigger value="Privé" className="rounded-full data-[state=active]:bg-sage data-[state=active]:text-white data-[state=inactive]:text-text-muted">
              Privé
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-8">
            <div className="bg-white rounded-2xl border border-sand overflow-hidden">
              <table className="w-full">
                <thead className="bg-sand">
                  <tr>
                    <th className="text-xs uppercase tracking-wide text-text-muted py-4 px-6 text-left">Jour</th>
                    <th className="text-xs uppercase tracking-wide text-text-muted py-4 px-6 text-left">Cours</th>
                    <th className="text-xs uppercase tracking-wide text-text-muted py-4 px-6 text-left">Heure</th>
                    <th className="text-xs uppercase tracking-wide text-text-muted py-4 px-6 text-left">Places</th>
                    <th className="text-xs uppercase tracking-wide text-text-muted py-4 px-6 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSchedule.map((item, index) => (
                    <tr key={index} className="border-b border-sand/50 hover:bg-cream transition">
                      <td className="py-4 px-6 font-medium text-text-main">{item.jour}</td>
                      <td className="py-4 px-6 text-text-muted">{item.cours}</td>
                      <td className="py-4 px-6 text-text-muted">{item.heure}</td>
                      <td className={`py-4 px-6 ${getPlacesClass(item.places)}`}>{getPlacesText(item.places)}</td>
                      <td className="py-4 px-6">
                        <a
                          href={getWhatsAppLink(item.cours, item.jour, item.heure)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sage text-sm hover:underline cursor-pointer"
                        >
                          Réserver
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>

        <p className="font-inter text-sm text-text-muted text-center mt-8 italic">
          Pas d'abonnement. Pas d'engagement. Paiement à la séance.
        </p>
      </div>
    </section>
  );
}