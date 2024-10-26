import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import MyFavouriteBorder from "../myfavouriteborder"; // importo mi componente MyFavouriteBorder
describe("MyFavouriteBorder component", () => {
    it("El componente myfavouriteborder se debería renderizar correctamente", () => {
        render(<MyFavouriteBorder  color={"info"} />);
        const myfavouriteborder = screen.getByRole("myfavouriteborder");
        expect(myfavouriteborder).toBeInTheDocument();
    });
});