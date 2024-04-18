import { Injectable } from "@nestjs/common";
import { ElaborateGroupDto } from "../dto/elaborate-group.dto";
import { PrismaService } from "../repository/prisma.service";
import { QueryParamsTools } from "src/tools/query-params.class";

@Injectable({})
export class ElaborateGroupEntityService {
	constructor(
		private prisma: PrismaService,
	) {}

	async insertElaborateGroup(elaborateGroupDto: ElaborateGroupDto) {
		let prismaRequestArgs: any = {};
		// Fileds
		prismaRequestArgs['data'] = {
			description: elaborateGroupDto.description,
		};
		// Relations
		return await this.prisma.elaborateGroup.create(prismaRequestArgs);
	}

	async updateElaborateGroup(elaborateGroupDto: ElaborateGroupDto) {
		return await this.prisma.elaborateGroup.update({
			where: {
				id: elaborateGroupDto.id,
			},
			data: {
				description: elaborateGroupDto.description,
			},
		});
	}

	// Get
	async getElaborateGroups(filters: any): Promise<ElaborateGroupDto[]> {
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
		return await this.prisma.elaborateGroup.findMany(prismaRequestArgs);
	}

	// Count
	async countElaborateGroups(filters: any): Promise<number> {
		let prismaRequestArgs: any = {};
		// Filter
		{
			prismaRequestArgs['where'] = QueryParamsTools.getPrismaWhereObject(filters);
		}
		return await this.prisma.elaborateGroup.count(prismaRequestArgs);
	}

	async getElaborateGroup(id: number): Promise<ElaborateGroupDto> {
		return await this.prisma.elaborateGroup.findUnique({
			where: {
				id: id,
			},
		})
	}

	async deleteElaborateGroup(id: number) {
		return await this.prisma.elaborateGroup.delete({
			where: {
				id: id,
			}
		});
	}
}