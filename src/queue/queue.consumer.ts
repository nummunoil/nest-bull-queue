import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('audio')
export class QueueConsumer {
  @Process({ name: 'transcode', concurrency: 1 })
  async transcode(job: Job<unknown>) {
    console.log(new Date(), new Date().getTime(), 'start : ', job.id);
    await new Promise((resolve) => setTimeout(() => resolve(true), 3000));
    console.log(new Date(), new Date().getTime(), 'end : ', job.id);

    return {};
  }
}
