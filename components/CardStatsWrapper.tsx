import { GetFormStats } from "@/actions/form";
import React from "react";
import StatsCards from "./StatsCards";

const CardStatsWrapper = async () => {
  const stats = await GetFormStats();

  return <StatsCards loading={false} data={stats} />;
};

export default CardStatsWrapper;
