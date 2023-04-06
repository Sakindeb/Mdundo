public class Main {
    public static void main(String[] args) {
        User user = new UserBuilder("Max")
                .setAge("25 Years Old")
                .setPhone("0720364510")
                .setAddress(new Address("Main"))
                .build();
        System.out.println(user);
    }
}
