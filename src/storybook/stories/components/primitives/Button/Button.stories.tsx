import { Meta } from "@storybook/react";
import { Example as WithRef } from "./WithRef";
import { Example as Sizes } from "./sizes";
import { Example as Basic } from "./basic";
import { Example as Variants } from "./variants";
import { Example as Loading } from "./loading";
import { Example as Icons } from "./icons";
import { Example as Composition } from "./Composition";
import Wrapper from "../../Wrapper";
// import ejs from "ejs";
import { ButtonTemplate } from "./template";
import { Box } from "native-base";
// console.log(ejs);
let colors = ["red", "green", "blue", "purple"];
function getRandomInt(max: any) {
  return Math.floor(Math.random() * max);
}
// console.log(
//   "here",
//   ejs.render('<%= people.join(", "); %>', { people: colors })
// );
// console.log(ejs.render(ButtonTemplate, { colors: colors }));

// let ejs = require("ejs");
// let jsx =require("@babel/core").transformSync("code", {
//   plugins: ["@babel/plugin-transform-react-jsx"],
// });
// console.log(
//   <div
//     //@ts-ignore
//     dangerouslySetInnerHTML={{
//       __html: ButtonTemplate.replace(
//         "/* addColorSchemeHere */",
//         '"' + colors[getRandomInt(colors.length)] + '"'
//       ),
//     }}
//   ></div>
// );

export default {
  title: "Components / Forms / Button",
  decorators: [
    (Story: any) => (
      <Wrapper>
        <Story name="default" />
      </Wrapper>
    ),
  ],
} as Meta;

export const TestButton = () => {
  return (
    <div
      //@ts-ignore
      dangerouslySetInnerHTML={{
        __html: ButtonTemplate.replace(
          "/* addColorSchemeHere */",
          '"' + colors[getRandomInt(colors.length)] + '"'
        ),
      }}
    ></div>
  );
};

export { Sizes, Basic, WithRef, Variants, Loading, Icons, Composition };
