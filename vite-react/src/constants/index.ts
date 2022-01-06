export const PERIOD = {
  MONTH: "month",
  HALF_YEAR: "halfYear",
  YEAR: "year",
  ALL: "all",
};

export const periodMap = {
  [PERIOD.MONTH]: {
    from: "2020-03-01T00:00:00Z",
    to: "2020-04-01T00:00:00Z",
  },
  [PERIOD.HALF_YEAR]: {
    from: "2020-03-01T00:00:00Z",
    to: "2020-09-01T00:00:00Z",
  },
  [PERIOD.YEAR]: { from: "2020-03-01T00:00:00Z", to: "2021-03-01T00:00:00Z" },
  [PERIOD.ALL]: { from: "2020-03-01T00:00:00Z", to: "2021-12-28T00:00:00Z" },
};
