# Learn TailwinCSS
*Day By Day*

## 🎯 Tailwind CSS — Day 12

#### Images, Aspect Ratio & Object Fit

আজ আমরা Tailwind CSS-এর **Image Handling** শিখব। বিশেষ করে তুমি যেহেতু React.js/MERN developer, তাই আজকের বিষয়গুলো **E-commerce, Portfolio, Blog, Dashboard এবং Landing Page**-এ সরাসরি কাজে লাগবে।





## 1️⃣ Image-এর Basic Structure

সাধারণ HTML:

```html
<img src="/images/product.jpg" alt="Product" />
```

Tailwind:

```html
<img
  src="/images/product.jpg"
  alt="Product"
  class="h-64 w-full"
/>
```

এখানে:

```text
w-full → পুরো width
h-64   → নির্দিষ্ট height
```

কিন্তু একটি সমস্যা হতে পারে।

Image-এর original ratio যদি container-এর সাথে না মিলে, তাহলে image **stretch/distort** হতে পারে।

এখানেই `object-fit` কাজে আসে।

---

## 2️⃣ `object-cover`

সবচেয়ে গুরুত্বপূর্ণ image utility:

```html
class="object-cover"
```

উদাহরণ:

```html
<img
  src="/images/product.jpg"
  alt="Product"
  class="h-64 w-full object-cover"
/>
```

###### কী করে?

Image container-এর পুরো জায়গা cover করবে।

প্রয়োজনে image-এর কিছু অংশ crop হবে।

```text
Container
┌────────────────────────────┐
│       ┌────────────┐       │
│       │   IMAGE    │       │
│       │   CROPPED  │       │
│       └────────────┘       │
└────────────────────────────┘
```

###### কোথায় ব্যবহার করবে?

* Product images
* Hero images
* Blog thumbnails
* Profile cover
* Gallery

---

## 3️⃣ `object-contain`

```html
<img
  src="/images/product.png"
  class="h-64 w-full object-contain"
/>
```

এখানে image পুরোটা দেখা যাবে।

Image crop হবে না।

```text
┌────────────────────────────┐
│                            │
│       ┌──────────┐         │
│       │  IMAGE   │         │
│       └──────────┘         │
│                            │
└────────────────────────────┘
```

###### কোথায় ভালো?

বিশেষ করে:

* Product PNG
* Logo
* Shoes
* Electronics
* Product catalog

যেখানে পুরো product image দেখা গুরুত্বপূর্ণ।

---

## 4️⃣ `object-fill`

```html
class="object-fill"
```

Image container-এর width/height অনুযায়ী stretch হবে।

ফলে image distorted হতে পারে।

তাই সাধারণ UI-তে `object-cover` বা `object-contain` বেশি ব্যবহার করবে।

---

## 5️⃣ `object-none`

```html
class="object-none"
```

Image নিজস্ব size বজায় রাখে এবং container-এর মধ্যে object-fit অনুযায়ী stretch/crop করে না।

এটি সাধারণ product card-এর জন্য খুব বেশি প্রয়োজন হয় না।

---

## 6️⃣ `object-center`

Image-এর positioning:

```html
class="object-center"
```

এটি default-এর মতো center positioning দেয়।

আরও আছে:

```text
object-top
object-bottom
object-left
object-right

object-left-top
object-right-top
object-left-bottom
object-right-bottom
```

---

## 7️⃣ `object-cover` + Position

ধরো ছবির গুরুত্বপূর্ণ অংশ উপরের দিকে।

তাহলে:

```html
<img
  src="/images/person.jpg"
  class="h-80 w-full object-cover object-top"
/>
```

এখানে:

```text
object-cover → image cover করবে
object-top   → উপরের অংশকে priority দেবে
```

---

## 8️⃣ Aspect Ratio কী?

ধরো একটি video:

```text
16 : 9
```

অর্থাৎ:

```text
Width = 16
Height = 9
```

Tailwind-এ:

```html
aspect-video
```

ব্যবহার করতে পারো।

```html
<div class="aspect-video">
  Video
</div>
```

---

## 9️⃣ `aspect-square`

একটি perfect square:

```html
<div class="aspect-square">
  Image
</div>
```

অর্থাৎ:

```text
Width = Height
```

Product thumbnail বা profile image-এর জন্য useful।

---

## 🔟 `aspect-video`

```html
<div class="aspect-video">
  Video Thumbnail
</div>
```

এটি সাধারণত 16:9 ধরনের video layout-এর জন্য ব্যবহৃত হয়।

YouTube thumbnail-এর মতো:

```text
┌──────────────────────────┐
│                          │
│      VIDEO THUMBNAIL     │
│                          │
└──────────────────────────┘
```

---

## 1️⃣1️⃣ Custom Aspect Ratio

নিজের ratio দিতে পারো:

```html
<div class="aspect-[4/3]">
```

অথবা:

```html
<div class="aspect-[3/2]">
```

