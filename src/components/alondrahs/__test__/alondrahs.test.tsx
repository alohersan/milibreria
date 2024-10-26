import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import AlondraHS from "../alondrahs"; // importo mi componente AlondraHS
describe("AlondraHS component", () => {
    it("El snakcbar se debería renderizar correctamente", () => {
        render(<AlondraHS message='Snackbar personalizao' messagecolor='white' color='green' icon='happy'/>);
        const alondrahs = screen.getByRole("snackbar");
        expect(alondrahs).toBeInTheDocument();
    });
});