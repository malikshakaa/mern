
const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;


app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


const createUser = () => {
    const newFake = {
        password: faker.internet.password(),
        email: faker.internet.email(), 
        phoneNumber:faker.phone.phoneNumber(),
        lastName:faker.name.lastName(),
        firstName:faker.name.firstName(),
        userId: faker.datatype.uuid(),
    };
    return newFake;
};


const creatCompany = ()=>{
    const newFake = {
        id: faker.datatype.uuid(),
        name: faker.company.companyName(), 
        street:faker.address.street(),
        city:faker.address.cityName(),
        state:faker.address.state(),
        zipCode: faker.address.zipCode(),
        country:faker.address.county(),
    };
    return newFake;

}

app.get("/api/users/new", (req, res) => {
    const newuser = createUser();
    res.json( newuser );
});
app.get("/api/companies/new", (req, res) => {
    const newcompany = creatCompany();
    res.json( newcompany );
});