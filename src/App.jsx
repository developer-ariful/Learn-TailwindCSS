import AdminTable from "./components/AdminTable";
import Practice from "./components/Practice";
import ProductCard from "./components/ProductCard";
import Table from "./components/Table";

export default function () {
    return (
        <>
          <Practice/>
          <br /><br />
          <Table/>
          <br /><br />
          <AdminTable/>
          <br /><br />
          <ProductCard/>
          <br /><br />
        </>
    )
}