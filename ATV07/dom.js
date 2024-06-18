document.addEventListener('DOMContentLoaded', () => {
   const prestacaoForm = document.getElementById('prestacaoForm');
   const valorPagoSpan = document.getElementById('valorPago');
   const relatorioP = document.getElementById('relatorio');
   let quantidadePrestacoes = 0;
   let valorTotalPrestacoes = 0.0;

   prestacaoForm.addEventListener('submit', (event) => {
       event.preventDefault();
       const valorPrestacao = parseFloat(document.getElementById('valorPrestacao').value);
       const diasAtraso = parseInt(document.getElementById('diasAtraso').value);

       if (valorPrestacao === 0) {
           relatorioP.textContent = `Quantidade de prestações pagas: ${quantidadePrestacoes}, Valor total pago: R$ ${valorTotalPrestacoes.toFixed(2)}`;
           return;
       }

       const valorPago = valorPagamento(valorPrestacao, diasAtraso);
       valorPagoSpan.textContent = valorPago.toFixed(2);

       quantidadePrestacoes++;
       valorTotalPrestacoes += valorPago;

       // Clear the form
       prestacaoForm.reset();
       document.getElementById('valorPrestacao').focus();
   });

   function valorPagamento(valor, diasAtraso) {
       if (diasAtraso > 0) {
           const multa = valor * 0.03;
           const juros = valor * 0.001 * diasAtraso;
           return valor + multa + juros;
       }
       return valor;
   }
});
