# Learn TailwinCSS
*Day By Day*

## 🎯 Tailwind CSS — Day 14: Responsive Landing Page তৈরি

আজ আমরা শুধু নতুন কিছু utility শিখব না—**Day 1 থেকে Day 13 পর্যন্ত শেখা বিষয়গুলো একসাথে ব্যবহার করে একটি বাস্তব Responsive Landing Page তৈরি করব।**

তুমি যেহেতু React.js/MERN developer, তাই আজকের project-টি এমনভাবে করব যাতে ভবিষ্যতে **SaaS, E-commerce, AI Product, Portfolio বা Client Project**-এ একই structure ব্যবহার করতে পারো।

---

#### ⏰ আজকের ১ ঘণ্টার পরিকল্পনা

| সময়      | কাজ                    |
| -------- | ---------------------- |
| 10 মিনিট | Landing Page Structure |
| 10 মিনিট | Responsive Navbar      |
| 15 মিনিট | Hero Section           |
| 10 মিনিট | Features Section       |
| 10 মিনিট | CTA + Footer           |
| 5 মিনিট  | Revision               |

---

## 1️⃣ Landing Page কী?

একটি Landing Page সাধারণত কোনো product, service বা business সম্পর্কে visitor-কে বোঝানোর জন্য তৈরি করা হয়।

সাধারণ structure:

```text
┌────────────────────────────────────┐
│ Navbar                             │
├────────────────────────────────────┤
│                                    │
│ Hero Section                       │
│ Heading + Description + Button     │
│                                    │
├────────────────────────────────────┤
│ Features                           │
│  Card   Card   Card                │
│                                    │
├────────────────────────────────────┤
│ CTA Section                        │
│                                    │
├────────────────────────────────────┤
│ Footer                             │
└────────────────────────────────────┘
```

---

## 2️⃣ আজকের Project

আমরা একটি কাল্পনিক AI Product তৈরি করব:

###### **SmartAI**

> AI-powered tools for modern businesses.

আমাদের Landing Page থাকবে:

```text
Navbar
   ↓
Hero
   ↓
Features
   ↓
CTA
   ↓
Footer
```

---

## 3️⃣ প্রথমে Container তৈরি

Tailwind-এ একটি খুব গুরুত্বপূর্ণ pattern:

```html id="7m1m7d"
<div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
  Content
</div>
```

এখানে:

```text
w-full      → পুরো available width
max-w-7xl   → content অতিরিক্ত চওড়া হবে না
mx-auto     → মাঝখানে
px-4        → mobile padding
sm:px-6     → একটু বড় screen-এ padding
lg:px-8     → বড় screen-এ padding
```

এই pattern **মনে রাখবে**।

---

## 4️⃣ Responsive Navbar

Navbar-এর structure:

```text
Logo                    Links
SmartAI        Home Features Pricing Login
```

Tailwind:

```html id="s0u4ly"
<nav class="border-b bg-white">
  <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">

    <h1 class="text-2xl font-bold text-blue-600">
      SmartAI
    </h1>

    <div class="hidden items-center gap-6 md:flex">
      <a href="##" class="text-gray-600 hover:text-blue-600">
        Home
      </a>

      <a href="##" class="text-gray-600 hover:text-blue-600">
        Features
      </a>

      <a href="##" class="text-gray-600 hover:text-blue-600">
        Pricing
      </a>

      <button class="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Login
      </button>
    </div>

    <button class="rounded-lg border px-3 py-2 md:hidden">
      ☰
    </button>

  </div>
</nav>
```

###### এখানে আমরা আগের কোন কোন concept ব্যবহার করেছি?

```text
Day 4 → px, py, gap
Day 5 → max-w
Day 6 → flex, items-center, justify-between
Day 8 → md:, hidden
Day 10 → border
Day 13 → button, hover
```

এটাই Tailwind শেখার আসল উদ্দেশ্য।

---

## 5️⃣ Hero Section

Landing Page-এর সবচেয়ে গুরুত্বপূর্ণ অংশ হলো Hero Section।

Structure:

```text
          Build Smarter With AI

     Powerful AI tools for your business.

       [ Get Started ] [ Learn More ]

              [ Image ]
```

Tailwind:

