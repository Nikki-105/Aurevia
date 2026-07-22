import db from "@/lib/db";
import ProjectsClient from "./ProjectsClient";

export default function ProjectsPage() {
  let projects = [];
  try {
    projects = db.prepare("SELECT * FROM projects ORDER BY created_at DESC").all();
  } catch(e) {
    console.error("Failed to fetch projects:", e);
  }

  return <ProjectsClient initialProjects={projects} />;
}
