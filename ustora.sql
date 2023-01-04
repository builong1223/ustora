-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th6 23, 2022 lúc 06:26 AM
-- Phiên bản máy phục vụ: 10.4.24-MariaDB
-- Phiên bản PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `ustora`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_advt`
--

CREATE TABLE `tbl_advt` (
  `id_advt` int(200) NOT NULL,
  `link_url` varchar(100) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `img_url` varchar(100) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `start_time` date NOT NULL,
  `deadline` date NOT NULL,
  `status` enum('pending','publish','trash') COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `status_old` enum('pending','publish') COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `creator` varchar(200) COLLATE utf8mb4_vietnamese_ci NOT NULL DEFAULT '',
  `created_date` date NOT NULL,
  `update_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_customer`
--

CREATE TABLE `tbl_customer` (
  `id_customer` bigint(20) NOT NULL,
  `name_customer` varchar(100) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `phone_customer` varchar(100) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `email_customer` varchar(100) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `address_customer` varchar(100) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `address` varchar(200) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `order_date` date NOT NULL,
  `num_order` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `tbl_customer`
--

INSERT INTO `tbl_customer` (`id_customer`, `name_customer`, `phone_customer`, `email_customer`, `address_customer`, `address`, `order_date`, `num_order`) VALUES
(78, 'Bùi Đức Thái', '0866816802', 'bui433077@gmail.com', '{\"province\":\"31\",\"district\":\"120\",\"street\":\"121\"}', 'Kim động Toàn Thắng', '2022-06-22', 1),
(79, 'Bùi Đức Long', '0866816802', 'longbui4343@gmail.com', '{\"province\":\"48\",\"district\":\"122\",\"street\":\"123\"}', 'acbhhww', '2022-06-22', 7);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_data_detail_product`
--

