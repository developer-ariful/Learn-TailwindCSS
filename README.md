# Learn Tailwind css
**_Day By Day_**

# 🚀 Tailwind CSS — Day 23: Advanced Grid, Container & E-commerce Product Listing

Day 21-এ আমরা **Dashboard Layout**, Day 22-এ **Modal, Dropdown, Tabs, Drawer, Accordion** শিখেছি।

আজ আমরা এগুলোকে আরও বাস্তবভাবে ব্যবহার করে **Professional E-commerce Product Listing UI** তৈরি করব।

আজকের মূল focus:

> **Responsive Product Listing + Filter Sidebar + Product Grid + Advanced CSS Grid**

---

# 🎯 Day 23 Learning Goals

আজ আপনি শিখবেন:

* `container` ও `max-w-*`
* Advanced CSS Grid
* `grid-cols-*`
* `col-span-*`
* Product listing layout
* Filter Sidebar
* Product Grid
* Responsive Filter Layout
* `auto-rows` ও custom grid concepts
* `gap` এবং nested grid
* Product card-কে reusable pattern হিসেবে ব্যবহার
* E-commerce responsive architecture

---

# ⏰ ১ ঘণ্টার Study Plan

| সময়      | বিষয়                      |
| -------- | ------------------------- |
| 10 মিনিট | Container + Content Width |
| 10 মিনিট | Advanced Grid             |
| 10 মিনিট | Product Listing Layout    |
| 10 মিনিট | Filter Sidebar            |
| 10 মিনিট | Responsive Product Grid   |
| 5 মিনিট  | E-commerce UI Integration |
| 5 মিনিট  | Practice + Revision       |

---

# 1️⃣ `container` কী?

Tailwind-এ `container` utility content-এর maximum width responsiveভাবে পরিচালনা করতে সাহায্য করে।

```html
<div class="container mx-auto px-4">
    Content
</div>
```

এখানে:

```text
container
    ↓
Maximum width অনুযায়ী content

mx-auto
    ↓
Center

px-4
    ↓
Horizontal padding
```

তবে বাস্তব project-এ অনেক সময় আমরা explicit:

```html
<div class="mx-auto w-full max-w-7xl px-4">
```

এই pattern-টিও ব্যবহার করি।

---

# 2️⃣ Container বনাম `max-w-*`

দুটো approach বুঝে রাখুন।

### Container

```html
<div class="container mx-auto px-4">
```

### Explicit max-width

```html
<div class="mx-auto w-full max-w-7xl px-4">
```

দ্বিতীয় approach-এ আপনি নির্দিষ্ট maximum width-এর উপর বেশি control পান।

উদাহরণ:

```text
max-w-md
max-w-lg
max-w-xl
max-w-2xl
max-w-4xl
max-w-6xl
max-w-7xl
```

---

# 3️⃣ Professional Page Container

E-commerce page-এ একটি standard pattern:

```jsx
<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
  Content
</div>
```

Responsive:

```text
Mobile
↓
px-4

Tablet
↓
px-6

Desktop
↓
px-8
```

এটি আপনি প্রায় সব ধরনের page-এ ব্যবহার করতে পারবেন।

---

# 4️⃣ Product Listing Page

একটি সাধারণ E-commerce Product Listing:

```text
┌──────────────────────────────────────────────┐
│ Products                                     │
│                                              │
│ ┌───────────┐ ┌──────┐ ┌──────┐ ┌──────┐    │
│ │           │ │      │ │      │ │      │    │
│ │  Filters  │ │  P1  │ │  P2  │ │  P3  │    │
│ │           │ │      │ │      │ │      │    │
│ │ Category  │ └──────┘ └──────┘ └──────┘    │
│ │ Price     │                                │
│ │ Rating    │ ┌──────┐ ┌──────┐ ┌──────┐    │
│ │           │ │  P4  │ │  P5  │ │  P6  │    │
│ └───────────┘ └──────┘ └──────┘ └──────┘    │
└──────────────────────────────────────────────┘
```

এখানে আমাদের দুইটি প্রধান area:

```text
Filter Sidebar
+
Product Grid
```

---

# 5️⃣ Grid দিয়ে Layout

আমরা ব্যবহার করতে পারি:

```jsx
<div className="grid gap-8 lg:grid-cols-4">
```

এখন:

```text
Desktop

Column 1     Column 2     Column 3     Column 4
────────     ─────────     ─────────     ─────────
Filter       Product       Product       Product
Sidebar
```

