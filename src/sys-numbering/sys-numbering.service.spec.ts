import { Test, TestingModule } from '@nestjs/testing';
import { SysNumberingService } from './sys-numbering.service';

describe('SysNumberingService', () => {
  let service: SysNumberingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SysNumberingService],
    }).compile();

    service = module.get<SysNumberingService>(SysNumberingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
