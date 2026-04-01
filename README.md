# Poisson d'Avril - Fisher Pricing

## Contexte
- **Date limite** : 1er avril 2026, publication le 31 mars au soir ou 1er avril tôt
- **Cible** : Développeurs utilisant Claude Code
- **Vecteur** : Post LinkedIn → Fausse page de blog Claude
- **Reveal** : Lien "Fisher Pricing" → Jouet Fisher-Price

## URL finale
- Organisation GitHub : `claude-fisher-pricing`
- URL : `https://claude-fisher-pricing.github.io/blog/claude-platform-compliance-api`

---

## Checklist des tâches

### Phase 1 : Collecte des ressources Claude ✅
- [x] Analyser la structure HTML du blog Claude
- [x] Capturer les couleurs exactes (palette)
- [x] Noter la structure de navigation (header, footer)
- [x] Utilisation de polices alternatives (Inter, JetBrains Mono via Google Fonts)

### Phase 2 : Rédaction du contenu ✅

#### Post LinkedIn
- [x] Rédiger le texte alarmiste (ton choqué/déçu) → `content/linkedin-post.md`
- [x] 2 versions disponibles (longue et courte)

#### Article de blog factice
- [x] Titre accrocheur style corporate
- [x] Introduction expliquant la "décision difficile"
- [x] Section sur les raisons économiques
- [x] Tableau de prix Fisher Pricing
- [x] Lien "Learn more about Fisher Pricing" → jouet Mattel
- [x] Date de publication : 1er avril 2026

### Phase 3 : Développement Next.js ✅

- [x] Projet Next.js initialisé (`site/`)
- [x] Export statique configuré
- [x] Page `/blog/claude-platform-compliance-api`
- [x] Design sombre style Anthropic
- [x] Header avec logo + navigation
- [x] Footer complet
- [x] Responsive design
- [x] Meta tags OpenGraph pour LinkedIn

### Phase 4 : Build & Test ✅
- [x] Build statique réussi (`npm run build`)
- [x] Output dans `site/out/`
- [ ] Test local du rendu (à faire par toi)
- [ ] Vérifier les meta tags LinkedIn

### Phase 5 : Déploiement
- [ ] Push sur GitHub (organisation claude-fisher-pricing)
- [ ] Activer GitHub Pages
- [ ] Vérifier l'URL finale
- [ ] Test du parcours complet : LinkedIn → Blog → Mattel

### Phase 6 : Publication
- [ ] Publier le post LinkedIn
- [ ] Timing optimal : 1er avril entre 8h-9h (heure de pointe LinkedIn)

---

## Ressources

### URLs de référence
- Blog Anthropic : https://www.anthropic.com/news
- Blog Claude : https://claude.ai (à vérifier)
- Page exemple à imiter : https://claude.com/blog/claude-platform-compliance-api (404 - c'est une URL inventée)
- Jouet Fisher-Price (reveal) : https://shopping.mattel.com/fr-fr/products/fisher-price-boite-de-tri-et-rangement-la-foret-de-l-amitie-jlb85-fr-fr

### Assets à collecter
```
/assets
  /css
    - main.css (styles du blog)
  /fonts
    - (polices utilisées)
  /images
    - logo-anthropic.svg
    - logo-claude.svg
    - og-image.png (pour preview LinkedIn)
```

---

## Notes techniques

### Configuration Next.js pour GitHub Pages
```javascript
// next.config.js
const nextConfig = {
  output: 'export',
  basePath: '/blog', // ou selon structure du repo
  images: {
    unoptimized: true,
  },
}
```

### Meta tags LinkedIn essentiels
```html
<meta property="og:title" content="Important Changes to Claude Pricing" />
<meta property="og:description" content="Introducing Fisher Pricing - A new approach to API costs" />
<meta property="og:image" content="URL_IMAGE" />
<meta property="og:url" content="URL_PAGE" />
```

---

## Statut actuel
**Phase en cours** : Phase 5 - Déploiement (à toi)

**Dernière mise à jour** : 31 mars 2026, 18h30

## Ce qui est prêt

### Fichiers générés
```
fisher-price/
├── PLAN.md                      # Ce fichier
├── content/
│   ├── linkedin-post.md         # 2 versions du post LinkedIn
│   ├── blog-article.md          # Draft de l'article
│   └── design-specs.md          # Specs design capturées
└── site/
    ├── out/                     # BUILD PRÊT À DÉPLOYER
    │   ├── blog/
    │   │   └── claude-platform-compliance-api/
    │   │       └── index.html   # La page de l'article
    │   └── _next/               # Assets JS/CSS
    └── ...                      # Sources Next.js
```

### Pour tester localement
```bash
cd site/out && npx serve .
```

### Pour déployer sur GitHub Pages
1. Créer l'organisation `claude-fisher-pricing` sur GitHub
2. Créer un repo (ex: `claude-fisher-pricing.github.io`)
3. Push le contenu de `site/out/` sur la branche `main`
4. Activer GitHub Pages dans les settings
