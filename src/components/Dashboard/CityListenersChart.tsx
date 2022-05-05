import React, { useEffect } from 'react'
import Chart from "react-apexcharts";
import { getArtistUUID, getMonthlyListeners } from '../../network/network';
import { getArtistDetails } from '../../redux/CityListenerSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';


const CityListenersChart = () => {
  const dispatch = useAppDispatch()
  const artistDetails = useAppSelector((state: any)  => state.cityListenerReducer.artistDetails)
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

const cleanData = (res: Record<string, any>[]) => {
  let seriesData: string[] = []
  // Get the first object
  let firstObject = res[0].cityPlots
  // Under cityplots get the first 12
  let cleanedArrays = firstObject.slice(0, 11)
  cleanedArrays.map((item: Record<string, any>) => seriesData.push(item.value))
}
useEffect(() => {
  if (!Object.keys(artistDetails).length) {
    const result = getArtistUUID('billie eillish')
    result.then(res => {
      if (res.items) {
        dispatch(getArtistDetails(res.items[0]))
      }
    })
  }

  if (artistDetails.uuid) {
    const monthlyListeners = getMonthlyListeners(artistDetails.uuid)
    monthlyListeners.then(res => {
      if (res.items) {
        cleanData(res.items)
      }
    })
  }

}, [dispatch, artistDetails])


  return (
    <div>
      <Chart options={data.options} series={data.series} type="bar" width="500"/>
    </div>
  )
}

export default CityListenersChart