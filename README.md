# Learn TailwinCSS
*Day By Day*

## 🚀 Tailwind CSS — Day 4

#### 📐 Spacing System: Margin, Padding, Gap

আজ আমরা Tailwind CSS-এর **সবচেয়ে গুরুত্বপূর্ণ বিষয়গুলোর একটি—Spacing** শিখব।

Professional UI বানাতে শুধু color বা font জানলেই হবে না। কোন element-এর **ভেতরে কতটুকু জায়গা**, **বাইরে কতটুকু জায়গা**, এবং **দুটি element-এর মাঝে কতটুকু gap** থাকবে—এগুলো নিয়ন্ত্রণ করতে জানতে হবে।


## 1️⃣ Padding কী?

**Padding হলো একটি element-এর ভেতরের জায়গা।**

সহজভাবে:

```text
┌───────────────────────────┐
│      Padding              │
│   ┌───────────────────┐   │
│   │                   │   │
│   │     Content       │   │
│   │                   │   │
│   └───────────────────┘   │
│      Padding              │
└───────────────────────────┘
```

Tailwind-এ:

```text id="p4p0c3"
p-4
```

মানে চারপাশে padding।

উদাহরণ:

```html id="x9k21p"
<div class="p-4">
  Hello Tailwind
</div>
```

---

## 2️⃣ `p-*` বুঝুন

```text id="q6f3da"
p-1
p-2
p-3
p-4
p-5
p-6
p-8
p-10
p-12
```

যেমন:

```html id="g4xv7m"
<div class="p-4 bg-gray-100">
  Content
</div>
```

তারপর:

```html id="r7d3sy"
<div class="p-8 bg-gray-100">
  Content
</div>
```

দ্বিতীয়টির ভেতরে বেশি জায়গা থাকবে।

---

## 3️⃣ Horizontal এবং Vertical Padding

এটি খুব গুরুত্বপূর্ণ।

#### `px-*`

`x` মানে horizontal:

```text id="c1n8vb"
Left + Right
```

```html id="x5e0pj"
<button class="px-6">
  Buy Now
</button>
```

---

#### `py-*`

`y` মানে vertical:

```text id="z4s1kp"
Top + Bottom
```

```html id="v8c3na"
<button class="py-3">
  Buy Now
</button>
```

দুটো একসাথে:

```html id="n0km0z"
<button class="px-6 py-3">
  Buy Now
</button>
```

এটি Button-এর জন্য খুব common pattern।

---

## 4️⃣ নির্দিষ্ট দিকে Padding

প্রয়োজনে চারদিকের বদলে নির্দিষ্ট side নিয়ন্ত্রণ করতে পারবেন।

```text id="x8f5a0"
pt-4 → padding-top
pb-4 → padding-bottom
pl-4 → padding-left
pr-4 → padding-right
```

উদাহরণ:

```html id="6d6y6w"
<div class="pt-8">
  Content
</div>
```

---

## 5️⃣ Margin কী?

**Margin হলো element-এর বাইরের জায়গা।**

```text id="zv9f8n"
┌─────────────────────────────┐
│         Margin              │
│   ┌─────────────────────┐   │
│   │      Content        │   │
│   └─────────────────────┘   │
│         Margin              │
└─────────────────────────────┘
```

Tailwind:

```text id="2sl4eh"
m-4
```

উদাহরণ:

```html id="3hlqg5"
<div class="m-4">
  Content
</div>
```

---

## 6️⃣ Margin Direction

Padding-এর মতো Margin-এরও direction আছে।

```text id="phl9qk"
mt-4 → margin-top
mb-4 → margin-bottom
ml-4 → margin-left
mr-4 → margin-right
```

---

## ⭐ `mt-*` সবচেয়ে বেশি ব্যবহার করবেন

উদাহরণ:

```html id="69e8uc"
<h1>Product</h1>

<p class="mt-3">
  Product description
</p>
```

