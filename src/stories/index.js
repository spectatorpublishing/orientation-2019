import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";
import SectionTitle from "../components/SectionTitle.jsx";
import MapsList from "../components/MapsList.jsx";

const sectionComponentDemo = {
  title: "demo title",
  members: ["name1, position1", "name2, position2", "name3, position3"]
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
  <SectionTitle
    title={sectionComponentDemo.title}
    members={sectionComponentDemo.members}
  />
));

const dataUrl = { name: "places to hang out", url: "/dummyurl" };
const rightData = [
  dataUrl,
  dataUrl,
  dataUrl,
  dataUrl,
  dataUrl,
  dataUrl,
  dataUrl
];
const leftData = [
  dataUrl,
  dataUrl,
  dataUrl,
  dataUrl,
  dataUrl,
  dataUrl,
  dataUrl
];
storiesOf("MapsList", module).add("default", () => (
  <MapsList rightList={rightData} leftList={leftData} />
));
