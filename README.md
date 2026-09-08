# Learn TailwinCSS
*Day By Day*

## 🎯 Tailwind CSS — Day 13: Buttons, Forms & Form UI

আজ আমরা Tailwind CSS-এর একটি খুব গুরুত্বপূর্ণ অংশ শিখব—**Button এবং Form UI**।

তুমি যেহেতু React.js/Node.js দিয়ে বাস্তব Project তৈরি করছো, তাই আজকের lesson-এ আমরা শুধু class মুখস্থ করব না; বরং **Login/Register Form-এর মতো বাস্তব UI** তৈরি করব।



## 1️⃣ Tailwind দিয়ে Button তৈরি

একটি সাধারণ button:

```html
<button class="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white">
  Login
</button>
```

এখানে—

```text
rounded-lg      → Corner গোল
bg-blue-600     → Background
px-5            → Left + Right padding
py-3            → Top + Bottom padding
font-semibold   → Font একটু bold
text-white      → Text color
```

###### 🎨 Button-এর Color পরিবর্তন

```html
<button class="bg-blue-600 text-white">
  Primary
</button>

<button class="bg-green-600 text-white">
  Success
</button>

<button class="bg-red-600 text-white">
  Delete
</button>

<button class="bg-gray-600 text-white">
  Secondary
</button>
```

---

## 2️⃣ Button-এর Hover Effect

User যখন button-এর উপর mouse রাখবে তখন color পরিবর্তন করতে:

```html
<button
  class="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
>
  Login
</button>
```

মূল বিষয়:

```text
bg-blue-600
     ↓
hover:bg-blue-700
```

অর্থাৎ:

> Normal অবস্থায় `blue-600`, hover করলে `blue-700`

---

## 3️⃣ Transition ব্যবহার

Hover effect-কে smooth করতে:

```html
<button
  class="rounded-lg bg-blue-600 px-5 py-3 text-white
         transition duration-300 hover:bg-blue-700"
>
  Login
</button>
```

###### গুরুত্বপূর্ণ

```text
transition
duration-300
```

এগুলো animation-কে smooth করে।

---

## 4️⃣ Button Shadow

```html
<button
  class="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white shadow-md hover:shadow-lg"
>
  Buy Now
</button>
```

এখানে:

```text
shadow-md
    ↓
hover:shadow-lg
```

---

## 5️⃣ Focus State

Keyboard দিয়ে button/input select করলে focus state দেখা যায়।

```html
<button
  class="rounded-lg bg-blue-600 px-5 py-3 text-white
         outline-none focus:ring-2 focus:ring-blue-500"
>
  Login
</button>
```

এখানে:

```text
focus:ring-2
focus:ring-blue-500
```

খুব গুরুত্বপূর্ণ।

---

## 6️⃣ Active State

Button click করার সময় আলাদা effect দিতে পারো:

```html
<button
  class="rounded-lg bg-blue-600 px-5 py-3 text-white
         hover:bg-blue-700 active:scale-95"
>
  Submit
</button>
```

এখানে:

```text
active:scale-95
```

click করার সময় button সামান্য ছোট হবে।

---

## 7️⃣ Disabled Button

ধরো form submit করার সময় button disable হয়ে গেছে।

```html
<button
  disabled
  class="rounded-lg bg-blue-600 px-5 py-3 text-white
         disabled:cursor-not-allowed disabled:opacity-50"
>
  Processing...
</button>
```

এখানে:

```text
disabled:cursor-not-allowed
disabled:opacity-50
```

ব্যবহারকারীর কাছে বোঝা যাবে যে button বর্তমানে ব্যবহারযোগ্য নয়।

---

## 8️⃣ Professional Button Pattern

বাস্তব Project-এ এই pattern মনে রাখতে পারো:

```html
<button
  class="
    rounded-lg
    bg-blue-600
    px-5 py-3
    font-semibold
    text-white
    shadow-md
    transition
    duration-300
    hover:bg-blue-700
    hover:shadow-lg
    focus:outline-none
    focus:ring-2
    focus:ring-blue-500
    active:scale-95
  "
>
  Login
</button>
```

---

## 9️⃣ Form তৈরি করা

একটি Form সাধারণত এমন:

```text
Form
│
├── Label
├── Input
│
├── Label
├── Input
│
├── Button
│
└── Other information
```

---

## 🔟 Label + Input

