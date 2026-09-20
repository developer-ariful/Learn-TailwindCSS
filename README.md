# Learn Tailwind css
**_Day By Day_**

# 📘 Tailwind CSS — Day 19

## Transitions, Transforms & Animations

আজ আমরা Tailwind CSS-এর **UI interaction ও animation** নিয়ে কাজ করব। Day 17-এ আমরা `hover`, `focus`, `active`, `group-hover` শিখেছিলাম। আজ সেগুলোকে আরও professional করব।

React/MERN project-এ এগুলো বিশেষভাবে কাজে লাগবে:

* Product Card hover
* Button animation
* Image zoom
* Modal animation
* Loading indicator
* Skeleton UI
* Dropdown interaction
* E-commerce cart interaction

---

# 🎯 আজকের Learning Goal

আজ তুমি শিখবে:

1. `transition`
2. `duration-*`
3. `ease-*`
4. `delay-*`
5. `transform`
6. `scale-*`
7. `rotate-*`
8. `translate-*`
9. `skew-*`
10. Hover animation
11. `animate-spin`
12. `animate-pulse`
13. `animate-bounce`
14. Professional Product Card animation
15. React + Tailwind animation pattern

---

# ⏰ আজকের ১ ঘণ্টার পরিকল্পনা

| সময়      | বিষয়                   |
| -------- | ---------------------- |
| 10 মিনিট | Transition             |
| 10 মিনিট | Duration + Timing      |
| 15 মিনিট | Transform              |
| 10 মিনিট | Built-in Animation     |
| 10 মিনিট | Product Card Animation |
| 5 মিনিট  | Practice + Revision    |

---

# 1️⃣ Transition কী?

ধরো একটি button:

```html
<button class="bg-blue-500 hover:bg-blue-700">
  Buy Now
</button>
```

Mouse hover করলে background হঠাৎ পরিবর্তন হবে।

আমরা যদি smooth করতে চাই:

```html
<button class="bg-blue-500 transition hover:bg-blue-700">
  Buy Now
</button>
```

এখন পরিবর্তনটি smooth হবে।

### Mental Model

```text
Without transition:

Blue ───────────────→ Dark Blue
       হঠাৎ পরিবর্তন


With transition:

Blue ──→ Light Blue ──→ Medium Blue ──→ Dark Blue
              Smooth
```

---

# 2️⃣ `transition`

সবচেয়ে সাধারণ:

```html
<button class="transition hover:bg-blue-700">
  Buy Now
</button>
```

আরও নির্দিষ্টভাবে:

```html
<button class="transition-colors hover:bg-blue-700">
  Buy Now
</button>
```

### Common Transition Utilities

```text
transition
transition-all
transition-colors
transition-opacity
transition-shadow
transition-transform
```

### কখন কোনটি?

| Utility                | ব্যবহার                |
| ---------------------- | ---------------------- |
| `transition`           | সাধারণ transition      |
| `transition-all`       | একাধিক property        |
| `transition-colors`    | Color পরিবর্তন         |
| `transition-opacity`   | Opacity                |
| `transition-shadow`    | Shadow                 |
| `transition-transform` | Scale/Rotate/Translate |

---

# 3️⃣ Duration

Animation কতক্ষণ চলবে তা `duration-*` দিয়ে নিয়ন্ত্রণ করা যায়।

```html
<button class="transition duration-300 hover:bg-blue-700">
  Buy
</button>
```

Common values:

```text
duration-75
duration-100
duration-150
duration-200
duration-300
duration-500
duration-700
duration-1000
```

### Example

```html
<div class="transition duration-500 hover:scale-105">
  Product
</div>
```

এখানে scale পরিবর্তন হতে `500ms` সময় লাগবে।

---

# 4️⃣ কোন Duration ব্যবহার করব?

Real-world UI-এর জন্য:

```text
Button hover
→ duration-200 / duration-300

Card hover
→ duration-300

Image zoom
→ duration-300 / duration-500

Large UI animation
→ duration-500+
```

সাধারণ UI-তে অতিরিক্ত slow animation ব্যবহার না করাই ভালো।

---

# 5️⃣ Timing Function — `ease-*`

Animation-এর গতি কেমন হবে তা `ease-*` দিয়ে নিয়ন্ত্রণ করা যায়।

