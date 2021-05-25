self.addEventListener('push', () => {
    self.Registration.sendNotification('test message', {});
});