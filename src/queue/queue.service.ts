import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class QueueService {
  constructor(@InjectQueue('audio') private audioQueue: Queue) {}

  async addQueue(): Promise<string> {
    await this.audioQueue.add('transcode', { foo: 'bar1' }, { delay: 5000 });
    await this.audioQueue.add('transcode', { foo: 'bar2' }, { delay: 5000 });
    await this.audioQueue.add('transcode', { foo: 'bar3' }, { delay: 5000 });
    await this.audioQueue.add('transcode', { foo: 'bar4' }, { delay: 5000 });
    console.log('add queue ');

    return 'Hello World!';
  }
}
