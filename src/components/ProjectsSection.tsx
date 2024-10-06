import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getProjects } from '@/lib/firebase';
import { ExternalLink, Github } from "lucide-react";
import Image from 'next/image';

export default async function ProjectsSection() {
  const projects = await getProjects();

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">My Projects</h2>
      <div className="space-y-8">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden p-2 h-[400px]">
            <div className="md:flex h-full">
              <div className="md:w-1/3 relative h-full">
                {/* Aspect Ratio Wrapper */}
                <div className="relative w-full h-full aspect-[3/2]"> {/* Adjust aspect ratio as needed */}
                  <Image
                    src={project.screenShotUrl}
                    alt={`${project.name} screenshot`}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-md"
                  />
                </div>
              </div>
              <div className="md:w-2/3 p-6 flex flex-col justify-start">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl">{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground mb-0">
                    {project.longDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-0 pt-4 flex justify-start space-x-4">
                  <Button variant="outline" asChild>
                    <a href={project.deployedLink}>
                      Live Demo
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild>
                    <a href={project.gitHubLink}>
                      GitHub
                      <Github className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
