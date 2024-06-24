import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
public class ListadoPersonasApp {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        List<Persona> personas = new ArrayList<>();
        //empezar menu
        var salir = false;
        while (!salir) {
            mostrarMenu();
            try{
                salir = ejecutarOperacion(entrada, personas);
            }catch (Exception e){
                System.out.println("Ocurrio un error: " + e.getMessage());
            }
            System.out.println();
        }
    }

    private static void mostrarMenu() {
        System.out.print("""
            ****** Lista de Personas ******
            1. Agregar
            2. Listar
            3. Salir
            """);
        System.out.print("Digite una de las  opciones: ");
    }
    private static boolean ejecutarOperacion(Scanner entrada, List<Persona> personas) {
        var opcion = Integer.parseInt(entrada.nextLine());
        switch (opcion) {
            case 1 -> {
                System.out.print("Digite el nombre: ");
                var nombre = entrada.nextLine();
                System.out.print("Digite el telefono: ");
                var tel = entrada.nextLine();
                System.out.print("Digite el email: ");
                var email = entrada.nextLine();
                var persona = new Persona(nombre, tel, email);
                personas.add(persona);
                System.out.println("La lista tiene " + personas.size() + " personas");
            }
            case 2 -> {
                System.out.println("Listado de personas");
                //personas.forEach((persona) -> System.out.println(persona));
                personas.forEach(System.out::println);
            }
            case 3 -> {
                System.out.println("Hasta pronto...");
                return true;
            }
            default -> System.out.println("Opcion incorrecta"+opcion);
        }
        return false;
    }

}