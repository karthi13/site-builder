import { AppShell, Burger, Grid } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Navbar from "./navbar/Navbar";
import Header from "./header/Header";
import { Canvas, ComponentWithProps, getComponent, PropsForComponent } from './components/componentMap';

const struct = {
  "canvas": [
    [ // Row 
      { component: "Text", data: { "text": "Hello world" } }, // Column 
      { component: "Button", data: { "label": "Hello" }, action: { "name": "UpdateList" } },
    ],
  ],
} satisfies { canvas: Canvas }

const Builder = () => {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Header />
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Navbar />
      </AppShell.Navbar>

      <AppShell.Main>
        <Grid grow>
          {struct.canvas.map((row) => {
            return row.map((col) => {
              type Props = PropsForComponent<typeof col.component>;
              const Component = getComponent(col.component) as ComponentWithProps<typeof col.component, Props>;

              if (!Component) {
                return <Grid.Col span={4}>Error: No component found. Tried to find {col.component}</Grid.Col>
              }

              return <Grid.Col span={4}><Component {...col.data as Props} /></Grid.Col>
            })
          })}
        </Grid>
      </AppShell.Main>

      <AppShell.Aside>Aside</AppShell.Aside>
    </AppShell >
  );
};

export default Builder;
