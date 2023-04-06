public class UserBuilder implements Builder {
    public String name;
    public String age;
    public String phone;
    public Address address;

    UserBuilder(String name) {
        this.name = name;
    }

    @Override
    public UserBuilder setAge(String age) {
        this.age = age;
        return this;
    }

    @Override
    public UserBuilder setPhone(String phone) {
        this.phone = phone;
        return this;
    }

    @Override
    public UserBuilder setAddress(Address address) {
        this.address = address;
        return this;
    }

    public User build() {
        User user = new User(this);
        return user;
    }

}