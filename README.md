# Learn Tailwind css

## 🎯 Tailwind CSS — Day 15: Revision + Real-World E-commerce Landing Page

আজকের Day 15 একটু আলাদা। আজ **নতুন অনেক utility শেখার চেয়ে Day 1–14-এর বিষয়গুলো বাস্তবে প্রয়োগ** করব।

আজকের শেষে তুমি একটি **Responsive E-commerce Product Landing Page** তৈরি করার মতো confidence পাবে।


## 1️⃣ Day 1–14 Quick Revision

প্রথমে দেখি এখন পর্যন্ত কী কী শিখেছো।

###### 📦 Foundation

```text
Day 1 → Tailwind Basics
Day 2 → Colors, Border, Shadow
Day 3 → Typography
Day 4 → Spacing
Day 5 → Width & Height
Day 6 → Flexbox
Day 7 → CSS Grid
Day 8 → Responsive Design
Day 9 → Position + Display + Overflow
Day 10 → Border + Shadow + Ring + Effects
Day 11 → Background + Gradient
Day 12 → Image + Aspect Ratio + Object Fit
Day 13 → Buttons + Forms
Day 14 → Landing Page
```

এখন এগুলো একসাথে ব্যবহার করব।

---

## 2️⃣ আজকের Project

আমরা একটি E-commerce product landing page বানাব।

ধরি আমাদের brand:

#### 🛍️ TechStore

Structure:

```text
TechStore
│
├── Navbar
│
├── Hero
│
├── Categories
│
├── Products
│
├── CTA
│
└── Footer
```

---

## 3️⃣ Project Folder Structure

React project-এ:

```text
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Categories.jsx
│   ├── ProductCard.jsx
│   ├── Products.jsx
│   ├── CTA.jsx
│   └── Footer.jsx
│
├── data/
│   └── products.js
│
├── App.jsx
└── main.jsx
```

এটি একটি ভালো habit:

> **একটি বড় component-এর মধ্যে সব UI না লিখে ছোট reusable component তৈরি করা।**

---

## 4️⃣ Navbar

```jsx
function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        <a
          href="##"
          className="text-2xl font-bold text-blue-600"
        >
          TechStore
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="##"
            className="text-gray-600 transition hover:text-blue-600"
          >
            Home
          </a>

          <a
            href="##products"
            className="text-gray-600 transition hover:text-blue-600"
          >
            Products
          </a>

          <a
            href="##categories"
            className="text-gray-600 transition hover:text-blue-600"
          >
            Categories
          </a>

          <button
            className="
              rounded-lg
              bg-blue-600
              px-5
              py-2.5
              font-semibold
              text-white
              transition
              hover:bg-blue-700
            "
          >
            Login
          </button>
        </div>

        <button className="rounded-lg border px-3 py-2 md:hidden">
          ☰
        </button>

      </div>
    </nav>
  );
}

export default Navbar;
```

###### এখানে Revision হলো:

```text
flex
justify-between
items-center
max-w-7xl
mx-auto
px-4
border
hover
transition
md:hidden
hidden md:flex
```

---

## 5️⃣ Hero Section

এবার সবচেয়ে গুরুত্বপূর্ণ অংশ।

```jsx
function Hero() {
  return (
    <section className="bg-gray-50">
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          grid-cols-1
          items-center
          gap-12
          px-4
          py-20
          sm:px-6
          md:grid-cols-2
          lg:px-8
          lg:py-28
        "
      >

        <div>
          <span
            className="
              inline-block
              rounded-full
              bg-blue-100
              px-4
              py-2
              text-sm
              font-semibold
              text-blue-700
            "
          >
            New Collection
          </span>

          <h1
            className="
              mt-6
              text-4xl
              font-bold
              leading-tight
              text-gray-900
              sm:text-5xl
              lg:text-6xl
            "
          >
            Technology That
            <span className="text-blue-600">
              {" "}Makes Life Better
            </span>
          </h1>

          <p
            className="
              mt-6
              max-w-xl
              text-lg
              leading-8
              text-gray-600
            "
          >
            Discover high-quality electronics and smart
            technology products at the best prices.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            <button
              className="
                rounded-lg
                bg-blue-600
                px-6
                py-3
                font-semibold
                text-white
                shadow-md
                transition
                hover:bg-blue-700
                hover:shadow-lg
              "
            >
              Shop Now
            </button>

            <button
              className="
                rounded-lg
                border
                border-gray-300
                px-6
                py-3
                font-semibold
                text-gray-700
                transition
                hover:bg-gray-100
              "
            >
              Explore Products
            </button>

          </div>
        </div>

        <div className="aspect-square overflow-hidden rounded-3xl bg-blue-100">
          <div className="flex h-full items-center justify-center">
            <span className="text-8xl">
              💻
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
```

