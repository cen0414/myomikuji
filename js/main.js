'use strict';

{ 
  const button = document.querySelector('button');
  const result = document.getElementById('result');
  
  // 大大吉(1%)、大吉(9%)、吉(50%)、凶(30%)、大凶(10%)
  button.addEventListener('click', function() {
    const random = Math.floor(Math.random() * 101);
    if(random >= 99) {
      result.textContent = '大大吉';
    } else if(random >= 90) {
      result.textContent = '大吉';
    } else if(random >= 40) {
      result.textContent = '吉';
    } else if(random >= 10) {
      result.textContent = '凶';
    } else {
      result.textContent = '大凶';
    }
  });

}