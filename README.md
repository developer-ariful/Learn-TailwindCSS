# Learn TailwinCSS
*Day By Day*

## 🚀 Tailwind CSS — Day 2



## ⏰ আজকের ১ ঘণ্টার পরিকল্পনা

| সময়      | কাজ                 |
| -------- | ------------------- |
| 15 মিনিট | Concept             |
| 30 মিনিট | Coding Practice     |
| 15 মিনিট | Homework + Revision |

---

## ১️⃣ Background Color

Tailwind-এ background color দেওয়ার জন্য ব্যবহার করবেন:

```text
bg-*
```

যেমন:

```html
<div class="bg-blue-500">
  Hello
</div>
```

এখানে:

```text
bg → background
blue → color
500 → shade
```

### কিছু গুরুত্বপূর্ণ উদাহরণ

```html
<div class="bg-red-500"></div>
<div class="bg-green-500"></div>
<div class="bg-blue-500"></div>
<div class="bg-yellow-400"></div>
<div class="bg-purple-500"></div>
<div class="bg-gray-200"></div>
<div class="bg-black"></div>
<div class="bg-white"></div>
```

---

## 🎨 Color Shade কী?

একই color-এর বিভিন্ন shade থাকে।

উদাহরণ:

```text
blue-100
blue-200
blue-300
blue-400
blue-500
blue-600
blue-700
blue-800
blue-900
```

সাধারণভাবে:

```text
100 → হালকা
500 → মাঝামাঝি
900 → গাঢ়
```

যেমন:

```html
<button class="bg-blue-500">
  Button 1
</button>

<button class="bg-blue-700">
  Button 2
</button>
```

দ্বিতীয় button-টি বেশি গাঢ় হবে।

---

## ২️⃣ Text Color

Text-এর color পরিবর্তন করতে:

```text
text-*
```

উদাহরণ:

```html
<p class="text-red-500">
  Error
</p>

<p class="text-green-500">
  Success
</p>

<p class="text-blue-600">
  Information
</p>

<p class="text-gray-700">
  Description
</p>
```

######## খুব গুরুত্বপূর্ণ

`text-*` শুধু color-এর জন্য নয়।

Tailwind-এ:

```text
text-gray-600
```

মানে **text color**।

কিন্তু:

```text
text-2xl
```

মানে **font size**।

অর্থাৎ `text-` prefix-এর পরের অংশ দেখে বুঝতে হবে এটি color নাকি size।

---

## ৩️⃣ Border

Border দেওয়ার জন্য:

```text
border
```

উদাহরণ:

```html
<div class="border">
  Content
</div>
```

### Border-এর color

```html
<div class="border border-gray-300">
  Content
</div>
```

### Border-এর thickness

```html
<div class="border-2">
  Content
</div>
```

```html
<div class="border-4">
  Content
</div>
```

উদাহরণ:

```html
<div class="border-2 border-blue-500">
  Blue Border
</div>
```

---

## ৪️⃣ Border-এর নির্দিষ্ট পাশে Border

আপনি চাইলে শুধু একটি পাশে border দিতে পারেন।

```text
border-t → Top
border-b → Bottom
border-l → Left
border-r → Right
```

উদাহরণ:

```html
<div class="border-b border-gray-300">
  Navbar
</div>
```

আরও:

```html
<div class="border-l-4 border-blue-500">
  Important content
</div>
```

---

## ৫️⃣ Border Radius

Card বা button-এর corner গোল করতে ব্যবহার করবেন:

```text
rounded-*
```

উদাহরণ:

```html
<div class="rounded">
  Card
</div>
```

আরও:

```text
rounded-sm
rounded
rounded-md
rounded-lg
rounded-xl
rounded-2xl
rounded-3xl
```

যত বড় value, সাধারণত corner তত বেশি গোল হবে।

---

### ⭐ বিশেষভাবে গুরুত্বপূর্ণ

```text
rounded-full
```

এটি অনেক বেশি গোল/পূর্ণ radius তৈরি করে।

যেমন profile image:

```html
<img
  src="profile.jpg"
  class="w-20 h-20 rounded-full"
/>
```

এভাবে circular image তৈরি করা যায়।

---

## ৬️⃣ Shadow

Card-কে depth দেওয়ার জন্য shadow ব্যবহার করা হয়।

```text
shadow-sm
shadow
shadow-md
shadow-lg
shadow-xl
shadow-2xl
```

উদাহরণ:

```html
<div class="shadow-lg">
  Card
</div>
```

### সাধারণ UI-তে

```html
<div class="bg-white rounded-xl shadow-md">
  Product Card
</div>
```

এটি খুব common pattern।

---

## ৭️⃣ Opacity

কোনো element-এর transparency নিয়ন্ত্রণ করতে opacity ব্যবহার করতে পারেন।

