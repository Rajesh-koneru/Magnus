-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: magnus_application
-- ------------------------------------------------------
-- Server version	9.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('19o1iu33pm3jtncv7f29ufzy4c9mxaqt','eyJ1c2VybmFtZSI6InJhanUiLCJpc19sb2dnZWRfaW4iOnRydWUsIl9zZXNzaW9uX2V4cGlyeSI6MTAwfQ:1uQKpy:lgWCYXLkr4iiXCh30aT1mk5--4WkvGAVk-j5TttxK28','2025-06-14 06:59:38.715503'),('1skgp09kf3n7uvtk8a09leq8kfozqa4w','eyJ1c2VybmFtZSI6InJhanUiLCJpc19sb2dnZWRfaW4iOnRydWUsIl9zZXNzaW9uX2V4cGlyeSI6MTAwfQ:1uQLA1:XZdrWnIDk0TGL2ohm4bHDJfBR1NR0MZU6LdYUR9IdYk','2025-06-14 07:20:21.022711'),('fawt9du1yn3zhmqx4gs46d7r0260gxgg','eyJ1c2VybmFtZSI6InJhanUiLCJpc19sb2dnZWRfaW4iOnRydWUsIl9zZXNzaW9uX2V4cGlyeSI6MTAwfQ:1uQKkP:MB2zLv69BCXf09gBtJ-zWMFXYuruRGGZd7_omqMO3aI','2025-06-14 06:53:53.852571'),('gzpsht9mp3z8vdu89c3osdo8fwy7vnbw','eyJ1c2VybmFtZSI6InJhanUiLCJpc19sb2dnZWRfaW4iOnRydWUsIl9zZXNzaW9uX2V4cGlyeSI6MTAwfQ:1uQKuY:fMfjgdm8HfLHldSlueVAad_k0VyA4W39Q840sSxKAmA','2025-06-14 07:04:22.754310'),('mfpuf9mqtm5xpc6imccrjh1ew6ja9ewn','eyJ1c2VybmFtZSI6InJhanUiLCJpc19sb2dnZWRfaW4iOnRydWUsIl9zZXNzaW9uX2V4cGlyeSI6MTAwfQ:1uQKnw:VDYUI4t3n9U67ccYH66NexVz9T_4ZWJM6AuRdGSyKJk','2025-06-14 06:57:32.590133'),('sebn0czqiuyoh1r8kxhgyech7yqh81og','.eJyrViotTi2Kz0xRslIqSswqVdIBC-Ql5qYiRDKL43Py09NTU-Iz85SsSopKU3WU4otTi4sz8_PiUysKMosqlawMDQxqAS0tG0M:1uQ58Q:odh_PgNSTADeaKxoPWwbW0fG-59zl1bBzy8ct96g_WA','2025-06-13 14:13:38.582857'),('x3e67i3gq0wuufi95tmxufg721p43z3e','eyJ1c2VybmFtZSI6InJhanUiLCJpc19sb2dnZWRfaW4iOnRydWUsIl9zZXNzaW9uX2V4cGlyeSI6MTAwfQ:1uQKro:DjrvjL959o9Vkirv7rf83Dk67fKP4ssIqZJ1II1co0o','2025-06-14 07:01:32.765096');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-14 16:11:35
