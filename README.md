# Learn Tailwind css
**_Day By Day_**

## 🚀 Tailwind CSS — Day 16: Reusable Components & Design Patterns

আজ থেকে আমরা Tailwind CSS-এর **শুধু utility class শেখা থেকে বের হয়ে React + Tailwind দিয়ে professional UI architecture** তৈরি করা শুরু করব।

আপনি যেহেতু React.js/MERN developer, তাই আজকের lesson-এ সবচেয়ে গুরুত্বপূর্ণ বিষয় হবে:

> **একই UI বারবার লিখব না → Reusable React Component তৈরি করব।**

---

#### 🎯 আজকের Learning Goal

আজ আপনি শিখবেন:

* Reusable Component কেন প্রয়োজন
* React + Tailwind component design
* Reusable `Button`
* Button `variant`
* Button `size`
* Reusable `Card`
* Reusable `Badge`
* Reusable `Input`
* `className` ব্যবহার করে customization
* UI component folder structure
* E-commerce project-এ component reuse



## 1️⃣ Reusable Component কী?

ধরুন আপনার project-এ ৫০টি button আছে।

সব জায়গায় যদি লিখেন:

```jsx
<button className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
  Login
</button>
```

তাহলে সমস্যা হবে।

কারণ:

* একই code বারবার লিখতে হবে
* Design পরিবর্তন করা কঠিন
* ভুল হওয়ার সম্ভাবনা বাড়বে
* Project maintain করা কঠিন হবে

এর পরিবর্তে আমরা তৈরি করব:

```jsx
<Button>
  Login
</Button>
```

এটাই হলো **Reusable Component**।

---

## 2️⃣ Component Design Concept

আমরা এমন component তৈরি করব:

```text
components/
└── ui/
    ├── Button.jsx
    ├── Card.jsx
    ├── Badge.jsx
    ├── Input.jsx
    └── Modal.jsx
```

তারপর project-এর যেকোনো জায়গা থেকে ব্যবহার করব।

```text
              UI Components
                    │
        ┌───────────┼───────────┐
        ↓           ↓           ↓
      Button       Card        Input
        │           │           │
        ↓           ↓           ↓
      Login      Product      Email
      Buy        User         Search
      Submit     Order        Form
```

---

## 3️⃣ Reusable Button Component

প্রথমে একটি সাধারণ Button তৈরি করি।

###### `Button.jsx`

```jsx
function Button({ children }) {
  return (
    <button className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
      {children}
    </button>
  );
}

export default Button;
```

এখন ব্যবহার:

```jsx
<Button>Login</Button>
<Button>Buy Now</Button>
<Button>Submit</Button>
```

একই component, কিন্তু আলাদা content।

---

## 4️⃣ `children` কী?

React-এর একটি গুরুত্বপূর্ণ concept।

```jsx
<Button>Login</Button>
```

এখানে:

```text
Button
 └── children = Login
```

আবার:

```jsx
<Button>Buy Now</Button>
```

এখানে:

```text
Button
 └── children = Buy Now
```

তাই component-এর ভিতরে:

```jsx
{children}
```

ব্যবহার করা হয়।

---

## 5️⃣ Button Variant

একটি professional project-এ শুধু blue button থাকলেই হবে না।

আমাদের দরকার:

* Primary
* Secondary
* Danger
* Outline

তাই আমরা `variant` ব্যবহার করতে পারি।

