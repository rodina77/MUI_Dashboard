import BasicBreadcrumbs from "../../components/Headers/PathHeader";
import ImgDataTable from "../../components/Tables/ImagesTable";
const Products_page = () => {
  return (
    <>
    <BasicBreadcrumbs page={"Products"} title={"Product Table"}/>
    <ImgDataTable/>
    </>
  );
}

export default Products_page;
