import { Test, TestingModule } from '@nestjs/testing';
import { MasterstatusService } from './masterstatus.service';

describe('MasterstatusService', () => {
  let service: MasterstatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MasterstatusService],
    }).compile();

    service = module.get<MasterstatusService>(MasterstatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
