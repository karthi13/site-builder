import {
  IconArrowBackUp,
  IconArrowForwardUp,
  IconSun,
  IconMoonStars,
  IconDeviceImac,
  IconDeviceIpad,
  IconDeviceMobile,
} from "@tabler/icons-react";
import {
  ActionIcon,
  Box,
  Button,
  Divider,
  Group,
  rem,
  Switch,
  useMantineTheme,
} from "@mantine/core";
import ReactLogo from "@/assets/react.svg";
import classes from "./Header.module.css";
import PublishButton from "./PublishButton";

export default function Header() {
  const theme = useMantineTheme();
  const sunIcon = (
    <IconSun
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.yellow[4]}
    />
  );

  const moonIcon = (
    <IconMoonStars
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.blue[6]}
    />
  );

  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <img src={ReactLogo} alt="React logo" />

          <Group>
            <Group>
              <Switch
                size="md"
                color="dark.4"
                onLabel={sunIcon}
                offLabel={moonIcon}
              />
            </Group>
            <Divider orientation="vertical" />
            <Group>
              <IconDeviceImac />
              <IconDeviceIpad />
              <IconDeviceMobile />
            </Group>
            <Divider orientation="vertical" />
            <Group>
              <ActionIcon size={24} aria-label="undo the previous step">
                <IconArrowBackUp style={{ width: rem(16), height: rem(16) }} />
              </ActionIcon>
              <ActionIcon size={24} aria-label="redo the previous step">
                <IconArrowForwardUp
                  style={{ width: rem(16), height: rem(16) }}
                />
              </ActionIcon>
            </Group>
            <Divider orientation="vertical" />
            <Group visibleFrom="sm">
              <Button variant="default">Cancel</Button>
              <PublishButton />
            </Group>
          </Group>
        </Group>
      </header>
    </Box>
  );
}
