import { Test, TestingModule } from '@nestjs/testing';
import { DvsBatchController } from './dvs-batch.controller';
import { DvsBatchService } from './dvs-batch.service';

describe('DvsBatchController', () => {
  let dvsBatchController: DvsBatchController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DvsBatchController],
      providers: [DvsBatchService],
    }).compile();

    dvsBatchController = app.get<DvsBatchController>(DvsBatchController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(dvsBatchController.getHello()).toBe('Hello World!');
    });
  });
});
