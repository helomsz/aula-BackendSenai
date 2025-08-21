from django.urls import path
from .views import AutoresView, visualizacao_autor, EditoraView, LivroView

urlpatterns = [
    path('Autores', AutoresView.as_view()),
    path('Autores', visualizacao_autor),
    path('Editoras', EditoraView.as_view()),
    path('Livros', LivroView.as_view())
]
