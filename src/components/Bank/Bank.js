import Bank_1 from "../../assets/images/Bank_1.webp"
import Bank_2 from "../../assets/images/Bank_2.webp"
import Bank_3 from "../../assets/images/Bank_3.webp"
import Bank_4 from "../../assets/images/Bank_4.webp"
import "../Bank/Bank.css";

function Bank() {
    return (
      <div className="bank">
        <div className="bank-offer">
            <h1>Bank Offer</h1>
            <img className="images-bank" src={Bank_1}/>
            <img className="images-bank" src={Bank_2}/>
            <img className="images-bank" src={Bank_3}/>
            <img className="images-bank" src={Bank_4}/>
            
        </div>
      
      </div>
    );
  }

  export default Bank;