```html
<div>
  <label class="mb-2 block font-medium text-gray-700">
    Email
  </label>

  <input
    type="email"
    placeholder="Enter your email"
    class="w-full rounded-lg border border-gray-300 px-4 py-3"
  />
</div>
```

###### কেন `block`?

```text
label
↓
input
```

Label-কে পুরো line নিতে সাহায্য করে।

---

## 1️⃣1️⃣ Input Focus Design

Professional input:

```html
<input
  type="email"
  placeholder="Enter your email"
  class="
    w-full
    rounded-lg
    border
    border-gray-300
    px-4
    py-3
    outline-none
    transition
    focus:border-blue-500
    focus:ring-2
    focus:ring-blue-500
  "
/>
```

এখানে গুরুত্বপূর্ণ:

```text
outline-none
focus:border-blue-500
focus:ring-2
focus:ring-blue-500
```

---

## 1️⃣2️⃣ Placeholder Color

Placeholder-এর color পরিবর্তন করতে:

```html
<input
  placeholder="Enter your email"
  class="placeholder:text-gray-400"
/>
```

আরও সুন্দর:

```html
<input
  placeholder="Enter your email"
  class="
    w-full
    rounded-lg
    border
    border-gray-300
    px-4 py-3
    placeholder:text-gray-400
    focus:border-blue-500
    focus:ring-2
    focus:ring-blue-500
  "
/>
```

---

## 1️⃣3️⃣ Password Input

```html
<div>
  <label class="mb-2 block font-medium text-gray-700">
    Password
  </label>

  <input
    type="password"
    placeholder="Enter your password"
    class="
      w-full
      rounded-lg
      border
      border-gray-300
      px-4 py-3
      outline-none
      focus:border-blue-500
      focus:ring-2
      focus:ring-blue-500
    "
  />
</div>
```

---

## 1️⃣4️⃣ Textarea

User-এর message নেওয়ার জন্য:

```html
<textarea
  rows="5"
  placeholder="Write your message..."
  class="
    w-full
    rounded-lg
    border
    border-gray-300
    px-4 py-3
    outline-none
    focus:border-blue-500
    focus:ring-2
    focus:ring-blue-500
  "
></textarea>
```

এটি ব্যবহার করতে পারো:

* Contact Form
* Comment
* Product Description
* Customer Support
* Client Message

---

## 1️⃣5️⃣ Select

```html
<select
  class="
    w-full
    rounded-lg
    border
    border-gray-300
    px-4 py-3
    outline-none
    focus:border-blue-500
    focus:ring-2
    focus:ring-blue-500
  "
>
  <option>Select a category</option>
  <option>Electronics</option>
  <option>Clothing</option>
  <option>Books</option>
</select>
```

---

## 1️⃣6️⃣ Checkbox

```html
<label class="flex items-center gap-2">
  <input
    type="checkbox"
    class="h-4 w-4 rounded border-gray-300"
  />

  <span class="text-sm text-gray-700">
    Remember me
  </span>
</label>
```

এখানে:

```text
flex
items-center
gap-2
```

ব্যবহার করে checkbox এবং text একই লাইনে সুন্দরভাবে রাখা হয়েছে।

---

## 1️⃣7️⃣ Radio Button

```html
<div class="space-y-3">
  <label class="flex items-center gap-2">
    <input type="radio" name="gender" />
    <span>Male</span>
  </label>

  <label class="flex items-center gap-2">
    <input type="radio" name="gender" />
    <span>Female</span>
  </label>
</div>
```

---

## 1️⃣8️⃣ Error State

ধরো email ভুল হয়েছে।

```html
<input
  type="email"
  class="
    w-full
    rounded-lg
    border
    border-red-500
    px-4 py-3
    outline-none
    focus:ring-2
    focus:ring-red-500
  "
/>

<p class="mt-1 text-sm text-red-500">
  Please enter a valid email address.
</p>
```

UI:

```text
Email
┌──────────────────────────────┐
│ wrong-email                  │
└──────────────────────────────┘
  Please enter a valid email address.
```

---

## 1️⃣9️⃣ Success State

```html
<input
  type="email"
  class="
    w-full
    rounded-lg
    border
    border-green-500
    px-4 py-3
    outline-none
    focus:ring-2
    focus:ring-green-500
  "
/>

<p class="mt-1 text-sm text-green-600">
  Email is valid.
</p>
```

---

## 2️⃣0️⃣ Professional Login Form

