import { PartialType } from '@nestjs/mapped-types';
import { CreateMasterstatusDto } from './create-masterstatus.dto';

export class UpdateMasterstatusDto extends PartialType(CreateMasterstatusDto) {}
