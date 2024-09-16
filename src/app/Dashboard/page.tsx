// "use client"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { Badge } from "@/components/ui/badge"
// import { motion } from "framer-motion"

// const patients = [
//   {
//     name: "John Doe",
//     age: 45,
//     illness: "Pneumonia",
//     appointmentDate: "2023-07-05",
//     doctor: "Dr. Sarah Johnson",
//     status: "Critical",
//   },
//   {
//     name: "Jane Smith",
//     age: 32,
//     illness: "Appendicitis",
//     appointmentDate: "2023-07-08",
//     doctor: "Dr. Michael Chen",
//     status: "Stable",
//   },
//   {
//     name: "Robert Johnson",
//     age: 58,
//     illness: "Hypertension",
//     appointmentDate: "2023-07-10",
//     doctor: "Dr. Emily Wong",
//     status: "Improving",
//   },
//   {
//     name: "Emily Brown",
//     age: 27,
//     illness: "Migraine",
//     appointmentDate: "2023-07-12",
//     doctor: "Dr. David Lee",
//     status: "Stable",
//   },
//   {
//     name: "Michael Wilson",
//     age: 52,
//     illness: "Diabetes",
//     appointmentDate: "2023-07-15",
//     doctor: "Dr. Lisa Patel",
//     status: "Monitoring",
//     },
//     {
//         name: "Robert Johnson",
//         age: 58,
//         illness: "Hypertension",
//         appointmentDate: "2023-07-10",
//         doctor: "Dr. Emily Wong",
//         status: "Improving",
//     },
//     {
//         name: "Robert Johnson",
//         age: 58,
//         illness: "Hypertension",
//         appointmentDate: "2023-07-10",
//         doctor: "Dr. Emily Wong",
//         status: "Improving",
//     },
//     {
//         name: "Robert Johnson",
//         age: 58,
//         illness: "Hypertension",
//         appointmentDate: "2023-07-10",
//         doctor: "Dr. Emily Wong",
//         status: "Improving",
//     },
//     {
//         name: "Michael Wilson",
//         age: 52,
//         illness: "Diabetes",
//         appointmentDate: "2023-07-15",
//         doctor: "Dr. Lisa Patel",
//         status: "Monitoring",
//     },
//     {
//         name: "Michael Wilson",
//         age: 52,
//         illness: "Diabetes",
//         appointmentDate: "2023-07-15",
//         doctor: "Dr. Lisa Patel",
//         status: "Monitoring",
//     },
//     {
//         name: "Michael Wilson",
//         age: 52,
//         illness: "Diabetes",
//         appointmentDate: "2023-07-15",
//         doctor: "Dr. Lisa Patel",
//         status: "Monitoring",
//         },
// ]

// const statusColors:{[key:string]:string} = {
//   Critical: "bg-red-500",
//   Stable: "bg-green-500",
//   Improving: "bg-blue-500",
//   Monitoring: "bg-yellow-500",
// }

// export default function EnhancedPatientTable() {
//   return (
//     <Card className="w-full max-w-4xl mx-auto overflow-hidden bg-gradient-to-br my-20 from-purple-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 shadow-xl">
//       <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6">
//         <CardTitle className="text-3xl font-bold text-center text-white">
//           Patient Management
//         </CardTitle>
//       </CardHeader>
//       <CardContent className="p-6">
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead className="w-[200px] text-lg font-semibold text-gray-700 dark:text-gray-300">Name</TableHead>
//               <TableHead className="text-right text-lg font-semibold text-gray-700 dark:text-gray-300">Age</TableHead>
//               <TableHead className="text-lg font-semibold text-gray-700 dark:text-gray-300">Illness</TableHead>
//               <TableHead className="text-lg font-semibold text-gray-700 dark:text-gray-300">Appointment</TableHead>
//               <TableHead className="text-lg font-semibold text-gray-700 dark:text-gray-300">Doctor</TableHead>
//               <TableHead className="text-lg font-semibold text-gray-700 dark:text-gray-300">Status</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {patients.map((patient, index) => (
//               <motion.tr
//                 key={patient.name}
//                 className="hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors duration-200"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3, delay: index * 0.1 }}
//               >
//                 <TableCell className="font-medium text-gray-900 dark:text-gray-100">{patient.name}</TableCell>
//                 <TableCell className="text-right text-gray-600 dark:text-gray-400">{patient.age}</TableCell>
//                 <TableCell className="text-gray-600 dark:text-gray-400">{patient.illness}</TableCell>
//                 <TableCell className="text-gray-600 dark:text-gray-400">{patient.appointmentDate}</TableCell>
//                 <TableCell className="text-gray-600 dark:text-gray-400">{patient.doctor}</TableCell>
//                 <TableCell>
//                   <Badge className={`${statusColors[patient.status]} text-white`}>{patient.status}</Badge>
//                 </TableCell>
//               </motion.tr>
//             ))}
//           </TableBody>
//         </Table>
//       </CardContent>
//     </Card>
//   )
// }
"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { motion } from "framer-motion"

const transactions = [
  {
    name: "John Doe",
    date: "2023-07-05",
    amount: 150.00,
    doctor: "Dr. Sarah Johnson",
  },
  {
    name: "Jane Smith",
    date: "2023-07-08",
    amount: 200.00,
    doctor: "Dr. Michael Chen",
  },
  {
    name: "Robert Johnson",
    date: "2023-07-10",
    amount: 175.00,
    doctor: "Dr. Emily Wong",
  },
  {
    name: "Emily Brown",
    date: "2023-07-12",
    amount: 125.00,
    doctor: "Dr. David Lee",
  },
  {
    name: "Michael Wilson",
    date: "2023-07-15",
    amount: 225.00,
    doctor: "Dr. Lisa Patel",
  },
]

export default function TransactionTable() {
  return (
    <Card className="w-full max-w-4xl m-auto overflow-hidden bg-white dark:bg-gray-800 shadow-xl">
      <CardHeader className="bg-gradient-to-r from-green-600 to-green-800 text-white p-6">
        <CardTitle className="text-3xl font-bold text-center text-white">
          Payment Transactions
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px] text-lg font-semibold text-gray-700 dark:text-gray-300">Name</TableHead>
              <TableHead className="text-lg font-semibold text-gray-700 dark:text-gray-300">Date</TableHead>
              <TableHead className="text-right text-lg font-semibold text-gray-700 dark:text-gray-300">Amount</TableHead>
              <TableHead className="text-lg font-semibold text-gray-700 dark:text-gray-300">Doctor</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction, index) => (
              <motion.tr
                key={`${transaction.name}-${transaction.date}`}
                className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <TableCell className="font-medium text-gray-900 dark:text-gray-100">{transaction.name}</TableCell>
                <TableCell className="text-gray-600 dark:text-gray-400">{transaction.date}</TableCell>
                <TableCell className="text-right text-gray-600 dark:text-gray-400">
                  ${transaction.amount.toFixed(2)}
                </TableCell>
                <TableCell className="text-gray-600 dark:text-gray-400">{transaction.doctor}</TableCell>
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}