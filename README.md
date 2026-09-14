# Learn Tailwind css
**_Day By Day_**

## 📘 Tailwind CSS — Day 18

#### Typography + Advanced Text Styling + Truncate + Line Clamp + Lists + Tables

আজকের lesson-এ আমরা Tailwind CSS-এর **Typography-এর advanced অংশ** শিখব। বিশেষ করে real-world **E-commerce, Blog এবং Admin Dashboard** বানানোর সময় এগুলো অনেক কাজে লাগে।

###### 🎯 আজকের Learning Goal

আজ তুমি শিখবে:

* Font Family
* Font Size
* Font Weight
* Line Height
* Letter Spacing
* Text Alignment
* Text Transform
* Text Decoration
* `truncate`
* `line-clamp`
* `whitespace`
* `break-words`
* List Styling
* Table Styling
* Responsive Table

---

## ⏰ আজকের ১ ঘণ্টার পরিকল্পনা

| সময়      | বিষয়                             |
| -------- | -------------------------------- |
| 10 মিনিট | Typography Revision              |
| 10 মিনিট | Font Family, Size, Weight        |
| 10 মিনিট | Line Height, Letter Spacing      |
| 10 মিনিট | Truncate, Line Clamp, Whitespace |
| 10 মিনিট | Lists + Tables                   |
| 10 মিনিট | Real-world Product/Admin UI      |

---

## 1️⃣ Font Family

Tailwind-এ সাধারণত তিন ধরনের font family ব্যবহার করা যায়।

###### Sans

```html
<h1 class="font-sans">
  E-Commerce Store
</h1>
```

###### Serif

```html
<h1 class="font-serif">
  Blog Article
</h1>
```

###### Mono

```html
<code class="font-mono">
  npm install
</code>
```

সহজভাবে:

```text
font-sans  → সাধারণ Web UI
font-serif → Article/Blog
font-mono  → Code/Technical content
```

---

## 2️⃣ Font Size

আগে আমরা basic font size দেখেছি। এবার একটু ভালোভাবে মনে রাখো:

```html
<p class="text-xs">Extra Small</p>
<p class="text-sm">Small</p>
<p class="text-base">Base</p>
<p class="text-lg">Large</p>
<p class="text-xl">Extra Large</p>
<p class="text-2xl">2XL</p>
<p class="text-3xl">3XL</p>
<p class="text-4xl">4XL</p>
<p class="text-5xl">5XL</p>
<p class="text-6xl">6XL</p>
```

###### Responsive Typography

Real-world project-এ:

```html
<h1 class="text-3xl font-bold md:text-5xl lg:text-6xl">
  Build Your Future
</h1>
```

এর অর্থ:

```text
Mobile  → text-3xl
Tablet  → text-5xl
Desktop → text-6xl
```

---

## 3️⃣ Font Weight

Text কতটা মোটা হবে সেটি `font-*` দিয়ে নিয়ন্ত্রণ করা যায়।

```html
<p class="font-thin">Thin</p>
<p class="font-light">Light</p>
<p class="font-normal">Normal</p>
<p class="font-medium">Medium</p>
<p class="font-semibold">Semi Bold</p>
<p class="font-bold">Bold</p>
<p class="font-extrabold">Extra Bold</p>
<p class="font-black">Black</p>
```

Real-world example:

```html
<h2 class="text-2xl font-bold">
  Wireless Headphone
</h2>

<p class="font-medium text-gray-600">
  Premium wireless headphone
</p>
```

---

## 4️⃣ Line Height — `leading-*`

এক লাইনের সাথে পরের লাইনের vertical distance নিয়ন্ত্রণ করতে `leading-*` ব্যবহার করা হয়।

```html
<p class="leading-none">
  Lorem ipsum dolor sit amet...
</p>
```

Common utilities:

```text
leading-none
leading-tight
leading-snug
leading-normal
leading-relaxed
leading-loose
```

###### Blog-এর জন্য

```html
<p class="leading-8 text-gray-600">
  This is a long blog article. Good line height makes
  the content easier to read.
</p>
```

👉 Blog/article-এর ক্ষেত্রে `leading-relaxed` বা নির্দিষ্ট `leading-*` অনেক সময় readability বাড়ায়।

---

## 5️⃣ Letter Spacing — `tracking-*`

অক্ষরগুলোর মধ্যে horizontal spacing নিয়ন্ত্রণ করে।

```html
<h1 class="tracking-tight">
  Welcome
</h1>
```

