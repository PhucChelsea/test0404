import React from 'react';
import moment from 'moment';
import '../style/card.css'
import InfiniteScroll from 'react-infinite-scroll-component';

const Card = (props) => {
	const { data, loadMoreData, hasMore } = props;
	return (
		<>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<InfiniteScroll
					// className='list_card'
					dataLength={data?.length}
					next={loadMoreData}
					hasMore={hasMore}
				// loader={<h4>Loading...</h4>}
				// endMessage={
				// 	<p style={{ textAlign: 'center' }}>
				// 		<b>Yay! You have seen it all</b>
				// 	</p>
				// }
				>
					<div className='list_card'>
						{data?.length > 0 &&
							data.map((item, index) => (
								<div className='card_cover'>
									<div key={index} className='card_container' >
										<div className='card_image'>
											<img className='image' src={item?.coverPhoto} alt='card' />
											<button className='image_btn'>{item?.status}</button>
										</div>
										<div className='item_content'>
											<p className='card_title'>{item?.name}</p>
											<img src={item?.photo} width={32} height={32} style={{ borderRadius: '50%' }} />
										</div>
										<p className='card_symbol'>$ {item?.symbol}</p>
										<div className='item_content'>
											<p className='card_total_raise'> Total Raise :</p>
											<p style={{ textAlign: 'end' }}>$ {item?.totalRaise} Max</p>
										</div>
										<div className='item_content'>
											<p className='card_personal'> Personal Allocation :</p>
											<p style={{ textAlign: 'end' }}>$ {item?.personalAllocation}</p>
										</div>
										<p className='card_time'>IDO starts on {moment(item?.startOn).format("MMMM DD YYYY")}</p>
									</div>
								</div>
							))
						}
					</div>
				</InfiniteScroll>
			</div>
		</>
	)
}
export default React.memo(Card);