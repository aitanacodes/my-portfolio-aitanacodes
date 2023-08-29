import { title } from "process";
import MyProjects from "../my-projects/page";
import { Github } from "../icons";
export const pages = [
  {
    id: 1,
    label: "Sobre mi",
    link: "/",
  },
  {
    id: 2,
    label: "Proyectos",
    link: "/my-projects",
  },
  {
    id: 3,
    label: "Contacto",
    link: "/contact-me",
  },
];

export const aboutMeData = {
  name: "Aitana Hernández",
  title: "Hola! Soy Aitana Hernández",
  body: "Nisl vitae aliquam ultricies, nunc nisl aliquet nunc, nunc nisl aliquet nunc, vitae aliquam lit nisl vitae elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam elit nisl vitae elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam elit nisl vitae elit.",
  highlightedBody:
    "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies,nisl vitae enisl vitae elit.",
  body2:
    "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies,nisl vitae enisl vitae elit",
};

export const contactMeDText = {
  title: "Contacto",
  body: "posuere sagittis tortor et suscipit. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
};

export const projects = [
  {
    title: "Proyecto 1",
    body1: "libero vitae gravida euismod, erat lorem blandit purus, faucibus",
    body2: "libero vitae gravida euismod, erat lorem blandit purus, faucibus",
    image: "https://picsum.photos/200/300",
    links: [
      {
        text: "Proyecto 1",
        url: "https://picsum.photos/200/300",
      },
      {
        text: "Proyecto 1.1",
        url: "https://picsum.photos/200/300",
      },
    ],
  },
  {
    title: "Proyecto 2",
    body1: "libero vitae gravida euismod, erat lorem blandit purus, faucibus",
    body2: "libero vitae gravida euismod, erat lorem blandit purus, faucibus",
    image: "https://picsum.photos/200/300",
    links: [
      {
        text: "Proyecto 2",
        url: "https://picsum.photos/200/300",
      },
      {
        text: "Proyecto 2.1",
        url: "https://picsum.photos/200/300",
      },
    ],
  },
];

export const contactMeLinks = ["linkedin", "github"];
