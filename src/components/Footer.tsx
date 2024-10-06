import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted py-12 mt-12">
      <div className="container mx-auto px-4 lg:max-w-[768px]">
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        <div className="flex justify-center space-x-6">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.linkedin.com/in/anirudh-singh-10b497156/" className="hover:text-primary"><Linkedin size={24} /></a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:anirudh.singh91402@gmail.com" className="hover:text-primary"><Mail size={24} /></a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/flutterninja9" className="hover:text-primary"><Github size={24} /></a>
          </Button>
        </div>
      </div>
    </footer>
  )
}