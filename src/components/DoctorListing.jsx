import doctor1 from "../assets/doctor1.jpg";
import doctor2 from "../assets/doctor2.jpg";
import doctor3 from "../assets/doctor3.webp"; 

const DoctorListing = () => {
  const doctors = [
    { id: 1, name: 'Dr. John Doe', specialty: 'Cardiology', image: doctor1 },
    { id: 2, name: 'Dr. Frank Arnold', specialty: 'Pediatrics', image: doctor2 },
    { id: 3, name: 'Dr. Jane Smith', specialty: 'Dermatology', image: doctor3 },
  ];

  return (
    <div className='mb-5'>
      <h1 className="text-3xl mt-3 font-bold text-center text-blue-800 mb-6">Our Doctors</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {doctors.map(doctor => (
          <div key={doctor.id} className="bg-white rounded-lg shadow-md p-6 hover:bg-blue-50">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{doctor.name}</h3>
            <img src={doctor.image} alt={doctor.name} className="w-21 h-25 mb-4" />
            <p className="text-lg text-gray-700 mb-4">Specialty: {doctor.specialty}</p>
            <p className="text-gray-600">
              {doctor.specialty === 'Cardiology' && (
                <>
                  Dr. Doe is an experienced cardiologist specializing in heart disease prevention
                  and management. With a focus on cardiovascular health, he provides personalized
                  care to improve heart function and overall well-being.
                </>
              )}
              {doctor.specialty === 'Pediatrics' && (
                <>
                  Dr. Johnson specializes in pediatrics, offering compassionate care to children
                  of all ages. His expertise includes routine check-ups, vaccinations, and treatment
                  of common childhood illnesses.
                </>
              )}
              {doctor.specialty === 'Dermatology' && (
                <>
                  Dr. Smith is a dermatologist known for his expertise in skin health and aesthetics.
                  He provides some advanced treatments for skin conditions and cosmetic dermatology,
                  helping patients achieve healthy and radiant skin.
                </>
              )}
              {doctor.specialty === 'Neurologist' && (
                <>
                  Dr. Kane has over 15 years of experience in treating neurological disorders.
                  He has helped numerous patients regain their quality of life through his expertise.
                </>
              )}
              {doctor.specialty === 'Oncologist' && (
                <>
                  Dr. Arnold focuses on personalized cancer care and is known for his compassionate
                  approach and innovative treatments.
                </>
              )}
              {doctor.specialty === 'Psychiatrist' && (
                <>
                  Dr. Warner specializes in mood disorders and has helped many patients overcome
                  challenges related to anxiety and depression.
                </>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorListing;


