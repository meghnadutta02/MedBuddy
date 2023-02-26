import React from 'react';
import AppointmentComponent from './AppointmentComponent';

export default function Appointments() {
    const appointments = [
        { doctor: 'Dr. Smith', specialty: 'Cardiology', date: 'March 1st, 2023', time: '10:00 AM',image:"/images/doctor.jpg" },
        { doctor: 'Dr. Johnson', specialty: 'Dermatology', date: 'March 3rd, 2023', time: '2:00 PM',image:"/images/doctor1.jpg" },
        { doctor: 'Dr. Lee', specialty: 'Oncology', date: 'March 5th, 2023', time: '11:00 AM',image:"/images/doctor.jpg" },
        { doctor: 'Dr. Kim', specialty: 'Gynecology', date: 'March 8th, 2023', time: '3:00 PM' ,image:"/images/doctor1.jpg"},
        { doctor: 'Dr. Brown', specialty: 'Orthopedics', date: 'March 10th, 2023', time: '9:00 AM',image:"/images/doctor.jpg" },
        { doctor: 'Dr. Chen', specialty: 'Neurology', date: 'March 12th, 2023', time: '12:00 PM',image:"/images/doctor.jpg" },
      ];
  const handleBookAppointment = (appointment) => {
    console.log(`Booked appointment with ${appointment.doctor} on ${appointment.date} at ${appointment.time}`);
    // Logic to book appointment goes here
  };

  return (
    <div>
      {appointments.map((appointment, index) => (
        <AppointmentComponent
          key={index}
          doctor={appointment.doctor}
          specialty={appointment.specialty}
          date={appointment.date}
          time={appointment.time}
          image={appointment.image}
          Click={handleBookAppointment(appointment)}
        />
      ))}
    </div>
  );
}