```jsx
function Button({
  children,
  variant = "primary",
}) {
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-600 hover:bg-gray-700 text-white",
    danger: "bg-red-600 hover:bg-red-700 text-white",
    outline: "border border-gray-300 hover:bg-gray-100 text-gray-800",
  };

  return (
    <button
      className={`rounded-lg px-5 py-3 font-semibold ${variants[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;
```

এখন:

```jsx
<Button variant="primary">
  Login
</Button>

<Button variant="secondary">
  Cancel
</Button>

<Button variant="danger">
  Delete
</Button>

<Button variant="outline">
  View Details
</Button>
```

---

## 6️⃣ Button Size

এবার button-এর size-ও reusable করি।

```jsx
function Button({
  children,
  variant = "primary",
  size = "md",
}) {
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-600 hover:bg-gray-700 text-white",
    danger: "bg-red-600 hover:bg-red-700 text-white",
    outline: "border border-gray-300 hover:bg-gray-100 text-gray-800",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-5 py-3",
    lg: "px-7 py-4 text-lg",
  };

  return (
    <button
      className={`rounded-lg font-semibold ${variants[variant]} ${sizes[size]}`}
    >
      {children}
    </button>
  );
}

export default Button;
```

ব্যবহার:

```jsx
<Button size="sm">
  Small
</Button>

<Button size="md">
  Medium
</Button>

<Button size="lg">
  Large
</Button>
```

---

## 7️⃣ Variant + Size একসাথে

এটাই reusable component-এর আসল শক্তি।

```jsx
<Button variant="primary" size="lg">
  Buy Now
</Button>
```

অথবা:

```jsx
<Button variant="danger" size="sm">
  Delete
</Button>
```

অথবা:

```jsx
<Button variant="outline" size="md">
  Details
</Button>
```

একটি component থেকে অনেক ধরনের UI তৈরি করা যাচ্ছে।

---

## 8️⃣ Reusable Card Component

এবার Card তৈরি করি।

###### `Card.jsx`

```jsx
function Card({ children }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      {children}
    </div>
  );
}

export default Card;
```

ব্যবহার:

```jsx
<Card>
  <h2 className="text-xl font-bold">
    Wireless Headphone
  </h2>

  <p className="mt-2 text-gray-500">
    Premium wireless headphone.
  </p>
</Card>
```

---

## 9️⃣ Card-এর ভিতরে অন্য Component

React component-এর সবচেয়ে গুরুত্বপূর্ণ সুবিধাগুলোর একটি হলো:

> **একটি component-এর ভিতরে অন্য component ব্যবহার করা যায়।**

যেমন:

```jsx
<Card>
  <h2>Wireless Headphone</h2>

  <p>Premium headphone</p>

  <Button>
    Buy Now
  </Button>
</Card>
```

Architecture:

```text
Card
 │
 ├── Heading
 ├── Paragraph
 └── Button
