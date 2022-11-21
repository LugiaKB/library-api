import BooksCreateService from "./BookCreateService";

// test("Create a book", async () => {
//     const testBook = {
//         title: "Testing",
//         genres: ["Tests", "Testing"],
//         author: "The Tester",
//         published: 2022,
//     };

//     const bookCreateService = new BooksCreateService();

//     const book = await bookCreateService.create(testBook);

//     expect({
//         title: book.title,
//         genres: book.genres,
//         author: book.author,
//         published: book.published,
//     }).toEqual(testBook);

//     expect(book.rented).toEqual(false);
// });

describe("#BookCreateService", () => {
    describe("Create new book", () => {
        it("When no 'rented' is specified, then the attribute is set to false", async () => {
            const book = await new BooksCreateService().create({
                title: "Testing",
                genres: ["Tests", "Testing"],
                author: "The Tester",
                published: 2022,
            });

            expect(book.rented).toEqual(false);
        });
    });
});
