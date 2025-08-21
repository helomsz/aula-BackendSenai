from django.db import models

class Autor(models.Model):
    nome = models.CharField(max_length=255) #CharField -> qualquer caracter e o máximo é 255
    sobrenome = models.CharField(max_length=255)
    data_nascimento = models.DateField(null=True, blank=True)
    nacionalidade = models.CharField(max_length=30, null=True, blank=True)
    biografia = models.TextField(null=True, blank=True) #TextField -> Não tem tamanho, um texto maior

    def __str__(self):
        return f"{self.nome} {self.sobrenome}"
    
    class Editora(models.Model):
        editora = models.CharField(max_length=100)
        cpj = models.CharField(max_length=18, unique=True,null=True,blank=True)
        endereco = models.CharField(max_length=200, null=True, blank=True)
        telefone = models.CharField(max_length=20, null=True, blank=True)
        email = models.EmailField(null=True, blank=True)
        site = models.URLField(null=True, blank=True)