কিন্তু Filter Sidebar-এর জন্য ১টি column এবং Products-এর জন্য ৩টি column দরকার।

তাই:

```jsx
<div className="grid gap-8 lg:grid-cols-4">
  
  <aside>
    Filters
  </aside>

  <div className="lg:col-span-3">
    Products
  </div>

</div>
```

---

# 6️⃣ `col-span-3` বুঝুন

Parent:

```text
lg:grid-cols-4
```

অর্থাৎ:

```text
1 | 2 | 3 | 4
```

Product area:

```text
lg:col-span-3
```

মানে:

```text
Product Area
┌─────────────────────────────┐
│ Column 2 │ Column 3 │ Col 4 │
└─────────────────────────────┘
```

আর Sidebar:

```text
Column 1
```

ফলে:

```text
┌─────────┬─────────────────────────────┐
│ Filter  │ Product Product Product     │
│         │ Product Product Product     │
└─────────┴─────────────────────────────┘
```

---

# 7️⃣ Complete Listing Layout

```jsx
<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

  <div className="grid gap-8 lg:grid-cols-4">

    {/* Filter Sidebar */}
    <aside className="lg:col-span-1">
      Filters
    </aside>

    {/* Products */}
    <section className="lg:col-span-3">
      Products
    </section>

  </div>

</div>
```

---

# 8️⃣ Mobile-First চিন্তা

Mobile-এ:

```text
Filters
Products
```

Desktop-এ:

```text
Filters | Products
```

তাই আমরা লিখতে পারি:

```jsx
<div className="grid gap-8 lg:grid-cols-4">
```

Mobile:

```text
1 column
```

Desktop:

```text
4 columns
```

---

# 9️⃣ Filter Sidebar

এখন একটি বাস্তব Filter UI:

```jsx
<aside
  className="
    rounded-2xl
    border
    border-gray-200
    bg-white
    p-5

    dark:border-gray-700
    dark:bg-gray-800
  "
>
  <h2 className="text-lg font-bold text-gray-900 dark:text-white">
    Filters
  </h2>

  {/* Category */}
  <div className="mt-6">
    <h3 className="font-semibold text-gray-900 dark:text-white">
      Category
    </h3>

    <div className="mt-3 space-y-3">

      <label className="flex items-center gap-3">
        <input type="checkbox" />
        <span className="text-gray-600 dark:text-gray-400">
          Electronics
        </span>
      </label>

      <label className="flex items-center gap-3">
        <input type="checkbox" />
        <span className="text-gray-600 dark:text-gray-400">
          Clothing
        </span>
      </label>

      <label className="flex items-center gap-3">
        <input type="checkbox" />
        <span className="text-gray-600 dark:text-gray-400">
          Accessories
        </span>
      </label>

    </div>
  </div>

  {/* Price */}
  <div className="mt-8">
    <h3 className="font-semibold text-gray-900 dark:text-white">
      Price
    </h3>

    <div className="mt-3 flex gap-3">
      <input
        type="number"
        placeholder="Min"
        className="
          w-full rounded-lg
          border border-gray-300
          px-3 py-2
          dark:border-gray-600
          dark:bg-gray-700
          dark:text-white
        "
      />

      <input
        type="number"
        placeholder="Max"
        className="
          w-full rounded-lg
          border border-gray-300
          px-3 py-2
          dark:border-gray-600
          dark:bg-gray-700
          dark:text-white
        "
      />
    </div>
  </div>

</aside>
```

---

# 🔟 Product Grid

Products section-এর ভিতরে আবার Grid থাকবে।

```jsx
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
```

Responsive:

```text
Mobile
↓
1 Product

Small
↓
2 Products

Large
↓
3 Products
```

---

# 1️⃣1️⃣ Product Listing

```jsx
<section className="lg:col-span-3">

  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">

    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />

  </div>

</section>
```

এখানে একটি গুরুত্বপূর্ণ বিষয় লক্ষ্য করুন:

আমাদের দুই স্তরের Grid আছে।

```text
Page Grid
│
├── Filter
│
└── Product Area
       │
       └── Product Grid
```

এটাকে বলা যায় **Nested Grid**।

---

# 1️⃣2️⃣ Nested Grid Mental Model

