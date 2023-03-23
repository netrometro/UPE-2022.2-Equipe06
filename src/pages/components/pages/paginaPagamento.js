import { useState } from 'react';
import { fazerPagamento } from '../utils/paypal';

const PaginaPagamento = () => {
  const [amount, setAmount] = useState('');

  const handlePagamento = async () => {
    try {
      const payment = await fazerPagamento(amount);
      console.log(payment);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Página de Pagamento</h1>
      <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button onClick={handlePagamento}>Realizar pagamento</button>
    </div>
  );
};

export default PaginaPagamento;