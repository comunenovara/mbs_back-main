import { Module } from '@nestjs/common';
import { PrismaService } from './repository/prisma.service';

import { AssetBusinessService } from './business/asset.business.service';
import { AssetEntityService } from './entity/asset.entity.service';
import { AssetController } from './web/rest/asset.controller';
import { RelifBusinessService } from './business/relif.business.service';
import { RelifEntityService } from './entity/relif.entity.service';
import { RelifController } from './web/rest/relif.controller';
import { OperationTypeBusinessService } from './business/operation-type.business.service';
import { OperationTypeEntityService } from './entity/operation-type.entity.service';
import { OperationTypeController } from './web/rest/operation-type.controller';
import { OperationBusinessService } from './business/operation.business.service';
import { OperationEntityService } from './entity/operation.entity.service';
import { OperationController } from './web/rest/operation.controller';
import { DossierTypeBusinessService } from './business/dossier-type.business.service';
import { DossierTypeEntityService } from './entity/dossier-type.entity.service';
import { DossierTypeController } from './web/rest/dossier-type.controller';
import { ElaborateGroupBusinessService } from './business/elaborate-group.business.service';
import { ElaborateGroupEntityService } from './entity/elaborate-group.entity.service';
import { ElaborateGroupController } from './web/rest/elaborate-group.controller';
import { DossierBusinessService } from './business/dossier.business.service';
import { DossierEntityService } from './entity/dossier.entity.service';
import { DossierController } from './web/rest/dossier.controller';
import { ProcurementTypeBusinessService } from './business/procurement-type.business.service';
import { ProcurementTypeEntityService } from './entity/procurement-type.entity.service';
import { ProcurementTypeController } from './web/rest/procurement-type.controller';
import { GovernativeProjectBusinessService } from './business/governative-project.business.service';
import { GovernativeProjectEntityService } from './entity/governative-project.entity.service';
import { GovernativeProjectController } from './web/rest/governative-project.controller';
import { GovernativeProcurementLotBusinessService } from './business/governative-procurement-lot.business.service';
import { GovernativeProcurementLotEntityService } from './entity/governative-procurement-lot.entity.service';
import { GovernativeProcurementLotController } from './web/rest/governative-procurement-lot.controller';
import { GovernativeProjectProcurementLotBusinessService } from './business/governative-project-procurement-lot.business.service';
import { GovernativeProjectProcurementLotEntityService } from './entity/governative-project-procurement-lot.entity.service';
import { GovernativeProjectProcurementLotController } from './web/rest/governative-project-procurement-lot.controller';
import { IncentiveBeneficiaryBusinessService } from './business/incentive-beneficiary.business.service';
import { IncentiveBeneficiaryEntityService } from './entity/incentive-beneficiary.entity.service';
import { IncentiveBeneficiaryController } from './web/rest/incentive-beneficiary.controller';
import { IncentiveRegulationBusinessService } from './business/incentive-regulation.business.service';
import { IncentiveRegulationEntityService } from './entity/incentive-regulation.entity.service';
import { IncentiveRegulationController } from './web/rest/incentive-regulation.controller';
import { IncentiveWithheldBusinessService } from './business/incentive-withheld.business.service';
import { IncentiveWithheldEntityService } from './entity/incentive-withheld.entity.service';
import { IncentiveWithheldController } from './web/rest/incentive-withheld.controller';
import { IncentiveCalculationMethodBusinessService } from './business/incentive-calculation-method.business.service';
import { IncentiveCalculationMethodEntityService } from './entity/incentive-calculation-method.entity.service';
import { IncentiveCalculationMethodController } from './web/rest/incentive-calculation-method.controller';
import { IncentiveCalculationFactorBusinessService } from './business/incentive-calculation-factor.business.service';
import { IncentiveCalculationFactorEntityService } from './entity/incentive-calculation-factor.entity.service';
import { IncentiveCalculationFactorController } from './web/rest/incentive-calculation-factor.controller';
import { IncentiveStageBusinessService } from './business/incentive-stage.business.service';
import { IncentiveStageEntityService } from './entity/incentive-stage.entity.service';
import { IncentiveStageController } from './web/rest/incentive-stage.controller';
import { IncentiveRoleBusinessService } from './business/incentive-role.business.service';
import { IncentiveRoleEntityService } from './entity/incentive-role.entity.service';
import { IncentiveRoleController } from './web/rest/incentive-role.controller';
import { IncentiveRegulationValueBusinessService } from './business/incentive-regulation-value.business.service';
import { IncentiveRegulationValueEntityService } from './entity/incentive-regulation-value.entity.service';
import { IncentiveRegulationValueController } from './web/rest/incentive-regulation-value.controller';
import { IncentiveCalculationBusinessService } from './business/incentive-calculation.business.service';
import { IncentiveCalculationEntityService } from './entity/incentive-calculation.entity.service';
import { IncentiveCalculationController } from './web/rest/incentive-calculation.controller';
import { IncentiveRoleAssignationBusinessService } from './business/incentive-role-assignation.business.service';
import { IncentiveRoleAssignationEntityService } from './entity/incentive-role-assignation.entity.service';
import { IncentiveRoleAssignationController } from './web/rest/incentive-role-assignation.controller';
import { IncentiveCalculationValueBusinessService } from './business/incentive-calculation-value.business.service';
import { IncentiveCalculationValueEntityService } from './entity/incentive-calculation-value.entity.service';
import { IncentiveCalculationValueController } from './web/rest/incentive-calculation-value.controller';
import { IncentiveAssignationBusinessService } from './business/incentive-assignation.business.service';
import { IncentiveAssignationEntityService } from './entity/incentive-assignation.entity.service';
import { IncentiveAssignationController } from './web/rest/incentive-assignation.controller';