```html id="iq0lxx"
<section class="bg-gray-50">
  <div
    class="
      mx-auto
      grid
      max-w-7xl
      grid-cols-1
      items-center
      gap-12
      px-4
      py-20
      md:grid-cols-2
      lg:py-28
    "
  >

    <!-- Content -->
    <div>

      <span
        class="
          inline-block
          rounded-full
          bg-blue-100
          px-4
          py-2
          text-sm
          font-semibold
          text-blue-700
        "
      >
        AI-Powered Platform
      </span>

      <h1
        class="
          mt-6
          text-4xl
          font-bold
          leading-tight
          text-gray-900
          sm:text-5xl
          lg:text-6xl
        "
      >
        Build Smarter With AI
      </h1>

      <p
        class="
          mt-6
          max-w-xl
          text-lg
          leading-8
          text-gray-600
        "
      >
        Automate your business, understand your customers,
        and make better decisions with powerful AI tools.
      </p>

      <div class="mt-8 flex flex-col gap-4 sm:flex-row">

        <button
          class="
            rounded-lg
            bg-blue-600
            px-6
            py-3
            font-semibold
            text-white
            shadow-md
            transition
            hover:bg-blue-700
            hover:shadow-lg
          "
        >
          Get Started
        </button>

        <button
          class="
            rounded-lg
            border
            border-gray-300
            px-6
            py-3
            font-semibold
            text-gray-700
            transition
            hover:bg-gray-100
          "
        >
          Learn More
        </button>

      </div>

    </div>

    <!-- Image -->
    <div class="aspect-square overflow-hidden rounded-2xl bg-blue-100">
      <div class="flex h-full items-center justify-center">
        <span class="text-6xl">🤖</span>
      </div>
    </div>

  </div>
</section>
```

---

## 6️⃣ এখানে Responsive Design লক্ষ্য করো

আমরা লিখেছি:

```html id="o4qqj7"
grid-cols-1 md:grid-cols-2
```

অর্থাৎ:

```text
Mobile
┌───────────────┐
│ Content       │
├───────────────┤
│ Image         │
└───────────────┘

Desktop
┌───────────────┬───────────────┐
│ Content       │ Image         │
└───────────────┴───────────────┘
```

এটাই **Mobile First Design**।

---

## 7️⃣ Features Section

এখন আমাদের product-এর features দেখাব।

```text
              Powerful Features

     ┌────────┐ ┌────────┐ ┌────────┐
     │   🤖   │ │   ⚡   │ │   📊   │
     │ AI     │ │ Fast   │ │ Report │
     └────────┘ └────────┘ └────────┘
```

Tailwind:

```html id="p70p0y"
<section class="bg-white py-20">

  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    <div class="mx-auto max-w-2xl text-center">

      <h2 class="text-3xl font-bold text-gray-900 md:text-4xl">
        Powerful Features
      </h2>

      <p class="mt-4 text-gray-600">
        Everything you need to grow your business faster.
      </p>

    </div>

    <div
      class="
        mt-12
        grid
        grid-cols-1
        gap-6
        sm:grid-cols-2
        lg:grid-cols-3
      "
    >

      <!-- Card 1 -->
      <div
        class="
          rounded-2xl
          border
          border-gray-200
          p-6
          shadow-sm
          transition
          hover:-translate-y-1
          hover:shadow-lg
        "
      >
        <div class="text-4xl">
          🤖
        </div>

        <h3 class="mt-5 text-xl font-bold">
          AI Automation
        </h3>

        <p class="mt-3 leading-7 text-gray-600">
          Automate repetitive tasks and save valuable time.
        </p>
      </div>

      <!-- Card 2 -->
      <div
        class="
          rounded-2xl
          border
          border-gray-200
          p-6
          shadow-sm
          transition
          hover:-translate-y-1
          hover:shadow-lg
        "
      >
        <div class="text-4xl">
          ⚡
        </div>

        <h3 class="mt-5 text-xl font-bold">
          Fast Performance
        </h3>

        <p class="mt-3 leading-7 text-gray-600">
          Build fast and reliable applications for your users.
        </p>
      </div>

      <!-- Card 3 -->
      <div
        class="
          rounded-2xl
          border
          border-gray-200
          p-6
          shadow-sm
          transition
          hover:-translate-y-1
          hover:shadow-lg
        "
      >
        <div class="text-4xl">
          📊
        </div>

        <h3 class="mt-5 text-xl font-bold">
          Smart Analytics
        </h3>

        <p class="mt-3 leading-7 text-gray-600">
          Understand your business with powerful analytics.
        </p>
      </div>

    </div>

  </div>

</section>
```