অথবা:

```html
<div class="aspect-[21/9]">
```

###### Example

```html
<div class="aspect-[4/3] overflow-hidden rounded-xl">
  <img
    src="/images/product.jpg"
    alt="Product"
    class="h-full w-full object-cover"
  />
</div>
```

---

## 1️⃣2️⃣ কেন Aspect Ratio গুরুত্বপূর্ণ?

ধরো তোমার E-commerce site-এ ১০টি product আছে।

যদি প্রতিটি image-এর height আলাদা হয়:

```text
Product 1 ┌────────┐
          │        │
          │        │
          └────────┘

Product 2 ┌──────────────┐
          │              │
          └──────────────┘

Product 3 ┌───────┐
          │       │
          │       │
          │       │
          └───────┘
```

UI অসমান দেখাবে।

কিন্তু:

```html
aspect-square
```

ব্যবহার করলে:

```text
┌─────────┐  ┌─────────┐  ┌─────────┐
│         │  │         │  │         │
│ Product │  │ Product │  │ Product │
│         │  │         │  │         │
└─────────┘  └─────────┘  └─────────┘
```

সব image একই ratio-এর হবে।

---

## 1️⃣3️⃣ Best Product Image Pattern ⭐

এটি খুব ভালোভাবে মনে রাখো:

```html
<div class="aspect-square overflow-hidden rounded-xl">
  <img
    src="/images/product.jpg"
    alt="Product"
    class="h-full w-full object-cover"
  />
</div>
```

এখানে:

```text
aspect-square
      ↓
একই ratio
      ↓
overflow-hidden
      ↓
বাইরের অংশ hide
      ↓
object-cover
      ↓
image পুরো area cover
```

---

## 1️⃣4️⃣ Hover করলে Image Zoom

E-commerce site-এ খুব সুন্দর effect:

```html
<div class="group aspect-square overflow-hidden rounded-xl">
  <img
    src="/images/product.jpg"
    alt="Product"
    class="h-full w-full object-cover transition duration-300 group-hover:scale-110"
  />
</div>
```

এখানে নতুন একটি concept:

```text
group
group-hover:*
```

Parent:

```html
class="group"
```

Child:

```html
group-hover:scale-110
```

মানে parent-এর উপর hover করলে child image scale হবে।

---

## 1️⃣5️⃣ Image Rounded

```html
<img
  src="/images/profile.jpg"
  class="rounded-full"
/>
```

Profile image:

```html
<div class="h-20 w-20 overflow-hidden rounded-full">
  <img
    src="/images/profile.jpg"
    class="h-full w-full object-cover"
    alt="Profile"
  />
</div>
```

এটি একটি খুব common pattern।

---

## 1️⃣6️⃣ Responsive Image

Mobile:

```text
┌──────────────┐
│    Image     │
└──────────────┘
```

Desktop:

```text
┌───────────────────────────────┐
│             Image             │
└───────────────────────────────┘
```

Tailwind:

```html
<img
  src="/images/hero.jpg"
  alt="Hero"
  class="h-48 w-full object-cover md:h-72 lg:h-96"
/>
```

এখানে:

```text
Mobile → h-48
Tablet → h-72
Desktop → h-96
```

---

## 1️⃣7️⃣ Responsive Aspect Ratio

এভাবেও করতে পারো:

```html
<div class="aspect-square md:aspect-video">
  <img
    src="/images/hero.jpg"
    class="h-full w-full object-cover"
    alt="Hero"
  />
</div>
```

অর্থাৎ:

```text
Mobile
aspect-square

Desktop
aspect-video
```

---

## 1️⃣8️⃣ E-commerce Product Card 🚀

এখন একটি complete product card তৈরি করি।

```html
<div class="overflow-hidden rounded-2xl border bg-white shadow-sm">

  <!-- Image -->
  <div class="group aspect-square overflow-hidden">
    <img
      src="/images/headphone.jpg"
      alt="Wireless Headphone"
      class="h-full w-full object-cover transition duration-300 group-hover:scale-110"
    />
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

      <span class="text-2xl font-bold">
        $59
      </span>

      <button class="rounded-lg bg-blue-600 px-4 py-2 text-white">
        Buy
      </button>

    </div>

  </div>

</div>
```

এখানে আমরা আগের দিনের অনেক concept ব্যবহার করছি:

```text
border
rounded
shadow
overflow
aspect
object-cover
transition
hover
flex
padding
```

এভাবেই ধীরে ধীরে Tailwind-এর utilityগুলো একসাথে ব্যবহার করতে শিখতে হবে।

---

## 1️⃣9️⃣ React Version

তুমি যেহেতু React developer, JSX version-টাও practice করবে:

```jsx
function ProductCard() {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
      
      <div className="group aspect-square overflow-hidden">
        <img
          src="/images/headphone.jpg"
          alt="Wireless Headphone"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
        />
      </div>

      <div className="p-5">
        <h2 className="text-xl font-bold">
          Wireless Headphone
        </h2>

        <p className="mt-2 text-gray-500">
          Premium wireless headphone.
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold">
            $59
          </span>

          <button className="rounded-lg bg-blue-600 px-4 py-2 text-white">
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

## 2️⃣0️⃣ Product Grid

এখন একাধিক product:

```jsx
function ProductGrid() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphone",
      price: 59,
      image: "/images/headphone.jpg",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 89,
      image: "/images/watch.jpg",
    },
    {
      id: 3,
      name: "Running Shoes",
      price: 75,
      image: "/images/shoes.jpg",
    },
    {
      id: 4,
      name: "Backpack",
      price: 45,
      image: "/images/bag.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="overflow-hidden rounded-2xl border bg-white shadow-sm"
        >
          <div className="group aspect-square overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
            />
          </div>

          <div className="p-5">
            <h2 className="font-bold">
              {product.name}
            </h2>

            <p className="mt-2 text-xl font-bold">
              ${product.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
```

এখানে আগের Day 7 এবং Day 8-এর:

```text
Grid
Responsive
```

এর সাথে আজকের:

```text
Aspect Ratio
Object Fit
Image
```

combine হয়েছে।

---

## 🧠 2️⃣1️⃣ `object-cover` vs `object-contain`

এটা খুব ভালোভাবে বুঝে রাখো।

| বিষয়                | `object-cover` | `object-contain` |
| ------------------- | -------------- | ---------------- |
| পুরো container fill | ✅              | ❌                |
| Image crop হতে পারে | ✅              | ❌                |
| Image distortion    | সাধারণত নয়     | সাধারণত নয়       |
| Product card        | ⭐⭐⭐⭐⭐          | ⭐⭐⭐⭐             |
| Logo                | ⭐⭐             | ⭐⭐⭐⭐⭐            |
| Hero image          | ⭐⭐⭐⭐⭐          | ⭐⭐               |
| Product PNG         | ⭐⭐⭐            | ⭐⭐⭐⭐⭐            |

###### সহজ নিয়ম:

**Photo / background-like image → `object-cover`**

**Product / logo / transparent image → `object-contain`**

---

## 📌 2️⃣2️⃣ আজকের গুরুত্বপূর্ণ Classes

```text
IMAGE
────────────────────

w-full
h-full
h-64


OBJECT
────────────────────

object-cover
object-contain
object-fill
object-none

object-center
object-top
object-bottom
object-left
object-right


ASPECT
────────────────────

aspect-square
aspect-video
aspect-auto
aspect-[4/3]
aspect-[3/2]
aspect-[21/9]


IMAGE EFFECT
────────────────────

overflow-hidden
rounded-xl
transition
duration-300

scale-110
group
group-hover:scale-110
```

---

## 🧪 আজকের Homework

#### Task 1 — Profile Image

একটি circular profile component বানাও:

```text
      _________
    /           \
   |    IMAGE    |
    \___________/
    
   Ariful Islam
   Web Developer
```

Requirements:

```text
✓ rounded-full
✓ object-cover
✓ fixed width/height
✓ border
✓ shadow
```

---

#### Task 2 — Product Card

একটি Product Card তৈরি করো:

```text
┌─────────────────────┐
│                     │
│       PRODUCT       │
│        IMAGE        │
│                     │
├─────────────────────┤
│ Wireless Headphone  │
│ Premium Quality     │
│                     │
│ $59       [ Buy ]   │
└─────────────────────┘
```

Requirements:

```text
✓ aspect-square
✓ object-cover
✓ overflow-hidden
✓ rounded
✓ border
✓ shadow
✓ hover image zoom
```

---

## 🚀 Day 12 Challenge

একটি **E-commerce Product Grid** তৈরি করো।

Requirements:

```text
Mobile
1 column

Tablet
2 columns

Desktop
4 columns
```

Grid:

```html
<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
```

প্রতিটি card-এ থাকবে:

```text
✓ Product Image
✓ Product Name
✓ Description
✓ Price
✓ Buy Button
✓ aspect-square
✓ object-cover
✓ hover zoom
✓ border
✓ shadow
```

---

## 🎯 Day 12 Key Takeaway

আজকের সবচেয়ে গুরুত্বপূর্ণ ৬টি concept:

```text
1. object-cover
2. object-contain
3. object-center
4. aspect-square
5. aspect-video
6. group + group-hover
```

বিশেষ করে এই pattern মুখস্থ করে ফেলো:

```html
<div class="group aspect-square overflow-hidden rounded-xl">
  <img
    src="/image.jpg"
    alt=""
    class="h-full w-full object-cover transition duration-300 group-hover:scale-110"
  />
</div>
```

এই ছোট pattern দিয়েই তুমি **modern product card, gallery, portfolio card এবং অনেক ধরনের image-based UI** তৈরি করতে পারবে।


