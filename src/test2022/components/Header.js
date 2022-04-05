import React from 'react';
import '../style/header.css'

const Header =()=>{
	return(
		<>
			<div className='container'>
				<h1 className='header_title'>2nd largest  of Transactions:</h1>
				<h4>1.10ETH</h4>
				<div className='header_transaction'>
					<div className='header_transaction_item'>
						<img src='/Coin.png' alt=''/>
						<span className='total_transaction'>Total transaction:</span>
						<p>79</p>
					</div>
					<div className='header_transaction_item'>	
						<img src='/Coin.png' alt=''/>
						<span className='avg_block_time'>AVG of block time:</span>
						<p>19.455</p>
					</div>
					<div className='header_transaction_item'>
						<img src='/Coin.png' alt=''/>
						<span className='ETH_transaction'>AVG of ETH/transaction:</span>
						<p>1.10 ETH</p>
					</div>
				</div>
			</div>
		</>
	)
}
export default Header;