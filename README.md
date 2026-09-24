# Learn Tailwind css
**_Day By Day_**

## 🚀 Tailwind CSS — Day 22: Advanced UI Components — Modal, Dropdown, Tabs & Drawer

আজ আমরা Dashboard Layout-এর পরবর্তী ধাপে যাব। Day 21-এ আমরা **Sidebar + Header + Main Content + Responsive Layout** তৈরি করেছি।

আজ শিখব কীভাবে একটি professional application-এর **interactive UI components** তৈরি করা যায়।

বিশেষ করে:

* Modal
* Dropdown
* Tabs
* Drawer
* Overlay
* Accordion
* Tooltip
* Responsive interaction
* React state + Tailwind

আজকের মূল শিক্ষা:

> **Tailwind UI-এর appearance নিয়ন্ত্রণ করবে, আর React state UI-এর behavior নিয়ন্ত্রণ করবে।**

---

## 🎯 Day 22 Learning Goals

আজ আপনি শিখবেন:

1. Modal কীভাবে তৈরি করতে হয়
2. Overlay কীভাবে তৈরি করতে হয়
3. Dropdown Menu
4. Tabs
5. Mobile Drawer
6. Accordion
7. Tooltip
8. React `useState()` দিয়ে interactive UI
9. `fixed`, `absolute`, `inset-0`, `z-*`
10. Reusable interactive component চিন্তা

---

## ⏰ ১ ঘণ্টার Study Plan

| সময়      | বিষয়                |
| -------- | ------------------- |
| 10 মিনিট | Modal + Overlay     |
| 10 মিনিট | Dropdown            |
| 10 মিনিট | Tabs                |
| 10 মিনিট | Mobile Drawer       |
| 10 মিনিট | Accordion + Tooltip |
| 5 মিনিট  | E-commerce UI       |
| 5 মিনিট  | Practice + Revision |

---

## 1️⃣ Interactive UI কী?

আগের দিন আমরা এমন UI তৈরি করেছি:

```text id="p4v6yn"
Dashboard
├── Sidebar
├── Header
├── Cards
└── Table
```

কিন্তু বাস্তব application-এ user interaction প্রয়োজন।

যেমন:

```text id="x7q2em"
Button click
     ↓
Modal Open

Profile click
     ↓
Dropdown Open

Tab click
     ↓
Content Change

Mobile menu click
     ↓
Drawer Open
```

এখানেই React state-এর প্রয়োজন হয়।

---

## 2️⃣ Modal কী?

Modal হলো এমন একটি UI যা বর্তমান page-এর উপরে একটি dialog হিসেবে আসে।

উদাহরণ:

```text id="j8n4wp"
┌────────────────────────────────────┐
│ Dashboard                          │
│                                    │
│     ┌──────────────────────┐       │
│     │ Delete Product       │       │
│     │                      │       │
│     │ Are you sure?        │       │
│     │                      │       │
│     │ Cancel    Delete     │       │
│     └──────────────────────┘       │
│                                    │
└────────────────────────────────────┘
```

---

## 3️⃣ Modal-এর তিনটি প্রধান অংশ

একটি Modal সাধারণত:

```text id="t4j8qa"
Modal
│
├── Overlay
│
└── Dialog
    ├── Header
    ├── Content
    └── Actions
```

Overlay:

```text
fixed inset-0
```

Dialog:

```text
relative
rounded-2xl
bg-white
```

---

## 4️⃣ Basic Modal

```jsx id="7m5q2d"
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

  <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl dark:bg-gray-800">

    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
      Delete Product
    </h2>

    <p className="mt-3 text-gray-600 dark:text-gray-400">
      Are you sure you want to delete this product?
    </p>

    <div className="mt-6 flex justify-end gap-3">

      <button
        className="
          rounded-lg
          border border-gray-300
          px-4 py-2
          text-gray-700
          hover:bg-gray-100

          dark:border-gray-600
          dark:text-gray-300
          dark:hover:bg-gray-700
        "
      >
        Cancel
      </button>

      <button
        className="
          rounded-lg
          bg-red-600
          px-4 py-2
          font-semibold
          text-white
          hover:bg-red-700
        "
      >
        Delete
      </button>

    </div>

  </div>

</div>
```

---

## 5️⃣ এখানে গুরুত্বপূর্ণ Tailwind Classes

###### `fixed`

```text id="2yn8rs"
fixed
```

Element viewport-এর সাথে fixed থাকবে।

