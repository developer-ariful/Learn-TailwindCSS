# Learn TailwinCSS
*Day By Day*

## 🎯 Tailwind CSS — Day 8

#### Responsive Design + Mobile-First Approach

আজকের lesson খুবই গুরুত্বপূর্ণ। কারণ একজন **professional frontend/React developer** হিসেবে শুধু সুন্দর UI বানালেই হবে না—সেটি **Mobile, Tablet এবং Desktop সব screen-এ সুন্দরভাবে কাজ করতে হবে।**

আজ আমরা শিখব কীভাবে Tailwind CSS দিয়ে responsive website তৈরি করতে হয়।





## 1️⃣ Responsive Design কী?

ধরো তুমি একটি website তৈরি করলে।

Desktop:

```text
┌──────────────────────────────────────────┐
│ Logo       Home About Contact    Login   │
├──────────────────────────────────────────┤
│                                          │
│       Welcome to Our Website             │
│                                          │
└──────────────────────────────────────────┘
```

কিন্তু Mobile-এ একই layout রাখলে:

```text
┌──────────────────┐
│ Logo       ☰     │
├──────────────────┤
│                  │
│    Welcome       │
│                  │
│     Button       │
│                  │
└──────────────────┘
```

অর্থাৎ screen size অনুযায়ী UI পরিবর্তন হবে।

এটাই **Responsive Design**।

---

## 2️⃣ Tailwind Breakpoints

Tailwind-এ সাধারণত আমরা এই responsive prefixes ব্যবহার করি:

| Prefix | সাধারণত ব্যবহৃত screen |
| ------ | ---------------------- |
| `sm:`  | Small                  |
| `md:`  | Medium                 |
| `lg:`  | Large                  |
| `xl:`  | Extra Large            |
| `2xl:` | Extra Extra Large      |

সবচেয়ে গুরুত্বপূর্ণ বিষয়:

> Tailwind **Mobile-First**।

---

## 3️⃣ Mobile-First Approach কী?

ধরো তুমি লিখলে:

```html
<h1 class="text-2xl md:text-4xl lg:text-6xl">
  Hello World
</h1>
```

এর অর্থ:

```text
Mobile
↓
text-2xl

Medium
↓
text-4xl

Large
↓
text-6xl
```

অর্থাৎ প্রথমে mobile-এর জন্য style লিখবে।

তারপর বড় screen-এর জন্য পরিবর্তন করবে।

---

## 🔥 4️⃣ `sm:` কীভাবে কাজ করে?

```html
<div class="text-center sm:text-left">
  Hello
</div>
```

এর অর্থ:

```text
Mobile
→ text-center

sm এবং তার উপরে
→ text-left
```

---

## 5️⃣ `md:` Example

```html
<div class="text-center md:text-left">
  Hello World
</div>
```

Mobile:

```text
        Hello World
```

Medium/Desktop:

```text
Hello World
```

---

## 6️⃣ Responsive Font Size

এটি খুব বেশি ব্যবহার করবে।

```html
<h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-6xl">
  Build Your Future
</h1>
```

এখানে:

```text
Mobile → 2xl
sm     → 3xl
md     → 4xl
lg     → 6xl
```

এতে বড় screen-এ heading বড় হবে।

---

## 7️⃣ Responsive Padding

ধরো mobile-এ কম padding এবং desktop-এ বেশি padding দরকার।

```html
<section class="px-4 md:px-8 lg:px-16">
```

অর্থাৎ:

```text
Mobile
→ px-4

Medium
→ px-8

Large
→ px-16
```

---

## 8️⃣ Responsive Margin

একইভাবে:

```html
<div class="mt-4 md:mt-8 lg:mt-12">
```

Mobile:

```text
mt-4
```

Medium:

```text
mt-8
```

Large:

```text
mt-12
```

---

## 9️⃣ Responsive Width

```html
<div class="w-full md:w-1/2 lg:w-1/3">
```

মানে:

```text
Mobile
→ 100%

Medium
→ 50%

Large
→ 33.33%
```

এটি খুব useful।

---

## 🔥 10️⃣ Responsive Flexbox

Day 6-এ আমরা শিখেছিলাম:

```html
flex
flex-row
flex-col
```

এখন responsive করে ফেলি।

```html
<div class="flex flex-col md:flex-row">
```

অর্থাৎ:

###### Mobile

```text
┌─────────────┐
│   Item 1    │
├─────────────┤
│   Item 2    │
└─────────────┘
```

###### Desktop

```text
┌─────────────┬─────────────┐
│   Item 1    │   Item 2    │
└─────────────┴─────────────┘
```

---

## 1️⃣1️⃣ Responsive Grid

Day 7-এ আমরা শিখেছি:

```html
grid-cols-1
sm:grid-cols-2
md:grid-cols-3
lg:grid-cols-4
```

Example:

```html
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
```

এটি একটি অত্যন্ত গুরুত্বপূর্ণ real-world pattern।

```text
Mobile
1 column

Tablet
2 columns

Medium
3 columns

Desktop
4 columns
```

---

## 1️⃣2️⃣ Responsive Navbar

এখন একটি বাস্তব example দেখি।

```html
<nav class="flex items-center justify-between p-4">

  <div class="text-2xl font-bold">
    Logo
  </div>

  <div class="hidden md:flex gap-6">
    <a href="##">Home</a>
    <a href="##">About</a>
    <a href="##">Services</a>
    <a href="##">Contact</a>
  </div>

  <button class="md:hidden">
    ☰
  </button>

</nav>
```

এখানে:

```text
hidden
→ element hidden

md:flex
→ md screen থেকে visible

md:hidden
→ md screen থেকে hidden
```

