import React from 'react'

import { Resources } from '../Resources'

import { PieChart } from "react-minimal-pie-chart";

// import CanvasJSReact from '@canvasjs/react-charts';
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js';

ChartJs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
  
)




function DashBoard() {


  const data ={


    labels:["0","Week 1", "Week 2","Week 3","Week 4" ],
    datasets: [
      {
        data:[100,410,150,480,180,420],
        backgroundColor:'transparent',
        borderColor:'#E9A0A0',
        pointBorderColor:'transparent',
        pointBorderWidth:4,
        tension:.5


      },
      {
        data:[200,390,200,300,200,430],
        backgroundColor:'transparent',
        borderColor:'#9BDD7C',
        pointBorderColor:'transparent',
        pointBorderWidth:4,
        tension:.5


      },

    ]
    
  
  };

  const options ={
    responsive:true,
    plugins :{
      legend :false
    },
    scales:{
      x:{
        grid:{
          display:false
        }
      },
      y:{
        min:0,
        max:500,
        ticks:{
          stepSize:100,
          callback:(value) => value 
        },
        grid:{
          borderDash:[10]
        }
      }

    }
  }

 

    
  


  const myData = [
    { title: "Dogs", value: 55, color: "#98D89E" },
    { title: "Cats", value: 31, color: "#F6DC7D" },
    { title: "Dragons", value: 14, color: "#EE8484" },
  ];
  
  return (
    <>
    <div className=" flex flex-row bg-admin-whiteSmokeLight p-6 ">


    
    <div className="lg:w-1/5  fixed overflow-y-auto  bg-black text-white rounded-xxlg ">

        <div className='p-12 '>

            <div className='text-4xl font-bold py-2  text-start '>Board.</div>
            <div  class=" my-7 flex text-start font-bold"> <img className='pr-4' src = {Resources.images.dashboard}></img>Dashboard</div>
            <div  class=" my-7 flex text-start font-normal"> <img className='pr-4' src = {Resources.images.transactions}></img>Transactions</div>
            <div  class=" my-7 flex text-start font-normal"> <img className='pr-4' src = {Resources.images.schedule}></img>Schedules</div>
            <div  class=" my-7 flex text-start font-normal"> <img className='pr-4' src = {Resources.images.user}></img>User</div>

            <div  class=" my-7 flex text-start"> <img className='pr-4' src = {Resources.images.settings}></img>Settings</div>


            <div className=' flex  flex-col  justify-end border border-white lg:h-68 text-start'>
                <div className='mb-3'>Help</div>
                <div className='block'>Contact us</div>
                

            </div>
            </div>

      




        

    </div>


    <div className = "w-4/5  flex-1  h-full overflow-y-auto ml-72">
    <div className='lg:px-12'>


    
    <div className=' flex flex-row lg:h-7  lg:my-5'>
      <p className='text-2xl font-bold '>Dashboard</p>
      <div className='flex flex-row justify-end w-full ' >
      <div class="flex items-center justify-center">



    <div class="flex justify-between bg-white w-44 rounded ">
       
        <p className=' px-2 py-0.5 '> Search... </p>
        <div className=' '>
        <img  class = " p-2"src = {Resources.images.search}></img>
        </div>

        
    </div>


</div>
      <img class = "mx-5" src = {Resources.images.bell}></img>
      <img src = {Resources.images.user_icon}></img>

      </div>



    </div>


    <div className=' flex  md:flex-row flex-col justify-between border-2 border-black my-9'>

      <div className='h-30 w-56 border-2 border-black bg-Card1 rounded-2.5xl p-5'> 
      <div className='border-1 border-red-900 flex justify-end'>
        <img src ={Resources.images.download}></img>

      </div>

      <div  className='text-start'>
        <p className='text-sm font-medium text-black '>Total Revenues</p>
        <p className='text-2xl font-bold text-black '>$2313213</p>


      </div>
      
      </div>
      <div className='h-30 w-56 border-2 border-black bg-Card2Pink rounded-2.5xl p-5'> 
      <div className='border-1 border-red-900 flex justify-end'>
        <img src ={Resources.images.clipped}></img>

      </div>

      <div  className='text-start'>
        <p className='text-sm font-medium text-black '>Total Transactions</p>
        <p className='text-2xl font-bold text-black '>13213</p>


      </div>
      
      </div>
      <div className='h-30 w-56 border-2 border-black bg-Card3Pink rounded-2.5xl p-5'> 
      <div className='border-1 border-red-900 flex justify-end'>
        <img src ={Resources.images.like}></img>

      </div>

      <div  className='text-start'>
        <p className='text-sm font-medium text-black '>Total Likes</p>
        <p className='text-2xl font-bold text-black '>13213</p>


      </div>
      
      </div>
      <div className='h-30 w-56 border-2 border-black bg-Card4blue rounded-2.5xl p-5'> 
      <div className='border-1 border-red-900 flex justify-end'>
        <img src ={Resources.images.people}></img>

      </div>

      <div  className='text-start'>
        <p className='text-sm font-medium text-black '>Total Users</p>
        <p className='text-2xl font-bold text-black '>13213</p>


      </div>
      
      </div>
      





    </div>




{/* Chart. */}
<div className='h-80 mb-10 border-1  border-black p-10 bg-white rounded-2.5xl'>

  {/* heading */}
<p className=' flex items-start font-bold text-lg'>Activities</p>

<div className='flex flex-row justify-between'>


<div className='flex flex-row '>

  <p className='text-xs font-normal pt-1 text-texts mr-2'>May - June2021   </p>
  <img className='block  pb-1 m-auto py-1'  width="8" height="5"  src ={Resources.images.downarrow}></img>

  </div>

  
<div className='flex flex-row ' >


  <div className='flex flex-row mr-4'>

  <img  className = "p-1" src={Resources.images.circle3}></img> 
<p className='font-bold text-sm ml-2'>Guest</p>
  
  </div>
  <div className='flex flex-row ml-4'>

<img  className = "p-1" src={Resources.images.circle1}></img> 
<p className='font-bold text-sm ml-2'>User</p>

</div>

</div>

</div>

{/*line graph content */}

<Line height={200} width={1000} data={data} options={options} className='mt-4'></Line>




  



    






</div>


{/* Graph */}
<div   className='flex flex-row justify-between'>
{/* Left region*/}
<div className='lg:w-125 h-64 border-1 border-black p-10 bg-white rounded-2.5xl'>


{/* heading */}
<div class = "flex flex-row justify-between">
  <p className='font-bold text-lg'>Top products</p>
<div className='flex flex-row '>

  <p className='text-xs font-normal pt-1 text-texts mr-2'>May - June2021   </p>
  <img className='block m-auto pb-1'  width="8" height="5"  src ={Resources.images.downarrow}></img>

  
    
</div>

  


</div>

<div className='flex flex-row p-3 h-40'>


<div className='border-2 border-black w-5/12'>
<PieChart
        // your data
        data={myData}
        // width and height of the view box
        // viewBoxSize={[500,500]}
      />

</div>
{/* Right Region of pie chart*/}
<div className='w-7/12 border-2 border-black ml-5'>

  <div className='flex flex-col   border-2 border-black'>


{/* Percentage shown of parts*/}
    <div className='h-9 mb-3'>
      <div className='flex flex-row items-start'>
        <img  className = "p-1" src={Resources.images.circle1}></img>
        <div>
        <div className='flex flex-col'>
        <p className='font-bold text-sm '>Basic Trees</p>
        <p className=' flex items-start font-normal text-xs text-texts'>55%</p>
      </div>

        </div>
      
      </div>
     

    </div>
    <div className='h-9 mb-3'>
      <div className='flex flex-row items-start'>
        <img  className = "p-1" src={Resources.images.circle2}></img>
        <div>
        <div className='flex flex-col'>
        <p className='font-bold text-sm '>Custom short Pants</p>
        <p className=' flex items-start font-normal text-xs text-texts'>55%</p>
      </div>

        </div>
      
      </div>
     

    </div>
    <div className='h-9 '>
      <div className='flex flex-row items-start'>
        <img  className = "p-1" src={Resources.images.circle3}></img>
        <div>
        <div className='flex flex-col'>
        <p className='font-bold text-sm '>Basic Trees</p>
        <p className=' flex items-start font-normal text-xs text-texts'>55%</p>
      </div>

        </div>
      
      </div>
     

    </div>
    
    

  </div>



</div>
</div>




</div>
<div className='lg:w-125  h-64 border-1 border-black p-10 bg-white rounded-2.5xl'>

{/* heading*/}
<div class = "flex flex-row justify-between">
  <p className='font-bold text-lg'>Todays Schedule</p>
<div className='flex flex-row '>

  <p className='text-xs font-normal pt-1 text-texts mr-2'>See all </p>
  <img className='block m-auto pb-1'  width="5" height="5"  src ={Resources.images.rightarrow}></img>
    
</div>

  


</div>


<div className='flex flex-col   border-2 border-black'>


  <div className='lg:h-16 flex flex-row my-3'>

    <div className='w-1 h-full bg-lightgreen'></div>

    <div className='flex flex-col ml-2 '>
        <p className='font-bold text-sm '>Meeting with suppliers from Kuta Bali</p>
        <p className=' flex items-start font-normal text-xs text-texts'>14.00-15.00</p>
        <p className=' flex items-start font-normal text-xs text-texts'>at Sunset Road, Kuta, Bali </p>
      </div>


      


    


  </div>
  <div className='lg:h-16 flex flex-row my-3'>

<div className='w-1 h-full bg-lightpurple'></div>

<div className='flex flex-col ml-2 '>
    <p className='font-bold text-sm '>Meeting with suppliers from Kuta Bali</p>
    <p className=' flex items-start font-normal text-xs text-texts'>14.00-15.00</p>
    <p className=' flex items-start font-normal text-xs text-texts'>at Sunset Road, Kuta, Bali </p>
  </div>


  





</div>



  </div>






</div>

</div>




    </div>
    </div >
    </div>
    
    </>
  )
}

export default DashBoard;