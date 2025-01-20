
const Messages = () => {
  const messages = [
    { id: 1, date: '2024-07-10', content: 'Your test results are available.', sender: 'Dr. John Doe' },
    { id: 2, date: '2024-07-12', content: 'Reminder: Upcoming appointment on 2024-07-20.', sender: 'HealthConsult' },
  ];

  return (
    <div className="bg-white p-4 shadow-md rounded-md hover:bg-blue-50">
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">Messages</h2>
      <ul>
        {messages.map(message => (
          <li key={message.id} className="border-b border-gray-300 py-2">
            <div className="text-sm text-gray-600">{message.date}</div>
            <div className="text-lg">{message.content}</div>
            <div className="text-sm text-gray-600">From: {message.sender}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