###### Mobile:

```text
Logo                    ☰
```

###### Desktop:

```text
Logo     Home About Services Contact
```

🔥 এই pattern React project-এ অনেক ব্যবহার করবে।

---

## 1️⃣3️⃣ Responsive Hero Section

এবার একটি real-world Hero Section তৈরি করি।

```html
<section class="px-4 py-16 md:px-8 lg:px-16 lg:py-24">

  <div class="mx-auto max-w-7xl">

    <div class="flex flex-col items-center gap-10 lg:flex-row">

      <!-- Content -->
      <div class="w-full text-center lg:w-1/2 lg:text-left">

        <h1 class="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          Build Modern Websites
        </h1>

        <p class="mt-6 text-gray-600 md:text-lg">
          Create beautiful and responsive websites
          using modern web technologies.
        </p>

        <div class="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">

          <button class="rounded-lg bg-blue-600 px-6 py-3 text-white">
            Get Started
          </button>

          <button class="rounded-lg border px-6 py-3">
            Learn More
          </button>

        </div>

      </div>


      <!-- Image -->
      <div class="w-full lg:w-1/2">

        <div class="h-64 rounded-xl bg-gray-200 md:h-80 lg:h-96">
        </div>

      </div>

    </div>

  </div>

</section>
```

---

## 🧠 এই Code কীভাবে Responsive হলো?

সবচেয়ে গুরুত্বপূর্ণ অংশ:

```html
flex-col lg:flex-row
```

Mobile:

```text
Content
   ↓
Image
```

Desktop:

```text
Content | Image
```

---

আর:

```html
text-center lg:text-left
```

Mobile:

```text
       Heading
       Paragraph
```

Desktop:

```text
Heading
Paragraph
```

---

আর:

```html
flex-col sm:flex-row
```

Mobile:

```text
┌──────────────┐
│ Get Started  │
├──────────────┤
│ Learn More   │
└──────────────┘
```

Small screen থেকে:

```text
┌──────────────┐ ┌────────────┐
│ Get Started  │ │ Learn More │
└──────────────┘ └────────────┘
```

---

## ⚛️ React-এ একই কাজ

React JSX-এ:

```jsx
<section className="px-4 py-16 md:px-8 lg:px-16 lg:py-24">
  <div className="mx-auto max-w-7xl">

    <div className="flex flex-col items-center gap-10 lg:flex-row">

      <div className="w-full text-center lg:w-1/2 lg:text-left">

        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
          Build Modern Websites
        </h1>

        <p className="mt-6 text-gray-600 md:text-lg">
          Create beautiful responsive websites.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-lg bg-blue-600 px-6 py-3 text-white">
            Get Started
          </button>

          <button className="rounded-lg border px-6 py-3">
            Learn More
          </button>
        </div>

      </div>

      <div className="w-full lg:w-1/2">
        <div className="h-64 rounded-xl bg-gray-200 md:h-80 lg:h-96" />
      </div>

    </div>

  </div>
</section>
```

---

## 🚨 একটি গুরুত্বপূর্ণ বিষয়

অনেকে Tailwind-এ ভুলভাবে responsive class লেখে।

❌ এভাবে ভাববে না:

```text
Mobile → আলাদা CSS
Tablet → আলাদা CSS
Desktop → আলাদা CSS
```

বরং ভাববে:

```text
Base style
      ↓
Mobile
      ↓
sm:
      ↓
md:
      ↓
lg:
      ↓
xl:
```

অর্থাৎ:

```html
text-2xl md:text-4xl lg:text-6xl
```

Base:

```text
text-2xl
```

তারপর বড় screen-এ override হচ্ছে।

---

## 📌 আজকের Cheat Sheet

```html
<!-- Typography -->
text-2xl md:text-4xl lg:text-6xl

<!-- Width -->
w-full md:w-1/2 lg:w-1/3

<!-- Padding -->
px-4 md:px-8 lg:px-16

<!-- Margin -->
mt-4 md:mt-8 lg:mt-12

<!-- Flex -->
flex flex-col md:flex-row

<!-- Grid -->
grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4

<!-- Visibility -->
hidden md:flex

md:hidden
```

---

## 📝 আজকের Homework

#### Task 1 — Responsive Navbar

তৈরি করো:

```text
Mobile:
Logo                 ☰

Desktop:
Logo    Home About Services Contact    Login
```

ব্যবহার করবে:

```html
hidden
flex
md:flex
md:hidden
justify-between
items-center
```

---

#### Task 2 — Responsive Product Grid

৮টি Product Card তৈরি করো।

```html
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
```

---

#### Task 3 — Responsive Hero

Hero Section-এ থাকবে:

```text
Heading
Paragraph
2 Buttons
Image
```

Mobile:

```text
Heading
Paragraph
Buttons
Image
```

Desktop:

```text
Heading + Image
Paragraph
Buttons
```

---

## 🎯 Day 8-এর সবচেয়ে গুরুত্বপূর্ণ বিষয়

আজ শুধু এই patternগুলো ভালোভাবে আয়ত্ত করো:

```html
flex flex-col md:flex-row
```

```html
grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
```

```html
text-2xl md:text-4xl lg:text-6xl
```

```html
w-full md:w-1/2
```

```html
hidden md:flex
```

```html
md:hidden
```

###### 🧠 মনে রাখবে:

> **Tailwind = Mobile First**

অর্থাৎ প্রথমে mobile-এর design লিখবে, তারপর `sm:`, `md:`, `lg:` ইত্যাদি ব্যবহার করে বড় screen-এর design তৈরি করবে।

