package trabalho02;

public class BeatrizGuerraTAD implements ITAD {
	
	private String status = "saudavel";
	private double altura = 1;
	private boolean rizomaHorizontal = false;
	
	@Override
	public String getString() {
		return status;
	}
		
	@Override
	public void setString(String status) {
		this.status = status;
		
	}
	
	@Override
	public double getDouble() {
		return altura;
	}
	
	@Override
	public void setDouble(double altura) {
		this.altura = altura;
	}
	
	@Override
	public boolean isBoolean() {
		return this.rizomaHorizontal;
	}
	
	@Override
	public void setBoolean(boolean rizomaHorizontal) {
		this.rizomaHorizontal = rizomaHorizontal;
	}
	
	@Override
	public String print() {
		if (this.rizomaHorizontal == true) {
			return "Esta bromelia tem o status " +this.status + ", possui " + this.altura + " m de altura e apresenta rizoma horizontal.\n";
		}else {
			return "Esta bromelia tem o status " +this.status + ", possui " + this.altura + " m de altura e nao apresenta rizoma horizontal.\n";
		}	
	}
}
