import { Project, Tool, User } from '@/types'
import { initializeApp } from 'firebase/app'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCdPnIng9UipvIFD1JWD03XHJHwZJBuaDk",
    authDomain: "the-flutter-ninja.firebaseapp.com",
    projectId: "the-flutter-ninja",
    storageBucket: "the-flutter-ninja.appspot.com",
    messagingSenderId: "995856575892",
    appId: "1:995856575892:web:a416f1bb9165c156197381",
    measurementId: "G-3N6LKD2BRQ"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export async function getUserData(): Promise<User> {
  const userSnapshot = await getDocs(collection(db, 'user'))
  const data = userSnapshot.docs[0].data()

    return {
        name: data.name,
        bio: data.bio,
        longBio: data.longBio,
        imageUrl: data.imageUrl,
        city: data.city,
        workingFor: data.workingFor,
        activeProject: data.activeProject,
        spotifyPlaylist: data.spotifyPlaylist
    }
}

export async function getProjects(): Promise<Project[]> {
  const projectsSnapshot = await getDocs(collection(db, 'projects'))
  return projectsSnapshot.docs.map(doc => {
    const data = doc.data()
    return {
      id: doc.id,
      name: data.name,
      description: data.description,
      longDescription: data.longDescription,
      screenShotUrl: data.screenShotUrl,
      tags: data.tags,
      deployedLink: data.deployedLink,
      gitHubLink: data.gitHubLink
    }
  })
}

export async function getTools(): Promise<Tool[]> {
  const toolsSnapshot = await getDocs(collection(db, 'tools'))

  return toolsSnapshot.docs.map(doc => {
    const data = doc.data()

    return {
      id: doc.id,
      name: data.name,
      color: data.color,
      labelColor: data.labelColor
    }
  })
}