###### `inset-0`

```text id="v8o5rp"
inset-0
```

এর equivalent ধারণা:

```css
top: 0;
right: 0;
bottom: 0;
left: 0;
```

অর্থাৎ পুরো screen cover করবে।

###### `z-50`

```text id="r8f3as"
z-50
```

Modal-কে অন্যান্য UI-এর উপরে রাখে।

---

## 6️⃣ React Modal

এখন Modal-কে interactive করি।

```jsx id="k3n7qx"
import { useState } from "react";

function ProductPage() {
  const [open, setOpen] = useState(false);

  return (
    <div>

      <button
        onClick={() => setOpen(true)}
        className="
          rounded-lg
          bg-red-600
          px-5 py-3
          font-semibold
          text-white
          hover:bg-red-700
        "
      >
        Delete Product
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

          <div className="w-full max-w-md rounded-2xl bg-white p-6 dark:bg-gray-800">

            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Delete Product
            </h2>

            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Are you sure?
            </p>

            <div className="mt-6 flex justify-end gap-3">

              <button
                onClick={() => setOpen(false)}
                className="rounded-lg bg-gray-200 px-4 py-2"
              >
                Cancel
              </button>

              <button
                onClick={() => setOpen(false)}
                className="rounded-lg bg-red-600 px-4 py-2 text-white"
              >
                Delete
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default ProductPage;
```

###### Flow:

```text id="d6h8p1"
Delete Button
     ↓
setOpen(true)
     ↓
open === true
     ↓
Modal Render
```

Close:

```text id="g8s4nb"
Cancel
   ↓
setOpen(false)
   ↓
Modal disappears
```

---

## 7️⃣ Dropdown Menu

Dashboard Header-এ সাধারণত Profile Dropdown থাকে।

```text id="e5x9cp"
       👤 Ariful
            ↓
      ┌──────────────┐
      │ Profile      │
      │ Settings     │
      │ Logout       │
      └──────────────┘
```

এখানে `relative` + `absolute` খুব গুরুত্বপূর্ণ।

---

## 8️⃣ Basic Dropdown

```jsx id="4h1s7m"
<div className="relative">

  <button
    className="
      rounded-lg
      border border-gray-200
      px-4 py-2
      dark:border-gray-700
    "
  >
    Profile
  </button>

  <div
    className="
      absolute right-0 mt-2
      w-48
      rounded-xl
      border
      border-gray-200
      bg-white
      p-2
      shadow-xl

      dark:border-gray-700
      dark:bg-gray-800
    "
  >
    <a
      href="##"
      className="
        block rounded-lg
        px-3 py-2
        text-gray-700
        hover:bg-gray-100

        dark:text-gray-300
        dark:hover:bg-gray-700
      "
    >
      Profile
    </a>

    <a
      href="##"
      className="
        block rounded-lg
        px-3 py-2
        text-gray-700
        hover:bg-gray-100

        dark:text-gray-300
        dark:hover:bg-gray-700
      "
    >
      Settings
    </a>

    <button
      className="
        w-full rounded-lg
        px-3 py-2
        text-left
        text-red-600
        hover:bg-red-50

        dark:hover:bg-red-900/20
      "
    >
      Logout
    </button>

  </div>

</div>
```

---

## 9️⃣ কেন `relative` + `absolute`?

Parent:

```text id="3n6j2a"
relative
```

Child:

```text id="k1j8vz"
absolute right-0
```

এর ফলে dropdown parent-এর relative position অনুযায়ী বসবে।

```text id="7w0y3s"
Profile Button
       │
       └───────────┐
                   ↓
             Dropdown
```

---

## 🔟 React Dropdown

```jsx id="z7x3mc"
const [open, setOpen] = useState(false);
```

Button:

```jsx id="r5v9pa"
<button onClick={() => setOpen(!open)}>
  Profile
</button>
```

Conditional rendering:

```jsx id="u4b6tn"
{open && (
  <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white shadow-xl">
    ...
  </div>
)}
```

Mental model:

```text id="q0m2jf"
Click
 ↓
State change
 ↓
Conditional rendering
 ↓
Dropdown
```

---

## 1️⃣1️⃣ Tabs

Tabs হলো একই page-এর মধ্যে বিভিন্ন content section পরিবর্তন করার pattern।

উদাহরণ:

```text id="a6v3kc"
┌──────────┬──────────┬──────────┐
│ Overview │ Reviews  │ Details  │
└──────────┴──────────┴──────────┘

        Product Information
```

