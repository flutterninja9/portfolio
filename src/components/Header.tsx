import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b sticky top-0 z-10 backdrop-blur-md bg-white bg-opacity-30">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center md:justify-between">
        {/* Flex for mobile: Center items on small screens */}
        <div className="flex items-center space-x-2 md:justify-start justify-center w-full md:w-auto">
          <Avatar>
            <AvatarImage src="/placeholder.svg" alt="TFN" />
            <AvatarFallback>TFN</AvatarFallback>
          </Avatar>
          <span className="text-xl font-semibold text-black">The Flutter Ninja</span>
        </div>

        {/* GitHub and Contact buttons only visible on larger screens */}
        <nav className="hidden md:flex space-x-4">
          <Button variant="ghost" asChild>
            <Link href="https://github.com/flutterninja9" className="text-muted-foreground hover:text-foreground">
              GitHub
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="mailto:anirudh.singh91402@gmail.com" className="text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
