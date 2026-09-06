# Learn TailwinCSS
*Day By Day*

# 🎯 Tailwind CSS — Day 10

## Borders, Shadows, Rings, Dividers & Effects

আজ আমরা Tailwind CSS-এর এমন কিছু utility শিখব যেগুলো ব্যবহার করে সাধারণ UI-কে **professional এবং polished** করা যায়।

আজকের বিষয়গুলো React project-এ প্রতিদিনই কাজে লাগবে—বিশেষ করে **Card, Button, Form, Dashboard, Navbar, E-commerce UI** তৈরির সময়।



# 1️⃣ Border

Tailwind-এ সবচেয়ে basic border:

```html
<div class="border">
  Content
</div>
```

এটি সাধারণত `1px` border তৈরি করে।

### Border thickness

```html
<div class="border">1px</div>

<div class="border-2">2px</div>

<div class="border-4">4px</div>

<div class="border-8">8px</div>
```

---

# 2️⃣ Border Color

Border-এর color পরিবর্তন:

```html
<div class="border border-gray-300">
  Card
</div>
```

আরও:

```html
border-red-500
border-blue-500
border-green-500
border-yellow-500
border-purple-500
```

### উদাহরণ

```html
<div class="border-2 border-blue-500 p-5">
  Blue Border
</div>
```

---

# 3️⃣ নির্দিষ্ট Side-এ Border

সবদিকে border না দিয়ে নির্দিষ্ট পাশে দিতে পারো।

### Top

```html
<div class="border-t">
```

### Bottom

```html
<div class="border-b">
```

### Left

```html
<div class="border-l">
```

### Right

```html
<div class="border-r">
```

### Example

```html
<div class="border-b border-gray-200 p-4">
  Navigation Item
</div>
```

এটি Navbar বা List item-এ অনেক কাজে লাগে।

---

# 4️⃣ Border Style

Solid:

```html
<div class="border">
```

Dashed:

```html
<div class="border border-dashed">
```

Dotted:

```html
<div class="border border-dotted">
```

Double:

```html
<div class="border border-double">
```

None:

```html
<div class="border-none">
```

---

# 5️⃣ Dashed Border Example

Upload component-এর মতো UI:

```html
<div class="rounded-xl border-2 border-dashed border-gray-300 p-10 text-center">
  <p class="text-gray-500">
    Drag & Drop your file here
  </p>
</div>
```

এ ধরনের UI dashboard এবং admin panel-এ খুব common।

---

# 6️⃣ Border + Rounded

আগের দিনের `rounded`-এর সাথে border ব্যবহার করলে সুন্দর card তৈরি করা যায়।

```html
<div class="rounded-xl border border-gray-200 p-6">
  <h2 class="text-xl font-bold">
    Product
  </h2>
</div>
```

আরও:

```text
rounded
rounded-sm
rounded-md
rounded-lg
rounded-xl
rounded-2xl
rounded-3xl
rounded-full
```

---

# 7️⃣ Shadow

এখন আসি **Shadow**-এ।

Card বা button-কে page থেকে visually আলাদা করার জন্য shadow ব্যবহার করি।

```html
<div class="shadow">
  Card
</div>
```

Tailwind-এর সাধারণ shadow scale:

```text
shadow-sm
shadow
shadow-md
shadow-lg
shadow-xl
shadow-2xl
```

---

## Shadow Comparison

```html
<div class="shadow-sm p-5">
  Small Shadow
</div>

<div class="shadow-md p-5">
  Medium Shadow
</div>

<div class="shadow-xl p-5">
  Large Shadow
</div>
```

সাধারণভাবে:

```text
shadow-sm → খুব হালকা
shadow    → সাধারণ
shadow-md → মাঝারি
shadow-lg → বড়
shadow-xl → আরও বড়
shadow-2xl → সবচেয়ে prominent
```

---

# 8️⃣ Professional Card

```html
<div class="rounded-xl border border-gray-200 bg-white p-6 shadow-md">
  
  <h2 class="text-xl font-bold">
    Wireless Headphone
  </h2>

  <p class="mt-2 text-gray-500">
    Premium wireless headphone.
  </p>

  <button class="mt-5 rounded-lg bg-blue-600 px-5 py-2 text-white">
    Buy Now
  </button>

</div>
```

এখানে:

```text
border
rounded
bg
p
shadow
text
button
```

সব একসাথে কাজ করছে।

---

# 9️⃣ Shadow Hover Effect

Mouse hover করলে shadow বাড়ানো যায়।

```html
<div class="rounded-xl border p-6 shadow-sm hover:shadow-lg">
  Product Card
</div>
```

এখানে:

```text
Normal → shadow-sm
Hover  → shadow-lg
```

এটি card UI-তে খুব জনপ্রিয় pattern।

---

# 🔟 `shadow-none`

Shadow সম্পূর্ণ remove করতে:

```html
<div class="shadow-none">
```

Responsive বা hover state-এও ব্যবহার করা যায়।

---

# 1️⃣1️⃣ Ring কী?

