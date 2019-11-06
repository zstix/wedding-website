import * as React from "react";

export interface Page {
  title: string;
  path: string;
  component: React.FC;
  disabled: boolean;
}
