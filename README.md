# Learn TailwinCSS
*Day By Day*

# 🚀 Tailwind CSS — Day 3

## 🎨 Color System + Typography

আজ আমরা Tailwind CSS-এর দুটি অত্যন্ত গুরুত্বপূর্ণ বিষয় শিখব:

1. **Color System**
2. **Typography**

আপনি যেহেতু React/MERN developer, এগুলো ভালোভাবে আয়ত্ত করতে পারলে **Dashboard, E-commerce, Portfolio, Landing Page**—সব ধরনের UI তৈরি করা অনেক সহজ হবে।




# 🟢 Part 1 — Tailwind Color System

Tailwind-এ color সাধারণত এই pattern অনুসরণ করে:

```text
property-color-shade
```

যেমন:

```text
bg-blue-500
text-red-600
border-green-400
```

এখানে:

```text
bg
 ↓
Property

blue
 ↓
Color

500
 ↓
Shade
```

---

# 🎨 1. Background Color

```html
<div class="bg-blue-500">
  Blue Background
</div>
```

আরও কিছু:

```html
<div class="bg-red-500">Red</div>
<div class="bg-green-500">Green</div>
<div class="bg-yellow-400">Yellow</div>
<div class="bg-purple-500">Purple</div>
<div class="bg-pink-500">Pink</div>
<div class="bg-gray-800">Dark Gray</div>
```

---

# 🎨 2. Text Color

```html
<p class="text-blue-600">
  Blue Text
</p>
```

উদাহরণ:

```html
<p class="text-gray-900">Heading</p>

<p class="text-gray-600">Description</p>

<p class="text-red-500">Error Message</p>

<p class="text-green-600">Success Message</p>
```

---

# 🎨 3. Border Color

```html
<div class="border border-blue-500">
  Content
</div>
```

অথবা:

```html
<input class="border border-gray-300" />
```

---

# 🔢 Color Shades বুঝুন

একই color-এর বিভিন্ন shade থাকে।

উদাহরণ:

```text
blue-50
blue-100
blue-200
blue-300
blue-400
blue-500
blue-600
blue-700
blue-800
blue-900
950
```

সাধারণভাবে:

```text
50
↓
সবচেয়ে হালকা

500
↓
মাঝারি

900 / 950
↓
সবচেয়ে গাঢ়
```

উদাহরণ:

```html
<div class="bg-blue-100">Light</div>
<div class="bg-blue-500">Medium</div>
<div class="bg-blue-900">Dark</div>
```

---

# 🧠 একটি গুরুত্বপূর্ণ Design Pattern

Professional UI-তে সাধারণত background এবং text-এর contrast রাখা হয়।

যেমন:

```html
<div class="bg-blue-600 text-white">
  Welcome
</div>
```

আবার light background:

```html
<div class="bg-blue-50 text-blue-900">
  Welcome
</div>
```

এটি UI design-এ খুব useful pattern।

---

# 🟢 Part 2 — Typography

Typography মানে হলো আপনার text-এর:

* Size
* Weight
* Line height
* Letter spacing
* Alignment

ইত্যাদি নিয়ন্ত্রণ করা।

---

# 1️⃣ Font Size

Tailwind-এ:

```text
text-xs
text-sm
text-base
text-lg
text-xl
text-2xl
text-3xl
text-4xl
text-5xl
text-6xl
```

উদাহরণ:

```html
<p class="text-sm">
  Small Text
</p>

<p class="text-base">
  Normal Text
</p>

<p class="text-xl">
  Large Text
</p>

<h1 class="text-4xl">
  Big Heading
</h1>
```

---

# 📌 সাধারণভাবে কখন কোনটা ব্যবহার করবেন?

একটি website-এ আপনি এমন hierarchy রাখতে পারেন:

```text
Hero Heading
    ↓
text-4xl / text-5xl

Section Heading
    ↓
text-2xl / text-3xl

Card Heading
    ↓
text-xl / text-2xl

Normal Text
    ↓
text-base

Small Text
    ↓
text-sm
```

---

# 2️⃣ Font Weight

Font-এর thickness পরিবর্তন করতে:

```text
font-thin
font-light
font-normal
font-medium
font-semibold
font-bold
font-extrabold
font-black
```

সবচেয়ে বেশি ব্যবহৃত:

```html
<h1 class="font-bold">
  Heading
</h1>
```

অথবা:

```html
<h2 class="font-semibold">
  Product Name
</h2>
```

---

# ⭐ `font-medium` বনাম `font-semibold` বনাম `font-bold`

এগুলো UI-তে খুব বেশি ব্যবহার করবেন।

```text
font-medium
↓
সামান্য bold

font-semibold
↓
মাঝারি bold

font-bold
↓
স্পষ্ট bold
```

উদাহরণ:

```html
<p class="font-medium">
  Username
</p>

<p class="font-semibold">
  Product Name
</p>

<h2 class="font-bold">
  Dashboard
</h2>
```

---

# 3️⃣ Text Alignment

Text alignment:

```text
text-left
text-center
text-right
text-justify
```

উদাহরণ:

```html
<h1 class="text-center">
  Welcome
</h1>
```

Card-এর heading center করতে:

```html
<div class="text-center">
  <h2 class="text-2xl font-bold">
    Premium Plan
  </h2>
</div>
```

---

# 4️⃣ Line Height

একাধিক লাইনের text-এর মধ্যে vertical spacing নিয়ন্ত্রণ করতে:

```text
leading-none
leading-tight
leading-snug
leading-normal
leading-relaxed
leading-loose
```

উদাহরণ:

```html
<p class="leading-relaxed">
  Tailwind CSS is a utility-first CSS framework
  for building modern user interfaces.
</p>
```

