import React from 'react';

// Sample data for notices (you can replace this with data fetched from an API or database)
const notices = [
  { id: 1, title: "School Annual Day", date: "2024-10-20", description: "Join us for the annual day celebration at the school ground." },
  { id: 2, title: "Sports Day", date: "2024-11-05", description: "Don't miss the Sports Day! Events start at 9 AM." },
  { id: 3, title: "Midterm Exams", date: "2024-11-15", description: "Midterm exams will commence on November 15. Prepare well!" },
  { id: 4, title: "Parent-Teacher Meeting", date: "2024-11-25", description: "All parents are invited to discuss student progress." },
  { id: 5, title: "Winter Break", date: "2024-12-20", description: "Winter break starts from December 20 to January 5." },
  { id: 6, title: "Sports Camp", date: "2024-11-30", description: "Join us for a week of fun sports activities!" },
  { id: 7, title: "Science Fair", date: "2024-12-05", description: "Participate in the upcoming Science Fair!" },
  { id: 8, title: "Book Fair", date: "2024-12-15", description: "Don't miss the annual Book Fair at the school!" },
];

const NoticeBoard = () => {
  return (
    <div className="relative max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md overflow-hidden">
      <h2 className="bg-gray-600 p-4 text-white text-2xl font-bold text-center">Notice Board</h2>
      <div className="overflow-hidden h-72"> {/* Adjust height for more notices */}
        {/* Container with vertical scroll animation */}
        <div className="animate-scroll space-y-4">
          {notices.map(notice => (
            <div key={notice.id} className="flex flex-col justify-center items-start p-2 border-b last:border-b-0">
              <h3 className="text-xl font-semibold">{notice.title}</h3>
              <p className="text-gray-500">{notice.date}</p>
              <p className="text-gray-700">{notice.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
