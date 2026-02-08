

# Lyte Food — Site Web Restaurant (Style Flôr Porto)

## Vision
Un site élégant et minimaliste inspiré de florporto.com, adapté pour Lyte Food avec ses couleurs chaudes (Brun Expresso, Crème de Lait, Or Ambré, Terre Cuite) et un panier e-commerce fonctionnel mais discret, parfaitement intégré au design éditorial.

---

## Identité Visuelle
- **Palette** : Brun Expresso (#3D2317), Crème de Lait (#F9F4F0), Or Ambré (#C28E40), Terre Cuite (#A6442E)
- **Typographies** : Playfair Display (titres), Montserrat (corps), Dancing Script (accents)
- **Style** : Minimaliste, aéré, éditorial — fidèle à l'esprit Flôr Porto

---

## Structure du Site (5 pages + composants)

### 🔝 Header (toutes les pages)
- Barre d'annonce sombre : "📍 Ouvert à Ste Rita & Avotrou — Commandez en ligne"
- Logo "Lyte Food" centré
- Navigation gauche : La Carte, Réserver
- Actions droite : Recherche, Panier (badge dynamique)
- Sticky au scroll, animations de soulignement au survol

### 🏠 Page 1 : Accueil (Home)
- **Hero** : Grande image/fond flouté style Flôr avec photo centrale, logo overlay, et sous-titre "coffee shop · restaurant · terrasse"
- **Section éditoriale** : Texte d'accroche poétique + CTA "Commander en ligne" et "Réserver une table"
- **Timeline du jour** (style Flôr) : Sections Morning/Afternoon/Evening avec photos et descriptions pour Coffee Shop, Restaurant, Terrasse — chacune avec un lien "voir le menu"
- **Best-sellers** : Carousel horizontal de 4 produits phares avec ajout rapide au panier
- **Localisations** : 2 blocs Ste Rita & Avotrou avec horaires et bouton Maps
- **Avis clients** : Slider horizontal avec 3 témoignages étoilés
- **Partenaires** : Ligne de logos grisés

### 📋 Page 2 : La Carte (Catalogue)
- Barre de catégories flottante : Coffee Shop, Bouillies, Fast-Food, Plats, Grillades, Jus & Thés
- Grille de produits par section avec photo, nom, prix, bouton "+" discret
- Pop-up fiche produit au clic : image agrandie, options de personnalisation (accompagnement, taille, sauce), bouton "Ajouter au panier"
- Badges "Signature Lyte" et "Populaire" sur certains produits
- FAQ en accordéon en bas de page

### 🏡 Page 3 : Nos Espaces
- Hero split en 2 colonnes : Ste Rita vs Avotrou
- Section détaillée pour chaque lieu (description, services, galerie photos)
- Formulaire de réservation : Lieu, nombre de personnes, date/heure, occasion
- Google Maps intégré stylisé

### 🛒 Panier (Tiroir latéral)
- S'ouvre en slide depuis la droite sans changer de page
- Vignettes produits, sélecteur de quantité, prix en temps réel
- Bouton "Retour" + Bouton "Payer" (vers checkout)

### 💳 Page 4 : Checkout (Validation)
- Page épurée 2 colonnes : coordonnées (nom, téléphone WhatsApp, mode livraison/retrait, adresse) + récapitulatif commande
- Champ note : "Une préférence particulière ?"
- Bouton final Terre Cuite : "Valider ma commande — From Lyte with Love ❤️"

### ✅ Page 5 : Confirmation (Success)
- Message de remerciement personnalisé avec prénom
- Animation de confetti (grains de café stylisés)
- Boutons : "Suivre sur WhatsApp" + "Retour à l'accueil"

### 🦶 Footer (toutes les pages)
- Fond Brun Expresso, texte Crème de Lait
- 4 sections : Identité & slogan, Liens rapides, Contact & horaires des 2 sites, Réseaux sociaux
- Bouton "Retour en haut" après 500px de scroll

---

## Fonctionnalités Clés
- **Panier fonctionnel** côté client (state React) — pas de backend, c'est un prototype/démo
- **Images générées par IA** pour les plats, boissons et espaces
- **Animations douces** : fade-in au scroll, survols élégants, transition du panier
- **Micro-interactions** : badge panier qui rebondit, bouton "Ajouter" avec check, skeleton loading
- **100% responsive** : mobile-first comme florporto.com
- **Note de prototype** discrète sur la page de checkout

