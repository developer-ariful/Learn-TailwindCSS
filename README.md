# Learn TailwinCSS
*Day By Day*

## 🎯 Tailwind CSS — Day 9

#### Positioning + Display + Overflow

আজ আমরা Tailwind CSS-এর এমন কিছু বিষয় শিখব যেগুলো **Navbar, Dropdown, Modal, Badge, Notification, Sticky Header, Image Overlay, Sidebar** ইত্যাদি বানাতে প্রতিদিন ব্যবহার করবে।

আজকের ৩টি মূল বিষয়:

```text
1. Position
2. Display
3. Overflow
```

---

## 🧠 আজকের Learning Goal


* `relative`
* `absolute`
* `fixed`
* `sticky`
* `static`
* `top-*`, `right-*`, `bottom-*`, `left-*`
* `inset-*`
* `z-*`
* `hidden`
* `block`
* `inline-block`
* `flex`
* `grid`
* `overflow-hidden`
* `overflow-auto`
* `overflow-y-auto`
* `overflow-x-auto`




## 1️⃣ Position কী?

CSS-এর `position` ব্যবহার করে আমরা কোনো element-কে নির্দিষ্ট জায়গায় রাখতে পারি।

Tailwind-এ:

```text
static
relative
absolute
fixed
sticky
```

---

## 2️⃣ `relative`

```html
<div class="relative">
```

`relative` সাধারণত নিজে থেকে খুব বেশি পরিবর্তন করে না।

কিন্তু এটি সবচেয়ে বেশি গুরুত্বপূর্ণ হয় যখন এর ভিতরের কোনো element-এ `absolute` ব্যবহার করি।

উদাহরণ:

```html
<div class="relative">
  <div class="absolute top-0 right-0">
    Badge
  </div>
</div>
```

এখানে parent:

```text
relative
```

এবং child:

```text
absolute
```

---

## 3️⃣ `absolute`

```html
<div class="absolute">
```

`absolute` element-কে নির্দিষ্ট position-এ বসাতে সাহায্য করে।

সাধারণত `absolute` element-এর parent-এ:

```html
relative
```

দেওয়া হয়।

---

## 🔥 4️⃣ Relative + Absolute

এটি খুব ভালোভাবে বুঝতে হবে।

```html
<div class="relative h-40 w-40 bg-gray-200">

  <div class="absolute right-2 top-2 rounded bg-red-500 px-2 py-1 text-white">
    Sale
  </div>

</div>
```

Visual:

```text
┌────────────────────┐
│              Sale  │
│                    │
│                    │
│                    │
└────────────────────┘
```

এখানে:

```text
Parent
↓
relative

Child
↓
absolute
```

আর:

```text
top-2
→ উপর থেকে 2

right-2
→ ডান থেকে 2
```

---

## 5️⃣ `top`, `right`, `bottom`, `left`

Absolute element-এর position পরিবর্তন করতে:

```html
top-0
top-2
top-4
```

```html
right-0
right-2
right-4
```

```html
bottom-0
bottom-2
bottom-4
```

```html
left-0
left-2
left-4
```

উদাহরণ:

```html
<div class="absolute bottom-4 left-4">
  Hello
</div>
```

মানে:

```text
Bottom → 4
Left   → 4
```

---

## 6️⃣ `inset-*`

চারদিক থেকে position একসাথে দিতে পারো।

```html
inset-0
```

এর অর্থ:

```text
top: 0
right: 0
bottom: 0
left: 0
```

উদাহরণ:

```html
<div class="relative h-64">

  <div class="absolute inset-0 bg-black/50">
  </div>

</div>
```

এটি parent-এর পুরো জায়গা cover করবে।

---

## 🔥 7️⃣ Image Overlay

এখন একটি real-world example দেখি।

```html
<div class="relative h-64 overflow-hidden rounded-xl">

  <div class="h-full bg-gray-400">
    Image
  </div>

  <div class="absolute inset-0 flex items-center justify-center bg-black/40">

    <h2 class="text-3xl font-bold text-white">
      Beautiful Nature
    </h2>

  </div>

</div>
```

এখানে:

```text
Parent
relative

Overlay
absolute inset-0
```

