export const projects = [
  {
    id: 1,
    title: "kertu",
    description:
      "Modern web application designed for project management, task organization, and team collaboration. Made using Blazor. Uses Entity Framework Core and PostgreSQL",
    image: "/kertu.png",
    github: "https://github.com/Kertu-Team/Kertu",
  },
  {
    id: 2,
    title: "pomaCAD",
    description:
      "Standalone WPF+WinForms app for conversion and processing of data from the Leica 3D Disto measuring device to the Compass stair design software",
    image: "/pomacad.png",
    github: "",
    segments: [
      {
        id:1,
        title: "Technologies used:",
        description:
          "Written in C# using WPF and WinForms forms. Uses SharpGL to embed OpenGL inside canvas. App authenticates itself using REST API connection with server.",
        image: "/pomacad2.gif",
      },
    ],
  },
  {
    id: 3,
    title: "pomaManager",
    description:
      "ERP system created for a company producing stairs. Made using Blazor. Uses Entity Framework Core and MySQL",
    image: "/pomaManager.png",
    github: "",
    segments: [
      {
        id:1,
        title: "Features:",
        description:
          "+ Account management \r\n+ Work management \n+ Storing information about projects \n+ Production tracking \n+ Communication between employees \n+ Generating contracts and invoices",
        image: "/pomaManager2.png",
      },
      {
        id:2,
        title: "Technologies used:",
        description:
          "Backend written in c# using ASP.NET. Frontend - Blazor with Radzen libraries. Used DBMS is MySQL, and database connection is handled by Entity Framework Core, with code-first approach. ",
        image: "/pomaManager3.png",
      },
    ],
  },
  {
    id: 4,
    title: "[wip] gebe",
    description:
      "Simple Gameboy emulator written in c++ using raylib. Work in progress",
    image: "/gebe.png",
    github: "https://github.com/hlepps/gebe",
  },
  {
    id: 5,
    title: "music_store",
    description:
      'A simple music "store", where you can "buy" and listen to songs, as an admin you can add songs and albums, manage users, edit all the information etc. Secured login, registration and database connection. Made using WPF',
    image: "/music_store.jpeg",
    github: "https://github.com/hlepps/MusicStore",
  },
  {
    id: 6,
    title: "kkgh",
    description:
      "My Engineering Thesis, a 3D game with modifiable terrain made in Unity.",
    image: "/kkgh_new.gif",
    github: "https://github.com/hlepps/KKGH",
  },
  {
    id: 7,
    title: "boxcraft",
    description: "3D RTS game made in Unity",
    image: "/boxcraft.gif",
    github: "https://github.com/hlepps/BoxCraft",
  },
  {
    id: 8,
    title: "falling_sand",
    description: "Cellular automata based simulation made in c++ with raylib",
    image: "/falling_sand.png",
    github: "https://github.com/hlepps/falling_sand",
  },
];
