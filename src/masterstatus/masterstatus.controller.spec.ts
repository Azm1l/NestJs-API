import { Test, TestingModule } from '@nestjs/testing';
import { MasterstatusController } from './masterstatus.controller';
import { MasterstatusService } from './masterstatus.service';

describe('MasterstatusController', () => {
  let controller: MasterstatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MasterstatusController],
      providers: [MasterstatusService],
    }).compile();

    controller = module.get<MasterstatusController>(MasterstatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
