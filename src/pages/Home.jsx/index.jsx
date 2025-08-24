// import React from 'react';
// import Banner from './banner';
// import Record from './record';
// import Profile from './Profilechart';
// import QrCard from './QrCard';
// import Settlement from './settlement';
// import Transaction from './transaction';

// const index = () => {
//   return (

//     <div className='mx-5'>
//        <Banner /> 
//       <div className="flex flex-col gap-4">
//         <Record />
//         <div className="flex flex-row gap-4">
//           {/* <Profile /> */}
//           <div className="w-1/2">
//             <QrCard />
//           </div>
//           <div className="w-1/2">
//             <QrCard />
//           </div>
//         </div>
//         <div className="flex flex-row gap-4 w-full">
//           <div className="w-1/2">
//            <Settlement />
//           </div>
//           <div className="w-1/2">
//             <Transaction />
//           </div>
//         </div>

        
//         <div>
      
//         </div>
        
//       </div>


//     </div>
//   )
// }

// export default index



import React from 'react';
import Banner from './banner';
import Record from './record';
import Profile from './Profilechart';
import QrCard from './QrCard';
import Settlement from './settlement';
import Transaction from './transaction';

const index = () => {
  return (
    <div className="w-full max-w-[1000px]">
      <Banner /> 
      <div className="flex flex-col gap-4 ">
        <Record />

        {/* QrCard section */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2">
            <Profile />
          </div>
          <div className="w-full md:w-1/2">
            <QrCard />
          </div>
        </div>

        {/* Settlement + Transaction */}
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="w-full md:w-1/2">
            <Settlement />
          </div>
          <div className="w-full md:w-1/2">
            <Transaction />
          </div>
        </div>
      </div>
    </div>
  )
}

export default index