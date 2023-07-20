import { Test, TestingModule } from '@nestjs/testing';
import { ConsigneeController } from './consignee.controller';
import { ConsigneeService } from './consignee.service';

describe('ConsigneeController', () => {
  let controller: ConsigneeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConsigneeController],
      providers: [ConsigneeService],
    }).compile();

    controller = module.get<ConsigneeController>(ConsigneeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
