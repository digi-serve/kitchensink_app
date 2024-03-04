INSERT INTO `AB_testkcsprocessstock` (`uuid`, `created_at`, `updated_at`, `testkcsprocessstockid`, `product`)
VALUES (UUID(), NOW(), NOW(), 1, "Coke"), (UUID(), NOW(), NOW(), 2, "Pepsi"), (UUID(), NOW(), NOW(), 3, "Est")
ON DUPLICATE KEY UPDATE
    product = VALUES(product);