```html
<div class="transition duration-500 ease-in-out hover:scale-105">
  Product
</div>
```

Common:

```text
ease-linear
ease-in
ease-out
ease-in-out
```

### সহজভাবে

```text
ease-linear
→ একই গতিতে

ease-in
→ ধীরে শুরু

ease-out
→ ধীরে শেষ

ease-in-out
→ ধীরে শুরু + ধীরে শেষ
```

Professional UI-তে:

```html
class="transition duration-300 ease-in-out"
```

খুব common pattern।

---

# 6️⃣ Delay

Animation শুরু হতে delay দিতে:

```html
<div class="transition delay-150 duration-300 hover:scale-105">
  Card
</div>
```

অর্থাৎ interaction-এর পরে transition শুরু হওয়ার আগে delay থাকবে।

---

# 7️⃣ Transform

এখন আসি খুব গুরুত্বপূর্ণ বিষয়:

## `transform`

Transform দিয়ে element-এর অবস্থান/আকার/rotation ইত্যাদি পরিবর্তন করা যায়।

প্রধানগুলো:

```text
scale
rotate
translate
skew
```

---

# 8️⃣ Scale

Element বড় বা ছোট করতে:

```html
<div class="transition hover:scale-105">
  Product
</div>
```

`scale-105` মানে element কিছুটা বড় হবে।

আর:

```html
<div class="transition hover:scale-110">
  Product
</div>
```

আরও বড় হবে।

### ছোট করা

```html
<button class="transition active:scale-95">
  Click Me
</button>
```

Click করার সময় button সামান্য ছোট হবে।

---

# 9️⃣ Common Scale

```text
scale-50
scale-75
scale-90
scale-95
scale-100
scale-105
scale-110
scale-125
150...
```

সবচেয়ে common:

```text
hover:scale-105
hover:scale-110
active:scale-95
```

---

# 🔟 Button Animation

একটি professional button:

```html
<button
  class="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white
         transition duration-300
         hover:scale-105 hover:bg-blue-700
         active:scale-95"
>
  Buy Now
</button>
```

Interaction:

```text
Normal
  ↓
Hover → একটু বড় + Darker
  ↓
Click → একটু ছোট
```

---

# 1️⃣1️⃣ Translate

Element-কে horizontal/vertical direction-এ সরাতে `translate-*` ব্যবহার করা যায়।

### X direction

```html
<div class="transition hover:translate-x-2">
  Hello
</div>
```

ডানে যাবে।

### Negative

```html
<div class="transition hover:-translate-x-2">
  Hello
</div>
```

বামে যাবে।

### Y direction

```html
<div class="transition hover:-translate-y-1">
  Card
</div>
```

উপরে উঠবে।

---

# 1️⃣2️⃣ Product Card Lift Effect

E-commerce-এ খুব জনপ্রিয়:

```html
<div
  class="rounded-2xl border bg-white p-5 shadow-sm
         transition duration-300
         hover:-translate-y-1 hover:shadow-xl"
>
  Product Card
</div>
```

Mouse hover করলে:

```text
       ↑
   Product Card
       ↑
```

Card সামান্য উপরে উঠবে এবং shadow বাড়বে।

---

# 1️⃣3️⃣ Rotate

Element rotate করতে:

```html
<div class="transition duration-300 hover:rotate-3">
  ⭐
</div>
```

অথবা:

```html
<div class="transition duration-300 hover:-rotate-3">
  ⭐
</div>
```

Common use:

* Icon
* Image
* Decorative element
* Menu icon

---

# 1️⃣4️⃣ Image Zoom

Day 17-এ `group-hover` শিখেছিলে।

এখন সেটার সাথে transition combine করি।

```jsx
<div className="group overflow-hidden rounded-xl">
  <img
    src="/product.jpg"
    alt="Product"
    className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
  />
</div>
```

এখানে:

```text
group
   ↓
Parent hover
   ↓
group-hover:scale-110
   ↓
Image Zoom
```

---

# 1️⃣5️⃣ কেন `overflow-hidden`?

ধরো image zoom হচ্ছে:

```text
┌─────────────────────┐
│     IMAGE           │
│    ↗ ↗ ↗            │
│                     │
└─────────────────────┘
```