E-commerce-এ এটি খুব common।

---

## 1️⃣2️⃣ Basic Tabs

```jsx id="n2v8sp"
<div>

  <div className="flex gap-2 border-b border-gray-200 dark:border-gray-700">

    <button
      className="
        border-b-2
        border-blue-600
        px-4 py-3
        font-semibold
        text-blue-600
      "
    >
      Overview
    </button>

    <button
      className="
        px-4 py-3
        text-gray-600
        hover:text-blue-600
        dark:text-gray-400
      "
    >
      Reviews
    </button>

    <button
      className="
        px-4 py-3
        text-gray-600
        hover:text-blue-600
        dark:text-gray-400
      "
    >
      Details
    </button>

  </div>

  <div className="py-6">
    Product overview content
  </div>

</div>
```

---

## 1️⃣3️⃣ React Tabs

```jsx id="m7k4cd"
import { useState } from "react";

function ProductTabs() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div>

      <div className="flex gap-2 border-b dark:border-gray-700">

        <button
          onClick={() => setActiveTab("overview")}
          className={`
            px-4 py-3
            ${
              activeTab === "overview"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500"
            }
          `}
        >
          Overview
        </button>

        <button
          onClick={() => setActiveTab("reviews")}
          className={`
            px-4 py-3
            ${
              activeTab === "reviews"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500"
            }
          `}
        >
          Reviews
        </button>

      </div>

      <div className="py-6">

        {activeTab === "overview" && (
          <p>Product overview information.</p>
        )}

        {activeTab === "reviews" && (
          <p>Customer reviews.</p>
        )}

      </div>

    </div>
  );
}
```

এখানে গুরুত্বপূর্ণ concept:

```text id="t7k5sq"
activeTab
    ↓
Conditional UI
```

এটি Day 17-এর state-based styling-এর আরও advanced ব্যবহার।

---

## 1️⃣4️⃣ Mobile Drawer

Day 21-এ আমরা mobile sidebar-এর কথা বলেছিলাম।

আজ সেটিকে একটি proper **Drawer** হিসেবে তৈরি করব।

```text id="y5n8qw"
Mobile

┌──────────────────────────────┐
│ ☰ Dashboard                  │
├──────────────────────────────┤
│                              │
│                              │
└──────────────────────────────┘

☰ Click

┌──────────────────┬───────────┐
│ Sidebar          │ Overlay   │
│                  │           │
│ Dashboard        │           │
│ Products         │           │
│ Orders           │           │
│                  │           │
└──────────────────┴───────────┘
```

---

## 1️⃣5️⃣ Drawer Structure

```jsx id="0j5r7s"
<div className="fixed inset-0 z-50">

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Drawer */}
  <aside
    className="
      relative
      h-full
      w-72
      bg-white
      shadow-xl
      dark:bg-gray-900
    "
  >
    Sidebar Content
  </aside>

</div>
```

এখানে:

```text id="3u5gk7"
fixed inset-0
      ↓
Full screen container

absolute inset-0
      ↓
Overlay

relative
      ↓
Drawer positioning context
```

---

## 1️⃣6️⃣ Drawer-এর React State

```jsx id="z2q8wy"
const [open, setOpen] = useState(false);
```

Open:

```jsx id="n4y6we"
<button onClick={() => setOpen(true)}>
  ☰
</button>
```

Close:

```jsx id="2n9j5r"
<button onClick={() => setOpen(false)}>
  ✕
</button>
```

Render:

```jsx id="g8v2mz"
{open && (
  <div className="fixed inset-0 z-50">
    ...
  </div>
)}
```

---

## 1️⃣7️⃣ Accordion

FAQ section-এ Accordion খুব বেশি ব্যবহৃত হয়।

```text id="v7c4jx"
What is Tailwind CSS?          +
─────────────────────────────────

How does dark mode work?       +
─────────────────────────────────

Can I use Tailwind with React? +
─────────────────────────────────
```

Click করলে:

```text id="j2p5hz"
What is Tailwind CSS?          -
─────────────────────────────────
Tailwind is a utility-first
CSS framework...
```

---

## 1️⃣8️⃣ Basic Accordion

```jsx id="q6v9sk"
<div className="rounded-xl border dark:border-gray-700">

  <button
    className="
      flex w-full
      items-center justify-between
      px-5 py-4
      text-left
      font-semibold
    "
  >
    <span>What is Tailwind CSS?</span>

    <span>+</span>
  </button>

  <div className="border-t px-5 py-4 text-gray-600 dark:border-gray-700 dark:text-gray-400">
    Tailwind CSS is a utility-first CSS framework.
  </div>

</div>
```

