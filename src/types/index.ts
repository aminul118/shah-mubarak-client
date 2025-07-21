import React from "react";

export interface IChildren {
  children: React.ReactNode;
}

export type Params = {
  params: Promise<{ id: string }>;
};

export type MetaProps = {
  title: string;
  description: string;
  keywords: string;
  image?: string;
  path?: string;
};

export type Routes = {
  url: string;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
};
