import { write, read, getDirs } from "./filemanager";
import { constants } from "./constants";
const fs = window.require("fs");
const { app } = window.require("electron").remote;
const path = window.require("path");

let DATES_PATH = path.join(app.getPath("userData"), "data", "stats", "dates");

let createStatsObj = function(
  totalTime,
  timeSkipped,
  itemsAdded,
  itemsRemoved,
  ItemsSeen,
  itemsFinished
) {
  return [
    {
      statID: "totalTime",
      statName: "Total Time spend learning",
      val: totalTime,
    },
    {
      statID: "timeSkipped",
      statName: "Total Time skipped",
      val: timeSkipped,
    },
    {
      statID: "itemsAdded",
      statName: "Items Added",
      val: itemsAdded,
    },
    {
      statID: "itemsRemoved",
      statName: "Items Removed",
      val: itemsRemoved,
    },
    {
      statID: "ItemsSeen",
      statName: "Items Seen",
      val: ItemsSeen,
    },
    {
      statID: "ItemsFinished",
      statName: "Items Finished",
      val: itemsFinished,
    },
  ];
};

let writeStats = function(stats, date) {
  let statsStr = stringifyStats(stats);

  write(DATES_PATH + "/" + date, statsStr);
};

let stringifyStats = function(stats) {
  let statsStr = "";
  stats.forEach((category) => {
    statsStr += "\n" + JSON.stringify(category);
  });
  return statsStr.substring(1);
};

let getStats = function(date) {
  let statsStr, stats;
  if (fs.existsSync(DATES_PATH + "/" + date)) {
    statsStr = read(DATES_PATH + "/" + date);
  } else {
    statsStr = stringifyStats(createStatsObj(0, 0, 0, 0, 0, 0));
  }
  let statsStrSplit = statsStr.split("\n");
  stats = statsStrSplit.map((category) => JSON.parse(category));

  return stats;
};

let stringToStats = function(string) {
  let stringSplit = string.split("\n");
  return stringSplit.map((category) => JSON.parse(category));
};

let getAllSavedDates = function() {
  return new Promise((resolve) => {
    let savedStatsPaths = getDirs(DATES_PATH);
    let dates = savedStatsPaths.map((path) => {
      let pathDateArr = path.split("_");
      let pathDateArrInt = pathDateArr.map((str) => parseInt(str));
      let [day, month, year] = pathDateArrInt;
      return new Date(year, month - 1, day, 23, 59, 59, 59);
    });
    resolve(dates);
  });
};

let fillDatesUpTo = function(dates) {
  let firstDate = new Date(Math.min(...dates));
  let lastDate = new Date(Math.max(...dates));

  let datePath, emptyStats;
  for (let day = firstDate; day < lastDate; day.setDate(day.getDate() + 1)) {
    datePath = DATES_PATH + "/" + dateToPath(day);
    if (!fs.existsSync(datePath)) {
      emptyStats = createStatsObj(0, 0, 0, 0, 0, 0);
      write(datePath, stringifyStats(emptyStats));
      dates.push(new Date(day));
    }
  }
  return dates;
};

let getAverage = function(callback, dates, interval) {
  let today = new Date();
  let todayPath = dateToPath(today);

  let allStats = [];
  for (let i = 0; i < dates.length; i++) {
    let currPath = dateToPath(dates[i]);
    if (
      today - dates[i] < constants.TIME_RESOLVER[interval].ms &&
      todayPath !== currPath
    ) {
      fs.readFile(DATES_PATH + "/" + currPath, "utf-8", (err, data) => {
        if (err) callback(createStatsObj(0, 0, 0, 0, 0, 0));
        else {
          allStats.push(stringToStats(data));
          if (
            allStats.length ===
            Math.min(constants.TIME_RESOLVER[interval].days, dates.length - 1)
          ) {
            callback(getStatsArrAverage(allStats));
          }
        }
      });
    }
  }
};

let getStatsArrAverage = function(statsArr) {
  let n = statsArr.length;
  let sumTotalTime = 0;
  let sumTimeSkipped = 0;
  let sumItemsAdded = 0;
  let sumItemsRemoved = 0;
  let sumItemsSeen = 0;
  let sumItemsFinished = 0;

  for (let stats of statsArr) {
    sumTotalTime += stats[0].val;
    sumTimeSkipped += stats[1].val;
    sumItemsAdded += stats[2].val;
    sumItemsRemoved += stats[3].val;
    sumItemsSeen += stats[4].val;
    sumItemsFinished += stats[5].val;
  }

  return createStatsObj(
    Math.floor(sumTotalTime / n),
    Math.floor(sumTimeSkipped / n),
    Math.floor(sumItemsAdded / n),
    Math.floor(sumItemsRemoved / n),
    Math.floor(sumItemsSeen / n),
    Math.floor(sumItemsFinished / n)
  );
};

let dateToPath = function(date) {
  return `${date.getDate()}_${date.getMonth() + 1}_${date.getFullYear()}`;
};

export {
  getAverage,
  getAllSavedDates,
  createStatsObj,
  getStats,
  writeStats,
  fillDatesUpTo,
  dateToPath,
};
