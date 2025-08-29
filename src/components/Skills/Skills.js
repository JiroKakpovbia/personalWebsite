import "./Skills.css";

// Import Languages Logos
import cLogo from "../../assets/skills/languages/c.svg";
import cPlusPlusLogo from "../../assets/skills/languages/cplusplus.svg";
import cSharpLogo from "../../assets/skills/languages/csharp.svg";
import pythonLogo from "../../assets/skills/languages/python.png";
import javaLogo from "../../assets/skills/languages/java.svg";
import javascriptLogo from "../../assets/skills/languages/javascript.svg";
import typescriptLogo from "../../assets/skills/languages/typescript.svg";
import phpLogo from "../../assets/skills/languages/php.svg";
import htmlLogo from "../../assets/skills/languages/html5.svg";
import cssLogo from "../../assets/skills/languages/css3.svg";
import xamlLogo from "../../assets/skills/languages/xaml.png";
import sqlLogo from "../../assets/skills/languages/sql.png";
import graphqlLogo from "../../assets/skills/languages/graphql.svg";
import racketLogo from "../../assets/skills/languages/racket.svg";

// Import Frameworks Logos
import nodeJSLogo from "../../assets/skills/frameworks/nodejs.svg";
import nextJSLogo from "../../assets/skills/frameworks/nextjs.svg";
import expressJSLogo from "../../assets/skills/frameworks/expressjs.png";
import processingJSLogo from "../../assets/skills/frameworks/processing.svg";
import tailwindCSSLogo from "../../assets/skills/frameworks/tailwindcss.svg";
import dotNetLogo from "../../assets/skills/frameworks/dotnet.svg";
import xamarinLogo from "../../assets/skills/frameworks/xamarin.svg";
import xUnitLogo from "../../assets/skills/frameworks/xunit.png";
import jestLogo from "../../assets/skills/frameworks/jest.svg";

// Import Libraries Logos
import reactLogo from "../../assets/skills/libraries/react.svg";
import reduxLogo from "../../assets/skills/libraries/redux.svg";
import tensorflowLogo from "../../assets/skills/libraries/tensorflow.svg";
import pytorchLogo from "../../assets/skills/libraries/pytorch.svg";
import numpyLogo from "../../assets/skills/libraries/numpy.svg";
import matplotlibLogo from "../../assets/skills/libraries/matplotlib.png";
import aosLogo from "../../assets/skills/libraries/aos.png";
import openCVLogo from "../../assets/skills/libraries/opencv.svg";
import materialUILogo from "../../assets/skills/libraries/materialui.jpg";

// Import Developer Tools Logos
import gitLogo from "../../assets/skills/developerTools/git.svg";
import dockerLogo from "../../assets/skills/developerTools/docker.svg";
import kubernetesLogo from "../../assets/skills/developerTools/kubernetes.png";
import linuxLogo from "../../assets/skills/developerTools/linux.svg";
import bashLogo from "../../assets/skills/developerTools/bash.png";
import vimLogo from "../../assets/skills/developerTools/vim.png";
import mySQLLogo from "../../assets/skills/developerTools/mysql.svg";
import sqLiteLogo from "../../assets/skills/developerTools/sqlite.svg";
import postmanLogo from "../../assets/skills/developerTools/postman.webp";
import swaggerLogo from "../../assets/skills/developerTools/swagger.png";
import visualStudioLogo from "../../assets/skills/developerTools/visualstudio.png";
import vsCodeLogo from "../../assets/skills/developerTools/vscode.png";
import xCodeLogo from "../../assets/skills/developerTools/xcode.png";
import terminalLogo from "../../assets/skills/developerTools/terminal.png";
import powershellLogo from "../../assets/skills/developerTools/powershell.png";
import figmaLogo from "../../assets/skills/developerTools/figma.svg";
import storybookLogo from "../../assets/skills/developerTools/storybook.png";
import unityLogo from "../../assets/skills/developerTools/unity.svg";
import curlLogo from "../../assets/skills/developerTools/curl.png";

import sshLogo from "../../assets/skills/developerTools/ssh.png";
import rdpLogo from "../../assets/skills/developerTools/rdp.png";
import copilotLogo from "../../assets/skills/developerTools/copilot.png";
import openAILogo from "../../assets/skills/developerTools/openai.webp";
import githubActionsLogo from "../../assets/skills/developerTools/githubactions.png";
import netlifyLogo from "../../assets/skills/developerTools/netlify.png";
import microsoft365Logo from "../../assets/skills/developerTools/microsoft365.png";
import microsoftAzureLogo from "../../assets/skills/developerTools/azure.svg";
import azureDevOpsLogo from "../../assets/skills/developerTools/azuredevops.webp";
import jiraLogo from "../../assets/skills/developerTools/jira.svg";