```text
Outer Grid
┌──────────┬─────────────────────────────┐
│ Filter   │ Inner Grid                  │
│          │                             │
│          │ ┌────┐ ┌────┐ ┌────┐       │
│          │ │ P1 │ │ P2 │ │ P3 │       │
│          │ └────┘ └────┘ └────┘       │
│          │                             │
│          │ ┌────┐ ┌────┐ ┌────┐       │
│          │ │ P4 │ │ P5 │ │ P6 │       │
└──────────┴─────────────────────────────┘
```

এটি real-world UI-তে খুব গুরুত্বপূর্ণ।

---

# 1️⃣3️⃣ Product Card

আজ আগের lessons-এর concept একত্র করি:

```jsx
function ProductCard() {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-2xl
        border border-gray-200
        bg-white
        shadow-sm
        transition
        duration-300
        hover:-translate-y-1
        hover:shadow-xl

        dark:border-gray-700
        dark:bg-gray-800
      "
    >

      <div className="aspect-square overflow-hidden">
        <img
          src="/product.jpg"
          alt="Product"
          className="
            h-full w-full
            object-cover
            transition duration-500
            group-hover:scale-110
          "
        />
      </div>

      <div className="p-5">

        <h3
          className="
            truncate
            text-lg font-bold
            text-gray-900
            dark:text-white
          "
        >
          Premium Wireless Headphone
        </h3>

        <p
          className="
            mt-2
            line-clamp-2
            text-sm
            text-gray-600
            dark:text-gray-400
          "
        >
          High-quality wireless headphone
          with premium sound and long battery life.
        </p>

        <div className="mt-4 flex items-center justify-between">

          <span className="text-xl font-bold text-blue-600">
            $120
          </span>

          <button
            className="
              rounded-lg
              bg-blue-600
              px-4 py-2
              font-semibold
              text-white
              transition
              hover:bg-blue-700
              active:scale-95
            "
          >
            Add
          </button>

        </div>

      </div>

    </article>
  );
}
```

এখানে আপনি Day 1–22-এর অনেক concept দেখতে পাচ্ছেন:

```text
group
overflow-hidden
aspect-square
object-cover
transition
group-hover
truncate
line-clamp
grid
dark:
hover:
active:
```

---

# 1️⃣4️⃣ Product Toolbar

Product grid-এর উপরে সাধারণত একটি toolbar থাকে।

```text
┌────────────────────────────────────────────┐
│ 24 Products              Sort: Newest ▼   │
└────────────────────────────────────────────┘
```

Tailwind:

```jsx
<div
  className="
    mb-6
    flex
    flex-col
    gap-4
    sm:flex-row
    sm:items-center
    sm:justify-between
  "
>
  <p className="text-gray-600 dark:text-gray-400">
    24 Products found
  </p>

  <select
    className="
      rounded-lg
      border border-gray-300
      bg-white
      px-4 py-2
      text-gray-700

      dark:border-gray-700
      dark:bg-gray-800
      dark:text-gray-300
    "
  >
    <option>Newest</option>
    <option>Price: Low to High</option>
    <option>Price: High to Low</option>
  </select>
</div>
```

এখানে responsive Flexbox:

```text
Mobile:
flex-col

Desktop:
sm:flex-row
```

---

# 1️⃣5️⃣ Search + Filter + Sort

Professional product page:

```text
┌───────────────────────────────────────────────┐
│ Search products...             Sort ▼         │
├───────────────┬───────────────────────────────┤
│ Filters       │ Products                      │
│               │                               │
│ Category      │ P1    P2    P3                │
│ Price         │ P4    P5    P6                │
│ Rating        │ P7    P8    P9                │
└───────────────┴───────────────────────────────┘
```

এখানে আলাদা component করা ভালো:

```text
ProductPage
│
├── ProductToolbar
│   ├── Search
│   └── Sort
│
└── ProductListing
    │
    ├── FilterSidebar
    │
    └── ProductGrid
        └── ProductCard
```

---

# 1️⃣6️⃣ React Component Architecture

আপনার project-এ:

```text
src/
├── components/
│
├── products/
│   ├── ProductCard.jsx
│   ├── ProductGrid.jsx
│   ├── ProductFilters.jsx
│   ├── ProductToolbar.jsx
│   └── ProductPagination.jsx
│
└── pages/
    └── Products.jsx
```

Page:

```text
Products.jsx
      ↓
ProductToolbar
      ↓
ProductFilters + ProductGrid
                     ↓
                ProductCard
```

