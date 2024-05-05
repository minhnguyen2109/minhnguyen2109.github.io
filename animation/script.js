 var loadingContainer = document.getElementById('loading-container');

 window.onload = function() {
   loadingContainer.style.display = 'none';
 };

 document.addEventListener('readystatechange', function() {
   if (document.readyState !== 'complete') {
     loadingContainer.style.display = 'flex';
   }
 });