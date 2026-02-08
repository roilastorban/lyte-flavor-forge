import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Wifi, Gamepad2, AirVent, Music, Flame, Monitor, MapPin } from 'lucide-react';
import spaceSteRita from '@/assets/space-sterita.jpg';
import spaceAvotrou from '@/assets/space-avotrou.jpg';
import { ScrollReveal } from '@/hooks/useScrollReveal';

const SpacesPage = () => {
  const [form, setForm] = useState({ lieu: 'Ste Rita', personnes: '', date: '', heure: '', occasion: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Merci ! Une confirmation vous sera envoyée par WhatsApp dans les 15 minutes.');
  };

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[60vh]">
          <div className="relative">
            <img src={spaceSteRita} alt="Ste Rita" className="w-full h-full object-cover min-h-[300px]" />
            <div className="absolute inset-0 bg-foreground/30 flex items-end p-8">
              <div className="text-primary-foreground">
                <p className="font-script text-accent text-lg">Le matin & l'après-midi</p>
                <h2 className="font-display text-3xl font-semibold">Ste Rita</h2>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={spaceAvotrou} alt="Avotrou" className="w-full h-full object-cover min-h-[300px]" />
            <div className="absolute inset-0 bg-foreground/30 flex items-end p-8">
              <div className="text-primary-foreground">
                <p className="font-script text-accent text-lg">Le soir & la nuit</p>
                <h2 className="font-display text-3xl font-semibold">Avotrou</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-6 py-3 rounded shadow-lg z-10 hidden md:block">
          <p className="font-display text-lg font-semibold text-center">Un lieu, trois expériences</p>
        </div>
      </section>

      {/* Ste Rita Detail */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-2">Notre espace principal</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">Lyte Food Ste Rita</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Le repaire parfait pour vos petits-déjeuners studieux, vos déjeuners d'affaires ou une pause café gourmande. Un cadre climatisé, cosy et boisé.
                </p>
                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: Wifi, label: 'Wi-Fi gratuit' },
                    { icon: Gamepad2, label: 'Jeux de société' },
                    { icon: AirVent, label: 'Climatisation' },
                  ].map(s => (
                    <div key={s.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <s.icon size={16} className="text-accent" />
                      {s.label}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-6">Lun–Dim · 07h00 – 23h30</p>
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded">
                <img src={spaceSteRita} alt="Ste Rita intérieur" className="w-full h-full object-cover" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Avotrou Detail */}
      <section className="py-20 md:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-2">Notre terrasse</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">La Terrasse by Lyte — Avotrou</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Votre destination soirée. Grillades au feu de bois, jus frais et ambiance décontractée sous les étoiles.
                </p>
                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: Music, label: "Musique d'ambiance" },
                    { icon: Flame, label: 'Grillades en direct' },
                    { icon: Monitor, label: 'Grand écran' },
                  ].map(s => (
                    <div key={s.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <s.icon size={16} className="text-accent" />
                      {s.label}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-6">Jeu–Dim · 15h00 – 01h00</p>
              </div>
              <div className="md:order-1 aspect-[4/3] overflow-hidden rounded">
                <img src={spaceAvotrou} alt="Avotrou terrasse" className="w-full h-full object-cover" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-20 md:py-28">
        <div className="max-w-xl mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="font-script text-accent text-xl mb-3">Planifiez votre visite</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold">Réserver une table</h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-xs font-medium tracking-wide uppercase text-muted-foreground block mb-2">Lieu</label>
                <select value={form.lieu} onChange={e => setForm(f => ({ ...f, lieu: e.target.value }))} className="w-full px-4 py-3 bg-card border border-border rounded text-sm focus:outline-none focus:ring-1 focus:ring-accent">
                  <option>Ste Rita</option>
                  <option>Avotrou</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-medium tracking-wide uppercase text-muted-foreground block mb-2">Nombre de personnes</label>
                <input type="number" min="1" max="20" value={form.personnes} onChange={e => setForm(f => ({ ...f, personnes: e.target.value }))} placeholder="2" className="w-full px-4 py-3 bg-card border border-border rounded text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium tracking-wide uppercase text-muted-foreground block mb-2">Date</label>
                  <input type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} className="w-full px-4 py-3 bg-card border border-border rounded text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
                </div>
                <div>
                  <label className="text-xs font-medium tracking-wide uppercase text-muted-foreground block mb-2">Heure</label>
                  <input type="time" value={form.heure} onChange={e => setForm(f => ({ ...f, heure: e.target.value }))} className="w-full px-4 py-3 bg-card border border-border rounded text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium tracking-wide uppercase text-muted-foreground block mb-2">Occasion spéciale ? (optionnel)</label>
                <input type="text" value={form.occasion} onChange={e => setForm(f => ({ ...f, occasion: e.target.value }))} placeholder="Anniversaire, réunion..." className="w-full px-4 py-3 bg-card border border-border rounded text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
              </div>
              <button type="submit" className="w-full py-3.5 bg-accent text-accent-foreground text-sm font-medium tracking-wide uppercase rounded hover:opacity-90 transition-opacity">
                Confirmer ma réservation
              </button>
              <p className="text-xs text-center text-muted-foreground">
                Une confirmation vous sera envoyée par SMS/WhatsApp dans les 15 minutes.
              </p>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default SpacesPage;