এটি বড় application-এর জন্য অনেক বেশি maintainable।

---

# 1️⃣7️⃣ Mobile Filter Button

Mobile-এ Sidebar সবসময় দেখানো দরকার নেই।

আমরা করতে পারি:

```text
Desktop:
┌─────────┬──────────────┐
│ Filters │ Products     │
└─────────┴──────────────┘

Mobile:
┌─────────────────────────┐
│ 🔎 Search               │
│ [ Filter ] [ Sort ]     │
├─────────────────────────┤
│ Product                 │
│ Product                 │
└─────────────────────────┘
```

Filter button:

```jsx
<button
  className="
    rounded-lg
    border
    px-4 py-2
    lg:hidden
  "
>
  Filters
</button>
```

Desktop-এ:

```text
lg:hidden
```

মানে button hidden।

---

# 1️⃣8️⃣ Mobile Filter Drawer

Day 22-এর Drawer knowledge ব্যবহার করে:

```text
Mobile Filter Button
       ↓
setFilterOpen(true)
       ↓
Filter Drawer
```

এখানে Day 22-এর:

```text
fixed
inset-0
z-50
```

ব্যবহার করতে পারবেন।

অর্থাৎ:

> **আগের lesson-এর component নতুন feature-এ reuse করাই professional development।**

---

# 1️⃣9️⃣ Advanced Grid Pattern

আরেকটি pattern:

```jsx
<div className="grid grid-cols-12 gap-6">
```

এখন:

```text
12 columns
```

Filter:

```jsx
<div className="col-span-12 lg:col-span-3">
```

Products:

```jsx
<div className="col-span-12 lg:col-span-9">
```

ফলে:

```text
Desktop:

3 columns      9 columns
┌──────────┬──────────────────────────┐
│ Filters  │ Products                 │
│          │                          │
└──────────┴──────────────────────────┘
```

---

# 2️⃣0️⃣ `grid-cols-12` কেন গুরুত্বপূর্ণ?

Complex dashboard/application layout-এ 12-column grid অনেক flexible।

```text
12-column system

1 2 3 4 5 6 7 8 9 10 11 12
```

আপনি চাইলে:

```text
3 + 9
4 + 8
5 + 7
6 + 6
```

এরকম layout তৈরি করতে পারবেন।

উদাহরণ:

```jsx
<div className="grid grid-cols-12 gap-6">

  <aside className="col-span-12 lg:col-span-3">
    Filters
  </aside>

  <main className="col-span-12 lg:col-span-9">
    Products
  </main>

</div>
```

---

# 2️⃣1️⃣ `gap` বনাম `space-*`

এটি আবার মনে রাখুন।

### Grid/Flex children-এর মধ্যে:

```text
gap-4
gap-x-4
gap-y-6
```

### এক direction-এর sibling elements:

```text
space-y-4
space-x-4
```

Product grid:

```jsx
grid gap-6
```

Filter sections:

```jsx
space-y-6
```

---

# 2️⃣2️⃣ Responsive Product Grid Strategy

আমি আপনাকে এই pattern practice করতে বলব:

```jsx
<div
  className="
    grid
    grid-cols-1
    gap-5
    sm:grid-cols-2
    lg:grid-cols-3
    2xl:grid-cols-4
  "
>
```

অর্থ:

```text
Mobile
1

Small
2

Large
3

Very Large
4
```

এটি e-commerce product listing-এর জন্য অত্যন্ত useful pattern।

---

# 🛒 2️⃣3️⃣ Complete E-commerce Structure

আজকের সব concept একত্র করলে:

```text
Products Page
│
├── Container
│
├── Page Header
│
├── Search + Sort
│
└── Main Grid
    │
    ├── Filter Sidebar
    │   ├── Categories
    │   ├── Price
    │   ├── Rating
    │   └── Availability
    │
    └── Product Section
        │
        ├── Product Count
        │
        ├── Product Grid
        │   ├── ProductCard
        │   ├── ProductCard
        │   ├── ProductCard
        │   └── ...
        │
        └── Pagination
```

---

# 🧠 2️⃣4️⃣ আজকের সবচেয়ে গুরুত্বপূর্ণ Architecture

একটি বড় page-কে কখনো একটিমাত্র component হিসেবে ভাববেন না।

বরং:

```text
Page
 ↓
Container
 ↓
Layout
 ↓
Section
 ↓
Component
 ↓
Element
```

