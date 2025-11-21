# 二次元扁平化部落格設計指南

## Design Approach
**Reference-Based Approach** inspired by modern anime/gaming aesthetics, drawing from:
- Pixiv (artwork showcase patterns)
- AniList (clean content organization)
- Japanese gaming blogs (playful yet organized layouts)

Flat design with sharp edges, bold geometric shapes, and anime-inspired visual language.

## Typography System

**Font Families:**
- Primary: 'Noto Sans TC', sans-serif (clean, modern Chinese/English support)
- Accent: 'M PLUS Rounded 1c', sans-serif (friendly, gaming feel for headings)

**Hierarchy:**
- Page Titles: text-4xl to text-5xl, font-bold
- Section Headers: text-2xl to text-3xl, font-semibold
- Card Titles: text-xl, font-medium
- Body Text: text-base, font-normal
- Metadata: text-sm, font-light

## Layout System

**Spacing Primitives:** Tailwind units of 2, 4, 6, 8, 12, 16, 20
- Component padding: p-4, p-6, p-8
- Section spacing: py-12, py-16, py-20
- Card gaps: gap-4, gap-6, gap-8

**Grid Structure:**
- Homepage: Single column with featured sections
- Gallery (Drawings): grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Diary/Notes List: Single column cards, max-w-4xl centered
- Video Section: grid-cols-1 md:grid-cols-2

## Component Library

### Navigation
- Fixed header with semi-transparent backdrop-blur effect
- Icon + text navigation items (Home, Diary, Gallery, Notes, Videos)
- Hamburger menu for mobile (smooth slide-in drawer)
- Elevated shadow for depth (shadow-lg)

### Hero Section (Homepage)
- Large illustration/avatar on left or centered
- Name in bold, oversized typography (text-5xl)
- Self-introduction with gaming emoji/icon accents
- Geometric shape decorations in background (circles, triangles as visual elements)
- Height: min-h-screen on desktop, min-h-[70vh] on mobile

### Content Cards
- Rounded corners: rounded-xl
- Subtle shadow: shadow-md hover:shadow-xl transition
- Flat design: no gradients, solid fills with crisp borders
- Card structure: image/thumbnail → title → excerpt → metadata (date/category)
- Hover: lift effect (transform translate-y-[-4px])

### Diary Entries
- Timeline-style layout with date badges
- Each entry: featured image thumbnail + title + excerpt
- Read more button with arrow icon
- Tags displayed as rounded pill badges (rounded-full px-3 py-1)

### Gallery (Drawings)
- Masonry-style grid or uniform grid
- Lightbox modal for full-size viewing
- Image cards with rounded-xl borders
- Minimal caption overlay on hover

### Notes Section
- Card-based layout with category filters at top
- Note preview cards: icon (book/document) + title + date
- Organized by subject/category with distinct visual markers

### Video Section
- 16:9 aspect ratio containers (aspect-w-16 aspect-h-9)
- Thumbnail with play button overlay
- Video title and description below
- Grid layout for multiple videos

### Footer
- Centered layout with social media icons (gaming platforms, art sites)
- Quick links to all sections
- Copyright and simple statement
- Consistent with header aesthetics

## Images

**Hero Image:**
- Large custom avatar/character illustration (anime style)
- Positioned center or left side of hero section
- Should be vibrant and personality-driven
- Dimensions: approximately 400-600px width for desktop

**Content Images:**
- Diary: Featured images for each entry (landscape format)
- Gallery: Artwork/drawings as main content (various aspect ratios)
- Notes: Optional icon illustrations for different subjects
- Videos: Thumbnail images (16:9 ratio)

**Image Treatment:**
- Rounded corners (rounded-xl) for all images
- Subtle border or shadow for depth
- Lazy loading for performance

## Interaction Patterns

**Buttons:**
- Rounded-lg shape with px-6 py-3 padding
- When on images: backdrop-blur-sm bg-white/20 (glassmorphism effect)
- Clear icon + text combinations where appropriate
- No custom hover states specified (component handles)

**Animations:** 
- Minimal, purposeful only
- Smooth page transitions (fade-in)
- Hover lifts on cards (transform translate-y-[-4px])
- No distracting scroll animations

## Accessibility
- High contrast text
- Alt text for all images (especially artwork)
- Keyboard navigation support
- Consistent focus states (ring-2 ring-offset-2)
- ARIA labels for icon-only buttons

## Layout Specifics

**Homepage Structure:**
1. Hero (name + intro + avatar)
2. Recent Diary Entries (3-4 cards)
3. Featured Artwork (6 images grid)
4. Latest Notes (4 cards)
5. Video Showcase (2-3 featured videos)

**Content Pages:**
- Max-width containers (max-w-6xl for grids, max-w-4xl for text)
- Consistent padding (px-4 md:px-8 lg:px-12)
- Breadcrumb navigation
- Back to top button (fixed bottom-right)

**Responsive Behavior:**
- Mobile: Single column, stack all grids
- Tablet: 2-column grids
- Desktop: 3-column grids where applicable