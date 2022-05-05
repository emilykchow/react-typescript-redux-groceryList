import React, { useEffect } from 'react'
import Chart from "react-apexcharts";
import { getArtistUUID, getMonthlyListeners } from '../../network/network';
import { getArtistDetails } from '../../redux/CityListenerSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';



const CityListenersChart = () => {
  const dispatch = useAppDispatch()
  const value = useAppSelector((state: any)  => state.cityListenerReducer.value)
  const data ={
  options: {
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
    }
  },
  series: [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }
  ]
}

useEffect(() => {
  if (!Object.keys(value).length) {
    const result = getArtistUUID('billie eillish')
    result.then(res => {
      if (res.items) {
        dispatch(getArtistDetails(res.items[0]))
      }
    })
  }

  if (value.uuid) {
    const monthlyListeners = getMonthlyListeners(value.uuid)
    monthlyListeners.then(res => {
      console.log(res)
    })
  }

}, [dispatch, value.uuid])


  return (
    <div>
      <Chart options={data.options} series={data.series} type="bar" width="500"/>
    </div>
  )
}

export default CityListenersChart