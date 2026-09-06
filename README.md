# Learn TailwinCSS
*Day By Day*

## 🎯 Tailwind CSS — Day 11

#### Backgrounds, Gradients & Background Images

আজ আমরা Tailwind CSS-এর **Background System** শিখব। বিশেষ করে modern website, landing page, hero section, card এবং dashboard UI বানানোর জন্য এগুলো খুব গুরুত্বপূর্ণ।


## 1️⃣ Background Color

Tailwind-এ background color দেওয়ার জন্য ব্যবহার করি:

```html
bg-{color}-{shade}
```

উদাহরণ:

```html
<div class="bg-blue-500">
  Hello World
</div>
```

আরও কিছু:

```html
<div class="bg-red-500">Red</div>
<div class="bg-green-500">Green</div>
<div class="bg-yellow-400">Yellow</div>
<div class="bg-gray-100">Light Gray</div>
<div class="bg-gray-900">Dark Gray</div>
<div class="bg-black">Black</div>
<div class="bg-white">White</div>
```

###### Shade

```text
50 → খুব হালকা
100
200
300
400
500 → মাঝামাঝি
600
700
800
900
950 → খুব গাঢ়
```

উদাহরণ:

```html
<div class="bg-blue-100">Light</div>
<div class="bg-blue-500">Medium</div>
<div class="bg-blue-900">Dark</div>
```

---

## 2️⃣ Background Opacity

Background-এর সাথে transparency দিতে পারো।

```html
<div class="bg-black/50">
  Content
</div>
```

এখানে:

```text
black/20 → 20% opacity
black/40 → 40%
black/50 → 50%
black/70 → 70%
black/80 → 80%
```

###### Overlay তৈরিতে খুব গুরুত্বপূর্ণ

```html
<div class="bg-black/50">
  <h1 class="text-white">
    Welcome
  </h1>
</div>
```

Hero image-এর উপর dark overlay দিতে এটি অনেক ব্যবহার করা হয়।

---

## 3️⃣ Gradient কী?

Gradient হলো এক color থেকে অন্য color-এ smooth transition।

যেমন:

```text
Blue ───────────────→ Purple
```

Tailwind-এ:

```html
bg-gradient-to-r
```

তারপর শুরু এবং শেষের color:

```html
from-blue-500
to-purple-600
```

সম্পূর্ণ:

```html
<div class="bg-gradient-to-r from-blue-500 to-purple-600">
  Gradient
</div>
```

---

## 4️⃣ Gradient Direction

Tailwind-এ gradient-এর direction পরিবর্তন করতে পারো।

###### Left → Right

```html
bg-gradient-to-r
```

###### Right → Left

```html
bg-gradient-to-l
```

###### Top → Bottom

```html
bg-gradient-to-b
```

###### Bottom → Top

```html
bg-gradient-to-t
```

###### Top-left → Bottom-right

```html
bg-gradient-to-br
```

###### Top-right → Bottom-left

```html
bg-gradient-to-bl
```

###### Example

```html
<div class="bg-gradient-to-br from-blue-500 to-purple-700 p-10 text-white">
  <h1 class="text-4xl font-bold">
    Welcome
  </h1>
</div>
```

---

## 5️⃣ Three Color Gradient

শুধু `from` এবং `to` নয়, মাঝখানে `via` ব্যবহার করা যায়।

```html
<div class="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-10">
  Gradient
</div>
```

এখানে:

```text
Blue → Purple → Pink
```

Pattern:

```html
from-{color}
via-{color}
to-{color}
```

---

## 6️⃣ Real-world Hero Section

একটি modern landing page-এর hero section:

```html
<section class="bg-gradient-to-r from-blue-600 to-purple-700 px-6 py-24 text-white">
  <div class="mx-auto max-w-6xl text-center">

    <h1 class="text-4xl font-bold md:text-6xl">
      Build Your Future
    </h1>

    <p class="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
      Learn modern web development and build amazing applications.
    </p>

    <button class="mt-8 rounded-lg bg-white px-6 py-3 font-semibold text-blue-600">
      Get Started
    </button>

  </div>
</section>
```

