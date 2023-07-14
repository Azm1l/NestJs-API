import { Test, TestingModule } from '@nestjs/testing';
import { SysNumberingController } from './sys-numbering.controller';
import { SysNumberingService } from './sys-numbering.service';

describe('SysNumberingController', () => {
  let controller: SysNumberingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SysNumberingController],
      providers: [SysNumberingService],
    }).compile();

    controller = module.get<SysNumberingController>(SysNumberingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
