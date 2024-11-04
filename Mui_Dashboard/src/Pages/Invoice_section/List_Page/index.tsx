import BasicBreadcrumbs from "../../../components/Headers/PathHeader";
import ListDtaTable from "../../../components/Tables/ListTable";
const List_page = () => {
  return (
    <>
    <BasicBreadcrumbs page={"Invoice"} title={"List"}/>
    <ListDtaTable/>
    </>
  );
}

export default List_page;
