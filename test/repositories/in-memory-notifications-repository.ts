import { Notification } from "../../src/aplication/entities/notification";
import { NotificationsRepository } from "../../src/aplication/repositories/notifications-repository";

export class InMemoryNotificationsRepository implements NotificationsRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    //console.log(notification);
    this.notifications.push(notification)
  }
}