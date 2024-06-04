SET @NUMBER_OF_MinistryTeam = 100;
SET @NUMBER_OF_QXCenter = 20;
SET @NUMBER_OF_ResponsibilityCenter = 30;

-- 0.1 - Clear Tables
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE `AB_AccountingApp_Account`;
TRUNCATE TABLE `AB_AccountingApp_FiscalYear`;
TRUNCATE TABLE `AB_Profile_MinistryTeam`;
TRUNCATE TABLE `AB_Profile_Operations`;
TRUNCATE TABLE `AB_MyTeamFinance_ResponsibilityCenter`;
SET FOREIGN_KEY_CHECKS = 1;

-- 0.2 - Procedures
DROP PROCEDURE IF EXISTS `GENERATE_SERIES`;
DELIMITER $$
CREATE PROCEDURE `GENERATE_SERIES`(
    IN NUM INT
)
BEGIN
    DROP TEMPORARY TABLE IF EXISTS SERIES;
    CREATE TEMPORARY TABLE SERIES (Num INT);
    SET @i = 1;
    WHILE @i <= NUM DO
        INSERT INTO SERIES (Num) VALUES (@i);
        SET @i = @i + 1;
    END WHILE;
END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS `MAKE_1_TO_M_RELATION`;
DELIMITER $$
CREATE PROCEDURE `MAKE_1_TO_M_RELATION`(
    IN SourceTableName NVARCHAR(128),
    IN TargetTableName NVARCHAR(128),
    IN LinkColumnName NVARCHAR(128),
    IN TargetColumnName NVARCHAR(128)
)
BEGIN
    SET SourceTableName = CONCAT_WS('', '`', SourceTableName, '`');
    SET TargetTableName = CONCAT_WS('', '`', TargetTableName, '`');
    SET LinkColumnName = CONCAT_WS('', '`', LinkColumnName, '`');
    SET TargetColumnName = CONCAT_WS('', '`', TargetColumnName, '`');

    SET @sqlCheck = CONCAT_WS(' ',
                        'SELECT COUNT(*) < 1 FROM', SourceTableName,
                        'WHERE', LinkColumnName, 'IS NULL',
                        'INTO @isDone');
    PREPARE execCheck FROM @sqlCheck;
    EXECUTE execCheck;

    WHILE @isDone != TRUE DO
        -- FIND a record that no relation
        SET @sqlFind = CONCAT_WS(' ',
                        'SELECT `uuid` FROM', SourceTableName,
                        'WHERE', LinkColumnName, 'IS NULL',
                        'ORDER BY RAND()',
                        'LIMIT 1 INTO @sourceRowId');
        PREPARE execFind FROM @sqlFind;
        EXECUTE execFind;

        -- GET a target record by random
        SET @sqlTarget = CONCAT_WS(' ',
                        'SELECT', TargetColumnName, 'FROM', TargetTableName,
                        'ORDER BY RAND()',
                        'LIMIT 1 INTO @targetRowId');
        PREPARE execTarget FROM @sqlTarget;
        EXECUTE execTarget;

        -- MAKE the relation
        SET @sqlRelate = CONCAT_WS(' ', 'UPDATE', SourceTableName, 'SET', LinkColumnName, '=', QUOTE(@targetRowId), 'WHERE `uuid` =', QUOTE(@sourceRowId));
        PREPARE execRelate FROM @sqlRelate;
        EXECUTE execRelate;

        EXECUTE execCheck;
    END WHILE;

    DEALLOCATE PREPARE execCheck;
    DEALLOCATE PREPARE execFind;
    DEALLOCATE PREPARE execTarget;
    DEALLOCATE PREPARE execRelate;
END$$
DELIMITER ;

/* DROP PROCEDURE IF EXISTS `MAKE_M_TO_N_RELATION`;
DELIMITER $$
CREATE PROCEDURE `MAKE_M_TO_N_RELATION`(
    IN SourceTableName NVARCHAR(128),
    IN TargerTableName NVARCHAR(128),
    IN JoinTableName NVARCHAR(128)
)
BEGIN
END$$
DELIMITER ; */

-- 1 - Accounts
DROP TABLE IF EXISTS ACCOUNT_NUMBER;
CREATE TEMPORARY TABLE ACCOUNT_NUMBER (Num INT, Category VARCHAR(255));
INSERT INTO ACCOUNT_NUMBER (Num, Category)
VALUES
  -- ASSETS '1585806356532'
  (1000, "1585806356532"),
  (1221, "1585806356532"),
  (1222, "1585806356532"),
  (1231, "1585806356532"),
  (1232, "1585806356532"),
  (1241, "1585806356532"),
  (1251, "1585806356532"),
  (1291, "1585806356532"),
  (1491, "1585806356532"),
  (1591, "1585806356532"),
  (1611, "1585806356532"),
  (1721, "1585806356532"),
  (11101, "1585806356532"),
  (11102, "1585806356532"),
  (11103, "1585806356532"),
  (11121, "1585806356532"),
  -- LIABILITIES '1585806356570'
  (2111, "1585806356570"),
  (2211, "1585806356570"),
  (2221, "1585806356570"),
  (2231, "1585806356570"),
  (2241, "1585806356570"),
  (2291, "1585806356570"),
  -- EQUITY '1585806356643'
  (3500, "1585806356643"),
  (3991, "1585806356643"),
  -- INCOME '1590392412833'
  (4391, "1590392412833"),
  (4411, "1590392412833"),
  (4911, "1590392412833"),
  (4912, "1590392412833"),
  (4921, "1590392412833"),
  (4991, "1590392412833"),
  (5111, "1590392412833"),
  (5611, "1590392412833"),
  (5621, "1590392412833"),
  (9111, "1590392412833"),
  (9121, "1590392412833"),
  (9191, "1590392412833"),
  -- EXPENSE '1585806356789'
  (6111, "1590392412833"),
  (6611, "1590392412833"),
  (6621, "1590392412833"),
  (7111, "1590392412833"),
  (7131, "1590392412833"),
  (7211, "1590392412833"),
  (8111, "1590392412833"),
  (8121, "1590392412833"),
  (8491, "1590392412833"),
  (8611, "1590392412833"),
  (8711, "1590392412833"),
  (8721, "1590392412833"),
  (8911, "1590392412833"),
  (8921, "1590392412833"),
  (8941, "1590392412833"),
  (8991, "1590392412833"),
  (9511, "1590392412833"),
  (9591, "1590392412833");