CREATE TABLE `tbl_data_detail_product` (
  `data_detail_id` int(11) NOT NULL,
  `name_detail` varchar(200) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `value_detail` varchar(200) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `id_relative_product` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `tbl_data_detail_product`
--

INSERT INTO `tbl_data_detail_product` (`data_detail_id`, `name_detail`, `value_detail`, `id_relative_product`) VALUES
(176, 'fullname', 'pham dinh hung', 120),
(191, 'fullname', 'Phạm Đình Hùng', 118),
(192, 'Họ và tên: ', '20', 119),
(193, 'fullname', 'pham dinh hung', 121),
(194, 'fullname', 'phamdinhhung', 122),
(195, 'fullname', 'Phạm Đình Hùng', 124),
(196, 'Họ và tên: ', 'Phạm Đình Hùng', 125),
(198, 'Họ và tên: ', '20', 131),
(199, 'pham dinh hung', 'pham dinh hung', 130),
(200, 'áo khoát', 'Phạm Đình Hùng', 130),
(201, 'Họ và tên: ', '20', 129),
(202, 'Họ và tên: ', 'pham dinh hung', 127),
(203, 'pham dinh hung', 'pham dinh hung', 128),
(212, 'fullname', 'phamdinhhung', 117),
(213, 'age', '18', 117),
(215, 'fullname', 'phamdinhhung', 126),
(216, 'fdfd', 'fdfdfdfdfdf', 133),
(217, 'pham dinh hung', '20', 123),
(241, 'Màn hình:', 'AMOLED, 6.4\", Full HD+', 136),
(242, 'Hệ điều hành:', 'Android 10', 136),
(243, 'Camera sau:', 'Chính 48 MP & Phụ 13 MP, 8 MP, 2 MP', 136),
(244, 'Màn hình:', 'AMOLED, 6.4\", Full HD+', 137),
(245, 'Hệ điều hành:	', 'Android 10', 137),
(246, 'Camera sau:	', 'Chính 48 MP & Phụ 13 MP, 8 MP, 2 MP', 137),
(247, 'Màn hình:', 'AMOLED, 6.4', 138),
(248, 'Hệ điều hành:', 'Android 10', 138),
(249, 'Camera sau:', 'Chính 48 MP & Phụ 13 MP, 8 MP, 2 MP', 138),
(250, 'Camera trước:', '44 MP', 138),
(251, 'Màn hình:', 'IPS LCD, 6.5\", HD+', 139),
(252, 'Hệ điều hành:', 'Android 10', 139),
(253, 'Camera sau:', 'Chính 48 MP & Phụ 8 MP, 2 MP, 2 MP', 139),
(254, 'Màn hình:', 'Super AMOLED, 6.5', 140),
(255, 'Hệ điều hành:', 'Chính 48 MP & Phụ 12 MP, 5 MP, 5 MP', 140),
(256, 'Camera sau:', '32 MP', 140),
(257, 'Camera trước:', 'Exynos 9611 8 nhân', 140),
(265, 'Màn hình:', 'IPS LCD, 6.5', 141),
(266, 'Hệ điều hành:', 'Android 10', 141),
(267, 'Màn hình:', 'IPS LCD, 6.5', 142),
(268, 'Hệ điều hành:', 'Android 10', 142),
(269, 'Camera sau:', 'Chính 48 MP & Phụ 8 MP, 2 MP, 2 MP', 142),
(270, 'Màn hình:', 'IPS LCD, 6.5', 143),
(271, 'Hệ điều hành:', 'Android 10', 143),
(272, 'Camera sau:', 'Chính 48 MP & Phụ 8 MP, 2 MP, 2 MP', 143),
(273, 'CPU:', 'Intel Core i3 Coffee Lake, 8145U, 2.10 GHz', 144),
(274, 'RAM:', '4 GB, DDR4 (On board +1 khe), 2400 MHz', 144),
(275, 'Ổ cứng:', 'SSD 256GB NVMe PCIe, Hỗ trợ khe cắm HDD SATA', 144),
(276, 'Màn hình:', '	14 inch, Full HD (1920 x 1080)', 144),
(277, 'CPU:', 'Intel Core i3 Coffee Lake, 8145U, 2.10 GHz', 145),
(278, 'RAM:', '4 GB, DDR4 (On board +1 khe), 2400 MHz', 145),
(279, 'Ổ cứng:', 'SSD 256GB NVMe PCIe, Hỗ trợ khe cắm HDD SATA', 145),
(280, 'Màn hình:', '14 inch, Full HD (1920 x 1080)', 145),
(281, 'CPU:', 'Intel Core i3 Coffee Lake, 8145U, 2.10 GHz', 146),
(282, 'RAM:', '4 GB, DDR4 (On board +1 khe), 2400 MHz', 146),
(283, 'Ổ cứng:', 'SSD 256GB NVMe PCIe, Hỗ trợ khe cắm HDD SATA', 146),
(284, 'Màn hình:', '14 inch, Full HD (1920 x 1080)', 146),
(285, 'CPU:', 'Intel Core i3 Coffee Lake, 8145U, 2.10 GHz', 147),
(286, 'RAM:', '4 GB, DDR4 (On board +1 khe), 2400 MHz', 147),
(287, 'Ổ cứng:', 'SSD 256GB NVMe PCIe, Hỗ trợ khe cắm HDD SATA', 147),
(288, 'Màn hình:', '14 inch, Full HD (1920 x 1080)', 147),
(289, 'CPU:', 'Intel Core i3 Coffee Lake, 8145U, 2.10 GHz', 148),
(290, 'RAM:', '4 GB, DDR4 (On board +1 khe), 2400 MHz', 148),
(291, 'Ổ cứng:', 'SSD 256GB NVMe PCIe, Hỗ trợ khe cắm HDD SATA14 inch, Full HD (1920 x 1080)', 148),
(292, 'Màn hình:', '14 inch, Full HD (1920 x 1080)', 148),
(293, 'CPU:', 'Intel Core i3 Coffee Lake, 8145U, 2.10 GHz', 149),
(294, 'RAM:', '4 GB, DDR4 (On board +1 khe), 2400 MHz', 149),
(295, 'Ổ cứng:', 'SSD 256GB NVMe PCIe, Hỗ trợ khe cắm HDD SATA', 149),
(296, 'Màn hình:', '14 inch, Full HD (1920 x 1080)', 149),
(297, 'CPU:', 'Intel Core i3 Coffee Lake, 8145U, 2.10 GHz', 150),
(298, 'RAM:', '4 GB, DDR4 (On board +1 khe), 2400 MHz', 150),
(299, 'Ổ cứng:', 'SSD 256GB NVMe PCIe, Hỗ trợ khe cắm HDD SATA', 150),
(300, 'Màn hình:', '14 inch, Full HD (1920 x 1080)', 150),
(301, 'CPU:', 'Intel Core i3 Coffee Lake, 8145U, 2.10 GHz', 151),
(302, 'RAM:', '4 GB, DDR4 (On board +1 khe), 2400 MHz', 151),
(303, 'Ổ cứng:', 'SSD 256GB NVMe PCIe, Hỗ trợ khe cắm HDD SATA', 151),
(304, 'Màn hình:', '14 inch, Full HD (1920 x 1080)', 151),
(305, 'Màn hình:', 'TFT LCD, 6.5\", HD+', 152),
(306, 'Hệ điều hành:', 'Android 10', 152),
(307, 'Camera sau:', 'Chính 48 MP & Phụ 8 MP, 2 MP, 2 MP', 152),
(308, 'Camera trước:', '13 MP', 152),
(309, 'áo khoát', 'Phạm Đình Hùng', 153),
(310, 'Họ và tên: ', 'Phạm Đình Hùng', 153),
(311, 'fullname', '90', 153),
(312, 'áo khoát', 'Phạm Đình Hùng', 154),
(313, 'Họ và tên: ', '20', 154),
(314, 'fullname', '90', 154),
(315, 'Họ và tên: ', 'pham dinh hung', 155),
(316, 'fullname', '22', 155),
(317, 'áo khoát', '20', 156),
(318, 'Họ và tên: ', '90', 156),
(319, 'trang suc', '90', 156),
(320, 'áo khoát', 'Phạm Đình Hùng', 157),
(321, 'Họ và tên: ', 'Phạm Đình Hùng', 158),
(322, 'trang suc', '22', 159),
(323, 'áo khoát', 'Phạm Đình Hùng', 160),
(324, 'fullname', 'phamdinhhung', 161),
(325, 'trang suc', '90', 162),
(326, 'trang suc', '22', 163),
(327, 'trang suc', '90', 164),
(351, 'Màn hình:', 'OLED, 6.5', 135),
(352, 'Hệ điều hành:', 'iOS 13', 135),
(367, 'Màn hình:', 'Super AMOLED, 6.5', 134),
(368, 'Hệ điều hành:', 'Super AMOLED, 6.5', 134),
(369, 'Camera sau:', 'Chính 48 MP & Phụ 12 MP, 5 MP, 5 MP', 134),
(370, 'Camera trước:', '32 MP', 134),
(371, 'CPU:', 'Exynos 9611 8 nhân', 134),
(372, 'RAM:', '8 GB', 134),
(373, 'Bộ nhớ trong:', '128 GB', 134),
(424, 'Điện thoại OPPO Reno7 Z 5G', '10490000', 214),
(425, 'Điện thoại OPPO A76', '8000000', 215),
(426, 'Điện thoại OPPO A16', '7000000', 216),
(427, 'Điện thoại Samsung Galaxy S22 Ultra', '30990000', 217),
(428, 'Điện thoại Samsung Galaxy A52s', '7990000', 218),
(429, 'Điện thoại Samsung Galaxy A73', '11990000', 219),
(430, 'Điện thoại Samsung Galaxy Note 20 ', '15990000', 220),
(431, 'Điện thoại OPPO Reno5 ', '8490000', 221),
(432, 'Điện thoại Xiaomi Redmi Note 11', '4690000', 222),
(434, 'Điện thoại Vivo V23e', '7990000', 224),
(435, 'Điện thoại Vivo Y53s ', '6990000', 225),
(436, 'Điện thoại Xiaomi POCO X3 Pro', '6633000', 226),
(437, 'Laptop Dell Gaming G15 5511', '29990000', 227),
(438, 'Laptop HP 340s G7 ', '10790000', 228),
(439, 'Laptop Lenovo Ideapad 1 11IGL05 N5030', '6290000', 229);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_img_relative_product`
--

CREATE TABLE `tbl_img_relative_product` (
  `id_img_relative` bigint(20) NOT NULL,
  `name_img_relative` varchar(200) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `id_relative_product` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `tbl_img_relative_product`
--

INSERT INTO `tbl_img_relative_product` (`id_img_relative`, `name_img_relative`, `id_relative_product`) VALUES
(747, 'public/uploads/products/products/content-1.jpg', 117),
(748, 'public/uploads/products/products/2.jpg', 117),
(749, 'public/uploads/products/products/3.jpg', 117),
(750, 'public/uploads/products/products/3a.jpg', 117),
(751, 'public/uploads/products/products/3b.jpg', 117),
(752, 'public/uploads/products/products/3d.jpg', 118),
(753, 'public/uploads/products/products/4.jpg', 118),
(754, 'public/uploads/products/products/4a.jpg', 118),
(755, 'public/uploads/products/products/5a.jpg', 119),
(756, 'public/uploads/products/products/5b.jpg', 119),
(757, 'public/uploads/products/products/5c.jpg', 119),
(758, 'public/uploads/products/products/6a.jpg', 120),
(759, 'public/uploads/products/products/6b.jpg', 120),
(760, 'public/uploads/products/products/6c.jpg', 120),
(761, 'public/uploads/products/products/7a.jpg', 121),
(762, 'public/uploads/products/products/7b.jpg', 121),
(763, 'public/uploads/products/products/8.jpg', 121),
(764, 'public/uploads/products/products/8b.jpg', 122),
(765, 'public/uploads/products/products/9.jpg', 122),
(766, 'public/uploads/products/products/9a.jpg', 122),
(767, 'public/uploads/products/products/9c.jpg', 123),
(768, 'public/uploads/products/products/10.jpg', 123),
(769, 'public/uploads/products/products/10a.jpg', 123),
(770, 'public/uploads/products/products/10c.jpg', 124),
(771, 'public/uploads/products/products/11.jpg', 124),
(772, 'public/uploads/products/products/11a.jpg', 124),
(773, 'public/uploads/products/products/11c.jpg', 125),
(774, 'public/uploads/products/products/12.jpg', 125),
(775, 'public/uploads/products/products/12a.jpg', 125),
(776, 'public/uploads/products/products/13b.jpg', 126),
(777, 'public/uploads/products/products/13c.jpg', 126),
(778, 'public/uploads/products/products/13d.jpg', 126),
(780, 'public/uploads/products/products/14b.jpg', 127),
(781, 'public/uploads/products/products/14c.jpg', 127),
(782, 'public/uploads/products/products/15a.jpg', 128),
(783, 'public/uploads/products/products/15b.jpg', 128),
(784, 'public/uploads/products/products/15c.jpg', 128),
(785, 'public/uploads/products/products/16.jpg', 129),
(786, 'public/uploads/products/products/16a.jpg', 129),
(787, 'public/uploads/products/products/16b.jpg', 129),
(788, 'public/uploads/products/products/17a.jpg', 130),
(789, 'public/uploads/products/products/17b.jpg', 130),
(790, 'public/uploads/products/products/17c.jpg', 130),
(791, 'public/uploads/products/products/18a.jpg', 131),
(792, 'public/uploads/products/products/18b.jpg', 131),
(793, 'public/uploads/products/products/18c.jpg', 131),
(802, 'public/uploads/products/products/2 - Copy(2).jpg', 133),
(803, 'public/uploads/products/products/3 - Copy(1).jpg', 133),
(804, 'public/uploads/products/products/3a - Copy(3).jpg', 133),
(805, 'public/uploads/products/products/3b - Copy(2).jpg', 133),
(806, 'public/uploads/products/products/3c - Copy(2).jpg', 133),
(807, 'public/uploads/products/products/3d - Copy(3).jpg', 133),
(808, 'public/uploads/products/products/4 - Copy(3).jpg', 133),
(809, 'public/uploads/products/products/4a - Copy(3).jpg', 133),
(810, 'public/uploads/products/products/oppo-reno3-trang-600x600-400x400.jpg', 134),
(811, 'public/uploads/products/products/samsung-galaxy-a51-8gb-blue-400x460-1-400x460 - Copy(1).png', 134),
(812, 'public/uploads/products/products/iphone-11-red-400x400.jpg', 134),
(813, 'public/uploads/products/products/oppo-a92-white-600x600-400x400.jpg', 134),
(814, 'public/uploads/products/products/oppo-reno3-trang-600x600-400x400 - Copy.jpg', 134),
(815, 'public/uploads/products/products/BlccRg_simg_02d57e_50x50_maxb (1) - Copy(3).jpg', 135),
(816, 'public/uploads/products/products/BlccRg_simg_02d57e_50x50_maxb - Copy(3).jpg', 135),
(817, 'public/uploads/products/products/sxlpFs_simg_02d57e_50x50_maxb (1) - Copy(3).jpg', 135),
(818, 'public/uploads/products/products/sxlpFs_simg_02d57e_50x50_maxb (2) - Copy(3).jpg', 135),
(819, 'public/uploads/products/products/sxlpFs_simg_02d57e_50x50_maxb - Copy(3).jpg', 135),
(820, 'public/uploads/products/products/oppo-a92-white-600x600-400x400 - Copy.jpg', 136),
(821, 'public/uploads/products/products/oppo-reno2-f-600x600-200x200.jpg', 136),
(822, 'public/uploads/products/products/oppo-reno3-trang-400x460-400x460 - Copy.png', 136),
(823, 'public/uploads/products/products/oppo-reno3-trang-600x600-400x400 - Copy(1).jpg', 136),
(824, 'public/uploads/products/products/img-pro-09.png', 137),
(825, 'public/uploads/products/products/img-pro-10.png', 137),
(826, 'public/uploads/products/products/iphone-11-pro-max-green-400x400 - Copy(1).jpg', 137),
(827, 'public/uploads/products/products/iphone-11-red-400x400 - Copy(1).jpg', 137),
(828, 'public/uploads/products/products/oppo-a92-white-600x600-400x400 - Copy(1).jpg', 137),
(829, 'public/uploads/products/products/oppo-reno2-f-600x600-200x200 - Copy.jpg', 137),
(830, 'public/uploads/products/products/oppo-reno3-tgdd4.jpg', 137),
(831, 'public/uploads/products/products/oppo-reno3-trang-400x460-400x460 - Copy(1).png', 137),
(832, 'public/uploads/products/products/img-pro-10 - Copy.png', 138),
(833, 'public/uploads/products/products/iphone-11-pro-max-green-400x400 - Copy(2).jpg', 138),
(834, 'public/uploads/products/products/iphone-11-red-400x400 - Copy(2).jpg', 138),
(835, 'public/uploads/products/products/oppo-a92-white-600x600-400x400 - Copy(4).jpg', 138),
(836, 'public/uploads/products/products/oppo-reno2-f-600x600-200x200 - Copy(2).jpg', 138),
(837, 'public/uploads/products/products/oppo-reno3-tgdd4 - Copy(1).jpg', 138),
(838, 'public/uploads/products/products/oppo-reno3-trang-400x460-400x460 - Copy(3).png', 138),
(839, 'public/uploads/products/products/img-pro-10 - Copy(1).png', 139),
(840, 'public/uploads/products/products/iphone-11-pro-max-green-400x400 - Copy(3).jpg', 139),
(841, 'public/uploads/products/products/iphone-11-red-400x400 - Copy(4).jpg', 139),
(842, 'public/uploads/products/products/oppo-a92-white-400-400x460.png', 139),
(843, 'public/uploads/products/products/oppo-a92-white-600x600-400x400 - Copy(5).jpg', 139),
(844, 'public/uploads/products/products/oppo-reno2-f-600x600-200x200 - Copy(3).jpg', 139),
(845, 'public/uploads/products/products/oppo-reno3-tgdd4 - Copy(2).jpg', 139),
(846, 'public/uploads/products/products/img-pro-09 - Copy.png', 140),
(847, 'public/uploads/products/products/img-pro-10 - Copy(2).png', 140),
(848, 'public/uploads/products/products/iphone-11-pro-max-green-400x400 - Copy(4).jpg', 140),
(849, 'public/uploads/products/products/iphone-11-red-400x400 - Copy(5).jpg', 140),
(850, 'public/uploads/products/products/oppo-a92-white-400-400x460 - Copy.png', 140),
(851, 'public/uploads/products/products/oppo-a92-white-400-400x460 - Copy(1).png', 141),
(852, 'public/uploads/products/products/oppo-a92-white-600x600-400x400 - Copy(6).jpg', 141),
(853, 'public/uploads/products/products/oppo-reno2-f-600x600-200x200 - Copy(5).jpg', 141),
(854, 'public/uploads/products/products/oppo-reno3-tgdd4 - Copy(3).jpg', 141),
(855, 'public/uploads/products/products/oppo-reno3-trang-400x460-400x460 - Copy(4).png', 141),
(856, 'public/uploads/products/products/oppo-reno3-trang-600x600-400x400 - Copy(4).jpg', 141),
(857, 'public/uploads/products/products/oppo-reno3-trang-400x460-400x460 - Copy(5).png', 142),
(858, 'public/uploads/products/products/oppo-reno3-trang-600x600-400x400 - Copy(5).jpg', 142),
(859, 'public/uploads/products/products/realme-6i-trang-400x460-fix-400x460 (1).png', 142),
(860, 'public/uploads/products/products/realme-6i-trang-400x460-fix-400x460 - Copy.png', 142),
(861, 'public/uploads/products/products/samsung-galaxy-a51-8gb-blue-400x460-1-400x460 - Copy(2).png', 143),
(862, 'public/uploads/products/products/vsmart-joy-3-4gb-den-400x460-400x460.png', 143),
(863, 'public/uploads/products/products/xiaomi-redmi-note-9-1-200x200.jpg', 143),
(864, 'public/uploads/products/products/img-pro-05 - Copy(1).png', 144),
(865, 'public/uploads/products/products/img-pro-17.png', 144),
(866, 'public/uploads/products/products/img-pro-18.png', 144),
(867, 'public/uploads/products/products/img-pro-19.png', 144),
(868, 'public/uploads/products/products/img-pro-20.png', 145),
(869, 'public/uploads/products/products/img-pro-21.png', 145),
(870, 'public/uploads/products/products/img-pro-22.png', 145),
(871, 'public/uploads/products/products/img-pro-23.png', 145),
(872, 'public/uploads/products/products/img-pro-20 - Copy.png', 146),
(873, 'public/uploads/products/products/img-pro-21 - Copy.png', 146),
(874, 'public/uploads/products/products/img-pro-22 - Copy.png', 146),
(875, 'public/uploads/products/products/img-pro-23 - Copy.png', 146),
(876, 'public/uploads/products/products/img-pro-20 - Copy(1).png', 147),
(877, 'public/uploads/products/products/img-pro-21 - Copy(1).png', 147),
(878, 'public/uploads/products/products/img-pro-22 - Copy(1).png', 147),
(879, 'public/uploads/products/products/img-pro-23 - Copy(1).png', 147),
(880, 'public/uploads/products/products/img-pro-05 - Copy(2).png', 148),
(881, 'public/uploads/products/products/img-pro-17 - Copy(1).png', 148),
(882, 'public/uploads/products/products/img-pro-18 - Copy(1).png', 148),
(883, 'public/uploads/products/products/img-pro-19 - Copy(1).png', 148),
(884, 'public/uploads/products/products/img-pro-05 - Copy(4).png', 149),
(885, 'public/uploads/products/products/img-pro-17 - Copy(3).png', 149),
(886, 'public/uploads/products/products/img-pro-18 - Copy(3).png', 149),
(887, 'public/uploads/products/products/img-pro-19 - Copy(3).png', 149),
(888, 'public/uploads/products/products/img-pro-05 - Copy(5).png', 150),
(889, 'public/uploads/products/products/img-pro-17 - Copy(4).png', 150),
(890, 'public/uploads/products/products/img-pro-18 - Copy(4).png', 150),
(891, 'public/uploads/products/products/img-pro-19 - Copy(4).png', 150),
(892, 'public/uploads/products/products/img-pro-05 - Copy(6).png', 151),
(893, 'public/uploads/products/products/img-pro-17 - Copy(5).png', 151),
(894, 'public/uploads/products/products/img-pro-18 - Copy(5).png', 151),
(895, 'public/uploads/products/products/img-pro-19 - Copy(5).png', 151),
(896, 'public/uploads/products/products/iphone-11-red-400x400 - Copy(7).jpg', 152),
(897, 'public/uploads/products/products/oppo-a92-white-600x600-400x400 - Copy(8).jpg', 152),
(898, 'public/uploads/products/products/oppo-reno2-f-600x600-200x200 - Copy(6).jpg', 152),
(899, 'public/uploads/products/products/oppo-reno3-trang-600x600-400x400 - Copy(6).jpg', 152),
(900, 'public/uploads/products/products/iphone-11-red-400x400 - Copy(8).jpg', 153),
(901, 'public/uploads/products/products/oppo-a92-white-600x600-400x400 - Copy(9).jpg', 153),
(902, 'public/uploads/products/products/oppo-reno2-f-600x600-200x200 - Copy(8).jpg', 153),
(903, 'public/uploads/products/products/oppo-reno3-trang-600x600-400x400 - Copy(7).jpg', 153),
(904, 'public/uploads/products/products/samsung-galaxy-a21s-055620-045659-400x400.jpg', 153),
(905, 'public/uploads/products/products/samsung-galaxy-a21s-tgdd1.jpg', 153),
(906, 'public/uploads/products/products/samsung-galaxy-a21s-tgdd2.jpg', 153),
(907, 'public/uploads/products/products/oppo-reno2-f-600x600-200x200 - Copy(9).jpg', 154),
(908, 'public/uploads/products/products/oppo-reno3-trang-600x600-400x400 - Copy(8).jpg', 154),
(909, 'public/uploads/products/products/samsung-galaxy-a21s-055620-045659-400x400 - Copy(1).jpg', 154),
(910, 'public/uploads/products/products/samsung-galaxy-a21s-tgdd1 - Copy.jpg', 154),
(911, 'public/uploads/products/products/samsung-galaxy-a21s-tgdd2 - Copy.jpg', 154),
(912, 'public/uploads/products/products/samsung-galaxy-a21s-tgdd8.jpg', 154),
(913, 'public/uploads/products/products/oppo-a92-white-600x600-400x400 - Copy(10).jpg', 155),
(914, 'public/uploads/products/products/oppo-reno2-f-600x600-200x200 - Copy(10).jpg', 155),
(915, 'public/uploads/products/products/oppo-reno3-trang-600x600-400x400 - Copy(9).jpg', 155),
(916, 'public/uploads/products/products/samsung-galaxy-a21s-055620-045659-400x400 - Copy(4).jpg', 156),
(917, 'public/uploads/products/products/iphone-11-red-400x400 - Copy(11).jpg', 157),
(918, 'public/uploads/products/products/oppo-a92-white-600x600-400x400 - Copy(12).jpg', 157),
(919, 'public/uploads/products/products/oppo-reno2-f-600x600-200x200 - Copy(12).jpg', 157),
(920, 'public/uploads/products/products/iphone-11-red-400x400 - Copy(12).jpg', 158),
(921, 'public/uploads/products/products/oppo-a92-white-600x600-400x400 - Copy(13).jpg', 158),
(922, 'public/uploads/products/products/oppo-reno2-f-600x600-200x200 - Copy(13).jpg', 158),
(923, 'public/uploads/products/products/oppo-reno3-trang-600x600-400x400 - Copy(13).jpg', 158),
(924, 'public/uploads/products/products/samsung-galaxy-a21s-055620-045659-400x400 - Copy(5).jpg', 158),
(925, 'public/uploads/products/products/iphone-11-red-400x400 - Copy(13).jpg', 159),
(926, 'public/uploads/products/products/oppo-a92-white-600x600-400x400 - Copy(14).jpg', 159),
(927, 'public/uploads/products/products/oppo-reno2-f-600x600-200x200 - Copy(14).jpg', 159),
(928, 'public/uploads/products/products/iphone-11-red-400x400 - Copy(14).jpg', 160),
(929, 'public/uploads/products/products/oppo-a92-white-600x600-400x400 - Copy(15).jpg', 160),
(930, 'public/uploads/products/products/oppo-reno2-f-600x600-200x200 - Copy(15).jpg', 160),
(931, 'public/uploads/products/products/iphone-11-red-400x400 - Copy(16).jpg', 161),
(932, 'public/uploads/products/products/oppo-a92-white-600x600-400x400 - Copy(16).jpg', 161),
(933, 'public/uploads/products/products/oppo-reno2-f-600x600-200x200 - Copy(16).jpg', 161),
(934, 'public/uploads/products/products/oppo-reno3-trang-600x600-400x400 - Copy(14).jpg', 161),
(935, 'public/uploads/products/products/samsung-galaxy-a21s-055620-045659-400x400 - Copy(7).jpg', 161),
(936, 'public/uploads/products/products/iphone-11-red-400x400 - Copy(17).jpg', 162),
(937, 'public/uploads/products/products/oppo-a92-white-600x600-400x400 - Copy(17).jpg', 162),
(938, 'public/uploads/products/products/oppo-reno2-f-600x600-200x200 - Copy(17).jpg', 162),
(939, 'public/uploads/products/products/samsung-galaxy-a21s-tgdd2 - Copy(1).jpg', 163),
(940, 'public/uploads/products/products/tai-nghe-chup-tai-gaming-71-rapoo-vh510-den-1-600x600 - Copy.jpg', 164),
(1004, 'public/uploads/products/products/OPPO-Reno7-Z - Copy(4).jpg', 214),
(1005, 'public/uploads/products/products/OPPO_A76 - Copy(2).jpg', 215),
(1006, 'public/uploads/products/products/OPPO_A16 - Copy.jpg', 216),
(1007, 'public/uploads/products/products/SS22_ultra - Copy(5).jpg', 217),
(1008, 'public/uploads/products/products/Samsung_A52s - Copy.jpg', 218),
(1009, 'public/uploads/products/products/Samsung_A73 - Copy.jpg', 219),
(1010, 'public/uploads/products/products/Samsung_note_20 - Copy.jpg', 220),
(1011, 'public/uploads/products/products/OPPO-Reno-5 - Copy.jpg', 221),
(1012, 'public/uploads/products/products/Xiaomi_note11 - Copy.jpg', 222),
(1014, 'public/uploads/products/products/vivo_23e - Copy(2).jpg', 224),
(1015, 'public/uploads/products/products/vivo_53 - Copy.jpg', 225),
(1016, 'public/uploads/products/products/poco_X3pro - Copy.jpg', 226),
(1017, 'public/uploads/products/products/dell-gaming-g15-5511-i7-p105f006agr-140222-091722-600x600 - Copy(1).jpg', 227),
(1018, 'public/uploads/products/products/tải xuống - Copy.jpg', 228),
(1019, 'public/uploads/products/products/tải xuống (1) - Copy.jpg', 229);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_location`
--

CREATE TABLE `tbl_location` (
  `id_location` int(200) NOT NULL,
  `name_location` varchar(200) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `level_location` int(200) NOT NULL,
  `parent_id` int(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `tbl_location`
--

INSERT INTO `tbl_location` (`id_location`, `name_location`, `level_location`, `parent_id`) VALUES
(6, 'An Giang', 1, NULL),
(7, 'Bà Rịa - Vũng Tàu', 1, NULL),
(8, 'Bắc Giang', 1, NULL),
(9, 'Bắc Kạn', 1, NULL),
(10, 'Bạc Liêu', 1, NULL),
(11, 'Bắc Ninh', 1, NULL),
(12, 'Bến Tre', 1, NULL),
(13, 'Bình Định', 1, NULL),
(14, 'Bình Dương', 1, NULL),
(15, 'Bình Phước', 1, NULL),
(16, 'Bình Thuận', 1, NULL),
(17, 'Cà Mau', 1, NULL),
(18, 'Cao Bằng', 1, NULL),
(19, 'Đắk Lắk', 1, NULL),
(20, 'Đắk Nông', 1, NULL),
(21, 'Điện Biên', 1, NULL),
(22, 'Đồng Nai', 1, NULL),
(23, 'Đồng Tháp', 1, NULL),
(24, 'Gia Lai', 1, NULL),
(25, 'Hà Giang', 1, NULL),
(26, 'Hà Nam', 1, NULL),
(27, 'Hà Tĩnh', 1, NULL),
(28, 'Hải Dương', 1, NULL),
(29, 'Hậu Giang', 1, NULL),
(30, 'Hòa Bình', 1, NULL),
(31, 'Hưng Yên', 1, NULL),
(32, 'Khánh Hòa', 1, NULL),
(33, 'Kiên Giang', 1, NULL),
(34, 'Kon Tum', 1, NULL),
(35, 'Lai Châu', 1, NULL),
(36, 'Lâm Đồng', 1, NULL),
(37, 'Lạng Sơn', 1, NULL),
(38, 'Lào Cai', 1, NULL),
(39, 'Long An', 1, NULL),
(40, 'Nam Định', 1, NULL),
(41, 'Nghệ An', 1, NULL),
(42, 'Ninh Bình', 1, NULL),
(43, 'Ninh Thuận', 1, NULL),
(44, 'Phú Thọ', 1, NULL),
(45, 'Quảng Bình', 1, NULL),
(46, 'Quảng Nam', 1, NULL),
(47, 'Quảng Ngãi', 1, NULL),
(48, 'Quảng Ninh', 1, NULL),
(49, 'Quảng Trị', 1, NULL),
(50, 'Sóc Trăng', 1, NULL),
(51, 'Sơn La', 1, NULL),
(52, 'Tây Ninh', 1, NULL),
(53, 'Thái Bình', 1, NULL),
(54, 'Thái Nguyên', 1, NULL),
(55, 'Thanh Hóa', 1, NULL),
(56, 'Thừa Thiên Huế', 1, NULL),
(57, 'Tiền Giang', 1, NULL),
(58, 'Trà Vinh', 1, NULL),
(59, 'Tuyên Quang', 1, NULL),
(60, 'Vĩnh Long', 1, NULL),
(61, 'Vĩnh Phúc', 1, NULL),
(62, 'Yên Bái', 1, NULL),
(63, 'Phú Yên	', 1, NULL),
(64, 'Cần Thơ', 1, NULL),
(65, 'Đà Nẵng', 1, NULL),
(66, 'Hải Phòng', 1, NULL),
(67, 'Hà Nội', 1, NULL),
(68, 'TP HCM', 1, NULL),
(70, 'Ninh Sơn', 2, 43),
(71, 'Thuận Bắc', 2, 43),
(72, 'Ninh Phước', 2, 43),
(73, 'Bắc Ái', 2, 43),
(74, 'Thuận Nam', 2, 43),
(75, 'Ninh Hải', 2, 43),
(76, 'Huyện Bắc Bình', 2, 16),
(77, 'Huyện Đảo Phú Quý', 2, 16),
(78, 'Huyện Đức Linh', 2, 16),
(79, 'Huyện Hàm Tân', 2, 16),
(80, 'Huyện Hàm Thuận Bắc', 2, 16),
(81, 'Huyện Hàm Thuận Nam', 2, 16),
(82, 'Huyện Tánh Linh', 2, 16),
(83, 'Huyện Tuy Phong', 2, 16),
(84, 'Huyện Bình Chánh', 2, 68),
(85, 'Huyện Cần Giờ', 2, 68),
(86, 'Huyện Củ Chi', 2, 68),
(87, 'Huyện Hóc Môn', 2, 68),
(88, 'Huyện Nhà Bè', 2, 68),
(89, 'Quận 1', 2, 68),
(90, 'Quận 2', 2, 68),
(91, 'Quận 3', 2, 68),
(92, 'Quận 4', 2, 68),
(93, 'Quận 5', 2, 68),
(94, 'Quận 6', 2, 68),
(95, 'Quận 7', 2, 68),
(96, 'Quận 8', 2, 68),
(97, 'Quận 9', 2, 68),
(98, 'Quận 10', 2, 68),
(99, 'Quận 11', 2, 68),
(100, 'Quận 12', 2, 68),
(101, 'Quận Bình Tân', 2, 68),
(102, 'Quận Bình Thạnh', 2, 68),
(103, 'Quận Gò Vấp', 2, 68),
(104, 'Quận Phú Nhuận', 2, 68),
(105, 'Quận Tân Bình', 2, 68),
(106, 'Quận Tân Phú', 2, 68),
(107, 'Quận Thủ Đức', 2, 68),
(108, 'Huyện An Phú', 2, 6),
(109, 'Huyện Châu Phú', 2, 6),
(110, 'Huyện Châu Thành', 2, 6),
(111, 'Huyện Chợ Mới', 2, 6),
(112, 'Huyện Phú Tân', 2, 6),
(113, 'Huyện Thoại Sơn', 2, 6),
(114, 'Huyện Tịnh Biên', 2, 6),
(115, 'Huyện Tri Tôn', 2, 6),
(116, 'Thành Phố Châu Đốc', 2, 6),
(117, 'Thành Phố Long Xuyên', 2, 6),
(118, 'Thị Xã Tân Châu', 2, 6),
(119, 'công hải', 3, 71),
(120, 'Kim Động', 2, 31),
(121, 'Toàn Thắng', 3, 120),
(122, 'Hoành Bồ', 2, 48),
(123, 'Phường Hồng Hà', 3, 122);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_order`
--

CREATE TABLE `tbl_order` (
  `id_order` bigint(20) NOT NULL,
  `list_prod_cart` varchar(300) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `code_order` varchar(100) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `num_order` int(200) NOT NULL,
  `total_price_order` bigint(20) NOT NULL,
  `note_order` varchar(200) COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `status` enum('pending','delivery','complete','canceled') COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `order_date` date NOT NULL,
  `payment_method` enum('1','2') COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `customer_id` int(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `tbl_order`
--

INSERT INTO `tbl_order` (`id_order`, `list_prod_cart`, `code_order`, `num_order`, `total_price_order`, `note_order`, `status`, `order_date`, `payment_method`, `customer_id`) VALUES
(95, '[{\"id\":\"229\",\"qty\":3,\"price\":18870000}]', 'USTORA_0866816802_128', 3, 18870000, NULL, 'pending', '2022-06-22', '2', 79),
(96, '[{\"id\":\"229\",\"qty\":3,\"price\":18870000}]', 'USTORA_0866816802_445', 3, 18870000, NULL, 'pending', '2022-06-22', '2', 79);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_postcat`
--

CREATE TABLE `tbl_postcat` (
  `id_postCat` int(200) NOT NULL,
  `name_postCat` varchar(200) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `status` enum('publish','pending','trash') COLLATE utf8mb4_vietnamese_ci NOT NULL DEFAULT 'pending',
  `status_old` enum('publish','pending') COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `created_date` int(100) NOT NULL,
  `creator` varchar(100) COLLATE utf8mb4_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `tbl_postcat`
--

INSERT INTO `tbl_postcat` (`id_postCat`, `name_postCat`, `status`, `status_old`, `created_date`, `creator`) VALUES
(178, 'Blog', 'publish', NULL, 1654093021, 'builong'),
(179, 'Giới thiệu', 'publish', NULL, 1654093037, 'builong');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_posts`
--

CREATE TABLE `tbl_posts` (
  `post_id` int(200) NOT NULL,
  `post_title` varchar(300) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `post_url` varchar(200) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `post_desc` text COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `post_content` text COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `post_img` varchar(200) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `status` enum('publish','pending','trash') COLLATE utf8mb4_vietnamese_ci NOT NULL DEFAULT 'pending',
  `status_old` enum('publish','pending') COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `post_cat_id` int(200) NOT NULL,
  `created_date` int(200) NOT NULL,
  `update_date` int(200) NOT NULL,
  `creator` varchar(200) COLLATE utf8mb4_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `tbl_posts`
--

INSERT INTO `tbl_posts` (`post_id`, `post_title`, `post_url`, `post_desc`, `post_content`, `post_img`, `status`, `status_old`, `post_cat_id`, `created_date`, `update_date`, `creator`) VALUES
(263, 'POCO C40 ra mắt tại VN', 'poco-c40-ra-mat-tai-vn', 'Việt Nam là quốc gia đầu tiên ra mắt sản phẩm POCO C40, chiếc smartphone giá rẻ tiếp theo tới từ thương hiệu POCO.', '<h2><span style=\"font-size:14px\">Thương hiệu POCO mới đ&acirc;y đ&atilde; giới thiệu chiếc smartphone mới tại thị trường Việt Nam c&oacute; t&ecirc;n POCO C40. Đ&acirc;y l&agrave; một mẫu smartphone gi&aacute; rẻ c&oacute; thiết kế trẻ trung, hiệu năng ở mức cơ bản với một con chip mới chưa từng xuất hiện tr&ecirc;n thị trường.</span></h2>\r\n\r\n<p><span style=\"font-size:14px\">POCO C40 c&oacute; thiết kế đặc trưng của c&aacute;c smartphone POCO với cụm camera lớn. Th&acirc;n m&aacute;y được ho&agrave;n thiện từ nhựa ở mặt lưng v&agrave; khung viền. Sẽ c&oacute; 3 t&ugrave;y chọn để người d&ugrave;ng lựa chọn l&agrave; m&agrave;u đen, m&agrave;u xanh v&agrave; m&agrave;u v&agrave;ng đặc trưng. Cả 3 đều sở hữu mặt lưng giả da.</span></p>\r\n\r\n<p><span style=\"font-size:14px\">Mặt lưng của POCO C40 gồm cụm camera k&eacute;p đặt trong một m&ocirc;-đun h&igrave;nh vu&ocirc;ng ở g&oacute;c tr&aacute;i: camera g&oacute;c rộng 13MP v&agrave; camera đo chiều s&acirc;u 2MP.&nbsp;</span></p>\r\n\r\n<p><span style=\"font-size:14px\">POCO C40 c&oacute; m&agrave;n h&igrave;nh LCD IPS 6.71 inch ở mặt trước, độ ph&acirc;n giải dừng ở mức HD+ v&agrave; kh&ocirc;ng c&oacute; tần số qu&eacute;t cao. M&agrave;n h&igrave;nh n&agrave;y sử dụng thiết kế &quot;giọt nước&quot; ở ch&iacute;nh giữa, viền m&agrave;n h&igrave;nh hơi d&agrave;y.</span></p>\r\n\r\n<p><span style=\"font-size:14px\">Về hiệu năng, C40 đi k&egrave;m với một con chip kh&aacute; lạ c&oacute; t&ecirc;n JR510 gồm t&aacute;m nh&acirc;n hiệu năng cao tới từ thương hiệu JLQ Technology. Đ&acirc;y l&agrave; một con chip 11mm xung nhịp 2GHz cho hiệu năng ở mức cơ bản. Được biết hiệu năng của JR510 c&oacute; thể ngang với Snapdragon 450 hoặc Helio G35 tới từ Qualcomm v&agrave; MediaTek.</span></p>\r\n\r\n<p><span style=\"font-size:14px\">POCO C40 phi&ecirc;n bản ch&iacute;nh h&atilde;ng Việt Nam sẽ c&oacute; duy nhất một t&ugrave;y chọn bộ nhớ l&agrave; 4GB/64GB. Vi&ecirc;n pin c&oacute; dung lượng lớn 6000mAh, hỗ trợ sạc nhanh 18W với củ sạc đi k&egrave;m sẵn.</span></p>\r\n\r\n<p><span style=\"font-size:14px\">Gi&aacute; b&aacute;n ni&ecirc;m yết của POCO C40 tại thị trường Việt Nam l&agrave; 3,490,000 đồng, ph&acirc;n phối độc quyền tại hệ thống Thế Giới Di Động.</span></p>\r\n', 'public/uploads/posts/Screenshot 2022-06-01 212248.png', 'publish', NULL, 178, 1654093396, 1655915251, 'builong299'),
(265, 'Giao diện ColorOS 13 bất ngờ bị lộ với các cải tiến màn hình chính và Widget', 'giao-dien-coloros-13-bat-ngo-bi-lo-voi-cac-cai-tien-man-hinh-chinh-va-widget', 'Giao diện ColorOS 13 bất ngờ bị lộ với các cải tiến màn hình chính và Widget', '<h2>V&agrave;o ng&agrave;y 7/6,&nbsp;<a href=\"https://www.thegioididong.com/dtdd-oppo\" target=\"_blank\" title=\"OPPO\" type=\"OPPO\">OPPO</a>&nbsp;đ&atilde; tổ chức hội nghị nh&agrave; ph&aacute;t triển ở Trung Quốc để tiết lộ th&ocirc;ng tin về giao diện ColorOS 13 sắp ra mắt (dựa tr&ecirc;n Android 13). Mới đ&acirc;y, ảnh chụp m&agrave;n h&igrave;nh&nbsp;<a href=\"https://www.thegioididong.com/dtdd\" target=\"_blank\" title=\"Điện thoại\" type=\"Điện thoại\">điện thoại</a>&nbsp;của giao diện n&agrave;y đ&atilde; bị lộ tr&ecirc;n Weibo, cho biết sẽ c&oacute; c&aacute;c thay đổi về giao diện v&agrave; Widget.</h2>\r\n\r\n<p>Theo đ&oacute;, c&aacute;ch đ&acirc;y v&agrave;i giờ Digital Chat Station đ&atilde; chia sẻ hai b&agrave;i đăng tr&ecirc;n Weibo về chủ đề ColorOS 13 nhưng sau đ&oacute; đ&atilde; gỡ b&agrave;i đăng c&oacute; ảnh chụp m&agrave;n h&igrave;nh giao diện v&agrave; để lại b&agrave;i đăng về khung thời gian chương tr&igrave;nh Beta.</p>\r\n\r\n<p>May thay, c&aacute;c phương tiện truyền th&ocirc;ng Trung Quốc vẫn kịp đưa tin về r&ograve; rỉ trước khi h&igrave;nh ảnh bị x&oacute;a, tiết lộ ColorOS 13 sẽ mang đến những cải tiến cho giao diện thư mục v&agrave; widget.</p>\r\n\r\n<p>Cụ thể, người d&ugrave;ng sẽ c&oacute; thể mở rộng k&iacute;ch thước thư mục tr&ecirc;n m&agrave;n h&igrave;nh ch&iacute;nh, từ đ&oacute; c&aacute;c ứng dụng c&oacute; thể được mở nhanh ch&oacute;ng bằng c&aacute;ch nhấn v&agrave;o biểu tượng từ b&ecirc;n ngo&agrave;i thư mục.</p>\r\n', 'public/uploads/posts/h2-coloros13_1280x720-800-resize.jpg', 'publish', NULL, 178, 1655917952, 0, 'builong299'),
(266, 'Giới thiệu cửa hàng USTORA.COM', 'gioi-thieu-cua-hang-ustora-com', 'Cửa hàng bán các loại đồ công nghệ ', '<p>Miễn ph&iacute; vận chuyển&nbsp;</p>\r\n\r\n<p>Tư vấn 24/7</p>\r\n\r\n<p>Thanh to&aacute;n nhanh</p>\r\n\r\n<p>Đặt h&agrave;ng online</p>\r\n', 'public/uploads/posts/logo.png', 'publish', NULL, 179, 1655918327, 0, 'builong299');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_productcat`
--

CREATE TABLE `tbl_productcat` (
  `id_productCat` int(200) NOT NULL,
  `name_productCat` varchar(200) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `status` enum('publish','pending','trash') COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `status_old` enum('publish','pending','trash') COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `creator` varchar(200) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `created_date` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `tbl_productcat`
--

INSERT INTO `tbl_productcat` (`id_productCat`, `name_productCat`, `status`, `status_old`, `creator`, `created_date`) VALUES
(28, 'Điện Thoại', 'publish', NULL, 'builong', 1654089233),
(29, 'Laptop', 'publish', NULL, 'builong', 1654089244);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_products`
--

CREATE TABLE `tbl_products` (
  `id_product` bigint(20) NOT NULL,
  `name_product` varchar(200) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `code_product` varchar(100) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `price_product` bigint(20) NOT NULL,
  `price_old_product` bigint(20) DEFAULT NULL,
  `avatar_product` varchar(200) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `img_relative_product` bigint(20) NOT NULL,
  `qty_product` int(200) NOT NULL,
  `status` enum('publish','pending','trash') COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `status_old` enum('publish','pending','trash') COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `creator` varchar(200) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `created_date` bigint(20) NOT NULL,
  `update_date` bigint(20) DEFAULT NULL,
  `id_cat_product` bigint(20) NOT NULL,
  `trademark_product` int(200) NOT NULL,
  `desc_product` text COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `content_product` text COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `detail_img_product` bigint(20) NOT NULL,
  `numPurchases` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `tbl_products`
--

INSERT INTO `tbl_products` (`id_product`, `name_product`, `code_product`, `price_product`, `price_old_product`, `avatar_product`, `img_relative_product`, `qty_product`, `status`, `status_old`, `creator`, `created_date`, `update_date`, `id_cat_product`, `trademark_product`, `desc_product`, `content_product`, `detail_img_product`, `numPurchases`) VALUES
(214, 'Điện thoại OPPO Reno7 Z 5G', 'UsOppo_1', 10490000, NULL, 'public/uploads/products/products/OPPO-Reno7-Z - Copy(3).jpg', 0, 10, 'publish', NULL, 'builong', 1654090023, NULL, 28, 49, 'OPPO đã trình làng mẫu Reno7 Z 5G với thiết kế OPPO Glow độc quyền, camera mang hiệu ứng như máy DSLR chuyên nghiệp cùng viền sáng kép, máy có một cấu hình mạnh mẽ và đạt chứng nhận xếp hạng A về độ mượt.', '<h3>OPPO đ&atilde;&nbsp;tr&igrave;nh l&agrave;ng mẫu Reno7 Z 5G&nbsp;với thiết kế OPPO Glow độc quyền, camera mang hiệu ứng như m&aacute;y DSLR chuy&ecirc;n nghiệp c&ugrave;ng viền s&aacute;ng k&eacute;p, m&aacute;y c&oacute; một cấu h&igrave;nh mạnh mẽ v&agrave; đạt chứng nhận xếp hạng A về độ mượt.</h3>\r\n', 0, 0),
(215, 'Điện thoại OPPO A76', 'UsOppo_2', 8000000, NULL, 'public/uploads/products/products/OPPO_A76 - Copy(1).jpg', 0, 10, 'publish', NULL, 'builong', 1654090125, NULL, 28, 49, 'OPPO A76 4G ra mắt với thiết kế trẻ trung, hiệu năng ổn định, màn hình 90 Hz mượt mà cùng viên pin trâu cho thời gian sử dụng lâu dài phù hợp cho mọi đối tượng người dùng.\r\nThiết kế OPPO Glow - màu gradient đẹp mắt', '<h3>OPPO A76 ra mắt với thiết kế trẻ trung, hiệu năng ổn định, m&agrave;n h&igrave;nh 90 Hz mượt m&agrave; c&ugrave;ng vi&ecirc;n pin tr&acirc;u cho thời gian sử dụng l&acirc;u d&agrave;i ph&ugrave; hợp cho mọi đối tượng người d&ugrave;ng.</h3>\r\n\r\n<h3>Thiết kế OPPO Glow - m&agrave;u gradient đẹp mắt</h3>\r\n', 0, 0),
(216, 'Điện thoại OPPO A16', 'UsOppo_3', 7000000, NULL, 'public/uploads/products/products/OPPO_A16.jpg', 0, 10, 'publish', NULL, 'builong', 1654090213, NULL, 28, 49, 'OPPO A16 - sản phẩm giá rẻ đến từ nhà OPPO, đây là một chiếc điện thoại cân bằng ở mọi khía cạnh trong tầm giá, máy có thiết kế đẹp mắt, sử dụng CPU gaming đến từ MediaTek cùng viên pin siêu trâu.\r\nThiết kế đẹp, chất lượng hoàn thiện tốt', '<h3>OPPO A16 - sản phẩm gi&aacute; rẻ đến từ nh&agrave; OPPO, đ&acirc;y l&agrave; một chiếc điện thoại&nbsp;c&acirc;n bằng ở mọi kh&iacute;a cạnh trong tầm gi&aacute;, m&aacute;y c&oacute; thiết kế đẹp mắt, sử dụng CPU gaming đến từ MediaTek c&ugrave;ng vi&ecirc;n pin si&ecirc;u tr&acirc;u.</h3>\r\n\r\n<h3>Thiết kế đẹp, chất lượng ho&agrave;n thiện tốt</h3>\r\n', 0, 0),
(217, 'Điện thoại Samsung Galaxy S22 Ultra', 'UsSamsung_1', 30990000, NULL, 'public/uploads/products/products/SS22_ultra - Copy(4).jpg', 0, 10, 'publish', NULL, 'builong', 1654090502, NULL, 28, 47, 'Galaxy S22 Ultra 5G chiếc smartphone cao cấp nhất trong bộ 3 Galaxy S22 series mà Samsung đã cho ra mắt. Tích hợp bút S Pen hoàn hảo trong thân máy, trang bị vi xử lý mạnh mẽ cho các tác vụ sử dụng vô cùng mượt mà và nổi bật hơn với cụm camera không viền độc đáo mang đậm dấu ấn riêng.\r\nSở hữu một diện mạo đầy nổi bật', '<h3>Galaxy S22 Ultra&nbsp;chiếc smartphone cao cấp nhất trong bộ 3 Galaxy S22 series m&agrave; Samsung&nbsp;đ&atilde; cho ra mắt. T&iacute;ch hợp b&uacute;t S Pen ho&agrave;n hảo trong th&acirc;n m&aacute;y, trang bị vi xử l&yacute; mạnh mẽ cho c&aacute;c t&aacute;c vụ sử dụng v&ocirc; c&ugrave;ng mượt m&agrave; v&agrave; nổi bật hơn với cụm camera kh&ocirc;ng viền độc đ&aacute;o mang đậm dấu ấn ri&ecirc;ng.</h3>\r\n\r\n<h3>Sở hữu một diện mạo đầy nổi bật</h3>\r\n', 0, 0),
(218, 'Điện thoại Samsung Galaxy A52s', 'UsSamsung_2', 7990000, NULL, 'public/uploads/products/products/Samsung_A52s.jpg', 0, 10, 'publish', NULL, 'builong', 1654090663, NULL, 28, 47, 'Samsung đã chính thức giới thiệu chiếc điện thoại Galaxy A52s 5G đến người dùng, đây phiên bản nâng cấp của Galaxy A52 5G ra mắt cách đây không lâu, với ngoại hình không đổi nhưng được nâng cấp đáng kể về thông số cấu hình bên trong.\r\nThiết kế đặc trưng Galaxy A\r\nSamsung Galaxy A52s tiếp tục sử dụng ngôn ngữ thiết kế nguyên khối theo phong cách trẻ trung với các tuỳ chọn màu sắc như: Đen, trắng, tím và xanh mint.', '<h3>Samsung đ&atilde; ch&iacute;nh thức giới thiệu chiếc điện thoại Galaxy A52s 5G đến người d&ugrave;ng, đ&acirc;y phi&ecirc;n bản n&acirc;ng cấp của Galaxy A52 5G ra mắt c&aacute;ch đ&acirc;y kh&ocirc;ng l&acirc;u, với ngoại h&igrave;nh kh&ocirc;ng đổi nhưng được n&acirc;ng cấp đ&aacute;ng kể về th&ocirc;ng số cấu h&igrave;nh b&ecirc;n trong.<br />\r\nThiết kế đặc trưng Galaxy A<br />\r\nSamsung Galaxy A52s tiếp tục sử dụng ng&ocirc;n ngữ thiết kế nguy&ecirc;n khối theo phong c&aacute;ch trẻ trung với c&aacute;c tuỳ chọn m&agrave;u sắc như: Đen, trắng, t&iacute;m v&agrave; xanh mint.</h3>\r\n', 0, 0),
(219, 'Điện thoại Samsung Galaxy A73', 'UsSamsung_3', 11990000, NULL, 'public/uploads/products/products/Samsung_A73.jpg', 0, 10, 'publish', NULL, 'builong', 1654091101, NULL, 28, 47, 'Samsung Galaxy A73 5G 128GB được xem là sản phẩm nổi bật nhất dòng Galaxy A 2022 mới ra mắt, máy trang bị bộ thông số kỹ thuật ấn tượng về phần hiệu năng, chất lượng màn hình và nổi bật nhất trong số đó là camera khi nó đem lại bức ảnh có độ phân giải lên đến 108 MP.\r\nThỏa sức nhiếp ảnh với camera chụp ảnh sắc nét', '<h3>Samsung Galaxy A73 5G 128GB được xem l&agrave; sản phẩm nổi bật nhất d&ograve;ng Galaxy A 2022 mới ra mắt, m&aacute;y trang bị bộ th&ocirc;ng số kỹ thuật ấn tượng về phần hiệu năng, chất lượng m&agrave;n h&igrave;nh v&agrave; nổi bật nhất trong số đ&oacute; l&agrave; camera khi n&oacute; đem lại bức ảnh c&oacute; độ ph&acirc;n giải l&ecirc;n đến 108 MP.<br />\r\nThỏa sức nhiếp ảnh với camera chụp ảnh sắc n&eacute;t</h3>\r\n', 0, 0),
(220, 'Điện thoại Samsung Galaxy Note 20 ', 'UsSamsung_4', 15990000, NULL, 'public/uploads/products/products/Samsung_note_20.jpg', 0, 10, 'publish', NULL, 'builong', 1654091324, NULL, 28, 47, 'Tháng 8/2020, smartphone Galaxy Note 20 chính thức được lên kệ, với thiết kế camera trước nốt ruồi quen thuộc, cụm camera hình chữ nhật mới lạ cùng với vi xử lý Exynos 990 cao cấp của chính hãng điện thoại Samsung chắc hẳn sẽ mang lại một trải nghiệm thú vị cùng hiệu năng mạnh mẽ.\r\nCamera cụm hình chữ nhật độc đáo cùng thiết kế mạnh mẽ', '<h3>Th&aacute;ng 8/2020,&nbsp;<a href=\"https://www.thegioididong.com/dtdd/samsung-galaxy-note-20\" target=\"_blank\" title=\"Tham khảo một số mẫu điện thoại đang kinh doanh tại Thế Giới Di Động\">smartphone&nbsp;Galaxy Note 20</a>&nbsp;ch&iacute;nh thức được l&ecirc;n kệ, với thiết kế camera trước nốt ruồi quen thuộc, cụm camera h&igrave;nh chữ nhật mới lạ c&ugrave;ng với vi xử l&yacute; Exynos 990 cao cấp của ch&iacute;nh&nbsp;<a href=\"https://www.thegioididong.com/dtdd-samsung\">h&atilde;ng điện thoại&nbsp;Samsung</a>&nbsp;chắc hẳn sẽ mang lại một trải nghiệm th&uacute; vị c&ugrave;ng hiệu năng mạnh mẽ.</h3>\r\n\r\n<h3>Camera cụm h&igrave;nh chữ nhật độc đ&aacute;o c&ugrave;ng thiết kế mạnh mẽ</h3>\r\n', 0, 0),
(221, 'Điện thoại OPPO Reno5 ', 'UsOppo_4', 8490000, NULL, 'public/uploads/products/products/OPPO-Reno-5.jpg', 0, 10, 'publish', NULL, 'builong', 1654091509, NULL, 28, 49, 'OPPO đã trình làng OPPO Reno5 5G phiên bản kết nối 5G internet siêu nhanh ra thị trường. Chiếc điện thoại với hàng loạt các tính năng nổi bật cùng vẻ ngoài thời thượng giúp tôn lên vẻ sang trọng cho người sở hữu.\r\nTừng đường nét lấp lánh, tỏa sáng\r\nOPPO Reno5 5G có cấu tạo các khung viền xung quanh hoàn toàn bằng kim loại cao cấp, mặt lưng làm từ nhựa. Chiếc điện thoại được thiết kế tổng thể nguyên khối vô cùng rắn chắc và bo cong mềm mại ở 4 góc, mang đến người dùng cảm giác cầm nắm thoải mái nhất.', '<h3><span style=\"font-size:14px\">OPPO đ&atilde; tr&igrave;nh l&agrave;ng OPPO Reno 5 5G&nbsp;&nbsp;phi&ecirc;n bản kết nối 5G internet si&ecirc;u nhanh ra thị trường. Chiếc điện thoại với h&agrave;ng loạt c&aacute;c t&iacute;nh năng nổi bật c&ugrave;ng vẻ ngo&agrave;i thời thượng gi&uacute;p t&ocirc;n l&ecirc;n vẻ sang trọng cho người sở hữu.</span></h3>\r\n\r\n<h3><span style=\"font-size:14px\">Từng đường n&eacute;t lấp l&aacute;nh, tỏa s&aacute;ng</span></h3>\r\n\r\n<p><span style=\"font-size:14px\">OPPO Reno5 5G c&oacute; cấu tạo c&aacute;c khung viền xung quanh ho&agrave;n to&agrave;n bằng kim loại cao cấp, mặt lưng l&agrave;m từ nhựa. Chiếc điện thoại được thiết kế tổng thể nguy&ecirc;n khối v&ocirc; c&ugrave;ng rắn chắc v&agrave; bo cong mềm mại ở 4 g&oacute;c, mang đến người d&ugrave;ng cảm gi&aacute;c cầm nắm thoải m&aacute;i nhất.</span></p>\r\n', 0, 0),
(222, 'Điện thoại Xiaomi Redmi Note 11', 'UsXiaomi_1', 4690000, NULL, 'public/uploads/products/products/Xiaomi_note11.jpg', 0, 10, 'publish', NULL, 'builong', 1654091796, NULL, 28, 50, 'Điện thoại Redmi được mệnh danh là dòng sản phẩm quốc dân ngon - bổ  - rẻ của Xiaomi và Redmi Note 11 (4GB/64GB) cũng không phải ngoại lệ, máy sở hữu một hiệu năng ổn định, màn hình 90 Hz mượt mà, cụm camera AI đến 50 MP cùng một mức giá vô cùng tốt.\r\nKhung viền phẳng thời thượng\r\nRedmi Note 11 được hoàn thiện từ nhựa nguyên khối, mặt lưng thiết kế nhám mờ giúp quá trình sử dụng được thoải mái hơn, không bị trơn, tuột. Thiết kế nhám cũng giúp máy trông mạnh mẽ, cứng cáp hơn.', '<p>Điện thoại Redmi được mệnh danh l&agrave; d&ograve;ng sản phẩm quốc d&acirc;n ngon - bổ &nbsp;- rẻ của Xiaomi v&agrave; Redmi Note 11 (4GB/64GB) cũng kh&ocirc;ng phải ngoại lệ, m&aacute;y sở hữu một hiệu năng ổn định, m&agrave;n h&igrave;nh 90 Hz mượt m&agrave;, cụm camera AI đến 50 MP c&ugrave;ng một mức gi&aacute; v&ocirc; c&ugrave;ng tốt.<br />\r\nKhung viền phẳng thời thượng<br />\r\nRedmi Note 11 được ho&agrave;n thiện từ nhựa nguy&ecirc;n khối, mặt lưng thiết kế nh&aacute;m mờ gi&uacute;p qu&aacute; tr&igrave;nh sử dụng được thoải m&aacute;i hơn, kh&ocirc;ng bị trơn, tuột. Thiết kế nh&aacute;m cũng gi&uacute;p m&aacute;y tr&ocirc;ng mạnh mẽ, cứng c&aacute;p hơn.</p>\r\n', 0, 0),
(224, 'Điện thoại Vivo V23e', 'UsVivo_1', 7990000, NULL, 'public/uploads/products/products/vivo_23e - Copy(1).jpg', 0, 10, 'publish', NULL, 'builong', 1654092175, NULL, 28, 51, 'Vivo V23e - sản phẩm tầm trung được đầu tư lớn về khả năng selfie cùng ngoại hình mỏng nhẹ, bên cạnh thiết kế vuông vức theo xu hướng hiện tại thì V23e còn có hiệu năng tốt và một viên pin có khả năng sạc cực nhanh.\r\nThiết kế mỏng nhẹ cùng màu sắc tinh tế', '<p>Vivo V23e - sản phẩm tầm trung được đầu tư lớn về khả năng selfie c&ugrave;ng ngoại h&igrave;nh mỏng nhẹ, b&ecirc;n cạnh thiết kế vu&ocirc;ng vức theo xu hướng hiện tại th&igrave; V23e c&ograve;n c&oacute; hiệu năng tốt v&agrave; một vi&ecirc;n pin c&oacute; khả năng sạc cực nhanh.<br />\r\nThiết kế mỏng nhẹ c&ugrave;ng m&agrave;u sắc tinh tế</p>\r\n', 0, 0),
(225, 'Điện thoại Vivo Y53s ', 'Us_Vivo2', 6990000, NULL, 'public/uploads/products/products/vivo_53.jpg', 0, 10, 'publish', NULL, 'builong', 1654092448, NULL, 28, 51, 'Vivo mang đến niềm vui cho mọi người tin dùng khi hãng chính thức tung ra chiếc điện thoại Vivo Y53s với những tính năng tiên tiến đi cùng hiệu năng mạnh mẽ. Đặc biệt, smartphone lại còn sở hữu mức giá hấp dẫn trong phân khúc tầm trung đầy hứa hẹn.\r\nĐánh bật lên nét sang trọng trong thiết kế ', '<h3>Vivo&nbsp;mang đến niềm vui cho mọi người tin d&ugrave;ng khi h&atilde;ng ch&iacute;nh thức tung ra chiếc điện thoại Vivo Y53s&nbsp;&nbsp;với những t&iacute;nh năng ti&ecirc;n tiến đi c&ugrave;ng hiệu năng mạnh mẽ. Đặc biệt, smartphone&nbsp;lại c&ograve;n sở hữu mức gi&aacute; hấp dẫn trong ph&acirc;n kh&uacute;c tầm trung đầy hứa hẹn. Đ&aacute;nh bật l&ecirc;n n&eacute;t sang trọng trong thiết kế&nbsp;</h3>\r\n', 0, 0),
(226, 'Điện thoại Xiaomi POCO X3 Pro', 'Us_Xiaomi2', 6633000, NULL, 'public/uploads/products/products/poco_X3pro.jpg', 0, 10, 'publish', NULL, 'builong', 1654092639, NULL, 28, 50, 'Xiaomi POCO X3 Pro ra mắt nổi bật với thiết kế khá độc đáo với cụm camera, màn hình mượt mà như lụa, pin khủng, sạc cực nhanh và loa chất lượng phòng thu hứa hẹn sẽ mang lại trải nghiệm người dùng ấn tượng.\r\nThiết kế hiện đại, thời trang', '<h3>Xiaomi Poco x3 Pro&nbsp;ra mắt nổi bật với thiết kế kh&aacute; độc đ&aacute;o với cụm camera, m&agrave;n h&igrave;nh mượt m&agrave; như lụa, pin khủng, sạc cực nhanh v&agrave; loa chất lượng ph&ograve;ng thu hứa hẹn sẽ mang lại trải nghiệm người d&ugrave;ng ấn tượng.</h3>\r\n\r\n<h3>Thiết kế hiện đại, thời trang</h3>\r\n', 0, 5),
(227, 'Laptop Dell Gaming G15 5511', 'Us_Dell1', 29990000, NULL, 'public/uploads/products/products/dell-gaming-g15-5511-i7-p105f006agr-140222-091722-600x600.jpg', 0, 10, 'publish', NULL, 'hoangtien', 1655885988, NULL, 29, 53, 'Laptop Dell Gaming G15 5511 i7 11800H (P105F006AGR) là phiên bản laptop có diện mạo ấn tượng thu hút mọi ánh nhìn cùng cấu hình vượt trội sẵn sàng đồng hành cùng bạn trong mọi công việc cho đến giải trí', '<p><a href=\"https://www.thegioididong.com/laptop/dell-gaming-g15-5511-i7-p105f006agr\" target=\"_blank\" title=\"Laptop Dell Gaming G15 5511 i7 11800H (P105F006AGR) đang bán tại thegioididong.com\">Laptop Dell Gaming G15 5511 i7 11800H&nbsp;(P105F006AGR)</a>&nbsp;l&agrave; phi&ecirc;n bản&nbsp;<a href=\"https://www.thegioididong.com/laptop\" target=\"_blank\" title=\" Xem thêm laptop đang bán tại thegioididong.com\">laptop</a>&nbsp;c&oacute; diện mạo ấn tượng thu h&uacute;t mọi &aacute;nh nh&igrave;n c&ugrave;ng cấu h&igrave;nh vượt trội sẵn s&agrave;ng đồng h&agrave;nh c&ugrave;ng bạn trong mọi c&ocirc;ng việc cho đến giải tr&iacute;</p>\r\n', 0, 0),
(228, 'Laptop HP 340s G7 ', 'Us_HP1', 10790000, NULL, 'public/uploads/products/products/tải xuống.jpg', 0, 10, 'publish', NULL, 'hoangtien', 1655886201, NULL, 29, 48, 'Bạn là học sinh sinh viên, bạn đang tìm kiếm một chiếc laptop đủ mạnh để phục vụ việc học mà giá vẫn phải chăng? Tham khảo ngay laptop HP 340s G7 i3 (240Q4PA) với cấu hình ổn định, thiết kế mỏng nhẹ, là một lựa chọn lý tưởng trong tầm giá.\r\nThiết kế siêu mỏng nhẹ, dịch chuyển dễ dàng', '<p>Bạn l&agrave; học sinh sinh vi&ecirc;n, bạn đang t&igrave;m kiếm một chiếc laptop đủ mạnh để phục vụ việc học m&agrave; gi&aacute; vẫn phải chăng? Tham khảo ngay laptop HP 340s G7 i3 (240Q4PA) với cấu h&igrave;nh ổn định, thiết kế mỏng nhẹ, l&agrave; một lựa chọn l&yacute; tưởng trong tầm gi&aacute;.<br />\r\nThiết kế si&ecirc;u mỏng nhẹ, dịch chuyển dễ d&agrave;ng</p>\r\n', 0, 1),
(229, 'Laptop Lenovo Ideapad 1 11IGL05 N5030', 'Us_Lenovo1', 6290000, NULL, 'public/uploads/products/products/tải xuống (1).jpg', 0, 10, 'publish', NULL, 'hoangtien', 1655886858, NULL, 29, 52, 'Laptop Lenovo Ideapad 1 11IGL05 N5030 (81VT006FVN) là chiếc laptop mỏng nhẹ và một mức giá lý tưởng mà phụ huynh có thể mua cho học sinh, con em. Đáp ứng tốt các tác vụ học tập trên các phần mềm Office, học trực tuyến hay giải trí cơ bản.\r\nHiệu năng ổn định trong tầm giá', '<p>Laptop Lenovo Ideapad 1 11IGL05 N5030 (81VT006FVN) l&agrave; chiếc laptop mỏng nhẹ v&agrave; một mức gi&aacute; l&yacute; tưởng m&agrave; phụ huynh c&oacute; thể mua cho học sinh, con em. Đ&aacute;p ứng tốt c&aacute;c t&aacute;c vụ học tập tr&ecirc;n c&aacute;c phần mềm Office, học trực tuyến hay giải tr&iacute; cơ bản.<br />\r\nHiệu năng ổn định trong tầm gi&aacute;</p>\r\n', 0, 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_search_history`
--

CREATE TABLE `tbl_search_history` (
  `search_id` int(200) NOT NULL,
  `search_text` varchar(200) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `search_option` varchar(200) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `tbl_search` varchar(100) COLLATE utf8mb4_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `tbl_search_history`
--

INSERT INTO `tbl_search_history` (`search_id`, `search_text`, `search_option`, `tbl_search`) VALUES
(335, 'danh mục 2', 'post_cat_id', 'tbl_posts'),
(336, 'danh mục 4', 'post_cat_id', 'tbl_posts'),
(337, 'danh mục 32', 'post_cat_id', 'tbl_posts'),
(338, 'danh mục 39', 'post_cat_id', 'tbl_posts'),
(340, 'tiêu đề', 'post_title', 'tbl_posts'),
(341, 'nội dung bài viết 6', 'post_title', 'tbl_posts'),
(358, 'danh mục 1', 'post_cat_id', 'tbl_posts'),
(359, 'danh mục 35', 'post_cat_id', 'tbl_posts'),
(363, 'phạm đình hùng', 'post_title', 'tbl_posts'),
(375, 'danh mục 3', 'post_cat_id', 'tbl_posts'),
(376, 'danh mục', 'post_cat_id', 'tbl_posts'),
(377, 'danh mục 24', 'post_cat_id', 'tbl_posts'),
(378, 'danh mục 43', 'post_cat_id', 'tbl_posts'),
(379, 'Nội dung bài viết', 'post_title', 'tbl_posts'),
(380, 'Nội dung bài viết 1', 'post_title', 'tbl_posts'),
(381, 'Nội dung bài viết 2', 'post_title', 'tbl_posts'),
(382, 'Nội dung bài viết 3', 'post_title', 'tbl_posts'),
(383, 'Nội dung bài viết 4', 'post_title', 'tbl_posts'),
(384, 'Nội dung bài viết 5', 'post_title', 'tbl_posts'),
(385, 'Nội dung bài viết 7', 'post_title', 'tbl_posts'),
(386, 'Nội dung bài viết 8', 'post_title', 'tbl_posts'),
(387, 'Nội dung bài viết 9', 'post_title', 'tbl_posts'),
(388, 'Nội dung bài viết 100', 'post_title', 'tbl_posts'),
(389, 'Nội dung bài viết 10', 'post_title', 'tbl_posts'),
(452, 'Nội dung', 'post_title', 'tbl_posts'),
(459, 'samsung', 'name_trademark', 'tbl_trademark_product'),
(460, 'điện thoại', 'name_productCat', 'tbl_product_cat'),
(461, 'điện thoại', 'name_product_cat', 'tbl_product_cat'),
(463, 'dfdfdf', 'name_productCat', 'tbl_productcat'),
(465, '9', 'id_productCat', 'tbl_productcat'),
(466, 'phamdinhhung', 'creator', 'tbl_productcat'),
(467, 'phamdinhhung', 'name_productCat', 'tbl_productcat'),
(468, 'fddfdf', 'name_productCat', 'tbl_productcat'),
(469, 'dfdf', 'name_productCat', 'tbl_productcat'),
(472, 'diện thoại', 'name_productCat', 'tbl_productcat'),
(473, 'điện thoại', 'name_productCat', 'tbl_productcat'),
(484, 'slider1', 'name_slider', 'tbl_sliders'),
(485, '2', 'numerical_order', 'tbl_sliders'),
(486, '1', 'numerical_order', 'tbl_sliders'),
(487, '12', 'numerical_order', 'tbl_sliders'),
(488, 'pham dinh hung', 'name_slider', 'tbl_sliders'),
(500, '10', 'id_advt', 'tbl_advt'),
(501, '13', 'id_advt', 'tbl_advt'),
(502, 'NaN', 'id_advt', 'tbl_advt'),
(503, 'https://', 'link_url', 'tbl_advt'),
(504, 'https://www.y', 'link_url', 'tbl_advt'),
(505, 'http', 'link_url', 'tbl_advt'),
(506, 'https://www.you', 'link_url', 'tbl_advt'),
(507, 'https://w', 'link_url', 'tbl_advt'),
(509, '253', 'post_id', 'tbl_posts'),
(510, '256', 'post_id', 'tbl_posts'),
(511, 'Mời gọi kiều bào hiến kế, chung sức xây dựng phát triển TP. Hồ Chí Minh', 'post_title', 'tbl_posts'),
(512, 'Mời gọi kiều bào hiến kếchung sức xây dựng phát triển TP. Hồ Chí Minh', 'post_title', 'tbl_posts'),
(513, 'gọi kiều bào hiến kế', 'post_title', 'tbl_posts'),
(525, 'Phạm Đình Hùng', 'customer_id', 'tbl_order'),
(526, 'Pham', 'customer_id', 'tbl_order'),
(528, 'Trần', 'code_order', 'tbl_order'),
(529, 'Nguyễn', 'code_order', 'tbl_order'),
(530, 'thạhg', 'code_order', 'tbl_order'),
(532, '12', 'id_order', 'tbl_order'),
(535, 'phamdinhhung218@gmail.com', 'email_customer', 'tbl_customer'),
(536, 'pham dinh hung 2', 'name_customer', 'tbl_customer'),
(537, 'pham dinh huung', 'name_customer', 'tbl_customer'),
(539, 'http://unitop.vn/', 'link_url', 'tbl_advt');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_sliders`
--

CREATE TABLE `tbl_sliders` (
  `id_slider` int(250) NOT NULL,
  `name_slider` varchar(200) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `friendly_url` varchar(200) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `numerical_order` int(250) NOT NULL,
  `avatar` varchar(200) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `status` enum('publish','pending','trash') COLLATE utf8mb4_vietnamese_ci NOT NULL DEFAULT 'pending',
  `status_old` enum('publish','pending','trash') COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `creator` varchar(200) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `created_date` varchar(200) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `update_date` varchar(200) COLLATE utf8mb4_vietnamese_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `tbl_sliders`
--

INSERT INTO `tbl_sliders` (`id_slider`, `name_slider`, `friendly_url`, `numerical_order`, `avatar`, `status`, `status_old`, `creator`, `created_date`, `update_date`) VALUES
(37, 'quảng cáo điện thoại', 'quang-cao-dien-thoai', 1, 'public/uploads/sliders/mau-sac-tren-xiaomi-mi-10-lite-5g-xtmobile.png.jpg', 'publish', NULL, 'builong', '1654092759', NULL),
(38, 'quảng cáo điện thoại2', 'quang-cao-dien-thoai2', 2, 'public/uploads/sliders/OPPO-F17-1.jpg', 'publish', NULL, 'builong', '1654092783', NULL),
(41, 'quảng cáo điện thoại3', 'quang-cao-dien-thoai3', 3, 'public/uploads/sliders/tải xuống (2).jpg', 'publish', NULL, 'hoangtien', '1655893318', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_trademark_product`
--

CREATE TABLE `tbl_trademark_product` (
  `id_trademark` int(200) NOT NULL,
  `name_trademark` varchar(200) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `img_trademark` varchar(200) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `id_cat_product` int(200) NOT NULL,
  `creator` varchar(200) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `created_date` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `tbl_trademark_product`
--

INSERT INTO `tbl_trademark_product` (`id_trademark`, `name_trademark`, `img_trademark`, `id_cat_product`, `creator`, `created_date`) VALUES
(47, 'Samsung', 'public/uploads/products/trademarks/Samsung-Logo.png', 28, 'builong', 1654089329),
(48, 'HP', 'public/uploads/products/trademarks/HP_logo.png', 29, 'builong', 1654089412),
(49, 'Oppo', 'public/uploads/products/trademarks/oppo-logo.jpg', 28, 'builong', 1654089444),
(50, 'Xiaomi', 'public/uploads/products/trademarks/XiaoMi_logo.jpg', 28, 'builong', 1654089455),
(51, 'Vivo', 'public/uploads/products/trademarks/logo-vivo.jpg', 28, 'builong', 1654089614),
(52, 'Lenovo', 'public/uploads/products/trademarks/Lenovo_logo.png', 29, 'builong', 1654089702),
(53, 'Dell', 'public/uploads/products/trademarks/Dell_logo.png', 29, 'builong', 1654089789);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_users`
--

CREATE TABLE `tbl_users` (
  `user_id` int(200) NOT NULL,
  `fullname` varchar(100) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `username` varchar(100) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `password` varchar(100) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `gender` enum('male','female') COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `avatar` varchar(200) COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `created_date` int(11) NOT NULL,
  `phone_number` varchar(12) COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `address` varchar(500) COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `is_active` enum('0','1') COLLATE utf8mb4_vietnamese_ci NOT NULL DEFAULT '0',
  `active_token` varchar(200) COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `reset_pass_token` varchar(200) COLLATE utf8mb4_vietnamese_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `tbl_users`
--

INSERT INTO `tbl_users` (`user_id`, `fullname`, `username`, `password`, `email`, `gender`, `avatar`, `created_date`, `phone_number`, `address`, `is_active`, `active_token`, `reset_pass_token`) VALUES
(28, 'Hoàng Văn Tiến ', 'hoangtien', 'c567327d6471be38153172a9b306e50e', 'hoangtien080@gmail.com', 'male', NULL, 0, NULL, NULL, '1', '9a02604a6b255cdc237f1b8a4c98c74e', NULL),
(29, 'builong', 'builong', '50b8c65bf62c7695f0b5590656b8159d', 'bui433077@gmail.com', 'male', NULL, 0, '0866816802', 'sqwdw', '1', '9d351a8f4bdf6d4214185d1b4fed01f2', NULL);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `tbl_advt`
--
ALTER TABLE `tbl_advt`
  ADD PRIMARY KEY (`id_advt`);

--
-- Chỉ mục cho bảng `tbl_customer`
--
ALTER TABLE `tbl_customer`
  ADD PRIMARY KEY (`id_customer`);

--
-- Chỉ mục cho bảng `tbl_data_detail_product`
--
ALTER TABLE `tbl_data_detail_product`
  ADD PRIMARY KEY (`data_detail_id`);

--
-- Chỉ mục cho bảng `tbl_img_relative_product`
--
ALTER TABLE `tbl_img_relative_product`
  ADD PRIMARY KEY (`id_img_relative`);

--
-- Chỉ mục cho bảng `tbl_location`
--
ALTER TABLE `tbl_location`
  ADD PRIMARY KEY (`id_location`);

--
-- Chỉ mục cho bảng `tbl_order`
--
ALTER TABLE `tbl_order`
  ADD PRIMARY KEY (`id_order`);

--
-- Chỉ mục cho bảng `tbl_postcat`
--
ALTER TABLE `tbl_postcat`
  ADD PRIMARY KEY (`id_postCat`);

--
-- Chỉ mục cho bảng `tbl_posts`
--
ALTER TABLE `tbl_posts`
  ADD PRIMARY KEY (`post_id`);

--
-- Chỉ mục cho bảng `tbl_productcat`
--
ALTER TABLE `tbl_productcat`
  ADD PRIMARY KEY (`id_productCat`);

--
-- Chỉ mục cho bảng `tbl_products`
--
ALTER TABLE `tbl_products`
  ADD PRIMARY KEY (`id_product`);

--
-- Chỉ mục cho bảng `tbl_search_history`
--
ALTER TABLE `tbl_search_history`
  ADD PRIMARY KEY (`search_id`);

--
-- Chỉ mục cho bảng `tbl_sliders`
--
ALTER TABLE `tbl_sliders`
  ADD PRIMARY KEY (`id_slider`);

--
-- Chỉ mục cho bảng `tbl_trademark_product`
--
ALTER TABLE `tbl_trademark_product`
  ADD PRIMARY KEY (`id_trademark`);

--
-- Chỉ mục cho bảng `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `tbl_advt`
--
ALTER TABLE `tbl_advt`
  MODIFY `id_advt` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT cho bảng `tbl_customer`
--
ALTER TABLE `tbl_customer`
  MODIFY `id_customer` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;

--
-- AUTO_INCREMENT cho bảng `tbl_data_detail_product`
--
ALTER TABLE `tbl_data_detail_product`
  MODIFY `data_detail_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=441;

--
-- AUTO_INCREMENT cho bảng `tbl_img_relative_product`
--
ALTER TABLE `tbl_img_relative_product`
  MODIFY `id_img_relative` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1021;

--
-- AUTO_INCREMENT cho bảng `tbl_location`
--
ALTER TABLE `tbl_location`
  MODIFY `id_location` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=124;

--
-- AUTO_INCREMENT cho bảng `tbl_order`
--
ALTER TABLE `tbl_order`
  MODIFY `id_order` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;

--
-- AUTO_INCREMENT cho bảng `tbl_postcat`
--
ALTER TABLE `tbl_postcat`
  MODIFY `id_postCat` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=180;

--
-- AUTO_INCREMENT cho bảng `tbl_posts`
--
ALTER TABLE `tbl_posts`
  MODIFY `post_id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=268;

--
-- AUTO_INCREMENT cho bảng `tbl_productcat`
--
ALTER TABLE `tbl_productcat`
  MODIFY `id_productCat` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT cho bảng `tbl_products`
--
ALTER TABLE `tbl_products`
  MODIFY `id_product` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=231;

--
-- AUTO_INCREMENT cho bảng `tbl_search_history`
--
ALTER TABLE `tbl_search_history`
  MODIFY `search_id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=542;

--
-- AUTO_INCREMENT cho bảng `tbl_sliders`
--
ALTER TABLE `tbl_sliders`
  MODIFY `id_slider` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT cho bảng `tbl_trademark_product`
--
ALTER TABLE `tbl_trademark_product`
  MODIFY `id_trademark` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT cho bảng `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `user_id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