Image container-এর বাইরে চলে যেতে পারে।

তাই:

```html
overflow-hidden
```

দিলে অতিরিক্ত অংশ দেখা যাবে না।

Complete pattern:

```html
<div class="group overflow-hidden rounded-xl">
  <img
    src="/product.jpg"
    class="h-full w-full object-cover transition duration-500 group-hover:scale-110"
    alt="Product"
  />
</div>
```

### এই pattern মনে রাখো:

```text
group
+
overflow-hidden
+
object-cover
+
transition
+
group-hover:scale-110
```

🔥 E-commerce project-এ অত্যন্ত useful।

---

# 1️⃣6️⃣ Opacity Transition

Element-এর opacity পরিবর্তন:

```html
<div class="opacity-70 transition hover:opacity-100">
  Content
</div>
```

Image-এর জন্য:

```html
<img
  src="/image.jpg"
  class="opacity-80 transition duration-300 hover:opacity-100"
  alt="Image"
/>
```

---

# 1️⃣7️⃣ Shadow Transition

```html
<div
  class="rounded-xl shadow-sm
         transition-shadow duration-300
         hover:shadow-xl"
>
  Card
</div>
```

এখানে শুধু shadow transition করবে।

এটি `transition-shadow` দিয়ে আরও specific করা হয়েছে।

---

# 1️⃣8️⃣ Color Transition

```html
<a
  href="#"
  class="text-gray-600 transition-colors duration-200 hover:text-blue-600"
>
  Read More
</a>
```

এটি Navbar এবং links-এর জন্য খুব useful।

---

# 1️⃣9️⃣ Built-in Animation

Tailwind-এ কিছু built-in animation আছে।

প্রধানগুলো:

```text
animate-spin
animate-ping
animate-pulse
animate-bounce
```

---

# 2️⃣0️⃣ `animate-spin`

Loading spinner:

```html
<div class="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600">
</div>
```

এটি loading UI-তে খুব common।

Concept:

```text
Loading
   ↓
↻
```

---

# 2️⃣1️⃣ `animate-pulse`

Loading skeleton-এর জন্য খুব useful।

```html
<div class="h-4 w-32 animate-pulse rounded bg-gray-200">
</div>
```

একটি Skeleton Card:

```jsx
<div className="animate-pulse rounded-xl border p-5">
  <div className="h-48 rounded-lg bg-gray-200"></div>

  <div className="mt-4 h-5 w-3/4 rounded bg-gray-200"></div>

  <div className="mt-3 h-4 w-full rounded bg-gray-200"></div>

  <div className="mt-2 h-4 w-2/3 rounded bg-gray-200"></div>
</div>
```

API থেকে data আসার সময় এমন skeleton ব্যবহার করা যায়।

---

# 2️⃣2️⃣ `animate-bounce`

Element bounce করতে:

```html
<div class="animate-bounce">
  ↓
</div>
```

Possible use:

* Scroll indicator
* Attention indicator
* Small decorative UI

অতিরিক্ত ব্যবহার করলে UI distracting হতে পারে।

---

# 2️⃣3️⃣ `animate-ping`

কোনো indicator-এর attention effect:

```html
<span class="relative flex h-3 w-3">
  <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>

  <span class="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
</span>
```

এটি online/live indicator-এর মতো UI-তে ব্যবহার করা যায়।

---

# 2️⃣4️⃣ Transition বনাম Animation

এটি খুব গুরুত্বপূর্ণ।

### Transition

সাধারণত কোনো **state change** হলে চলে।

```text
Normal
  ↓
Hover
  ↓
Transition
```

উদাহরণ:

```html
hover:scale-105
```

### Animation

নিজে থেকে চলতে পারে।

```text
Page Load
   ↓
Animation Start
   ↓
Continue
```

উদাহরণ:

```html
animate-spin
animate-pulse
```

### Comparison

| Transition                | Animation                     |
| ------------------------- | ----------------------------- |
| State change-এর সাথে      | নিজে চলতে পারে                |
| `hover:` ইত্যাদির সাথে    | `animate-*`                   |
| Button/Card               | Loader/Skeleton               |
| সাধারণত interaction-based | Continuous/automatic হতে পারে |

---

