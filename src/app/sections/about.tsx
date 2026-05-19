
import {education, experience, skills, social} from "@/src/data/data-exp";

export default function AboutSection() {

    return (
        <section
            id="about"
            className="relative min-h-screen overflow-hidden px-6 py-20"
        >
            {/* Ambient glow */}
            <div
                className="absolute -top-24 -right-20 w-80 h-80 rounded-full bg-green-600 opacity-[0.08] blur-[80px] pointer-events-none"/>

            <div className="max-w-5xl mx-auto">
                {/* Section eyebrow */}
                <div className="flex items-center gap-3 mb-12">
          <span className="text-3xl font-bold tracking-[0.15em] uppercase text-white">
            About
              <span className='text-green-400'>Me</span>
          </span>
                    <div className="flex-1 h-px bg-green-400/40"/>
                </div>

                {/* CV grid */}
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 items-start">

                    {/* ── Left column ── */}
                    <div>
                        {/* Avatar */}
                        <div
                            className="w-30 h-30 rounded-full bg-green-400/10 border border-green-400/30 flex items-center justify-center mb-5">
                            <img
                                src="/imgs/tha.png"
                                alt="Thabith's avatar"
                                className="rounded-full"
                            />
                        </div>

                        <h2 className=" text-md text-white leading-tight mb-1 uppercase font-bold">Mohamed Thabith
                            Shahul Hameed</h2>
                        <span
                            className="inline-block  text-[11px] font-light text-green-400 bg-green-400/8 border border-green-400/25 rounded px-2.5 py-1 mb-5">
              Associate Full Stack Software Engineer
            </span>

                        {/* Contact */}
                        <ul className="flex flex-col gap-3 mb-7">
                            {social.map(({link,text, icon: Icon}   ) => (
                                <li
                                    key={text}
                                    className="flex items-center gap-3 text-[11px] text-[#a3a39d]"
                                >
                                    <span className="text-green-400 text-lg">
                {<Icon/>}
            </span>

                                    {/* Link / Text */}
                                    {link ? (
                                        <a
                                            href={link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-green-400 transition duration-300"
                                        >
                                            {text}
                                        </a>
                                    ) : (
                                        <span>{text}</span>
                                    )}
                                </li>
                            ))}
                        </ul>

                        {/* Skills */}
                        {Object.entries(skills).map(([category, tags]) => (
                            <div key={category} className="mb-4">
                                <p className="text-[11px] text-green-400 tracking-widest uppercase mb-2">
                                    {category}
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className={`text-[11px] rounded-[3px] px-2 py-1 border text-green-400 border-green-400/25 bg-green-400/6`}
                                        >
                      {tag}
                    </span>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <div className="mt-10">
                            <a href="/resume/Mohamed_Thabith_Associate_Software_Engineer.pdf" className={` bg-green-400 hover:bg-green-300 p-2 rounded-sm font-bold`}>Download Resume
                            </a>
                        </div>
                    </div>

                    {/* ── Right column ── */}
                    <div className="flex flex-col gap-10">

                        {/* Profile bio */}
                        <div>
                            <p className=" text-[11px] text-green-400 tracking-[0.12em] uppercase  border-b border-green-400/20 pb-2 mb-4">
                                Profile
                            </p>
                            <p className="text-[15px] leading-[1.8] text-[#a3a39d] font-light">
                                Motivated Software Engineering graduate with hands-on experience in Java and Spring
                                Boot,
                                along with frontend development using React and Next.js. Skilled in designing secure
                                RESTful APIs,
                                implementing authentication mechanisms, and building scalable web applications.
                                Passionate about clean architecture, performance optimisation, and developing reliable
                                systems.
                            </p>
                        </div>

                        {/* Experience */}
                        <div>
                            <p className="text-[11px] text-green-400 tracking-[0.12em] uppercase  border-b border-green-400/20 pb-2 mb-4">
                                Experience
                            </p>
                            <div className="flex flex-col">
                                {experience.map((job, i) => (
                                    <div
                                        key={job.title}
                                        className={`grid grid-cols-[1fr_auto] gap-2 pb-5 mb-5 ${
                                            i < experience.length - 1 ? "border-b border-white/5" : ""
                                        }`}
                                    >
                                        <div>
                                            <p className="text-[14px] font-medium text-white mb-0.5">{job.title}</p>
                                            <p className="text-[13px] text-green-400 mb-1.5">{job.company}</p>
                                            <p className="text-[13px] text-[#a3a39d] leading-relaxed">{job.desc}</p>
                                        </div>
                                        <span className="font-mono text-[11px] text-green-400 whitespace-nowrap pt-0.5">
                      {job.period}
                    </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Education */}
                        <div>
                            <p className="text-[11px] text-green-400 tracking-[0.12em] uppercase  border-b border-green-400/20 pb-2 mb-4">
                                Education
                            </p>
                            <div className="flex flex-col">
                                {education.map((edu, i) => (
                                    <div
                                        key={i}
                                        className={`grid grid-cols-[1fr_auto] gap-2 pb-5 mb-5 ${
                                            i < experience.length - 1 ? "border-b border-white/5" : ""
                                        }`}
                                    >
                                        <div>
                                            <p className="text-[14px] font-medium text-white mb-0.5">{edu.school}</p>
                                            <p className="text-[13px] text-green-400 mb-1.5">{edu.degree}</p>
                                            <p className="text-[13px] text-[#a3a39d] leading-relaxed">{edu.desc}</p>
                                        </div>
                                        <span className="font-mono text-[11px] text-green-400 whitespace-nowrap pt-0.5">
                      {edu.period}
                    </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
