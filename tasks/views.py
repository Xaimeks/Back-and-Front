from django.shortcuts import render, redirect
from .models import Tasks
from django.views.decorators.http import require_http_methods

def index(request):
    tasks = Tasks.objects.all()
    return render(request, 'tasks/index.html', {'tasks': tasks})


@require_http_methods(['POST'])
def add(request):
    title = request.POST['title']
    tasks = Tasks(title=title)
    tasks.save()
    return redirect('index')


def update(request, tasks_id):
    tasks = Tasks.objects.get(id=tasks_id)
    tasks.complete = not tasks.complete
    tasks.save()
    return redirect('index')


def delete(request, tasks_id):
    tasks = Tasks.objects.get(id=tasks_id)
    tasks.delete()
    return redirect('index')