---

## 1️⃣9️⃣ Accordion with React

```jsx id="w8k3fd"
import { useState } from "react";

function FAQ() {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border dark:border-gray-700">

      <button
        onClick={() => setOpen(!open)}
        className="
          flex w-full
          items-center justify-between
          px-5 py-4
          text-left
          font-semibold
          text-gray-900
          dark:text-white
        "
      >
        <span>What is Tailwind CSS?</span>

        <span>{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div
          className="
            border-t
            px-5 py-4
            text-gray-600
            dark:border-gray-700
            dark:text-gray-400
          "
        >
          Tailwind CSS is a utility-first CSS framework.
        </div>
      )}

    </div>
  );
}
```

---

## 2️⃣0️⃣ Tooltip

Tooltip হলো ছোট information box।

```text id="n3y7wc"
        Delete
          ↑
    ┌──────────┐
    │ Delete   │
    └──────────┘
        🗑️
```

Tailwind-এর `group` দিয়ে এটি সহজে তৈরি করা যায়।

```jsx id="k4w9qp"
<div className="group relative inline-block">

  <button
    className="
      rounded-lg
      bg-red-600
      p-3
      text-white
    "
  >
    🗑️
  </button>

  <div
    className="
      pointer-events-none
      absolute
      bottom-full
      left-1/2
      mb-2
      -translate-x-1/2
      whitespace-nowrap
      rounded-lg
      bg-gray-900
      px-3 py-2
      text-xs
      text-white
      opacity-0
      transition
      group-hover:opacity-100
    "
  >
    Delete Product
  </div>

</div>
```

এখানে আমরা Day 17-এর:

```text id="p5c8ay"
group
group-hover
```

এবং Day 19-এর:

```text id="f6k2rw"
transition
opacity
```

একসাথে ব্যবহার করেছি।

---

## 🧠 2️⃣1️⃣ আজকের Core Pattern

আজকের প্রায় সব interactive component-এর architecture একই:

```text id="v5s2bx"
User Interaction
       ↓
React Event
       ↓
State Change
       ↓
Conditional Rendering
       ↓
Tailwind Styling
       ↓
UI Update
```

উদাহরণ:

###### Modal

```text id="b2n7cv"
Click Delete
     ↓
open = true
     ↓
Modal Render
```

###### Dropdown

```text id="y8m4kp"
Click Profile
     ↓
open = true
     ↓
Dropdown Render
```

###### Tabs

```text id="e3r7hd"
Click Reviews
     ↓
activeTab = "reviews"
     ↓
Reviews Content
```

###### Drawer

```text id="z5q9jx"
Click Menu
     ↓
sidebarOpen = true
     ↓
Drawer Render
```

---

## 🛒 2️⃣2️⃣ E-commerce-এ এগুলোর ব্যবহার

আপনার AI-powered e-commerce application-এ:

| Component | কোথায় ব্যবহার করবেন            |
| --------- | ------------------------------ |
| Modal     | Delete Product / Confirm Order |
| Dropdown  | Profile / Actions              |
| Tabs      | Product Details                |
| Drawer    | Mobile Sidebar                 |
| Accordion | FAQ                            |
| Tooltip   | Icon Buttons                   |
| Overlay   | Modal/Drawer                   |
| State     | UI behavior                    |

---

## 🏗️ 2️⃣3️⃣ Reusable Component Architecture

React project-এ এগুলো আলাদা component করা ভালো:

```text id="v4q8nm"
src/
├── components/
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Modal.jsx
│   │   ├── Dropdown.jsx
│   │   ├── Tabs.jsx
│   │   ├── Drawer.jsx
│   │   ├── Accordion.jsx
│   │   └── Tooltip.jsx
│   │
│   ├── layout/
│   │   ├── Sidebar.jsx
│   │   ├── Header.jsx
│   │   └── DashboardLayout.jsx
│   │
│   └── dashboard/
│       ├── StatCard.jsx
│       └── RecentOrders.jsx
```

এটাই reusable UI library-এর দিকে আপনার যাত্রা।

---

## ⚠️ 2️⃣4️⃣ Accessibility মনে রাখবেন

Interactive UI বানানোর সময় শুধু সুন্দর দেখালেই হবে না।