Visual:

```text
┌──────────────────────────────┐
│                              │
│      Beautiful Nature        │
│                              │
└──────────────────────────────┘
```

এ ধরনের UI **hero section, banner, product image, portfolio**-তে প্রচুর ব্যবহার হয়।

---

## 8️⃣ Product Badge

E-commerce website-এ:

```html
<div class="relative">

  <div class="h-64 bg-gray-200">
    Product Image
  </div>

  <span class="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-sm text-white">
    -20%
  </span>

</div>
```

Visual:

```text
┌─────────────────────────┐
│ -20%                    │
│                         │
│      Product Image      │
│                         │
└─────────────────────────┘
```

🔥 এটি খুব common pattern।

---

## 9️⃣ `z-*`

কখনো দুটি element একে অপরের উপর চলে আসে।

তখন কোনটি সামনে থাকবে সেটি নিয়ন্ত্রণ করতে:

```html
z-10
z-20
z-30
z-40
z-50
```

ব্যবহার করা যায়।

উদাহরণ:

```html
<div class="relative">

  <div class="absolute z-10">
    Background
  </div>

  <div class="absolute z-20">
    Content
  </div>

</div>
```

এখানে:

```text
z-20
```

element সামনে থাকবে।

---

## 🔟 `fixed`

`fixed` element browser viewport-এর সাথে fixed থাকে।

উদাহরণ:

```html
<button class="fixed bottom-6 right-6 rounded-full bg-blue-600 px-5 py-3 text-white">
  Help
</button>
```

এটি screen-এর নিচের ডানদিকে থাকবে।

Visual:

```text
┌──────────────────────────────┐
│                              │
│          Website             │
│                              │
│                              │
│                        Help  │
└──────────────────────────────┘
```

Page scroll করলেও এটি একই জায়গায় থাকবে।

---

## 1️⃣1️⃣ Fixed Button — Real Example

ধরো তুমি একটি website-এ floating button দিতে চাও:

```html
<button
  class="fixed bottom-5 right-5 rounded-full bg-green-600 px-5 py-3 text-white shadow-lg"
>
  Chat
</button>
```

এটি:

```text
bottom-5
right-5
```

এর কারণে নিচের ডানদিকে থাকবে।

---

## 1️⃣2️⃣ `sticky`

`sticky` একটু আলাদা।

```html
<div class="sticky top-0">
```

এটি scrolling-এর সময় নির্দিষ্ট position-এ আটকে থাকতে পারে।

উদাহরণ:

```html
<header class="sticky top-0 z-50 bg-white shadow">
  Navbar
</header>
```

এটি **sticky navbar/header** তৈরিতে খুব useful।

---

## 🔥 Sticky Navbar

```html
<header class="sticky top-0 z-50 border-b bg-white">

  <nav class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">

    <h1 class="text-xl font-bold">
      My Website
    </h1>

    <div class="hidden gap-6 md:flex">
      <a href="##">Home</a>
      <a href="##">About</a>
      <a href="##">Services</a>
      <a href="##">Contact</a>
    </div>

  </nav>

</header>
```

এখানে:

```text
sticky
↓
Navbar scrolling-এর সময় আটকে থাকবে

top-0
↓
একদম উপরে থাকবে

z-50
↓
অন্য element-এর উপরে থাকবে
```

---

## 🧠 `absolute` vs `fixed` vs `sticky`

| Position   | কোথায় ব্যবহার করবে                          |
| ---------- | ------------------------------------------- |
| `relative` | Absolute child-এর reference                 |
| `absolute` | Parent-এর ভিতরে নির্দিষ্ট জায়গায়            |
| `fixed`    | Screen-এর নির্দিষ্ট জায়গায়                  |
| `sticky`   | Scroll করার সময় নির্দিষ্ট জায়গায় আটকে রাখতে |

সহজভাবে:

```text
relative
→ Parent reference

absolute
→ Parent-এর ভিতরে position

fixed
→ Screen-এর সাথে fixed

sticky
→ Scroll করলে আটকে যায়
```

---

## 1️⃣3️⃣ Display

Tailwind-এ element-এর display পরিবর্তন করতে পারো।

