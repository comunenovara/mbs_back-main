import { Injectable } from "@nestjs/common";
import { GovernativeProjectDto } from "../dto/governative-project.dto";
import { PrismaService } from "../repository/prisma.service";
import { QueryParamsTools } from "src/tools/query-params.class";

@Injectable({})
export class GovernativeProjectEntityService {
	constructor(
		private prisma: PrismaService,
	) {}

	async insertGovernativeProject(governativeProjectDto: GovernativeProjectDto) {
		let prismaRequestArgs: any = {};
		// Fileds
		prismaRequestArgs['data'] = {
			code: governativeProjectDto.code,
			description: governativeProjectDto.description,
			amount: governativeProjectDto.amount,
		};
		// Relations
		return await this.prisma.governativeProject.create(prismaRequestArgs);
	}

	async updateGovernativeProject(governativeProjectDto: GovernativeProjectDto) {
		return await this.prisma.governativeProject.update({
			where: {
				id: governativeProjectDto.id,
			},
			data: {
				code: governativeProjectDto.code,
				description: governativeProjectDto.description,
				amount: governativeProjectDto.amount,
			},
		});
	}

	// Get
	async getGovernativeProjects(filters: any): Promise<GovernativeProjectDto[]> {
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
		return await this.prisma.governativeProject.findMany(prismaRequestArgs);
	}

	// Count
	async countGovernativeProjects(filters: any): Promise<number> {
		let prismaRequestArgs: any = {};
		// Filter
		{
			prismaRequestArgs['where'] = QueryParamsTools.getPrismaWhereObject(filters);
		}
		return await this.prisma.governativeProject.count(prismaRequestArgs);
	}

	async getGovernativeProject(id: number): Promise<GovernativeProjectDto> {
		return await this.prisma.governativeProject.findUnique({
			where: {
				id: id,
			},
		})
	}

	async deleteGovernativeProject(id: number) {
		return await this.prisma.governativeProject.delete({
			where: {
				id: id,
			}
		});
	}
}