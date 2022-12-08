-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 03, 2022 at 10:50 AM
-- Server version: 5.7.33
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db`
--

-- --------------------------------------------------------

--
-- Table structure for table `food`
--

CREATE TABLE `food` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `total_kalori` varchar(255) DEFAULT NULL,
  `carbs` varchar(255) DEFAULT NULL,
  `fat` varchar(255) DEFAULT NULL,
  `protein` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `food`
--

INSERT INTO `food` (`id`, `name`, `total_kalori`, `carbs`, `fat`, `protein`, `createdAt`, `updatedAt`) VALUES
(1, 'Shirataki Noodle Fried', '216', '18gr', '15gr', '6gr', '2022-12-03 09:53:42', '2022-12-03 09:53:42'),
(2, 'Milo Bar', '80', '14.8gr', '1.2gr', '1.3gr', '2022-12-03 09:53:42', '2022-12-03 09:53:42'),
(3, 'indomi', '370', '54gr', '14gr', '7gr', '2022-12-03 09:55:04', '2022-12-03 09:55:04');

-- --------------------------------------------------------

--
-- Table structure for table `place`
--

CREATE TABLE `place` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `place` varchar(255) DEFAULT NULL,
  `direction` text,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `place`
--

INSERT INTO `place` (`id`, `name`, `place`, `direction`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'Swimming Pool Fatmaba', 'surabaya', 'https://www.google.com/maps/dir//Swimming+Pool+Fatmaba,+Jl.+Jemursari+Selatan+VI+No.16,+Jemur+Wonosari,+Wonocolo,+Surabaya+City,+East+Java+60237/@-7.3256593,112.7371679,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2dd7fb150ffbe077:0x61d8faad6bad6e71!2m2!1d112.7416418!2d-7.3256625', 'Perum pesona alam gununganya, Blk. R No.15, Rungkut Menanggal, Kec. Gn. Anyar, Kota SBY, Jawa Timur 60293', '2022-12-02 16:35:51', '2022-12-02 16:35:51'),
(2, 'Flex Gym', 'sidoarjo', 'https://www.google.com/maps/dir/-7.9322781,112.6079232/flex+gym/@-7.6685348,112.4173776,10z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x2dd7fad4cba456e1:0x35805d564c6280b1!2m2!1d112.7671182!2d-7.3447436', 'Jl ruko, Jl. Wadung Asri Permai No.b6, Wadungasri, Kec. Waru, Kabupaten Sidoarjo, Jawa Timur 61256', '2022-12-03 05:36:44', '2022-12-03 05:36:44'),
(3, 'Sepakbola Tunjungsekar', 'malang', 'https://www.google.com/maps/dir//Lapangan+Sepakbola+Tunjungsekar,+Jl.+Ikan+Tombro+Sel.+II,+Tunjungsekar,+Lowokwaru,+Malang+City,+East+Java+65142/@-7.9273359,112.5291932,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x2dd629f0fabae611:0xbad83e74a8a3023d!2m2!1d112.6338244!2d-7.9273442!3e0', 'Jl. Ikan Tombro Sel. II, Tunjungsekar, Kec. Lowokwaru, Kota Malang, Jawa Timur 65142', '2022-12-03 05:36:44', '2022-12-03 05:36:44'),
(4, 'diaz badminton', 'jakarta', 'https://www.google.com/maps/dir//Diaz+Badminton+Hall,+6,+Jl.+KS+Tubun+IIC+No.29,+RT.4%2FRW.1,+Slipi,+Kec.+Palmerah,+Kota+Jakarta+Barat,+Daerah+Khusus+Ibukota+Jakarta+11410/@-6.2506646,106.7550357,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x2e69f6910123ea9d:0x258d5c895a5c266d!2m2!1d106.8026939!2d-6.1900129!3e0', '6, Jl. KS Tubun IIC No.29, RT.4/RW.1, Slipi, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11410', '2022-12-03 05:40:30', '2022-12-03 05:40:30'),
(5, 'Pengairan Tennis Court', 'jakarta', 'https://www.google.com/maps/dir//Pengairan+Tennis+Court,+Jl.+Way+Seputih+No.4,+RT.3%2FRW.1,+Tj.+Duren+Sel.,+Kec.+Grogol+petamburan,+Kota+Jakarta+Barat,+Daerah+Khusus+Ibukota+Jakarta+11470/@-6.1823369,106.7718047,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x2e69f6f15105ea97:0xed43f0dd2bc0188a!2m2!1d106.7882845!2d-6.1823372!3e0', 'Jl. Way Seputih No.4, RT.3/RW.1, Tj. Duren Sel., Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11470', '2022-12-03 05:40:30', '2022-12-03 05:40:30');

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

CREATE TABLE `team` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `sport` varchar(255) DEFAULT NULL,
  `place` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `team`
--

INSERT INTO `team` (`id`, `name`, `sport`, `place`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'persib', 'football', 'bandung', 'Persib (atau singkatan dari Persatuan Sepak Bola Indonesia Bandung) adalah klub sepak bola Indonesia yang berdiri pada 14 Maret 1933, berbasis di Bandung, Jawa Barat.', '2022-12-02 14:51:26', '2022-12-02 14:51:26'),
(2, 'persija', 'football', 'jakarta', 'Persija singkatan dari Persatuan Sepak Bola Indonesia Jakarta (dahulu dikenal juga dengan nama Persija Pusat) adalah klub sepak bola Indonesia yang berbasis di Jakarta. ', '2022-12-02 14:51:26', '2022-12-02 14:51:26'),
(3, 'arema FC', 'football', 'malang', 'Arema Football Club adalah sebuah klub sepak bola profesional yang berasal dari Malang, Jawa Timur, Indonesia. Arema berkompetisi di Liga 1 yang merupakan kasta tertinggi sepak bola Indonesia.', '2022-12-02 14:51:26', '2022-12-02 14:51:26'),
(4, 'PSIS', 'football', 'semarang', 'Persatuan Sepak Bola Indonesia Semarang atau biasa disingkat PSIS Semarang adalah klub sepak bola profesional yang berbasis di Kota Semarang, Jawa Tengah, Indonesia dengan bermarkas di Stadion Jatidiri, Semarang.', '2022-12-02 14:51:26', '2022-12-02 14:51:26'),
(5, 'Kancil', 'futsal', 'pontianak', 'Kancil BBK Pontianak membuat kejutan di Pro Futsal League (PFL) 2017 & berhasil meraup 23 poin dari hasil 7 kali menang, 2 kali imbang, dan hanya menelan 3 kali kekalahan.', '2022-12-02 14:51:26', '2022-12-02 14:51:26'),
(6, 'HAWKS', 'basketball', 'tanggerang', 'Misi mereka mengembangkan olahraga bola basket yang berkarakter dan menjadi klub bola basket profesional kebanggaan masyarakat Tangerang dan juga Indonesia. Memberikan wadah bagi generasi muda Tangerang untuk menjadi atlet bola basket profesional', '2022-12-02 14:51:26', '2022-12-02 14:51:26'),
(7, 'rans pik', 'basketball', 'jakarta', 'RANS PIK Basketball sebagai tim basket baru yang ikut berlaga di IBL 2022. Di belakang mereka tentu saja ada kerajaan bisnis yang dimiliki selebriti Raffi Ahmad dan Nagita Slavina yang saat ini sudah merambah ke sektor olahraga.', '2022-12-02 14:51:26', '2022-12-02 14:51:26'),
(8, 'dewa united', 'basketball', 'surabaya', 'Dewa United dibentuk di tahun 2020 dan mewadahi 3 Cabang olahraga popular di Tanah Air, mulai dari SEPAKBOLA – BASKET dan cabang eSPORTS.', '2022-12-02 14:51:26', '2022-12-02 14:51:26'),
(9, 'bintang timur', 'futsal', 'surabaya', 'Bintang Timur Surabaya adalah klub futsal profesional Indonesia yang berbasis di Surabaya, Jawa Timur. Klub ini bermain di Liga Futsal Profesional Indonesia', '2022-12-02 14:51:26', '2022-12-02 14:51:26'),
(10, 'giga fc', 'futsal', 'metro', 'Giga FC berdiri pada tahun 2016 secara resmi terdaftar sebagai Perkumpulan Olahraga di Kemenkumham Republik Indonesia.', '2022-12-02 14:51:26', '2022-12-02 14:51:26');

-- --------------------------------------------------------

--
-- Table structure for table `trainers`
--

CREATE TABLE `trainers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `profesi` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `trainers`
--

