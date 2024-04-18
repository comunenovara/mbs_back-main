-- CreateTable
CREATE TABLE `asset` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NULL,
    `mq` DOUBLE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `relif` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `assetId` INTEGER NOT NULL,
    `description` VARCHAR(191) NULL,
    `startDate` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `operationType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `operation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `typeId` INTEGER NOT NULL,
    `assetId` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `value` DECIMAL(65, 30) NULL,
    `startDate` DATETIME(3) NULL,
    `endDate` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dossierType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `elaborateGroup` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dossier` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `typeId` INTEGER NOT NULL,
    `elaborateGroupId` INTEGER NULL,
    `assetId` INTEGER NULL,
    `relifId` INTEGER NULL,
    `operationId` INTEGER NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `procurementType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `governativeProject` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `code` VARCHAR(191) NULL,
    `description` VARCHAR(191) NOT NULL,
    `amount` DOUBLE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `governativeProcurementLot` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `procurementTypeId` INTEGER NOT NULL,
    `code` VARCHAR(191) NULL,
    `description` VARCHAR(191) NOT NULL,
    `amount` DOUBLE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `governativeProjectProcurementLot` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `projectId` INTEGER NOT NULL,
    `procurementLotId` INTEGER NOT NULL,
    `amount` DOUBLE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `incentiveBeneficiary` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `active` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `incentiveRegulation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `incentiveWithheld` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `procurementTypeId` INTEGER NOT NULL,
    `regulationId` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `active` BOOLEAN NOT NULL,
    `amount` DOUBLE NULL,
    `percentage` DOUBLE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `incentiveCalculationMethod` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `procurementTypeId` INTEGER NOT NULL,
    `regulationId` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `incentiveCalculationFactor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `incentiveCalculationMethodId` INTEGER NULL,
    `minval` DOUBLE NULL,
    `maxval` DOUBLE NULL,
    `defaultval` DOUBLE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `incentiveStage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `procurementTypeId` INTEGER NOT NULL,
    `regulationId` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `incentiveRole` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `procurementTypeId` INTEGER NOT NULL,
    `regulationId` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `incentiveRegulationValue` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `stageId` INTEGER NOT NULL,
    `roleId` INTEGER NOT NULL,
    `minval` DOUBLE NULL,
    `maxval` DOUBLE NULL,
    `defaultval` DOUBLE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `incentiveCalculation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `governativeProcurementLotId` INTEGER NOT NULL,
    `regulationId` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `confirmed` BOOLEAN NOT NULL,
    `preAmount` DOUBLE NULL,
    `amount` DOUBLE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `incentiveRoleAssignation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `beneficiaryId` INTEGER NOT NULL,
    `calculationId` INTEGER NOT NULL,
    `roleId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `incentiveCalculationValue` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `calculationId` INTEGER NOT NULL,
    `regulationValueId` INTEGER NOT NULL,
    `value` DOUBLE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `incentiveAssignation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `assignationId` INTEGER NOT NULL,
    `calculationValueId` INTEGER NOT NULL,
    `value` DOUBLE NULL,
    `preAmount` DOUBLE NULL,
    `amount` DOUBLE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `relif` ADD CONSTRAINT `relif_assetId_fkey` FOREIGN KEY (`assetId`) REFERENCES `asset`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `operation` ADD CONSTRAINT `operation_typeId_fkey` FOREIGN KEY (`typeId`) REFERENCES `operationType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `operation` ADD CONSTRAINT `operation_assetId_fkey` FOREIGN KEY (`assetId`) REFERENCES `asset`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dossier` ADD CONSTRAINT `dossier_typeId_fkey` FOREIGN KEY (`typeId`) REFERENCES `dossierType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dossier` ADD CONSTRAINT `dossier_elaborateGroupId_fkey` FOREIGN KEY (`elaborateGroupId`) REFERENCES `elaborateGroup`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dossier` ADD CONSTRAINT `dossier_assetId_fkey` FOREIGN KEY (`assetId`) REFERENCES `asset`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dossier` ADD CONSTRAINT `dossier_relifId_fkey` FOREIGN KEY (`relifId`) REFERENCES `relif`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dossier` ADD CONSTRAINT `dossier_operationId_fkey` FOREIGN KEY (`operationId`) REFERENCES `operation`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `governativeProcurementLot` ADD CONSTRAINT `governativeProcurementLot_procurementTypeId_fkey` FOREIGN KEY (`procurementTypeId`) REFERENCES `procurementType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `governativeProjectProcurementLot` ADD CONSTRAINT `governativeProjectProcurementLot_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `governativeProject`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `governativeProjectProcurementLot` ADD CONSTRAINT `governativeProjectProcurementLot_procurementLotId_fkey` FOREIGN KEY (`procurementLotId`) REFERENCES `governativeProcurementLot`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `incentiveWithheld` ADD CONSTRAINT `incentiveWithheld_procurementTypeId_fkey` FOREIGN KEY (`procurementTypeId`) REFERENCES `procurementType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `incentiveWithheld` ADD CONSTRAINT `incentiveWithheld_regulationId_fkey` FOREIGN KEY (`regulationId`) REFERENCES `incentiveRegulation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `incentiveCalculationMethod` ADD CONSTRAINT `incentiveCalculationMethod_procurementTypeId_fkey` FOREIGN KEY (`procurementTypeId`) REFERENCES `procurementType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `incentiveCalculationMethod` ADD CONSTRAINT `incentiveCalculationMethod_regulationId_fkey` FOREIGN KEY (`regulationId`) REFERENCES `incentiveRegulation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `incentiveCalculationFactor` ADD CONSTRAINT `incentiveCalculationFactor_incentiveCalculationMethodId_fkey` FOREIGN KEY (`incentiveCalculationMethodId`) REFERENCES `incentiveCalculationMethod`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `incentiveStage` ADD CONSTRAINT `incentiveStage_procurementTypeId_fkey` FOREIGN KEY (`procurementTypeId`) REFERENCES `procurementType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `incentiveStage` ADD CONSTRAINT `incentiveStage_regulationId_fkey` FOREIGN KEY (`regulationId`) REFERENCES `incentiveRegulation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `incentiveRole` ADD CONSTRAINT `incentiveRole_procurementTypeId_fkey` FOREIGN KEY (`procurementTypeId`) REFERENCES `procurementType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `incentiveRole` ADD CONSTRAINT `incentiveRole_regulationId_fkey` FOREIGN KEY (`regulationId`) REFERENCES `incentiveRegulation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `incentiveRegulationValue` ADD CONSTRAINT `incentiveRegulationValue_stageId_fkey` FOREIGN KEY (`stageId`) REFERENCES `incentiveStage`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `incentiveRegulationValue` ADD CONSTRAINT `incentiveRegulationValue_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `incentiveRole`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `incentiveCalculation` ADD CONSTRAINT `incentiveCalculation_governativeProcurementLotId_fkey` FOREIGN KEY (`governativeProcurementLotId`) REFERENCES `governativeProcurementLot`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `incentiveCalculation` ADD CONSTRAINT `incentiveCalculation_regulationId_fkey` FOREIGN KEY (`regulationId`) REFERENCES `incentiveRegulation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `incentiveRoleAssignation` ADD CONSTRAINT `incentiveRoleAssignation_beneficiaryId_fkey` FOREIGN KEY (`beneficiaryId`) REFERENCES `incentiveBeneficiary`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `incentiveRoleAssignation` ADD CONSTRAINT `incentiveRoleAssignation_calculationId_fkey` FOREIGN KEY (`calculationId`) REFERENCES `incentiveCalculation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `incentiveRoleAssignation` ADD CONSTRAINT `incentiveRoleAssignation_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `incentiveRole`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `incentiveCalculationValue` ADD CONSTRAINT `incentiveCalculationValue_calculationId_fkey` FOREIGN KEY (`calculationId`) REFERENCES `incentiveCalculation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `incentiveCalculationValue` ADD CONSTRAINT `incentiveCalculationValue_regulationValueId_fkey` FOREIGN KEY (`regulationValueId`) REFERENCES `incentiveRegulationValue`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `incentiveAssignation` ADD CONSTRAINT `incentiveAssignation_assignationId_fkey` FOREIGN KEY (`assignationId`) REFERENCES `incentiveRoleAssignation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `incentiveAssignation` ADD CONSTRAINT `incentiveAssignation_calculationValueId_fkey` FOREIGN KEY (`calculationValueId`) REFERENCES `incentiveCalculationValue`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
