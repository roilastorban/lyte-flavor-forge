
# Refonte Style Flôr Porto - Imitation Fidèle

## Analyse des Captures d'écran Flôr

D'après les captures fournies, voici les éléments clés du design Flôr Porto à reproduire :

### 1. Hero Section (Capture 1)
- Fond flouté/dégradé beige-gris doux qui occupe tout l'écran
- Image centrale rectangulaire avec coins arrondis (pas plein écran)
- Logo "flôr" en overlay blanc sur l'image centrale
- Texte "LOCAL TIME AT FLÔR: 7:34 PM" au-dessus de l'image
- Sous-titre en bas : "coffee · wine · cocktails" en texte fin espacé

### 2. Section Éditoriale (Capture 2)
- Grande phrase poétique en typographie serif : "coffee and pastries by morning. snacks and cocktails as the day flows."
- Lien minimaliste "make a reservation" en dessous
- Timeline verticale à droite avec indicateur "morning" et ligne verticale
- Icônes soleil/lune pour indiquer le moment de la journée

### 3. Timeline Produits (Captures 2 & 3)
- Layout alterné : image à gauche + texte à droite, puis inversé
- Images rectangulaires verticales avec coins arrondis
- Titre simple en minuscules : "coffee", "wine", "cocktails"
- Horaire : "from 10:00" ou "served all day"
- Description poétique en paragraphe
- Lien minimaliste : "view our coffee menu"

---

## Modifications à Apporter

### Header
- Supprimer la barre d'annonce sombre
- Header transparent/léger sur fond clair
- Logo "Lyte Food" à gauche (style manuscrit comme flôr)
- Droite : "FR / EN" + "réserver" + icône menu hamburger
- Pas de panier visible dans le header principal (le mettre ailleurs)

### Hero Section (Refonte complète)
- Fond : dégradé flouté beige/crème
- Image centrale : format portrait, coins arrondis, avec overlay du logo "Lyte Food" en blanc
- Au-dessus de l'image : "HEURE LOCALE À LYTE: [heure actuelle]"
- En dessous : "coffee shop · restaurant · terrasse" en texte espacé fin

### Section Éditoriale (Nouvelle)
- Grande phrase poétique multiligne en Playfair Display :
  "bouillies et café le matin. burgers et salades au fil du jour. grillades sous les étoiles."
- Lien : "réserver une table"

### Timeline Section (Refonte)
- Ajouter la barre verticale de timeline à droite avec indicateurs (morning/afternoon/evening)
- Icônes soleil/lune
- Layout alterné fidèle au modèle :
  - **Morning** : Image gauche + "Le Coffee Shop" / "dès 07h00" / description / "voir le menu café"
  - **Afternoon** : "Le Restaurant" droite + Image gauche / "dès 12h00" / description / "voir le menu"
  - **Evening** : Image gauche + "La Terrasse" / "dès 18h00" / description / "voir la carte grillades"

### Sections Suivantes
- Garder Best-sellers, Locations, Reviews mais les épurer davantage pour coller au style minimaliste
- Réduire les décorations et badges

---

## Structure des Fichiers à Modifier

1. **src/components/layout/Header.tsx** - Refonte complète style Flôr
2. **src/components/home/HeroSection.tsx** - Fond flouté + image centrale avec logo overlay
3. **src/components/home/EditorialSection.tsx** (nouveau) - Grande phrase poétique
4. **src/components/home/TimelineSection.tsx** - Ajout timeline verticale droite + layout exact
5. **src/pages/Index.tsx** - Intégrer la nouvelle section éditoriale
6. **src/index.css** - Styles CSS pour le fond flouté et la timeline

---

## Détails Techniques

### Fond Flouté Hero
```text
- Utiliser un dégradé radial CSS : radial-gradient(ellipse at center, #e8e0d8 0%, #d4ccc4 50%, #c8beb4 100%)
- Appliquer un léger blur sur le background
- L'image centrale sera en position: relative avec z-index supérieur
```

### Timeline Verticale
```text
- Positionnée à droite de la section (position: fixed ou sticky)
- Ligne verticale fine (1px) avec des points indicateurs
- Labels : "morning", "afternoon", "evening"
- Icônes : Sun (soleil) et Moon (lune) de lucide-react
```

### Image Centrale Hero
```text
- Format portrait (aspect-ratio: 3/4)
- Coins arrondis (border-radius: 8px)
- Ombre subtile
- Logo "Lyte Food" superposé en blanc au centre
```

---

## Textes Adaptés pour Lyte Food

### Hero
- "HEURE LOCALE À LYTE: [heure dynamique]"
- Sous-titre : "coffee shop · restaurant · terrasse"

### Section Éditoriale
- "bouillies et café le matin. burgers et salades au fil du jour. grillades sous les étoiles."
- Lien : "réserver une table"

### Timeline
- **Coffee Shop** : "dès 07h00" - "Commencez la journée avec nos cafés de spécialité et bouillies traditionnelles. Douceur et saveur, préparés avec soin."
- **Restaurant** : "dès 12h00" - "Burgers juteux, salades fraîches et l'incontournable Atassi. Une cuisine généreuse qui nourrit le corps et l'âme."
- **Terrasse** : "dès 18h00" - "Quand le soir s'installe, les grillades prennent le relais. Brochettes parfumées, jus frais et ambiance décontractée."
