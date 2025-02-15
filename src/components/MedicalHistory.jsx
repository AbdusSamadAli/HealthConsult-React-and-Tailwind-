

const MedicalHistory = () => {
  const medicalHistory = [
    { id: 1, date: '2024-06-30', description: 'Routine check-up', doctor: 'Dr. John Doe' },
    { id: 2, date: '2024-05-20', description: 'Blood test', doctor: 'Dr. Jane Smith' },
  ];

  return (
    <div className="bg-white p-4 sm:p-6 shadow-lg rounded-lg hover:bg-blue-50">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-600">
        Medical History
      </h2>
      <ul className="space-y-4">
        {medicalHistory.map((record) => (
          <li
            key={record.id}
            className="border-b border-gray-300 pb-4"
          >
            <div className="text-xs sm:text-sm text-gray-500 mb-1">
              {record.date}
            </div>
            <div className="text-base sm:text-lg font-medium">
              {record.description}
            </div>
            <div className="text-xs sm:text-sm text-gray-500 mt-1">
              Doctor: {record.doctor}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );  
};

export default MedicalHistory;
