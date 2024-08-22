package UTN;
public class Main {
    public static void main(String[] args) {
        var conexion = UTN.coneccion.conexion.getConexion();
        if (conexion != null) {
            System.out.println("Coneccion exitosa" + conexion);
        } else {
            System.out.println("Error en la coneccion");
        }
    }
}