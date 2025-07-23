import React from "react";
import heroImg from "./assets/hero.jpg";
import blog1 from "./assets/blog1.jpg";
import blog2 from "./assets/blog2.jpg";
import blog3 from "./assets/blog3.jpg";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-green-100 to-white py-20 text-center relative overflow-hidden">
        <img
          src={heroImg}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-10 blur-sm"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-4 text-green-800 drop-shadow-sm">Giuseppe Castronovo</h1>
          <p className="text-xl mb-6 text-gray-700">
            Dottore Commercialista abilitato – Consulente strategico per la ristorazione.
          </p>
          <a
            href="https://wa.me/393716416084"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-full text-lg shadow hover:bg-green-700"
          >
            Contattami su WhatsApp
          </a>
        </div>
      </section>

      {/* SERVIZI */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold mb-12 text-center text-gray-800">Servizi Offerti</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            ["Controllo settimanale costi", "Food, beverage, personale. Analisi vendite, rotazione scorte, sprechi, magazzino."],
            ["Supervisione amministrativa", "Controllo documenti, flussi bancari, report settimanali, supporto alle decisioni."],
            ["Gestione del personale", "Turni, ore, ferie, verifica buste paga, costi e supporto HR operativo."],
            ["Servizi da commercialista", "Contabilità, bilanci, dichiarazioni fiscali, CU, 770, IMU, F24, paghe e pratiche."],
            ["Controllo di gestione", "Costruzione budget, forecast, KPI, margini, break-even point."],
            ["Consulenza personalizzata", "Piani su misura, formazione interna, ottimizzazione dei processi."]
          ].map(([title, desc], i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-2 text-green-700">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BLOG SECTION */}
      <section className="py-20 bg-gray-100">
        <h2 className="text-4xl font-semibold text-center mb-12 text-gray-800">Dal Blog</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          {[
            {
              img: blog1,
              title: "Come gestire il food cost settimanale",
              text: "Scopri le tecniche per calcolare e ottimizzare il food cost nel tuo ristorante."
            },
            {
              img: blog2,
              title: "Controllo di gestione nei bistrot",
              text: "Un sistema di controllo pratico per massimizzare i margini e monitorare i numeri."
            },
            {
              img: blog3,
              title: "5 errori che affossano un ristorante",
              text: "Dalla gestione delle risorse umane al magazzino: ecco cosa evitare per non perdere profitti."
            }
          ].map((post, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <img src={post.img} alt={post.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-green-700">{post.title}</h3>
                <p className="text-sm text-gray-600">{post.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTATTI */}
      <section className="bg-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Contatti</h2>
        <img
          src="./assets/giuseppe.jpg"
          alt="Giuseppe Castronovo"
          className="mx-auto mb-6 w-32 h-32 rounded-full object-cover shadow"
        />
        <p className="mb-2 text-gray-700">Email: dott.giuseppecastronovo@gmail.com</p>
        <p className="text-gray-700">
          WhatsApp diretto: <a className="text-green-600" href="https://wa.me/393716416084">393 716416084</a>
        </p>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-800 py-6 text-center text-sm text-gray-300">
        © 2025 Giuseppe Castronovo – Tutti i diritti riservati.
      </footer>
    </div>
  );
}
