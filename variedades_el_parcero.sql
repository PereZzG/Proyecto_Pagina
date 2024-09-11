-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-09-2024 a las 17:34:24
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `variedades_el_parcero`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre_producto` varchar(255) NOT NULL,
  `cantidad_producto` int(11) NOT NULL,
  `precio_producto` decimal(10,2) NOT NULL,
  `imagen_producto` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre_producto`, `cantidad_producto`, `precio_producto`, `imagen_producto`) VALUES
(1, 'Lapicero Big Azul', 15, 1000.00, 'uploads/lapicero-bic-cristal-azul-1.jpg'),
(2, 'Cartulina Octavo Pastel', 36, 800.00, 'uploads/1273.jpg'),
(5, 'Borrador de Nata', 15, 1000.00, 'uploads/9614364.jpg'),
(6, 'Sacapuntas Metalico', 22, 500.00, 'uploads/D_NQ_NP_844100-MCO44840488856_022021-O.webp'),
(7, 'Lapiz H2', 18, 1200.00, 'uploads/lapiz-2h-faber-castell.jpg'),
(8, 'Pegamento SiPeGa 125gr', 20, 2500.00, 'uploads/colbon-sipega.jpg'),
(9, 'Pegaloca', 15, 1500.00, 'uploads/pegante-instantaneo-pegaloca.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `email`, `name`, `password`) VALUES
(1, 'geremypg7@gmail.com', 'Alejandro Parra', '$2y$10$k.Jyh/TU20cNObwa9Hkjdu5b3xGbwpxFiY.2aPa.m5RoLJHkNqgUO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `id_venta` int(11) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp(),
  `nombre_producto` varchar(255) NOT NULL,
  `cantidad_vendida` int(11) NOT NULL,
  `total_venta` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ventas`
--

INSERT INTO `ventas` (`id_venta`, `fecha`, `nombre_producto`, `cantidad_vendida`, `total_venta`) VALUES
(1, '2024-08-31 19:56:53', 'Cartulina Octavo Pastel', 2, 1600.00),
(2, '2024-09-05 03:24:54', 'Borrador de Nata', 10, 10000.00),
(3, '2024-09-05 04:32:51', 'Lapicero Big Azul', 5, 5000.00),
(4, '2024-09-05 04:32:56', 'Block Cuadriculado Tamaño Carta', 2, 10000.00),
(5, '2024-09-05 04:59:21', 'Cartulina Octavo Pastel', 2, 1600.00);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`id_venta`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
  MODIFY `id_venta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
