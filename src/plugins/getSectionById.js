import sections from "../store/fire-store/sections.json";

export default function(id) {
  return sections.find(x => x.id === id) || { name: "" };
}
