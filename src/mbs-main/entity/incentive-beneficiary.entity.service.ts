import { Injectable } from "@nestjs/common";
import { IncentiveBeneficiaryDto } from "../dto/incentive-beneficiary.dto";
import { PrismaService } from "../repository/prisma.service";
import { QueryParamsTools } from "src/tools/query-params.class";

@Injectable({})
export class IncentiveBeneficiaryEntityService {
	constructor(
		private prisma: PrismaService,
	) {}

	async insertIncentiveBeneficiary(incentiveBeneficiaryDto: IncentiveBeneficiaryDto) {
		let prismaRequestArgs: any = {};
		// Fileds
		prismaRequestArgs['data'] = {
			description: incentiveBeneficiaryDto.description,
			active: incentiveBeneficiaryDto.active,
		};
		// Relations
		return await this.prisma.incentiveBeneficiary.create(prismaRequestArgs);
	}

	async updateIncentiveBeneficiary(incentiveBeneficiaryDto: IncentiveBeneficiaryDto) {
		return await this.prisma.incentiveBeneficiary.update({
			where: {
				id: incentiveBeneficiaryDto.id,
			},
			data: {
				description: incentiveBeneficiaryDto.description,
				active: incentiveBeneficiaryDto.active,
			},
		});
	}

	// Get
	async getIncentiveBeneficiaries(filters: any): Promise<IncentiveBeneficiaryDto[]> {
		let prismaRequestArgs: any = {};
		// Pagination
		if(filters.size !== undefined && filters.page !== undefined) {
			prismaRequestArgs = { ...QueryParamsTools.getPrismaPaginationObject(filters) };
		}
		// Filter
		{
			prismaRequestArgs['where'] = QueryParamsTools.getPrismaWhereObject(filters);
		}
		// Join
		{
		}
		// Order
		if(filters.orderBy !== undefined) {
			prismaRequestArgs['orderBy'] = QueryParamsTools.getPrismaOrderByArray(filters);
		}
		return await this.prisma.incentiveBeneficiary.findMany(prismaRequestArgs);
	}

	// Count
	async countIncentiveBeneficiaries(filters: any): Promise<number> {
		let prismaRequestArgs: any = {};
		// Filter
		{
			prismaRequestArgs['where'] = QueryParamsTools.getPrismaWhereObject(filters);
		}
		return await this.prisma.incentiveBeneficiary.count(prismaRequestArgs);
	}

	async getIncentiveBeneficiary(id: number): Promise<IncentiveBeneficiaryDto> {
		return await this.prisma.incentiveBeneficiary.findUnique({
			where: {
				id: id,
			},
		})
	}

	async deleteIncentiveBeneficiary(id: number) {
		return await this.prisma.incentiveBeneficiary.delete({
			where: {
				id: id,
			}
		});
	}
}