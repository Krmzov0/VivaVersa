import React from 'react'
import { motion } from 'framer-motion'
import FooterDe from '@/components/FooterDe'
import HeaderDe from '@/components/HeaderDe'

const services = () => {
    return (
        <>
            <HeaderDe />
            <div className='relative pb-12 md:pb-24 w-screen md:h-max h-max flex-col  flex justify-start items-center'>
                <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}>
                    <div className='mt-10 p-6 md:px-12 '>
                        <h1 className='md:hover:font-medium duration-300 transition-all flex md:hidden font-light text-center text-[#17191b] text-4xl md:text-7xl leading-[60px] md:leading-[95px]'>RICHTE DEINEN ERFOLG AN <br /> MIT UNSERER <br /> PRÄZISION</h1>
                        <h1 className='md:hover:font-medium duration-300 transition-all hidden md:flex font-light text-center text-[#17191b] text-4xl md:text-7xl leading-[60px] md:leading-[95px]'>RICHTE DEINEN ERFOLG AN <br /> MIT UNSERER PRÄZISION</h1>
                        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.5 }} className='relative text-[#17191b] text-center w-full mt-3 md:mt-5 font-normal md:w-full lowercase text-3xl md:text-6xl leading-[45px] md:leading-[95px]'>DIGITALE LÖSUNGEN</motion.div>
                    </div>
                </motion.div>

                <div className='h-80 md:h-[30rem] w-full flex justify-center items-start md:w-full relative bottom-20 md:bottom-32 bg-transparent mt-1'>

                    <div className='gradient2 w-full h-[1px] bg-[#17191b]  absolute top-[50%] translate-y-[-50%]'></div>
                    <div className='gradient w-[1px] bottom-0 h-full bg-[#17191b]  absolute left-[50%] translate-x-[-50%]'></div>

                    <div className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-16 h-16 bg-[#878c8e] flex justify-center items-center'>
                        <div className='w-12 h-12 bg-[#17191b] flex items-center justify-center'>
                            <div className='w-6 h-6 bg-[#f1f2ee]'></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="z-0 w-screen relative h-full gap-y-16 sm:gap-y-20 flex flex-col bg-[#17191b] p-8 sm:py-44 sm:p-12 py-28 sm:pr-16">
                <div className="flex flex-col">
                    <div className="w-full justify-between gap-y-8 sm:gap-y-0 flex flex-col-reverse sm:flex-row sm:items-center">
                        <motion.div initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                            <div>
                                <h1 className="text-[32px] sm:text-[38px] font-light text-[#f1f2ee]">UNSER ANSATZ</h1>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                        <p className="mt-10 text-[16px] text-[#878c8e]">Wir bieten maßgeschneiderte Dienstleistungen, um Unternehmen im digitalen Bereich erfolgreich zu machen.</p>
                    </motion.div>
                </div>

                <div className="mt-16">
                    <div>
                        <div className="border-[#f1f2ee]">
                            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}>
                                <h1 className="text-2xl sm:text-[32px] text-[#f1f2ee] font-light hover:font-light sm:hover:font-medium transition-all duration-300 gap-x-4 uppercase flex items-center w-full">
                                    <span className="text-[#878c8e]">01</span> UMFASSENDE ANALYSE
                                </h1>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}>
                                <p className="text-md text-[#f1f2eea7] mt-10">Wir beginnen damit, Ihre derzeitige Online-Präsenz gründlich zu analysieren, einschließlich der Leistung Ihrer Website und Ihrer Social-Media-Profile.</p>
                            </motion.div>
                            <motion.div initial={{ x: -40 }} whileInView={{ x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} className="origin-left w-full h-[2px] bg-[#f1f2ee] my-10"></motion.div>
                        </div>
                    </div>

                    <div>
                        <div className="border-[#f1f2ee]">
                            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}>
                                <h1 className="text-2xl sm:text-[32px] text-[#f1f2ee] font-light hover:font-light sm:hover:font-medium transition-all duration-300 gap-x-4 uppercase flex items-center w-full">
                                    <span className="text-[#878c8e]">02</span> Maß Strategien
                                </h1>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}>
                                <p className="text-md text-[#f1f2eea7] mt-10">Indem wir unseren Ansatz an Ihre einzigartigen Geschäftsziele anpassen, entwickeln wir maßgeschneiderte digitale Marketing- und Social-Media-Strategien.</p>
                            </motion.div>
                            <motion.div initial={{ x: -40 }} whileInView={{ x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} className="origin-left w-full h-[2px] bg-[#f1f2ee] my-10"></motion.div>
                        </div>
                    </div>

                    <div>
                        <div className="border-[#f1f2ee]">
                            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}>
                                <h1 className="text-2xl sm:text-[32px] text-[#f1f2ee] font-light hover:font-light sm:hover:font-medium transition-all duration-300 gap-x-4 uppercase flex items-center w-full">
                                    <span className="text-[#878c8e]">03</span> INHALT TELLUNG
                                </h1>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}>
                                <p className="text-md text-[#f1f2eea7] mt-10">Wir erstellen hochwertige und ansprechende Inhalte, die bei Ihrer Zielgruppe auf Ihrer Website und auf Social-Media-Plattformen gut ankommen.</p>
                            </motion.div>
                            <motion.div initial={{ x: -40 }} whileInView={{ x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} className="origin-left w-full h-[2px] bg-[#f1f2ee] my-10"></motion.div>
                        </div>
                    </div>

                    <div>
                        <div className="border-[#f1f2ee]">
                            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}>
                                <h1 className="text-2xl sm:text-[32px] text-[#f1f2ee] font-light hover:font-light sm:hover:font-medium transition-all duration-300 gap-x-4 uppercase flex items-center w-full">
                                    <span className="text-[#878c8e]">04</span> Social-Media-Management
                                </h1>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}>
                                <p className="text-md text-[#f1f2eea7] mt-10">Wir verwalten und steigern Ihre Präsenz in den sozialen Medien, indem wir ansprechende Beiträge erstellen, gezielte Anzeigen schalten und mit Ihrer Zielgruppe interagieren.</p>
                            </motion.div>
                            <motion.div initial={{ x: -40 }} whileInView={{ x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} className="origin-left w-full h-[2px] bg-[#f1f2ee] my-10"></motion.div>
                        </div>
                    </div>

                    <div>
                        <div className="border-[#f1f2ee]">
                            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}>
                                <h1 className="text-2xl sm:text-[32px] text-[#f1f2ee] font-light hover:font-light sm:hover:font-medium transition-all duration-300 gap-x-4 uppercase flex items-center w-full">
                                    <span className="text-[#878c8e]">05</span> Website Entwicklung
                                </h1>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}>
                                <p className="text-md text-[#f1f2eea7] mt-10">Wenn nötig, entwerfen und entwickeln wir benutzerfreundliche, reaktionsschnelle und visuell ansprechende Websites, um Ihre Online-Präsenz zu verbessern.</p>
                            </motion.div>
                            <motion.div initial={{ x: -40 }} whileInView={{ x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} className="origin-left w-full h-[2px] bg-[#f1f2ee] my-10"></motion.div>
                        </div>
                    </div>

                    <div>
                        <div className="border-[#f1f2ee]">
                            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}>
                                <h1 className="text-2xl sm:text-[32px] text-[#f1f2ee] font-light hover:font-light sm:hover:font-medium transition-all duration-300 gap-x-4 uppercase flex items-center w-full">
                                    <span className="text-[#878c8e]">06</span> Datenbasiert Einblicke
                                </h1>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}>
                                <p className="text-md text-[#f1f2eea7] mt-10">Wir überwachen und analysieren kontinuierlich Daten, um Strategien zu verfeinern und bessere Ergebnisse zu erzielen.</p>
                            </motion.div>
                            <motion.div initial={{ x: -40 }} whileInView={{ x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} className="origin-left w-full h-[2px] bg-[#f1f2ee] my-10"></motion.div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='h-max flex flex-col md:flex-row justify-between items-start bg-[#f1f2ee] w-screen px-6 md:px-12 py-28 md:py-44'>
                <motion.div className="md:px-0 relative md:sticky md:top-10" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                    <div className=" relative md:sticky md:top-10">
                        <h1 className="text-[20px] md:text-[28px] font-light text-[#878c8e]">DIENSTE</h1>
                        <h1 className="text-[34px] md:text-[42px] font-light text-[#17191b] mt-1">WAS WIR <br /> ANBIETEN</h1>
                    </div>
                </motion.div>

                <div className='w-full md:w-[65%] flex flex-col gap-y-10 md:mt-0 mt-20'>
                    <div className='pb-28 border-b border-[#17191b83] flex-col md:flex-row flex justify-start md:gap-y-0 gap-y-10 items-start'>
                        <motion.div initial={{ opacity: 0, scale: 1.1 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} className='text-2xl md:w-[50%] md:text-4xl leading-[40px] md:leading-[60px] font-light text-[#17191b]'>SOZIALES MEDIEN <br /> MARKETING</motion.div>

                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}>
                            <ul className='md:ml-28 text-[#17191b] flex flex-col gap-y-10 md:gap-y-14 text-md '>
                                <li>&#8226; Organische Werbung;</li>
                                <li>&#8226; Bezahlte Werbung;</li>
                                <li>&#8226; Strategieentwicklung;</li>
                                <li>&#8226; Inhaltserstellung;</li>
                                <li>&#8226; Profiloptimierung;</li>
                            </ul>
                        </motion.div>
                    </div>

                    <div className='pb-28 border-b border-[#17191b83] flex-col md:flex-row flex justify-start md:gap-y-0 gap-y-10 items-start'>
                        <motion.div initial={{ opacity: 0, scale: 1.1 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} className='text-2xl md:w-[50%] md:text-4xl leading-[40px] md:leading-[60px] font-light text-[#17191b]'>WEBSEITE ENTWICKLUNG</motion.div>

                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}>
                            <ul className='md:ml-28 text-[#17191b] flex flex-col gap-y-10 md:gap-y-14 text-md '>
                                <li>&#8226; Front-End-Entwicklung;</li>
                                <li>&#8226; Back-End-Entwicklung;</li>
                                <li>&#8226; Full-Stack-Entwicklung;</li>
                                <li>&#8226; Responsive Webdesign;</li>
                                <li>&#8226; Komplexe Animationen;</li>
                                <li>&#8226; Website-Wartung;</li>
                                <li>&#8226; Individuelle Illustrationen;</li>
                            </ul>
                        </motion.div>
                    </div>

                    <div className='pb-28 border-b border-[#17191b83] flex-col md:flex-row flex justify-start md:gap-y-0 gap-y-10 items-start'>
                        <motion.div initial={{ opacity: 0, scale: 1.1 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} className='text-2xl md:w-[50%] md:text-4xl leading-[40px] md:leading-[60px] font-light text-[#17191b]'>WEBSEITE DESIGN</motion.div>

                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}>
                            <ul className='md:ml-28 text-[#17191b] flex flex-col gap-y-10 md:gap-y-14 text-md '>
                                <li>&#8226; UI/UX-Design;</li>
                                <li>&#8226; Branchenkonkurrenten-Recherche;</li>
                                <li>&#8226; Drahtgitter und Prototyping;</li>
                                <li>&#8226; Individuelle Illustrationen;</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>


            <FooterDe />
        </>
    )
}

export default services