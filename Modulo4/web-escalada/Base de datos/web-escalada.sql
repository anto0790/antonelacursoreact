-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 12-05-2022 a las 10:55:41
-- Versión del servidor: 8.0.28-0ubuntu0.20.04.3
-- Versión de PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `web-escalada`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

CREATE TABLE `novedades` (
  `id` int NOT NULL,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(1, 'Jorge Díaz-Rullo propone 9a+ para ‘Carlota la colombiana’ en Margalef', 'El escalador madrileño da un paso adelante más hacia su proyecto ‘Café Colombia’ con esta combinación que comienza en ‘Carlota’ 8c y termina escalando la sección que evitó cuando hizo ‘Café solo’ 9b el año pasado.', 'Su colección de 9a+\r\n\r\nMás allá de que sea un paso clave hacia Café Colombia, lo cierto es que Carlota la colombiana es una joya más en la nutrida colección de vías de 9a+ o más encadenadas por Jorge Díaz-Rullo. De entre las 24 vías que conforman dicha colección destacan hasta nueve primeras ascensiones, ya sea en Patones (Panorama), Cuenca (Circo ibérico y Seta ibérica), Rodellar (Fin de Alí Hulk extension sit start, Las Meninas y Patanics) y Margalef (Café solo y Carlota la colombiana).\r\n\r\nLa escuela tarraconense ha sido el escenario de sus últimos encadenamientos más duros, entre los que figuran, además de Café solo 9b, la referencia de Chris Sharma en el Laboratori First round first minute 9b y la recotada Mejorando imagen 9a+/b para él.', NULL),
(2, 'Carlos Soria desde el campo base Dhaulagiri: «La montaña está en muy buenas condiciones nosotros también».', 'Carlos Soria ya está en el campo base del Dhaulagiri desde el que nos transmite sus sensaciones (que son muy buenas). Si la previsión del tiempo se mantiene, mañana o pasado partirá con su compañero Sito Carcavilla en una ascensión en la que, sobre la marcha, decidirán si es de aclimatación y regresan al campo base o intentan la cima.', '  En el trekking previo han aclimatado hasta una altura de 5.800 metros. Desde el campo base nos cuenta que el Dhaulagiri está en las mejores condiciones que lo ha encontrado nunca. «La montaña está en muy buenas condiciones, nosotros también. Vamos a ver si esta es la definitiva. Saldremos hacia arriba el día 15 ó 16 con la intención de ir a la cumbre ó volvernos a bajar, depende de cómo lo veamos. Hay alguna posibilidad de que vayamos directamente a la cumbre».\r\nCarlos Soria y Sito Carcavilla son los únicos alpinistas que se encuentran en este momento en el campo base del Dhaulagiri que ha sido el primer ochomil ascendido esta temporada por el grupo liderado por el sherpa Mingma G.  ', NULL),
(7, 'Especial películas de escalada pedricera en el Festival La Pedriza', 'Tras el éxito de la noche del sábado dedicado al Yelmo, la agenda del Festival La Pedriza sigue cargada de propuestas, como la jornada cinematográfica del próximo miércoles 11 de mayo, con tres documentales sobre la escalada en la zona.', 'El sábado 7 de mayo unos 600 asistentes disfrutaron del evento programado con el rey de la zona, el Yelmo, como protagonista. El invitado principal fue el escalador pionero Jesús Gálvez, toda una referencia no solo en la granítica Pedriza, sino una figura reconocida por su enorme aportación de vías emblemáticas en las paredes españolas, abiertas en su mayoría en los ochenta y aún hoy respetadas. Gálvez habló sobre sus inicios en La Pedriza y el estilo de vida asociado a la escalada, compartiendo valiosos recuerdos.       ', 'n8m0kopyqpplexfi8eky');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sectores`
--

CREATE TABLE `sectores` (
  `id` int NOT NULL,
  `titulo` varchar(250) NOT NULL,
  `cuerpo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `sectores`
--

INSERT INTO `sectores` (`id`, `titulo`, `cuerpo`) VALUES
(1, 'Frey', 'Las agujas del Frey, un excelente lugar, con agujas y tapias de granito naranja. Ideal para hacer vías de varios largos, con placas y fisuras. Aquí es mas terreno de aventura y escalada con seguros móviles que escalada deportiva, aunque siempre algo hay, y también se encuentran muy buenos bloques para hacer boulder.'),
(2, 'Piedras Blancas', 'Piedras Blancas, en el Cerro Otto, una zona muy buena para principiantes, con vías que no pasan de 6c+. Abundan las placas verticales o tumbadas de adherencia. Hay mas de cien vías, pero no todas están bien equipadas, pero si a todas se llega fácilmente a armar el tope-rope por arriba.\r\n\r\nTambién se puede practicar colocación de empotradores, armado de reuniones y escalada de hasta dos largos.'),
(5, 'La Laguna El Trébol', 'Siguiendo con nuestro viaje imaginario, nos vamos a la Laguna El Trébol, a 20 km. del centro de la ciudad, en dirección a la cordillera.\r\n\r\nEn esta zona, encontramos tres sectores, cada uno con características distintas. Primero están las Torrecitas, que son unas paredes de conglomerado muy particular con orientación al norte (sol a la tarde), que cuentan con catorce vías desde 5° hasta 8a/8a+.'),
(7, 'Villa Llanquin', 'Saliendo de Bariloche en dirección a Neuquen, a 35 km., esta Villa Llanquin. Al fondo del pueblo, se ven unos bloques de roca rojiza. Esta zona es la ultima que se desarrollo este otoño, y ya cuenta con 16 vías desde 4° hasta el 8ª/a+. Predomina la escalada atlética, con buen desplome, agujeros y chorreras.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int NOT NULL,
  `usuario` varchar(60) NOT NULL,
  `password` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'anto', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `novedades`
--
ALTER TABLE `novedades`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sectores`
--
ALTER TABLE `sectores`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `novedades`
--
ALTER TABLE `novedades`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `sectores`
--
ALTER TABLE `sectores`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