এখানে paragraph-এর উপরে margin দেওয়া হয়েছে।

আর:

```html id="3o2cnd"
<button class="mt-6">
  Buy Now
</button>
```

Button-এর উপরে space তৈরি হবে।

---

## 7️⃣ `mx-*` এবং `my-*`

#### `mx-*`

Horizontal margin:

```text id="j3j1c7"
Left + Right
```

```html id="7r2p2m"
<div class="mx-4">
  Content
</div>
```

#### `my-*`

Vertical margin:

```text id="q1kh6e"
Top + Bottom
```

```html id="7zv4yu"
<div class="my-6">
  Content
</div>
```

---

## ⭐ `mx-auto`

এটি অত্যন্ত গুরুত্বপূর্ণ।

কোনো fixed/max-width element horizontally center করতে:

```html id="axf4zy"
<div class="max-w-md mx-auto">
  Content
</div>
```

এটি React project এবং website layout-এ নিয়মিত ব্যবহার করবেন।

---

## 8️⃣ Gap

এখন আসি **Gap**-এ।

Flex অথবা Grid-এর child elements-এর মধ্যে gap তৈরি করতে:

```text id="h7n4c8"
gap-*
```

উদাহরণ:

```html id="8m6t8r"
<div class="flex gap-4">
  <button>One</button>
  <button>Two</button>
  <button>Three</button>
</div>
```

এখানে তিনটি button-এর মধ্যে gap থাকবে।

---

## 9️⃣ `gap-x-*` এবং `gap-y-*`

Horizontal gap:

```html id="3f7h9j"
<div class="flex gap-x-6">
```

Vertical gap:

```html id="y2m7av"
<div class="flex flex-col gap-y-4">
```

দুটো আলাদা করে:

```html id="h5z0ef"
<div class="grid gap-x-6 gap-y-4">
```

---

## 🔟 `space-x-*`

এটিও child elements-এর মধ্যে horizontal space দিতে ব্যবহৃত হয়।

```html id="xk4n7v"
<div class="flex space-x-4">
  <button>Home</button>
  <button>About</button>
  <button>Contact</button>
</div>
```

---

## 1️⃣1️⃣ `space-y-*`

Vertical elements-এর মধ্যে space:

```html id="6hj7aa"
<div class="space-y-4">
  <input />
  <input />
  <input />
</div>
```

Form-এর ক্ষেত্রে এটি খুব useful।

---

## 🧠 `gap` বনাম `space`

এখন গুরুত্বপূর্ণ পার্থক্য:

###### `gap`

Flex/Grid layout-এ সাধারণত ব্যবহার করবেন:

```html id="7j6qzy"
<div class="flex gap-4">
```

###### `space-y`

একটির নিচে আরেকটি element থাকলে:

```html id="u1sqh8"
<div class="space-y-4">
```

###### Professional recommendation

আপনি যখন Flex/Grid ব্যবহার করছেন, সাধারণত **`gap-*` দিয়ে শুরু করুন**।

---

## 🛒 Real Project Example

একটি Product Card:

```html id="t8w0pw"
<div class="w-80 p-6 bg-white rounded-xl shadow-lg">

  <h2 class="text-2xl font-bold">
    Smart Watch
  </h2>

  <p class="mt-3 text-gray-600">
    Modern smartwatch for everyday use.
  </p>

  <p class="mt-4 text-xl font-bold text-blue-600">
    $99
  </p>

  <button class="mt-6 w-full px-6 py-3 bg-blue-600 text-white rounded-lg">
    Buy Now
  </button>

</div>
```

এখানে:

```text id="h58v9j"
p-6
↓
Card-এর ভিতরের জায়গা

mt-3
↓
Description-এর উপরের জায়গা

mt-4
↓
Price-এর উপরের জায়গা

mt-6
↓
Button-এর উপরের জায়গা

px-6
↓
Button-এর left/right padding

py-3
↓
Button-এর top/bottom padding
```