@Module({
	providers: [
		PrismaService,

		AssetBusinessService,
		AssetEntityService,
		RelifBusinessService,
		RelifEntityService,
		OperationTypeBusinessService,
		OperationTypeEntityService,
		OperationBusinessService,
		OperationEntityService,
		DossierTypeBusinessService,
		DossierTypeEntityService,
		ElaborateGroupBusinessService,
		ElaborateGroupEntityService,
		DossierBusinessService,
		DossierEntityService,
		ProcurementTypeBusinessService,
		ProcurementTypeEntityService,
		GovernativeProjectBusinessService,
		GovernativeProjectEntityService,
		GovernativeProcurementLotBusinessService,
		GovernativeProcurementLotEntityService,
		GovernativeProjectProcurementLotBusinessService,
		GovernativeProjectProcurementLotEntityService,
		IncentiveBeneficiaryBusinessService,
		IncentiveBeneficiaryEntityService,
		IncentiveRegulationBusinessService,
		IncentiveRegulationEntityService,
		IncentiveWithheldBusinessService,
		IncentiveWithheldEntityService,
		IncentiveCalculationMethodBusinessService,
		IncentiveCalculationMethodEntityService,
		IncentiveCalculationFactorBusinessService,
		IncentiveCalculationFactorEntityService,
		IncentiveStageBusinessService,
		IncentiveStageEntityService,
		IncentiveRoleBusinessService,
		IncentiveRoleEntityService,
		IncentiveRegulationValueBusinessService,
		IncentiveRegulationValueEntityService,
		IncentiveCalculationBusinessService,
		IncentiveCalculationEntityService,
		IncentiveRoleAssignationBusinessService,
		IncentiveRoleAssignationEntityService,
		IncentiveCalculationValueBusinessService,
		IncentiveCalculationValueEntityService,
		IncentiveAssignationBusinessService,
		IncentiveAssignationEntityService,

	],
	controllers: [
		AssetController,
		RelifController,
		OperationTypeController,
		OperationController,
		DossierTypeController,
		ElaborateGroupController,
		DossierController,
		ProcurementTypeController,
		GovernativeProjectController,
		GovernativeProcurementLotController,
		GovernativeProjectProcurementLotController,
		IncentiveBeneficiaryController,
		IncentiveRegulationController,
		IncentiveWithheldController,
		IncentiveCalculationMethodController,
		IncentiveCalculationFactorController,
		IncentiveStageController,
		IncentiveRoleController,
		IncentiveRegulationValueController,
		IncentiveCalculationController,
		IncentiveRoleAssignationController,
		IncentiveCalculationValueController,
		IncentiveAssignationController,

	]
})
export class MbsMainModule { }
