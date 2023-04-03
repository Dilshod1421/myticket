import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from 'src/auth/models/user.model';

@Injectable()
export class MailService {
    constructor(private mailService: MailerService) { }

    async sendUserConfirmation(user: User): Promise<void> {
        await this.mailService.sendMail({
            to: user.email,
            subject: "myTicket saytiga xush kelibsiz!",
            template: './confirmation',
            context: {
                name: user.first_name,
            }
        })
    }
}
