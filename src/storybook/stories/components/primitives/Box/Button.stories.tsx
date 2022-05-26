import { Meta } from "@storybook/react";
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