Common:

```text
tracking-tighter
tracking-tight
tracking-normal
tracking-wide
tracking-wider
tracking-widest
```

###### Heading Example

```html
<h1 class="text-4xl font-bold tracking-tight">
  Modern E-Commerce
</h1>
```

###### Uppercase Heading

```html
<h2 class="text-sm font-bold uppercase tracking-widest">
  Featured Products
</h2>
```

এটি ছোট section heading-এ সুন্দর দেখায়।

---

## 6️⃣ Text Alignment

```html
<p class="text-left">Left</p>

<p class="text-center">Center</p>

<p class="text-right">Right</p>

<p class="text-justify">Justify</p>
```

Responsive alignment:

```html
<h1 class="text-center md:text-left">
  Welcome to our store
</h1>
```

Mobile:

```text
Center
```

Desktop:

```text
Left
```

---

## 7️⃣ Text Transform

###### Uppercase

```html
<p class="uppercase">
  hello world
</p>
```

Output:

```text
HELLO WORLD
```

###### Lowercase

```html
<p class="lowercase">
  HELLO WORLD
</p>
```

###### Capitalize

```html
<p class="capitalize">
  hello world
</p>
```

Output:

```text
Hello World
```

###### Normal

```html
<p class="normal-case">
  Hello World
</p>
```

---

## 8️⃣ Text Decoration

###### Underline

```html
<a class="underline">
  Read More
</a>
```

###### No Underline

```html
<a class="no-underline">
  Home
</a>
```

###### Line Through

```html
<span class="line-through">
  $99
</span>
```

E-commerce-এ খুব দরকার:

```html
<div class="flex gap-2">
  <span class="text-xl font-bold">$59</span>

  <span class="text-gray-400 line-through">
    $79
  </span>
</div>
```

---

## 9️⃣ Underline-এর আরও Control

```html
<p class="underline decoration-2">
  Important Text
</p>
```

Underline-এর position:

```html
<p class="underline underline-offset-4">
  Learn More
</p>
```

Color:

```html
<p class="underline decoration-blue-500">
  Tailwind CSS
</p>
```

---

## 🔟 `truncate` — খুব গুরুত্বপূর্ণ

ধরো Product-এর নাম অনেক বড়:

```text
Apple MacBook Pro M4 16-inch Professional Laptop
```

Card-এর width সীমিত।

তখন text card-এর বাইরে চলে যেতে পারে।

এক্ষেত্রে:

```html
<h3 class="truncate font-bold">
  Apple MacBook Pro M4 16-inch Professional Laptop
</h3>
```

এটি সাধারণত এক লাইনের text-কে:

```text
Apple MacBook Pro M4 16-inch Professional...
```

এর মতো দেখাতে সাহায্য করে।

###### `truncate` কী করে?

সহজভাবে:

```text
overflow-hidden
+
text-overflow: ellipsis
+
white-space: nowrap
```

অর্থাৎ `truncate` মূলত **single-line text**-এর জন্য খুব useful।

---

## 1️⃣1️⃣ `truncate` কোথায় ব্যবহার করবে?

###### Product Title

```jsx
<h3 className="truncate text-lg font-bold">
  Apple MacBook Pro M4 16-inch Professional Laptop
</h3>
```

###### User Name

```jsx
<p className="truncate">
  Muhammad Abdul Rahman Al-Hossaini
</p>
```

###### File Name

```jsx
<p className="truncate font-mono text-sm">
  very-long-project-backup-file-name-2026.zip
</p>
```

---

## 1️⃣2️⃣ `line-clamp`

`truncate` এক লাইনের জন্য ভালো।

কিন্তু তোমার যদি **২ বা ৩ লাইনের text সীমিত করতে হয়**, তখন `line-clamp` ব্যবহার করবে।

```html
<p class="line-clamp-2">
  This is a very long product description that contains
  lots of information about the product and its features.
</p>
```

এটি সর্বোচ্চ প্রায় ২ লাইনের মধ্যে text সীমিত করবে এবং অতিরিক্ত অংশ hide করবে।

###### 3 Lines

```html
<p class="line-clamp-3">
  Long product description goes here...
</p>
```

###### Product Card

```jsx
<div className="p-5">
  <h3 className="truncate text-xl font-bold">
    Wireless Noise Cancelling Headphone
  </h3>

  <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
    Premium wireless headphone with active noise
    cancellation, long battery life and comfortable design.
  </p>
</div>
```

