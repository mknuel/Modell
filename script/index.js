// alert("h");
// video player
import gsap from "gsap-trial";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import ScrollSmoother from "./scrollsmoother.min.js";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
// gsap.registerPlugin(ScrollTrigger);

let smoother = ScrollSmoother.create({
	wrapper: "#smooth-wrapper",
	content: "#smooth-content",
	smooth: 3,
}); 



gsap.to("#video-player", {
	scrollTrigger: {
		trigger: "#main",
		start: "top top",
		scrub: 2,
		pin: "#main",
	},
	width: "100%",
	// ease: "Expo.easeIInOut",
});

// first image
gsap.to("#one", {
	scrollTrigger: {
		trigger: "#main",
		start: "top top",
		scrub: 3,
	},
	opacity: 0,
	left: "-40%",

	// ease: "Expo.easeIInOut",
});

// first holder
gsap.to("#holder-one", {
	scrollTrigger: {
		trigger: "#main",
		start: "top top",
		scrub: 3,
	},
	opacity: 0,
	left: "-20%",

	// ease: "Expo.easeIInOut",
});

// second image
gsap.to("#six", {
	scrollTrigger: {
		trigger: "#main",
		start: "top top",
		scrub: 3,
	},
	opacity: 0,
	right: "-40%",
	// ease: "Expo.easeIInOut",
});

// second holder
gsap.to("#holder-two", {
	scrollTrigger: {
		trigger: "#main",
		start: "top top",
		scrub: 3,
	},
	opacity: 0,
	right: "-20%",
	// ease: "Expo.easeIInOut",
});
