# Learn TailwinCSS
*Day By Day*

# 🚀 Tailwind CSS — Day 5

## 📏 Width, Height, `max-w`, `min-h` এবং Container

আজ আমরা Tailwind CSS-এর **Width & Height System** শিখব। Responsive website বানানোর জন্য এই বিষয়গুলো খুবই গুরুত্বপূর্ণ।

আপনি আজ শিখবেন কীভাবে:

* Element-এর width নির্ধারণ করবেন
* Height নির্ধারণ করবেন
* Full width/height করবেন
* Maximum width নির্ধারণ করবেন
* Minimum height নির্ধারণ করবেন
* Screen-এর পুরো height ব্যবহার করবেন
* Responsive container তৈরি করবেন

---

# 🎯 আজকের Learning Goal

আজকের শেষে আপনি যেন বুঝতে পারেন:

```text
w-*       → Width
h-*       → Height
max-w-*   → Maximum Width
min-w-*   → Minimum Width
max-h-*   → Maximum Height
min-h-*   → Minimum Height
w-full    → 100% Width
h-full    → Parent-এর height অনুযায়ী
h-screen  → Viewport height
```

---


# 1️⃣ Width — `w-*`

Tailwind-এ width দেওয়ার জন্য ব্যবহার করি:

```text id="8m4f1a"
w-*
```

উদাহরণ:

```html
<div class="w-40 bg-blue-500">
  Width 40
</div>
```

আরও:

```text id="2n9f4s"
w-10
w-20
w-32
w-40
w-48
w-64
w-80
w-96
```

এগুলো Tailwind-এর predefined width scale-এর অংশ।

---

# 2️⃣ `w-full`

এটি খুব গুরুত্বপূর্ণ।

```html
<div class="w-full bg-blue-500">
  Full Width
</div>
```

এর অর্থ:

```text
width: 100%;
```

অর্থাৎ parent-এর available width পুরোটা ব্যবহার করবে।

---

# 3️⃣ `w-screen`

```html
<div class="w-screen">
  Full viewport width
</div>
```

এটি viewport-এর width ব্যবহার করে।

### `w-full` বনাম `w-screen`

```text id="0e7kqy"
w-full
↓
Parent-এর 100% width


w-screen
↓
Viewport-এর width
```

সাধারণ component/card layout-এ **`w-full` বেশি ব্যবহার করবেন**।

---

# 4️⃣ Fractional Width

Tailwind-এ fraction ব্যবহার করেও width দিতে পারবেন।

যেমন:

```text id="d5lq4s"
w-1/2
w-1/3
w-2/3
w-1/4
w-3/4
```

উদাহরণ:

```html
<div class="w-1/2 bg-blue-500">
  50%
</div>
```

এখানে:

```text
w-1/2
↓
50%
```

আর:

```html
<div class="w-1/3 bg-green-500">
  33.33%
</div>
```

---

# 5️⃣ Grid-এর মতো Layout তৈরি

ধরুন দুইটি section পাশাপাশি থাকবে:

```html
<div class="flex">
  <div class="w-1/2 bg-blue-500">
    Left
  </div>

  <div class="w-1/2 bg-green-500">
    Right
  </div>
</div>
```

ফলাফল:

```text
┌─────────────────────────────────┐
│       Left       │     Right    │
│        50%       │      50%     │
└─────────────────────────────────┘
```

---

# 6️⃣ Height — `h-*`

Height-এর জন্য:

```text id="d7x9q1"
h-*
```

উদাহরণ:

```html
<div class="h-40 bg-blue-500">
  Height
</div>
```

আরও:

```text id="z2j5xp"
h-10
h-20
h-32
h-40
h-48
h-64
h-80
h-96
```

---

# 7️⃣ `h-full`

```html
<div class="h-full">
  Content
</div>
```

এর অর্থ:

```text
height: 100%;
```

তবে মনে রাখবেন, `h-full` সঠিকভাবে কাজ করার জন্য parent-এর height নির্ধারিত থাকা অনেক সময় প্রয়োজন হয়।

---

# 8️⃣ `h-screen`

এটি খুব গুরুত্বপূর্ণ।

```html
<div class="h-screen">
  Full Screen
</div>
```

এর অর্থ viewport-এর height ব্যবহার করা।