এখানে আমরা আগের দিনের অনেক concept একসাথে ব্যবহার করেছি:

```text
max-w
mx-auto
text
font
responsive
padding
rounded
background
gradient
```

---

## 7️⃣ Background Image

Tailwind-এ arbitrary value ব্যবহার করে background image দিতে পারো।

```html
<div class="bg-[url('/images/hero.jpg')]">
  Content
</div>
```

React project-এ image location অনুযায়ী path পরিবর্তন করতে হবে।

---

## 8️⃣ Background Size

Background image কতটুকু জায়গা নেবে সেটা নিয়ন্ত্রণ করা যায়।

###### Cover

```html
bg-cover
```

সবচেয়ে বেশি ব্যবহৃত।

```html
<div class="bg-cover bg-[url('/images/hero.jpg')]">
```

Image পুরো container cover করবে।

---

###### Contain

```html
bg-contain
```

Image পুরোটা দেখা যাবে।

```html
<div class="bg-contain bg-[url('/images/product.png')]">
```

---

###### Auto

```html
bg-auto
```

---

## 9️⃣ Background Position

Image কোথায় অবস্থান করবে:

```html
bg-center
```

সবচেয়ে বেশি ব্যবহৃত।

আরও:

```html
bg-top
bg-bottom
bg-left
bg-right
bg-left-top
bg-right-top
bg-left-bottom
bg-right-bottom
```

সাধারণ Hero:

```html
<div class="bg-center bg-cover">
```

---

## 🔟 Hero Background Image + Overlay

এটি খুব গুরুত্বপূর্ণ একটি বাস্তব pattern।

```html
<section
  class="relative bg-cover bg-center bg-[url('/images/hero.jpg')]"
>
  <div class="absolute inset-0 bg-black/60"></div>

  <div class="relative z-10 px-6 py-32 text-center text-white">

    <h1 class="text-4xl font-bold md:text-6xl">
      Welcome to Our Website
    </h1>

    <p class="mx-auto mt-6 max-w-2xl text-lg">
      Create powerful and modern web applications.
    </p>

    <button class="mt-8 rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700">
      Explore Now
    </button>

  </div>
</section>
```

###### এখানে কী হচ্ছে?

```text
Hero Section
    │
    ├── Background Image
    │
    ├── Black Overlay
    │
    └── Content
          │
          ├── Heading
          ├── Paragraph
          └── Button
```

এখানে Day 9-এর:

```html
relative
absolute
inset-0
z-10
```

আবার ব্যবহার হয়েছে।

---

## 1️⃣1️⃣ Background Repeat

Background image repeat করা নিয়ন্ত্রণ করতে পারো।

```html
bg-repeat
```

```html
bg-no-repeat
```

```html
bg-repeat-x
```

```html
bg-repeat-y
```

সাধারণ website hero-তে:

```html
bg-no-repeat
```

ব্যবহার করা হয়।

---

## 1️⃣2️⃣ Gradient + Image Overlay

আরও professional Hero তৈরি করা যায় gradient overlay দিয়ে।

```html
<section class="relative overflow-hidden">
  
  <div
    class="absolute inset-0 bg-cover bg-center"
    style="background-image: url('/images/hero.jpg');"
  ></div>

  <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

  <div class="relative z-10 px-6 py-32 text-white">
    <h1 class="text-5xl font-bold">
      Modern Web Development
    </h1>

    <p class="mt-5 max-w-xl text-lg text-gray-200">
      Build beautiful and scalable applications.
    </p>
  </div>

</section>
```

এই ধরনের technique professional landing page-এ অনেক দেখা যায়।

---

## 1️⃣3️⃣ React Example

React-এ:

```jsx
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 px-6 py-32 text-center text-white">
        <h1 className="text-4xl font-bold md:text-6xl">
          Build Amazing Products
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-200">
          Create modern applications with React and Tailwind CSS.
        </p>

        <button className="mt-8 rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700">
          Get Started
        </button>
      </div>

    </section>
  );
}
```

---

## 1️⃣4️⃣ Background নিয়ে গুরুত্বপূর্ণ Classes

