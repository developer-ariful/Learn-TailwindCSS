# Learn Tailwind css
**_Day By Day_**

## 🚀 Tailwind CSS — Day 24

#### Pagination, Search, Filter & Sort সহ Advanced Product Listing UI

আজ আমরা **Day 23-এর Product Listing Page**-কে আরও বাস্তবসম্মত করব।

আজকের মূল লক্ষ্য:

> **Product Listing → Search → Filter → Sort → Pagination → Responsive UI**

এগুলো জানলে আপনি বাস্তব **E-commerce, Admin Dashboard, SaaS Dashboard**-এর Data UI অনেক ভালোভাবে তৈরি করতে পারবেন।

---

## 🎯 আজকের Learning Objectives

আজ শিখবেন:

1. Pagination UI
2. Previous / Next Button
3. Active Pagination State
4. Search UI
5. Category Filter UI
6. Sort Dropdown
7. Filter + Search + Sort Layout
8. Loading / Disabled State
9. Responsive Pagination
10. React State + Tailwind UI Integration

---

## ⏰ ১ ঘণ্টার Study Plan

| সময়      | বিষয়                    |
| -------- | ----------------------- |
| 10 মিনিট | Pagination UI           |
| 10 মিনিট | Search UI               |
| 10 মিনিট | Filter UI               |
| 10 মিনিট | Sort UI                 |
| 10 মিনিট | React State Integration |
| 10 মিনিট | Mini Project            |

---

## 1️⃣ Pagination কী?

ধরুন আপনার database-এ:

```text
Total Products = 250
```

একটি page-এ যদি 20টি product দেখান:

```text
Page 1 → 1–20
Page 2 → 21–40
Page 3 → 41–60
...
Page 13 → 241–250
```

এখানে Pagination ব্যবহার করা হবে।

সাধারণ UI:

```text
← Previous   1   2   3   4   5   Next →
```

---

## 2️⃣ Basic Pagination UI

Tailwind:

```jsx
<div className="flex items-center justify-center gap-2">
  <button className="rounded-lg border px-4 py-2">
    Previous
  </button>

  <button className="rounded-lg bg-blue-600 px-4 py-2 text-white">
    1
  </button>

  <button className="rounded-lg border px-4 py-2">
    2
  </button>

  <button className="rounded-lg border px-4 py-2">
    3
  </button>

  <button className="rounded-lg border px-4 py-2">
    Next
  </button>
</div>
```

এখানে:

* `flex` → horizontal layout
* `items-center` → vertical alignment
* `justify-center` → center
* `gap-2` → button spacing
* `border` → border
* `bg-blue-600` → active page

---

## 3️⃣ Active Pagination State

Pagination-এ current page আলাদা করে দেখাতে হবে।

যেমন:

```text
1  2  3  4
   ↑
Current Page
```

React:

```jsx
import { useState } from "react";

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex justify-center gap-2">
      {[1, 2, 3, 4, 5].map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`rounded-lg px-4 py-2 ${
            currentPage === page
              ? "bg-blue-600 text-white"
              : "border bg-white text-gray-700"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
```

###### গুরুত্বপূর্ণ ধারণা

```text
User clicks 3
       ↓
setCurrentPage(3)
       ↓
currentPage = 3
       ↓
Page 3 active
```

Tailwind এখানে শুধু **appearance** নিয়ন্ত্রণ করছে।

React নিয়ন্ত্রণ করছে **behavior/state**।

---

## 4️⃣ Previous / Next Button

এখন Previous এবং Next functionality যোগ করি।

```jsx
<button
  disabled={currentPage === 1}
  onClick={() => setCurrentPage(currentPage - 1)}
  className="rounded-lg border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
>
  Previous
</button>
```

Next:

```jsx
<button
  disabled={currentPage === totalPages}
  onClick={() => setCurrentPage(currentPage + 1)}
  className="rounded-lg border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
>
  Next
</button>
```

এখানে খুব গুরুত্বপূর্ণ:

```text
disabled:opacity-50
disabled:cursor-not-allowed
```

Day 13-এর **disabled state** আজ বাস্তব কাজে ব্যবহার করলেন।

---

## 5️⃣ Responsive Pagination

মোবাইলে অনেকগুলো button জায়গা নিতে পারে।

তাই:

```jsx
<div className="flex flex-wrap items-center justify-center gap-2">
```

`flex-wrap` ব্যবহার করলে ছোট screen-এ pagination নিচের লাইনে চলে যেতে পারবে।

আরও ভালো:

```jsx
<div className="flex flex-wrap items-center justify-center gap-2 px-4">
```

---

## 6️⃣ Search UI

E-commerce product listing-এ Search অত্যন্ত গুরুত্বপূর্ণ।

UI:

```text
┌─────────────────────────────────────────┐
│ 🔍 Search products...                   │
└─────────────────────────────────────────┘
```

Tailwind:

```jsx
<div className="relative">
  <input
    type="text"
    placeholder="Search products..."
    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
  />
</div>
```

---

## 7️⃣ Search Icon সহ Input

```jsx
<div className="relative">
  <span className="absolute left-4 top-1/2 -translate-y-1/2">
    🔍
  </span>

  <input
    type="text"
    placeholder="Search products..."
    className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>
```

এখানে:

```text
relative
   ↓
absolute icon
```

Day 9-এর Positioning আবার কাজে লাগছে।

---

## 8️⃣ React Search State

```jsx
import { useState } from "react";

function SearchBox() {
  const [search, setSearch] = useState("");

  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search products..."
      className="w-full rounded-xl border px-4 py-3"
    />
  );
}
```

Flow:

```text
User types
   ↓
