from django.urls import path
from .views import AutoresView, visualizacao_autor

urlpatterns = [
    path('Autores', AutoresView.as_view()),
    path('Autores', visualizacao_autor)
]
