import React from "react";

export type ExtractProps<C> =
  C extends React.LazyExoticComponent<React.FC<infer P>> ? P : never;

export const componentMap = {
  Text: React.lazy(() => import("./Text/Text.js")),
  Button: React.lazy(() => import("./Button/Button.js")),
  Image: React.lazy(() =>
    import("@mantine/core").then(({ Image }) => ({ default: Image })),
  ),
} as const;

export type ComponentMap = typeof componentMap;
export type Keys = keyof ComponentMap;
export type Column<T extends ComponentMap, K extends keyof T> = {
  component: K;
  data: ExtractProps<T[K]>;
  action?: unknown;
};

export type Row<T extends ComponentMap, K extends keyof T> = Array<
  Column<T, K>
>;

export type Canvas<
  T extends ComponentMap = ComponentMap,
  K extends keyof T = Keys,
> = Array<Row<T, K>>;

export const getComponent = <K extends Keys>(
  componentKey: K,
): ComponentMap[K] => componentMap[componentKey];

export type PropsForComponent<K extends Keys> = ExtractProps<ComponentMap[K]>;
export type ComponentWithProps<
  K extends Keys,
  P extends PropsForComponent<K>,
> = React.LazyExoticComponent<React.FC<P>>;