| কাজ                    | Tailwind           |
| ---------------------- | ------------------ |
| Background color       | `bg-blue-500`      |
| Transparent background | `bg-transparent`   |
| Black opacity          | `bg-black/50`      |
| Gradient               | `bg-gradient-to-r` |
| Gradient start         | `from-blue-500`    |
| Gradient middle        | `via-purple-500`   |
| Gradient end           | `to-pink-500`      |
| Background image       | `bg-[url(...)]`    |
| Cover                  | `bg-cover`         |
| Contain                | `bg-contain`       |
| Center                 | `bg-center`        |
| Top                    | `bg-top`           |
| Bottom                 | `bg-bottom`        |
| No repeat              | `bg-no-repeat`     |

---

## 🧠 আজকের সবচেয়ে গুরুত্বপূর্ণ Pattern

একটি professional Hero section-এর জন্য এই pattern মনে রাখো:

```html
<section class="relative overflow-hidden">

  <!-- Background -->
  <div class="absolute inset-0 bg-cover bg-center">
  </div>

  <!-- Overlay -->
  <div class="absolute inset-0 bg-black/50">
  </div>

  <!-- Content -->
  <div class="relative z-10">
    Content
  </div>

</section>
```

এটা ভালোভাবে আয়ত্ত করতে পারলে তুমি অনেক ধরনের:

* Landing Page
* Portfolio
* E-commerce Hero
* SaaS Website
* Agency Website
* Product Website

এর Hero Section তৈরি করতে পারবে।

---

## 🧪 আজকের Practice

###### Task 1 — Gradient Card

একটি card তৈরি করো:

```text
┌─────────────────────────────┐
│                             │
│       PREMIUM PLAN          │
│                             │
│          $29                │
│                             │
│       Get Started           │
│                             │
└─────────────────────────────┘
```

ব্যবহার করবে:

```text
bg-gradient-to-*
from-*
via-*
to-*
rounded
shadow
text
```

---

###### Task 2 — Hero Section

একটি responsive Hero তৈরি করো:

```text
Desktop:

┌─────────────────────────────────────────┐
│                                         │
│       Build Your Future                 │
│       with Web Development              │
│                                         │
│       [ Get Started ]                   │
│                                         │
└─────────────────────────────────────────┘
```

ব্যবহার করবে:

```text
background image
bg-cover
bg-center
overlay
relative
absolute
z-index
responsive typography
```

---

###### Task 3 — React Challenge 🚀

একটি `Hero.jsx` component তৈরি করো।

Requirements:

```text
✓ Background Image
✓ Dark Overlay
✓ Gradient Overlay
✓ Responsive Heading
✓ Paragraph
✓ Two Buttons
✓ Mobile Responsive
```

Structure:

```jsx
function Hero() {
  return (
    <section>
      {/* Background */}

      {/* Overlay */}

      {/* Content */}

    </section>
  );
}
```

---

## 📌 Day 11 Cheat Sheet

```text
BACKGROUND
────────────────────────

bg-blue-500
bg-gray-100
bg-black
bg-white

OPACITY
────────────────────────

bg-black/50
bg-white/80

GRADIENT
────────────────────────

bg-gradient-to-r
bg-gradient-to-l
bg-gradient-to-t
bg-gradient-to-b
bg-gradient-to-br

from-blue-500
via-purple-500
to-pink-500

IMAGE
────────────────────────

bg-[url('/image.jpg')]

SIZE
────────────────────────

bg-cover
bg-contain
bg-auto

POSITION
────────────────────────

bg-center
bg-top
bg-bottom
bg-left
bg-right

REPEAT
────────────────────────

bg-repeat
bg-no-repeat
bg-repeat-x
bg-repeat-y
```

---

## 🎯 Day 11-এর Key Takeaway

আজকের ৫টি জিনিস অবশ্যই ভালোভাবে শিখবে:

```text
1. bg-{color}-{shade}
2. bg-black/50
3. bg-gradient-to-r + from/via/to
4. bg-cover + bg-center
5. Background + Overlay + Content pattern
```

বিশেষ করে এই pattern:

```html
relative
   │
   ├── absolute → Background
   │
   ├── absolute → Overlay
   │
   └── relative z-10 → Content
```