সাধারণত:

```text
100vh
```

এর মতো আচরণ করে।

### কোথায় ব্যবহার করবেন?

* Login page
* Full-screen hero
* Dashboard layout
* Landing page section

উদাহরণ:

```html
<div class="h-screen flex items-center justify-center">
  <h1 class="text-4xl font-bold">
    Welcome
  </h1>
</div>
```

এতে পুরো viewport-এর height নিয়ে content center করা যায়।

---

# 9️⃣ `min-h-screen`

এটি খুব গুরুত্বপূর্ণ এবং real project-এ অনেক ব্যবহার করবেন।

```html
<div class="min-h-screen">
  Content
</div>
```

এর অর্থ:

> অন্তত viewport-এর height হবে, কিন্তু content বেশি হলে element আরও বড় হতে পারবে।

### `h-screen` বনাম `min-h-screen`

```text id="5r9d7n"
h-screen
↓
Height নির্দিষ্ট viewport height


min-h-screen
↓
Minimum height viewport height
↓
Content বেশি হলে আরও বড় হতে পারে
```

সাধারণ page wrapper-এর ক্ষেত্রে:

```html
<div class="min-h-screen">
```

অনেক সময় `h-screen`-এর চেয়ে বেশি উপযুক্ত।

---

# 🔟 `max-w-*`

এখন আসি খুব গুরুত্বপূর্ণ একটি বিষয়—**Maximum Width**।

ধরুন আপনার website desktop-এ 1920px wide।

আপনি চান না content পুরো 1920px জুড়ে ছড়িয়ে যাক।

তখন:

```html
<div class="max-w-6xl mx-auto">
  Content
</div>
```

ব্যবহার করতে পারেন।

---

# ⭐ `max-w` কেন গুরুত্বপূর্ণ?

ধরুন:

```html
<div class="w-full">
```

এটি available পুরো width নিতে পারে।

কিন্তু:

```html
<div class="w-full max-w-6xl mx-auto">
```

এখানে:

```text
w-full
↓
ছোট screen-এ available width ব্যবহার করবে

max-w-6xl
↓
বড় screen-এ maximum width সীমাবদ্ধ করবে

mx-auto
↓
Center করবে
```

এটি modern website layout-এর খুব common pattern।

---

# 1️⃣1️⃣ Responsive Container

এটি খুব ভালোভাবে বুঝুন।

```html
<div class="w-full max-w-7xl mx-auto px-4">
  Content
</div>
```

এখানে:

```text id="pj5l0n"
w-full
↓
Full available width

max-w-7xl
↓
Content অতিরিক্ত বড় হবে না

mx-auto
↓
Center

px-4
↓
Left/right breathing space
```

এটি আপনি প্রায় সব project-এ ব্যবহার করতে পারবেন।

---

# 🏗️ Real Website Example

```html
<div class="min-h-screen bg-gray-100">

  <main class="w-full max-w-7xl mx-auto px-4">

    <h1 class="text-3xl font-bold">
      Dashboard
    </h1>

  </main>

</div>
```

এখানে outer wrapper পুরো screen-এর minimum height নেবে এবং ভিতরের content responsive maximum width-এর মধ্যে থাকবে।

---

# 1️⃣2️⃣ `min-w-*`

Minimum width নির্ধারণ করতে:

```text id="z7x4v8"
min-w-*
```

উদাহরণ:

```html
<div class="min-w-40">
  Content
</div>
```

তবে সাধারণ application UI-তে `min-w` তুলনামূলকভাবে কম ব্যবহার করবেন।

---

# 1️⃣3️⃣ `max-h-*`

Maximum height:

```text id="1l4c0y"
max-h-*
```

যেমন:

```html
<div class="max-h-96 overflow-auto">
  Long content...
</div>
```

এখানে content নির্দিষ্ট maximum height অতিক্রম করলে `overflow-auto` ব্যবহার করে scroll করা যাবে।

---

# 🧠 Width + Height একসাথে

একটি square তৈরি করুন:

```html
<div class="w-40 h-40 bg-blue-500">
</div>
```

অর্থাৎ:

```text
Width  → 40
Height → 40
```

---

# 🟣 Circle তৈরি

Day 2-এর `rounded-full` মনে আছে?

