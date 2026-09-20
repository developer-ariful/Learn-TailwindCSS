# Learn Tailwind css
**_Day By Day_**

## 🌙 Tailwind CSS — Day 20: Dark Mode + Theme Design

আজ থেকে আমরা Tailwind CSS-এর **Theme Design** নিয়ে কাজ শুরু করব। বিশেষ করে React project-এ **Light Mode + Dark Mode** কীভাবে তৈরি করা যায়, সেটি শিখব।

আজকের লক্ষ্য হলো এমন UI তৈরি করা, যেখানে user সহজেই Light/Dark theme পরিবর্তন করতে পারবে এবং সেই preference সংরক্ষণও করা যাবে।

---

#### 🎯 আজকের Learning Goal

Day 20 শেষে আপনি জানতে পারবেন:

* `dark:` variant কী
* Light/Dark color strategy
* Dark Product Card
* Dark Navbar
* Dark Form
* Dark Dashboard
* React দিয়ে Theme Toggle
* `localStorage` দিয়ে theme preference সংরক্ষণ
* Dark mode-এ ভালো color নির্বাচন
* একটি reusable Theme System কীভাবে চিন্তা করতে হয়

---

## ⏰ ১ ঘণ্টার Study Plan

| সময়      | বিষয়                                  |
| -------- | ------------------------------------- |
| 10 মিনিট | Dark Mode Concept + `dark:`           |
| 10 মিনিট | Light/Dark Color Strategy             |
| 10 মিনিট | Dark Card + Navbar + Form             |
| 10 মিনিট | React Theme Toggle                    |
| 10 মিনিট | `localStorage` দিয়ে Theme Persistence |
| 5 মিনিট  | E-commerce Dashboard                  |
| 5 মিনিট  | Practice + Revision                   |

---

## 1️⃣ Dark Mode কী?

সাধারণত একটি website-এ দুই ধরনের theme থাকতে পারে:

```text
Light Mode
   ↓
White Background
Dark Text
Light Card

Dark Mode
   ↓
Dark Background
Light Text
Dark Card
```

উদাহরণ:

###### Light Mode

```text
Background → White
Card       → White
Text       → Gray-900
Border     → Gray-200
```

###### Dark Mode

```text
Background → Gray-900
Card       → Gray-800
Text       → White
Border     → Gray-700
```

Tailwind-এ dark mode-এর জন্য আমরা মূলত ব্যবহার করি:

```text
dark:
```

---

## 2️⃣ `dark:` Variant

ধরুন:

```html
<div class="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
    Hello World
</div>
```

এখানে:

```text
bg-white
```

Light mode-এর background।

আর:

```text
dark:bg-gray-900
```

Dark mode-এর background।

একইভাবে:

```text
text-gray-900
```

Light mode-এর text।

```text
dark:text-white
```

Dark mode-এর text।

###### Mental Model

```text
Light Mode
    ↓
bg-white
text-gray-900

Dark Mode
    ↓
dark:bg-gray-900
dark:text-white
```

---

## 3️⃣ শুধু Background নয়

Dark mode-এ শুধু background পরিবর্তন করলেই হবে না।

আমাদের পরিবর্তন করতে হতে পারে:

* Background
* Card
* Text
* Border
* Input
* Placeholder
* Button
* Hover state
* Focus state
* Table
* Badge

উদাহরণ:

```html
<div
  class="
    rounded-xl
    border border-gray-200
    bg-white
    p-6
    text-gray-900

    dark:border-gray-700
    dark:bg-gray-800
    dark:text-white
  "
>
    Product Card
</div>
```

---

## 4️⃣ Light/Dark Color Strategy

একটি professional application-এ color system আগে চিন্তা করা ভালো।

আমি সাধারণত এই ধরনের structure চিন্তা করতে বলব:

```text
LIGHT MODE

Page Background
    ↓
gray-50

Surface/Card
    ↓
white

Primary Text
    ↓
gray-900

Secondary Text
    ↓
gray-600

Border
    ↓
gray-200
```

Dark Mode:

