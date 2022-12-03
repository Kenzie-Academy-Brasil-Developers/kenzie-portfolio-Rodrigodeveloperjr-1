import imgHTML from "../public/static/img/stack/html.svg";
import imgCSS from "../public/static/img/stack/css.svg";
import imgJS from "../public/static/img/stack/js.svg";
import imgNode from "../public/static/img/stack/node.svg";
import imgStyled from "../public/static/img/stack/styled.svg";
import imgReact from "../public/static/img/stack/react.svg";
import { FaGithub, FaPython } from "react-icons/fa";
import { DiDjango, DiMysql, DiDocker } from "react-icons/di";
import { SiPostgresql, SiTypescript } from "react-icons/si";


export const stackData = [
  {
    title: "HTML",
    img: imgHTML,
  },
  {
    title: "CSS",
    img: imgCSS,
  },
  {
    title: "JS",
    img: imgJS,
  },
  {
    title: "TypeScript",
    img: SiTypescript
  },
  {
    title: "React",
    img: imgReact,
  },
  { title: "React Native",
    img: imgReact
  },
  {
    title: "Styled Components",
    img: imgStyled,
  },
  {
    title: "Nodejs",
    img: imgNode,
  },
  {
    title: "Python",
    img: FaPython
  },
  {
    title: "Django",
    img: DiDjango
  },
  {
    title: "MySQL",
    img: DiMysql
  },
  {
    title: "Postgres",
    img: SiPostgresql
  },
  { title: "Git Hub",
    img: FaGithub
  },
  {
    title: "Docker",
    img: DiDocker
  },
];
