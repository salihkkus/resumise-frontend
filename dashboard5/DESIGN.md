# Design System Strategy: The Intelligent Workspace

## 1. Overview & Creative North Star
The North Star for this design system is **"The Digital Architect."** 

In an AI-driven career landscape, the UI must feel like a high-end, bespoke consulting firm rather than a generic SaaS tool. We move beyond "template" culture by embracing **Intentional Asymmetry** and **Tonal Depth**. This system rejects the rigid, boxy constraints of traditional dashboards in favor of an editorial layout that breathes. 

By utilizing heavy white space and overlapping glass surfaces, we create a sense of "Curated Intelligence." Every element should feel as though it was placed by a human hand, not a grid-bot. The goal is to make the complex process of career building feel effortless, transparent, and premium.

---

## 2. Colors & Surface Architecture
Our palette transitions from a sterile "white" to a sophisticated hierarchy of light-washes and tech-focused blues.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning or layout containment. 
*   **How to define boundaries:** Use background color shifts. A section intended to stand out should use `surface_container_low` (#f3f4f6) sitting on a `surface` (#f8f9fb) base. 
*   **The Goal:** A seamless, organic flow where the eye follows contrast and "weight" rather than being trapped in boxes.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the `surface_container` tiers to create nested depth:
1.  **Base Layer:** `surface` (#f8f9fb).
2.  **Structural Sections:** `surface_container_low` (#f3f4f6).
3.  **Active Workspace Cards:** `surface_container_lowest` (#ffffff).
4.  **Floating AI Insights:** Glassmorphism (see below).

### The "Glass & Gradient" Rule
To elevate the AI features of the platform, floating elements (like AI suggestions or career tips) must use **Glassmorphism**:
*   **Fill:** `surface_container_lowest` at 60-80% opacity.
*   **Effect:** Backdrop-blur (12px to 20px).
*   **Signature Texture:** Use a subtle linear gradient on main CTAs from `primary` (#003d9b) to `primary_container` (#0052cc) at a 135° angle. This adds "soul" and a sense of energy to the tech-blue core.

---

## 3. Typography: The Editorial Voice
We utilize a pairing of **Manrope** (Display/Headline) and **Inter** (Body/Labels) to balance corporate authority with modern tech precision.

*   **Display & Headlines (Manrope):** High-contrast sizing. Use `display-lg` (3.5rem) for hero moments—like a user's name or a major career milestone—to create an editorial, magazine-like feel.
*   **Body & Titles (Inter):** Focused on extreme legibility. `body-md` (0.875rem) is the workhorse for career data, ensuring the high density of a resume remains readable.
*   **Visual Hierarchy:** The massive jump between `headline-lg` and `body-md` is intentional. It forces the user's eye to navigate the page through a clear story-telling structure rather than a flat information dump.

---

## 4. Elevation & Depth
In this system, depth is a function of light and tone, not structure.

*   **The Layering Principle:** Avoid shadows on standard cards. Instead, use a "lift" through color: Place a `surface_container_lowest` card on a `surface_container_low` background. 
*   **Ambient Shadows:** For floating AI modals or dropdowns, use "Ambient Shadows":
    *   **Blur:** 40px - 60px.
    *   **Opacity:** 4% - 6% of `on_surface` (#191c1e). This mimics natural light diffusion.
*   **The "Ghost Border" Fallback:** If a container absolutely requires a border for accessibility, use `outline_variant` (#c3c6d6) at **15% opacity**. This creates a "suggestion" of a line rather than a hard boundary.
*   **Glass Depth:** When using glassmorphism, the `outline_variant` at 10% opacity can be used as a "specular highlight" on the top edge of the card to simulate a glass thickness.

---

## 5. Components & Logic

### Buttons
*   **Primary:** Gradient fill (`primary` to `primary_container`), `xl` (0.75rem) corner radius. No border.
*   **Secondary:** `surface_container_high` background with `on_secondary_container` text.
*   **Tertiary:** Ghost style; text-only using `primary` color, switching to `primary_fixed_dim` on hover.

### Cards & Lists
*   **Rule:** Forbid divider lines. 
*   **Implementation:** Separate list items using `spacing scale 2` (0.7rem) of vertical white space. Use a subtle `surface_container_lowest` hover state to highlight the active row.
*   **The AI "Insight" Card:** Always utilizes the Glassmorphism effect with a `primary_fixed` accent bar on the left edge (4px width).

### Input Fields
*   **Style:** Minimalist. No bottom line or full box. Use a `surface_container_highest` background with `xl` rounding. 
*   **State:** On focus, the background shifts to `surface_container_lowest` with a 2px "specular highlight" (Ghost Border) of `primary`.

### Additional Suggested Components
*   **Career Timeline Node:** A vertical progress tracker using `primary_fixed` for completed steps and `outline_variant` for upcoming, relying on spacing (Scale 8) rather than lines.
*   **Confidence Score Gauge:** A semi-circular glass element using `primary` and `secondary` color tokens to visualize AI-matched resume strength.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** embrace extreme white space. If a section feels "tight," double the spacing scale (e.g., move from scale 4 to scale 8).
*   **Do** overlap elements. Let a glass card sit 20px over the edge of a section to break the grid.
*   **Do** use `primary_fixed_dim` for subtle background accents behind large text to add depth.

### Don't:
*   **Don't** use black (#000000). Always use `on_surface` (#191c1e) for text to maintain a premium, softened look.
*   **Don't** use 100% opaque borders. They create visual noise and "trap" the user's focus.
*   **Don't** use standard "Drop Shadows." If an element needs to pop, use Tonal Layering or a large-radius Ambient Shadow.