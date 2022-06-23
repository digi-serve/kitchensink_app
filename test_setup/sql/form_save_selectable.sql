LOCK TABLES `AB_testkcsprocessstatus` WRITE;
INSERT INTO `AB_testkcsprocessstatus` (uuid,created_at,updated_at,properties,datetime,amount,status,Processes,testkcsprocessstock) VALUES
	 ('0c1f25c8-5a82-4ddf-9a81-5263a1079d19','2022-06-14 09:25:05.000','2022-06-14 09:25:05.000',NULL,'2022-06-14 09:25:05.000',-5,NULL,NULL,NULL),
	 ('98e93e11-06c1-4503-baee-13d4add54e81','2022-06-14 09:25:05.000','2022-06-14 09:25:05.000',NULL,'2022-06-14 09:25:05.000',1,NULL,NULL,NULL);

UNLOCK TABLES;
LOCK TABLES `AB_testkcsprocessorder` WRITE;
INSERT INTO `AB_testkcsprocessorder` (uuid,created_at,updated_at,properties,amount,Orders,testkcsprocessstock) VALUES
	 ('07e59814-73fa-44a1-a67c-5d8f354c7d16','2022-06-14 09:25:15.000','2022-06-14 09:25:15.000',NULL,5.000,NULL,NULL),
	 ('278ed5d6-94b3-4995-93e9-e5409757a4ef','2022-06-14 09:25:15.000','2022-06-14 09:25:15.000',NULL,1.000,NULL,NULL);