Long paragraph-এর ক্ষেত্রে `leading-relaxed` অনেক useful।

---

# 5️⃣ Letter Spacing

Text-এর অক্ষরগুলোর মধ্যে spacing:

```text
tracking-tighter
tracking-tight
tracking-normal
tracking-wide
tracking-wider
tracking-widest
```

উদাহরণ:

```html
<h2 class="tracking-wide">
  HELLO WORLD
</h2>
```

বিশেষ করে:

* uppercase heading
* labels
* buttons
* navigation

এগুলোতে কাজে লাগে।

---

# 6️⃣ Text Decoration

Underline:

```html
<a class="underline">
  Read More
</a>
```

Underline সরাতে:

```html
<a class="no-underline">
  Read More
</a>
```

Line-through:

```html
<p class="line-through">
  $100
</p>
```

এটি e-commerce-এর পুরনো price দেখাতে ব্যবহার করতে পারেন।

---

# 🛒 E-commerce Example

```html
<div>
  <h2 class="text-xl font-semibold text-gray-900">
    Premium Watch
  </h2>

  <p class="mt-2 text-sm text-gray-600 leading-relaxed">
    A stylish smartwatch designed for everyday use.
  </p>

  <div class="mt-4">
    <span class="text-2xl font-bold text-blue-600">
      $99
    </span>

    <span class="ml-2 text-sm text-gray-400 line-through">
      $129
    </span>
  </div>
</div>
```

এখানে আপনি একসাথে ব্যবহার করেছেন:

```text
text-xl
font-semibold
text-gray-900

text-sm
text-gray-600
leading-relaxed

text-2xl
font-bold
text-blue-600

line-through
```

---

# 🔥 আজকের Main Practice

এখন আমরা একটি **Product Card** বানাব।

```html
<div class="w-80 bg-white rounded-2xl border border-gray-200 shadow-lg p-6">

  <div class="h-40 bg-blue-100 rounded-xl flex items-center justify-center">
    <span class="text-blue-700 font-semibold">
      Product Image
    </span>
  </div>

  <h2 class="mt-5 text-2xl font-bold text-gray-900">
    Smart Watch
  </h2>

  <p class="mt-2 text-sm text-gray-600 leading-relaxed">
    A modern smartwatch for your everyday lifestyle.
  </p>

  <div class="mt-4">
    <span class="text-2xl font-bold text-blue-600">
      $99
    </span>

    <span class="ml-2 text-sm text-gray-400 line-through">
      $129
    </span>
  </div>

  <button class="mt-5 w-full bg-blue-600 text-white font-semibold py-3 rounded-lg">
    Buy Now
  </button>

</div>
```

---

# 🧪 Experiment করুন

এখন শুধু class পরিবর্তন করে দেখুন।

### Experiment 1

```text
text-2xl
```

পরিবর্তন করে:

```text
text-4xl
```

কী পরিবর্তন হলো?

---

### Experiment 2

```text
font-bold
```

পরিবর্তন করে:

```text
font-light
```

Text-এর appearance লক্ষ্য করুন।

---

### Experiment 3

```text
text-gray-600
```

পরিবর্তন করে:

```text
text-gray-900
```

---

### Experiment 4

```text
leading-relaxed
```

পরিবর্তন করে:

```text
leading-tight
```

Paragraph-এর line spacing লক্ষ্য করুন।

---

# 📝 আজকের Homework

## Task 1 — Blog Card

একটি Blog Card তৈরি করুন:

```text
┌────────────────────────────┐
│                            │
│       Blog Image           │
│                            │
├────────────────────────────┤
│ Web Development            │
│                            │
│ Learn Tailwind CSS         │
│                            │
│ Tailwind CSS is...         │
│                            │
│ Read More →                │
└────────────────────────────┘
```

ব্যবহার করবেন:

* Background color
* Text color
* Font size
* Font weight
* Line height
* Border
* Rounded
* Shadow

---

## Task 2 — Color Experiment

একটি card তৈরি করে নিচেরগুলো ব্যবহার করুন:

```text
bg-blue-50
text-blue-900
border-blue-200
```

তারপর পরিবর্তন করুন:

```text
bg-green-50
text-green-900
border-green-200
```

এরপর:

```text
bg-red-50
text-red-900
border-red-200
```

লক্ষ্য করুন কীভাবে একই UI-এর **color theme** পরিবর্তন হয়ে যাচ্ছে।

---

# 🧠 Day 3 Cheat Sheet

### 🎨 Colors

```text
bg-blue-500
text-blue-600
border-blue-300
```

### 🔤 Font Size

```text
text-sm
text-base
text-lg
text-xl
text-2xl
text-3xl
text-4xl
```

### 💪 Font Weight

```text
font-normal
font-medium
font-semibold
font-bold
```

### 📏 Line Height

```text
leading-tight
leading-normal
leading-relaxed
```

### 🔠 Letter Spacing

```text
tracking-tight
tracking-normal
tracking-wide
```

### 📐 Alignment

```text
text-left
text-center
text-right
```

### ✏️ Decoration

```text
underline
no-underline
line-through
```

---

# ✅ Day 3-এর মূল শিক্ষা

আজ আপনাকে এই pattern বুঝতে হবে:

```text
bg-*       → Background
text-*     → Text Color / Font Size
border-*   → Border
font-*     → Font Weight
leading-*  → Line Height
tracking-* → Letter Spacing
```

**আজকের সবচেয়ে গুরুত্বপূর্ণ practice হলো নিজের হাতে অন্তত ২টি Card এবং ২টি Button তৈরি করা।**

