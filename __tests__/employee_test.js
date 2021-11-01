const employee = require("./employee");

test("Can create employee object", () => {
    const e = new employee();
    expect(typeof(e)).toBe("object");
});

test("Can get email for the employee", () => {
    const email = "test@aol.com";
    const e = new employee("Mike", 1, email);
    expect(e.email).toBe(email);

});

test("can set name of the employee", () => {
    const name = "Mike";
    const e = new employee(name);
    expect(e.name).toBe(name);
});

test("can set the id of an employee", () => {
    const empID = 1234;
    const e = new employee("Mike", empID);
    expect(e.id).toBe(empID);
});

test ("can get the role for employee", () => {
    const empRole = "Employee";
    const e = new employee();
    expect(e.get_role()).toBe(empRole);
});