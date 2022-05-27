import { Meta } from "@storybook/react";
import Wrapper from "../../Wrapper";
import { Button, Stack, VStack } from "native-base";

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
