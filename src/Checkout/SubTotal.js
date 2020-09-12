import React from 'react';
import '../css/header.css';
import CurrencyFormat from 'react-currency-format';
import { UseStateValue } from '../StateProvider/StateProvider';
function SubTotal() {
    const [{basket}]=UseStateValue()
    // const [price,setPrice]=useState('')
  return (
    <div className="subtotal">
      <CurrencyFormat
        decimalScale={2}
        value={basket.reduce((a, b)=> a + b.price, 0)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        renderText={(value) => <div><p>SubTotal ({basket?.length} items):<strong>{value}</strong></p>
        <small className="subtotal_gift">
           <input type='checkbox' className="subtotal_input"/> This Order contain a gift
        </small></div>}
      />
      <button className="subtotal_button">Proccesd to Checkout </button>
    </div>
  );
}

export default SubTotal;
