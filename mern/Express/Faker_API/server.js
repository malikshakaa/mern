
const express = require("express");

const  faker  = require("faker");
const app = express();
const port = 8000;
class Company{
    constructor(id,name, address){
        this.id=id;
        this.name=name;
        this.address=address;

    }
}

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


class User{
    constructor(id,firstName, lastName , phoneNumber,password,email){
        this.id=faker.datatype.uuid();
        this.firstName=faker.name.firstName();
        this.lastName=faker.name.lastName();
        this.phoneNumber= faker.phone.phoneNumber();
        this.password=faker.internet.password();
        this.email= faker.internet.email();
    }
}


const createCompany = () => {
    const newCompany = new Company(
        faker.datatype.uuid(),
        faker.company.companyName(),
        {
            street: faker.address.streetName(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        }
    );
    return newCompany;
};

app.get("/api/users/new", (req, res) => {
    const newFake=new User();
    res.json( newFake );
});

app.get("/api/companies/new", (req, res) => {
    const newCompany=createCompany();
    res.json( newCompany );
});
app.get("/api/user/company", (req, res) => {
    const newCompany=createCompany();
    const newFake=new User();
    const arr=[newCompany,newFake]
    res.json( arr  );
});
app.listen( port, () => console.log(`Listening on port: ${port}`) );