---

## 🧩 Real-world Layout Example

ধরুন Navbar:

```html id="4y0o9q"
<nav class="flex items-center justify-between px-6 py-4">
  <h1 class="text-xl font-bold">
    My Website
  </h1>

  <div class="flex gap-6">
    <a href="##">Home</a>
    <a href="##">About</a>
    <a href="##">Contact</a>
  </div>
</nav>
```

এখানে:

```text id="k1h3r7"
px-6
↓
Navbar left/right padding

py-4
↓
Navbar top/bottom padding

gap-6
↓
Navigation links-এর মাঝের gap
```

---

## 🔥 আজকের Main Practice

এখন নিজে একটি **Pricing Card** তৈরি করুন।

Structure:

```text id="x7p8za"
┌────────────────────────────┐
│                            │
│        PRO PLAN            │
│                            │
│          $29               │
│                            │
│     Best for developers    │
│                            │
│   ✓ 10 Projects            │
│   ✓ 50 GB Storage          │
│   ✓ Priority Support       │
│                            │
│      [ Get Started ]       │
│                            │
└────────────────────────────┘
```

###### অবশ্যই ব্যবহার করবেন:

```text id="q6u2rj"
p-*
px-*
py-*
mt-*
mb-*
gap-*
rounded-*
shadow-*
```

---

## 🧪 Experiment

একটি card নিয়ে শুধু spacing পরিবর্তন করুন।

প্রথমে:

```html id="tah3b0"
<div class="p-4">
```

তারপর:

```html id="g7s1wx"
<div class="p-8">
```

তারপর:

```html id="b9f5hp"
<div class="p-12">
```

Browser-এ লক্ষ্য করুন card-এর content কীভাবে পরিবর্তিত হচ্ছে।

---

## 📝 আজকের Homework

#### Task 1 — Login Form

Tailwind দিয়ে একটি Login Form তৈরি করুন:

```text id="n4k9fr"
┌─────────────────────────┐
│        Login            │
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

এখানে বিশেষভাবে ব্যবহার করুন:

```text id="w5e3dz"
p-*
space-y-*
mt-*
px-*
py-*
```

---

#### Task 2 — Navbar

তৈরি করুন:

```text id="d7m6xk"
Logo          Home About Contact
```

ব্যবহার করবেন:

```text id="7f6r4a"
flex
justify-between
items-center
px-*
py-*
gap-*
```

---

## 🧠 Day 4 Cheat Sheet

```text
p-4
↓
চারদিকে Padding

px-4
↓
Left + Right Padding

py-4
↓
Top + Bottom Padding

pt-4
↓
Top Padding

pb-4
↓
Bottom Padding
```

```text
m-4
↓
চারদিকে Margin

mx-4
↓
Left + Right Margin

my-4
↓
Top + Bottom Margin

mt-4
↓
Top Margin

mb-4
↓
Bottom Margin
```

```text
gap-4
↓
Flex/Grid children-এর মধ্যে gap

gap-x-4
↓
Horizontal gap

gap-y-4
↓
Vertical gap

space-y-4
↓
Vertical child spacing

space-x-4
↓
Horizontal child spacing
```

---

## 🎯 আজকের সবচেয়ে গুরুত্বপূর্ণ বিষয়

এই তিনটির পার্থক্য **ভালোভাবে বুঝুন**:

```text
Padding
   ↓
Element-এর ভিতরের জায়গা


Margin
   ↓
Element-এর বাইরের জায়গা


Gap
   ↓
Flex/Grid-এর children-এর মাঝের জায়গা
```

একটি সহজ উদাহরণ:

```text
┌────────────────────────────────┐
│            Margin              │
│   ┌────────────────────────┐   │
│   │        Padding         │   │
│   │   ┌────────────────┐   │   │
│   │   │    Content     │   │   │
│   │   └────────────────┘   │   │
│   └────────────────────────┘   │
└────────────────────────────────┘
```

