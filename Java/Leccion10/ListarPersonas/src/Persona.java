public class Persona {
    private  int id;
    private  String nombre;
    private  String tel;
    private  String email;
    private static int numeroPersonas = 0;

    //constructor vacio
    public Persona(){
        this.id=++Persona.numeroPersonas;
    }
    //constructor con parametros
    public Persona(String nombre, String tel, String email){
        this();
        this.nombre = nombre;
        this.tel = tel;
        this.email = email;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "Persona{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", tel='" + tel + '\'' +
                ", email='" + email + '\'' +
                '}';
    }

    public static void main(String[] args) {
        Persona p1 = new Persona("Juan Perez", "123456789", "jPerez@mial.com");
        System.out.println(p1);
    }
}


