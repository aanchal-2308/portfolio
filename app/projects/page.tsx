import { projects } from "@/utils/constants";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

function Projects() {
  return (
    <div className="w-[80%] mx-auto text-white flex flex-col justify-center items-center text-center align-middle mt-4">
      <div className="flex items-center justify-between w-full mb-8">
        <h1 className="text-2xl text-gray-800 text-center font-mono flex-grow">
          Projects ({projects.length})
        </h1>
      </div>

      <div className="grid grid-cols-1 text-left md:grid-cols-2 gap-6 w-full mb-10">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="bg-white shadow-lg hover:shadow-xl transition-all "
          >
            <CardHeader>
              <CardTitle className="text-xl text-gray-700 font-bold">
                {project.title}
              </CardTitle>
              <CardDescription className="text-gray-600 mt-2">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    #{tag}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              {project?.link && (
                <Link href={project?.link || ""} target="_blank">
                  <Button variant="link" className="p-0 text-xs pl-1">
                    View Project <ArrowUpRightIcon className="w-4 h-4" />
                  </Button>
                </Link>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Projects;
