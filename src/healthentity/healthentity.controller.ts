import { Controller, Get, Post, Put, Delete, Logger, UsePipes, Body } from '@nestjs/common';
import { HealthentityService } from './healthentity.service';
import { ValidationPipe } from '../commons/validation-pipe';
import { CreateHealthentityDTO, UpdateHealthentityDTO } from './healthentity.dto';
import { Healthentity as Healt } from '../types/healthentity.dto';
import { promises } from 'dns';
import {ApiResponse, ApiCreatedResponse} from '@nestjs/swagger'

@Controller()
export class HealthentityController {

    private logger = new Logger('HealthentityController');
    constructor(private healtService: HealthentityService) { }

    private logData(options: any) {
        options.user && this.logger.log('USER ' + JSON.stringify(options.user));
        options.body && this.logger.log('BODY ' + JSON.stringify(options.body));
        options.id && this.logger.log('HEALTHENTITY ' + JSON.stringify(options.id));
    }

    @Get()
    @ApiCreatedResponse({
        description: 'knunu',
        type: Healt,
        status: 200,
    })
    findAll(): Promise<Healt [] > {
        return this.healtService.findAll();
    }

    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @Post()
    @UsePipes(new ValidationPipe())
    async createHealthEntity(@Body() product: CreateHealthentityDTO): Promise<CreateHealthentityDTO> {
        return await this.healtService.createHealthEntity();
    }

    @Get(':id')
    readHealthEntity() { }

    @Put(':id')
    updateHealthEntity() { }

    @Delete(':id')
    destroyHealthEntity() { }
}