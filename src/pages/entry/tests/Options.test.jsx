import { render, screen } from "@testing-library/react";
import Options from "../Options";

test("displays image for each option from server", async () => {
  render(<Options optionType="scoops" />);

  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  const altText = scoopImages.map((elt) => {
    return elt.alt;
  });
  console.log("altText: ", altText);

  expect(altText).toStrictEqual(["Chocolate scoop", "Vanilla scoop"]);
});
