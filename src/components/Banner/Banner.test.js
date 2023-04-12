import {render, screen} from "@testing-library/react"
import Banner from "./Banner"

describe("Banner Component", (() => {
    it("should render Banner component correctly", () => {
        render(<Banner />)
        const element = screen.getById("bannerContainer")
        expect(element).toBeInTheDocument()
    })
}))