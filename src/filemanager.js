const fs = window.require("fs");
const path_module = window.require("path");
const { app } = window.require("electron").remote;
import { constants } from "./constants";
import markdownit from "markdown-it";
import renderMathInElement from "../node_modules/katex/contrib/auto-render/auto-render";
import { store } from "./store";

let addFile = function(path, fileType, name) {
  let ID = Date.now();
  let dir = path_module.join(
    app.getPath("userData"),
    "data",
    fileType,
    String(ID)
  );

  fs.mkdirSync(dir);

  if (fileType === "html") {
    handleHTML(path, ID, dir);
  } else if (fileType === "url") {
    handleURL(path, ID, dir);
  } else if (fileType === "md") {
    handleMD(path, ID, name, dir);
  } else if (constants.LOCAL_MEDIA_FILES.includes(fileType)) {
    handleLocalMedia(path, ID, dir, fileType);
  }

  return { ID, dir };
};

let removeFile = function(path) {
  fs.rmdirSync(path, { recursive: true });
};

let removeMedia = function(id) {
  fs.rmdirSync(
    path_module.join(app.getPath("userData"), "data", "media", "" + id),
    { recursive: true }
  );
  console.log(
    path_module.join(app.getPath("userData"), "data", "media", "" + id)
  );
};

let mkmediadir = function(id) {
  fs.mkdirSync(
    path_module.join(app.getPath("userData"), "data", "media", "" + id)
  );
};

let write = function(path, objects) {
  fs.writeFileSync(path, objects);
};

let read = function(path) {
  return fs.existsSync(path) ? fs.readFileSync(path, "utf-8") : "";
};

let getDirs = function(path) {
  return fs.readdirSync(path);
};

let handleHTML = function(path, ID, dir) {
  if (fs.existsSync(path)) {
    fs.copyFileSync(path, path_module.join(dir, ID + ".html"));
  } else {
    let htmlString = path;
    write(path_module.join(dir, ID + ".html"), htmlString);
  }
};

let handleLocalMedia = function(path, ID, dir, fileType) {
  let newPath = path_module.join(dir, ID + "." + fileType);
  fs.copyFileSync(path, newPath);
};

let handleURL = function(URL, ID, dir) {
  write(path_module.join(dir, ID + ".url"), URL);
};

let handleMD = function(path, ID, name, dir) {
  let newPath = path_module.join(dir, ID + ".md");
  // md is drawn on this div with display: none and the html is extracted and saved
  // to reduce render time later
  let renderDiv = document.getElementById("md-container");
  renderDiv.innerHTML =
    "# <u>" + name + "</u>\n" + cleanTextForKaTeX(read(path));

  renderMathInElement(renderDiv, {
    delimiters: store.getters.getMarkdownMathDelimiters,
    throwOnError: false,
  });
  let MDit = createMDObj(ID);
  let text = cleanTextForMarkdown(renderDiv.innerHTML);
  renderDiv.innerHTML = "";
  let markdown = MDit.md.render(text).replace(/&lt;\/span&gt;/gi, "\\");

  write(newPath, markdown);
};

let createMDObj = function(ID) {
  const baseUrl = path_module.join(
    app.getPath("userData"),
    "data",
    "media",
    "" + ID
  );
  let md = new markdownit({ typographer: true, html: true });
  md.core.ruler.push("baseurl", (state) => {
    function rewrite(tokens) {
      for (const token of tokens) {
        if (token.type === "image") {
          for (const attr of token.attrs) {
            if (attr[0] === "src") {
              attr[1] = baseUrl + "/" + attr[1];
            }
          }
        }
        if (token.children !== null) {
          rewrite(token.children);
        }
      }
    }
    rewrite(state.tokens);
  });
  return {
    md: md,
    media_path: baseUrl,
  };
};

let cleanTextForKaTeX = function(str) {
  str = str.replace(/<[/]?pre>/gi, "");
  str = str.replace(/<br\s*[/]?>/gi, "\n");
  str = str.replace(/<div>/gi, "\n");
  // Thanks Graham A!
  str = str.replace(/<[/]?span[^>]*>/gi, "");
  str.replace(/<\/div>/g, "\n");
  return cleanTextForMarkdown(str);
};

let cleanTextForMarkdown = function(str) {
  str = str.replace(/&nbsp;/gi, " ");
  str = str.replace(/&tab;/gi, "	");
  str = str.replace(/&gt;/gi, ">");
  str = str.replace(/&lt;/gi, "<");
  return str.replace(/&amp;/gi, "&");
};

let isAllowedFile = function(fileType) {
  return constants.ALLOWED_FILES.includes(fileType);
};

let storeSettings = function() {
  let settingsJSON = "";
  constants.SETTINGS_TO_SAVE.forEach((setting) => {
    settingsJSON += "\n" + JSON.stringify(store.getters[setting.getter]);
  });
  write(
    path_module.join(app.getPath("userData"), "data", "settings"),
    settingsJSON.substring(1)
  );
};

let loadSettings = function() {
  let settings = read(
    path_module.join(app.getPath("userData"), "data", "settings")
  );
  if (settings) {
    settings = settings.split("\n");
    settings = settings.map((setting) => JSON.parse(setting));
    let settingIndex = 0;
    constants.SETTINGS_TO_SAVE.forEach((setting) => {
      store.commit(setting.mutation, settings[settingIndex]);
      settingIndex++;
    });
  }
};

export {
  isAllowedFile,
  addFile,
  removeFile,
  write,
  read,
  getDirs,
  storeSettings,
  loadSettings,
  createMDObj,
  removeMedia,
  mkmediadir,
  cleanTextForKaTeX,
  cleanTextForMarkdown,
};
