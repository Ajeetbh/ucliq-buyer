import React from 'react';
//import '../style/buySell.css'
import Buyer from '../components/Buyer';
import Benefits from '../components/Benefits';
import RegBuyer from '../components/RegBuyer';
import Seller from '../components/Seller'
import RegSeller from '../components/RegSeller';
const BuySell = () => {
  return (
    <div className='buy'>
      <section><Buyer/></section>
      <section><Benefits/></section>
      <section><RegBuyer/></section>
      <section><Seller/></section>
      <section><RegSeller/></section>
    </div>
  )
}
export default BuySell;

