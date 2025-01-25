// ==========================================
// **Técnicas de Otimização: Memoization e Redução de Loops Complexos**
// ==========================================

// 1. **Memoization**
// A Memoization é uma técnica de otimização que armazena os resultados de funções já executadas, para evitar cálculos repetidos. 
// Ideal para problemas recursivos.

function fibonacciMemoized() {
    const memo = {}; // Armazenamento dos resultados
  
    return function fib(n) {
      if (memo[n] !== undefined) return memo[n];  // Se o valor já foi calculado, retorna-o
  
      if (n <= 1) return n;
      memo[n] = fib(n - 1) + fib(n - 2);  // Armazena o resultado
      return memo[n];
    };
  }
  
  const fibonacci = fibonacciMemoized();
  console.log(fibonacci(35));  // Saída mais rápida, devido ao uso de memoization
  
  // Explicação: A versão otimizada evita chamadas recursivas desnecessárias ao armazenar os resultados já calculados.
  
  // ==========================================
  // 2. **Redução de Loops Complexos**
  // Quando temos loops aninhados, podemos otimizar o processo, por exemplo, usando um Set para verificar elementos rapidamente,
  // reduzindo a complexidade de O(n²) para O(n).
  
  // Exemplo de encontrar o par de números que somam um valor alvo:
  
  // Versão Ineficiente (loops aninhados):
  function encontrarParSoma(nums, alvo) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === alvo) {
          return [nums[i], nums[j]];
        }
      }
    }
    return null;
  }
  
  console.log(encontrarParSoma([1, 2, 3, 4, 5], 9));  // Saída: [4, 5]
  
  // Explicação: A função acima tem uma complexidade O(n²), pois verifica todos os pares de números possíveis.
  
  // Versão Otimizada (usando Set):
  function encontrarParSomaOtimo(nums, alvo) {
    const numerosVistos = new Set();
  
    for (let num of nums) {
      const complemento = alvo - num;
  
      if (numerosVistos.has(complemento)) {
        return [complemento, num];
      }
  
      numerosVistos.add(num);
    }
  
    return null;
  }
  
  console.log(encontrarParSomaOtimo([1, 2, 3, 4, 5], 9));  // Saída: [4, 5]
  
  // Explicação: A versão otimizada usa um Set para armazenar os números já vistos, permitindo a busca em O(1) e reduzindo a complexidade de O(n²) para O(n).
  
  // ==========================================
  // **Outras Dicas de Redução de Loops Complexos**
  
  /*
  1. **Evitar Recalcular Valores**: 
     - Armazene os valores já calculados em uma variável ou estrutura de dados auxiliar.
  2. **Dividir o Problema**:
     - Divida o problema em subproblemas menores, otimizando o processo (dividir e conquistar).
  3. **Algoritmos Eficientes**:
     - Use algoritmos eficientes para ordenação e busca, como QuickSort, MergeSort, ou Binary Search, em vez de iterar de maneira simples.
  */
  
  // ==========================================
  // **Resumo das Técnicas de Otimização**
  
  /*
  - **Memoization**: Armazena os resultados de funções recursivas para evitar cálculos repetidos. Ideal para otimizar funções com cálculos repetidos, como no caso da Fibonacci.
  - **Redução de Loops Complexos**: Substitua loops aninhados por estruturas eficientes, como Set, Map ou técnicas como divisão de problemas (divide et conquer).
  */
  
  // Essas otimizações ajudam a melhorar significativamente a performance, especialmente quando lidamos com grandes volumes de dados ou problemas computacionalmente caros.
  