---

## 6️⃣ Categories Section

```jsx
function Categories() {
  const categories = [
    {
      icon: "💻",
      name: "Laptops",
    },
    {
      icon: "📱",
      name: "Smartphones",
    },
    {
      icon: "🎧",
      name: "Headphones",
    },
    {
      icon: "⌚",
      name: "Smart Watches",
    },
  ];

  return (
    <section id="categories" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Shop By Category
          </h2>

          <p className="mt-3 text-gray-600">
            Find the right technology for your needs.
          </p>
        </div>

        <div
          className="
            mt-10
            grid
            grid-cols-2
            gap-4
            md:grid-cols-4
          "
        >
          {categories.map((category) => (
            <div
              key={category.name}
              className="
                rounded-2xl
                border
                border-gray-200
                p-6
                text-center
                transition
                hover:-translate-y-1
                hover:border-blue-300
                hover:shadow-lg
              "
            >
              <div className="text-5xl">
                {category.icon}
              </div>

              <h3 className="mt-4 font-semibold text-gray-800">
                {category.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Categories;
```

---

## 7️⃣ Product Data

এবার hard-code না করে আলাদা data তৈরি করব।

###### `products.js`

```js
export const products = [
  {
    id: 1,
    name: "Wireless Headphone",
    description: "Premium wireless headphone",
    price: 59,
    oldPrice: 79,
    image: "/images/headphone.jpg",
    badge: "Sale",
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Modern smart watch",
    price: 89,
    oldPrice: 109,
    image: "/images/watch.jpg",
    badge: "New",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    description: "High performance gaming mouse",
    price: 39,
    oldPrice: 49,
    image: "/images/mouse.jpg",
    badge: "Sale",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    description: "RGB mechanical keyboard",
    price: 79,
    oldPrice: 99,
    image: "/images/keyboard.jpg",
    badge: "New",
  },
];
```

---

## 8️⃣ Reusable ProductCard

এটি খুব গুরুত্বপূর্ণ।

আমরা একটি Product Card একবার তৈরি করব।

```jsx
function ProductCard({ product }) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white
        shadow-sm
        transition
        hover:-translate-y-1
        hover:shadow-xl
      "
    >

      {/* Image */}
      <div className="group relative aspect-square overflow-hidden bg-gray-100">

        <img
          src={product.image}
          alt={product.name}
          className="
            h-full
            w-full
            object-cover
            transition
            duration-300
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
          {product.badge}
        </span>

        {/* Favorite */}
        <button
          className="
            absolute
            right-3
            top-3
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-white
            shadow-md
            transition
            hover:bg-gray-100
          "
        >
          ♥
        </button>

      </div>

      {/* Content */}
      <div className="p-5">

        <h3 className="text-lg font-bold text-gray-900">
          {product.name}
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between">

          <div>
            <span className="text-xl font-bold text-gray-900">
              ${product.price}
            </span>

            <span className="ml-2 text-sm text-gray-400 line-through">
              ${product.oldPrice}
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
              hover:bg-blue-700
            "
          >
            Buy
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;
```

---

## 9️⃣ Products Section

এখন আমাদের reusable `ProductCard` ব্যবহার করব।

