# Learn Tailwind css
**_Day By Day_**

## 🚀 Tailwind CSS — Day 26

#### Advanced Dashboard UI: Analytics, Statistics, Tables & Responsive Layout

১ ঘণ্টার লেসন

Intermediate to Advanced

আজ আমরা একটি বাস্তব E-commerce Admin Dashboard তৈরি করার জন্য প্রয়োজনীয় UI শিখব। Day 25-এ Product Listing Page তৈরি করেছি। আজ সেই অভিজ্ঞতা কাজে লাগিয়ে Dashboard-এর Statistics Cards, Analytics Panel, Recent Orders Table এবং Responsive Layout তৈরি করব।

![আধুনিক E-commerce Admin Dashboard UI-এর উদাহরণ](https://images.openai.com/static-rsc-4/QKgRu-kfXfTWwUBHKvW0DnURmjHtB8fLKzXhG_gvTBcjLnJ1vWU8-04ETrOWsEXRUI8XMosK4-Rk758EeUti4E9GzpPl9z1NKLN_-nJ74NAfiG4XTBDMJ99a9OFf0VhoWjOwFdA-4U0pfRbIRQJFEUskENxIWPQU76ORQlRdpkA?purpose=inline)

আজকের লক্ষ্য: এই ধরনের Dashboard-এর Layout ও UI তৈরি করা।

## 🎯 ১. আজকের Learning Objectives

আজ আপনি শিখবেন:

1. Advanced Dashboard Layout

2. Sidebar ও Header Design

3. Statistics Cards তৈরি

4. Analytics Panel-এর UI

5. Recent Orders Table

6. Responsive Dashboard

7. Loading ও Empty State

8. Reusable Dashboard Components

9. Dark Mode Integration

10. Dashboard UI Architecture



## ৩. Dashboard-এর Layout Architecture

প্রথমে Dashboard-এর কাঠামো বুঝে নিন।

```
AdminDashboard
│
├── Sidebar
│   ├── Logo
│   ├── Dashboard
│   ├── Products
│   ├── Orders
│   ├── Customers
│   └── Settings
│
└── Main Content
    │
    ├── Header
    │   ├── Search
    │   ├── Notifications
    │   └── Profile
    │
    └── Dashboard Content
        │
        ├── Page Heading
        │
        ├── Statistics
        │   ├── Total Sales
        │   ├── Total Orders
        │   ├── Customers
        │   └── Revenue
        │
        ├── Analytics
        │   ├── Sales Chart
        │   └── Traffic Summary
        │
        └── Recent Orders Table
```

এখানে দুটি প্রধান অংশ রয়েছে:

* Sidebar: Dashboard-এর Navigation।

* Main Content: Dashboard-এর মূল তথ্য ও বিভিন্ন UI।

## ৪. Dashboard Main Layout

প্রথমে একটি responsive layout তৈরি করুন।

JavaScript

```
function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="grid min-h-screen lg:grid-cols-[260px_1fr]">
        <aside className="hidden border-r border-gray-200 bg-white lg:block dark:border-gray-800 dark:bg-gray-900">
          Sidebar
        </aside>

        <main className="min-w-0">
          <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 p-4 backdrop-blur dark:border-gray-800 dark:bg-gray-900/80">
            Header
          </header>

          <div className="mx-auto w-full max-w-7xl p-4 sm:p-6 lg:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
```

গুরুত্বপূর্ণ Tailwind utilities:

|
Class

|

কাজ

|
| --- | --- |
|

`min-h-screen`

|

কমপক্ষে পুরো viewport-এর উচ্চতা

|
|

`grid`

|

CSS Grid Layout

|
|

`lg:grid-cols-[260px_1fr]`

|

Sidebar 260px, বাকি অংশ Main Content

|
|

`hidden lg:block`

|

বড় স্ক্রিনে Sidebar দেখানো

|
|

`min-w-0`

|

Grid item-কে content অনুযায়ী প্রয়োজনমতো সংকুচিত হতে দেওয়া

|
|

`sticky top-0`

|

Header-কে scroll করার সময় উপরে আটকে রাখা

|
|

`backdrop-blur`

|

Header-এর পেছনের অংশে blur effect

|
|

`max-w-7xl`

|

Content-এর সর্বোচ্চ প্রস্থ নির্ধারণ

|

মনে রাখবেন: `1fr` হলো Grid-এর অবশিষ্ট উপলব্ধ জায়গা। তাই `260px_1fr` দিয়ে Sidebar ও Main Content-এর প্রস্থ নির্ধারণ করা যায়।

## ৫. Sidebar তৈরি

এবার একটি reusable Sidebar component তৈরি করুন।

JavaScript

```
const menuItems = [
  "Dashboard",
  "Products",
  "Orders",
  "Customers",
  "Analytics",
  "Settings",
];

function Sidebar() {
  return (
    <aside className="h-screen overflow-y-auto p-5">
      <h1 className="mb-8 text-2xl font-bold text-blue-600">
        TechStore
      </h1>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <a
            key={item}
            href="##"
            className={`block rounded-xl px-4 py-3 text-sm font-medium transition ${
              item === "Dashboard"
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            }`}
          >
            {item}
          </a>
        ))}
      </nav>
    </aside>
  );
}
```

###### এখানে যেসব utility ব্যবহার হয়েছে

* `h-screen`: viewport-এর সমান উচ্চতা।

* `overflow-y-auto`: Sidebar-এর content বেশি হলে vertical scroll।

* `space-y-2`: Navigation item-এর মধ্যে vertical spacing।

* `block`: প্রতিটি link-কে পুরো লাইনের জায়গা দেওয়া।

* `transition`: পরিবর্তনের সময় smooth effect।

বাস্তব application-এ `href="##"`-এর পরিবর্তে React Router-এর `Link` ব্যবহার করতে পারেন।

## ৬. Dashboard Header

একটি Dashboard Header-এ সাধারণত Search, Notification এবং Profile থাকে।

JavaScript

```
function DashboardHeader() {
  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <input
        type="search"
        placeholder="Search..."
        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 sm:max-w-xs dark:border-gray-700 dark:bg-gray-800 dark:text-white"
      />

      <div className="flex items-center justify-between gap-4 sm:justify-end">
        <button
          type="button"
          aria-label="Notifications"
          className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          🔔
        </button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
            A
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              Admin
            </p>
            <p className="text-xs text-gray-500">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
```

`flex-col sm:flex-row` ব্যবহার করায় ছোট স্ক্রিনে Header-এর উপাদানগুলো উল্লম্বভাবে এবং বড় স্ক্রিনে পাশাপাশি থাকবে।

## ৭. Statistics Cards

Dashboard-এর গুরুত্বপূর্ণ অংশ হলো Statistics Cards।

উদাহরণ:

Total Revenue

## $24,500

+12.5%

Total Orders

## 1,250

+8.2%

Customers

## 3,450

+5.4%

Pending Orders

## 85

Pending

এগুলো কেবল UI অনুশীলনের জন্য উদাহরণমূলক সংখ্যা।

এখন Tailwind দিয়ে একটি reusable component তৈরি করুন।

JavaScript

```
function StatCard({ title, value, change }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
        {title}
      </p>

      <div className="mt-3 flex items-center justify-between gap-2">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {value}
        </h2>

        <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700">
          {change}
        </span>
      </div>
    </div>
  );
}
```

ব্যবহার:

JavaScript

```
<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
  <StatCard title="Total Revenue" value="$24,500" change="+12.5%" />
  <StatCard title="Total Orders" value="1,250" change="+8.2%" />
  <StatCard title="Customers" value="3,450" change="+5.4%" />
  <StatCard title="Pending Orders" value="85" change="Pending" />
</div>
```

এখানে একটি component দিয়েই চারটি Statistics Card তৈরি হয়েছে।

## ৮. Analytics Panel

Dashboard-এ Sales Analytics বা Revenue Chart প্রায়ই থাকে।

#### Monthly Sales

উদাহরণমূলক ডেটা

Share

Chart options



Chart-এর জন্য একটি আলাদা container তৈরি করুন।

JavaScript

```
<div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
  <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
    <h2 className="text-lg font-bold text-gray-900 dark:text-white">
      Sales Analytics
    </h2>

    <select className="rounded-lg border px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white">
      <option>Last 7 days</option>
      <option>Last 30 days</option>
      <option>Last 12 months</option>
    </select>
  </div>

  <div className="flex h-64 items-center justify-center rounded-xl bg-gray-50 text-gray-500 dark:bg-gray-800">
    Chart goes here
  </div>
</div>
```

এখানে `Chart goes here`-এর জায়গায় Recharts বা অন্য কোনো chart library ব্যবহার করা যায়।

## ৯. Recent Orders Table

Admin Dashboard-এ Recent Orders দেখানোর জন্য Table খুবই প্রয়োজনীয়।

#### Recent Orders

উদাহরণমূলক ডেটা

<table class="_6IUVGW_Table" data-d-column-sizing="auto" data-d-dividers="" style="table-layout: auto;"><tbody><tr data-d-component="table-row"><td data-d-component="table-cell" data-d-has-width="" data-d-valign="start" style="width: 30%;"><p class="w6asjq_TextBase _85PZeG_Text" data-d-component="text"><span class="w6asjq_TextBase _85PZeG_Text" data-d-component="text" data-d-default-strong="" data-d-inline="">Order ID</span></p></td><td data-d-component="table-cell" data-d-valign="start"><p class="w6asjq_TextBase _85PZeG_Text" data-d-component="text"><span class="w6asjq_TextBase _85PZeG_Text" data-d-component="text" data-d-default-strong="" data-d-inline="">Customer</span></p></td><td data-d-align="end" data-d-component="table-cell" data-d-valign="start"><p class="w6asjq_TextBase _85PZeG_Text" data-d-component="text"><span class="w6asjq_TextBase _85PZeG_Text" data-d-component="text" data-d-default-strong="" data-d-inline="">Amount</span></p></td><td data-d-component="table-cell" data-d-valign="start"><p class="w6asjq_TextBase _85PZeG_Text" data-d-component="text"><span class="w6asjq_TextBase _85PZeG_Text" data-d-component="text" data-d-default-strong="" data-d-inline="">Status</span></p></td></tr><tr data-d-component="table-row"><td data-d-component="table-cell" data-d-valign="start"><p class="w6asjq_TextBase _85PZeG_Text" data-d-component="text" data-d-weight="medium">##ORD-101</p></td><td data-d-component="table-cell" data-d-valign="start">Rahim</td><td data-d-align="end" data-d-component="table-cell" data-d-valign="start">$120</td><td data-d-component="table-cell" data-d-valign="start"><div class="ANObbW_Badge lKEGNW_Badge" data-color="success" data-size="sm" data-pill="" data-variant="soft" data-d-component="badge" data-d-weight="medium">Paid</div></td></tr><tr data-d-component="table-row"><td data-d-component="table-cell" data-d-valign="start"><p class="w6asjq_TextBase _85PZeG_Text" data-d-component="text" data-d-weight="medium">##ORD-102</p></td><td data-d-component="table-cell" data-d-valign="start">Karim</td><td data-d-align="end" data-d-component="table-cell" data-d-valign="start">$250</td><td data-d-component="table-cell" data-d-valign="start"><div class="ANObbW_Badge lKEGNW_Badge" data-color="warning" data-size="sm" data-pill="" data-variant="soft" data-d-component="badge" data-d-weight="medium">Pending</div></td></tr><tr data-d-component="table-row"><td data-d-component="table-cell" data-d-valign="start"><p class="w6asjq_TextBase _85PZeG_Text" data-d-component="text" data-d-weight="medium">##ORD-103</p></td><td data-d-component="table-cell" data-d-valign="start">Sakib</td><td data-d-align="end" data-d-component="table-cell" data-d-valign="start">$85</td><td data-d-component="table-cell" data-d-valign="start"><div class="ANObbW_Badge lKEGNW_Badge" data-color="info" data-size="sm" data-pill="" data-variant="soft" data-d-component="badge" data-d-weight="medium">Shipped</div></td></tr></tbody></table>

Tailwind দিয়ে তৈরি করার সময়:

JavaScript

```
<div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
  <table className="w-full min-w-[650px] text-left text-sm">
    <thead className="bg-gray-50 text-gray-600 dark:bg-gray-800 dark:text-gray-300">
      <tr>
        <th className="px-5 py-4">Order ID</th>
        <th className="px-5 py-4">Customer</th>
        <th className="px-5 py-4">Amount</th>
        <th className="px-5 py-4">Status</th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
        <td className="px-5 py-4">##ORD-101</td>
        <td className="px-5 py-4">Rahim</td>
        <td className="px-5 py-4">$120</td>
        <td className="px-5 py-4">
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
            Paid
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

গুরুত্বপূর্ণ utilities:

* `overflow-x-auto`: ছোট স্ক্রিনে প্রয়োজন হলে horizontal scroll।

* `min-w-[650px]`: টেবিলের সর্বনিম্ন প্রস্থ।

* `divide-y`: প্রতিটি row-এর মধ্যে divider।

* `hover:bg-gray-50`: Mouse hover করলে row-এর background পরিবর্তন।

## ১০. Responsive Dashboard

Dashboard অবশ্যই Mobile, Tablet এবং Desktop-এ ব্যবহারযোগ্য হতে হবে।

|
Screen

|

Sidebar

|

Statistics

|
| --- | --- | --- |
|

Mobile

|

Drawer বা hidden

|

১ কলাম

|
|

Tablet

|

প্রয়োজন অনুযায়ী

|

২ কলাম

|
|

Desktop

|

স্থায়ী Sidebar

|

৪ কলাম

|

Statistics-এর জন্য:

JavaScript

```
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
  {/* Stat Cards */}
</div>
```

Analytics ও Orders-এর জন্য:

JavaScript

```
<div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
  <section className="xl:col-span-2">
    Sales Analytics
  </section>

  <section>
    Traffic Summary
  </section>
</div>
```

এখানে বড় স্ক্রিনে Analytics দুই-তৃতীয়াংশ এবং Traffic Summary এক-তৃতীয়াংশ জায়গা পাবে।

## ১১. Dark Mode Integration

Day 20-এ শেখা `dark:` variant ব্যবহার করুন।

JavaScript

```
<div className="rounded-2xl border border-gray-200 bg-white p-6 text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-white">
  <h2 className="text-xl font-bold">
    Dashboard Overview
  </h2>

  <p className="mt-2 text-gray-600 dark:text-gray-400">
    Welcome to your admin dashboard.
  </p>
</div>
```

একটি consistent theme বজায় রাখতে নিচের mapping ব্যবহার করতে পারেন।

|
Element

|

Light

|

Dark

|
| --- | --- | --- |
|

Page

|

`bg-gray-50`

|

`dark:bg-gray-950`

|
|

Card

|

`bg-white`

|

`dark:bg-gray-900`

|
|

Primary text

|

`text-gray-900`

|

`dark:text-white`

|
|

Secondary text

|

`text-gray-500`

|

`dark:text-gray-400`

|
|

Border

|

`border-gray-200`

|

`dark:border-gray-800`

|

## ১২. Loading ও Empty State

Dashboard-এ ডেটা লোড হওয়ার সময় Loading UI দেখাতে হবে।

JavaScript

```
<div className="flex min-h-40 items-center justify-center">
  <div className="size-10 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600" />
</div>
```

যদি কোনো Order না থাকে:

JavaScript

```
<div className="rounded-2xl border border-dashed border-gray-300 p-10 text-center dark:border-gray-700">
  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
    No orders found
  </h3>

  <p className="mt-2 text-sm text-gray-500">
    New orders will appear here.
  </p>
</div>
```

এগুলো শুধু সুন্দর UI নয়, ব্যবহারকারীর কাছে application-এর বর্তমান অবস্থা পরিষ্কারভাবে প্রকাশ করে।

## ১৩. আজকের Project Folder Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── DashboardLayout.jsx
│   │   ├── Sidebar.jsx
│   │   └── DashboardHeader.jsx
│   │
│   ├── dashboard/
│   │   ├── StatCard.jsx
│   │   ├── SalesAnalytics.jsx
│   │   ├── TrafficSummary.jsx
│   │   └── RecentOrders.jsx
│   │
│   └── ui/
│       ├── Button.jsx
│       ├── Select.jsx
│       └── LoadingSpinner.jsx
│
├── pages/
│   └── Dashboard.jsx
│
└── App.jsx
```

প্রতিটি component-এর নির্দিষ্ট দায়িত্ব রাখুন। এতে ভবিষ্যতে API থেকে ডেটা যুক্ত করা এবং UI পরিবর্তন করা সহজ হবে।

## 🧪 ১৪. Day 26 Mini Project

আজকের Project

## TechStore Admin Dashboard

![TechStore Admin Dashboard-এর ডিজাইন রেফারেন্স](https://images.openai.com/static-rsc-4/VRsQAfLacOa8W4LQWLGnZ1mR1VyBHz6fWy8mRWLQq_kNOuoT_UFpoLe73jv9PxYpNaZ3A-mkQq6P00IWwJXOEbj9AOtet31SeaG3fyIGZy8l_wjjUc0htzn5FkMoSoi2YbimzLwpKS60p2Yc9uy6_Sc1BHQXVKnHJkEkA7f1OI4?purpose=inline)

Project Requirements

আপনার অগ্রগতি

0/10

Responsive Sidebar

Sticky Dashboard Header

চারটি Statistics Card

Sales Analytics Panel

Traffic Summary Panel

Recent Orders Table

Dark Mode

Loading State

Empty State

Mobile Responsive Layout

প্রথমে static UI তৈরি করুন। তারপর React state এবং API integration যোগ করুন। বাস্তব ডেটা না থাকলে mock data ব্যবহার করতে পারেন।

## 🧠 ১৫. Day 26 Self-Test

নিজেকে নিচের প্রশ্নগুলোর উত্তর দেওয়ার চেষ্টা করুন।

1. `grid-cols-[260px_1fr]` কীভাবে কাজ করে?

2. Dashboard-এর Sidebar এবং Main Content আলাদা রাখার সুবিধা কী?

3. `sticky top-0` ও `fixed top-0`-এর পার্থক্য কী?

4. `min-w-0` কেন Grid layout-এ কাজে লাগে?

5. Statistics Card-কে reusable component বানালে কী সুবিধা হয়?

6. `overflow-x-auto` কখন ব্যবহার করবেন?

7. Responsive Statistics Grid কীভাবে তৈরি করবেন?

8. Dark Mode-এর জন্য `dark:` কীভাবে ব্যবহার করবেন?

9. Loading ও Empty State-এর মধ্যে পার্থক্য কী?

10. Dashboard UI এবং Backend Business Logic-এর দায়িত্ব কীভাবে আলাদা?

## 📋 ১৬. Day 26 Cheat Sheet

|
কাজ

|

Tailwind Class

|
| --- | --- |
|

Full-height layout

|

`min-h-screen`

|
|

Sidebar + Content

|

`grid lg:grid-cols-[260px_1fr]`

|
|

Sticky Header

|

`sticky top-0 z-40`

|
|

Responsive Statistics

|

`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4`

|
|

Analytics Layout

|

`grid xl:grid-cols-3`

|
|

Two-column Analytics

|

`xl:col-span-2`

|
|

Card

|

`rounded-2xl border bg-white p-5 shadow-sm`

|
|

Table Scroll

|

`overflow-x-auto`

|
|

Table Divider

|

`divide-y`

|
|

Hover Row

|

`hover:bg-gray-50`

|
|

Loading Spinner

|

`animate-spin`

|
|

Dark Mode

|

`dark:bg-gray-900`

|
|

Responsive Spacing

|

`p-4 sm:p-6 lg:p-8`

|

#### Day 26-এর মূল শিক্ষা

একটি বাস্তব Dashboard তৈরি করতে শুধু Card ও Table বানালেই হয় না। Layout, component reusability, responsive design, theme এবং বিভিন্ন UI state—সবকিছু একসঙ্গে পরিকল্পনা করতে হয়।

আজকের Golden Rule:

Requirement → Layout → Components → Responsive Design → UI States → API Integration

পরবর্তী ধাপে Day 27-এ Advanced Form Design, Validation State এবং Multi-step Form UI নিয়ে কাজ করতে পারেন।


month	sales
Jan	1,200
Feb	1,800
Mar	1,500
Apr	2,400
May	2,100
Jun	3,200