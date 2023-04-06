
public class User {
    String name;
    String age;
    String phone;
    Address address;

    User(UserBuilder builder) {
        this.name = builder.name;
        this.age = builder.age;
        this.phone = builder.phone;
        this.address = builder.address;
    }

    public String getName() {
        return name;
    }

    public String getAge() {
        return age;
    }

    public String getPhone() {
        return phone;
    }

    public Address getAddress() {
        return address;
    }

    @Override
    public String toString() {
        return "User: " + this.name + ", " + this.age + ", " + this.phone + ", " + this.address;
    }
}