INSERT INTO `AB_AccountingApp_Account` (
  `uuid`,
  `created_at`,
  `updated_at`,
  `Acct Num`,
  `Active`,
  `translations`,
  `Category`
)
SELECT
  UUID(),
  NOW(),
  NOW(),
  Num,
  "1",
  CAST(CONCAT("[{ \"language_code\": \"en\",\"Description\": \"Account ", Num, "\", \"Type\":\"\"}]") AS CHAR),
  Category
FROM ACCOUNT_NUMBER;

-- Fiscal Year
INSERT INTO `AB_AccountingApp_FiscalYear` (`uuid`, `created_at`, `updated_at`, `FYear`, `Start`, `End`, `Status`)
VALUES
  (UUID(), NOW(), NOW(), "FY2023", "2022-07-01", "2023-06-30", "1594114975138"), -- status: closed
  (UUID(), NOW(), NOW(), "FY2024", "2023-07-01", "2024-06-30", "1594114974934");  -- status: active

-- Minitry Teams
DROP TEMPORARY TABLE IF EXISTS TEAM_TYPE;
DROP TEMPORARY TABLE IF EXISTS MCC_TYPE;
CREATE TEMPORARY TABLE TEAM_TYPE (`Type` VARCHAR(255));
CREATE TEMPORARY TABLE MCC_TYPE (`MCC` VARCHAR(255));
INSERT INTO TEAM_TYPE(`Type`) VALUES ("GCM"),("Other"),("National"),("Operations"),("City"),("Field");
INSERT INTO MCC_TYPE(`MCC`) VALUES ("1612509311164"), ("1612509311257"), ("1612509311344"), ("1612509311592"), ("1612509311638");
CALL `GENERATE_SERIES`(@NUMBER_OF_MinistryTeam);
INSERT INTO `AB_Profile_MinistryTeam` (`uuid`, `created_at`, `updated_at`, `Name`, `Type`, `MCC`)
SELECT
    UUID() AS `uuid`,
    NOW() AS `created_at`,
    NOW() AS `updated_at`,
    CONCAT('Team ', Num) AS Name,
    (SELECT `Type` FROM TEAM_TYPE ORDER BY RAND() LIMIT 1) AS `Type`,
    (SELECT `MCC` FROM MCC_TYPE ORDER BY RAND() LIMIT 1) AS `MCC`
FROM
    SERIES;

-- QX Center
CALL `GENERATE_SERIES`(@NUMBER_OF_QXCenter);
INSERT INTO `AB_Profile_Operations` (`uuid`, `created_at`, `updated_at`, `QX Code`, `Ops Title`)
SELECT
    UUID() AS `uuid`,
    NOW() AS `created_at`,
    NOW() AS `updated_at`,
    CONCAT('QX Code ', Num) AS `QX Code`,
    CONCAT('Ops ', Num) AS `Ops Title`
FROM
    SERIES;

-- Ministry Team => QX Center
CALL `MAKE_1_TO_M_RELATION`("AB_Profile_MinistryTeam", "AB_Profile_Operations", "QX Center", "QX Code");

-- Responsibility Center
DROP TEMPORARY TABLE IF EXISTS RC_TYPE;
DROP TEMPORARY TABLE IF EXISTS RC_CPR;
CREATE TEMPORARY TABLE RC_TYPE(`Type` VARCHAR(255));
CREATE TEMPORARY TABLE RC_CPR(`CPR` VARCHAR(255));
INSERT INTO RC_TYPE(`Type`) VALUES ("1586864550294"), ("1586864550332"), ("Advance"), ("Control");
INSERT INTO RC_CPR(`CPR`) VALUES ("1587546198443"), ("1587546198555"), ("1587546198628");
CALL `GENERATE_SERIES`(@NUMBER_OF_ResponsibilityCenter);
INSERT INTO `AB_MyTeamFinance_ResponsibilityCenter`
(`uuid`, `created_at`, `updated_at`, `Active`, `RC Name`, `Description`, `Type`, `CPR Designation`, `Subaccount Code`)
-- TODO: Number
-- `availablefunds`, `Pending JE`, `Pending SW2`, `GL Balance`
SELECT
    UUID() AS `uuid`,
    NOW() AS `created_at`,
    NOW() AS `updated_at`,
    1 AS `Active`,
    CONCAT('RC ', Num) AS `RC Name`,
    CONCAT('Description ', Num) AS `Description`,
    (SELECT `Type` FROM RC_TYPE ORDER BY RAND() LIMIT 1) AS `Type`,
    (SELECT `CPR` FROM RC_CPR ORDER BY RAND() LIMIT 1) AS `CPR Designation`,
    CONCAT('Subaccount ', Num) AS `Subaccount Code`
FROM
    SERIES;

-- TODO: RC Connections
  /*`Owner`,
  `MCCcode`,
  `Responsibility Center406`,
  `QX Code` */