# 2️⃣5️⃣ Professional Product Card

এখন Day 1–19-এর অনেক concept combine করি।

```jsx
function ProductCard() {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white
        shadow-sm
        transition
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src="/product.jpg"
          alt="Wireless Headphone"
          className="
            h-full
            w-full
            object-cover
            transition
            duration-500
            group-hover:scale-110
          "
        />

        {/* Badge */}
        <span
          className="
            absolute
            left-3
            top-3
            rounded-full
            bg-red-500
            px-3
            py-1
            text-sm
            font-semibold
            text-white
          "
        >
          Sale
        </span>
      </div>

      {/* Content */}
      <div className="p-5">

        <h3
          className="
            truncate
            text-xl
            font-bold
            transition-colors
            duration-200
            group-hover:text-blue-600
          "
        >
          Wireless Noise Cancelling Headphone
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
          Premium wireless headphone with excellent sound
          quality and long battery life.
        </p>

        <div className="mt-4 flex items-center justify-between">

          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">
              $59
            </span>

            <span className="text-gray-400 line-through">
              $79
            </span>
          </div>

          <button
            className="
              rounded-lg
              bg-blue-600
              px-4
              py-2
              font-semibold
              text-white
              transition
              duration-300
              hover:scale-105
              hover:bg-blue-700
              active:scale-95
            "
          >
            Buy
          </button>

        </div>
      </div>
    </div>
  );
}
```

---

# 🧠 2️⃣6️⃣ এই Card-এ কী কী শিখলাম?

একটি UI-তে কতগুলো concept combine হয়েছে দেখো:

```text
Product Card
│
├── group
├── overflow-hidden
├── rounded
├── border
├── shadow
│
├── Image
│   ├── aspect-square
│   ├── object-cover
│   ├── transition
│   └── group-hover:scale-110
│
├── Badge
│   ├── absolute
│   └── rounded-full
│
├── Title
│   ├── truncate
│   └── group-hover:text-blue-600
│
├── Description
│   └── line-clamp-2
│
└── Button
    ├── transition
    ├── hover:scale-105
    └── active:scale-95
```

এটাই হলো **Tailwind utility composition**।

---

# 2️⃣7️⃣ React + Loading State

এবার React-এর সাথে animation ব্যবহার করি।

ধরো Add to Cart button:

```jsx
import { useState } from "react";

function AddToCartButton() {
  const [loading, setLoading] = useState(false);

  const handleAddToCart = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={loading}
      className="
        flex
        items-center
        justify-center
        gap-2
        rounded-lg
        bg-blue-600
        px-5
        py-3
        font-semibold
        text-white
        transition
        duration-300
        hover:bg-blue-700
        disabled:cursor-not-allowed
        disabled:opacity-60
      "
    >
      {loading ? (
        <>
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
          Adding...
        </>
      ) : (
        "Add to Cart"
      )}
    </button>
  );
}
```

এখানে:

```text
React
 ↓
loading state
 ↓
Tailwind
 ↓
animate-spin
 ↓
Loading UI
```

এটি real-world application development-এর খুব common pattern।

---

# 2️⃣8️⃣ Animation Design Principle

প্রতিটি element-এ animation দেওয়া উচিত নয়।

❌ Bad:

```text
Everything moving
Everything bouncing
Everything rotating
Everything scaling
```

UI confusing হয়ে যেতে পারে।

✅ Better:

```text
Button
→ subtle scale

Card
→ subtle lift

Image
→ subtle zoom

Loading
→ pulse/spin

Important indicator
→ ping
```

### Rule:

> **Animation-এর উদ্দেশ্য হলো user interaction বুঝতে সাহায্য করা, user-কে distract করা নয়।**

---

# 🧪 2️⃣9️⃣ আজকের Practice

## Practice 1 — Animated Button

একটি button বানাও:

Requirements:

```text
Normal
↓
Hover → background change
↓
Hover → scale 105
↓
Click → scale 95
```

ব্যবহার করবে:

```text
transition
duration-300
hover:
active:
scale
```

---

## Practice 2 — Animated Product Image

Requirements:

```text
Parent → group
Image → object-cover
Hover → image zoom
Container → overflow-hidden
```

Target:

