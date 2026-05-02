# Zingara Website — Asset Management Guide

This guide details the naming convention and requirements for all website images and assets. 

## Image Naming Convention
All placeholder images in the code follow a strict naming convention based on the page's first letter and a sequential number.

- **Format**: `[page-initial][number].jpg` (e.g., `i1.jpg`, `a1.jpg`)
- **Location**: `images/` folder
- **Extension**: `.jpg` (mandatory for code consistency)

---

## 1. Home Page (`index.html`) — "i" series
| Filename | Section | Description |
| :--- | :--- | :--- |
| `i1.jpg` | Hero | Cinematic background for the main landing page. |
| `i2.jpg` | Our Story | Artistic food photography for the "Not all biryanis are bold" section. |
| `i3.jpg` | Menu Card | Signature White Chicken Biryani dish photo. |
| `i4.jpg` | Menu Card | Chicken Seekh Platter dish photo. |
| `i5.jpg` | Menu Card | Butter Chicken dish photo. |
| `i6.jpg` | Menu Card | Laal Maas (Chef's Special) dish photo. |
| `i7.jpg` | Map | Styled map visual for the location section. |

## 2. Our Story (`about.html`) — "a" series
| Filename | Section | Description |
| :--- | :--- | :--- |
| `a1.jpg` | Hero | Atmospheric background for "Before Zingara, there was a kitchen...". |
| `a2.jpg` | Split Section | "Kitchen · Mysore" — Authentic kitchen or heritage visual. |
| `a3.jpg` | Cinematic Quote | Dark, atmospheric background for the "No Shortcuts" quote section. |
| `a4.jpg` | Split Section | "The Handi · Bangalore" — Visual of the cooking process or Handi. |

## 3. Gallery (`gallery.html`) — "g" series
| Filename | Category | Description |
| :--- | :--- | :--- |
| `g1.jpg` | Hero | Background for the Gallery page header. |
| `g2.jpg` | Food | Tall image (Portrait) — Signature dish. |
| `g3.jpg` | Ambience | Square image — Interior/Seating. |
| `g4.jpg` | Food | Square image — Close up of food. |
| `g5.jpg` | Ambience | Wide image (Landscape) — Restaurant view. |
| `g6.jpg` | Process | Square image — Spice grinding or cooking. |
| `g7.jpg` | Food | Square image — Side dish or appetizer. |
| `g8.jpg` | Ambience | Square image — Decor details. |
| `g9.jpg` | Process | Square image — Sealed Dum Handi. |
| `g10.jpg` | Food | Tall image (Portrait) — Drink or dessert. |
| `g11.jpg` | Ambience | Square image — Night time view or lighting. |
| `g12.jpg` | Process | Square image — Plating the biryani. |
| `g13.jpg` | Food | Square image — Another signature dish. |

## 4. Menu (`menu.html`) — "m" series
| Filename | Section | Description |
| :--- | :--- | :--- |
| `m1.jpg` | Hero | Clean, minimal food-themed background for the Menu header. |
| `m2.jpg` | Map | Styled map visual for the footer contact section. |
| `m3.jpg` | Soups | Featured image for all Soup items. |
| `m4.jpg` | Starters | South Indian sub-category. |
| `m5.jpg` | Starters | Tandoor sub-category. |
| `m6.jpg` | Starters | Seekh Kebab & Rolls sub-category. |
| `m7.jpg` | Chinese | Non-Veg Starters sub-category. |
| `m8.jpg` | Chinese | Veg Starters sub-category. |
| `m9.jpg` | Chinese | Chinese Mains (Rice/Noodles) sub-category. |
| `m10.jpg` | Eggs | Featured image for all Egg items. |
| `m11.jpg` | Dosa & Parotta | Dosa sub-category. |
| `m12.jpg` | Dosa & Parotta | Parotta sub-category. |
| `m13.jpg` | Breads & Rice | Breads sub-category. |
| `m14.jpg` | Breads & Rice | Rice sub-category. |
| `m15.jpg` | Seafood | Featured image for all Seafood items. |
| `m16.jpg` | Signature Biryani | Featured image for the Biryani section. |
| `m17.jpg` | Biryani Combos | Featured image for the Combos section. |
| `m18.jpg` | Indian Mains | Veg Gravies sub-category. |
| `m19.jpg` | Indian Mains | Non-Veg Gravies sub-category. |
| `m20.jpg` | Beverages | Milkshakes & Refreshers sub-category. |
| `m21.jpg` | Beverages | Lassi & Others sub-category. |
| `m22.jpg` | Savories | Sandwiches sub-category. |
| `m23.jpg` | Savories | Fried (Fries/etc) sub-category. |
| `m24.jpg` | Desserts | Classics sub-category. |
| `m25.jpg` | Desserts | Sundaes sub-category. |
| `m26.jpg` | Desserts | Scoops sub-category. |

## 5. Order & Reserve (`order.html`) — "o" series
| Filename | Section | Description |
| :--- | :--- | :--- |
| `o1.jpg` | Hero | Inviting table setting or restaurant background for "Your Table is Waiting". |
| `o2.jpg` | Map | Styled map visual for the "Dine With Us" section. |

---

## Developer Notes
- **Fitting**: All containers are set to `object-fit: cover`. Ensure subjects are centered in your source images.
- **Performance**: Optimize JPGs for web (aim for < 200KB for backgrounds, < 50KB for cards).
- **Hero Animation**: Hero backgrounds include an automatic `zoom-out` animation on load.
