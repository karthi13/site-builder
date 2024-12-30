import { useState } from "react";
import {
  IconChevronRight,
  IconIcons,
  IconLetterCase,
  IconLink,
  IconMap,
  IconPhoto,
  IconRectangle,
  IconSection,
  IconSeparator,
  IconTextGrammar,
  IconTextResize,
  IconVideo,
} from "@tabler/icons-react";
import {
  Box,
  Collapse,
  SimpleGrid,
  Group,
  UnstyledButton,
  Flex,
} from "@mantine/core";
import classes from "./Navbar.module.css";

interface EntityGroupProps {
  label: string;
  initiallyOpened?: boolean;
  entity?: { label: string; icon: React.FC<any> }[];
}

export function LinksGroup({
  label,
  initiallyOpened,
  entity,
}: EntityGroupProps) {
  const hasLinks = Array.isArray(entity);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const items = (hasLinks ? entity : []).map((entity) => {
    const Icon = entity.icon;
    return (
      <Flex align="center" justify="center" p={8} bd={"dotted"}>
        <Icon size={32} />
      </Flex>
    );
  });

  return (
    <>
      <UnstyledButton
        onClick={() => setOpened((o) => !o)}
        className={classes.control}
      >
        <Group justify="space-between" gap={0} mb={"10px"}>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box ml="md">{label}</Box>
          </Box>
          {hasLinks && (
            <IconChevronRight
              className={classes.chevron}
              stroke={1.5}
              size={16}
              style={{ transform: opened ? "rotate(-90deg)" : "none" }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? (
        <Collapse in={opened}>
          <SimpleGrid cols={2} verticalSpacing="lg">
            {items}
          </SimpleGrid>
        </Collapse>
      ) : null}
    </>
  );
}

const mockdata = {
  label: "Basic",
  initiallyOpened: true,
  entity: [
    {
      label: "Text",
      icon: IconTextGrammar,
    },
    {
      label: "Button",
      icon: IconRectangle,
    },
    {
      label: "Image",
      icon: IconPhoto,
    },
    {
      label: "Video",
      icon: IconVideo,
    },
    {
      label: "Image",
      icon: IconLink,
    },
    {
      label: "Map",
      icon: IconMap,
    },
    {
      label: "Image",
      icon: IconIcons,
    },
    {
      label: "TextArea",
      icon: IconTextResize,
    },
    {
      label: "Divider",
      icon: IconSeparator,
    },
  ],
};

export default function Navbar() {
  return (
    <>
      <LinksGroup {...mockdata} />
    </>
  );
}