```text
opacity-0
opacity-25
opacity-50
opacity-75
opacity-100
```

উদাহরণ:

```html
<div class="opacity-50">
  Semi Transparent
</div>
```

---

## ৮️⃣ এখন সব একসাথে ব্যবহার করি

এবার আমরা একটি সুন্দর **Product Card** তৈরি করব।

```html
<div class="w-80 bg-white rounded-2xl shadow-lg p-6 border border-gray-200">

  <div class="bg-blue-100 rounded-xl p-8 text-center">
    Product Image
  </div>

  <h2 class="mt-5 text-2xl font-bold text-gray-800">
    Smart Watch
  </h2>

  <p class="mt-2 text-gray-600">
    A modern smartwatch with useful features.
  </p>

  <p class="mt-4 text-xl font-bold text-blue-600">
    $99
  </p>

  <button class="mt-5 w-full bg-blue-600 text-white py-3 rounded-lg shadow-md">
    Buy Now
  </button>

</div>
```

এখানে আমরা ব্যবহার করেছি:

```text
w-80
bg-white
rounded-2xl
shadow-lg
p-6
border
border-gray-200
bg-blue-100
rounded-xl
text-center
mt-5
text-2xl
font-bold
text-gray-800
text-gray-600
text-blue-600
w-full
bg-blue-600
text-white
py-3
rounded-lg
```

এগুলোকে আলাদা আলাদা class হিসেবে না দেখে **একটি UI তৈরির building blocks** হিসেবে ভাবুন।

---

## 🧠 একটি গুরুত্বপূর্ণ বিষয়

Tailwind শেখার সময় এমন code দেখে ভয় পাবেন না:

```html
<div class="w-80 bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
```

এটি আসলে:

```text
w-80
↓
Width

bg-white
↓
Background

rounded-2xl
↓
Corner

shadow-lg
↓
Shadow

p-6
↓
Padding

border
↓
Border

border-gray-200
↓
Border Color
```

অর্থাৎ প্রতিটি class-এর একটি নির্দিষ্ট দায়িত্ব আছে।

---

## 💻 আজকের Practice

### Task 1 — তিনটি Button

এই ধরনের তিনটি button বানান:

```text
[ Primary ]

[ Success ]

[ Danger ]
```

আপনার নিজের মতো করে:

* Background
* Text color
* Padding
* Rounded
* Shadow

ব্যবহার করুন।

---

## Task 2 — User Card

একটি User Card বানান:

```text
┌─────────────────────────┐
│                         │
│       Profile           │
│                         │
│     Ariful Islam        │
│     Web Developer       │
│                         │
│  Building modern apps   │
│                         │
│       [Follow]          │
│                         │
└─────────────────────────┘
```

অন্তত এগুলো ব্যবহার করবেন:

```text
bg-*
text-*
border
rounded-*
shadow-*
```

---

## 🔥 Task 3 — নিজে Experiment করুন

একটি card তৈরি করে শুধু class পরিবর্তন করে দেখুন:

#### প্রথমে:

```html
<div class="bg-white rounded-lg shadow">
```

তারপর:

```html
<div class="bg-gray-100 rounded-2xl shadow-xl">
```

তারপর:

```html
<div class="bg-blue-50 rounded-3xl shadow-2xl">
```

Browser-এ পরিবর্তন লক্ষ্য করুন।

এভাবে practice করলে Tailwind-এর class **মুখস্থ করার প্রয়োজন হবে না**—চোখেই চিনতে শুরু করবেন।

---

## 📝 Day 2 Homework

আজকের homework হিসেবে একটি **Pricing Card** বানান।

এতে থাকবে:

```text
┌─────────────────────────┐
│       BASIC PLAN        │
│                         │
│         $19             │
│                         │
│  ✓ 5 Projects           │
│  ✓ 10 GB Storage        │
│  ✓ Email Support        │
│                         │
│    [Get Started]        │
└─────────────────────────┘
```

#### শর্ত

শুধু Tailwind utility ব্যবহার করে তৈরি করার চেষ্টা করবেন।

অবশ্যই ব্যবহার করবেন:

* Background
* Text color
* Border
* Rounded
* Shadow
* Padding
* Margin

---

## ✅ Day 2 শেষে আপনার যা জানা উচিত

আজ শেষে আপনি বুঝতে পারবেন:

```text
bg-blue-500
      ↓
Background

text-gray-700
      ↓
Text Color

border
      ↓
Border

rounded-xl
      ↓
Border Radius

shadow-lg
      ↓
Shadow

opacity-50
      ↓
Transparency
```

#### 🎯 আজকের মূল শিক্ষা

**Tailwind-এর class মুখস্থ করবেন না। Prefix চিনুন।**

```text
bg-      → Background
text-    → Text
border-  → Border
rounded- → Radius
shadow-  → Shadow
opacity- → Transparency
```