onChange
   ↓
setSearch()
   ↓
React State Update
   ↓
UI Update
```

---

## 9️⃣ Category Filter

ধরুন categories:

```text
All
Electronics
Clothing
Shoes
Accessories
Books
```

UI:

```jsx
<div className="space-y-3">
  <h3 className="font-semibold">Category</h3>

  <label className="flex items-center gap-3">
    <input type="radio" name="category" />
    <span>All</span>
  </label>

  <label className="flex items-center gap-3">
    <input type="radio" name="category" />
    <span>Electronics</span>
  </label>

  <label className="flex items-center gap-3">
    <input type="radio" name="category" />
    <span>Clothing</span>
  </label>
</div>
```

---

## 🔟 Filter State

React:

```jsx
const [category, setCategory] = useState("all");
```

তারপর:

```jsx
<input
  type="radio"
  name="category"
  value="electronics"
  checked={category === "electronics"}
  onChange={(e) => setCategory(e.target.value)}
/>
```

এখানে:

```text
category = "all"

User selects Electronics

       ↓

category = "electronics"
```

---

## 1️⃣1️⃣ Sort Dropdown

Product sorting:

```text
Sort By

Newest
Price: Low to High
Price: High to Low
Rating
```

Tailwind:

```jsx
<select
  className="rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
>
  <option>Newest</option>
  <option>Price: Low to High</option>
  <option>Price: High to Low</option>
  <option>Rating</option>
</select>
```

---

## 1️⃣2️⃣ Sort State

```jsx
const [sort, setSort] = useState("newest");
```

```jsx
<select
  value={sort}
  onChange={(e) => setSort(e.target.value)}
  className="rounded-xl border px-4 py-3"
>
  <option value="newest">Newest</option>
  <option value="price-low">Price: Low to High</option>
  <option value="price-high">Price: High to Low</option>
  <option value="rating">Rating</option>
</select>
```

---

## 1️⃣3️⃣ এখন সবগুলো একসাথে

আমাদের Product Listing Toolbar:

```text
┌──────────────────────────────────────────────────────┐
│ Search products...          Sort: [Newest ▼]          │
└──────────────────────────────────────────────────────┘
```

Tailwind:

```jsx
<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
  
  <div className="relative w-full md:max-w-md">
    <input
      type="text"
      placeholder="Search products..."
      className="w-full rounded-xl border px-4 py-3"
    />
  </div>

  <select className="rounded-xl border px-4 py-3">
    <option>Newest</option>
    <option>Price: Low to High</option>
    <option>Price: High to Low</option>
  </select>

</div>
```

Responsive behavior:

```text
Mobile:

Search
Sort


Desktop:

Search                    Sort
```

কারণ:

```text
flex-col
        ↓
md:flex-row
```

---

## 1️⃣4️⃣ Product Listing Architecture

আজকের UI-এর structure:

```text
Products Page
│
├── Page Header
│
├── Toolbar
│   ├── Search
│   └── Sort
│
├── Main Content
│   │
│   ├── Filter Sidebar
│   │   ├── Category
│   │   ├── Price
│   │   ├── Rating
│   │   └── Availability
│   │
│   └── Product Section
│       ├── Product Count
│       ├── Product Grid
│       └── Pagination
│
└── Mobile Filter Drawer
```

এটাই একটি বাস্তব e-commerce Product Listing Page-এর foundation।

---

## 1️⃣5️⃣ Product Count UI

```jsx
<div className="flex items-center justify-between">
  <p className="text-sm text-gray-600">
    Showing 1–12 of 120 products
  </p>
</div>
```

আরও সুন্দর:

```jsx
<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
  <h2 className="text-xl font-bold text-gray-900">
    Products
  </h2>

  <p className="text-sm text-gray-500">
    120 products found
  </p>
