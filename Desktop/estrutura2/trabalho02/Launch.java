package trabalho02;

public class Launch {
	public static void main(String[] args) {
		BeatrizGuerraEstrutura listaEncadeada = new BeatrizGuerraEstrutura();
		
		BeatrizGuerraTAD t1 = new BeatrizGuerraTAD();
		t1.setString("nao saudavel");
		t1.setDouble(15);
		t1.setBoolean(true);
		System.out.println(t1.print());
		listaEncadeada.inserirNoInicio(t1);
		
		BeatrizGuerraTAD t2 = new BeatrizGuerraTAD();
		t2.setString("saudavel");
		t2.setDouble(20);
		t2.setBoolean(false);
		System.out.println(t2.print());
		listaEncadeada.inserirNoInicio(t2);
		
		BeatrizGuerraTAD t3 = new BeatrizGuerraTAD();
		t3.setString("saudavel");
		t3.setDouble(5);
		t3.setBoolean(false);
		System.out.println(t3.print());
		listaEncadeada.inserirNoMeio(t3,3);
		
		listaEncadeada.excluirNoMeio(2);
		
		System.out.println(listaEncadeada.print());
	}
}
