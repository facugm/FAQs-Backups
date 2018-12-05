/*
SQLyog Ultimate v12.4.1 (64 bit)
MySQL - 5.6.31-77.0 : Database - FAQS_DEV
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`FAQS_DEV` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `FAQS_DEV`;

/*Table structure for table `FAQ_FILE` */

DROP TABLE IF EXISTS `FAQ_FILE`;

CREATE TABLE `FAQ_FILE` (
  `FAQ_FILE_ID` int(10) unsigned NOT NULL,
  `ARTICLE_NAME` varchar(50) NOT NULL,
  `ARTICLE_TEXT` longtext NOT NULL,
  `VISITS` int(10) NOT NULL,
  `CREATED_AT` datetime DEFAULT NULL,
  `UPDATED_AT` datetime DEFAULT NULL,
  PRIMARY KEY (`FAQ_FILE_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `FAQ_FILE` */

insert  into `FAQ_FILE`(`FAQ_FILE_ID`,`ARTICLE_NAME`,`ARTICLE_TEXT`,`VISITS`,`CREATED_AT`,`UPDATED_AT`) values 
(13,'Bienvenido','<p>Esta es la ayuda de <strong>Hotel Directo</strong></p>\n',0,'2017-04-20 13:47:54','2017-04-20 13:47:54'),
(15,'Tercera','<p>Esteban <strong>rodriguez</strong></p>\n',0,'2017-04-20 13:51:03','2017-04-20 13:51:03'),
(16,'Segunda','<p>page</p>\n<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/qp9NKA7sUd4\" frameborder=\"0\" allowfullscreen></iframe>',0,'2017-04-20 13:52:13','2017-04-20 13:52:13'),
(17,'Como reservar hoteles','<p>Algo</p>\n',0,'2017-04-20 14:00:57','2017-04-20 14:00:57'),
(18,'Cuarta','<p>Estrellas</p>\n',0,'2017-04-21 17:54:39','2017-04-21 17:54:39'),
(19,'Introduccion','<p><strong>Lorem Ipsum</strong>&nbsp;es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est&aacute;ndar de las industrias desde el a&ntilde;o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us&oacute; una galer&iacute;a de textos y los mezcl&oacute; de tal manera que logr&oacute; hacer un libro de textos especimen. No s&oacute;lo sobrevivi&oacute; 500 a&ntilde;os, sino que tambien ingres&oacute; como texto de relleno en documentos electr&oacute;nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci&oacute;n de las hojas &quot;Letraset&quot;, las cuales contenian pasajes de Lorem Ipsum, y m&aacute;s recientemente con software de autoedici&oacute;n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>\n',0,'2017-09-25 17:57:50','2017-09-25 17:57:50'),
(20,'Busqueda','<p>HOTELES EN BUENOS AIRES</p>\n',0,'2017-09-25 17:59:46','2017-09-25 17:59:46'),
(22,'Autocomparar','<p>Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayor&iacute;a sufri&oacute; alteraciones en alguna manera, ya sea porque se le agreg&oacute; humor, o palabras aleatorias que no parecen ni un poco cre&iacute;bles. Si vas a utilizar un pasaje de Lorem Ipsum, necesit&aacute;s estar seguro de que no hay nada avergonzante escondido en el medio del texto. Todos los generadores de Lorem Ipsum que se encuentran en Internet tienden a repetir trozos predefinidos cuando sea necesario, haciendo a este el &uacute;nico generador verdadero (v&aacute;lido) en la Internet. Usa un diccionario de mas de 200 palabras provenientes del lat&iacute;n, combinadas con estructuras muy &uacute;tiles de sentencias, para generar texto de Lorem Ipsum que parezca razonable. Este Lorem Ipsum generado siempre estar&aacute; libre de repeticiones, humor agregado o palabras no caracter&iacute;sticas del lenguaje, etc.</p>\n\n<p>&nbsp;</p>\n\n<p><img alt=\"\" src=\"https://www.google.com.ar/imgres?imgurl=https%3A%2F%2Fi.vimeocdn.com%2Fportrait%2F2856776_300x300&amp;imgrefurl=https%3A%2F%2Fvimeo.com%2Fnemogroup&amp;docid=lyBLYYn_AO1UUM&amp;tbnid=jyf4jy0zJsN9WM%3A&amp;vet=10ahUKEwj2lJyP9sDWAhVIiZAKHWp2AQ0QMwgkKAAwAA..i&amp;w=300&amp;h=300&amp;safe=active&amp;bih=651&amp;biw=1366&amp;q=Nemogroup&amp;ved=0ahUKEwj2lJyP9sDWAhVIiZAKHWp2AQ0QMwgkKAAwAA&amp;iact=mrc&amp;uact=8\" /></p>\n',0,'2017-09-25 18:05:50','2017-09-25 18:05:50'),
(24,'Buscar hoteles','<p>Buenos Aires</p>\n\n<p><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/x6ul6Haqimk\" frameborder=\"0\" allowfullscreen></iframe></p>\n',0,'2017-09-25 18:11:25','2017-09-25 18:11:25'),
(25,'Carga de cupo','<p>Texto</p>\n',0,'2017-09-25 18:34:25','2017-09-25 18:34:25');

/*Table structure for table `FAQ_FILE_FILE` */

DROP TABLE IF EXISTS `FAQ_FILE_FILE`;

CREATE TABLE `FAQ_FILE_FILE` (
  `L_FAQ_FILE_ID` int(10) unsigned NOT NULL,
  `R_FAQ_FILE_ID` int(10) unsigned NOT NULL,
  PRIMARY KEY (`L_FAQ_FILE_ID`,`R_FAQ_FILE_ID`),
  KEY `FK_R` (`R_FAQ_FILE_ID`),
  KEY `FK_L` (`L_FAQ_FILE_ID`),
  CONSTRAINT `FK_L` FOREIGN KEY (`L_FAQ_FILE_ID`) REFERENCES `FAQ_FILE` (`FAQ_FILE_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_R` FOREIGN KEY (`R_FAQ_FILE_ID`) REFERENCES `FAQ_FILE` (`FAQ_FILE_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `FAQ_FILE_FILE` */

insert  into `FAQ_FILE_FILE`(`L_FAQ_FILE_ID`,`R_FAQ_FILE_ID`) values 
(20,13),
(25,13),
(13,19),
(13,20),
(13,24),
(17,24);

/*Table structure for table `FAQ_FILE_TAG` */

DROP TABLE IF EXISTS `FAQ_FILE_TAG`;

CREATE TABLE `FAQ_FILE_TAG` (
  `FAQ_F_ID` int(10) unsigned NOT NULL,
  `FAQ_T_ID` int(10) unsigned NOT NULL,
  PRIMARY KEY (`FAQ_F_ID`,`FAQ_T_ID`),
  KEY `FK_TAG` (`FAQ_T_ID`),
  KEY `FK_FILE` (`FAQ_F_ID`),
  CONSTRAINT `FK_FAQ` FOREIGN KEY (`FAQ_F_ID`) REFERENCES `FAQ_FILE` (`FAQ_FILE_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_TAG` FOREIGN KEY (`FAQ_T_ID`) REFERENCES `FAQ_TAG` (`FAQ_TAG_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `FAQ_FILE_TAG` */

insert  into `FAQ_FILE_TAG`(`FAQ_F_ID`,`FAQ_T_ID`) values 
(13,12),
(15,14),
(16,15),
(17,16),
(18,17),
(13,19),
(19,19),
(20,20),
(22,23),
(24,27),
(25,29);

/*Table structure for table `FAQ_TAG` */

DROP TABLE IF EXISTS `FAQ_TAG`;

CREATE TABLE `FAQ_TAG` (
  `FAQ_TAG_ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `TAG_NAME` varchar(50) NOT NULL,
  PRIMARY KEY (`FAQ_TAG_ID`),
  UNIQUE KEY `UQ_NAME` (`TAG_NAME`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

/*Data for the table `FAQ_TAG` */

insert  into `FAQ_TAG`(`FAQ_TAG_ID`,`TAG_NAME`) values 
(23,'Autocomparar'),
(12,'Bienvenido'),
(27,'Buscar hoteles'),
(20,'Busqueda'),
(29,'Carga de cupo'),
(16,'Como reservar hoteles'),
(17,'Cuarta'),
(30,'General'),
(19,'Introduccion'),
(15,'Segunda'),
(14,'Tercera');

/*Table structure for table `FILE_TAG_RELATION` */

DROP TABLE IF EXISTS `FILE_TAG_RELATION`;

CREATE TABLE `FILE_TAG_RELATION` (
  `FILE_TAG_RELATION_ID` int(10) unsigned NOT NULL,
  `NAME_RELATION` varchar(50) NOT NULL,
  `RELATION` varchar(50) DEFAULT NULL,
  `CREATED_AT` datetime DEFAULT NULL,
  `UPDATED_AT` datetime DEFAULT NULL,
  PRIMARY KEY (`FILE_TAG_RELATION_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `FILE_TAG_RELATION` */

insert  into `FILE_TAG_RELATION`(`FILE_TAG_RELATION_ID`,`NAME_RELATION`,`RELATION`,`CREATED_AT`,`UPDATED_AT`) values 
(2,'Tercera','Segunda','2017-04-20 13:51:03','2017-04-20 13:51:03'),
(3,'Tercera','Bienvenido','2017-04-20 13:51:03','2017-04-20 13:51:03'),
(4,'Segunda','Bienvenido','2017-04-20 13:52:13','2017-04-20 13:52:13'),
(5,'Como reservar hoteles','Segunda','2017-04-20 14:00:57','2017-04-20 14:00:57'),
(6,'Como reservar hoteles','Tercera','2017-04-20 14:00:57','2017-04-20 14:00:57'),
(7,'Cuarta','Bienvenido','2017-04-21 17:54:39','2017-04-21 17:54:39'),
(8,'Busqueda','Introduccion','2017-09-25 17:59:46','2017-09-25 17:59:46'),
(12,'Buscar hoteles','Navigator','2017-09-25 18:11:25','2017-09-25 18:11:25'),
(13,'Buscar hoteles','Autocomparar','2017-09-25 18:11:25','2017-09-25 18:11:25'),
(14,'Carga de cupo','Buscar Hotel','2017-09-25 18:34:25','2017-09-25 18:34:25');

/*Table structure for table `USER_ACCOUNT` */

DROP TABLE IF EXISTS `USER_ACCOUNT`;

CREATE TABLE `USER_ACCOUNT` (
  `USER_ID` varchar(50) NOT NULL,
  `USER_PASSWORD` varchar(20) NOT NULL,
  PRIMARY KEY (`USER_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `USER_ACCOUNT` */

insert  into `USER_ACCOUNT`(`USER_ID`,`USER_PASSWORD`) values 
('chelo','123456');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