</div>
```

---

## 1️⃣6️⃣ Complete Pagination Component

একটি reusable component বানাতে পারেন:

```jsx
function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 5;

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        className="rounded-lg border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Previous
      </button>

      {[1, 2, 3, 4, 5].map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`rounded-lg px-4 py-2 ${
            currentPage === page
              ? "bg-blue-600 text-white"
              : "border bg-white text-gray-700"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
        className="rounded-lg border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
```

---

## 1️⃣7️⃣ গুরুত্বপূর্ণ বাস্তব বিষয়: Client vs Server

বাস্তব e-commerce project-এ দুই ধরনের filtering হতে পারে।

###### Small Dataset

```text
Backend
  ↓
সব Products
  ↓
React
  ↓
Search / Filter / Sort
```

###### Large Dataset

```text
React
  ↓
API Request
  ↓
Backend
  ↓
Database
  ↓
Filtered Products
  ↓
React
```

যেমন:

```text
GET /api/products?page=2&limit=12
```

Filter:

```text
GET /api/products?category=electronics
```

Search:

```text
GET /api/products?search=iphone
```

Sort:

```text
GET /api/products?sort=price_asc
```

একসাথে:

```text
GET /api/products
    ?page=2
    &limit=12
    &search=phone
    &category=electronics
    &sort=price_asc
```

**Tailwind এখানে শুধু UI তৈরি করবে।**

API, database এবং filtering logic backend-এর দায়িত্ব।

---

## 1️⃣8️⃣ Component Structure

আজকের কাজের জন্য:

```text
src/
├── components/
│   ├── products/
│   │   ├── ProductCard.jsx
│   │   ├── ProductGrid.jsx
│   │   ├── ProductFilters.jsx
│   │   ├── ProductToolbar.jsx
│   │   └── ProductPagination.jsx
│   │
│   └── ui/
│       ├── Button.jsx
│       ├── Input.jsx
│       └── Select.jsx
│
└── pages/
    └── Products.jsx
```

এখানে একটি গুরুত্বপূর্ণ architecture concept:

```text
ProductToolbar
     │
     ├── Search
     └── Sort

ProductFilters
     │
     ├── Category
     ├── Price
     └── Rating

ProductGrid
     │
     └── ProductCard

ProductPagination
```

---

## 🧠 আজকের সবচেয়ে গুরুত্বপূর্ণ Concept

মনে রাখবেন:

```text
Tailwind CSS
     ↓
UI / Appearance

React
     ↓
State / Interaction

Backend API
     ↓
Business Logic

Database
     ↓
Data
```

অর্থাৎ:

```text
User
 ↓
Search
 ↓
React State
 ↓
API Request
 ↓
Backend
 ↓
Database
 ↓
Filtered Data
 ↓
React
 ↓
Tailwind UI
```

এটি একজন Full-Stack Developer হিসেবে আপনার জন্য খুব গুরুত্বপূর্ণ mental model।

---

## 🛒 Day 24 Mini Project

আজ একটি:

#### **TechStore Advanced Product Listing**

তৈরি করুন।

###### Requirements

**1. Header**

```text
TechStore
Products
Cart
Profile
```

**2. Search**

```text
🔍 Search products...
```

**3. Filter**

```text
Category
☐ Electronics
☐ Clothing
☐ Shoes
☐ Books

Price
Min ─── Max

Rating
○ 4★ & up
○ 3★ & up
```

**4. Sort**

```text
Newest
Price Low → High
Price High → Low
Rating
```

**5. Product Grid**

```text
1 column → Mobile
2 columns → Tablet
3 columns → Desktop
4 columns → Large Desktop
```

**6. Pagination**

```text
← Previous  1  2  3  4  5  Next →
```

**7. Dark Mode**

Day 20-এর `dark:` ব্যবহার করুন।

---

## 🧪 Day 24 Practice Challenge

নিজে চেষ্টা করুন:

###### Challenge 1

একটি responsive search bar তৈরি করুন।

###### Challenge 2

5টি pagination button তৈরি করুন।

###### Challenge 3

Current page-কে blue background দিন।

###### Challenge 4

Page 1 হলে:

```text
Previous = disabled
```

###### Challenge 5

শেষ page হলে:

```text
Next = disabled
```

###### Challenge 6

Category filter তৈরি করুন।

###### Challenge 7

Sort dropdown তৈরি করুন।

###### Challenge 8

সবগুলো Product Listing Page-এ integrate করুন।

---

## 📋 Day 24 Cheat Sheet

| কাজ                | Tailwind                                         |
| ------------------ | ------------------------------------------------ |
| Pagination layout  | `flex items-center gap-2`                        |
| Wrap               | `flex-wrap`                                      |
| Active button      | `bg-blue-600 text-white`                         |
| Disabled           | `disabled:opacity-50`                            |
| Disabled cursor    | `disabled:cursor-not-allowed`                    |
| Search input       | `w-full rounded-xl border px-4 py-3`             |
| Focus              | `focus:ring-2`                                   |
| Sort               | `rounded-xl border px-4 py-3`                    |
| Responsive toolbar | `flex-col md:flex-row`                           |
| Center pagination  | `justify-center`                                 |
| Product grid       | `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` |
| Spacing            | `gap-4`, `gap-6`                                 |
| Mobile → Desktop   | `md:`, `lg:`, `xl:`                              |

---
