import api from  '../../../services/api.js';

export const fazerPagamento = async (amount) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  const body = {
    amount,
  };

  try {
    const response = await api.post('/paypal/pagamento', body, { headers });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Falha ao realizar pagamento');
  }
};





