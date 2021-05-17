import {
  addFile,
  removeFile,
  write,
  read,
  removeMedia,
  mkmediadir,
} from "./filemanager";
import { constants } from "./constants";
const path = window.require("path");
const { app } = window.require("electron").remote;
const PATH = path.join(app.getPath("userData", "data")) + "library";

// Adds file to queue object, to queue file and all necessary files to data folder
let addToQueue = function(queue, item, store) {
  let { path, name, fileType, mode, priority, interval } = item;
  let { ID, dir } = addFile(path, fileType, name, store);
  let position = [0, 0];

  if (constants.LOCAL_MEDIA_FILES.includes(fileType)) {
    dir = "file:///" + dir;
    if (fileType !== "pdf") {
      position = 0;
    }
  }

  mkmediadir(ID);

  let obj = {
    ID: ID,
    name: name,
    dir: dir,
    fileType: fileType,
    mode: mode,
    priority: priority,
    interval: interval,
    value: 0,
    nr_notes: 0,
    position: position,
    added_on: new Date(),
    times_seen: 0,
    finished: false,
    mediaCount: 0,
  };

  queue.push(obj);
  writeLibraryToMemory(queue);

  return queue;
};

// Removes file from queue object, from queue file and from data folder
let removeFromQueue = function(queue, item) {
  queue = queue.filter((i) => !equals(i, item));

  writeLibraryToMemory(queue);

  let dir = constants.LOCAL_MEDIA_FILES.includes(item.fileType)
    ? item.dir.substring(8)
    : item.dir;
  removeFile(dir);

  removeMedia(item.ID);

  return queue;
};

let stringifyQueue = function(queue) {
  let queueStr = "";
  for (let i = 0; i < queue.length; i++) {
    queueStr += queueStr === "" ? "" : "\n";
    queueStr += JSON.stringify(queue[i]);
  }
  return queueStr;
};

let getLibraryFromMemory = function() {
  let allItems = read(PATH).split("\n");
  let library = [];

  if (allItems[0] !== "") {
    library = allItems.map((item) => JSON.parse(item));
  }
  return library;
};

let compareDates = function(due_on, today) {
  let due_on_date = new Date(due_on);
  let today_date = new Date(today);
  let formated_due_on = new Date(
    due_on_date.getFullYear(),
    due_on_date.getMonth() + 1,
    due_on_date.getDate()
  );
  let formated_today = new Date(
    today_date.getFullYear(),
    today_date.getMonth() + 1,
    today_date.getDate()
  );
  return formated_due_on - formated_today;
};

let writeLibraryToMemory = function(queue) {
  let queueStr = stringifyQueue(queue);
  write(PATH, queueStr);
};

function compareDsc(a, b) {
  return b.value - a.value;
}

function equals(a, b) {
  for (let key in a) {
    if (a[key] !== b[key]) return false;
  }
  return true;
}

export {
  addToQueue,
  getLibraryFromMemory,
  removeFromQueue,
  compareDsc,
  writeLibraryToMemory,
  compareDates,
  equals,
};
