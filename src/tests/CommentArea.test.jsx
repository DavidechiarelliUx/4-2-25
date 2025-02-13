import { render, screen } from "@testing-library/react"
import CommentArea from "../components/CommentArea";
describe("look the component CommentArea", () => {

    it("mount commentArea of test", () => {
        render(<CommentArea/>);

        const h2 = screen.getByText("Sono Comment Area");

        expect(h2).toBeInTheDocument()
    })
})