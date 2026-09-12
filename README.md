# Learn Tailwind css
**_Day By Day_**

## 🚀 Tailwind CSS — Day 17: Advanced Component Styling & State-Based UI

Day 16-এ আমরা শিখেছি **Reusable Components, Props, Variant, Size এবং Component Composition**।

আজ আমরা সেই component-গুলোকে আরও **interactive এবং professional** করব।

আজকের মূল ধারণা:

> **User কোনো action করলে UI কীভাবে পরিবর্তিত হবে—Tailwind দিয়ে সেই visual state design করা।**

---

#### 🎯 আজকের Learning Goals

আজ শিখবেন:

* `hover:`
* `focus:`
* `active:`
* `disabled:`
* `group`
* `group-hover:`
* `peer`
* `peer-checked:`
* Conditional UI styling
* React state + Tailwind
* Interactive Product Card
* Interactive Button
* Dropdown/Card UI

---

## ⏰ ১ ঘণ্টার Study Plan

| সময়      | বিষয়                    |
| -------- | ----------------------- |
| 10 মিনিট | Tailwind State Variants |
| 10 মিনিট | Hover / Focus / Active  |
| 10 মিনিট | Disabled State          |
| 10 মিনিট | `group` ও `group-hover` |
| 10 মিনিট | `peer` ও Form State     |
| 10 মিনিট | React State + Tailwind  |

---

## 1️⃣ State-Based Styling কী?

ধরুন একটি button আছে।

Normal অবস্থায়:

```text
[ Buy Now ]
```

Mouse নিয়ে গেলে:

```text
[ Buy Now ]  ← color পরিবর্তন
```

Click করলে:

```text
[ Buy Now ]  ← একটু ছোট/pressed
```

Disabled হলে:

```text
[ Buy Now ]  ← faded
```

এই বিভিন্ন অবস্থাকে বলা যায় **UI State**।

Tailwind-এ আমরা এগুলো লিখি:

```text
hover:
focus:
active:
disabled:
```

---

## 2️⃣ `hover:` — Mouse Hover

```jsx
<button className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700">
  Buy Now
</button>
```

এখানে:

```text
Normal → bg-blue-600
Hover  → bg-blue-700
```

অর্থাৎ:

```text
bg-blue-600
      ↓
   hover
      ↓
bg-blue-700
```

---

## 3️⃣ Hover + Transition

শুধু color change করলে অনেক সময় UI একটু abrupt লাগে।

তাই:

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
    hover:bg-blue-700
  "
>
  Buy Now
</button>
```

এখানে:

```text
transition
    +
duration-300
    +
hover:bg-blue-700
```

একটি smooth interaction তৈরি করে।

---

## 4️⃣ Hover-এর সাথে Transform

Button hover করলে সামান্য বড় হতে পারে:

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
  "
>
  Buy Now
</button>
```

অথবা card একটু উপরে উঠতে পারে:

```jsx
<div className="rounded-xl border p-5 transition hover:-translate-y-1 hover:shadow-xl">
  Product Card
</div>
```

এটি e-commerce UI-তে খুব common pattern।

---

## 5️⃣ `focus:` — Input-এর জন্য গুরুত্বপূর্ণ

Input focus করলে border/ring পরিবর্তন করা যায়।

```jsx
<input
  type="email"
  placeholder="Enter your email"
  className="
    w-full
    rounded-lg
    border
    border-gray-300
    px-4
    py-3
    outline-none
    focus:border-blue-500
    focus:ring-2
    focus:ring-blue-500
  "
/>
```

Flow:

```text
Normal
  ↓
border-gray-300

User clicks input
  ↓
focus:

border-blue-500
ring-blue-500
```

---

## 6️⃣ `active:` — Click করার সময়

```jsx
<button
  className="
    rounded-lg
    bg-blue-600
    px-5
    py-3
    text-white
    transition
    active:scale-95
  "
>
  Submit
</button>
```

Click করার সময় button সামান্য ছোট হবে।

```text
Normal → scale 100%
Active → scale 95%
```

---

## 7️⃣ `disabled:` — Disabled State

ধরুন payment process চলছে।

Button:

```jsx
<button
  disabled
  className="
    rounded-lg
    bg-blue-600
    px-5
    py-3
    text-white
    disabled:cursor-not-allowed
    disabled:opacity-50
  "
>
  Processing...
</button>
```

