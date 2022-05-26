import { Meta } from "@storybook/react";
import Wrapper from "../../Wrapper";
import { Button } from "native-base";

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
