import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Project = {
  name: string;
  description: string;
  image: string;
  link: string;
}

export type TimelineCard = {
  title: string;
  period: string;
  description: string;
}