এখানে:

```text
disabled:cursor-not-allowed
disabled:opacity-50
```

ব্যবহার করে user-কে বোঝানো হচ্ছে যে button এখন available নয়।

---

## 8️⃣ চারটি গুরুত্বপূর্ণ State

মনে রাখুন:

| Variant     | কখন কাজ করে      |
| ----------- | ---------------- |
| `hover:`    | Mouse hover      |
| `focus:`    | Element focus    |
| `active:`   | Click/press      |
| `disabled:` | Disabled element |

উদাহরণ:

```jsx
<button
  className="
    bg-blue-600
    hover:bg-blue-700
    focus:ring-2
    focus:ring-blue-500
    active:scale-95
    disabled:opacity-50
  "
>
  Submit
</button>
```

---

## 9️⃣ `group` — Parent-এর State দিয়ে Child পরিবর্তন

এটি Tailwind-এর অত্যন্ত গুরুত্বপূর্ণ feature।

ধরুন:

```text
Product Card
    │
    ├── Image
    └── Product Name
```

আপনি চান পুরো card hover করলে image zoom হবে।

এখানে `group` ব্যবহার করব।

```jsx
<div className="group overflow-hidden rounded-xl">
  <img
    src="/product.jpg"
    alt="Product"
    className="h-64 w-full object-cover transition duration-300 group-hover:scale-110"
  />
</div>
```

খেয়াল করুন:

Parent:

```text
group
```

Child:

```text
group-hover:scale-110
```

---

## 🔟 `group` কীভাবে কাজ করে?

```text
             Parent
         class="group"
              │
        Mouse Hover
              │
       ┌──────┴──────┐
       ↓             ↓
     Image         Title
       │
       ↓
group-hover:scale-110
```

অর্থাৎ parent-এর hover state child-এর styling পরিবর্তন করতে পারে।

---

## 1️⃣1️⃣ Product Card-এর Real Example

```jsx
<div className="group overflow-hidden rounded-2xl border bg-white shadow-sm">
  <div className="aspect-square overflow-hidden bg-gray-100">
    <img
      src="/images/headphone.jpg"
      alt="Wireless Headphone"
      className="
        h-full
        w-full
        object-cover
        transition
        duration-300
        group-hover:scale-110
      "
    />
  </div>

  <div className="p-5">
    <h3 className="text-lg font-bold">
      Wireless Headphone
    </h3>

    <p className="mt-2 text-gray-500">
      Premium wireless headphone.
    </p>
  </div>
</div>
```

এখানে card hover করলে image zoom হবে।

---

## 1️⃣2️⃣ Product Card-এ Multiple Hover Effects

আমরা title-ও পরিবর্তন করতে পারি।

```jsx
<div className="group rounded-2xl border p-5">
  <h3 className="text-gray-800 transition group-hover:text-blue-600">
    Wireless Headphone
  </h3>

  <p className="mt-2 text-gray-500">
    Premium headphone.
  </p>
</div>
```

Card hover করলে:

```text
Product Name
     ↓
gray
     ↓
blue
```

---

## 1️⃣3️⃣ Product Card + Image + Button

আরও realistic example:

```jsx
<div className="group rounded-2xl border bg-white p-4 shadow-sm transition hover:shadow-xl">

  <div className="aspect-square overflow-hidden rounded-xl bg-gray-100">
    <img
      src="/images/product.jpg"
      alt="Product"
      className="
        h-full
        w-full
        object-cover
        transition
        duration-300
        group-hover:scale-110
      "
    />
  </div>

  <h3 className="mt-4 text-lg font-bold transition group-hover:text-blue-600">
    Smart Watch
  </h3>

  <p className="mt-2 text-gray-500">
    Modern smart watch.
  </p>

  <button
    className="
      mt-4
      w-full
      rounded-lg
      bg-blue-600
      py-3
      font-semibold
      text-white
      transition
      hover:bg-blue-700
      active:scale-95
    "
  >
    Add to Cart
  </button>

</div>
```

এখানে একসাথে ব্যবহার হয়েছে:

```text
group
group-hover
hover
active
transition
scale
shadow
```

---

## 1️⃣4️⃣ `peer` কী?

`peer` মূলত একটি element-এর state-এর উপর ভিত্তি করে অন্য element-এর styling পরিবর্তন করতে সাহায্য করে।

বিশেষ করে form UI-তে এটি খুব useful।

