-- --------------------------------------------------------
-- Host:                         10.45.0.87
-- Versión del servidor:         5.6.31-77.0 - Percona Server (GPL), Release 77.0, Revision 5c1061c
-- SO del servidor:              Linux
-- HeidiSQL Versión:             9.3.0.4984
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Volcando estructura de base de datos para FAQS
CREATE DATABASE IF NOT EXISTS `FAQS` /*!40100 DEFAULT CHARACTER SET latin1 COLLATE latin1_bin */;
USE `FAQS`;


-- Volcando estructura para tabla FAQS.accounts
CREATE TABLE IF NOT EXISTS `accounts` (
  `user` varchar(50) NOT NULL,
  `password` varchar(20) NOT NULL,
  PRIMARY KEY (`user`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla FAQS.accounts: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
INSERT INTO `accounts` (`user`, `password`) VALUES
	('chelo', '123456');
/*!40000 ALTER TABLE `accounts` ENABLE KEYS */;


-- Volcando estructura para tabla FAQS.archivos
CREATE TABLE IF NOT EXISTS `archivos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) COLLATE latin1_bin NOT NULL,
  `texto` longtext COLLATE latin1_bin NOT NULL,
  `visitas` int(10) NOT NULL DEFAULT '0',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1 COLLATE=latin1_bin;

-- Volcando datos para la tabla FAQS.archivos: ~10 rows (aproximadamente)
/*!40000 ALTER TABLE `archivos` DISABLE KEYS */;
INSERT INTO `archivos` (`id`, `nombre`, `texto`, `visitas`, `createdAt`, `updatedAt`) VALUES
	(13, 'Bienvenido', '<p>Esta es la ayuda de <strong>Hotel Directo</strong></p>\n', 0, '2017-04-20 13:47:54', '2017-04-20 13:47:54'),
	(15, 'Tercera', '<p>Esteban <strong>rodriguez</strong></p>\n', 0, '2017-04-20 13:51:03', '2017-04-20 13:51:03'),
	(16, 'Segunda', '<p>page</p>\n<iframe width="560" height="315" src="https://www.youtube.com/embed/qp9NKA7sUd4" frameborder="0" allowfullscreen></iframe>', 0, '2017-04-20 13:52:13', '2017-04-20 13:52:13'),
	(17, 'Como reservar hoteles', '<p>Algo</p>\n', 0, '2017-04-20 14:00:57', '2017-04-20 14:00:57'),
	(18, 'Cuarta', '<p>Estrellas</p>\n', 0, '2017-04-21 17:54:39', '2017-04-21 17:54:39'),
	(19, 'Introduccion', '<p><strong>Lorem Ipsum</strong>&nbsp;es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est&aacute;ndar de las industrias desde el a&ntilde;o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us&oacute; una galer&iacute;a de textos y los mezcl&oacute; de tal manera que logr&oacute; hacer un libro de textos especimen. No s&oacute;lo sobrevivi&oacute; 500 a&ntilde;os, sino que tambien ingres&oacute; como texto de relleno en documentos electr&oacute;nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci&oacute;n de las hojas &quot;Letraset&quot;, las cuales contenian pasajes de Lorem Ipsum, y m&aacute;s recientemente con software de autoedici&oacute;n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>\n', 0, '2017-09-25 17:57:50', '2017-09-25 17:57:50'),
	(20, 'Busqueda', '<p>HOTELES EN BUENOS AIRES</p>\n', 0, '2017-09-25 17:59:46', '2017-09-25 17:59:46'),
	(22, 'Autocomparar', '<p>Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayor&iacute;a sufri&oacute; alteraciones en alguna manera, ya sea porque se le agreg&oacute; humor, o palabras aleatorias que no parecen ni un poco cre&iacute;bles. Si vas a utilizar un pasaje de Lorem Ipsum, necesit&aacute;s estar seguro de que no hay nada avergonzante escondido en el medio del texto. Todos los generadores de Lorem Ipsum que se encuentran en Internet tienden a repetir trozos predefinidos cuando sea necesario, haciendo a este el &uacute;nico generador verdadero (v&aacute;lido) en la Internet. Usa un diccionario de mas de 200 palabras provenientes del lat&iacute;n, combinadas con estructuras muy &uacute;tiles de sentencias, para generar texto de Lorem Ipsum que parezca razonable. Este Lorem Ipsum generado siempre estar&aacute; libre de repeticiones, humor agregado o palabras no caracter&iacute;sticas del lenguaje, etc.</p>\n\n<p>&nbsp;</p>\n\n<p><img alt="" src="https://www.google.com.ar/imgres?imgurl=https%3A%2F%2Fi.vimeocdn.com%2Fportrait%2F2856776_300x300&amp;imgrefurl=https%3A%2F%2Fvimeo.com%2Fnemogroup&amp;docid=lyBLYYn_AO1UUM&amp;tbnid=jyf4jy0zJsN9WM%3A&amp;vet=10ahUKEwj2lJyP9sDWAhVIiZAKHWp2AQ0QMwgkKAAwAA..i&amp;w=300&amp;h=300&amp;safe=active&amp;bih=651&amp;biw=1366&amp;q=Nemogroup&amp;ved=0ahUKEwj2lJyP9sDWAhVIiZAKHWp2AQ0QMwgkKAAwAA&amp;iact=mrc&amp;uact=8" /></p>\n', 0, '2017-09-25 18:05:50', '2017-09-25 18:05:50'),
	(24, 'Buscar hoteles', '<p>Buenos Aires</p>\n\n<p><iframe width="560" height="315" src="https://www.youtube.com/embed/x6ul6Haqimk" frameborder="0" allowfullscreen></iframe></p>\n', 0, '2017-09-25 18:11:25', '2017-09-25 18:11:25'),
	(25, 'Carga de cupo', '<p>Texto</p>\n', 0, '2017-09-25 18:34:25', '2017-09-25 18:34:25');
/*!40000 ALTER TABLE `archivos` ENABLE KEYS */;


-- Volcando estructura para tabla FAQS.relates
CREATE TABLE IF NOT EXISTS `relates` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `relate` varchar(50) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla FAQS.relates: ~10 rows (aproximadamente)
/*!40000 ALTER TABLE `relates` DISABLE KEYS */;
INSERT INTO `relates` (`id`, `nombre`, `relate`, `createdAt`, `updatedAt`) VALUES
	(2, 'Tercera', 'Segunda', '2017-04-20 13:51:03', '2017-04-20 13:51:03'),
	(3, 'Tercera', 'Bienvenido', '2017-04-20 13:51:03', '2017-04-20 13:51:03'),
	(4, 'Segunda', 'Bienvenido', '2017-04-20 13:52:13', '2017-04-20 13:52:13'),
	(5, 'Como reservar hoteles', 'Segunda', '2017-04-20 14:00:57', '2017-04-20 14:00:57'),
	(6, 'Como reservar hoteles', 'Tercera', '2017-04-20 14:00:57', '2017-04-20 14:00:57'),
	(7, 'Cuarta', 'Bienvenido', '2017-04-21 17:54:39', '2017-04-21 17:54:39'),
	(8, 'Busqueda', 'Introduccion', '2017-09-25 17:59:46', '2017-09-25 17:59:46'),
	(12, 'Buscar hoteles', 'Navigator', '2017-09-25 18:11:25', '2017-09-25 18:11:25'),
	(13, 'Buscar hoteles', 'Autocomparar', '2017-09-25 18:11:25', '2017-09-25 18:11:25'),
	(14, 'Carga de cupo', 'Buscar Hotel', '2017-09-25 18:34:25', '2017-09-25 18:34:25');
/*!40000 ALTER TABLE `relates` ENABLE KEYS */;


-- Volcando estructura para tabla FAQS.tags 
CREATE TABLE IF NOT EXISTS `tags` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `tag` varchar(20) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla FAQS.tags: ~13 rows (aproximadamente)
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` (`id`, `nombre`, `tag`, `createdAt`, `updatedAt`) VALUES
	(12, 'Bienvenido', 'Bienvenido', '2017-04-20 13:47:54', '2017-04-20 13:47:54'),
	(14, 'Tercera', 'page3', '2017-04-20 13:51:03', '2017-04-20 13:51:03'),
	(15, 'Segunda', 'page2', '2017-04-20 13:52:13', '2017-04-20 13:52:13'),
	(16, 'Como reservar hoteles', 'reserva', '2017-04-20 14:00:57', '2017-04-20 14:00:57'),
	(17, 'Cuarta', 'Page', '2017-04-21 17:54:39', '2017-04-21 17:54:39'),
	(18, 'Introduccion', 'Price', '2017-09-25 17:57:50', '2017-09-25 17:57:50'),
	(19, 'Introduccion', 'Navigator', '2017-09-25 17:57:50', '2017-09-25 17:57:50'),
	(20, 'Busqueda', '', '2017-09-25 17:59:46', '2017-09-25 17:59:46'),
	(23, 'Autocomparar', 'Autocomparar', '2017-09-25 18:05:50', '2017-09-25 18:05:50'),
	(26, 'Buscar hoteles', 'Hoteles', '2017-09-25 18:11:25', '2017-09-25 18:11:25'),
	(27, 'Buscar hoteles', 'Busqueda', '2017-09-25 18:11:25', '2017-09-25 18:11:25'),
	(28, 'Carga de cupo', 'Disponibilidad', '2017-09-25 18:34:25', '2017-09-25 18:34:25'),
	(29, 'Carga de cupo', 'hotel', '2017-09-25 18:34:25', '2017-09-25 18:34:25');
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