```

এভাবেই বড় application ছোট ছোট component দিয়ে তৈরি করা হয়।

---

## 🔟 Reusable Badge

E-commerce website-এ Badge অনেক জায়গায় লাগবে।

যেমন:

* New
* Sale
* Featured
* Pending
* Active
* Completed

###### `Badge.jsx`

```jsx
function Badge({
  children,
  variant = "default",
}) {
  const variants = {
    default: "bg-gray-100 text-gray-700",
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
    danger: "bg-red-100 text-red-700",
    info: "bg-blue-100 text-blue-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-sm font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}

export default Badge;
```

ব্যবহার:

```jsx
<Badge variant="success">
  Active
</Badge>
```

```jsx
<Badge variant="danger">
  Sale
</Badge>
```

```jsx
<Badge variant="warning">
  Pending
</Badge>
```

---

## 1️⃣1️⃣ Reusable Input Component

Form-এর জন্য Input component খুব গুরুত্বপূর্ণ।

###### `Input.jsx`

```jsx
function Input({
  label,
  type = "text",
  placeholder,
}) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default Input;
```

ব্যবহার:

```jsx
<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
/>
```

আবার:

```jsx
<Input
  label="Password"
  type="password"
  placeholder="Enter your password"
/>
```

একই component।

---

## 1️⃣2️⃣ একটি Login Form

এখন আমাদের reusable component ব্যবহার করে Login Form তৈরি করি।

```jsx
import Button from "./ui/Button";
import Input from "./ui/Input";

function LoginForm() {
  return (
    <div className="mx-auto max-w-md rounded-2xl border bg-white p-6 shadow-lg">
      <h1 className="text-2xl font-bold">
        Login
      </h1>

      <div className="mt-6 space-y-5">
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
        />

        <Button className="w-full">
          Login
        </Button>
      </div>
    </div>
  );
}

export default LoginForm;
```

এখানে একটি বিষয় খেয়াল করুন:

```jsx
<Button className="w-full">
```

আমাদের বর্তমান Button component এখনো `className` গ্রহণ করছে না।

এটি professional component design-এর জন্য গুরুত্বপূর্ণ।

---

## 1️⃣3️⃣ `className` Prop

Button-কে আরও flexible করি।

```jsx
function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
}) {
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-600 hover:bg-gray-700 text-white",
    danger: "bg-red-600 hover:bg-red-700 text-white",
    outline: "border border-gray-300 hover:bg-gray-100 text-gray-800",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-5 py-3",
    lg: "px-7 py-4 text-lg",
  };

  return (
    <button
      className={`rounded-lg font-semibold ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
```

এখন:

```jsx
<Button className="w-full">
  Login
</Button>
```

এটি হবে full width।

---

## 1️⃣4️⃣ E-commerce Project-এ Component Architecture

আপনার AI-Powered E-Commerce Management System-এর মতো project-এ আমরা এভাবে structure করতে পারি:

```text
src/
│
├── components/
│   │
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Badge.jsx
│   │   ├── Input.jsx
│   │   └── Modal.jsx
│   │
│   ├── products/
│   │   ├── ProductCard.jsx
│   │   ├── ProductGrid.jsx
│   │   └── ProductFilter.jsx
│   │
│   ├── orders/
│   │   ├── OrderCard.jsx
│   │   └── OrderTable.jsx
│   │
│   └── dashboard/
│       ├── StatCard.jsx
│       └── SalesChart.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── Orders.jsx
│   └── Dashboard.jsx
│
└── App.jsx
```

এটি একটি scalable structure-এর দিকে নিয়ে যায়।

---

## 1️⃣5️⃣ ProductCard-এ Reusable Components

আগের Day 15-এর ProductCard-কে আরও professional করা যায়।

```jsx
<Card>
  <Badge variant="danger">
    Sale
  </Badge>

  <h2 className="mt-4 text-xl font-bold">
    Wireless Headphone
  </h2>

  <p className="mt-2 text-gray-500">
    Premium wireless headphone.
  </p>

  <div className="mt-4 flex items-center justify-between">
    <span className="text-xl font-bold">
      $59
    </span>

    <Button size="sm">
      Buy
    </Button>
  </div>
</Card>
```

এখন:

```text
ProductCard
     │
     ├── Card
     │
     ├── Badge
     │
     ├── Product Info
     │
     └── Button
```

এটাই component composition।

---

## 1️⃣6️⃣ Component Composition কী?

সহজভাবে:

> **ছোট ছোট component একসাথে ব্যবহার করে বড় component তৈরি করাকে Component Composition বলা যায়।**

উদাহরণ:

```text
              ProductCard
                   │
       ┌───────────┼───────────┐
       ↓           ↓           ↓
     Badge        Card       Button
                    │
              Product Info
```

আর Dashboard:

```text
Dashboard
   │
   ├── Navbar
   ├── Sidebar
   ├── StatCard
   ├── SalesChart
   └── OrderTable
```

---

## 1️⃣7️⃣ কেন Reusable Component গুরুত্বপূর্ণ?

###### ❌ Component ছাড়া

```text
Page 1 → 100 lines
Page 2 → 100 lines
Page 3 → 100 lines
Page 4 → 100 lines
```

একই design বারবার।

###### ✅ Component ব্যবহার করলে

```text
Button.jsx
Card.jsx
Input.jsx
Badge.jsx
```

তারপর:

```text
Page 1 ──┐
Page 2 ──┤
Page 3 ──┼──> Shared Components
Page 4 ──┘
```

ফলে:

* Code duplication কমে
* UI consistency বাড়ে
* Development speed বাড়ে
* Maintenance সহজ হয়
* Design পরিবর্তন দ্রুত করা যায়
* Large project manage করা সহজ হয়

---

## 1️⃣8️⃣ আজকের সবচেয়ে গুরুত্বপূর্ণ Design Pattern

আপনি এই sequence মনে রাখুন:

```text
Requirement
    ↓
UI Design
    ↓
Identify Repeated UI
    ↓
Create Component
    ↓
Add Props
    ↓
Add Variants
    ↓
Reuse Everywhere
```

উদাহরণ:

```text
বারবার Button লাগছে
        ↓
Button Component
        ↓
variant
        ↓
size
        ↓
className
        ↓
Reusable Button
```

---

## 🧠 আজকের গুরুত্বপূর্ণ Tailwind Pattern

###### Button

```text
rounded-lg
px-*
py-*
font-semibold
bg-*
text-*
hover:bg-*
transition
```

###### Card

```text
rounded-2xl
border
bg-white
p-5
shadow-sm
```

###### Input

```text
w-full
rounded-lg
border
px-4
py-3
outline-none
focus:border-blue-500
focus:ring-2
```

###### Badge

```text
rounded-full
px-3
py-1
text-sm
font-medium
```

---

## 🧪 আজকের Practice

#### Task 1 — Button System

তৈরি করুন:

```text
Primary
Secondary
Danger
Outline
```

এবং:

```text
Small
Medium
Large
```

অর্থাৎ আপনার Button component থেকে মোট ১২ ধরনের combination তৈরি করতে পারবেন।

---

#### Task 2 — UI Components

এই folder তৈরি করুন:

```text
components/
└── ui/
    ├── Button.jsx
    ├── Card.jsx
    ├── Badge.jsx
    └── Input.jsx
```

---

#### Task 3 — Product Card

তৈরি করুন:

```text
Product Card
│
├── Image
├── Badge
├── Product Name
├── Description
├── Price
└── Buy Button
```

এবং চেষ্টা করুন:

```jsx
<Card>
  <Badge />
  <Button />
</Card>
```

ব্যবহার করতে।

---

## 🏆 Day 16 Challenge

আপনার **AI-Powered E-Commerce Management System**-এর জন্য একটি ছোট UI Library তৈরি করুন।

কমপক্ষে:

```text
Button
Card
Badge
Input
```

তারপর এগুলো দিয়ে তৈরি করুন:

###### 1. Login Page

```text
Email
Password
Login Button
```

###### 2. Product Card

```text
Image
Sale Badge
Product Name
Price
Buy Button
```

###### 3. Dashboard Stat Card

```text
Total Sales
$12,500
+12.5%
```

লক্ষ্য হবে:

> **একই UI code copy-paste না করে component reuse করা।**

---

## 📝 Day 16 Self-Test

নিজেকে এই প্রশ্নগুলো করুন:

1. Reusable Component কী?
2. React-এ `children` কী?
3. `props` কেন ব্যবহার করি?
4. `variant` কী কাজে লাগে?
5. `size` prop কেন দরকার?
6. `className` prop কেন গুরুত্বপূর্ণ?
7. Component Composition কী?
8. `Button` component কীভাবে বিভিন্ন page-এ reuse করবেন?
9. `Card` component-এর ভিতরে অন্য component কীভাবে ব্যবহার করবেন?
10. কেন `components/ui` folder রাখা হয়?

---

## 📌 Day 16 Cheat Sheet

| Concept            | উদ্দেশ্য                             |
| ------------------ | ------------------------------------ |
| `children`         | Component-এর ভিতরের content          |
| `props`            | Component-এ data/config পাঠানো       |
| `variant`          | বিভিন্ন visual style                 |
| `size`             | বিভিন্ন size                         |
| `className`        | অতিরিক্ত Tailwind customization      |
| Reusable Component | একই UI বারবার ব্যবহার                |
| Composition        | ছোট component দিয়ে বড় component তৈরি |
| `components/ui`    | Shared UI components রাখার জায়গা     |

---

## 🎯 আজকের Key Takeaway

আজ পর্যন্ত আপনি Tailwind-এর **individual utilities** শিখেছেন।

এখন থেকে আপনার চিন্তাটা এমন হওয়া উচিত:

```text
❌ "কোন Tailwind class ব্যবহার করব?"

বরং

✅ "এই UI কি reusable component হওয়া উচিত?"
```

আর Professional React + Tailwind development-এর একটি গুরুত্বপূর্ণ formula হলো:

```text
React
  +
Tailwind CSS
  +
Reusable Components
  +
Component Composition
  =
Scalable UI
```

**Day 16-এর মূল শিক্ষা:**
👉 **একই UI বারবার লিখবেন না। Identify করুন → Component বানান → Props দিন → Reuse করুন।**