উদাহরণ:

```text
Products Page
      ↓
Main Container
      ↓
Product Layout
      ↓
Filter + Product Section
      ↓
Product Grid
      ↓
Product Card
      ↓
Image + Title + Price + Button
```

এই চিন্তাভাবনা আপনার React component architecture-এর সাথেও সরাসরি সম্পর্কিত।

---

# 🧪 2️⃣5️⃣ আজকের Practice

### Practice 1 — Container

তৈরি করুন:

```text
max-w-7xl
mx-auto
px-4
sm:px-6
lg:px-8
```

---

### Practice 2 — Filter + Products

Desktop:

```text
Filter = 25%
Products = 75%
```

Mobile:

```text
Filter Button
Products
```

---

### Practice 3 — Product Grid

কমপক্ষে 8টি product:

```text
Mobile → 1
Tablet → 2
Desktop → 3
Large → 4
```

---

### Practice 4 — Dark Mode

সবগুলোতে Dark Mode যুক্ত করুন:

* Filter
* Search
* Select
* Product Card
* Product title
* Description
* Price
* Button

---

### Practice 5 — Mobile Filter Drawer

Day 22-এর Drawer ব্যবহার করে mobile filter তৈরি করুন।

---

# 🚀 2️⃣6️⃣ Day 23 Mini Project

## **TechStore Product Listing Page**

তৈরি করুন:

```text
┌───────────────────────────────────────────────┐
│ TechStore                                     │
│                                               │
│ Search products...             Sort ▼         │
├───────────────┬───────────────────────────────┤
│ FILTERS       │ 24 Products                   │
│               │                               │
│ Category      │ ┌────┐ ┌────┐ ┌────┐        │
│ □ Laptop      │ │ P1 │ │ P2 │ │ P3 │        │
│ □ Phone       │ └────┘ └────┘ └────┘        │
│ □ Headphone   │                               │
│               │ ┌────┐ ┌────┐ ┌────┐        │
│ Price         │ │ P4 │ │ P5 │ │ P6 │        │
│ Min / Max     │ └────┘ └────┘ └────┘        │
│               │                               │
│ Rating        │        Pagination             │
└───────────────┴───────────────────────────────┘
```

### অবশ্যই ব্যবহার করবেন:

```text
container
max-w
grid
grid-cols
col-span
gap
flex
responsive
dark:
group
transition
line-clamp
truncate
```

---

# 🧪 Day 23 Self-Test

নিজেকে জিজ্ঞেস করুন:

1. `container` কী?
2. `max-w-7xl mx-auto` কেন ব্যবহার করি?
3. `grid-cols-4` কী করে?
4. `col-span-3` কী?
5. Nested Grid কী?
6. `grid-cols-12` কেন complex layout-এ useful?
7. Product Sidebar এবং Product Grid কীভাবে responsive করবেন?
8. Mobile-এ Filter Sidebar কীভাবে Drawer-এ পরিবর্তন করবেন?
9. `gap` এবং `space-y`-এর পার্থক্য কী?
10. কেন ProductCard আলাদা reusable component হওয়া উচিত?

---

# 📌 Day 23 Cheat Sheet

```text
CONTAINER
container
mx-auto
max-w-7xl
w-full
px-4
sm:px-6
lg:px-8

GRID
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
xl:grid-cols-4
grid-cols-12

SPAN
col-span-1
col-span-2
col-span-3
col-span-12

GAP
gap-4
gap-6
gap-8
gap-x-*
gap-y-*

RESPONSIVE
lg:grid-cols-4
lg:col-span-3
lg:hidden
lg:block

PRODUCT UI
group
overflow-hidden
aspect-square
object-cover
truncate
line-clamp-2
transition
group-hover:scale-110
```

---

# 🎯 Day 23 Mental Model

```text
E-commerce Requirement
          ↓
      Page Layout
          ↓
   Container + Grid
          ↓
   ┌──────┴──────┐
   ↓             ↓
 Filters      Products
                ↓
            Product Grid
                ↓
           Product Card
                ↓
      Responsive + Dark Mode
```

## 🔥 আজকের মূল শিক্ষা

> **Advanced Tailwind শেখার অর্থ শুধু আরও বেশি utility class মুখস্থ করা নয়; বরং Grid, Flexbox, Responsive Design এবং Reusable Components ব্যবহার করে বড় UI-কে সঠিকভাবে structure করতে শেখা।**
