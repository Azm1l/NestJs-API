import { Test, TestingModule } from '@nestjs/testing';
import { UpdateStatusController } from './update-status.controller';
import { UpdateStatusService } from './update-status.service';

describe('UpdateStatusController', () => {
  let controller: UpdateStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdateStatusController],
      providers: [UpdateStatusService],
    }).compile();

    controller = module.get<UpdateStatusController>(UpdateStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
