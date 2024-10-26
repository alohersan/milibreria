import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import MyFavourite from "../myfavourite"; // importo mi componente MyButton
describe("MyFavourite component", () => {
    it("El componente myfavourite se debería renderizar correctamente", () => {
        render(<MyFavourite  color={"info"} />);
        const myfavourite = screen.getByRole("myfavourite");
        expect(myfavourite).toBeInTheDocument();
    });
});