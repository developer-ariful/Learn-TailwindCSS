# Learn TailwinCSS
*Day By Day*

## 🎯 Tailwind CSS — Day 1



## ১. Tailwind CSS কী?

**Tailwind CSS হলো একটি utility-first CSS framework**, যেখানে ছোট ছোট predefined CSS class ব্যবহার করে সরাসরি HTML/JSX-এর ভিতর UI design করা যায়।

ধরুন Traditional CSS-এ একটি button:

```html
<button class="btn">Click Me</button>
```

তারপর CSS:

```css
.btn {
  background-color: blue;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
}
```

Tailwind CSS-এ একই কাজ:

```html
<button class="bg-blue-600 text-white px-5 py-3 rounded-lg">
  Click Me
</button>
```

এখানে আলাদা CSS লিখতে হয়নি।

---

## ২. Utility-First CSS কী?

এটাই Tailwind-এর সবচেয়ে গুরুত্বপূর্ণ ধারণা।

প্রতিটি class সাধারণত একটি নির্দিষ্ট কাজ করে।

যেমন:

```text
text-white     → text color white
bg-blue-600    → background blue
p-4            → padding
mt-4           → margin-top
rounded-lg     → border radius
text-xl        → font size
font-bold      → font weight
```

অর্থাৎ:

```html
<div class="bg-white p-6 rounded-xl shadow-lg">
  Hello Tailwind
</div>
```

এখানে:

```text
bg-white
   ↓
Background

p-6
   ↓
Padding

rounded-xl
   ↓
Border Radius

shadow-lg
   ↓
Box Shadow
```

---

## ৩. Tailwind কেন ব্যবহার করবেন?

একজন React developer হিসেবে Tailwind আপনার জন্য বিশেষভাবে উপকারী।

###### Traditional CSS

```text
Component
   ↓
CSS File
   ↓
Class Name
   ↓
HTML
```

###### Tailwind

```text
React Component
      ↓
Tailwind Classes
      ↓
UI
```

ফলে:

* দ্রুত UI তৈরি করা যায়
* Responsive design সহজ হয়
* CSS naming কম করতে হয়
* Component-based development-এর সাথে ভালোভাবে কাজ করে
* Design পরিবর্তন করা সহজ
* বড় project-এ consistent UI তৈরি করা যায়

---

## ৪. Traditional CSS বনাম Tailwind

ধরুন একটি card বানাবেন।

###### Traditional CSS

```html
<div class="card">
  <h2>Product</h2>
  <p>Beautiful product</p>
</div>
```

```css
.card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.card h2 {
  font-size: 24px;
  font-weight: bold;
}
```

###### Tailwind

```html
<div class="bg-white p-6 rounded-xl shadow-lg">
  <h2 class="text-2xl font-bold">
    Product
  </h2>

  <p>
    Beautiful product
  </p>
</div>
```

দেখতে প্রথমে Tailwind-এর class অনেক মনে হতে পারে।

কিন্তু নিয়মিত practice করলে এগুলো দ্রুত চিনতে পারবেন।

---

## ৫. Tailwind CSS-এর গুরুত্বপূর্ণ ধারণা

আজ শুধু এই ধারণাটা মাথায় রাখুন:

```text
Tailwind
   ↓
Utility Classes
   ↓
Combine Classes
   ↓
Build UI
```

যেমন:

```html
<button
  class="bg-blue-600 text-white px-6 py-3 rounded-lg"
>
  Login
</button>
```

এখানে ৪টি utility একসাথে কাজ করছে।

---

## ৬. React Developer হিসেবে Tailwind

আপনি React ব্যবহার করলে:

```jsx
function Button() {
  return (
    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
      Login
    </button>
  );
}

export default Button;
```

মনে রাখবেন:

###### HTML

```html
class=""
```

###### React JSX

```jsx
className=""
```

---

## ৭. আজকের প্রথম Practice

একটি simple profile card তৈরি করুন।

আপনার লক্ষ্য:

```text
┌──────────────────────────┐
│                          │
│        Profile           │
│                          │
│    Ariful Islam          │
│    Web Developer         │
│                          │
│    I build web apps.     │
│                          │
│       [ Contact ]        │
│                          │
└──────────────────────────┘
```

শুরুতে এই code লিখতে পারেন:

```html
<div class="bg-white p-6 rounded-xl shadow-lg">
  <h2 class="text-2xl font-bold">
    Ariful Islam
  </h2>

  <p class="text-gray-600">
    Web Developer
  </p>

  <p class="mt-3 text-gray-500">
    I build modern web applications.
  </p>

  <button class="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg">
    Contact
  </button>
</div>
```

###### 🎯 নিজে পরিবর্তন করুন

এইগুলো নিজের মতো পরিবর্তন করুন:

* Background
* Text size
* Button color
* Padding
* Border radius
* Shadow

---

## 🧠 Day 1-এর গুরুত্বপূর্ণ Class

আজ সব মুখস্থ করার দরকার নেই। শুধু চিনে রাখুন:

| Class           | কাজ                |
| --------------- | ------------------ |
| `bg-white`      | Background         |
| `bg-blue-600`   | Blue background    |
| `text-white`    | White text         |
| `text-gray-600` | Gray text          |
| `text-xl`       | Text size          |
| `text-2xl`      | বড় text            |
| `font-bold`     | Bold               |
| `p-6`           | Padding            |
| `mt-4`          | Margin top         |
| `px-5`          | Horizontal padding |
| `py-2`          | Vertical padding   |
| `rounded-lg`    | Border radius      |
| `shadow-lg`     | Shadow             |

---

## ⏰ আজকের ১ ঘণ্টার Routine

###### প্রথম ১৫ মিনিট

উপরের Theory পড়ুন এবং বুঝুন।

###### পরের ৩০ মিনিট

নিজে Profile Card তৈরি করুন।

###### শেষ ১৫ মিনিট

নিজে পরীক্ষা করুন:

```text
1. bg-blue-500 কাজ করে?
2. text-3xl কাজ করে?
3. p-8 দিলে কী হয়?
4. rounded-full দিলে কী হয়?
5. shadow-2xl দিলে কী হয়?
6. mt-10 দিলে কী হয়?
```

প্রতিটি class নিজে পরিবর্তন করে **browser-এ ফলাফল দেখুন**।

---

## 📝 Day 1 Homework

একটি **Product Card** বানান।

Card-এর মধ্যে থাকবে:

```text
Product Image
Product Name
Description
Price
Buy Now Button
```

এবং **শুধুমাত্র Tailwind utility classes** ব্যবহার করার চেষ্টা করুন।

###### ⭐ আজকের মূল শিক্ষা

> **Tailwind CSS মুখস্থ করার বিষয় নয়; utility class ব্যবহার করে UI তৈরি করার skill।**
