import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { EmailService } from '../../../module/email/email.service';
import { UserCreatedEvent } from '../events/create-user.event';

@Injectable()
export class UserEventListner {
  constructor(private readonly emailService: EmailService) {
    this.emailService = emailService;
  }

  @OnEvent(UserCreatedEvent.EVENT_NAME, { async: true })
  async handleUserCreated(event: UserCreatedEvent): Promise<void> {
    if (event.user.email) {
      await this.emailService.sendWelcomeEmail(event.user);
    }
  }
}