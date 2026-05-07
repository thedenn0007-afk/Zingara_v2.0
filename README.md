# Zingara Website — Asset Management Guide

This guide details the naming convention and requirements for all website images and assets. 

## Image Naming Convention
All placeholder images in the code follow a strict naming convention based on the page's first letter and a sequential number.

- **Format**: `[page-initial][number].webp` (e.g., `i1.webp`, `a1.webp`)
- **Location**: `images/` folder
- **Extension**: `.webp` (mandatory for code consistency)

---

## 1. Home Page (`index.html`) — "i" series
| Filename | Section | Description |
| :--- | :--- | :--- |
| `i1.webp` | Hero | Cinematic background for the main landing page. |
| `i2.webp` | Our Story | Artistic food photography for the "Not all biryanis are bold" section. |
| `i3.webp` | Menu Card | Signature White Chicken Biryani dish photo. |
| `i4.webp` | Menu Card | Chicken Seekh Platter dish photo. |
| `i5.webp` | Menu Card | Butter Chicken dish photo. |
| `i6.webp` | Menu Card | Laal Maas (Chef's Special) dish photo. |
| `i7.webp` | Map | Styled map visual for the location section. |

## 2. Our Story (`about.html`) — "a" series
| Filename | Section | Description |
| :--- | :--- | :--- |
| `a1.webp` | Hero | Atmospheric background for "Before Zingara, there was a kitchen...". |
| `a2.webp` | Split Section | "Kitchen · Mysore" — Authentic kitchen or heritage visual. |
| `a3.webp` | Cinematic Quote | Dark, atmospheric background for the "No Shortcuts" quote section. |
| `a4.webp` | Split Section | "Dum Cooking · Bangalore" — Visual of the cooking process. |
| `founder.jpg` | Founder Section | Portrait of Mr. K. Mohan. |

## 3. Gallery (`gallery.html`) — "g" series
| Filename | Category | Description |
| :--- | :--- | :--- |
| `g1.webp` | Hero | Background for the Gallery page header. |
| (Grid) | All | The gallery grid now uses a random mix of images from the **"m" series** (Menu) to showcase food variety. |

## 4. Menu (`menu.html`) — "m" series
| Filename | Section | Description |
| :--- | :--- | :--- |
| `m1.webp` | Hero | Clean, minimal food-themed background for the Menu header. |
| `m2.webp` | Map | Styled map visual for the footer contact section. |
| `m3.webp` | Soups | Featured image for all Soup items. |
| `m4.webp` | Starters | South Indian sub-category. |
| `m5.webp` | Starters | Tandoor sub-category. |
| `m6.webp` | Starters | Seekh Kebab & Rolls sub-category. |
| `m7.webp` | Chinese | Non-Veg Starters sub-category. |
| `m8.webp` | Chinese | Veg Starters sub-category. |
| `m9.webp` | Chinese | Chinese Mains (Rice/Noodles) sub-category. |
| `m10.webp` | Eggs | Featured image for all Egg items. |
| `m11.webp` | Dosa & Parotta | Dosa sub-category. |
| `m12.webp` | Dosa & Parotta | Parotta sub-category. |
| `m13.webp` | Breads & Rice | Breads sub-category. |
| `m14.webp` | Breads & Rice | Rice sub-category. |
| `m15.webp` | Seafood | Featured image for all Seafood items. |
| `m16.webp` | Signature Biryani | Featured image for the Biryani section. |
| `m17.webp` | Biryani Combos | Featured image for the Combos section. |
| `m18.webp` | Indian Mains | Veg Gravies sub-category. |
| `m19.webp` | Indian Mains | Non-Veg Gravies sub-category. |

## 5. Order & Reserve (`order.html`) — "o" series
| Filename | Section | Description |
| :--- | :--- | :--- |
| `o1.webp` | Hero | Inviting table setting or restaurant background for "Your Table is Waiting". |
| `o2.webp` | Map | Styled map visual for the "Dine With Us" section. |

---

## Developer Notes
- **Fitting**: All containers are set to `object-fit: cover`. Ensure subjects are centered in your source images.
- **Performance**: Optimize for web using **WebP** (aim for < 200KB for backgrounds, < 50KB for cards/icons).
- **Hero Animation**: Hero backgrounds include an automatic `zoom-out` animation on load.