---

## ⭐ `truncate` বনাম `line-clamp`

এটি অবশ্যই মনে রাখবে।

| Utility        | ব্যবহার         |
| -------------- | --------------- |
| `truncate`     | Single line     |
| `line-clamp-2` | Maximum 2 lines |
| `line-clamp-3` | Maximum 3 lines |

###### সহজ Formula

```text
1 line → truncate

2+ lines → line-clamp
```

---

## 1️⃣3️⃣ Whitespace

Text কীভাবে line break করবে সেটি নিয়ন্ত্রণ করতে `whitespace-*` ব্যবহার করা যায়।

###### Normal

```html
<p class="whitespace-normal">
  Normal text wrapping
</p>
```

###### No Wrap

```html
<p class="whitespace-nowrap">
  This text will stay on one line
</p>
```

এটি Navigation item, badge ইত্যাদিতে useful।

```html
<span class="whitespace-nowrap">
  In Stock
</span>
```

---

## 1️⃣4️⃣ Long Word Break

কখনো URL বা খুব বড় কোনো word container-এর বাইরে চলে যেতে পারে।

```html
<p class="break-words">
  https://example.com/very-long-url-here...
</p>
```

এতে প্রয়োজন হলে long word ভাঙতে সাহায্য করে।

---

## 1️⃣5️⃣ List Styling

HTML list:

```html
<ul class="list-disc">
  <li>React.js</li>
  <li>Node.js</li>
  <li>MongoDB</li>
</ul>
```

Output:

```text
• React.js
• Node.js
• MongoDB
```

###### Number List

```html
<ol class="list-decimal">
  <li>Requirement Analysis</li>
  <li>Database Design</li>
  <li>Backend Development</li>
</ol>
```

---

## 1️⃣6️⃣ List Position

```html
<ul class="list-disc list-inside">
  <li>React</li>
  <li>Node</li>
  <li>MongoDB</li>
</ul>
```

অথবা:

```html
<ul class="list-disc list-outside">
  <li>React</li>
  <li>Node</li>
  <li>MongoDB</li>
</ul>
```

---

## 1️⃣7️⃣ Real-world Feature List

```jsx
<ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
  <li>Free shipping</li>
  <li>30-day return policy</li>
  <li>Secure payment</li>
  <li>24/7 customer support</li>
</ul>
```

এখানে একসাথে ব্যবহার হয়েছে:

```text
list-disc
space-y-2
pl-5
text-gray-600
```

---

## 1️⃣8️⃣ Tailwind দিয়ে Table

Admin Dashboard, Order Management, User Management ইত্যাদিতে Table অত্যন্ত গুরুত্বপূর্ণ।

Basic table:

```jsx
<table className="w-full">
  <thead>
    <tr>
      <th className="px-4 py-3 text-left">Product</th>
      <th className="px-4 py-3 text-left">Price</th>
      <th className="px-4 py-3 text-left">Status</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td className="px-4 py-3">Laptop</td>
      <td className="px-4 py-3">$999</td>
      <td className="px-4 py-3">In Stock</td>
    </tr>
  </tbody>
</table>
```

---

## 1️⃣9️⃣ Professional Table

```jsx
<div className="overflow-x-auto rounded-xl border">
  <table className="min-w-[700px] w-full">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-4 py-3 text-left text-sm font-semibold">
          Product
        </th>

        <th className="px-4 py-3 text-left text-sm font-semibold">
          Price
        </th>

        <th className="px-4 py-3 text-left text-sm font-semibold">
          Status
        </th>

        <th className="px-4 py-3 text-left text-sm font-semibold">
          Action
        </th>
      </tr>
    </thead>

    <tbody className="divide-y">
      <tr className="hover:bg-gray-50">
        <td className="px-4 py-4 font-medium">
          Wireless Headphone
        </td>

        <td className="px-4 py-4">
          $59
        </td>

        <td className="px-4 py-4">
          In Stock
        </td>

        <td className="px-4 py-4">
          <button className="rounded-lg bg-blue-600 px-3 py-2 text-sm text-white">
            Edit
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

---

## 2️⃣0️⃣ Responsive Table

এটি খুব গুরুত্বপূর্ণ।

Desktop-এ table ঠিক আছে। কিন্তু Mobile screen ছোট।

তাই table-কে horizontal scroll করানো ভালো:

```jsx
<div className="overflow-x-auto">
  <table className="min-w-[700px] w-full">
    ...
  </table>