```jsx
import { products } from "../data/products";
import ProductCard from "./ProductCard";

function Products() {
  return (
    <section id="products" className="bg-gray-50 py-20">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex items-end justify-between">

          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Products
            </h2>

            <p className="mt-3 text-gray-600">
              Our most popular products.
            </p>
          </div>

          <a
            href="##"
            className="
              hidden
              font-semibold
              text-blue-600
              hover:text-blue-700
              sm:block
            "
          >
            View All →
          </a>

        </div>

        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>

    </section>
  );
}

export default Products;
```

---

## 🔟 এই একটি ProductCard-এ কতগুলো Lesson ব্যবহার হয়েছে?

খুব ভালোভাবে লক্ষ্য করো:

```text id="m2k44e"
Day 2
 ↓
Color / Border / Shadow

Day 3
 ↓
Typography

Day 4
 ↓
Padding / Margin / Gap

Day 5
 ↓
Width / Height

Day 6
 ↓
Flexbox

Day 7
 ↓
Grid

Day 8
 ↓
Responsive

Day 9
 ↓
Relative / Absolute / Overflow

Day 10
 ↓
Border / Shadow / Transition

Day 12
 ↓
Aspect Ratio / Object Fit

Day 13
 ↓
Button / Hover
```

🔥 অর্থাৎ একটি বাস্তব component-এর মধ্যে **অনেকগুলো Tailwind concept একসাথে কাজ করছে।**

---

## 1️⃣1️⃣ CTA Section

```jsx
function CTA() {
  return (
    <section className="px-4 py-20">

      <div
        className="
          mx-auto
          max-w-7xl
          overflow-hidden
          rounded-3xl
          bg-blue-600
          px-6
          py-16
          text-center
          text-white
          sm:px-12
        "
      >

        <h2 className="text-3xl font-bold md:text-4xl">
          Ready to Upgrade Your Technology?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-blue-100">
          Discover our latest products and find the perfect
          technology for your lifestyle.
        </p>

        <button
          className="
            mt-8
            rounded-lg
            bg-white
            px-6
            py-3
            font-semibold
            text-blue-600
            shadow
            transition
            hover:bg-gray-100
          "
        >
          Shop Now
        </button>

      </div>

    </section>
  );
}

export default CTA;
```

---

## 1️⃣2️⃣ Footer

```jsx
function Footer() {
  return (
    <footer className="border-t bg-gray-900 text-white">

      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          gap-4
          px-4
          py-8
          md:flex-row
          md:items-center
          md:justify-between
        "
      >

        <p className="text-gray-400">
          © 2026 TechStore. All rights reserved.
        </p>

        <div className="flex gap-6">

          <a
            href="##"
            className="text-gray-400 hover:text-white"
          >
            Privacy
          </a>

          <a
            href="##"
            className="text-gray-400 hover:text-white"
          >
            Terms
          </a>

          <a
            href="##"
            className="text-gray-400 hover:text-white"
          >
            Contact
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
```

---

## 1️⃣3️⃣ App.jsx

সব component এক জায়গায়:

```jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Products />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
```

---

## 🧩 পুরো Architecture

এখন তোমার application দেখতে হবে:

```text
                    App
                     │
        ┌────────────┼────────────┐
        ↓            ↓            ↓
     Navbar        Main         Footer
                    │
          ┌─────────┼─────────┐
          ↓         ↓         ↓
        Hero    Categories  Products
                              │
                       ProductCard
                              │
                        Product Data
          ↓
         CTA
```

এটাই **component-based thinking**।

---

## 📱 Responsive Layout

আমাদের Product Grid:

```jsx
className="
  grid
  grid-cols-1
  sm:grid-cols-2
  lg:grid-cols-4
  gap-6
"
```

ফলে:

###### 📱 Mobile

```text
┌──────────┐
│ Product  │
├──────────┤
│ Product  │
├──────────┤
│ Product  │
└──────────┘
```

###### 📱 Tablet

```text
┌──────────┬──────────┐
│ Product  │ Product  │
├──────────┼──────────┤
│ Product  │ Product  │
└──────────┴──────────┘
```

###### 💻 Desktop

```text
┌────────┬────────┬────────┬────────┐
│   P1   │   P2   │   P3   │   P4   │
└────────┴────────┴────────┴────────┘
```

