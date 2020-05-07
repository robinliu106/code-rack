const add = (a, b) => a + b;
const generateGreeting = (name = "Anonymous") => `Hello ${name}!`;

test("Should add two numbers", () => {
    const result = add(3, 4);

    expect(result).toBe(7);
});

test("Should greet name", () => {
    const greeting = generateGreeting("Robin");
    expect(greeting).toBe("Hello Robin!");
});

test("Should generate greeting for no name", () => {
    const greeting = generateGreeting();
    expect(greeting).toBe("Hello Anonymous!");
});
//yarn test -- --watch