```text
DARK MODE

Page Background
    ↓
gray-950

Surface/Card
    ↓
gray-900 / gray-800

Primary Text
    ↓
white

Secondary Text
    ↓
gray-300 / gray-400

Border
    ↓
gray-700
```

এভাবে চিন্তা করলে পুরো application-এর design consistent থাকে।

---

## 5️⃣ Dark Product Card

এখন একটি Product Card দেখি।

```jsx
<div
  className="
    overflow-hidden rounded-2xl
    border border-gray-200
    bg-white
    shadow-sm
    transition
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
        h-full w-full object-cover
        transition duration-500
        hover:scale-110
      "
    />
  </div>

  <div className="p-5">
    <h3
      className="
        truncate text-lg font-bold
        text-gray-900
        dark:text-white
      "
    >
      Premium Headphone
    </h3>

    <p
      className="
        mt-2 line-clamp-2
        text-sm text-gray-600
        dark:text-gray-400
      "
    >
      High quality wireless headphone with
      excellent sound quality.
    </p>

    <div className="mt-4 flex items-center justify-between">
      <span
        className="
          text-xl font-bold
          text-blue-600
          dark:text-blue-400
        "
      >
        $120
      </span>

      <button
        className="
          rounded-lg bg-blue-600
          px-4 py-2
          font-semibold text-white
          transition
          hover:bg-blue-700
        "
      >
        Add to Cart
      </button>
    </div>
  </div>
</div>
```

এখানে আমরা আগের দিনের অনেক concept একসাথে ব্যবহার করেছি:

```text
aspect-square
overflow-hidden
object-cover
transition
hover:scale
truncate
line-clamp
dark:
```

এটাই বাস্তব project-এ Tailwind শেখার সবচেয়ে ভালো উপায়।

---

## 6️⃣ Dark Navbar

একটি responsive navbar:

```jsx
<nav
  className="
    border-b border-gray-200
    bg-white
    dark:border-gray-800
    dark:bg-gray-900
  "
>
  <div
    className="
      mx-auto flex max-w-7xl
      items-center justify-between
      px-4 py-4
    "
  >
    <h1
      className="
        text-xl font-bold
        text-gray-900
        dark:text-white
      "
    >
      TechStore
    </h1>

    <div className="flex items-center gap-6">
      <a
        href="##"
        className="
          text-gray-700
          hover:text-blue-600
          dark:text-gray-300
          dark:hover:text-blue-400
        "
      >
        Products
      </a>

      <a
        href="##"
        className="
          text-gray-700
          hover:text-blue-600
          dark:text-gray-300
          dark:hover:text-blue-400
        "
      >
        Orders
      </a>
    </div>
  </div>
</nav>
```

খেয়াল করুন:

```text
Light:
bg-white
text-gray-700
border-gray-200

Dark:
dark:bg-gray-900
dark:text-gray-300
dark:border-gray-800
```

---

## 7️⃣ Dark Mode Form

Input-এর ক্ষেত্রেও theme পরিবর্তন করতে হবে।

```jsx
<div>
  <label
    className="
      mb-2 block
      text-sm font-medium
      text-gray-700
      dark:text-gray-300
    "
  >
    Email
  </label>

  <input
    type="email"
    placeholder="Enter your email"
    className="
      w-full rounded-lg
      border border-gray-300
      bg-white
      px-4 py-3
      text-gray-900

      placeholder:text-gray-400

      focus:outline-none
      focus:ring-2
      focus:ring-blue-500

      dark:border-gray-700
      dark:bg-gray-800
      dark:text-white
      dark:placeholder:text-gray-500
    "
  />
</div>
```

এখানে গুরুত্বপূর্ণ:

```text
dark:bg-gray-800
dark:text-white
dark:border-gray-700
dark:placeholder:text-gray-500
```

অর্থাৎ input-এর প্রতিটি গুরুত্বপূর্ণ visual অংশের জন্য dark state চিন্তা করতে হবে।

---

## 8️⃣ React Theme Toggle

এখন আসি সবচেয়ে গুরুত্বপূর্ণ অংশে।

React-এ আমরা একটি state রাখতে পারি:

```jsx
const [darkMode, setDarkMode] = useState(false);
```

তারপর button click করলে:

```jsx
setDarkMode(!darkMode);
```

কিন্তু শুধু React state পরিবর্তন করলে Tailwind-এর `dark:` styles প্রয়োগ করার জন্য root element-এর theme mechanism-ও ঠিকভাবে সেট করতে হবে।

একটি class-based approach-এ:

```jsx
document.documentElement.classList.toggle("dark");
```

এখানে:

```text
document.documentElement
        ↓
<html>
```

অর্থাৎ আমরা `<html>` element-এ `dark` class যোগ বা remove করছি।

Concept:

```text
Light Mode

<html>
```

Dark:

```text
<html class="dark">
```

তারপর:

```html
dark:bg-gray-900
```

জাতীয় classগুলো dark theme অনুযায়ী apply হবে।

> **নোট:** Tailwind-এর version/configuration অনুযায়ী dark mode কীভাবে trigger হবে তা ভিন্ন হতে পারে। Class-based manual toggle ব্যবহার করলে আপনার project-এর Tailwind configuration/ডকুমেন্টেশন অনুযায়ী সেটি enable করতে হবে।

---

## 9️⃣ Theme Toggle Component

একটি basic React example:

```jsx
import { useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const nextMode = !prev;

      document.documentElement.classList.toggle(
        "dark",
        nextMode
      );

      return nextMode;
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        rounded-lg
        bg-gray-200
        px-4 py-2
        text-gray-900
        transition
        hover:bg-gray-300

        dark:bg-gray-700
        dark:text-white
        dark:hover:bg-gray-600
      "
    >
      {darkMode ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}

export default ThemeToggle;
```

এখানে flow:

```text
User clicks button
       ↓
toggleTheme()
       ↓
React State পরিবর্তন
       ↓
<html>-এ dark class
       ↓
Tailwind dark:* utilities
       ↓
UI Dark Mode
```

---

## 🔟 Theme Preference `localStorage`-এ রাখা

সমস্যা হলো browser refresh করলে state আবার reset হতে পারে।

আমরা চাই:

```text
User → Dark Mode নির্বাচন করল
             ↓
Browser Refresh
             ↓
Dark Mode আবার থাকবে
```

এর জন্য browser-এর `localStorage` ব্যবহার করা যায়।

Concept:

```text
localStorage

theme = "dark"
```

Theme save:

```jsx
localStorage.setItem("theme", "dark");
```

Theme read:

```jsx
const theme = localStorage.getItem("theme");
```

Theme remove:

```jsx
localStorage.removeItem("theme");
```

---

## 1️⃣1️⃣ React + localStorage Theme System

একটি practical implementation:

```jsx
import { useEffect, useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      darkMode
    );

    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      className="
        rounded-lg
        bg-gray-200
        px-4 py-2
        text-gray-900
        transition
        hover:bg-gray-300

        dark:bg-gray-700
        dark:text-white
        dark:hover:bg-gray-600
      "
    >
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}

export default ThemeToggle;
```

###### এখানে কী হচ্ছে?

```text
Application শুরু
       ↓
localStorage থেকে theme পড়ছে
       ↓
theme === "dark" ?
       ↓
হ্যাঁ → darkMode = true
       ↓
<html class="dark">
       ↓
Dark UI
```

---

## ⚠️ `localStorage` সম্পর্কে গুরুত্বপূর্ণ কথা

`localStorage` সাধারণ theme preference-এর জন্য ভালো:

```text
theme
language
UI preference
sidebar state
```

কিন্তু sensitive information যেমন:

```text
Password
Authentication Token
Private Key
Secret Data
```

এ ধরনের sensitive data শুধু `localStorage`-এ রাখার সিদ্ধান্ত নেওয়ার আগে security architecture ভালোভাবে বিবেচনা করতে হবে।

---

## 1️⃣2️⃣ Dark Dashboard

আপনার AI-powered e-commerce management system-এর dashboard চিন্তা করুন।