ধরুন একটি checkbox:

```jsx
<div>
  <input
    type="checkbox"
    className="peer"
  />

  <span className="peer-checked:text-blue-600">
    Remember me
  </span>
</div>
```

Checkbox checked হলে text-এর color পরিবর্তিত হবে।

---

## 1️⃣5️⃣ Custom Checkbox UI

আরও সুন্দরভাবে:

```jsx
<label className="flex cursor-pointer items-center gap-3">
  <input
    type="checkbox"
    className="peer sr-only"
  />

  <span
    className="
      h-5
      w-5
      rounded
      border
      border-gray-300
      peer-checked:border-blue-600
      peer-checked:bg-blue-600
    "
  ></span>

  <span className="text-gray-700">
    Remember me
  </span>
</label>
```

এখানে:

```text
unchecked
    ↓
border-gray-300

checked
    ↓
peer-checked:border-blue-600
peer-checked:bg-blue-600
```

---

## 1️⃣6️⃣ React State + Tailwind

Tailwind শুধু visual styling করে।

কিন্তু actual UI state manage করার জন্য React ব্যবহার করব।

উদাহরণ:

```jsx
import { useState } from "react";

function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      className={`
        rounded-full
        px-4
        py-2
        ${liked ? "bg-red-500 text-white" : "bg-gray-100 text-gray-700"}
      `}
    >
      {liked ? "Liked" : "Like"}
    </button>
  );
}

export default LikeButton;
```

এখানে React state:

```text
liked = false
     ↓
Like

liked = true
     ↓
Liked
```

---

## 1️⃣7️⃣ Conditional Class কী?

React-এ আমরা condition অনুযায়ী Tailwind class পরিবর্তন করতে পারি।

```jsx
className={`
  rounded-lg
  px-5
  py-3
  ${isActive ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}
`}
```

অর্থাৎ:

```text
isActive = true
     ↓
bg-blue-600

isActive = false
     ↓
bg-gray-200
```

এটি React + Tailwind development-এর খুব গুরুত্বপূর্ণ skill।

---

## 1️⃣8️⃣ Dropdown Example

ধরুন user profile menu click করলে dropdown open হবে।

```jsx
import { useState } from "react";

function ProfileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">

      <button
        onClick={() => setOpen(!open)}
        className="rounded-lg border px-4 py-2"
      >
        Profile
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 rounded-xl border bg-white p-2 shadow-lg">
          <button className="block w-full rounded-lg px-4 py-2 text-left hover:bg-gray-100">
            Profile
          </button>

          <button className="block w-full rounded-lg px-4 py-2 text-left hover:bg-gray-100">
            Settings
          </button>

          <button className="block w-full rounded-lg px-4 py-2 text-left hover:bg-gray-100">
            Logout
          </button>
        </div>
      )}

    </div>
  );
}

export default ProfileMenu;
```

এখানে:

```text
React State
    ↓
open / closed
    ↓
Conditional Rendering
    ↓
Tailwind Styling
```

---

## 1️⃣9️⃣ Professional UI-এর State System

একটি component design করার সময় শুধু normal state চিন্তা করবেন না।

এইগুলো চিন্তা করুন:

```text
Default
   ↓
Hover
   ↓
Focus
   ↓
Active
   ↓
Disabled
   ↓
Loading
   ↓
Error
   ↓
Success
```

উদাহরণ Button:

```text
Button
│
├── Default
├── Hover
├── Focus
├── Active
├── Disabled
└── Loading
```

এটি একজন professional frontend developer-এর চিন্তার অংশ।

---

## 🛒 2️⃣0️⃣ E-commerce Product Button-এর State

ধরুন Add to Cart button।

###### Normal

```text
Add to Cart
```

###### Loading

```text
Adding...
```

###### Added

```text
✓ Added to Cart
```

React-এর মাধ্যমে state:

```jsx
const [loading, setLoading] = useState(false);
const [added, setAdded] = useState(false);
```

তারপর UI state অনুযায়ী button পরিবর্তন করা যায়।

এখানে গুরুত্বপূর্ণ বিষয়:

> **Tailwind visual state তৈরি করবে, React application state control করবে।**

---

## 🧠 React + Tailwind-এর Responsibility

এটি খুব ভালোভাবে মনে রাখুন:

