package trabalho02;

public class BeatrizGuerraEstrutura implements ITrabalho02 {
	
	private String aluno = "Beatriz Guerra";
	private BeatrizGuerraElemento inicio;
	private int quantidade = 0;

	@Override
	public String getAluno() {
		return this.aluno;
	}

	@Override
	public int getQuantidade() {
		return this.quantidade;
	}

	@Override
	public void inserirNoInicio(ITAD tad) {
		BeatrizGuerraElemento novo = new BeatrizGuerraElemento((ITAD) tad);
		
		novo.setNext(inicio);
		inicio = novo;
		this.quantidade++;
		System.out.println("A lista agora tem "+this.quantidade+" elemento(s)!\n");
	}

	@Override
	public void inserirNoFim(ITAD tad) {
		BeatrizGuerraElemento novo = new BeatrizGuerraElemento((ITAD) tad);
		if (inicio == null) {
			inicio = novo;
		} else {
			BeatrizGuerraElemento cursor = inicio;
			while (cursor.getNext() != null) {
				cursor = cursor.getNext();
			}
			cursor.setNext(novo);
		}
		this.quantidade++;
		System.out.println("A lista agora tem "+this.quantidade+" elemento(s)!\n");
	}

	@Override
	public void inserirNoMeio(ITAD tad, int posicao) {
	    if (posicao >= 1 && posicao <= this.quantidade + 1) {
	        BeatrizGuerraElemento novo = new BeatrizGuerraElemento((ITAD) tad);

	        if (posicao == 1) {
	            // Inserir no início
	            novo.setNext(inicio);
	            inicio = novo;
	        } else {
	            BeatrizGuerraElemento cursor = inicio;
	            BeatrizGuerraElemento anterior = null;

	            for (int i = 1; i < posicao; i++) {
	                anterior = cursor;
	                cursor = cursor.getNext();
	            }

	            // Inserir no meio
	            anterior.setNext(novo);
	            novo.setNext(cursor);
	        }

	        this.quantidade++;
	        System.out.println("A lista agora tem " + this.quantidade + " elemento(s)!\n");
	    } else {
	        System.out.println("Posição inválida para inserção!");
	    }
	}

	@Override
    public void excluirNoInicio() {
        if (inicio != null) {
            inicio = inicio.getNext();
            this.quantidade--;
        }
    }

    @Override
    public void excluirNoFim() {
        if (inicio != null) {
            if (inicio.getNext() == null) {
                // If there is only one element in the list
                inicio = null;
            } else {
                BeatrizGuerraElemento cursor = inicio;
                BeatrizGuerraElemento anterior = null;

                while (cursor.getNext() != null) {
                    anterior = cursor;
                    cursor = cursor.getNext();
                }

                // Remove the last element
                anterior.setNext(null);
            }
            this.quantidade--;
        }
    }

    @Override
    public void excluirNoMeio(int posicao) {
        if (inicio != null && posicao > 1 && posicao <= this.quantidade) {
            BeatrizGuerraElemento cursor = inicio;
            BeatrizGuerraElemento anterior = null;

            for (int i = 1; i < posicao; i++) {
                anterior = cursor;
                cursor = cursor.getNext();
            }

            // Remove the element at the specified position
            anterior.setNext(cursor.getNext());
            this.quantidade--;
        }
    }

    @Override
    public ITAD getItem(int posicao) {
        if (posicao >= 1 && posicao <= this.quantidade) {
            BeatrizGuerraElemento cursor = inicio;
            for (int i = 1; i < posicao; i++) {
                cursor = cursor.getNext();
            }
            return (ITAD) cursor.getTad();
        }
        return null;
    }

    @Override
	public String print() {
		String m = "[";
		BeatrizGuerraElemento cursor = this.inicio;

		for (int i = 0; i < this.quantidade; i++) {
			String a;
			if (i == this.quantidade-1) {
				a = "";
			} else {
				a = ", \n";
			}
			String tad = "{";
			tad += "Status: " + cursor.getTad().getString() + ", ";
			tad += "Altura: " + cursor.getTad().getDouble() + " m, ";
			tad += "Rizoma Horizontal: " + cursor.getTad().isBoolean() + "}" + a;
			m += tad;
			cursor = cursor.getNext();
		}
		
		return m+"]\n";
    }
}
