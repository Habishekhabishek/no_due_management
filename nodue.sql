-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 18, 2024 at 02:46 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodue`
--

-- --------------------------------------------------------

--
-- Table structure for table `requestforms`
--

CREATE TABLE `requestforms` (
  `id` char(36) NOT NULL,
  `reg_num` varchar(255) NOT NULL,
  `esim_id` varchar(255) NOT NULL,
  `student_name` varchar(255) NOT NULL,
  `mail_id` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `semester` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `requestforms`
--

INSERT INTO `requestforms` (`id`, `reg_num`, `esim_id`, `student_name`, `mail_id`, `department`, `semester`, `createdAt`, `updatedAt`) VALUES
('86c76152-dc7b-4a27-8bc9-00b643faaa53', '732721205030', '5474534', 'ravi', 'ravi@gmail.com', 'it', '7', '2024-08-18 06:31:11', '2024-08-18 06:31:11'),
('aed0d873-ec0d-4861-972b-3b67ec8415f2', '732721205018', '54745', 'habishek', 'e21it018@shanmugha.edu.in', 'it', '7', '2024-08-18 06:30:20', '2024-08-18 06:30:20');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` char(36) NOT NULL DEFAULT uuid(),
  `useremail` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `usertype` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `useremail`, `password`, `usertype`, `createdAt`, `updatedAt`) VALUES
('6cb56851-5d2a-11ef-b495-f854f6c3f63e', 'sscet@gmail.com', 'sscet123', 'student', '2024-08-18 06:23:46', '2024-08-18 06:23:46');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `requestforms`
--
ALTER TABLE `requestforms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `useremail` (`useremail`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
