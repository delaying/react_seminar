import { configure } from "@storybook/react";

function loadStories() {
  require("../src/04/stories/InputStory");
}

configure(loadStories, module);