সবচেয়ে গুরুত্বপূর্ণ:

```text
block
inline
inline-block
flex
inline-flex
grid
hidden
```

---

## 1️⃣4️⃣ `hidden`

Element hide করতে:

```html
<div class="hidden">
  Hello
</div>
```

Responsive design-এ খুব গুরুত্বপূর্ণ।

যেমন:

```html
<div class="hidden md:block">
  Desktop Content
</div>
```

মানে:

```text
Mobile
→ hidden

md এবং তার উপরে
→ block
```

---

## 1️⃣5️⃣ `block`

```html
<div class="block">
```

Element block হিসেবে থাকবে।

---

## 1️⃣6️⃣ `inline-block`

```html
<span class="inline-block">
  Badge
</span>
```

এটি ছোট label, badge, button-like element ইত্যাদিতে কাজে লাগে।

---

## 1️⃣7️⃣ `flex`

Day 6-এ শিখেছ:

```html
<div class="flex">
```

এটি:

```css
display: flex;
```

এর equivalent।

---

## 1️⃣8️⃣ `grid`

Day 7-এ শিখেছ:

```html
<div class="grid">
```

এটি:

```css
display: grid;
```

এর equivalent।

---

## 🔥 1️⃣9️⃣ Overflow

এখন খুব গুরুত্বপূর্ণ একটি বিষয়:

```text
overflow-hidden
overflow-auto
overflow-scroll
overflow-visible
```

---

## 2️⃣0️⃣ `overflow-hidden`

কোনো content container-এর বাইরে চলে গেলে সেটি hide করতে:

```html
<div class="overflow-hidden">
```

সবচেয়ে common use:

```html
<div class="overflow-hidden rounded-xl">
```

Image-এর rounded corner ঠিক রাখতে এটি অনেক ব্যবহার হয়।

---

## 🔥 Image Card Example

```html
<div class="overflow-hidden rounded-xl border">

  <div class="h-48 bg-gray-300">
    Image
  </div>

  <div class="p-4">
    <h2 class="font-bold">
      Product
    </h2>
  </div>

</div>
```

---

## 2️⃣1️⃣ `overflow-auto`

Content বেশি হয়ে গেলে প্রয়োজন অনুযায়ী scrollbar দেখাবে।

```html
<div class="h-64 overflow-auto">
  Long Content...
</div>
```

এটি dashboard, sidebar, chat area ইত্যাদিতে useful।

---

## 2️⃣2️⃣ `overflow-y-auto`

শুধু vertical direction:

```html
<div class="h-96 overflow-y-auto">
  Long Content
</div>
```

---

## 2️⃣3️⃣ `overflow-x-auto`

Horizontal scrolling:

```html
<div class="overflow-x-auto">
  Wide Content
</div>
```

Responsive table-এর ক্ষেত্রে খুব useful।

উদাহরণ:

```html
<div class="overflow-x-auto">

  <table class="min-w-[700px]">
    ...
  </table>

</div>
```

Mobile screen-এ table horizontal scroll করা যাবে।

---

## 🚀 2️⃣4️⃣ Real Project — Product Card

এখন আজকের সব concept একসাথে ব্যবহার করি।

```html
<div class="relative overflow-hidden rounded-xl border bg-white shadow">

  <!-- Product Image -->
  <div class="relative h-64 bg-gray-200">

    <!-- Badge -->
    <span
      class="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-sm text-white"
    >
      Sale
    </span>

    <!-- Favorite -->
    <button
      class="absolute right-3 top-3 rounded-full bg-white p-2 shadow"
    >
      ♥
    </button>

  </div>


  <!-- Content -->
  <div class="p-5">

    <h2 class="text-xl font-bold">
      Wireless Headphone
    </h2>

    <p class="mt-2 text-gray-500">
      Premium wireless headphone.
    </p>

    <div class="mt-4 flex items-center justify-between">

      <span class="text-xl font-bold">
        $59
      </span>

      <button class="rounded-lg bg-blue-600 px-4 py-2 text-white">
        Buy
      </button>

    </div>

  </div>

</div>
```

এখানে আমরা ব্যবহার করেছি:

```text
relative
absolute
top-3
left-3
right-3
overflow-hidden
flex
justify-between
```

🔥 এই ধরনের combination বাস্তব project-এ অনেক দেখতে পাবে।

---

## ⚛️ 2️⃣5️⃣ React Example

React JSX:

```jsx
<div className="relative overflow-hidden rounded-xl border shadow">

  <div className="relative h-64 bg-gray-200">

    <span className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-white">
      Sale
    </span>

    <button className="absolute right-3 top-3 rounded-full bg-white p-2 shadow">
      ♥
    </button>

  </div>

  <div className="p-5">

    <h2 className="text-xl font-bold">
      Wireless Headphone
    </h2>

    <p className="mt-2 text-gray-500">
      Premium wireless headphone.
    </p>

    <div className="mt-4 flex items-center justify-between">

      <span className="font-bold">
        $59
      </span>

      <button className="rounded-lg bg-blue-600 px-4 py-2 text-white">
        Buy
      </button>

    </div>

  </div>

</div>
```

---

## 📌 Day 9 Cheat Sheet

###### Position

```html
relative
absolute
fixed
sticky
static
```

###### Position Direction

```html
top-0
right-0
bottom-0
left-0
inset-0
```

###### Layer

```html
z-10
z-20
z-30
z-40
z-50
```

###### Display

```html
block
inline
inline-block
flex
grid
hidden
```

###### Overflow

```html
overflow-hidden
overflow-auto
overflow-scroll
overflow-visible

overflow-x-auto
overflow-y-auto
```

---

## 📝 আজকের Homework

#### Task 1 — Product Card

একটি Product Card বানাও যেখানে:

```text
┌────────────────────────┐
│ Sale              ♥    │
│                        │
│       Product          │
│        Image           │
│                        │
├────────────────────────┤
│ Product Name           │
│ Description            │
│ $59             Buy    │
└────────────────────────┘
```

অবশ্যই ব্যবহার করবে:

```text
relative
absolute
top-*
left-*
right-*
overflow-hidden
flex
```

---

#### Task 2 — Sticky Navbar

তৈরি করো:

```html
<header class="sticky top-0 z-50">
```

Navbar-এ থাকবে:

```text
Logo
Home
About
Services
Contact
```

Mobile-এ:

```text
Logo              ☰
```

Desktop-এ:

```text
Logo    Home About Services Contact
```

---

#### Task 3 — Floating Button

Screen-এর নিচে ডানদিকে একটি button রাখো:

```html
<button class="fixed bottom-5 right-5">
  Help
</button>
```

---

#### Task 4 — Scrollable Sidebar

একটি sidebar বানাও:

```html
<aside class="h-screen overflow-y-auto">
```

এর ভিতরে অনেকগুলো menu item রাখো।

---

## 🎯 আজকের Challenge

একটি **E-commerce Product Grid** বানাও যেখানে প্রতিটি card-এ থাকবে:

```text
Product Image
       ↓
Sale Badge
       ↓
Favorite Button
       ↓
Product Name
       ↓
Price + Buy Button
```

Product grid:

```html
<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
```

প্রতিটি card-এ:

```html
relative
overflow-hidden
absolute
```

ব্যবহার করবে।

---

## 🧠 Day 9-এর মূল শিক্ষা

আজকের সবচেয়ে গুরুত্বপূর্ণ concept:

```text
relative
   ↓
absolute child-এর reference
```

```text
absolute
   ↓
Parent-এর ভিতরে নির্দিষ্ট position
```

```text
fixed
   ↓
Screen-এর সাথে fixed
```

```text
sticky
   ↓
Scroll করার সময় আটকে থাকে
```

```text
overflow-hidden
   ↓
বাইরে চলে যাওয়া content hide
```

```text
overflow-y-auto
   ↓
Vertical scrolling
```

আর একটি গুরুত্বপূর্ণ real-world pattern মনে রাখবে:

```html
<div class="relative overflow-hidden">
    
    <img />

    <span class="absolute left-3 top-3">
        Sale
    </span>

</div>
```

এটি **Product Card, Image Badge, Hero Banner, Notification, Avatar Badge**—সব জায়গায় কাজে লাগবে।

