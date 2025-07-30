import './About.css';

function About() {
    return (
        <div className="about">
            <h1>About the Markdown Previewer</h1>
            <p>
                The Syntax Craft Markdown Previewer is a clean, efficient tool that allows users to write and instantly preview Markdown content. Designed for developers, writers, and technical professionals, this application simplifies the process of formatting text for documentation, notes, blogging, and more.
            </p>
            <p>
                With a responsive and user-friendly interface, the previewer ensures a seamless experience across all devices. Built using modern React features like hooks and component-based architecture, it offers real-time rendering, performance, and maintainability.
            </p>

            <h2>Key Features</h2>
            <ul>
                <li><strong>Live Preview:</strong> Instantly renders Markdown as you type.</li>
                <li><strong>React-Powered:</strong> Built using React with state management via hooks.</li>
                <li><strong>Simple Interface:</strong> Focused, minimal design for distraction-free writing.</li>
                <li><strong>Developer Friendly:</strong> Ideal for README files, technical documents, and blog content.</li>
                <li><strong>Mobile Responsive:</strong> Fully functional across desktop and mobile platforms.</li>
            </ul>

            <h2>What is Markdown?</h2>
            <p>
                Markdown is a lightweight markup language used to create formatted documents using plain text. It is widely adopted in software development, especially for writing documentation, version control notes, wikis, and web content. With intuitive syntax, Markdown allows users to format text without writing HTML or using complex editors.
            </p>

            <h2>About Syntax Craft</h2>
            <p>
                Syntax Craft is an educational platform focused on simplifying programming and web development for learners at all levels. From beginners exploring their first line of code to advanced users building full-stack applications, Syntax Craft provides tools, tutorials, and interactive resources designed to accelerate learning and mastery.
            </p>
            <p>
                The Markdown Previewer is part of a larger suite of tools developed under the Syntax Craft brand. Our mission is to empower developers and creators with high-quality, accessible coding resources that blend functionality with clean design and best practices.
            </p>
            <p>
                To explore more projects and tutorials, visit our main platform and become part of the growing Syntax Craft community. The founder and CEO of Syntax Craft is Sharif. You can connect with him on <a href="https://www.linkedin.com/in/sharif-s-749836348" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
            </p>
        </div>
    );
}

export default About;
