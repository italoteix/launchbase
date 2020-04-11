<h1 align="center">
    <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="400px" />
</h1>

<h3 align="center">
  Projects, Notes and Challenges Solutions
</h3>

<p align="center">
  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%23F8952D">
  </a>

  <a href="/LICENSE" >
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>

  <a href="https://www.https://www.linkedin.com/in/italoteix/" >
    <img alt="My Linkedin" src="https://img.shields.io/badge/-italoteix-%230077B5?style=social&logo=linkedin">
  </a>
</p>

<p align="center">
  <a href="#rocket-challenge-1-1-js-first-steps">Challenge 1-1</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-challenge-1-2-dealing-with-objects-and-arrays">Challenge 1-2</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-challenge-1-3-functions-and-iteration-statements">Challenge 1-3</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-challenge-1-4-app-banking-operations">Challenge 1-4</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-challenge-2-1-first-html">Challenge 2-1</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-Challenge 2-2-about-page">Challenge 2-2</a>
</p>

## :vertical_traffic_light: Web Development Introduction

### :rocket: Challenge 1-1: JS first steps

- Challenge [Description](https://github.com/Rocketseat/bootcamp-launchbase-desafios-01/blob/master/desafios/01-1-primeiros-passos-com-js.md)
  - BMI calculus - [Solution](/week01/01-web-dev-introduction/challenge01-1/bmi.js)
    #### Sample input
    ```js
    name = "Carlos";
    weight = 84;
    height = 1.88;
    ```
    #### Sample output
    ```
    Carlos, you are not overweighted
    ```
  - Retirement calculus - [Solution](/week01/01-web-dev-introduction/challenge01-1.js)
    #### Sample input
    ```js
    name = "Silvana";
    sex = "F";
    age = 48;
    contribution = 23;
    ```
    #### Sample output
    ```
    Silvana, you can not retire!
    ```

### :rocket: Challenge 1-2: Dealing with objects and arrays

- Challenge [Description](https://github.com/Rocketseat/bootcamp-launchbase-desafios-01/blob/master/desafios/01-2-lidando-com-objetos-e-vetores.md)
  - Building and printing objects - [Solution](/week01/01-web-dev-introduction/challenge01-2/company-data.js)
    #### Sample input
    ```js
    company = {
      name: "Rocketseat",
      color: "Purple",
      focus: "Programming",
      address: {
        street: "Rua Guilherme Gembala",
        number: 260
      }
    };
    ```
    
    #### Sample output
    ```
    The Rocketseat company is located at Rua Guilherme Gembala, 260.  
    ```

  - Arrays and objects - [Solution](/week01/01-web-dev-introduction/challenge01-2/programmer.js)
    #### Sample input
    ```js
    programmer = {
      name: "Ítalo",
      age: 29,
      techs: [
        { name: 'JavaScript', specialty: 'Web/Mobile' },
        { name: 'C++', specialty: 'Desktop' },
        { name: 'Python', specialty: 'Data Science' }
      ]
    };
    ```
    
    #### Sample output
    ```
    The user Ítalo is 29 years old and uses JavaScript technology with specialty in Web/Mobile.
    ```

### :rocket: Challenge 1-3: Functions and iteration statements

- Challenge [Description](https://github.com/Rocketseat/bootcamp-launchbase-desafios-01/blob/master/desafios/01-3-funcoes-e-estruturas-de-repeticao.md)
  - Users and technologies - [Solution](/week01/01-web-dev-introduction/challenge01-3/users-tech.js)
    #### Sample input
    ```js
    users = [
      { name: "Carlos", techs: ["HTML", "CSS"] },
      { name: "Jasmine", techs: ["JavaScript", "CSS"] },
      { name: "Tuane", techs: ["HTML", "Node.js"] }
    ];
    ```
    
    #### Sample output
    ```
    Carlos works with HTML, CSS.
    Jasmine works with JavaScript, CSS.
    Tuane works with HTML, Node.js.
    ```

  - Search for technology - [Solution](/week01/01-web-dev-introduction/challenge01-3/tech-search.js)
    #### Sample input
    ```js
    users = [
      { name: "Carlos", techs: ["HTML", "CSS"] },
      { name: "Jasmine", techs: ["JavaScript", "CSS"] },
      { name: "Tuane", techs: ["HTML", "Node.js"] }
    ];
    ```
    
    #### Sample output
    ```
    The user Carlos works with CSS.
    The user Jasmine works with CSS.
    ```

  - Expenses and revenues sum - [Solution](/week01/01-web-dev-introduction/challenge01-3/expenses-revenues.js)
    #### Sample input
    ```js
    users = [
      {
        name: "Salvio",
        revenues: [115.3, 48.7, 98.3, 14.5],
        expenses: [85.3, 13.5, 19.9]
      },
      {
        name: "Marcio",
        revenues: [24.6, 214.3, 45.3],
        expenses: [185.3, 12.1, 120.0]
      },
      {
        name: "Lucia",
        revenues: [9.8, 120.3, 340.2, 45.3],
        expenses: [450.2, 29.9]
      }
    ];
    ```
    
    #### Sample output
    ```
    Salvio has a POSITIVE balance of 158.10.
    Marcio has a NEGATIVE balance of -33.20.
    Lucia has a POSITIVE balance of 35.50.
    ```

### :rocket: Challenge 1-4: App: Banking operations

- Challenge [Description](https://github.com/Rocketseat/bootcamp-launchbase-desafios-01/blob/master/desafios/01-4-aplicacao-operacoes-bancarias.md)
  - User's bank account - [Solution](/week01/01-web-dev-introduction/challenge01-4/bank-ops.js)
    #### Sample input
    ```js
    user = {
      name: "Mariana",
      transactions: [],
      balance: 0
    };
    ```
    
    #### Sample output
    ```js
    createTransaction({ type: "credit", value: 50 });
    createTransaction({ type: "credit", value: 120 });
    createTransaction({ type: "debit", value: 80 });
    createTransaction({ type: "debit", value: 30 });

    console.log(user.balance); // 60

    console.log(getHigherTransactionByType("credit")); // { type: 'credit', value: 120 }
    console.log(getHigherTransactionByType("debit")); // { type: 'debit', value: 80 }

    console.log(getAverageTransactionValue()); // 70

    console.log(getTransactionsCount()); // { credit: 2, debit: 2 }
    ```

## :art: Starting the Front-end

### :rocket: Challenge 2-1: First HTML

- Challenge [Description](https://github.com/Rocketseat/bootcamp-launchbase-desafios-02/blob/master/desafios/02-1-primeiro-html.md)
  - Add favicon and styles - [Solution](/week01/02-starting-the-front/challenge02-1/)
  
  <p align="center>
    <img alt="first-html" src="/week01/02-starting-the-front/demos/first-html.png" width="600px" />
  </p>

### :rocket: Challenge 2-2: About page

- Challenge [Description](https://github.com/Rocketseat/bootcamp-launchbase-desafios-02/blob/master/desafios/02-2-pagina-descricao.md)
  - Add a second page - [Solution](/week01/02-starting-the-front/challenge02-2/)
    
  <p align="center>
    <img alt="challenge 2-2" src="/week01/02-starting-the-front/demos/challenge2-2.png" width="600px" />
  </p>
