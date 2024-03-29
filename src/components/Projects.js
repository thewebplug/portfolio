import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);


const Projects = () => {

    useLayoutEffect(() => {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".project__hr",
                invalidateOnRefresh: true,
                // markers: true
            }
        });

        tl.to(".project__hr", {
            opacity: 1,
            stagger: {
                each: 1.2,
                ease: "Power4.in"
            }
        })
    })



    return (
        <div className="marquee">
            <h3 className="titlesLL ">Projects</h3>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <hr />
            </div>

            <a href="https://tinkoko.com/" className="marquee__inner" target="_blank" rel="noreferrer">
                <span>TINKOKO MARKETPLACE — TINKOKO MARKETPLACE — TINKOKO MARKETPLACE-</span>
                <span>TINKOKO MARKETPLACE — TINKOKO MARKETPLACE — TINKOKO MARKETPLACE-</span>
            </a>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <hr className="project__hr" />
            </div>
            <a href="http://agent.tinkoko.com/" className="marquee__inner" target="_blank" rel="noreferrer">
                <span>TINKOKO AGENT — TINKOKO AGENT — TINKOKO AGENT — TINKOKO AGENT —</span>
                <span>TINKOKO AGENT — TINKOKO AGENT — TINKOKO AGENT — TINKOKO AGENT —</span>
            </a>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <hr className="project__hr" />
            </div>
            <a href="http://digitalnomadvibes.com/" className="marquee__inner" target="_blank" rel="noreferrer">
                <span>DIGITAL NOMAD VIBES — DIGITAL NOMAD VIBES — DIGITAL NOMAD VIBES — DIGITAL NOMAD VIBES —</span>
                <span>DIGITAL NOMAD VIBES — DIGITAL NOMAD VIBES — DIGITAL NOMAD VIBES — DIGITAL NOMAD VIBES —</span>
            </a>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <hr className="project__hr" />
            </div>
            <a href="https://deft-daifuku-179240.netlify.app/" className="marquee__inner" target="_blank" rel="noreferrer">
                <span>VINEA GLOBAL— VINEA GLOBAL— VINEA GLOBAL— VINEA GLOBAL—</span>
                <span>VINEA GLOBAL— VINEA GLOBAL— VINEA GLOBAL— VINEA GLOBAL—</span>
            </a>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <hr className="project__hr" />
            </div>
            <a href="https://plug-consulting.netlify.app/" className="marquee__inner scrolltrigger" target="_blank" rel="noreferrer">
                <span>PLUG CONSULTANCY — PLUG CONSULTANCY — PLUG CONSULTANCY — PLUG CONSULTANCY —</span>
                <span>PLUG CONSULTANCY — PLUG CONSULTANCY — PLUG CONSULTANCY — PLUG CONSULTANCY —</span>
            </a>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <hr className="project__hr" />
            </div>
            <a href="https://plg-magazine.netlify.app/" className="marquee__inner scrolltrigger" target="_blank" rel="noreferrer">
                <span>PLG MAGAZINE — PLG MAGAZINE — PLG MAGAZINE — PLG MAGAZINE —</span>
                <span>PLG MAGAZINE — PLG MAGAZINE — PLG MAGAZINE — PLG MAGAZINE —</span>
            </a>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <hr className="project__hr" />
            </div>
          
            <a href="https://green-energy-web.netlify.app/" className="marquee__inner scrolltrigger" target="_blank" rel="noreferrer">
                <span>GREEN ENERGY — GREEN ENERGY — GREEN ENERGY — GREEN ENERGY —</span>
                <span>GREEN ENERGY — GREEN ENERGY — GREEN ENERGY — GREEN ENERGY —</span>
            </a>


            <div style={{ display: "flex", justifyContent: "center" }}>
                <hr className="project__hr" />
            </div>

        </div>
    )
}

export default Projects;