```text
┌──────────────────────────────────────────────┐
│ Navbar                         🌙 Theme      │
├──────────────┬───────────────────────────────┤
│ Sidebar      │ Dashboard                     │
│              │                               │
│ Products     │ ┌──────┐ ┌──────┐ ┌──────┐  │
│ Orders       │ │Sales │ │Orders│ │Users │  │
│ Customers    │ └──────┘ └──────┘ └──────┘  │
│              │                               │
│              │ Recent Orders                 │
│              │ ┌───────────────────────────┐ │
│              │ │ Order │ Customer │ Status │ │
│              │ └───────────────────────────┘ │
└──────────────┴───────────────────────────────┘
```

Dark mode design:

```text
Page
↓
dark:bg-gray-950

Sidebar
↓
dark:bg-gray-900

Card
↓
dark:bg-gray-800

Border
↓
dark:border-gray-700

Primary Text
↓
dark:text-white

Secondary Text
↓
dark:text-gray-400
```

---

## 1️⃣3️⃣ Dark Table

আগের Day 18-এর table-এর সাথে Dark Mode যুক্ত করি:

```jsx
<div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
  <table className="min-w-[700px] w-full">
    <thead
      className="
        bg-gray-50
        dark:bg-gray-800
      "
    >
      <tr>
        <th
          className="
            px-4 py-3 text-left
            text-sm font-semibold
            text-gray-700
            dark:text-gray-300
          "
        >
          Product
        </th>

        <th
          className="
            px-4 py-3 text-left
            text-sm font-semibold
            text-gray-700
            dark:text-gray-300
          "
        >
          Price
        </th>

        <th
          className="
            px-4 py-3 text-left
            text-sm font-semibold
            text-gray-700
            dark:text-gray-300
          "
        >
          Status
        </th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
        <td className="px-4 py-3 text-gray-900 dark:text-white">
          Headphone
        </td>

        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
          $120
        </td>

        <td className="px-4 py-3">
          <span
            className="
              rounded-full
              bg-green-100
              px-3 py-1
              text-sm text-green-700
              dark:bg-green-900/30
              dark:text-green-400
            "
          >
            Active
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

এখানে একটি গুরুত্বপূর্ণ pattern:

```text
Light background
bg-green-100

Dark background
dark:bg-green-900/30

Light text
text-green-700

Dark text
dark:text-green-400
```

এটি dashboard-এর status badge-এ খুব কাজে লাগবে।

---

## 1️⃣4️⃣ Dark Mode Design-এর গুরুত্বপূর্ণ Rule

Dark Mode মানে:

❌ সবকিছু `bg-black`

এটা নয়।

বরং:

```text
Page       → gray-950
Surface    → gray-900
Card       → gray-800
Border     → gray-700
Text       → white
Secondary  → gray-400
```

অর্থাৎ **multiple levels of darkness** ব্যবহার করলে UI বেশি পরিষ্কার হয়।

---

## 1️⃣5️⃣ Light/Dark Design Token চিন্তা করুন

Professional developer হিসেবে আপনাকে শুধু class মুখস্থ করলে হবে না।

Design system হিসেবে চিন্তা করতে হবে।

```text
                DESIGN SYSTEM
                     │
          ┌──────────┴──────────┐
          │                     │
      Light Mode            Dark Mode
          │                     │
     ┌────┼────┐           ┌────┼────┐
     │    │    │           │    │    │
   Page Card Text        Page Card Text
     │    │    │           │    │    │
 gray50 white gray900   gray950 gray800 white
```

এটাই scalable UI design-এর foundation।

---

## 1️⃣6️⃣ React + Tailwind Mental Model

আপনার মনে এই architecture রাখুন:

```text
React
  │
  ├── State
  │     └── darkMode
  │
  ├── Event
  │     └── Toggle
  │
  └── DOM
        └── <html class="dark">
                    │
                    ↓
                 Tailwind
                    │
             ┌──────┴──────┐
             │             │
        Normal Style    dark: Style
             │             │
             └──────┬──────┘
                    ↓
                    UI
