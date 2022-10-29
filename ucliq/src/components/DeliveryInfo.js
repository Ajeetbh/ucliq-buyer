import React from 'react'
import '../style/deliveryInfo.css'

const DeliveryInfo = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='forth'>
                <div className='forthInfo'>
                    <h5>HOME DELIVERY</h5>
                    <h1>Sit At Home We Will Take Care Your Order</h1>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium volupatatum deleniti atque corrupti quos.</p>  
                    <span>Explore Now</span>
                </div>
                <div className='forthImage'>
                    <div className='man'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo_t81XTxrbpsaupBsdITSjqHxa6j2nNbCzTYRojd51SWbJUt6yB6B13Km8nO1i_uslOM&usqp=CAU" alt="image1"/>
                    </div>
                    <div className='second1'>
                        <div className='bike'>
                        <img src="https://www.pngitem.com/pimgs/m/3-37779_transparent-delivery-png-delivery-boy-with-bike-png.png" alt="bike5"/>
                        </div>
                        <h5>Bike Delivery</h5>
                        <span>Bicycle service assures that your packages arrive quickly.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default DeliveryInfo;