---

## 8️⃣ Feature Card-এ কোন Concept ব্যবহার হলো?

এখানে অনেকগুলো পুরোনো lesson একসাথে এসেছে:

```text
border
rounded
p-6
shadow
transition
hover
grid
gap
responsive breakpoint
text
```

অর্থাৎ Tailwind-এ **প্রতিটি lesson আলাদা আলাদা নয়**।

বাস্তব project-এ এগুলো একসাথে ব্যবহার করতে হয়।

---

## 9️⃣ CTA Section

CTA = **Call To Action**

User-কে একটি নির্দিষ্ট action করতে বলা হয়।

যেমন:

> Start building your future with AI today.

```html id="5hx2o8"
<section class="px-4 py-20">

  <div
    class="
      mx-auto
      max-w-7xl
      overflow-hidden
      rounded-3xl
      bg-blue-600
      px-6
      py-16
      text-center
      text-white
      sm:px-12
    "
  >

    <h2 class="text-3xl font-bold md:text-4xl">
      Ready to Build Something Amazing?
    </h2>

    <p class="mx-auto mt-4 max-w-2xl text-blue-100">
      Start using SmartAI today and take your business
      to the next level.
    </p>

    <button
      class="
        mt-8
        rounded-lg
        bg-white
        px-6
        py-3
        font-semibold
        text-blue-600
        shadow
        transition
        hover:bg-gray-100
      "
    >
      Get Started
    </button>

  </div>

</section>
```

---

## 🔟 Footer

```html id="k4f5gp"
<footer class="border-t bg-gray-900 text-white">

  <div
    class="
      mx-auto
      flex
      max-w-7xl
      flex-col
      gap-4
      px-4
      py-8
      md:flex-row
      md:items-center
      md:justify-between
    "
  >

    <p class="text-gray-400">
      © 2026 SmartAI. All rights reserved.
    </p>

    <div class="flex gap-6">

      <a href="##" class="text-gray-400 hover:text-white">
        Privacy
      </a>

      <a href="##" class="text-gray-400 hover:text-white">
        Terms
      </a>

      <a href="##" class="text-gray-400 hover:text-white">
        Contact
      </a>

    </div>

  </div>

</footer>
```

---

## 1️⃣1️⃣ সম্পূর্ণ React Component Structure

বাস্তব React project-এ সবকিছু একটি file-এ না রেখে component-এ ভাগ করা ভালো।

```text
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Features.jsx
│   ├── CTA.jsx
│   └── Footer.jsx
│
├── App.jsx
└── main.jsx
```

এটি একটি গুরুত্বপূর্ণ **Component Architecture**।

---

## 1️⃣2️⃣ App.jsx

```jsx id="uhqu3y"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
```

এখন `App.jsx` পরিষ্কার থাকবে।

```text
App
│
├── Navbar
├── Hero
├── Features
├── CTA
└── Footer
```

---

## 1️⃣3️⃣ Features-কে আরও Professional করা

একই card তিনবার লিখে না রেখে React-এ data ব্যবহার করতে পারো।

```jsx id="8g1pzr"
const features = [
  {
    icon: "🤖",
    title: "AI Automation",
    description: "Automate repetitive business tasks."
  },
  {
    icon: "⚡",
    title: "Fast Performance",
    description: "Build fast and reliable applications."
  },
  {
    icon: "📊",
    title: "Smart Analytics",
    description: "Understand your business with analytics."
  }
];
```

তারপর:

```jsx id="l6f23y"
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {features.map((feature) => (
    <div
      key={feature.title}
      className="
        rounded-2xl
        border
        border-gray-200
        p-6
        shadow-sm
        transition
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <div className="text-4xl">
        {feature.icon}
      </div>

      <h3 className="mt-5 text-xl font-bold">
        {feature.title}
      </h3>

      <p className="mt-3 text-gray-600">
        {feature.description}
      </p>
    </div>
  ))}
</div>
```

