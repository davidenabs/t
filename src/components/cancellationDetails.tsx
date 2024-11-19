import { useParams } from 'react-router-dom';
import { bookingImg } from '../assets/images';

// Sample cancellation data (Replace with actual data fetching if needed)
const cancellationDetails = {
  id: "#446664",
  name: "Oyinkansola Soleye",
  dateCancelled: "20 Dec, 2024",
  playpointsRefunded: "10",
  mobileNumber: "+234 7060464848",
  email: "oyinkansola@gmail.com",
  pitch: "Plutos Football Pitch",
  status: "Cancelled",
};

const CancellationDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="bg-white relative ml-72 p-8 mt-24">
      <div className="flex flex-row justify-between w-full">
        <h2 className="text-2xl text-[#01031A] font-bold mb-6">Cancellation Details</h2>
        <select
          name="days"
          id="options"
          className="text-[16px] font-bold text-[#141B34] w-36 h-10 border border-[#8F55A224] bg-[#8F55A224] rounded-md"
        >
          <option value="days">Last 30 Days</option>
        </select>
      </div>
      
      <div className="mt-10">
        <h2 className="text-xl font-semibold">{cancellationDetails.name}</h2>
        <p className="text-gray-500">{cancellationDetails.id}</p>
      </div>
      
      <div className="mt-[-20px] flex flex-row">
        <div>
          <h2 className="ml-60 mt-5 font-bold">Cancellation Details</h2>
          <img
            src={bookingImg}
            alt={`${cancellationDetails.name}'s profile`}
            className="mt-[-5px] "
          />
        </div>
        
        <div className='text-[#333543] text-xs mt-12 ml-[-150px]'>
            <table className="w-full">
                <tbody>
                   <tr className="border-none">
                      <td className="font-semibold pr-8 py-3">Date Cancelled:</td>
                      <td>{cancellationDetails.dateCancelled}</td>
                   </tr>
                  <tr className="border-none">
                     <td className="font-semibold pr-8 py-3">Playpoints Refunded:</td>
                     <td>{cancellationDetails.playpointsRefunded}</td>
                  </tr>
                  <tr className="border-none">
                     <td className="font-semibold pr-8 py-3">Mobile Number:</td>
                     <td>{cancellationDetails.mobileNumber}</td>
                  </tr>
                  <tr className="border-none">
                     <td className="font-semibold pr-8 py-3">Email Address:</td>
                     <td>{cancellationDetails.email}</td>
                  </tr>
                  <tr className="border-none">
                      <td className="font-semibold pr-8 py-3">Pitch Booked:</td>
                      <td>{cancellationDetails.pitch}</td>
                  </tr>
               </tbody>
            </table>
        </div>
     </div>
      
      <button className=" ml-64 h-[38px] w-[140px] text-xs px-4 py-2 bg-playden-primary text-white rounded-lg cursor-pointer">
        {cancellationDetails.status}
      </button>
    </div>
  );
};

export default CancellationDetails;
