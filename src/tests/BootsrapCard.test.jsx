import { render, screen  } from "@testing-library/react";
import SingleBooks from "../components/SignleBooks";
import BookList from "../components/BookList";
import fantasy from "../books/fantasy.json";


describe("let's see if there are as many bootstrap cards as json books", ()=> {
it("mount the correct card bootstrap", () => {
    render(<BookList books={fantasy}/>);

    const books = screen.queryAllByTestId("card");

    expect(books).toHaveLength(fantasy.length)
})
});