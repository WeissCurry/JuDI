import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-white p-8 shadow-lg rounded-lg lg:w-[1050px] mx-auto">
            {/* About The Journal Section */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-4 border-b pb-2">
                    About JuDI: Jurnal Komedi
                </h1>
                <div className="text-gray-700 leading-relaxed space-y-4 text-justify">
                    <p>
                        <strong>JuDI: Jurnal Komedi</strong> is a peer-reviewed, open-access journal born from the collective frustration of researchers who have navigated the absurd landscape of predatory publishing. Witnessing the rise of journals that prioritize profit over academic integrity, we decided to fight fire with fire—only our fire is fueled by satire, wit, and a genuine desire to bring a little humor to the often-stuffy world of academia.
                    </p>
                    <p>
                        This journal serves as both a serious critique and a comedic outlet. It is a space for academics to publish "research" that is rigorously reviewed for its comedic value, satirical sharpness, and critical commentary on the state of scholarly communication. While the topics may be unconventional, our commitment to a transparent and legitimate peer-review process is absolute. We believe that laughter is a powerful tool for reflection and change.
                    </p>
                </div>
            </div>

            {/* Focus and Scope Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-2">
                    Focus and Scope
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4 text-justify">
                    <p>
                        <strong>JuDI: Jurnal Komedi</strong> welcomes submissions that apply scholarly methods to humorous, absurd, or satirical subjects. We aim to be the premier outlet for academic comedy. The scope of the journal includes, but is not limited to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                        <li>
                            <strong>The Meta-Analysis of Academic Absurdities:</strong><br /> Studies on the statistical probability of reviewer #2 asking for "just one more minor revision," the correlation between conference coffee quality and research output, or the anthropological significance of departmental meetings that could have been an email.
                        </li>
                        <li>
                            <strong>Theoretical Frameworks for Everyday Phenomena:</strong><br /> Applying complex theories to mundane situations, such as a quantum mechanical approach to finding a matching pair of socks or a post-structuralist deconstruction of IKEA assembly instructions.
                        </li>
                        <li>
                            <strong>Empirical Studies in Comedic Science:</strong><br /> Rigorously tested hypotheses on topics like the aerodynamic properties of a dropped piece of toast (butter-side-down phenomenon) or the optimal methodology for feigning interest during a two-hour lecture.
                        </li>
                        <li>
                            <strong>Satirical Case Studies and Commentaries:</strong><br /> Sharp, witty critiques of academic culture, the "publish or perish" dilemma, citation metrics, and the very nature of predatory journals that inspired our existence.
                        </li>
                    </ul>
                    <p>
                        <strong>JuDI: Jurnal Komedi</strong><br /> is published biannually (April and October) because even comedians need a deadline.
                    </p>
                </div>
            </div>

            {/* Peer-Review Process Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-2">
                    Peer-Review Process
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4 text-justify">
                    <p>
                        <strong>JuDI: Jurnal Komedi</strong>is committed to a stringent, albeit slightly unorthodox, single-blind peer-review process. Every submission is evaluated on its academic rigor <em>and</em> its ability to elicit a genuine chuckle, a knowing nod, or an existential sigh of recognition.
                    </p>
                    <ol className="list-decimal list-inside space-y-2 pl-4">
                        <li>
                            <strong>Initial Triage:</strong><br /> Upon submission, the editorial team first checks if the manuscript made them laugh. If it fails this crucial first step, it is immediately rejected with our sincerest apologies.
                        </li>
                        <li>
                            <strong>Scope and Frustration Alignment:</strong><br /> The Editor-in-Chief then assesses whether the manuscript aligns with the journal's scope and adequately channels the academic frustration that is our lifeblood.
                        </li>
                        <li>
                            <strong>Reviewer Assignment:</strong><br /> If the manuscript passes the initial checks, it is sent to at least two external reviewers.
                        </li>
                        <li>
                            <strong>Review and Recommendation:</strong><br /> Reviewers are asked to provide constructive feedback and a recommendation: Accept, Minor Revisions, Major Revisions, or Reject.
                        </li>
                        <li>
                            <strong>Final Decision:</strong><br /> The Editor-in-Chief makes a final decision based on the reviewers' comments.
                        </li>
                    </ol>
                </div>
            </div>

            {/* Publication Fee Section -- UPDATED */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-2">
                    Publication Fee
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4 text-justify">
                    <p>
                        To combat predatory practices with our own brand of absurdity, we've developed a fee structure that's as transparent as our review process. We believe in value, so you only pay for what you need (or don't need).
                    </p>
                    <ul className="list-disc list-inside space-y-3 pl-4">
                        <li>
                            <strong>Regular Submission:</strong> <br /> <span className="font-semibold">IDR 300,000</span>.
                            This covers our standard, high-quality review process, where we meticulously check if your jokes land and your methodology is soundly comical.
                        </li>
                        <li>
                            <strong>Fast Track Submission:</strong> <br /> <span className="font-semibold">IDR 500,000</span>.
                            For those who can't wait to see their groundbreaking research on the procrastination habits of graduate students published. We'll expedite the laughter-check for a nominal fee.
                        </li>
                        <li>
                            <strong>Article Submission:</strong> <br /> <span className="font-semibold">Free</span>.
                            That's right, submitting an actual, complete paper costs you nothing. We're here to promote comedic scholarship, after all.
                        </li>
                        <li>
                            <strong>Submission without a Paper:</strong> <br /> <span className="font-semibold">IDR 1,000,000</span>.
                            Want your name in our system without the hassle of writing a paper? We admire your audacity. This premium service allows you to claim "a paper is under review at JuDI" for a modest price. Consider it a donation to the cause of academic satire.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Open Access Policy Section */}
            <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-2">
                    Open Access Policy
                </h2>
                <div className="text-gray-700 leading-relaxed text-justify">
                    <p>
                        <strong>JuDI: Jurnal Komedi</strong> provides immediate open access to its content on the principle that making research—especially funny research—freely available to the public supports a greater global exchange of knowledge and laughter. In a world where access to knowledge is often behind a paywall, we believe humor should be free.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;