import React, { useEffect, useState } from 'react';
import Card from './Card.js';
import { api } from '../service/api.js'

const filter = {
	"page": 1,
	"pageSize": 10,
	"symbol": "",
	"name": "",
	"status": "SOLD_OUT",
	"totalRaise": [100,200],
	"personalAllocation": [0.07,0.08]
}
const ListCard = () => {
	const [listData, setListData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(1)
	const [hasMore, setHasMore]= useState(true)
	useEffect(()=>{
		try {
			api.getDataListCard(filter).then((res)=>{
				if(res?.data?.message === 'SUCCESS'){
					setListData(res?.data?.data?.fundProjects)
				}
			})
		} catch (error) {
		}
	},[])
	const loadMoreData = async () =>{
		const listDataScroll = await api.getDataListCard({...filter, "page": page + 1 })
		.then(res=>{
			const dataScroll = res?.data?.data?.fundProjects
			return dataScroll
		})
		console.log('listDataScroll',listDataScroll)
		setListData([...listData,...listDataScroll])
		if(listDataScroll?.length === 0 || listDataScroll?.length < 10){
			console.log(1)
			setHasMore(false)
		}
		setPage( page + 1 );
	}
	return(
		<>
			<Card 
				data={listData}
				hasMore={hasMore}
				loadMoreData={loadMoreData}
			/>
		</>
	)
}
export default ListCard;