```

অর্থাৎ:

**React controls the theme state → Tailwind controls the visual appearance.**

---

## 🛒 Day 20 Real-World Challenge

আজ আপনার সবচেয়ে গুরুত্বপূর্ণ কাজ:

#### “AI-Powered E-commerce Dark Dashboard”

একটি Dashboard তৈরি করুন।

###### Required Components

```text
Dashboard
│
├── Navbar
│   └── Theme Toggle
│
├── Sidebar
│
├── Statistics Cards
│   ├── Total Sales
│   ├── Orders
│   ├── Customers
│   └── Products
│
├── Recent Orders Table
│
└── Product Cards
```

###### Light Mode

```text
Page       → light
Card       → white
Text       → dark
Border     → light
```

###### Dark Mode

```text
Page       → dark
Card       → gray-800
Text       → white
Border     → gray-700
```

---

## 🧪 আজকের Practice

###### Practice 1 — Theme Button

তৈরি করুন:

```text
🌙 Dark Mode
☀️ Light Mode
```

---

###### Practice 2 — Product Card

একটি Product Card তৈরি করুন যেখানে:

* Light/Dark background
* Light/Dark text
* Light/Dark border
* Dark price
* Dark button
* Hover effect

---

###### Practice 3 — Login Form

একটি login form তৈরি করুন:

```text
Email
Password
Remember Me
Login
```

Light এবং Dark দুই mode-এ সুন্দর হতে হবে।

---

###### Practice 4 — Dashboard

কমপক্ষে:

```text
4 Statistics Cards
1 Table
1 Sidebar
1 Navbar
1 Theme Toggle
```

তৈরি করুন।

---

## 🧠 Day 20 Self-Test

নিজেকে এই প্রশ্নগুলো করুন:

###### Basic

1. `dark:` কী?
2. `dark:bg-gray-900` কী করে?
3. Light এবং Dark color strategy কেন দরকার?
4. Dark mode-এ শুধু background পরিবর্তন করলেই কি যথেষ্ট?

###### React

5. Theme state কেন দরকার?
6. `document.documentElement` কী?
7. `<html class="dark">` কেন ব্যবহার করা হয়?
8. `localStorage` কেন ব্যবহার করা হয়?

###### Professional

9. Dark Mode-এ কেন multiple gray shades ব্যবহার করা ভালো?
10. Product Card-এর কোন কোন অংশ dark mode-এর জন্য পরিবর্তন করা উচিত?
11. Dashboard-এর table কীভাবে dark mode friendly করবেন?
12. React এবং Tailwind-এর মধ্যে theme-এর দায়িত্ব কীভাবে ভাগ করবেন?

---

## 📌 Day 20 Cheat Sheet

```text
DARK MODE
dark:bg-gray-900
dark:bg-gray-800
dark:text-white
dark:text-gray-300
dark:text-gray-400
dark:border-gray-700
dark:hover:bg-gray-800
dark:placeholder:text-gray-500

THEME
Light Mode
→ white
→ gray-50
→ gray-900

Dark Mode
→ gray-950
→ gray-900
→ gray-800
→ white
→ gray-400

REACT
useState()
useEffect()

DOM
document.documentElement

LOCAL STORAGE
localStorage.setItem()
localStorage.getItem()
localStorage.removeItem()

THEME FLOW
User Click
    ↓
React State
    ↓
<html class="dark">
    ↓
dark:* utilities
    ↓
Dark UI
```

---

## 🎯 আজকের সবচেয়ে গুরুত্বপূর্ণ ৫টি বিষয়

```text
1️⃣ dark: variant
        ↓
2️⃣ Light/Dark Color Strategy
        ↓
3️⃣ Dark Component Design
        ↓
4️⃣ React Theme Toggle
        ↓
5️⃣ localStorage Theme Persistence
```

###### আজকের মূল শিক্ষা

> **Dark Mode শুধু `dark:bg-black` শেখা নয়; এটি একটি সম্পূর্ণ UI Theme Design System।**

আপনি যদি React + Tailwind দিয়ে professional e-commerce বা admin dashboard বানাতে চান, তাহলে **Light/Dark theme-কে শুরু থেকেই reusable design system হিসেবে চিন্তা করা** গুরুত্বপূর্ণ।

