# Módulo 3 - Full Stack

Repositório curso full stack Blue EdTech.

![javascript everywhere](https://miro.medium.com/max/760/1*_hSoTARgTda0JDPRnOF2BQ.jpeg)


## JSON

**JavaScript Object Notation**

`JSON` é um formato baseado em texto padrão para representar dados estruturados com base na sintaxe do objeto JavaScript. É comumente usado para transmitir dados em aplicativos da Web (por exemplo, enviar alguns dados do servidor para o cliente, para que possam ser exibidos em uma página da Web ou vice-versa). Saiba mais sobre o json na [documentação oficial](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/JSON).

Estrutura do `JSON`.

Conforme descrito acima, um JSON é uma string cujo formato se parece muito com o formato literal do objeto JavaScript. Você pode incluir os mesmos tipos de dados básicos dentro do JSON, como em um objeto JavaScript padrão — strings, números, matrizes, booleanos e outros literais de objeto. Isso permite que você construa uma hierarquia de dados, assim:

```js
{
  "filmes": [
    "nome": "Vingadores",
    "genero": "Ação", 
  ]
}
```

Transformando objetos em JSON e vice-versa

`JSON.stringify` transforma um objeto JavaScript em texto JSON e armazena esse texto JSON em uma string, por exemplo:

```js
var my_object = { key_1: "some text", key_2: true, key_3: 5 };

var object_as_string = JSON.stringify(my_object);  
// "{"key_1":"some text","key_2":true,"key_3":5}"  

typeof(object_as_string);  
// "string"  
```

`JSON.parse` transforma uma string de texto JSON em um objeto JavaScript, por exemplo:

```js
var object_as_string_as_object = JSON.parse(object_as_string);  
// {key_1: "some text", key_2: true, key_3: 5} 

typeof(object_as_string_as_object);  
// "object" 
```

## Aulas

- [Aula 1: Backend NodeJS com Express e consumo com Frontend JS (Vanilla) - Parte 1](./aula-01/docs/aula-01.md)