এখন Width + Height + Rounded একসাথে:

```html
<div class="w-20 h-20 bg-blue-500 rounded-full">
</div>
```

ফলে একটি circular element হবে।

---

# 🧑‍💻 Profile Avatar

```html
<div class="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
  <span class="text-xl font-bold">
    AI
  </span>
</div>
```

এখানে:

```text id="f5z9d3"
w-20
h-20
↓
Same width & height

rounded-full
↓
Circle

flex
items-center
justify-center
↓
Text center
```

---

# 🔥 আজকের Main Practice

## একটি Responsive Profile Section তৈরি করুন

Structure:

```text
┌──────────────────────────────────────┐
│                                      │
│           [ Avatar ]                 │
│                                      │
│          Ariful Islam                │
│          Web Developer               │
│                                      │
│     Building modern web apps.        │
│                                      │
│          [ Contact Me ]              │
│                                      │
└──────────────────────────────────────┘
```

### Outer section:

```text
min-h-screen
```

### Content:

```text
w-full
max-w-md
mx-auto
```

### Avatar:

```text
w-24
h-24
rounded-full
```

---

# 💻 Challenge

নিজে এই structure তৈরি করার চেষ্টা করুন:

```html
<div class="min-h-screen bg-gray-100">

  <div class="w-full max-w-md mx-auto">
    
    <!-- Avatar -->

    <!-- Name -->

    <!-- Profession -->

    <!-- Description -->

    <!-- Button -->

  </div>

</div>
```

তারপর নিজের মতো করে styling করুন।

---

# 🧪 Experiment Time

## Experiment 1

```text
w-40
```

পরিবর্তন করে:

```text
w-64
```

দেখুন width কীভাবে পরিবর্তিত হয়।

---

## Experiment 2

```text
max-w-md
```

পরিবর্তন করে:

```text
max-w-xl
```

দেখুন desktop screen-এ content width কীভাবে পরিবর্তিত হয়।

---

## Experiment 3

```text
h-screen
```

পরিবর্তন করে:

```text
min-h-screen
```

তারপর content অনেক বেশি করে দিন।

দেখুন দুটির আচরণের পার্থক্য।

---

# 📝 আজকের Homework

## Task 1 — Login Page

একটি সম্পূর্ণ Login Page তৈরি করুন।

Requirements:

```text
min-h-screen
↓
Full page

max-w-md
↓
Login box সীমাবদ্ধ

w-full
↓
Responsive

mx-auto
↓
Center
```

UI:

```text
┌─────────────────────────┐
│         Login           │
│                         │
│ Email                   │
│ [___________________]   │
│                         │
│ Password                │
│ [___________________]   │
│                         │
│       [ Login ]         │
└─────────────────────────┘
```

---

## Task 2 — Two Column Layout

এটি তৈরি করুন:

```text
┌────────────────────────────────┐
│                                │
│      Left      │      Right    │
│       50%      │       50%     │
│                                │
└────────────────────────────────┘
```

ব্যবহার করুন:

```text
flex
w-1/2
h-*
```

---

# 🧠 Day 5 Cheat Sheet

```text
WIDTH

w-40       → নির্দিষ্ট width
w-full     → 100%
w-screen   → viewport width

w-1/2      → 50%
w-1/3      → 33.33%
w-2/3      → 66.66%
w-1/4      → 25%
```

```text
HEIGHT

h-40
h-64
h-full
h-screen
```

```text
MIN / MAX

min-w-*
max-w-*

min-h-*
max-h-*
```

সবচেয়ে গুরুত্বপূর্ণ:

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

# ⭐ Professional Pattern

এই pattern-টি মনে রাখুন:

```html
<div class="w-full max-w-7xl mx-auto px-4">
```

এর অর্থ:

```text
w-full
   ↓
Responsive width

max-w-7xl
   ↓
Maximum content width

mx-auto
   ↓
Center

px-4
   ↓
Side spacing
```

আর page wrapper-এর জন্য:

```html
<div class="min-h-screen">
```

### 🎯 Day 5-এর মূল শিক্ষা

**Width + Height + Max Width + Responsive Container**—এই চারটি ভালোভাবে বুঝতে পারলে আপনি professional website-এর basic layout তৈরি করতে পারবেন।


