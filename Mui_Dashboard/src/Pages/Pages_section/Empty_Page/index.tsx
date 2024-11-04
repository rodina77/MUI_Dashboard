import BasicBreadcrumbs from '../../../components/Headers/PathHeader';
import './index.css'
const EmptyPage = () => {

  return (
    <div style={{position:'absolute', top:'100px', width:'100%'}}>
    <BasicBreadcrumbs page={'pages'} title={"Empty Page"}/>

        <div style={{  boxShadow:'rgba(50, 50, 93, 0.024) 0px 2px 5px -1px, rgba(0, 0, 0, 0.05) 0px 1px 3px -1px;' ,padding:'30px', backgroundColor:'white'}}>
          <h2>Empty Card</h2>
          <h4>Empty card</h4>
        </div>

    </div>
  );
}

export default EmptyPage;