---

## 🧠 আজকের সবচেয়ে গুরুত্বপূর্ণ বিষয়

আজ থেকে যখন কোনো UI দেখবে, সরাসরি code লেখা শুরু করবে না।

প্রথমে চিন্তা করবে:

###### Step 1 — Structure

```text
Navbar
Hero
Section
Cards
CTA
Footer
```

###### Step 2 — Layout

```text
Flex নাকি Grid?
```

###### Step 3 — Responsive

```text
Mobile → Tablet → Desktop
```

###### Step 4 — Spacing

```text
padding
margin
gap
```

###### Step 5 — Typography

```text
font-size
font-weight
line-height
```

###### Step 6 — Visual

```text
color
border
shadow
rounded
background
```

###### Step 7 — Interaction

```text
hover
focus
active
transition
```

###### Step 8 — Componentization

```text
Navbar
Hero
Card
Button
Footer
```

এভাবে চিন্তা করতে পারলে Tailwind-এর অনেক class মুখস্থ করার প্রয়োজন হবে না।

---

## 📝 Day 15 Homework — অবশ্যই করবে

আজকের project **copy-paste করে শেষ করবে না**।

নিজের হাতে একটি নতুন project তৈরি করো:

#### 🛒 “FreshMart E-commerce”

Sections:

```text
1. Navbar
2. Hero
3. Categories
4. Featured Products
5. Discount Banner
6. CTA
7. Footer
```

###### Product Card-এ থাকবে:

```text
┌─────────────────────┐
│       Product       │
│     [Sale]    ♡     │
├─────────────────────┤
│ Product Name        │
│ Description         │
│                     │
│ $50    $70   [Buy]  │
└─────────────────────┘
```

###### অবশ্যই ব্যবহার করবে:

* `grid`
* `flex`
* `responsive`
* `relative`
* `absolute`
* `aspect-square`
* `object-cover`
* `overflow-hidden`
* `hover`
* `transition`
* `shadow`
* `border`
* `rounded`
* `max-w`
* `mx-auto`

---

## 🧪 Self Test

নিজেকে এই ১০টি প্রশ্ন করো:

**1.** `relative` কেন ব্যবহার করি?

**2.** `absolute` কোন element-এর reference নেয়?

**3.** `flex` এবং `grid` কখন ব্যবহার করবে?

**4.** `object-cover` এবং `object-contain`-এর পার্থক্য কী?

**5.** `aspect-square` কেন ব্যবহার করব?

**6.** `hover:` কী করে?

**7.** `focus:ring-2` কোথায় ব্যবহার করা হয়?

**8.** `max-w-7xl mx-auto` কেন ব্যবহার করি?

**9.** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` কী করে?

**10.** একই Product Card বারবার না লিখে React-এ কীভাবে reusable করবে?

যদি এই প্রশ্নগুলোর উত্তর নিজের ভাষায় দিতে পারো, তাহলে Day 1–15-এর foundation বেশ ভালোভাবে তৈরি হয়েছে। 💪

---

## 📋 Day 1–15 Master Cheat Sheet

```text
LAYOUT
────────────────────────
flex
grid
flex-col
flex-row
justify-between
items-center
gap-*
grid-cols-*


SPACING
────────────────────────
p-*
px-*
py-*
m-*
mx-auto
mt-*
mb-*
space-y-*


SIZE
────────────────────────
w-full
h-full
min-h-screen
max-w-*
aspect-square
aspect-video


POSITION
────────────────────────
relative
absolute
fixed
sticky
top-*
right-*
bottom-*
left-*
inset-*


RESPONSIVE
────────────────────────
sm:
md:
lg:
xl:
2xl:


IMAGE
────────────────────────
object-cover
object-contain
object-center
overflow-hidden


VISUAL
────────────────────────
bg-*
text-*
border
rounded-*
shadow-*
ring-*


INTERACTION
────────────────────────
hover:
focus:
active:
disabled:
transition
duration-*


TYPOGRAPHY
────────────────────────
text-*
font-*
leading-*
tracking-*
text-center
text-left
```

---



