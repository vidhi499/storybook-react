import { Meta } from "@storybook/react";
import { Example as WithRef } from "./WithRef";
import { Example as Sizes } from "./sizes";
import { Example as Basic } from "./basic";
import { Example as Variants } from "./variants";
import { Example as Loading } from "./loading";
import { Example as Icons } from "./icons";
import { Example as Composition } from "./Composition";
import Wrapper from "../../Wrapper";

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

export { Sizes, Basic, WithRef, Variants, Loading, Icons, Composition };
