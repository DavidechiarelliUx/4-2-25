import { render, screen } from "@testing-library/react"; //import del render - expect 
import Welcome from "../components/Welcome"; // import del componente 

describe("looks the welcome component in the page", () => {
    it("mount the component welcome of test ", () => {
        // 1- montiamo il componente 
        render(<Welcome/>);
        //debug 
        //2- cerchiamo l'elemento in base al suo contenuto
        const h1 = screen.getByRole("heading");
        //3 - con expect verifichiamo se l'elemento è montato correttamente
        expect(h1).toBeInTheDocument();
        //4 - avvia npm test e vedi se ti da pass o failed 
    })
})