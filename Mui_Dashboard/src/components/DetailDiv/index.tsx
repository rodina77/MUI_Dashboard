import BasicTable from "../Tables/Table";
import DisableElevation from "../Button/Button";
const DetailCard = () => {
  return (
    <>
    <div style={{backgroundColor:'white', margin:'auto' ,padding:'30px', width:'70%', boxShadow:'rgba(149, 157, 165, 0.2) 0px 8px 24px;'}}>
      <div>
        <p>Hello Anna Walley,</p>
        <p>This is the receipt for a payment of $268.85 (USD) you made to Mira.</p>
        <div style={{display:'flex' , justifyContent:'space-between'}}>
        <p>Payment No.</p>
        <p>Payment Date</p>
        </div>
        <div style={{display:'flex' , justifyContent:'space-between'}}>
        <p>741037024</p>
        <p>January 2, 2023 - 03:45 pm</p>
        </div>
        <hr style={{color:'#eceff1'}}/>
  
        <div style={{display:'flex' , justifyContent:'space-between'}}>
        <p>Client</p>
        <p>Payment To</p>
        </div>
        <div style={{display:'flex' , justifyContent:'space-between'}}>
        <p>Client</p>
        <p>Anna Walley</p>
        </div>
        <div style={{display:'flex' , justifyContent:'space-between'}}>
        <p>4183 Forest Avenue</p>
        <p>New York City</p>
        </div>
        <div style={{display:'flex' , justifyContent:'space-between'}}>
        <p>10011</p>
        <p>USA</p>
        </div>
        <div style={{display:'flex' , justifyContent:'space-between'}}>
        <a href="">anna@walley.com</a>
        <a href="">Payment To</a>
        </div>
        <div style={{display:'flex' , justifyContent:'space-between'}}>
        <p>Mira LLC</p>
        <p>354 Roy Alley</p>
        </div>
        <div style={{display:'flex' , justifyContent:'space-between'}}>
        <p>Denver</p>
        <p>80202</p>
        </div>
        <div style={{display:'flex' , justifyContent:'space-between'}}>
        <p>USA</p>
        <p>info@mira.com</p>
        </div>

      </div>
      <BasicTable/>
      <p style={{textAlign:'center'}}>Extra note: Please send all items at the same time to the shipping address. Thanks in advance.</p>
      <div style={{display:'flex' , justifyContent:'center'}}>
      <DisableElevation title={"print the recipe"}/>
      </div>
    </div>
    </>
  );
}

export default DetailCard;
