export interface User {
    name: string
    imageUrl: string
    bio: string
    longBio: string
    city: string
    workingFor: string
    activeProject: string
    spotifyPlaylist: string
  }
  
  export interface Project {
    id: string
    name: string
    description: string
    longDescription: string
    screenShotUrl: string
    tags: string[]
    deployedLink: string
    gitHubLink: string
  }
  
  export interface Tool {
    id: string
    name: string
    color: string
    labelColor: string
  }