এবার আমরা আজকের সবচেয়ে গুরুত্বপূর্ণ অংশ তৈরি করব।

```html
<div class="min-h-screen bg-gray-100 px-4 py-10">
  <div class="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-xl">

    <div class="mb-8 text-center">
      <h1 class="text-3xl font-bold text-gray-900">
        Welcome Back
      </h1>

      <p class="mt-2 text-gray-500">
        Login to your account
      </p>
    </div>

    <form class="space-y-5">

      <!-- Email -->
      <div>
        <label
          for="email"
          class="mb-2 block font-medium text-gray-700"
        >
          Email
        </label>

        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          class="
            w-full
            rounded-lg
            border
            border-gray-300
            px-4 py-3
            outline-none
            transition
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-500
          "
        />
      </div>

      <!-- Password -->
      <div>
        <label
          for="password"
          class="mb-2 block font-medium text-gray-700"
        >
          Password
        </label>

        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          class="
            w-full
            rounded-lg
            border
            border-gray-300
            px-4 py-3
            outline-none
            transition
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-500
          "
        />
      </div>

      <!-- Remember -->
      <div class="flex items-center justify-between">

        <label class="flex items-center gap-2">
          <input
            type="checkbox"
            class="h-4 w-4"
          />

          <span class="text-sm text-gray-600">
            Remember me
          </span>
        </label>

        <a
          href="##"
          class="text-sm font-medium text-blue-600 hover:underline"
        >
          Forgot password?
        </a>

      </div>

      <!-- Button -->
      <button
        type="submit"
        class="
          w-full
          rounded-lg
          bg-blue-600
          px-5 py-3
          font-semibold
          text-white
          shadow-md
          transition
          duration-300
          hover:bg-blue-700
          hover:shadow-lg
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          active:scale-95
        "
      >
        Login
      </button>

    </form>

    <p class="mt-6 text-center text-sm text-gray-500">
      Don't have an account?
      <a
        href="##"
        class="font-semibold text-blue-600 hover:underline"
      >
        Register
      </a>
    </p>

  </div>
</div>
```

---

## 2️⃣1️⃣ React + Tailwind Version

React Project-এ `class` নয়, `className` ব্যবহার করবে।

```jsx
function LoginForm() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-xl">

        <h1 className="text-center text-3xl font-bold">
          Welcome Back
        </h1>

        <p className="mt-2 text-center text-gray-500">
          Login to your account
        </p>

        <form className="mt-8 space-y-5">

          <div>
            <label
              htmlFor="email"
              className="mb-2 block font-medium"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="
                w-full
                rounded-lg
                border
                border-gray-300
                px-4 py-3
                outline-none
                transition
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-500
              "
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block font-medium"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="
                w-full
                rounded-lg
                border
                border-gray-300
                px-4 py-3
                outline-none
                transition
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-500
              "
            />
          </div>

          <button
            type="submit"
            className="
              w-full
              rounded-lg
              bg-blue-600
              px-5 py-3
              font-semibold
              text-white
              transition
              hover:bg-blue-700
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          >
            Login
          </button>

        </form>
      </div>
    </div>
  );
}

export default LoginForm;
```

---

## 2️⃣2️⃣ Accessibility — খুব গুরুত্বপূর্ণ

Professional developer হিসেবে শুধু সুন্দর UI বানালেই হবে না।

Label-এর সাথে input-এর relationship তৈরি করো:

```jsx
<label htmlFor="email">
  Email
</label>

<input id="email" type="email" />
```

এখানে:

```text
htmlFor="email"
       ↓
id="email"
```

দুটো একই হওয়া উচিত।

এটি accessibility-এর জন্য গুরুত্বপূর্ণ।

---

## 2️⃣3️⃣ Form Layout-এর জন্য `space-y`

Form-এর প্রতিটি field-এর মধ্যে spacing দিতে:

```html
<form class="space-y-5">
```

এতে:

```text
Email

Password

Button
```

এর মধ্যে সুন্দর vertical spacing হবে।

এটি খুব useful Tailwind pattern।

---

## 2️⃣4️⃣ Input State বুঝে রাখো

একটি Input-এর বিভিন্ন state হতে পারে:

```text
Normal
   ↓
Hover
   ↓
Focus
   ↓
Valid
   ↓
Invalid
   ↓
Disabled
```

Tailwind:

```text
hover:
focus:
disabled:
```

এগুলো খুব গুরুত্বপূর্ণ।

---

