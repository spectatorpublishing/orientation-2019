import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";
import SectionTitle from "../components/SectionTitle.jsx";
import BannerButton from "../components/BannerButton.jsx";


const sectionDemo = {
  title: "demo title",
  members: ["name1, position1", "name2, position2", "name3, position3"]
};

const bannerButtonDemo = {
  title: "demo title",
  url: "https://www.columbiaspectator.com"
};

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>😀 😎 👍 💯</Button>
  ));

storiesOf("Section", module).add("with member information", () => (
  <SectionTitle title={sectionDemo.title} members={sectionDemo.members} />
));

storiesOf("Banner Button", module).add("go to url in new tab on click", () => (
  <BannerButton title={bannerButtonDemo.title} url={bannerButtonDemo.url} /> 
));