এটি তোমার React skill-এর সাথে Tailwind skill-কে combine করছে।

---

## 🧠 আজকের সবচেয়ে গুরুত্বপূর্ণ শিক্ষা

Day 14-এ তুমি আসলে **Tailwind-এর utility class ব্যবহার করার চেয়ে বেশি কিছু** শিখছো।

তুমি শিখছো:

```text
Requirement
     ↓
Page Structure
     ↓
Components
     ↓
Layout
     ↓
Responsive Design
     ↓
UI Styling
     ↓
Reusable Data
```

এটাই real-world frontend development-এর workflow।

---

## 📱 Responsive Design পরীক্ষা

তোমার browser-এর DevTools খুলে বিভিন্ন screen size পরীক্ষা করো।

###### Mobile

```text
grid-cols-1
flex-col
px-4
text-4xl
```

###### Tablet

```text
sm:grid-cols-2
sm:flex-row
```

###### Desktop

```text
lg:grid-cols-3
lg:text-6xl
```

মনে রাখবে:

> **Mobile First → তারপর বড় screen-এর জন্য design enhance করবে।**

---

## 📝 Day 14 Homework

আজ তোমার নিজের হাতে একটি **AI SaaS Landing Page** তৈরি করো।

###### Required Sections

```text
1. Navbar
2. Hero
3. Features
4. How It Works
5. Pricing
6. CTA
7. Footer
```

###### Must Use

* Flexbox
* Grid
* Responsive breakpoints
* Buttons
* Hover
* Focus
* Shadows
* Borders
* Rounded corners
* Typography
* Spacing
* `max-w-*`
* `mx-auto`

---

## ⭐ Challenge

তোমার নিজের **AI-Powered E-Commerce Management System**-এর Landing Page বানাও।

উদাহরণ:

```text
┌─────────────────────────────────────────────┐
│ E-Commerce AI        Features Pricing Login │
├─────────────────────────────────────────────┤
│                                             │
│     Manage Your Store                       │
│     With The Power Of AI                    │
│                                             │
│     [Start Free] [View Demo]                │
│                                             │
│                    Dashboard Preview        │
├─────────────────────────────────────────────┤
│                                             │
│           Powerful Features                 │
│                                             │
│    AI Analytics   Inventory   Sales         │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│       Ready to Grow Your Business?          │
│             [Get Started]                   │
│                                             │
├─────────────────────────────────────────────┤
│ Footer                                      │
└─────────────────────────────────────────────┘
```

এখানে তোমার আগের **E-commerce Dashboard Project**-এর ধারণা ব্যবহার করতে পারো।

---

## 📋 Day 14 Cheat Sheet

| প্রয়োজন            | Tailwind                     |
| ------------------ | ---------------------------- |
| Center container   | `mx-auto`                    |
| Maximum width      | `max-w-7xl`                  |
| Responsive padding | `px-4 sm:px-6 lg:px-8`       |
| Flex layout        | `flex`                       |
| Grid layout        | `grid`                       |
| Mobile → Desktop   | `grid-cols-1 md:grid-cols-2` |
| 3-column           | `lg:grid-cols-3`             |
| Vertical spacing   | `space-y-*`                  |
| Gap                | `gap-*`                      |
| Hover              | `hover:*`                    |
| Transition         | `transition`                 |
| Shadow             | `shadow-*`                   |
| Border             | `border`                     |
| Rounded            | `rounded-*`                  |
| Responsive text    | `text-4xl md:text-6xl`       |
| Hide mobile        | `hidden md:block`            |

---

## 🎯 Day 14-এর Key Takeaway

আজকের সবচেয়ে গুরুত্বপূর্ণ concept:

```text
Tailwind শেখা
     ↓
Utility জানা
     ↓
Utility combine করা
     ↓
Component তৈরি করা
     ↓
Responsive করা
     ↓
Complete UI তৈরি করা
```

তুমি এখন আর শুধু `bg-blue-500`, `p-4`, `flex` আলাদা আলাদা শিখছো না। এখন এগুলো দিয়ে **সম্পূর্ণ professional interface তৈরি করা** শুরু করছো।