`ring` দেখতে border-এর মতো হলেও এটি **border-এর বাইরে একটি visual outline** তৈরি করে।

```html
<div class="ring-2">
  Content
</div>
```

### Ring size

```text
ring-1
ring-2
ring-4
ring-8
```

---

# 1️⃣2️⃣ Ring Color

```html
<div class="ring-2 ring-blue-500">
  Content
</div>
```

উদাহরণ:

```html
ring-blue-500
ring-red-500
ring-green-500
ring-purple-500
```

---

# 1️⃣3️⃣ Ring vs Border

এটা খুব গুরুত্বপূর্ণ।

```text
Border
┌───────────────────┐
│     Content       │
└───────────────────┘
```

Ring:

```text
   Ring
╔═══════════════════╗
║ ┌───────────────┐ ║
║ │    Content    │ ║
║ └───────────────┘ ║
╚═══════════════════╝
```

সহজভাবে:

* `border` → element-এর border
* `ring` → element-এর বাইরে outline effect

---

# 1️⃣4️⃣ Form Input + Ring

Form-এর ক্ষেত্রে `ring` খুব গুরুত্বপূর্ণ।

```html
<input
  type="text"
  placeholder="Enter your name"
  class="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
/>
```

এখানে:

```text
focus:
    ↓
ring-2
    ↓
blue ring
```

User input field-এ click করলে focus ring দেখা যাবে।

---

# 1️⃣5️⃣ `ring-offset`

Ring এবং element-এর মধ্যে কিছু space দিতে পারো।

```html
<div class="ring-2 ring-blue-500 ring-offset-2">
  Content
</div>
```

এখানে:

```text
ring-offset-2
```

ring-এর চারপাশে additional gap তৈরি করে।

---

# 1️⃣6️⃣ Focus State

Forms-এর জন্য এই pattern মনে রাখবে:

```html
<input
  class="border border-gray-300 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
/>
```

Normal:

```text
Gray Border
```

Focus:

```text
Blue Border
+
Blue Ring
```

Professional form design-এর জন্য খুব useful।

---

# 1️⃣7️⃣ Divider

ধরো তোমার কাছে একটি list আছে:

```text
User 1
────────────
User 2
────────────
User 3
────────────
User 4
```

প্রতিটি item-এর মধ্যে divider তৈরি করতে:

```html
<div class="divide-y">
  <div class="p-4">User 1</div>
  <div class="p-4">User 2</div>
  <div class="p-4">User 3</div>
  <div class="p-4">User 4</div>
</div>
```

`divide-y` child elements-এর মধ্যে horizontal divider তৈরি করে।

---

# 1️⃣8️⃣ Divider Color

```html
<div class="divide-y divide-gray-200">
```

আরও:

```html
divide-gray-100
divide-gray-200
divide-gray-300
```

---

# 1️⃣9️⃣ Vertical Divider

Horizontal-এর পরিবর্তে vertical divider:

```html
<div class="flex divide-x">
  <div class="p-4">Home</div>
  <div class="p-4">About</div>
  <div class="p-4">Contact</div>
</div>
```

এখানে:

```text
Home | About | Contact
```

---

# 2️⃣0️⃣ Divider Pattern

মনে রাখো:

```text
divide-y → vertical list-এর মধ্যে horizontal line

divide-x → horizontal layout-এর মধ্যে vertical line
```

Example:

```html
<div class="divide-y divide-gray-200">
```

এবং:

```html
<div class="flex divide-x divide-gray-200">
```

---

# 2️⃣1️⃣ Opacity

Element কতটা transparent হবে:

```html
<div class="opacity-50">
  Content
</div>
```

Common values:

```text
opacity-0
opacity-10
opacity-25
opacity-50
opacity-75
opacity-100
```

উদাহরণ:

```html
<p class="opacity-50">
  Secondary text
</p>
```

---

# 2️⃣2️⃣ Hover Opacity

```html
<button class="opacity-80 hover:opacity-100">
  Buy Now
</button>
```

Normal:

```text
80% opacity
```

Hover:

```text
100% opacity
```

---

# 2️⃣3️⃣ Transition

Hover effect smooth করার জন্য `transition` ব্যবহার করতে পারো।

```html
<button class="transition hover:shadow-lg">
  Buy Now
</button>
```

আরও সুন্দর:

```html
<button class="transition duration-300 hover:shadow-lg">
  Buy Now
</button>
```

এখানে:

```text
transition
    +
duration-300
    +
hover:shadow-lg
```

একটি smooth effect তৈরি করে।

---

# 2️⃣4️⃣ Real-world Product Card 🚀

এখন সব concept একসাথে ব্যবহার করি:

```html
<div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:shadow-xl">

  <div class="h-52 rounded-xl bg-gray-100">
    <!-- Product Image -->
  </div>

  <div class="mt-5">

    <h2 class="text-xl font-bold text-gray-900">
      Wireless Headphone
    </h2>

    <p class="mt-2 text-gray-500">
      Premium quality wireless headphone.
    </p>

    <div class="mt-5 flex items-center justify-between">

      <span class="text-2xl font-bold">
        $59
      </span>

      <button
        class="rounded-lg bg-blue-600 px-5 py-2 text-white transition duration-300 hover:bg-blue-700 hover:shadow-md"
      >
        Buy Now
      </button>

    </div>

  </div>
</div>
```

### এখানে কী কী ব্যবহার হয়েছে?

```text
border
rounded
shadow
hover:shadow
transition
duration
bg
padding
flex
text
```

এটাই Tailwind শেখার আসল উদ্দেশ্য—**অনেক utility একসাথে ব্যবহার করে বাস্তব UI তৈরি করা।**

---

# 2️⃣5️⃣ React JSX Version

React-এ অবশ্যই `className` ব্যবহার করবে:

```jsx
function ProductCard() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:shadow-xl">
      
      <div className="h-52 rounded-xl bg-gray-100">
        {/* Product Image */}
      </div>

      <div className="mt-5">
        <h2 className="text-xl font-bold text-gray-900">
          Wireless Headphone
        </h2>

        <p className="mt-2 text-gray-500">
          Premium quality wireless headphone.
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-2xl font-bold">
            $59
          </span>

          <button
            className="rounded-lg bg-blue-600 px-5 py-2 text-white transition duration-300 hover:bg-blue-700 hover:shadow-md"
          >
            Buy Now
          </button>
        </div>
      </div>

    </div>
  );
}

export default ProductCard;
```

---

# 🧩 2️⃣6️⃣ আজকের গুরুত্বপূর্ণ Combination

Professional UI-তে এই ধরনের combination খুব বেশি ব্যবহার করবে:

### Card

```html
border
rounded-xl
shadow-md
```

### Interactive Card

```html
shadow-sm
transition
hover:shadow-lg
```

### Input

```html
border
outline-none
focus:ring-2
focus:ring-blue-500
```

### List

```html
divide-y
divide-gray-200
```

### Button

```html
shadow-sm
transition
hover:shadow-md
```

---

# 🧪 আজকের Practice

## Task 1 — Pricing Card

তৈরি করো:

```text
┌─────────────────────────┐
│       PRO PLAN          │
│                         │
│        $29/month        │
│                         │
│ ✓ Feature One           │
│ ✓ Feature Two           │
│ ✓ Feature Three         │
│                         │
│     [ Get Started ]     │
└─────────────────────────┘
```

ব্যবহার করবে:

```text
border
rounded
shadow
divide-y
hover
transition
```

---

## Task 2 — Login Form

তৈরি করো:

```text
┌──────────────────────────┐
│       Login              │
│                          │
│ Email                    │
│ [____________________]   │
│                          │
│ Password                 │
│ [____________________]   │
│                          │
│      [ Login ]           │
└──────────────────────────┘
```

Input-এ অবশ্যই ব্যবহার করবে:

```html
focus:border-blue-500
focus:ring-2
focus:ring-blue-500
```

---

## Task 3 — User List

```text
User 1
──────────────────
User 2
──────────────────
User 3
──────────────────
User 4
```

Hint:

```html
<div class="divide-y divide-gray-200">
```

---

# 🧠 Day 10 Cheat Sheet

```text
BORDER
────────────────────────

border
border-2
border-4
border-8

border-gray-300
border-blue-500

border-t
border-r
border-b
border-l

border-dashed
border-dotted
border-double
border-none


SHADOW
────────────────────────

shadow-sm
shadow
shadow-md
shadow-lg
shadow-xl
shadow-2xl
shadow-none


RING
────────────────────────

ring
ring-1
ring-2
ring-4
ring-8

ring-blue-500
ring-offset-2

focus:ring-2
focus:ring-blue-500


DIVIDER
────────────────────────

divide-y
divide-x
divide-gray-200


OPACITY
────────────────────────

opacity-0
opacity-50
opacity-75
opacity-100


EFFECT
────────────────────────

transition
duration-300
hover:shadow-lg
hover:opacity-100
```

---

# 🎯 আজকের Key Takeaway

আজকের সবচেয়ে গুরুত্বপূর্ণ বিষয়গুলো:

```text
border  → element-এর চারপাশে line

shadow  → depth / elevation

ring    → element-এর বাইরের outline

divide  → child elements-এর মধ্যে separator

opacity → transparency

transition → smooth animation
```

একটি খুব গুরুত্বপূর্ণ UI pattern:

```html
<div
  class="rounded-xl border border-gray-200
         shadow-sm transition duration-300
         hover:shadow-lg"
>
```

আর Form-এর জন্য:

```html
<input
  class="rounded-lg border border-gray-300
         outline-none
         focus:border-blue-500
         focus:ring-2
         focus:ring-blue-500"
/>
```

**এই দুই pattern ভালোভাবে আয়ত্ত করো।** এগুলো React + Tailwind দিয়ে professional UI বানানোর সময় বারবার কাজে লাগবে।

---