// Data arrays for each section
const languages = [
	{ name: "C", logo: cLogo, link: "https://www.cprogramming.com" },
	{ name: "C++", logo: cPlusPlusLogo, link: "https://en.wikipedia.org/wiki/C%2B%2B" },
	{ name: "C#", logo: cSharpLogo, link: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)" },
	{ name: "Python", logo: pythonLogo, link: "https://www.python.org" },
	{ name: "Java", logo: javaLogo, link: "https://en.wikipedia.org/wiki/Java_(programming_language)" },
	{ name: "JavaScript", logo: javascriptLogo, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
	{ name: "TypeScript", logo: typescriptLogo, link: "https://www.typescriptlang.org/" },
	{ name: "PHP", logo: phpLogo, link: "https://www.php.net/" },
	{ name: "HTML", logo: htmlLogo, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
	{ name: "CSS", logo: cssLogo, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
	{ name: "XAML", logo: xamlLogo, link: "https://learn.microsoft.com/en-us/dotnet/desktop/wpf/xaml/" },
	{ name: "SQL", logo: sqlLogo, link: "https://en.wikipedia.org/wiki/SQL" },
	{ name: "GraphQL", logo: graphqlLogo, link: "https://graphql.org/" },
	{ name: "Racket", logo: racketLogo, link: "https://racket-lang.org/" },
];

const frameworks = [
	{ name: "Node.js", logo: nodeJSLogo, link: "https://en.wikipedia.org/wiki/Node.js" },
	{ name: "Next.js", logo: nextJSLogo, link: "https://nextjs.org/" },
	{ name: "Express.js", logo: expressJSLogo, link: "https://expressjs.com/" },
	{ name: "Processing.js", logo: processingJSLogo, link: "https://processing.org/" },
	{ name: "Tailwind CSS", logo: tailwindCSSLogo, link: "https://tailwindcss.com/" },
	{ name: ".NET", logo: dotNetLogo, link: "https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet" },
	{ name: "Xamarin", logo: xamarinLogo, link: "https://dotnet.microsoft.com/apps/xamarin" },
	{ name: "xUnit", logo: xUnitLogo, link: "https://xunit.net/" },
	{ name: "Jest", logo: jestLogo, link: "https://jestjs.io/" },
];

const libraries = [
	{ name: "React", logo: reactLogo, link: "https://react.dev/" },
	{ name: "Redux", logo: reduxLogo, link: "https://redux.js.org/" },
	{ name: "TensorFlow", logo: tensorflowLogo, link: "https://www.tensorflow.org/" },
	{ name: "PyTorch", logo: pytorchLogo, link: "https://pytorch.org/" },
	{ name: "NumPy", logo: numpyLogo, link: "https://numpy.org/" },
	{ name: "Matplotlib", logo: matplotlibLogo, link: "https://matplotlib.org/" },
	{ name: "Animate On Scroll", logo: aosLogo, link: "https://michalsnik.github.io/aos/" },
	{ name: "OpenCV", logo: openCVLogo, link: "https://opencv.org/" },
	{ name: "Material UI", logo: materialUILogo, link: "https://mui.com/material-ui/" },
];

const developerTools = [
	{ name: "Git", logo: gitLogo, link: "https://git-scm.com/" },
	{ name: "Docker", logo: dockerLogo, link: "https://en.wikipedia.org/wiki/Docker_(software)" },
	{ name: "Kubernetes", logo: kubernetesLogo, link: "https://kubernetes.io/" },
	{ name: "Linux", logo: linuxLogo, link: "https://en.wikipedia.org/wiki/Linux" },
	{ name: "Bash", logo: bashLogo, link: "https://en.wikipedia.org/wiki/Bash_(Unix_shell)" },
	{ name: "Vim", logo: vimLogo, link: "https://en.wikipedia.org/wiki/Vim_(text_editor)" },
	{ name: "MySQL", logo: mySQLLogo, link: "https://en.wikipedia.org/wiki/MySQL" },
	{ name: "SQLite", logo: sqLiteLogo, link: "https://www.sqlite.org/" },
	{ name: "Postman", logo: postmanLogo, link: "https://www.postman.com/" },
	{ name: "Swagger", logo: swaggerLogo, link: "https://swagger.io/" },
	{ name: "Visual Studio", logo: visualStudioLogo, link: "https://visualstudio.microsoft.com/" },
	{ name: "VS Code", logo: vsCodeLogo, link: "https://en.wikipedia.org/wiki/Visual_Studio_Code" },
	{ name: "xCode", logo: xCodeLogo, link: "https://developer.apple.com/xcode/" },
	{ name: "Terminal", logo: terminalLogo, link: "https://learn.microsoft.com/en-us/windows/terminal/" },
	{ name: "Powershell", logo: powershellLogo, link: "https://learn.microsoft.com/en-us/powershell/" },
	{ name: "Figma", logo: figmaLogo, link: "https://www.figma.com/" },
	{ name: "Storybook", logo: storybookLogo, link: "https://storybook.js.org/" },
	{ name: "Unity", logo: unityLogo, link: "https://unity.com/" },
	{ name: "cURL", logo: curlLogo, link: "https://curl.se/" },
	{ name: "SSH", logo: sshLogo, link: "https://en.wikipedia.org/wiki/Secure_Shell" },
	{ name: "RDP", logo: rdpLogo, link: "https://en.wikipedia.org/wiki/Remote_Desktop_Protocol" },
	{ name: "Copilot", logo: copilotLogo, link: "https://copilot.microsoft.com/" },
	{ name: "OpenAI", logo: openAILogo, link: "https://openai.com/" },
	{ name: "GitHub Actions", logo: githubActionsLogo, link: "https://github.com/features/actions" },
	{ name: "Netlify", logo: netlifyLogo, link: "https://www.netlify.com/" },
	{ name: "Microsoft 365", logo: microsoft365Logo, link: "https://www.microsoft.com/en-ca/microsoft-365" },
	{ name: "Microsoft Azure", logo: microsoftAzureLogo, link: "https://azure.microsoft.com/en-ca" },
	{ name: "Azure DevOps", logo: azureDevOpsLogo, link: "https://azure.microsoft.com/en-us/products/devops" },
	{ name: "Jira", logo: jiraLogo, link: "https://www.atlassian.com/software/jira" },
];

function Skills() {
	var delayGap = 5;
	return (
		<section id="skills">
			<h1>Skills</h1>
			<div id="skills-container">
				<h2>Languages:</h2>
				<div id="languages" className="skills" data-aos="fade-in" data-aos-once="true">
					{languages.map((lang, idx) => (
						<a
							key={lang.name}
							href={lang.link}
							target="_blank"
							rel="noopener noreferrer"
							data-aos="fade-left"
							data-aos-delay={idx * delayGap}
							data-aos-once="true"
						>
							<img alt={`${lang.name} Logo`} src={lang.logo} />
							<span className="display-text">{lang.name}</span>
						</a>
					))}
				</div>
				<br />
				<h2>Frameworks:</h2>
				<div id="frameworks" className="skills" data-aos="fade-in" data-aos-once="true">
					{frameworks.map((fw, idx) => (
						<a
							key={fw.name}
							href={fw.link}
							target="_blank"
							rel="noopener noreferrer"
							data-aos="fade-left"
							data-aos-delay={idx * delayGap}
							data-aos-once="true"
						>
							<img alt={`${fw.name} Logo`} src={fw.logo} />
							<span className="display-text">{fw.name}</span>
						</a>
					))}
				</div>
				<br />
				<h2>Libraries:</h2>
				<div id="libraries" className="skills" data-aos="fade-in" data-aos-once="true">
					{libraries.map((lib, idx) => (
						<a
							key={lib.name}
							href={lib.link}
							target="_blank"
							rel="noopener noreferrer"
							data-aos="fade-left"
							data-aos-delay={idx * delayGap}
							data-aos-once="true"
						>
							<img alt={`${lib.name} Logo`} src={lib.logo} />
							<span className="display-text">{lib.name}</span>
						</a>
					))}
				</div>
				<br />
				<h2>Developer Tools:</h2>
				<div id="developer-tools" className="skills" data-aos="fade-in" data-aos-once="true">
					{developerTools.map((tool, idx) => (
						<a
							key={tool.name}
							href={tool.link}
							target="_blank"
							rel="noopener noreferrer"
							data-aos="fade-left"
							data-aos-delay={idx * delayGap}
							data-aos-once="true"
						>
							<img alt={`${tool.name} logo`} src={tool.logo} />
							<span className="display-text">{tool.name}</span>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}

export default Skills;
