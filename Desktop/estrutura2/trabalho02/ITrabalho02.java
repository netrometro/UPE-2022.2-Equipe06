package trabalho02;

public interface ITrabalho02 {
	
	String getAluno();

	int getQuantidade();
	
	void inserirNoInicio(ITAD tad);
	
	void inserirNoFim(ITAD tad);
	
	void inserirNoMeio(ITAD tad, int posicao);
	
	void excluirNoInicio();
	
	void excluirNoFim();
	
	void excluirNoMeio(int posicao);
	
	ITAD getItem(int posicao);
	
	String print();
	
}
