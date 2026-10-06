# Learn Tailwind css
**_Day By Day_**

## Tailwind CSS শেখার রোডম্যাপ — Day 28

Advanced E-commerce UI



আজ আমরা Tailwind CSS ব্যবহার করে একটি আধুনিক E-commerce Shopping Cart, Checkout এবং Order Summary UI তৈরি করা শিখব।

এটি আপনার চলমান AI-Powered E-commerce Management System-এর Frontend তৈরিতেও কাজে লাগবে।



## ১. Shopping Cart-এর UI Architecture

একটি E-commerce Shopping Cart-এ সাধারণত নিচের অংশগুলো থাকে।

![Tailwind CSS Shopping Cart | Pagedone](https://images.openai.com/static-rsc-4/kaEtTTp-TBMqkEPIDHrrR5QqPHRBXp6WjjzatRbWxaaOyI1yqDGbDJ9Phdc2x7WzELBl6JYpVDI9brEzNGPtIUiN8Z1M1xvISFg52v7P5acpvWA5ErnP5cr6_uk5H9tJki0zKP8ttDKcglLN0k3hgjkbLNZl1rTADbCNS8S4rDI?purpose=inline)

Shopping Cart

কার্টে থাকা পণ্যের ছবি, নাম, মূল্য, পরিমাণ এবং Remove Button।

![Checkout | How-tos | Core API](https://images.openai.com/static-rsc-4/k52jGtJdAf5kEf7rtVb_tNfOiEIdDD3mVxkKS_k9G7PdkWlCs-aMnN68wX3K1oit4TWJeTRm8LRwIGsB58QegBzuSxbwuUhibWEy3KVdl7J_wB1mkjCgshDi72y4nVlt4E0YlfnoI95o3OY-KIRT4C-834NhJGsbEj5qaCq5zvU?purpose=inline)

Order Summary

Subtotal, Shipping, Discount, Tax এবং Total Price।

![Checkout Flow by Dominik Sklyarov on Dribbble](https://images.openai.com/static-rsc-4/Q9mmnakyUwzYao83jlavfF2iIKOCAvzWXiT60C3pmA2Bb3c5P1jdsZMsmntVPQOjbn1KGbbZ8mAlb164OPfo52S8aMGCkADnzivGQUYK7qBorgYQEciqiG01QDYpc9JjLoYHESJdTPnWg5xu8QAYzx1y29hR-QGcOOo6l05pZ04?purpose=inline)

Checkout Form

Customer Information, Shipping Address এবং Delivery Method।

![Getting Started with Stripe for Hong Kong](https://images.openai.com/static-rsc-4/ZmSsr_3vly218hDP11mPzjswf1E5_SaAJXHSMo6rvGsgffN3xWdGXdfw-iVsHkNJ9nEXoZKKrp1iuxQKpzfBNJILG48hF6pyK9959vjJfx-sMuw82ul05H5P6lJYLfvnR0fzoCsJSlWesoN5r1U5En8fGSFaAZChqCEowLXQdI8?purpose=inline)

Payment Method

Card Payment, Mobile Payment অথবা Cash on Delivery-এর মতো অপশন।

একটি সাধারণ Shopping Cart-এর Desktop Layout হবে:

```
+-----------------------------------------------+
|                 Shopping Cart                 |
+-----------------------------------------------+
|                                               |
|  Cart Items                Order Summary      |
|  +-------------------+    +----------------+  |
|  | Product 1         |    | Subtotal       |  |
|  | Price | Quantity  |    | Shipping       |  |
|  +-------------------+    | Discount       |  |
|  | Product 2         |    | Tax            |  |
|  | Price | Quantity  |    | Total          |  |
|  +-------------------+    |                |  |
|                           | Checkout       |  |
|                           +----------------+  |
+-----------------------------------------------+
```

## ২. Shopping Cart Layout তৈরি

প্রথমে Cart Page-এর মূল Layout তৈরি করব।

JavaScript

```
function Cart() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]">
          <section className="space-y-4">
            {/* Cart Items */}
          </section>

          <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            {/* Order Summary */}
          </aside>
        </div>
      </div>
    </main>
  );
}
```

###### গুরুত্বপূর্ণ Tailwind ক্লাস

| ক্লাস                      | কাজ                           |
| -------------------------- | ----------------------------- |
| `min-h-screen`             | কমপক্ষে পুরো স্ক্রিনের উচ্চতা |
| `max-w-7xl`                | Content-এর সর্বোচ্চ প্রস্থ    |
| `mx-auto`                  | Horizontal Center Alignment   |
| `grid-cols-1`              | একটি Column                   |
| `lg:grid-cols-[1fr_360px]` | Desktop-এ দুটি Column         |
| `h-fit`                    | Content অনুযায়ী Height        |
| `rounded-2xl`              | বড় Rounded Corner             |
| `shadow-sm`                | হালকা Shadow                  |

গুরুত্বপূর্ণ: `lg:grid-cols-[1fr_360px]` ব্যবহার করে বাম পাশের অংশকে অবশিষ্ট জায়গা এবং ডান পাশের Order Summary-কে 360px দেওয়া হয়েছে।

## ৩. Cart Item Component তৈরি

প্রতিটি Cart Item-এর মধ্যে থাকবে:

* Product Image

* Product Name

* Product Price

* Quantity Control

* Remove Button

#### Cart Item-এর UI

![White headphones isolated on white background](https://images.openai.com/static-rsc-4/d1cc3QkDW5sjEJwZqaVPZB20yZ20wo9WaoVSYE_V6J2yru9-QchRjxGa-IxV-mtDKFaDHmSs-W27Io-4etpgBdJxUfMz2tHl1MlphxeSKPgm_aQVk34pc5lFtCq_icZmTpZ-m5yJHB14y98PbybeJqsecvFvwdpj42RpsYS_wPzzc7Hu3FY9PEB4P4tG24Al?purpose=inline)

Wireless Headphones

SKU: WH-101

৳2,500

−

2

*

এটি Cart Item-এর একটি নমুনা UI।

###### CartItem.jsx

JavaScript

```
function CartItem({ product, onRemove }) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-4 sm:flex-row sm:items-center dark:border-gray-800 dark:bg-gray-900">
      <img
        src={product.image}
        alt={product.name}
        className="h-24 w-24 rounded-lg object-cover"
      />

      <div className="min-w-0 flex-1">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          {product.name}
        </h3>

        <p className="mt-1 text-lg font-bold text-indigo-600">
          ৳{product.price.toLocaleString("en-US")}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center rounded-lg border border-gray-300 dark:border-gray-700">
          <button
            type="button"
            aria-label="Decrease quantity"
            className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            −
          </button>

          <span className="px-3 font-medium">
            {product.quantity}
          </span>

          <button
            type="button"
            aria-label="Increase quantity"
            className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            +
          </button>
        </div>

        <button
          type="button"
          onClick={() => onRemove(product.id)}
          aria-label={`Remove ${product.name}`}
          className="rounded-lg p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-950"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
```

এখানে Quantity Button-এর UI তৈরি করা হয়েছে। বাস্তবে এগুলোকে React State বা Cart Management Logic-এর সঙ্গে সংযুক্ত করতে হবে।

## ৪. Quantity Control-এর React Logic

এবার React ব্যবহার করে Quantity বাড়ানো ও কমানোর একটি উদাহরণ দেখি।

JavaScript

```
import { useState } from "react";

function QuantityControl() {
  const [quantity, setQuantity] = useState(1);

  const decrease = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const increase = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="flex items-center rounded-lg border border-gray-300 dark:border-gray-700">
      <button
        type="button"
        onClick={decrease}
        disabled={quantity <= 1}
        className="px-3 py-2 disabled:cursor-not-allowed disabled:opacity-40"
      >
        −
      </button>

      <span className="min-w-10 text-center font-medium">
        {quantity}
      </span>

      <button
        type="button"
        onClick={increase}
        className="px-3 py-2"
      >
        +
      </button>
    </div>
  );
}
```

###### আজকের নতুন Tailwind ক্লাস

| ক্লাস                         | কাজ                             |
| ----------------------------- | ------------------------------- |
| `disabled:opacity-40`         | Disabled অবস্থায় স্বচ্ছতা কমায়  |
| `disabled:cursor-not-allowed` | Disabled অবস্থায় নিষিদ্ধ Cursor |
| `min-w-10`                    | সর্বনিম্ন প্রস্থ                |
| `text-center`                 | Text Center Alignment           |
| `hover:bg-gray-100`           | Hover করলে Background পরিবর্তন  |

এখানে `Math.max(1, prev - 1)` নিশ্চিত করে যে Quantity কখনো ১-এর নিচে নামবে না।

বাস্তব অ্যাপ্লিকেশনে সর্বোচ্চ Quantity-ও Inventory অনুযায়ী সীমাবদ্ধ করতে হবে।

## ৫. Order Summary তৈরি

Order Summary-তে সাধারণত নিচের তথ্য থাকে।

| বিষয়     | উদাহরণ |
| -------- | ------ |
| Subtotal | ৳5,000 |
| Shipping | ৳100   |
| Discount | −৳500  |
| Tax      | ৳0     |
| Total    | ৳4,600 |

এগুলো শুধু শেখার জন্য উদাহরণমূলক মূল্য।

###### CartSummary.jsx

JavaScript

```
function CartSummary() {
  const subtotal = 5000;
  const shipping = 100;
  const discount = 500;
  const tax = 0;

  const total = subtotal + shipping - discount + tax;

  return (
    <div className="space-y-5 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">
        Order Summary
      </h2>

      <div className="space-y-3 border-b border-gray-200 pb-4 text-sm dark:border-gray-800">
        <div className="flex justify-between">
          <span className="text-gray-500">Subtotal</span>
          <span className="font-medium">৳5,000</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Shipping</span>
          <span className="font-medium">৳100</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Discount</span>
          <span className="font-medium text-green-600">
            −৳500
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Tax</span>
          <span className="font-medium">৳0</span>
        </div>
      </div>

      <div className="flex justify-between text-lg font-bold">
        <span>Total</span>
        <span>৳{total.toLocaleString("en-US")}</span>
      </div>

      <button
        type="button"
        className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}
```

###### গুরুত্বপূর্ণ Tailwind ক্লাস

* `space-y-5`: প্রতিটি Child Element-এর মাঝে Vertical Space।

* `border-b`: নিচে Border।

* `pb-4`: নিচে Padding।

* `flex justify-between`: দুই পাশে Content সাজানো।

* `focus-visible:outline-2`: Keyboard Focus-এর জন্য Outline।

* `transition`: পরিবর্তনের সময় Transition Effect।

Backend Architecture-এর জন্য গুরুত্বপূর্ণ

Frontend-এ Order Summary দেখানো হলেও চূড়ান্ত মূল্য Backend থেকে পুনরায় হিসাব করতে হবে। Client-এর পাঠানো Total Price বিশ্বাস করে Order তৈরি করা নিরাপদ নয়।

## ৬. Promo Code UI তৈরি

অনেক E-commerce ওয়েবসাইটে Promo Code বা Coupon Code ব্যবহারের সুবিধা থাকে।

JavaScript

```
function PromoCode() {
  return (
    <div className="space-y-3">
      <label
        htmlFor="coupon"
        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        Promo Code
      </label>

      <div className="flex gap-2">
        <input
          id="coupon"
          type="text"
          placeholder="Enter coupon code"
          className="min-w-0 flex-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-gray-700 dark:bg-gray-800"
        />

        <button
          type="button"
          className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-700 dark:bg-indigo-600 dark:hover:bg-indigo-500"
        >
          Apply
        </button>
      </div>

      <p className="text-sm text-green-600">
        Coupon applied successfully.
      </p>
    </div>
  );
}
```

বাস্তব অ্যাপ্লিকেশনে Coupon Code যাচাই করার জন্য Backend API প্রয়োজন হবে। সফল হলে Discount পুনরায় হিসাব করতে হবে। ভুল হলে Error Message দেখাতে হবে।

## ৭. Checkout Form তৈরি

Checkout Form-এ সাধারণত Customer-এর তথ্য ও Shipping Address নেওয়া হয়।

#### Checkout Form-এর নমুনা

First Name

Ariful

Last Name

Islam

Email Address

[example@email.com](mailto:example@email.com)

Street Address

House, Road, Area

City

Dhaka

Postal Code

1207

এটি শুধু Form Layout-এর নমুনা।

###### ShippingForm.jsx

JavaScript

```
function ShippingForm() {
  return (
    <form className="space-y-6 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Shipping Information
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Enter your delivery details.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-2 block text-sm font-medium">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-gray-700 dark:bg-gray-800"
          />
        </div>

        <div>
          <label htmlFor="lastName" className="mb-2 block text-sm font-medium">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-gray-700 dark:bg-gray-800"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-gray-700 dark:bg-gray-800"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="address" className="mb-2 block text-sm font-medium">
            Street Address
          </label>
          <textarea
            id="address"
            rows="3"
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-gray-700 dark:bg-gray-800"
          />
        </div>

        <div>
          <label htmlFor="city" className="mb-2 block text-sm font-medium">
            City
          </label>
          <input
            id="city"
            type="text"
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-gray-700 dark:bg-gray-800"
          />
        </div>

        <div>
          <label htmlFor="postalCode" className="mb-2 block text-sm font-medium">
            Postal Code
          </label>
          <input
            id="postalCode"
            type="text"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-gray-700 dark:bg-gray-800"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white hover:bg-indigo-700 sm:w-auto"
      >
        Continue
      </button>
    </form>
  );
}
```

###### Form-এর গুরুত্বপূর্ণ Responsive ক্লাস

| ক্লাস            | কাজ                                      |
| ---------------- | ---------------------------------------- |
| `grid-cols-1`    | Mobile-এ একটি Column                     |
| `md:grid-cols-2` | Medium Screen-এ দুটি Column              |
| `md:col-span-2`  | Medium Screen-এ দুটি Column জুড়ে         |
| `w-full`         | সম্পূর্ণ প্রস্থ                          |
| `sm:w-auto`      | Small Screen থেকে প্রয়োজন অনুযায়ী প্রস্থ |

মনে রাখবেন, Tailwind-এর `required` ক্লাস নয়; এটি HTML Attribute। এটি Browser-এর Native Validation সক্রিয় করে। জটিল Validation-এর জন্য আলাদা Logic প্রয়োজন।

## ৮. Payment Method UI

Checkout Page-এ বিভিন্ন Payment Method দেখানো যায়।

JavaScript

```
function PaymentMethod() {
  return (
    <div className="space-y-4 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
      <h2 className="text-xl font-bold">
        Payment Method
      </h2>

      <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-indigo-500 bg-indigo-50 p-4 dark:bg-indigo-950/30">
        <input
          type="radio"
          name="payment"
          value="card"
          defaultChecked
          className="accent-indigo-600"
        />
        <span className="font-medium">Credit / Debit Card</span>
      </label>

      <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 p-4 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">
        <input
          type="radio"
          name="payment"
          value="cod"
          className="accent-indigo-600"
        />
        <span className="font-medium">Cash on Delivery</span>
      </label>

      <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 p-4 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">
        <input
          type="radio"
          name="payment"
          value="mobile"
          className="accent-indigo-600"
        />
        <span className="font-medium">Mobile Payment</span>
      </label>
    </div>
  );
}
```

Payment Security

বাস্তব অ্যাপ্লিকেশনে কার্ডের নম্বর, CVV বা অন্যান্য সংবেদনশীল তথ্য নিজের Backend-এ সরাসরি সংরক্ষণ করবেন না। Stripe Elements বা নিরাপদ Payment Provider-এর অনুমোদিত পদ্ধতি ব্যবহার করুন। Payment সফল হয়েছে কি না, তা Backend-এ যাচাই করতে হবে।

## ৯. Responsive Design

Shopping Cart ও Checkout Page Mobile, Tablet এবং Desktop—সব ডিভাইসে ব্যবহারযোগ্য হতে হবে।

| Device  | Layout                             |
| ------- | ---------------------------------- |
| Mobile  | Cart এবং Summary একটির নিচে আরেকটি |
| Tablet  | প্রয়োজন অনুযায়ী এক বা দুই Column   |
| Desktop | Cart Items বামে, Summary ডানে      |

কিছু গুরুত্বপূর্ণ Responsive Pattern:

JavaScript

```
<div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px]">
  <div className="min-w-0">
    Cart Items
  </div>

  <aside className="h-fit lg:sticky lg:top-24">
    Order Summary
  </aside>
</div>
```

এখানে `lg:sticky lg:top-24` ব্যবহার করলে Desktop-এ স্ক্রল করার সময় Order Summary নির্দিষ্ট অবস্থানে থাকতে পারে। তবে Sticky কাজ করার জন্য Parent-এর Overflow ও Layout-ও সঠিক হতে হবে।

## ১০. Component Architecture

একটি বাস্তব E-commerce Cart ও Checkout-এর জন্য নিচের মতো Component Structure ব্যবহার করতে পারেন।

```
src/
├── components/
│   ├── cart/
│   │   ├── CartItem.jsx
│   │   ├── CartList.jsx
│   │   └── CartSummary.jsx
│   │
│   ├── checkout/
│   │   ├── ShippingForm.jsx
│   │   ├── PaymentMethod.jsx
│   │   └── OrderReview.jsx
│   │
│   └── ui/
│       ├── Button.jsx
│       └── FormInput.jsx
│
├── pages/
│   ├── Cart.jsx
│   └── Checkout.jsx
│
└── App.jsx
```

প্রতিটি Component-এর দায়িত্ব আলাদা রাখুন।

| Component       | দায়িত্ব                           |
| --------------- | --------------------------------- |
| `CartItem`      | একটি পণ্যের তথ্য ও Quantity UI    |
| `CartList`      | সব Cart Item প্রদর্শন             |
| `CartSummary`   | মূল্য ও Order Summary             |
| `ShippingForm`  | Delivery Address                  |
| `PaymentMethod` | Payment Option নির্বাচন           |
| `OrderReview`   | অর্ডার দেওয়ার আগে তথ্য পর্যালোচনা |
| `Cart`          | Cart Page-এর Layout               |
| `Checkout`      | Checkout Page-এর Layout           |

বাস্তব প্রজেক্টে Cart State একাধিক Component-এ প্রয়োজন হলে Context, Zustand অথবা Redux-এর মতো State Management Solution ব্যবহার করা যেতে পারে।

## ১১. আজকের এক ঘণ্টার Study Plan

#### Day 28 — Study Checklist

সম্পন্ন: 0 / 5

0%

Cart Layout (১০ মিনিট)

Grid এবং Responsive Layout তৈরি করুন।

Cart Item (১৫ মিনিট)

Product Image, Price, Quantity ও Remove UI তৈরি করুন।

Order Summary (১০ মিনিট)

Subtotal, Shipping, Discount ও Total UI তৈরি করুন।

Checkout Form (১৫ মিনিট)

Shipping Address ও Payment Method তৈরি করুন।

Practice & Revision (১০ মিনিট)

Responsive Design পরীক্ষা করুন এবং কোড রিভিশন দিন।

রিসেট

## ১২. Practical Assignment

আজকের প্রজেক্ট

## TechStore — Shopping Cart & Checkout

Tailwind CSS + React

![8 Web Design Goals To Select from](https://images.openai.com/static-rsc-4/FMUfIsUuFRX6QPIJBA64-9pykms8I-NqI4M945l1F63n2XuClSnkRQQz35a_U6fNxu7dQzVsbYxQR_hyKN3hO6n31vIpEeYt912SU01s7yDIic7_nYVVQnwpliTtq9ZAsFDAm6tif8VW-i66G5RC_pn_8LsAwyVW141e_J6GtKE?purpose=inline)

[uxpilot](https://uxpilot.ai/blogs/web-design-goals)

আপনার কাজ:

1. একটি Responsive Shopping Cart Page তৈরি করুন।

2. অন্তত তিনটি Product Cart-এ দেখান।

3. Quantity Increase ও Decrease-এর UI তৈরি করুন।

4. প্রতিটি Product-এর জন্য Remove Button রাখুন।

5. Order Summary-তে Subtotal, Shipping, Discount ও Total দেখান।

6. Promo Code Input যুক্ত করুন।

7. Shipping Information Form তৈরি করুন।

8. কমপক্ষে দুটি Payment Method দেখান।

9. Mobile, Tablet এবং Desktop-এ UI পরীক্ষা করুন।

অ্যাসাইনমেন্টের অতিরিক্ত শর্ত: Cart-এর মূল্য React State থেকে হিসাব করার চেষ্টা করুন। তবে বাস্তব Order তৈরি করার সময় Backend-এ পণ্যের মূল্য, Inventory, Discount ও Total পুনরায় যাচাই করতে হবে।

## ১৩. আজকের গুরুত্বপূর্ণ Tailwind CSS Cheat Sheet

| Utility                    | ব্যবহার                                |
| -------------------------- | -------------------------------------- |
| `grid-cols-1`              | একটি Grid Column                       |
| `lg:grid-cols-[1fr_360px]` | কাস্টম দুই Column Layout               |
| `md:grid-cols-2`           | Medium Screen-এ দুই Column             |
| `md:col-span-2`            | দুই Column জুড়ে Element                |
| `min-w-0`                  | Flex/Grid Child-এর Minimum Width শূন্য |
| `h-fit`                    | Content অনুযায়ী Height                 |
| `lg:sticky`                | Large Screen-এ Sticky Position         |
| `focus-visible:outline-2`  | Keyboard Focus Outline                 |
| `disabled:opacity-40`      | Disabled অবস্থায় Opacity               |
| `accent-indigo-600`        | Checkbox/Radio-এর Accent Color         |
| `transition`               | Transition Effect                      |
| `dark:bg-gray-900`         | Dark Mode Background                   |

## ১৪. Self-Assessment

#### নিজেকে যাচাই করুন

1. Desktop-এ Cart ও Order Summary পাশাপাশি দেখানোর জন্য কোন Layout ব্যবহার করা যায়?

flex-col

grid-cols-1

lg:grid-cols-\(1fr\_360px\)

hidden

2. Quantity যেন ১-এর নিচে না নামে, তার জন্য কোন Logic ব্যবহার করা যায়?

Math.min(0, quantity - 1)

Math.max(1, quantity - 1)

quantity = 0

quantity--

3. Checkout Form-এ দুইটি Column দেখাতে কোন ক্লাস ব্যবহার করা যায়?

md:grid-cols-2

md:flex-col

md:block

md:hidden

4. বাস্তব E-commerce Order-এর চূড়ান্ত মূল্য কোথায় যাচাই করা উচিত?

শুধু Browser-এ

শুধু Tailwind CSS-এ

Backend-এ

শুধু HTML-এ

উত্তর যাচাই করুন

#### Day 28-এর মূল শিক্ষা

একটি বাস্তব E-commerce Cart ও Checkout তৈরি করতে শুধু সুন্দর UI হলেই হবে না। Responsive Layout, Component Reusability, React State, Form Validation এবং Backend-এর সঙ্গে সঠিক সমন্বয়ও প্রয়োজন।

মনে রাখবেন:

* Tailwind CSS → UI Styling

* React → State ও Interaction

* Backend → Price, Inventory, Order ও Payment Validation

আগামী Day 29: Final E-commerce Project — Cart, Checkout ও Dashboard-সহ সম্পূর্ণ UI Integration এবং Project Review।