</div>
```

Concept:

```text
Mobile Screen
     ↓
┌──────────────────┐
│  Table → → → →   │
│             scroll│
└──────────────────┘
```

অর্থাৎ পুরো page-এর width নষ্ট না করে শুধু table-এর ভিতরে horizontal scroll হবে।

---

## 2️⃣1️⃣ `table-auto` বনাম `table-fixed`

###### Auto

```html
<table class="table-auto w-full">
```

Browser content অনুযায়ী column width নির্ধারণ করতে পারে।

###### Fixed

```html
<table class="table-fixed w-full">
```

Column width আরও predictable করা যায়।

Dashboard-এর নির্দিষ্ট layout-এ `table-fixed` কাজে লাগতে পারে।

---

## 2️⃣2️⃣ Table Border

```html
<table class="border-collapse">
```

এছাড়া:

```html
<table class="border-separate">
```

Cell-এর border separation দরকার হলে:

```html
border-separate
```

ব্যবহার করতে পারো।

---

## 2️⃣3️⃣ `divide-y` দিয়ে Table Row

প্রতিটি row-এর মধ্যে separator দিতে:

```html
<tbody class="divide-y">
```

আরও নির্দিষ্ট color:

```html
<tbody class="divide-y divide-gray-200">
```

এটি খুব clean dashboard UI তৈরি করে।

---

## 2️⃣4️⃣ Admin Order Table

তোমার **AI-Powered E-Commerce Management System**-এর কথা ধরো।

```jsx
<div className="overflow-x-auto rounded-xl border bg-white">
  <table className="min-w-[800px] w-full">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-4 py-3 text-left text-sm font-semibold">
          Order ID
        </th>

        <th className="px-4 py-3 text-left text-sm font-semibold">
          Customer
        </th>

        <th className="px-4 py-3 text-left text-sm font-semibold">
          Total
        </th>

        <th className="px-4 py-3 text-left text-sm font-semibold">
          Status
        </th>

        <th className="px-4 py-3 text-left text-sm font-semibold">
          Action
        </th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
      <tr className="hover:bg-gray-50">

        <td className="px-4 py-4 font-medium">
          ##ORD-1001
        </td>

        <td className="max-w-[200px] truncate px-4 py-4">
          Abdul Rahman
        </td>

        <td className="px-4 py-4 font-semibold">
          $249
        </td>

        <td className="px-4 py-4">
          <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
            Paid
          </span>
        </td>

        <td className="px-4 py-4">
          <button className="rounded-lg bg-blue-600 px-3 py-2 text-sm text-white">
            View
          </button>
        </td>

      </tr>
    </tbody>
  </table>
</div>
```

এখানে আমরা Day 1–18-এর অনেক concept একসাথে ব্যবহার করেছি:

```text
overflow-x-auto
rounded-xl
border
bg-white
min-w
w-full
bg-gray
px / py
text
font
divide-y
hover
rounded-full
```

এটাই Tailwind শেখার আসল উদ্দেশ্য—**একটি real UI-তে utilities combine করা।**

---

## 2️⃣5️⃣ Product Card-এ Typography

এখন একটি professional Product Card:

```jsx
function ProductCard() {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">

      <div className="aspect-square overflow-hidden">
        <img
          src="/product.jpg"
          alt="Wireless Headphone"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-5">

        <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
          Electronics
        </span>

        <h3 className="mt-2 truncate text-xl font-bold">
          Wireless Noise Cancelling Headphone
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
          Premium wireless headphone with active noise
          cancellation, excellent battery life and
          comfortable design.
        </p>

        <div className="mt-4 flex items-center gap-3">
          <span className="text-xl font-bold">
            $59
          </span>

          <span className="text-gray-400 line-through">
            $79
          </span>
        </div>

      </div>
    </div>
  );
}
```

###### এখানে গুরুত্বপূর্ণ অংশ:

```text
uppercase
tracking-widest
truncate
line-clamp-2
leading-6
line-through
font-bold
```

---

## 🧠 2️⃣6️⃣ Typography-এর Mental Model

Typography মনে রাখার জন্য:

```text
Typography
│
├── Font
│   ├── font-sans
│   ├── font-serif
│   └── font-mono
│
├── Size
│   ├── text-sm
│   ├── text-lg
│   └── text-4xl
│
├── Weight
│   ├── font-normal
│   ├── font-semibold
│   └── font-bold
│
├── Spacing
│   ├── leading-*
│   └── tracking-*
│
├── Alignment
│   ├── text-left
│   ├── text-center
│   └── text-right
│
└── Text Control
    ├── truncate
    ├── line-clamp
    ├── whitespace
    └── break-words
