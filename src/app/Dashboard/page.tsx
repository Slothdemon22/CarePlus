"use client";
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

type Appointment = {
  id: string; // Changed from number to string to match the API response
  patientName: string;
  dateTime: string;
  doctorName: string; // Ensure this maps correctly to your API response
  status: 'pending' | 'approved' | 'cancelled';
  details: string;
  comments: string;
};

const initialAppointments: Appointment[] = []; // Initialize as an empty array

export default function AppointmentTable() {
  const [appointments, setAppointments] = useState<Appointment[]>(initialAppointments);
  const [openStates, setOpenStates] = useState<{ [key: string]: boolean }>({}); // Updated key type to string

  const fetchAppointments = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/getAppoinments');
      console.log(response.data.data);
      // Map the response data to the correct structure
      if (Array.isArray(response.data.data)) {
        const formattedAppointments = response.data.data.map((appointment: any) => ({
          id: appointment._id, // Use _id for the appointment ID
          patientName: appointment.
          userName || "Unknown Patient", // Use the correct field
          dateTime: appointment.dateTime,
          doctorName: appointment.doctor, // Get doctor's name from 'doctor' field
          status: appointment.status,
          details: appointment.appointmentReason || "No details provided.", // Use appointmentReason if available
          comments: appointment.comments || "No comments provided.", // Use comments if available
        }));
        setAppointments(formattedAppointments);
      } else {
        console.error("Expected an array but received:", response.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAppointments(); // Fetch appointments when component mounts
  }, []);

  const handleStatusChange = (id: string, newStatus: Appointment['status']) => {
    setAppointments(appointments.map(appointment =>
      appointment.id === id ? { ...appointment, status: newStatus } : appointment
    ));
  };

  const getStatusColor = (status: Appointment['status']) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500';
      case 'approved': return 'bg-green-500';
      case 'cancelled': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const toggleOpen = (id: string) => {
    setOpenStates(prevStates => ({
      ...prevStates,
      [id]: !prevStates[id],
    }));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Healthcare Dashboard - Appointments</h1>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-b-2 border-gray-200">
              <TableHead className="py-4 px-6">Patient Name</TableHead>
              <TableHead className="py-4 px-6">Date & Time</TableHead>
              <TableHead className="py-4 px-6">Doctor Name</TableHead>
              <TableHead className="py-4 px-6">Status</TableHead>
              <TableHead className="py-4 px-6">Action</TableHead>
              <TableHead className="py-4 px-6">Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appointments.map((appointment) => (
              <React.Fragment key={appointment.id}>
                <TableRow className="border-b border-gray-200">
                  <TableCell className="py-6 px-6">{appointment.patientName}</TableCell>
                  <TableCell className="py-6 px-6">{new Date(appointment.dateTime).toLocaleString()}</TableCell>
                  <TableCell className="py-6 px-6">{appointment.doctorName}</TableCell>
                  <TableCell className="py-6 px-6">
                    <Badge className={`${getStatusColor(appointment.status)} text-white px-3 py-1 rounded-full`}>
                      {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell className="py-6 px-6">
                    <Select
                      onValueChange={(value) => handleStatusChange(appointment.id, value as Appointment['status'])}
                      defaultValue={appointment.status}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Change status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="approved">Approved</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell className="py-6 px-6">
                    <Collapsible open={openStates[appointment.id]} onOpenChange={() => toggleOpen(appointment.id)}>
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm" className="w-full">
                          <motion.div
                            initial={false}
                            animate={{ rotate: openStates[appointment.id] ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDownIcon className="h-4 w-4" />
                          </motion.div>
                          <span className="sr-only">Toggle details</span>
                        </Button>
                      </CollapsibleTrigger>
                    </Collapsible>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={6} className="p-0">
                    <AnimatePresence>
                      {openStates[appointment.id] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Collapsible open={openStates[appointment.id]} onOpenChange={() => toggleOpen(appointment.id)}>
                            <CollapsibleContent className="px-6 py-4 bg-gray-50">
                              <h4 className="text-sm font-semibold mb-2">Appointment Details:</h4>
                              <p className="text-sm mb-2">{appointment.details}</p>
                              <h4 className="text-sm font-semibold mb-2">Comments:</h4>
                              <p className="text-sm">{appointment.comments}</p>
                            </CollapsibleContent>
                          </Collapsible>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
