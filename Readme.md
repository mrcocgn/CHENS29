# 🧵 CHENS29 – Admin CMS

**CHENS29** ist ein minimalistischer T-Shirt-Store mit einem selbstgebauten Admin-Dashboard zur Verwaltung von Produkten.  
Dieses Repo enthält das Headless CMS für die Pflege der Produktdaten – komplett ohne externe CMS- oder Admin-Frameworks.

> **Why?** Um volle Kontrolle über Code, Kosten und Sicherheit zu behalten.

---

## 🚀 Features

- ✍️ Produkte (T-Shirts) anlegen & anzeigen
- 📦 Supabase als Datenbank (PostgreSQL-basiert)
- 🛡 Keine Abhängigkeit zu fertigen CMS-Systemen
- 💡 Ideal für Erweiterungen (z. B. Bestellungen, Lagerbestand, Auth etc.)

---

## 🛠️ Tech Stack

- React (Vite)
- Supabase (DB + optional Auth)
- React Router (für `/admin`-Route)
- Plain CSS / HTML-Formulare (minimalistisch & funktional)

---

## 🔧 Setup

1. **Repo klonen**
   ```bash
   git clone https://github.com/deinname/chens29-cms.git
   cd chens29-cms
   ```

2. **Supabase konfigurieren**
   - In `src/lib/supabase.js` deine `supabaseUrl` und `anonKey` eintragen

3. **Abhängigkeiten installieren & starten**
   ```bash
   npm install
   npm run dev
   ```

4. **Admin-Panel öffnen**
   - [http://localhost:5173/admin](http://localhost:5173/admin)

---

## 📂 Struktur

```bash
src/
├── admin/
│   ├── AdminDashboard.jsx     # Hauptübersicht
│   ├── ProductForm.jsx        # Formular zum Hinzufügen von Produkten
│   └── ProductList.jsx        # Übersicht aller Produkte
└── lib/
    └── supabase.js            # Supabase-Verbindung
```

---

## 🔐 Roadmap (geplant)

- [ ] Supabase Auth (Login für Admins)
- [ ] Produkt-Bilder direkt via Supabase Storage hochladen
- [ ] Editieren & Löschen von Produkten
- [ ] Integration ins CHENS29-Store-Frontend
- [ ] SEO & Meta-Datenpflege für Produkte

---

## 🤝 Mitwirken

**Feedback, Vorschläge & Pull Requests sind willkommen!**  
Dieses Projekt soll wachsen – und zwar gemeinsam mit der Community.

---

## ©️ Lizenz

MIT – Feel free to use, improve & share.

---

> Built with 💚 and no templates.
