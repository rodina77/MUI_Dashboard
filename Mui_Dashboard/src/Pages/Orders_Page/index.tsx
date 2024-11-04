import BasicBreadcrumbs from "../../components/Headers/PathHeader";
import DataTable from "../../components/Tables/PaginationTable";

const Order_Page = () => {
  return (
    <>
    <BasicBreadcrumbs page={'Orders'} title={"Order Table"}/>
    <DataTable/>
    </>
  );
}

export default Order_Page;
