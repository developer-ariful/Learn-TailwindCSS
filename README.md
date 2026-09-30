# Learn Tailwind css
**_Day By Day_**

## 🚀 Tailwind CSS — Day 27

#### Advanced Form Design, Validation States & Multi-step Forms

১ ঘণ্টার লেসন

Intermediate to Advanced

আজ আমরা একটি বাস্তব E-commerce Application-এর জন্য Professional Form UI তৈরি করা শিখব। বিশেষ করে Product Form, Registration Form, Validation Error, Success State এবং Multi-step Form নিয়ে কাজ করব।

![Professional product form UI](https://images.openai.com/static-rsc-4/1xRSG7s_JvKG-c2eqwhHwuFNKsFm2MEaCw4ljn7h3xMfgm2Yxv1lysz-JPDj7ootQhmcAX4plEAxY4WbIwfBmjL6y6Ks1MEn2-S9jOHtIy2lju7tSwguAq0fiNLpBFhDNsJ74_IDLAtWciFSCUwoRKjHRzW9ZNeBk9ZuXOBxNiU?purpose=inline)

আজকের লক্ষ্য: এই ধরনের professional form তৈরি করতে শেখা।

## 🎯 ১. আজকের Learning Objectives

আজ আপনি শিখবেন:

1. Advanced Form Layout

2. Input, Select, Textarea ও Checkbox Design

3. Focus, Error ও Success States

4. Form Validation UI

5. Inline Error Messages

6. Disabled ও Loading Button

7. Multi-step Form UI

8. Responsive Form Design

9. Accessible Form Design

10. Reusable Form Components

## ⏰ ২. এক ঘণ্টার Study Plan

|
সময়

|

বিষয়

|
| --- | --- |
|

১০ মিনিট

|

Advanced Form Layout

|
|

১০ মিনিট

|

Input ও Select Design

|
|

১০ মিনিট

|

Validation States

|
|

১০ মিনিট

|

Error ও Success UI

|
|

১০ মিনিট

|

Multi-step Form

|
|

১০ মিনিট

|

Mini Project ও Revision

|

## ৩. Advanced Form Layout

প্রথমে একটি Product Form-এর কাঠামো বুঝে নিই।

```
Add New Product
│
├── Basic Information
│   ├── Product Name
│   ├── Description
│   └── Category
│
├── Pricing
│   ├── Regular Price
│   └── Discount Price
│
├── Inventory
│   ├── SKU
│   └── Stock Quantity
│
├── Product Images
│
└── Actions
    ├── Cancel
    └── Save Product
```

Form-কে একাধিক logical section-এ ভাগ করলে ব্যবহারকারী সহজে তথ্য দিতে পারেন।

#### Form Container

JavaScript

```
function ProductForm() {
  return (
    <div className="mx-auto w-full max-w-4xl rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8 dark:border-gray-800 dark:bg-gray-900">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Add New Product
      </h1>

      <p className="mt-2 text-sm text-gray-500">
        Enter the product information below.
      </p>

      <form className="mt-8 space-y-8">
        {/* Form sections */}
      </form>
    </div>
  );
}
```

এখানে:

* `max-w-4xl` — Form-এর সর্বোচ্চ প্রস্থ।

* `mx-auto` — Form-কে মাঝখানে রাখা।

* `space-y-8` — Form section-গুলোর মধ্যে vertical spacing।

* `sm:p-8` — বড় স্ক্রিনে বেশি padding।

## ৪. Professional Input Design

একটি ভালো Input-এর মধ্যে সাধারণত থাকে:

* Label

* Input Field

* Placeholder

* Helper Text

* Validation Message

#### Input Field Preview

Product Name

Enter product name

Enter a descriptive product name.

Price

Enter price

Price is required.

Tailwind:

JavaScript

```
<div className="space-y-2">
  <label
    htmlFor="productName"
    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
  >
    Product Name
  </label>

  <input
    id="productName"
    type="text"
    placeholder="Enter product name"
    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
  />

  <p className="text-xs text-gray-500">
    Enter a descriptive product name.
  </p>
</div>
```

###### গুরুত্বপূর্ণ Classes

|
Class

|

কাজ

|
| --- | --- |
|

`w-full`

|

সম্পূর্ণ প্রস্থ

|
|

`rounded-lg`

|

গোলাকার কোণা

|
|

`border-gray-300`

|

Border-এর রং

|
|

`focus:border-blue-500`

|

Focus হলে Border-এর রং

|
|

`focus:ring-2`

|

Focus ring

|
|

`outline-none`

|

Default outline সরানো

|
|

`transition`

|

Smooth visual transition

|

Accessibility: প্রতিটি Input-এর সঙ্গে `label`-এর `htmlFor` এবং Input-এর `id` মিলিয়ে দিন।

## ৫. Error State Design

ব্যবহারকারী ভুল তথ্য দিলে Error State দেখানো হয়।

Product Name

Enter product name

Product name is required.

Tailwind:

JavaScript

```
<div className="space-y-2">
  <label htmlFor="name" className="block text-sm font-medium">
    Product Name
  </label>

  <input
    id="name"
    type="text"
    aria-invalid="true"
    aria-describedby="name-error"
    className="w-full rounded-lg border border-red-500 px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
  />

  <p id="name-error" className="text-sm text-red-600">
    Product name is required.
  </p>
</div>
```

এখানে `aria-invalid` এবং `aria-describedby` ব্যবহার করলে screen reader ব্যবহারকারীরাও Error সম্পর্কে জানতে পারেন।

## ৬. Success State Design

তথ্য সঠিক হলে Success State দেখাতে পারেন।

Email Address

[arif@example.com](mailto:arif@example.com)

Email address is valid.

Tailwind:

JavaScript

```
<div className="space-y-2">
  <label htmlFor="email" className="block text-sm font-medium">
    Email Address
  </label>

  <input
    id="email"
    type="email"
    aria-invalid="false"
    aria-describedby="email-success"
    className="w-full rounded-lg border border-green-500 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
  />

  <p id="email-success" className="text-sm text-green-600">
    Email address is valid.
  </p>
</div>
```

মনে রাখবেন, শুধু সবুজ Border দিলেই Validation সম্পন্ন হয় না। React বা অন্য Validation Logic দিয়ে তথ্য যাচাই করতে হবে।

## ৭. Select ও Textarea Design

#### Select

JavaScript

```
<div className="space-y-2">
  <label htmlFor="category" className="block text-sm font-medium">
    Category
  </label>

  <select
    id="category"
    defaultValue=""
    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
  >
    <option value="" disabled>
      Select a category
    </option>
    <option value="electronics">Electronics</option>
    <option value="clothing">Clothing</option>
    <option value="shoes">Shoes</option>
  </select>
</div>
```

#### Textarea

JavaScript

```
<div className="space-y-2">
  <label htmlFor="description" className="block text-sm font-medium">
    Description
  </label>

  <textarea
    id="description"
    rows={4}
    placeholder="Enter product description"
    className="w-full resize-y rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
  />
</div>
```

`resize-y` ব্যবহার করলে ব্যবহারকারী Textarea-কে শুধু vertical দিকে বড় বা ছোট করতে পারবেন।

## ৮. Checkbox ও Radio Design

Product Form-এ Active Status-এর মতো Checkbox ব্যবহার করতে পারেন।

JavaScript

```
<label className="flex items-center gap-3">
  <input
    type="checkbox"
    className="size-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
  />
  <span className="text-sm text-gray-700 dark:text-gray-300">
    Publish this product
  </span>
</label>
```

একাধিক বিকল্প থেকে একটি বেছে নিতে Radio ব্যবহার করা যায়।

JavaScript

```
<div className="space-y-3">
  <p className="text-sm font-medium">Product Status</p>

  <label className="flex items-center gap-3">
    <input type="radio" name="status" value="active" />
    <span>Active</span>
  </label>

  <label className="flex items-center gap-3">
    <input type="radio" name="status" value="draft" />
    <span>Draft</span>
  </label>
</div>
```

## ৯. Loading ও Disabled Button

Form Submit করার সময় ব্যবহারকারী যেন বারবার Submit না করেন, সে জন্য Loading ও Disabled State ব্যবহার করা হয়।

###### Button State Preview

Save Product

Saving...

Disabled

React উদাহরণ:

JavaScript

```
<button
  type="submit"
  disabled={isSubmitting}
  className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
>
  {isSubmitting ? "Saving..." : "Save Product"}
</button>
```

এখানে `isSubmitting` একটি React state, যা Submit চলাকালে `true` হতে পারে।

## ১০. Multi-step Form UI

কিছু Form-এ অনেক তথ্য দিতে হয়। সব Input একসঙ্গে না দেখিয়ে কয়েকটি ধাপে ভাগ করা যায়।

উদাহরণ: Product Creation Wizard।

#### Product Creation Wizard

1

Basic

2

Pricing

3

Images

###### Step 1: Basic Information

Product Name

CategorySelect category

PreviousNext

এটি কেবল ধাপ পরিবর্তনের UI ডেমো; এখানে প্রকৃত Form Validation বা ডেটা সংরক্ষণ নেই।

###### Multi-step Form-এর Tailwind Layout

JavaScript

```
<div className="mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-900">
  <div className="mb-8 flex items-center gap-3">
    <div className="flex size-9 items-center justify-center rounded-full bg-blue-600 text-white">
      1
    </div>
    <div className="h-1 flex-1 rounded bg-gray-200" />
    <div className="flex size-9 items-center justify-center rounded-full bg-gray-200">
      2
    </div>
    <div className="h-1 flex-1 rounded bg-gray-200" />
    <div className="flex size-9 items-center justify-center rounded-full bg-gray-200">
      3
    </div>
  </div>

  {/* Current step content */}
</div>
```

এখানে Flexbox দিয়ে Step Indicator তৈরি করা হয়েছে। React State দিয়ে বর্তমান Step এবং কোন Form দেখানো হবে তা নিয়ন্ত্রণ করতে হবে।

## ১১. Reusable Form Component Architecture

বাস্তব প্রজেক্টে একই Input বারবার লিখলে কোড বড় হয়ে যায়। তাই reusable component ব্যবহার করুন।

```
src/
├── components/
│   ├── forms/
│   │   ├── FormInput.jsx
│   │   ├── FormSelect.jsx
│   │   ├── FormTextarea.jsx
│   │   ├── FormCheckbox.jsx
│   │   ├── FormError.jsx
│   │   └── FormStepper.jsx
│   │
│   └── ui/
│       └── Button.jsx
│
└── pages/
    └── CreateProduct.jsx
```

উদাহরণস্বরূপ, `FormInput`-এর Props হতে পারে:

|
Prop

|

কাজ

|
| --- | --- |
|

`label`

|

Input-এর Label

|
|

`name`

|

Form Field-এর নাম

|
|

`type`

|

Input-এর ধরন

|
|

`error`

|

Validation Error

|
|

`value`

|

বর্তমান মান

|
|

`onChange`

|

মান পরিবর্তনের Callback

|
|

`placeholder`

|

Input-এর নির্দেশনা

|

এভাবে একই Input বিভিন্ন Form-এ ব্যবহার করা যাবে।

## ১২. Validation-এর UI ও Logic আলাদা রাখুন

এটি আজকের একটি গুরুত্বপূর্ণ Full-Stack Development Concept।

###### Validation Workflow

User Input

React Form State

Validation Logic

Valid

Submit / Success UI

Invalid

Error UI

* React: Form-এর State ও Event নিয়ন্ত্রণ করে।

* Validation Library বা নিজস্ব Logic: তথ্য যাচাই করে।

* Tailwind: Validation-এর ফলাফল কীভাবে দেখাবে তা নির্ধারণ করে।

* Backend: Client-side Validation-এর পাশাপাশি নিজেও তথ্য যাচাই করে।

কোনো গুরুত্বপূর্ণ Validation শুধু Frontend-এ রেখে দেওয়া উচিত নয়।

## 🧪 ১৩. Day 27 Mini Project

আজকের প্রজেক্ট

## TechStore — Create Product Form

নিচের Task-গুলো সম্পন্ন করে নিজের অগ্রগতি যাচাই করুন।

Project Progress

0/11

Product Name Input

Description Textarea

Category Select

Regular Price Input

Stock Quantity Input

Product Image Upload UI

Error ও Success State

Loading ও Disabled Button

Responsive Layout

Dark Mode

Multi-step Form UI

## 🧠 ১৪. Day 27 Self-Test

নিজেকে নিচের প্রশ্নগুলোর উত্তর দেওয়ার চেষ্টা করুন।

1. `focus:ring-2` কীভাবে কাজ করে?

2. `aria-invalid` কেন ব্যবহার করা হয়?

3. Helper Text ও Error Message-এর মধ্যে পার্থক্য কী?

4. Form-কে একাধিক Section-এ ভাগ করার সুবিধা কী?

5. Multi-step Form কখন ব্যবহার করা যায়?

6. Loading Button-এর ক্ষেত্রে `disabled` কেন প্রয়োজন?

7. Reusable Form Component কীভাবে তৈরি করবেন?

8. Client-side এবং Server-side Validation-এর পার্থক্য কী?

9. Responsive Form তৈরি করতে কোন কোন breakpoint ব্যবহার করা যায়?

10. Form-এর State এবং UI Styling-এর দায়িত্ব কীভাবে আলাদা?

## 📋 ১৫. Day 27 Cheat Sheet

|
কাজ

|

Tailwind Class

|
| --- | --- |
|

Form Container

|

`mx-auto max-w-4xl`

|
|

Vertical Spacing

|

`space-y-6`

|
|

Input

|

`w-full rounded-lg border px-4 py-3`

|
|

Focus State

|

`focus:ring-2 focus:ring-blue-500`

|
|

Error Border

|

`border-red-500`

|
|

Success Border

|

`border-green-500`

|
|

Helper Text

|

`text-xs text-gray-500`

|
|

Error Message

|

`text-sm text-red-600`

|
|

Disabled Button

|

`disabled:opacity-50`

|
|

Disabled Cursor

|

`disabled:cursor-not-allowed`

|
|

Responsive Form

|

`grid grid-cols-1 md:grid-cols-2`

|
|

Dark Mode

|

`dark:bg-gray-900`

|
|

Step Indicator

|

`flex items-center gap-3`

|
|

Transition

|

`transition duration-200`

|

#### Day 27-এর মূল শিক্ষা

Professional Form তৈরি করার ক্ষেত্রে শুধু Input সুন্দর করলেই হবে না। Form-এর Structure, Validation Feedback, Accessibility, Loading State এবং Responsive Layout-ও বিবেচনা করতে হবে।

আজকের Golden Rule:

Requirement → Form Structure → Input Components → Validation → UI States → Responsive Design

পরবর্তী Day 28-এ Advanced E-commerce UI: Cart, Checkout ও Order Summary Design নিয়ে কাজ করলে আপনার Tailwind CSS-এর শেখা বিষয়গুলো বাস্তব একটি User Journey-তে প্রয়োগ করতে পারবেন।
