"use client"
import useSWR from 'swr'
import axios from 'axios'
//Components
import Order from '../../../../components/order'

function Admin() {

  const fetcher = () => axios("/api/orders").then(datos => datos.data)
  const { data, error, isLoading } = useSWR('/api/orders', fetcher, {refreshInterval: 100})
  // console.log(data?.orders);
  return (
    <div>
      <h1 className='text-4xl font-black'>Admin Panel</h1>
      <p className='text-2xl my-10'>Manage your orders</p>
      {
        data?.orders && data.orders.length ? data?.orders.map(order =>
          <Order
            key={order.id}
            order={order}
          />
        )
          :
          <p className=''>There are no pending orders</p>
      }
    </div>
  )
}

export default Admin