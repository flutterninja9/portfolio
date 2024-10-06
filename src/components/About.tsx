import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getUserData } from '@/lib/firebase'

export default async function About() {
  const user = await getUserData()

  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
          <Avatar className="w-24 h-24">
            <AvatarImage src={user.imageUrl} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-3xl text-center sm:text-left">Hi! My name is {user.name}</CardTitle>
            <CardDescription className="mt-2 text-center sm:text-left">{user.bio}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{user.longBio}</p>
      </CardContent>
    </Card>
  )
}