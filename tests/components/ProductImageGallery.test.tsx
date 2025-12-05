import ProductImageGallery from "../../src/components/ProductImageGallery";
import { render, screen } from "@testing-library/react";

describe("ProductImageGallery", () => {
  it("should render without img urls", () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);
    expect(container).toBeEmptyDOMElement();
  });
  it("should render a list of images", () => {
    const urls = ["url1", "url2", "url3"];
    render(<ProductImageGallery imageUrls={urls} />);

    const images = screen.getAllByRole("img");

    urls.forEach((url, index) => {
      expect(images[index]).toHaveAttribute("src", url);
    });
  });
});
