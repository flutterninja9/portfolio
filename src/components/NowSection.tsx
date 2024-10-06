import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getUserData } from '@/lib/firebase'
import { Briefcase, Clock, Headphones, Home } from "lucide-react"

export default async function NowSection() {
  const user = await getUserData()

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>What I&apos;m Doing Now</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          <li className="flex items-center">
            <Home className="mr-2 text-primary" size={20} />
            <span>Living in {user.city}</span>
          </li>
          <li className="flex items-center">
            <Briefcase className="mr-2 text-primary" size={20} />
            <span>Working for {user.workingFor}</span>
          </li>
          <li className="flex items-center">
            <Clock className="mr-2 text-primary" size={20} />
            <span>Developing {user.activeProject}</span>
          </li>
          <li className="flex items-center">
            <Headphones className="mr-2 text-primary" size={20} />
            <span>Get my favourites <a href={user.spotifyPlaylist} className="text-primary hover:underline">here</a></span>
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}