```html
<div class="group overflow-hidden rounded-xl">
  ...
</div>
```

---

## Practice 3 — Loading Skeleton

একটি Product Skeleton বানাও:

```text
┌──────────────────────┐
│                      │
│       Skeleton       │
│                      │
├──────────────────────┤
│ ███████████████      │
│ ██████████           │
│                      │
│ █████    █████       │
└──────────────────────┘
```

ব্যবহার করবে:

```text
animate-pulse
bg-gray-200
rounded
```

---

# 🏆 3️⃣0️⃣ আজকের Challenge

## AI-Powered E-Commerce Product Card

একটি সম্পূর্ণ interactive Product Card বানাও।

### Requirements

**Image:**

```text
aspect-square
object-cover
overflow-hidden
group-hover:scale-110
transition
```

**Card:**

```text
shadow-sm
hover:shadow-xl
hover:-translate-y-1
transition
```

**Title:**

```text
truncate
group-hover:text-blue-600
transition-colors
```

**Button:**

```text
hover:scale-105
active:scale-95
transition
```

**Loading:**

```text
animate-spin
```

Flow:

```text
Add to Cart
     ↓
   Click
     ↓
 Adding... + Spinner
     ↓
   Added ✓
```

---

# 📝 3️⃣1️⃣ Self Test

নিজেকে প্রশ্ন করো:

1. `transition` কেন ব্যবহার করি?
2. `duration-300` কী?
3. `ease-in-out` কী?
4. `scale-105` কী করে?
5. `active:scale-95` কেন ব্যবহার করা হয়?
6. `translate-y` কী?
7. `hover:-translate-y-1` কী effect তৈরি করে?
8. `rotate-*` কী কাজে লাগে?
9. `transition-transform` কখন ব্যবহার করব?
10. `transition-colors` কখন ব্যবহার করব?
11. `animate-spin` কোথায় ব্যবহার করা হয়?
12. `animate-pulse` কোথায় ব্যবহার করা হয়?
13. `animate-bounce` কোথায় ব্যবহার করা যায়?
14. `transition` ও `animation`-এর পার্থক্য কী?
15. `group-hover:scale-110` কীভাবে কাজ করে?
16. Product image-এর ক্ষেত্রে `overflow-hidden` কেন দরকার?
17. React state এবং Tailwind animation কীভাবে একসাথে কাজ করে?

---

# 📋 3️⃣2️⃣ Day 19 Cheat Sheet

```text
TRANSITION
transition
transition-all
transition-colors
transition-shadow
transition-transform
transition-opacity

DURATION
duration-100
duration-200
duration-300
duration-500
duration-700

TIMING
ease-linear
ease-in
ease-out
ease-in-out

DELAY
delay-150
delay-300

SCALE
scale-95
scale-100
scale-105
scale-110

TRANSLATE
translate-x-2
-translate-x-2
translate-y-2
-translate-y-2

ROTATE
rotate-3
-rotate-3

OPACITY
opacity-70
hover:opacity-100

ANIMATION
animate-spin
animate-ping
animate-pulse
animate-bounce

INTERACTION
hover:
focus:
active:
disabled:
group
group-hover:
```

---

# 🎯 Day 19-এর সবচেয়ে গুরুত্বপূর্ণ Pattern

এই pattern-টি ভালোভাবে আয়ত্ত করো:

```jsx
<div className="group overflow-hidden rounded-xl">
  <img
    src="/product.jpg"
    alt="Product"
    className="
      h-full
      w-full
      object-cover
      transition
      duration-500
      group-hover:scale-110
    "
  />
</div>
```

এবং button-এর জন্য:

```jsx
<button
  className="
    rounded-lg
    bg-blue-600
    px-5
    py-3
    text-white
    transition
    duration-300
    hover:scale-105
    hover:bg-blue-700
    active:scale-95
  "
>
  Buy Now
</button>
```

### 🧠 আজকের Mental Model

```text
User Interaction
       ↓
State / Variant
       ↓
hover / focus / active
       ↓
transition
       ↓
transform / color / shadow
       ↓
Smooth Professional UI
```

আর Loading-এর ক্ষেত্রে:

```text
React State
    ↓
loading === true
    ↓
animate-spin / animate-pulse
    ↓
Loading Feedback
```
