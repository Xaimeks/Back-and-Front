from django.db import models


class Tasks(models.Model):
    title = models.CharField('Название задачи', max_length=200)
    complete = models.BooleanField('Завершено', default=False)

    class Meta:
        verbose_name = 'Задание'
        verbose_name_plural = 'Задания'

    def __str__(self):
        return self.title
