import { RiHtml5Line } from "react-icons/ri";
import { RiCss3Line } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";
import { RiVuejsLine } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { RiBootstrapLine } from "react-icons/ri";
import { RiTailwindCssLine } from "react-icons/ri";
import { TbFileTypeSql } from "react-icons/tb";
import { DiPostgresql } from "react-icons/di";
import { RiJavaLine } from "react-icons/ri";
import { SiSpringboot } from "react-icons/si";
import { IoLogoPython } from "react-icons/io5";
import { RiGithubLine } from "react-icons/ri";

const Tecnologies = () => {
  return (
    <section className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Tecnologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiHtml5Line className="text-7xl text-orange-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiCss3Line className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-blue-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiVuejsLine className="text-7xl text-green-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiJavascriptLine className="text-7xl text-yellow-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoTypescript className="text-7xl text-blue-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiBootstrapLine className="text-7xl text-purple-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiTailwindCssLine className="text-7xl text-blue-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbFileTypeSql className="text-7xl text-blue-800" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiPostgresql className="text-7xl text-sky-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiJavaLine className="text-7xl text-red-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiSpringboot className="text-7xl text-green-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoPython className="text-7xl text-yellow-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiGithubLine className="text-7xl text-orange-600" />
        </div>
      </div>
    </section>
  );
};

export default Tecnologies;
