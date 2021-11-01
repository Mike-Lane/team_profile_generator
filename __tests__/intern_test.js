const intern = require("../lib/intern")

test("can get the intern object", () => {
    const eng = new intern();
    expect(typeof(eng)).toBe("object");
});

test("can get the role of the intern", () => {
    const engRole = "Intern";
    const eng = new intern();
    expect(eng.get_role()).toBe(engRole);
});