## 🧠 আজকের সবচেয়ে গুরুত্বপূর্ণ Pattern

###### Button

```html
<button
  class="
    rounded-lg
    bg-blue-600
    px-5 py-3
    font-semibold
    text-white
    transition
    hover:bg-blue-700
    focus:ring-2
    focus:ring-blue-500
    active:scale-95
  "
>
  Submit
</button>
```

###### Input

```html
<input
  class="
    w-full
    rounded-lg
    border
    border-gray-300
    px-4 py-3
    outline-none
    transition
    focus:border-blue-500
    focus:ring-2
    focus:ring-blue-500
  "
/>
```

---

## 📋 Day 13 Cheat Sheet

| কাজ                   | Tailwind                          |
| --------------------- | --------------------------------- |
| Button background     | `bg-blue-600`                     |
| Button text           | `text-white`                      |
| Padding               | `px-5 py-3`                       |
| Rounded               | `rounded-lg`                      |
| Shadow                | `shadow-md`                       |
| Hover                 | `hover:bg-blue-700`               |
| Focus                 | `focus:ring-2`                    |
| Focus color           | `focus:ring-blue-500`             |
| Active                | `active:scale-95`                 |
| Disabled              | `disabled:opacity-50`             |
| Cursor                | `cursor-pointer`                  |
| Input width           | `w-full`                          |
| Input border          | `border border-gray-300`          |
| Placeholder           | `placeholder:text-gray-400`       |
| Vertical form spacing | `space-y-5`                       |
| Checkbox layout       | `flex items-center gap-2`         |
| Error                 | `border-red-500 text-red-500`     |
| Success               | `border-green-500 text-green-500` |

---

## 📝 আজকের Homework

###### Task 1 — Button Collection

৫টি button তৈরি করো:

```text
Primary
Success
Danger
Warning
Secondary
```

প্রতিটিতে ব্যবহার করবে:

* `hover`
* `transition`
* `shadow`
* `focus`

---

###### Task 2 — Contact Form

তৈরি করো:

```text
Contact Us

Name
[________________]

Email
[________________]

Subject
[________________]

Message
[________________]

[ Send Message ]
```

ব্যবহার করবে:

* `label`
* `input`
* `textarea`
* `button`
* `focus:ring`
* `hover`
* `transition`

---

###### Task 3 — React Register Form ⭐

React + Tailwind দিয়ে:

```text
Create Account

Full Name
Email
Password
Confirm Password

☐ Accept Terms & Conditions

[ Create Account ]

Already have an account? Login
```

তৈরি করো।

---

## 🚀 Mini Challenge

তোমার **AI-Powered E-Commerce Management System**-এর জন্য একটি Admin Login UI বানানোর চেষ্টা করো।

Structure:

```text
┌────────────────────────────────────┐
│                                    │
│          Admin Login               │
│                                    │
│       Email                        │
│       ┌────────────────────────┐   │
│       │ admin@example.com      │   │
│       └────────────────────────┘   │
│                                    │
│       Password                     │
│       ┌────────────────────────┐   │
│       │ •••••••••              │   │
│       └────────────────────────┘   │
│                                    │
│       ☑ Remember me                │
│                                    │
│       ┌────────────────────────┐   │
│       │        Login           │   │
│       └────────────────────────┘   │
│                                    │
└────────────────────────────────────┘
```

এটি তৈরি করার সময় **Day 4-এর spacing + Day 5-এর width + Day 6-এর flex + Day 8-এর responsive + Day 10-এর shadow/ring + আজকের form utilities** একসাথে ব্যবহার করার চেষ্টা করো।

---

## 🎯 Day 13-এর Key Takeaway

আজ তোমার মূলত এই বিষয়গুলো আয়ত্ত করা উচিত:

```text
Button
 ↓
bg + text + px/py + rounded
 ↓
hover + focus + active
 ↓
transition + shadow
```

এবং—

```text
Form
 ↓
label
 ↓
input / textarea / select
 ↓
focus:ring
 ↓
validation state
 ↓
submit button
```

সবচেয়ে গুরুত্বপূর্ণ বিষয় হলো **Tailwind class মুখস্থ করা নয়**। বরং কোনো UI দেখলে তুমি যেন চিন্তা করতে পারো:

> “এই UI বানাতে আমার কোন layout, spacing, sizing, state এবং responsive utility লাগবে?”

এটাই একজন **React + Tailwind developer** হিসেবে তোমার আসল skill।


