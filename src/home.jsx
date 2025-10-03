import React, { useState } from "react";

// Single-file React app (SPA) for "Cercle Emir Abdelkader"
// Design accents inspired by French (bleu/blanc/rouge) & Algerian (vert/blanc/rouge) flags
// Pages: Accueil, A propos, Contact, Bureau, Actions, Rencontres — shared Header/Footer

// --- Small UI helpers ---
const NavLink = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={
      "px-3 py-2 rounded-xl text-sm font-medium transition-colors " +
      (isActive
        ? "bg-gray-900 text-white shadow-sm"
        : "text-gray-700 hover:bg-gray-100")
    }
    aria-current={isActive ? "page" : undefined}
  >
    {label}
  </button>
);

const FlagRibbon = () => (
  <div className="w-full">
    {/* Top dual-gradient ribbon: FR (left) + DZ (right) */}
    <div className="h-1 w-full flex">
      <div className="flex-1 bg-gradient-to-r from-blue-600 via-white to-red-600" />
      <div className="flex-1 bg-gradient-to-r from-green-600 via-white to-red-600" />
    </div>
  </div>
);

const Header = ({ current, navigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = [
    ["Accueil", "accueil"],
    ["A propos", "apropos"],
    ["Le bureau", "bureau"],
    ["Nos actions", "actions"],
    ["Nos rencontres", "rencontres"],
    ["Contact", "contact"],
  ];
  return (
    <header className="w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50 border-b border-gray-200">
      <FlagRibbon />
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="logo-cea-2048x2048.png"
            alt="Logo Cercle Emir Abdelkader"
            className="h-12 w-12 md:h-16 md:w-16 rounded-xl object-contain bg-white"
          />
          <div className="leading-tight">
            <div className="font-semibold text-gray-900">
              Cercle Emir Abdelkader
            </div>
            <div className="text-xs text-gray-500">Association loi 1901</div>
          </div>
        </div>

        {/* Navigation */}
        <nav
          aria-label="Navigation principale"
          className="items-center gap-2 lt-lap-hidden ge-lap-flex"
        >
          <NavLink
            label="Accueil"
            isActive={current === "accueil"}
            onClick={() => navigate("accueil")}
          />
          <NavLink
            label="A propos"
            isActive={current === "apropos"}
            onClick={() => navigate("apropos")}
          />
          <NavLink
            label="Le bureau"
            isActive={current === "bureau"}
            onClick={() => navigate("bureau")}
          />
          <NavLink
            label="Nos actions"
            isActive={current === "actions"}
            onClick={() => navigate("actions")}
          />
          <NavLink
            label="Nos rencontres"
            isActive={current === "rencontres"}
            onClick={() => navigate("rencontres")}
          />
          <NavLink
            label="Contact"
            isActive={current === "contact"}
            onClick={() => navigate("contact")}
          />
        </nav>
        {/* Hamburger (lt-1000px) */}
        <div className="lt-lap-flex ge-lap-hidden">
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
            className="p-2 rounded-xl border border-gray-300 hover:bg-gray-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              {mobileOpen ? (
                <path
                  fillRule="evenodd"
                  d="M18.3 5.7a1 1 0 0 1 0 1.4L13.4 12l4.9 4.9a1 1 0 1 1-1.4 1.4L12 13.4l-4.9 4.9a1 1 0 0 1-1.4-1.4L10.6 12 5.7 7.1A1 1 0 1 1 7.1 5.7L12 10.6l4.9-4.9a1 1 0 0 1 1.4 0z"
                  clipRule="evenodd"
                />
              ) : (
                <>
                  <path d="M3 6h18v2H3z" />
                  <path d="M3 11h18v2H3z" />
                  <path d="M3 16h18v2H3z" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Overlay + dropdown mobile menu */}
        {mobileOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/30 ge-lap-hidden"
              onClick={() => setMobileOpen(false)}
            />
            <div className="absolute right-4 top-full mt-2 w-64 rounded-2xl border bg-white shadow-lg p-2 ge-lap-hidden">
              {links.map(([label, key]) => (
                <button
                  key={key}
                  onClick={() => {
                    setMobileOpen(false);
                    navigate(key);
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg text-sm hover:bg-gray-50"
                >
                  {label}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </header>
  );
};

const Footer = ({ navigate }) => (
  <footer className="mt-16 border-t border-gray-200 bg-gray-50">
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Block 1 */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900">
          Cercle Emir Abdelkader
        </h3>
        <p className="mt-2 text-sm text-gray-600">
          Elus engagés pour les relations entre la France et l'Algérie
        </p>
      </div>

      {/* Block 2: Navigation */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900">Navigation</h3>
        <ul className="mt-2 space-y-1 text-sm">
          {[
            ["Accueil", "accueil"],
            ["A propos", "apropos"],
            ["Le bureau", "bureau"],
            ["Nos actions", "actions"],
            ["Nos rencontres", "rencontres"],
            ["Contact", "contact"],
          ].map(([label, key]) => (
            <li key={key}>
              <a
                href={`#${key}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(key);
                }}
                className="text-gray-700 hover:text-gray-900"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Block 3: Coordonnées */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900">Coordonnées</h3>
        <address className="mt-2 not-italic text-sm text-gray-700 space-y-1">
          <p>Cercle Emir Abdelkader</p>
          <p>Paris, France</p>
          <p>
            Email:{" "}
            <a
              className="underline hover:no-underline"
              href="mailto:contact@cercleemirabdelkader.org/"
            >
              contact@cercleemirabdelkader.org
            </a>
          </p>
        </address>
      </div>
    </div>
    <div className="h-1 w-full flex">
      <div className="flex-1 bg-gradient-to-r from-blue-600 via-white to-red-600" />
      <div className="flex-1 bg-gradient-to-r from-green-600 via-white to-red-600" />
    </div>
    <div className="py-4 text-center text-xs text-gray-500">
      © {new Date().getFullYear()} Cercle Emir Abdelkader — Tous droits
      réservés.
    </div>
  </footer>
);

const Accueil = ({ navigate }) => (
  <main className="max-w-6xl mx-auto px-4">
    <section className="grid lap-grid-2 gap-10 items-center mt-10">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-600 via-white to-red-600 text-gray-900 shadow-sm">
          France
        </div>
        <h1 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          Nous rassemblons les élus français et algériens.
        </h1>
        <p className="mt-4 text-gray-700 text-lg">
          Le Cercle Emir Abdelkader rassemble les élus français et algériens
          pour favoriser les synergies entre nos pays.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <button
            onClick={() => navigate("apropos")}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-600 via-white to-red-600 text-gray-900 px-5 py-3 text-sm font-medium shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
          >
            En savoir plus <span aria-hidden>→</span>
          </button>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              navigate("contact");
            }}
            className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-5 py-3 text-sm font-medium hover:bg-gray-50"
          >
            Nous contacter
          </a>
        </div>
      </div>

      {/* Photo 1 */}
      <div className="relative">
        <div
          className="absolute -inset-3 rounded-3xl blur-2xl opacity-30 bg-gradient-to-br from-blue-600 via-white to-red-600"
          aria-hidden
        />
        <div
          className="absolute -inset-6 rounded-3xl blur-3xl opacity-20 bg-gradient-to-tr from-green-600 via-white to-red-600"
          aria-hidden
        />
        <div className="aspect-[4/2] w-full rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
          <img
            src="photo-groupe-1-e1700957040835.png"
            alt="Photo de groupe — Cercle Emir Abdelkader"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  </main>
);

const APropos = () => (
  <main className="max-w-3xl mx-auto px-4">
    <section className="prose prose-gray max-w-none mt-10">
      <p>
        Le Cercle Emir Abdelkader est une plateforme unique dédiée au
        renforcement des relations franco-algériennes. Nommé en l’honneur d’Emir
        Abdelkader, figure emblématique de la résistance algérienne au XIXe
        siècle et symbole de la fraternité entre les peuples, notre cercle
        incarne les valeurs de dialogue, de respect mutuel et de coopération.
      </p>
      <h2>Notre mission</h2>
      <p>
        Nous sommes engagés à promouvoir un partenariat fort et durable entre la
        France et l’Algérie.
      </p>
      <p>Notre mission s’articule autour de trois axes principaux :</p>
      <h3>Dialogue politique et économique</h3>
      <p>
        Encourager le dialogue politique et économique est au cœur de notre
        action. Nous organisons des conférences et des tables rondes avec des
        personnalités influentes des deux pays, abordant des sujets allant de la
        diplomatie à la croissance économique, en passant par les innovations
        technologiques.
      </p>
      <h3>Soutien aux initiatives de paix et de coopération</h3>
      <p>
        Inspirés par l’esprit d’Emir Abdelkader, qui fut un médiateur et un
        homme de paix, nous soutenons activement les initiatives qui œuvrent
        pour la paix et la compréhension mutuelle.
      </p>
      <h3>Renforcement des liens culturels</h3>
      <p>
        La France et l’Algérie partagent une histoire riche et complexe. Du
        riche patrimoine architectural de la Casbah d’Alger aux galeries d’art
        contemporain de Paris, nos cultures s’entrelacent. Nous célébrons cette
        histoire commune à travers la promotion des événements culturels, des
        expositions et des échanges éducatifs.
      </p>
      <h2>Nos valeurs</h2>
      <p>
        Nos valeurs s’ancrent dans le respect, l’échange et la connaissance
        mutuelle. Elles sont le reflet de personnalités historiques marquantes
        telles qu’Emir Abdelkader, connu pour sa sagesse et son respect de
        l’autre et de figures françaises telles que Victor Hugo qui admirait
        profondément la culture et l’histoire algériennes.
      </p>
    </section>
  </main>
);

// --- Bureau (trombinoscope) ---
const MemberCard = ({ role, name, img }) => (
  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 text-center">
    <img
      src={img}
      alt={name}
      className="mx-auto h-28 w-28 rounded-2xl object-cover shadow"
    />
    <div className="mt-3 font-semibold text-gray-900">{name}</div>
    <div className="text-xs text-gray-500">{role}</div>
  </div>
);

const Bureau = () => (
  <main className="max-w-6xl mx-auto px-4">
    <section className="mt-10">
      <h2 className="text-3xl font-bold">Le bureau</h2>
      <p className="mt-2 text-gray-600">Trombinoscope de l'association.</p>
      <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <MemberCard
          role="Président"
          name="Nom Prénom"
          img="https://placehold.co/400x400"
        />
        <MemberCard
          role="Vice-président"
          name="Nom Prénom"
          img="https://placehold.co/400x400"
        />
        <MemberCard
          role="Vice-président"
          name="Nom Prénom"
          img="https://placehold.co/400x400"
        />
        <MemberCard
          role="Secrétaire"
          name="Nom Prénom"
          img="https://placehold.co/400x400"
        />
        <MemberCard
          role="Secrétaire adjoint"
          name="Nom Prénom"
          img="https://placehold.co/400x400"
        />
        <MemberCard
          role="Trésorier"
          name="Nom Prénom"
          img="https://placehold.co/400x400"
        />
      </div>
    </section>
  </main>
);

// --- Actions ---
const SectionNav = ({ items }) => (
  <div className="flex flex-wrap gap-2 mt-6">
    {items.map(({ id, label }) => (
      <a
        key={id}
        href={`#${id}`}
        className="px-3 py-2 rounded-xl text-sm border border-gray-300 hover:bg-gray-50"
      >
        {label}
      </a>
    ))}
  </div>
);

const Pictures = ({ q }) => (
  <div className="grid lap-grid-3 gap-4 mt-4">
    {[1, 2, 3].map((i) => (
      <div
        key={i}
        className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm"
      >
        <img
          src={`https://placehold.co/800x500/?${q},people,meeting&sig=${i}`}
          alt="illustration"
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </div>
);

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae mi non augue mollis tincidunt. Integer auctor, lectus id pulvinar convallis, arcu sem ultrices elit, in tempor ante augue id turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.";

const Actions = () => (
  <main className="max-w-6xl mx-auto px-4">
    <section className="mt-10">
      <h2 className="text-3xl font-bold">Nos actions</h2>
      <SectionNav
        items={[
          { id: "action1", label: "Action 1" },
          { id: "action2", label: "Action 2" },
          { id: "action3", label: "Action 3" },
        ]}
      />

      {[1, 2, 3].map((n) => (
        <article id={`action${n}`} key={n} className="scroll-mt-24 mt-10">
          <h3 className="text-xl font-semibold">Action {n}</h3>
          <Pictures q={`cooperation${n}`} />
          <p className="mt-4 text-gray-700">{lorem}</p>
        </article>
      ))}
    </section>
  </main>
);

// --- Rencontres ---
const Rencontres = () => (
  <main className="max-w-6xl mx-auto px-4">
    <section className="mt-10">
      <h2 className="text-3xl font-bold">Nos rencontres</h2>
      <SectionNav
        items={[
          { id: "rencontre1", label: "Rencontre 1" },
          { id: "rencontre2", label: "Rencontre 2" },
          { id: "rencontre3", label: "Rencontre 3" },
        ]}
      />

      {[1, 2, 3].map((n) => (
        <article id={`rencontre${n}`} key={n} className="scroll-mt-24 mt-10">
          <h3 className="text-xl font-semibold">Rencontre {n}</h3>
          <Pictures q={`dialogue${n}`} />
          <p className="mt-4 text-gray-700">{lorem}</p>
        </article>
      ))}
    </section>
  </main>
);

const Contact = () => {
  const [status, setStatus] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    // No back-end here. Simulate success.
    setStatus("Merci ! Votre message a été envoyé (simulation).");
    e.currentTarget.reset();
  }

  return (
    <main className="max-w-3xl mx-auto px-4">
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900">
          Formulaire de contact
        </h2>
        <p className="mt-2 text-gray-600 text-sm">
          Nous vous répondrons dès que possible.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nom
            </label>
            <input
              type="text"
              name="name"
              required
              className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              required
              className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
            ></textarea>
          </div>
          <div className="pt-2 flex items-center gap-3">
            <button
              type="submit"
              className="rounded-xl bg-gradient-to-r from-blue-600 via-white to-red-600 text-gray-900 px-5 py-3 text-sm font-medium shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
            >
              Envoyer
            </button>
            <span className="text-xs text-gray-500">
              Ou écrivez-nous à{" "}
              <a
                className="underline"
                href="mailto:contact@cercleemirabdelkader.org"
              >
                contact@cercleemirabdelkader.org
              </a>
            </span>
          </div>
          {status && (
            <div className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-xl px-3 py-2">
              {status}
            </div>
          )}
        </form>
      </section>
    </main>
  );
};

const GlobalStyles = () => (
  <style>{`
  /* Custom 1000px breakpoint utilities (no Tailwind config needed) */
  @media (max-width: 999.98px){
  .lt-lap-hidden{display:none!important}
  .lt-lap-flex{display:flex!important}
  .lt-lap-block{display:block!important}
}
@media (min-width: 1000px){
  .ge-lap-hidden{display:none!important}   /* ← maintenant bien caché ≥1000px */
  .ge-lap-flex{display:flex!important}
  .ge-lap-block{display:block!important}
  .lap-grid-2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}
  .lap-grid-3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr))}
}

  `}</style>
);

export default function App() {
  const [route, setRoute] = useState("accueil");

  // Update hash on navigation (optional deep link support)
  const navigate = (next) => {
    setRoute(next);
    window.location.hash = next;
  };

  React.useEffect(() => {
    const fromHash = window.location.hash.replace(/^#/, "");
    if (
      [
        "accueil",
        "apropos",
        "contact",
        "bureau",
        "actions",
        "rencontres",
      ].includes(fromHash)
    ) {
      setRoute(fromHash);
    }

    const onHashChange = () => {
      const h = window.location.hash.replace(/^#/, "");
      if (
        [
          "accueil",
          "apropos",
          "contact",
          "bureau",
          "actions",
          "rencontres",
        ].includes(h)
      )
        setRoute(h);
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <GlobalStyles />
      <Header current={route} navigate={navigate} />

      <div className="flex-1">
        {route === "accueil" && <Accueil navigate={navigate} />}
        {route === "apropos" && <APropos />}
        {route === "bureau" && <Bureau />}
        {route === "actions" && <Actions />}
        {route === "rencontres" && <Rencontres />}
        {route === "contact" && <Contact />}
      </div>

      <Footer navigate={navigate} />
    </div>
  );
}
