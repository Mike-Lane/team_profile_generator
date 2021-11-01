const engineer = require("./engineer");

test("can get the engineer object", () => {
    const eng = new engineer();
    expect(typeof(eng)).toBe("object");
});

test("can get the git hub of the enigneer", () => {
    const engGitID = "newGitName";
    const eng = new engineer("Mike", 134, "test@aol.com", engGitID);
    expect(eng.github).toBe(engGitID);
});

test("can get the role of the engineer", () => {
    const engRole = "Engineer";
    const eng = new engineer();
    expect(eng.get_role()).toBe(engRole);
});