import React,{useEffect,useState} from 'react'

import { Resources } from '../Resources'

import { PieChart } from "react-minimal-pie-chart";
import { AiOutlineSearch } from "react-icons/ai";

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

  function generateRandomArray() {
    var array = [];
    
    for (var i = 0; i < 6; i++) {
      var randomNumber = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
      array.push(randomNumber);
    }
    
    return array;
  }
  
  var randomArray1 = generateRandomArray();
  var randomArray2 = generateRandomArray();

 
  
  const data ={


    labels:["0","Week 1", "Week 2","Week 3","Week 4" ],
    datasets: [
      {
        data:randomArray1,
        backgroundColor:'transparent',
        borderColor:'#E9A0A0',
        pointBorderColor:'transparent',
        pointBorderWidth:4,
        tension:.5


      },
      {
        data:randomArray2,
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

 

  function generateRandomNumbers() {
    const numbers = [];
  
    // Generate two random numbers between 0 and 100
    const num1 = Math.floor(Math.random() * 101);
    const num2 = Math.floor(Math.random() * (100 - num1 + 1));
  
    // Calculate the third number to ensure the sum is 100
    const num3 = 100 - num1 - num2;
  
    numbers.push(num1, num2, num3);
    return numbers;
  }
  
  const generatedNumbers = generateRandomNumbers();
  console.log(generatedNumbers);

  


  const myData = [
    { title: "Dogs", value: generatedNumbers[0], color: "#98D89E" },
    { title: "Cats", value: generatedNumbers[1], color: "#F6DC7D" },
    { title: "Dragons", value: generatedNumbers[2], color: "#EE8484" },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    handleMediaQueryChange(mediaQuery);
    mediaQuery.addListener(handleMediaQueryChange);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);
  
  return (
    <>

    {isMobile && 
    
    <>
    <div className='fixed bottom-0 w-full  bg-black'>


      <div className='flex flex-row justify-between'>

        <img  className=" px-5 py-5 font-bold" src={Resources.images.dashboard}></img>
        <img  className=" px-5 py-5" src={Resources.images.transactions}></img>
        <img  className=" px-5 py-5" src={Resources.images.schedule}></img>
        <img  className=" px-5 py-5" src={Resources.images.user}></img>
        <img  className=" px-5 py-5" src={Resources.images.settings}></img>

      </div>
    




    </div>
    
    </>}
    <div className=" flex flex-row bg-admin-whiteSmokeLight p-6 ">


    
    <div className="lg:w-1/5   lg:fixed overflow-y-auto  bg-black text-white rounded-xxlg hidden md:block">

        <div className='p-12 '>

            <div className='font-montse text-4xl font-extrabold py-2  text-start '>Board.</div>
            <div  class="font-montse  my-7 flex text-start font-bold"> <img className='pr-4' src = {Resources.images.dashboard}></img>Dashboard</div>
            <div  class="font-montse  my-7 flex text-start font-normal"> <img className='pr-4' src = {Resources.images.transactions}></img>Transactions</div>
            <div  class="font-montse  my-7 flex text-start font-normal"> <img className='pr-4' src = {Resources.images.schedule}></img>Schedules</div>
            <div  class="font-montse  my-7 flex text-start font-normal"> <img className='pr-4' src = {Resources.images.user}></img>User</div>

            <div  class=" my-7 flex text-start"> <img className='pr-4' src = {Resources.images.settings}></img>Settings</div>


            <div className=' flex  flex-col  justify-end   lg:h-68 text-start'>
                <div className='font-montse mb-3'>Help</div>
                <div className='font-montse block'>Contact us</div>
                

            </div>
            </div>

      




        

    </div>


    <div className = "lg:w-4/5   flex-1  h-full overflow-y-auto lg:ml-72">
    <div className='md:px-4 lg:px-12'>


    
    <div className=' flex flex-row lg:h-7  lg:my-5'>
      <p className='text-lg  md:text-2xl font-bold '>Dashboard</p>
      <div className='flex flex-row justify-end w-full ' >
      <div class="flex items-center justify-center">



 {!isMobile &&    <div class="flex justify-between bg-white w-44 rounded-lg p-0.5">
       
        <p className=' px-2 py-0.5 '> Search... </p>
        <div className=' '>
        <img  class = " p-2"src = {Resources.images.search}></img>
        </div>

        
    </div>}
    {isMobile && 
    <AiOutlineSearch
              className="lg:!hidden dark:!text-whiteSmoke"
              size={24}
            />
    }


</div>
      <img class = "mx-5" src = {Resources.images.bell}></img>
      <img src = {Resources.images.user_icon}></img>

      </div>



    </div>


    <div className=' flex  md:flex-row flex-col items-center lg:justify-between  my-9'>

      <div className='h-30 w-full md:w-56  my-5 lg:my-0 bg-Card1 rounded-2.5xl p-5'> 
      <div className='  border-red-900 flex justify-end'>
        <img src ={Resources.images.download}></img>

      </div>

      <div  className='text-start'>
        <p className='text-sm font-medium text-black '>Total Revenues</p>
        <p className='text-2xl   font-bold text-black '>${randomArray1[3]}</p>


      </div>
      
      </div>
      <div className='h-30 w-full md:w-56 my-5 lg:my-0 bg-Card2Pink rounded-2.5xl p-5'> 
      <div className='  border-red-900 flex justify-end'>
        <img src ={Resources.images.clipped}></img>

      </div>

      <div  className='text-start'>
        <p className='text-sm font-medium text-black '>Total Transactions</p>
        <p className='text-2xl font-bold  text-black '>{randomArray1[0]}</p>


      </div>
      
      </div>
      <div className='h-30 w-full md:w-56 my-5 lg:my-0 bg-Card3Pink rounded-2.5xl p-5'> 
      <div className='  border-red-900 flex justify-end'>
        <img src ={Resources.images.like}></img>

      </div>

      <div  className='text-start'>
        <p className='text-sm font-medium text-black '>Total Likes</p>
        <p className='text-2xl font-bold text-black  '>{randomArray1[1]}</p>


      </div>
      
      </div>
      <div className='h-30 w-full md:w-56 my-5 lg:my-0 bg-Card4blue rounded-2.5xl p-5'> 
      <div className='  border-red-900 flex justify-end'>
        <img src ={Resources.images.people}></img>

      </div>

      <div  className='text-start'>
        <p className='text-sm font-medium text-black '>Total Users</p>
        <p className='text-2xl font-sans font-bold text-black  '>{randomArray1[2]}</p>


      </div>
      
      </div>
      





    </div>




{/* Chart. */}
<div className='h-80 mb-10  p-5 md:p-10 bg-white rounded-2.5xl'>

  {/* heading */}
<p className=' flex  items-start font-bold text-lg'>Activities</p>

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
<div   className='flex lg:flex-row flex-col justify-between mb-15 md:mb-0'>
{/* Left region*/}
<div className='lg:w-131.25 h-64  p-5 md:p-10 lg:mr-2 bg-white rounded-2.5xl'>


{/* heading */}
<div class = "flex flex-row justify-between">
  <p className='font-bold text-lg'>Top products</p>
<div className='flex flex-row '>

  <p className='text-xs font-normal pt-1 text-texts mr-2'>May - June2021   </p>
  <img className='block m-auto pb-1'  width="8" height="5"  src ={Resources.images.downarrow}></img>

  
    
</div>

  


</div>

<div className='flex flex-row p-3 h-40'>


<div className=' w-5/12'>
<PieChart
        // your data
        data={myData}
        // width and height of the view box
        // viewBoxSize={[500,500]}
      />

</div>
{/* Right Region of pie chart*/}
<div className='w-7/12  ml-8'>

  <div className='flex flex-col   '>


{/* Percentage shown of parts*/}
    <div className='h-9 mb-3'>
      <div className='flex flex-row items-start'>
        <img  className = "p-1" src={Resources.images.circle1}></img>
        <div>
        <div className='flex flex-col'>
        <p className='font-bold font-montse text-sm '>Basic Tees</p>
        <p className=' flex items-start font-normal text-xs text-texts'>{generatedNumbers[0]}%</p>
      </div>

        </div>
      
      </div>
     

    </div>
    <div className='h-9 mb-3'>
      <div className='flex flex-row items-start'>
        <img  className = "p-1" src={Resources.images.circle2}></img>
        <div>
        <div className='flex flex-col'>
        <p className='font-bold text-sm font-montse '>Custom Shorts</p>
        <p className=' flex items-start font-normal text-xs text-texts'>{generatedNumbers[1]}%</p>
      </div>

        </div>
      
      </div>
     

    </div>
    <div className='h-9 '>
      <div className='flex flex-row items-start'>
        <img  className = "p-1" src={Resources.images.circle3}></img>
        <div>
        <div className='flex flex-col'>
        <p className='font-bold text-sm font-montse'>Super Hoodies</p>
        <p className=' flex items-start font-normal text-xs text-texts'>{generatedNumbers[2]}%</p>
      </div>

        </div>
      
      </div>
     

    </div>
    
    

  </div>



</div>
</div>




</div>
<div className='lg:w-131.25  mt-10 lg:mt-0 h-64  p-5 md:p-10 bg-white rounded-2.5xl'>

{/* heading*/}
<div class = "flex flex-row justify-between">
  <p className='font-bold text-lg'>Todays Schedule</p>
<div className='flex flex-row '>

  <p className='text-xs font-normal pt-1 text-texts mr-2'>See all </p>
  <img className='block m-auto pb-1'  width="5" height="5"  src ={Resources.images.rightarrow}></img>
    
</div>

  


</div>


<div className='flex flex-col  '>


  <div className='lg:h-16 flex flex-row my-3'>

    <div className='w-1 h-16  bg-lightgreen'></div>

    <div className='flex flex-col ml-2 '>
        <p className='font-bold text-sm  font-lato'>Meeting with suppliers from Kuta Bali</p>
        <p className=' flex items-start font-normal font-lato text-xs text-texts'>14.00-15.00</p>
        <p className=' flex items-start font-normal font-lato text-xs text-texts'>at Sunset Road, Kuta, Bali </p>
      </div>


      


    


  </div>
  <div className='lg:h-16 flex flex-row my-3'>

<div className='w-1 h-16  bg-lightpurple'></div>

<div className='flex flex-col ml-2 '>
    <p className='font-bold text-sm font-lato'>Check operation at Giga Factory 1</p>
    <p className=' flex items-start font-normal font-lato text-xs text-texts'>18.00-20.00</p>
    <p className=' flex items-start font-normal font-lato text-xs text-texts'>at Central Jakarta </p>
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