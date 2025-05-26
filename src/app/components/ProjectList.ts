interface Project {
  id: number;
  url: string;
  image: string;
  stack: string[];
}
 
export const projects: Project[] =  [
  { id: 1, url: 'https://github.com/np646/EIIASGD', image: '/assets/EIIASGD.jpg', stack: ['PHP','Laravel', 'Vue', 'MySQL'] },
  { id: 2, url: 'https://github.com/AppTito/bai', image: '/assets/BAI.jpg', stack: ['PHP','Laravel', 'React', 'MySQL'] },
  { id: 3, url: 'https://github.com/np646/INVENTEC', image: '/assets/INVENTEC.jpg', stack: ['PHP', 'CodeIgniter', 'Bootstrap', 'MySQL'] },
  { id: 4, url: 'https://github.com/np646/Sistema_de_Acumulacion_de_Costos', image: '/assets/SAC.jpg', stack: ['C#', 'ASP.NET', 'Bootstrap', 'MySQL'] },
  { id: 5, url: 'https://github.com/np646/3DUCAR', image: '/assets/3DUCAR.jpg', stack: ['C#', 'Unity', 'Blender', 'Figma'] },
  { id: 6, url: 'https://github.com/np646/Terminal-News', image: '/assets/Terminal-News.jpg', stack: ['Python'] },
];