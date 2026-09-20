
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Practice from "./components/Practice";
import ProductCard from "./components/ProductCard";
import Table from "./components/Table";

export default function () {
    return (
        <div className="dark:bg-gray-900 dark:text-white">
        <Navbar/>
          <Practice/>
          <ProductCard/>
          <Form/>
          <Table/>
        </div>
    )
}