###### Button-এর ক্ষেত্রে

```jsx id="x7k2pd"
<button type="button">
```

ব্যবহার করুন।

###### Icon-only button হলে

```jsx id="q4v8ms"
<button
  type="button"
  aria-label="Open menu"
>
  ☰
</button>
```

কারণ user বুঝতে না পারলেও screen reader button-এর উদ্দেশ্য বুঝতে পারবে।

###### Modal-এর ক্ষেত্রে

Professional application-এ focus management, keyboard interaction এবং dialog semantics-ও বিবেচনা করতে হয়।

---

## 🧪 2️⃣5️⃣ আজকের Practice

#### Practice 1 — Modal

তৈরি করুন:

```text id="e8w4pz"
Delete Product
       ↓
Confirmation Modal
       ↓
Cancel / Delete
```

---

#### Practice 2 — Profile Dropdown

```text id="m7c3qa"
Profile
  ↓
Profile
Settings
Logout
```

---

#### Practice 3 — Product Tabs

তৈরি করুন:

```text id="b3p8vn"
Overview
Reviews
Specifications
```

---

#### Practice 4 — Mobile Drawer

তৈরি করুন:

```text id="r9k5xd"
☰
 ↓
Sidebar Drawer
 ↓
Overlay
```

---

#### Practice 5 — FAQ Accordion

কমপক্ষে ৪টি প্রশ্ন তৈরি করুন।

---

## 🎯 2️⃣6️⃣ Day 22 Mini Project

আজকের সবচেয়ে গুরুত্বপূর্ণ challenge:

#### **E-commerce Product Details UI**

Structure:

```text id="d6y2hf"
Product Details
│
├── Product Image
│
├── Product Information
│   ├── Title
│   ├── Price
│   ├── Rating
│   ├── Add to Cart
│   └── Buy Now
│
├── Tabs
│   ├── Description
│   ├── Reviews
│   └── Specifications
│
├── FAQ Accordion
│
└── Delete/Edit Modal
```

এর মধ্যে ব্যবহার করবেন:

```text id="x4p7na"
Grid
Flex
Responsive
Dark Mode
Tabs
Accordion
Modal
Button
Transition
Hover
Focus
```

এটি করলে Day 1–22-এর অনেক concept একসাথে practice হবে।

---

## 🧠 Day 22 Self-Test

নিজেকে জিজ্ঞেস করুন:

1. Modal কী?
2. `fixed inset-0` কী করে?
3. Overlay কেন ব্যবহার করা হয়?
4. `z-50` কেন দরকার?
5. Dropdown-এর parent-এ `relative` কেন?
6. Dropdown-এ `absolute` কেন?
7. Tabs কীভাবে React state ব্যবহার করে?
8. Drawer এবং Sidebar-এর মধ্যে পার্থক্য কী?
9. Accordion কীভাবে কাজ করে?
10. `group-hover` Tooltip-এ কীভাবে কাজ করছে?
11. Conditional rendering কী?
12. Interactive component-এ React এবং Tailwind-এর দায়িত্ব কী?

---

## 📌 Day 22 Cheat Sheet

```text
MODAL
fixed
inset-0
z-50
bg-black/50
flex
items-center
justify-center

DROPDOWN
relative
absolute
right-0
mt-2
shadow-xl

TABS
activeTab
border-b-2
conditional rendering

DRAWER
fixed
inset-0
z-50
w-72
shadow-xl

ACCORDION
useState
conditional rendering

TOOLTIP
group
relative
absolute
opacity-0
group-hover:opacity-100
transition

INTERACTION
onClick
useState
conditional rendering
```

---

## 🔥 Day 22-এর Mental Model

```text id="c8m4za"
          USER
            │
            ▼
       Click / Action
            │
            ▼
       React Event
            │
            ▼
        React State
            │
            ▼
   Conditional Rendering
            │
            ▼
      Tailwind Styling
            │
            ▼
       Interactive UI
```

###### আজকের মূল শিক্ষা:

> **React দিয়ে UI-এর behavior তৈরি করবেন এবং Tailwind CSS দিয়ে সেই UI-এর appearance, responsive layout, state styles এবং visual feedback তৈরি করবেন।**

Day 21-এ আমরা **Dashboard-এর skeleton** তৈরি করেছি। Day 22-এ সেই skeleton-এর মধ্যে **Modal, Dropdown, Tabs, Drawer, Accordion ও Tooltip-এর মতো interactive components** বসানো শিখলাম।
