-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 04, 2019 at 08:32 PM
-- Server version: 5.7.25
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `2.19wickedsales`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `price` bigint(20) UNSIGNED NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `misc_details` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `description`, `misc_details`) VALUES
(1, 'Wicked Thing', 2000, 'This product will solve all of your ills, cure famine, and make you look more like bradd pitt, regardless if you are male or female', '{\"height\": \"20cm\",\"width\": \"15cm\", \"weight\": 4.2,\"manufacturer\": \"Therbal\"}'),
(2, 'Wicked Shoes', 42150, 'These are shoes. You put them on your foot. there are two of them', '{\"availableSizes\":[5,6,7,8,9,10,13,14,15,20],\"color\":\"red, green, blue, natural\",\"materials\":\"apple, pen, pineapple, penpineappleapplepen\"}'),
(3, 'Wicked Brick', 525, 'It\'s a brick. You throw this at people. it hurts. it hurts a lot. ', '{\"height\":\"3 inches\",\"width\":\"6 inches\",\"length\":\"3 inches\",\"weight\":\"15 tons\",\"colors\":\"red, cherry, maroon, speckled\",\"manufacturer\":\"Riot Brick Studios\",\"willItHurt\":\"Yes\"}'),
(4, 'Wicked Thing', 2000, '', ''),
(5, 'Wicked KEN', 42150, '', ''),
(6, 'Wicked Brick', 525, '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
