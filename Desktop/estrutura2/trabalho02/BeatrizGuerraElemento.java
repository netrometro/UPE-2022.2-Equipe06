package trabalho02;

public class BeatrizGuerraElemento {
	
	private ITAD tad;
	private BeatrizGuerraElemento next;
	
	public BeatrizGuerraElemento(ITAD t1) {
		super();
		this.tad = t1;
	}
	
	public ITAD getTad() {
		return this.tad;
	}
	
	public void setTad(ITAD tad) {
		this.tad = tad;
	}
	
	public BeatrizGuerraElemento getNext() {
		return this.next;
	}
	
	public void setNext(BeatrizGuerraElemento next) {
		this.next = next;
	}
}