```text
React
 ↓
Logic + State + Data
 ↓
Tailwind CSS
 ↓
Visual Styling + Responsive UI + Interaction Style
```

উদাহরণ:

```text
React
  ↓
isOpen = true
  ↓
Dropdown দেখাবে
  ↓
Tailwind
  ↓
absolute + shadow + rounded + border
```

---

## 📁 আজকের Component Structure

Day 16-এর structure এখন আরও শক্তিশালী করতে পারেন:

```text
src/
├── components/
│   └── ui/
│       ├── Button.jsx
│       ├── Card.jsx
│       ├── Badge.jsx
│       ├── Input.jsx
│       └── Dropdown.jsx
│
├── components/
│   └── products/
│       └── ProductCard.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   └── Dashboard.jsx
│
└── App.jsx
```

---

## 🧪 আজকের Practice

#### Task 1 — Interactive Button

একটি button তৈরি করুন যেখানে থাকবে:

```text
Default
Hover
Focus
Active
Disabled
```

---

#### Task 2 — Product Card

একটি Product Card বানান:

```text
┌─────────────────────┐
│       Product       │
│       Image         │
│                     │
├─────────────────────┤
│ Product Name        │
│ Description         │
│ $59                 │
│ [ Add to Cart ]     │
└─────────────────────┘
```

Card hover করলে:

* shadow বাড়বে
* image zoom হবে
* product name blue হবে

ব্যবহার করুন:

```text
group
group-hover:
hover:
transition
```

---

## 🏆 Day 17 Challenge

আপনার **AI-Powered E-Commerce Management System**-এর জন্য একটি interactive Product Card তৈরি করুন।

Requirements:

###### Product Image

```text
aspect-square
object-cover
overflow-hidden
group-hover:scale-110
```

###### Badge

```text
New / Sale
```

###### Favorite Button

Click করলে:

```text
♡ → ♥
```

এবং color পরিবর্তন হবে।

###### Add to Cart

State:

```text
Add to Cart
     ↓
Adding...
     ↓
✓ Added
```

###### Card Hover

```text
shadow-sm
     ↓
shadow-xl
```

এবং product name:

```text
gray
 ↓
blue
```

---

## 📝 Day 17 Self-Test

নিজেকে এই প্রশ্নগুলো করুন:

1. `hover:` কী?
2. `focus:` কেন ব্যবহার করি?
3. `active:` কখন কাজ করে?
4. `disabled:` কী কাজে লাগে?
5. `transition` কেন ব্যবহার করি?
6. `group` কী?
7. `group-hover:` কীভাবে কাজ করে?
8. `peer` কী?
9. `peer-checked:` কী?
10. React state এবং Tailwind state-এর মধ্যে পার্থক্য কী?
11. Conditional class কী?
12. Product Card-এ `group-hover` কেন useful?

---

## 📌 Day 17 Cheat Sheet

| Tailwind             | কাজ                        |
| -------------------- | -------------------------- |
| `hover:`             | Mouse hover                |
| `focus:`             | Focus state                |
| `active:`            | Click/press                |
| `disabled:`          | Disabled state             |
| `transition`         | Smooth transition          |
| `duration-300`       | Animation duration         |
| `scale-105`          | Element বড়                 |
| `scale-95`           | Element ছোট                |
| `group`              | Parent state তৈরি          |
| `group-hover:`       | Parent hover → child style |
| `peer`               | Sibling state control      |
| `peer-checked:`      | Checkbox checked state     |
| `opacity-50`         | Faded UI                   |
| `cursor-not-allowed` | Disabled cursor            |

---

## 🎯 Day 17-এর মূল শিক্ষা

আজকের সবচেয়ে গুরুত্বপূর্ণ concept:

```text
             React
               │
        Logic + State
               │
               ↓
       Conditional UI
               │
               ↓
         Tailwind CSS
               │
      ┌────────┼────────┐
      ↓        ↓        ↓
    Hover     Focus    Active
      ↓        ↓        ↓
    Visual   Visual   Visual
```

আর একজন ভালো **React + Tailwind Developer** শুধু সুন্দর UI বানায় না।

সে চিন্তা করে:

> **User যখন hover করবে, click করবে, focus করবে, loading হবে, error হবে বা disabled থাকবে—প্রতিটি অবস্থায় UI কেমন দেখাবে?**

এটাই আজকের **Day 17-এর সবচেয়ে গুরুত্বপূর্ণ skill।**