```

---

## 🧪 2️⃣7️⃣ আজকের Practice

#### Practice 1 — Product Card

একটি Product Card তৈরি করো যেখানে থাকবে:

* Product image
* Category
* Product title
* Long description
* Current price
* Old price
* Buy button

এবং অবশ্যই ব্যবহার করবে:

```text
truncate
line-clamp-2
font-bold
leading-6
tracking
line-through
```

---

#### Practice 2 — Blog Card

একটি Blog Card বানাও:

```text
Image
↓
Category
↓
Long Blog Title
↓
Long Description
↓
Author
↓
Read More
```

Blog title:

```html
<h2 class="line-clamp-2 text-2xl font-bold">
  Your Long Blog Title Here
</h2>
```

Description:

```html
<p class="line-clamp-3 leading-7 text-gray-600">
  Your long blog description...
</p>
```

---

## 🏆 2️⃣8️⃣ আজকের Challenge

###### AI-Powered E-Commerce Admin Dashboard

একটি **Order Management Table** তৈরি করো।

Columns:

```text
Order ID
Customer
Product
Total
Payment
Status
Action
```

Requirements:

```text
✅ Responsive
✅ overflow-x-auto
✅ min-w
✅ divide-y
✅ hover state
✅ Badge
✅ truncate
✅ Proper typography
✅ Clean spacing
```

বিশেষ করে Customer/Product-এর অনেক বড় text দিয়ে test করবে।

---

## 📝 2️⃣9️⃣ Self Test

নিজেকে এই প্রশ্নগুলোর উত্তর দিতে পারো কি না দেখো:

1. `font-sans` কী?
2. `font-bold` কী করে?
3. `leading-7` কী নিয়ন্ত্রণ করে?
4. `tracking-wide` কী করে?
5. `text-center` কী করে?
6. `uppercase` কী করে?
7. `line-through` কোথায় ব্যবহার করা যায়?
8. `truncate` কী?
9. `truncate` এবং `line-clamp-2`-এর পার্থক্য কী?
10. `whitespace-nowrap` কেন ব্যবহার করা হয়?
11. `break-words` কী কাজে লাগে?
12. `list-disc` কী?
13. `divide-y` কী?
14. `overflow-x-auto` কেন responsive table-এ ব্যবহার করা হয়?
15. `min-w-[700px]` table-এর ক্ষেত্রে কেন useful?

---

## 📋 3️⃣0️⃣ Day 18 Cheat Sheet

```text
FONT
font-sans
font-serif
font-mono

SIZE
text-xs
text-sm
text-base
text-lg
text-xl
text-2xl
text-3xl
text-4xl

WEIGHT
font-normal
font-medium
font-semibold
font-bold
font-extrabold

LINE HEIGHT
leading-none
leading-tight
leading-normal
leading-relaxed
leading-loose

LETTER SPACING
tracking-tight
tracking-normal
tracking-wide
tracking-widest

ALIGNMENT
text-left
text-center
text-right
text-justify

TRANSFORM
uppercase
lowercase
capitalize
normal-case

DECORATION
underline
no-underline
line-through
decoration-2
underline-offset-4

TEXT CONTROL
truncate
line-clamp-2
line-clamp-3
whitespace-nowrap
break-words

LIST
list-disc
list-decimal
list-inside
list-outside

TABLE
table-auto
table-fixed
border-collapse
border-separate
divide-y
overflow-x-auto
```

---

## 🎯 Day 18-এর সবচেয়ে গুরুত্বপূর্ণ বিষয়

তোমার জন্য সবচেয়ে গুরুত্বপূর্ণ ৫টি হলো:

```text
1. truncate
2. line-clamp
3. leading
4. tracking
5. Responsive Table
```

বিশেষ করে **React + E-commerce + Admin Dashboard** development-এ এগুলো নিয়মিত ব্যবহার করবে।

###### আজকের মূল Formula:

```text
Typography
     ↓
Readable Text
     ↓
Text Control
     ↓
Responsive Content
     ↓
Professional UI
```

আর মনে রাখবে:

> **Tailwind মুখস্থ করার বিষয় নয়; কোন UI problem-এর জন্য কোন utility ব্যবহার করতে হবে—এটাই আসল skill।**

