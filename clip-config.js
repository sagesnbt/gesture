// clip-config.js
window.ANNOTATION_CLIPS = [
  {
    id: "clip_01",
    label: "Clip 1",
    src: "https://raw.githubusercontent.com/mariacmorais/gesture/main/clip_01.mp4",
    poster: "",
  },
  {
    id: "clip_02",
    label: "Clip 2",
    src: "https://raw.githubusercontent.com/mariacmorais/gesture/main/clip_02.mp4",
    poster: "",
  },
  {
    id: "clip_03",
    label: "Clip 3",
    src: "https://raw.githubusercontent.com/mariacmorais/gesture/main/clip_03.mp4",
    poster: "",
    prompt: "Please enter the gesture(s) you have identified from this clip.",
  },
];

window.ANNOTATION_SUBMISSION = {
  endpoint: "", // <-- submission endpoint here
  method: "POST",
  headers: {
    Accept: "application/json",
  },
  additionalFields: {
    studyId: "gesture-identification",
  },
  bodyWrapper: "annotation",
  csvMirror: {
    enabled: true,
    endpoint: "", // <-- CSV endpoint here
    method: "POST",
  },
};