INSERT INTO `trainers` (`id`, `name`, `profesi`, `phone`, `createdAt`, `updatedAt`) VALUES
(1, 'Wawan Septiadi', 'Bola', '6281232123213', '2022-12-01 13:53:23', '2022-12-01 13:53:24'),
(2, 'Septiadi Agoy', 'gym', '6281232123213', '2022-12-01 13:53:23', '2022-12-01 13:53:24'),
(3, 'Yoga Prakasi', 'football', '6281232123213', '2022-12-01 13:53:23', '2022-12-01 13:53:24'),
(4, 'Laila Putri', 'football', '6281232123213', '2022-12-01 13:53:23', '2022-12-01 13:53:24'),
(6, 'Wawan Septiadi', 'Bola', '6281232123213', '2022-12-01 13:53:23', '2022-12-01 13:53:24'),
(7, 'Septiadi Agoy', 'gym', '6281232123213', '2022-12-01 13:53:23', '2022-12-01 13:53:24'),
(8, 'Yoga Prakasi', 'football', '6281232123213', '2022-12-01 13:53:23', '2022-12-01 13:53:24'),
(9, 'Laila Putri', 'football', '6281232123213', '2022-12-01 13:53:23', '2022-12-01 13:53:24');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `food`
--
ALTER TABLE `food`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `place`
--
ALTER TABLE `place`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `trainers`
--
ALTER TABLE `trainers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `food`
--
ALTER TABLE `food`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `place`
--
ALTER TABLE `place`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `team`
--
ALTER TABLE `team`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `trainers`
--
ALTER TABLE `trainers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
