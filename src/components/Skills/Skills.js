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

function Skills() {
	return (
		<section id="skills">
			<h1>Skills</h1>
			<div id="skills-container">
				<h2>Languages:</h2>
				<div id="languages" className="skills" data-aos="fade-in" data-aos-delay="0">
					<a href="https://www.cprogramming.com" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-delay="50">
						<img alt="C Logo" src={cLogo} />
						<span className="display-text">C</span>
					</a>
					<a
						href="https://en.wikipedia.org/wiki/C%2B%2B"
						target="_blank"
						rel="noopener noreferrer"
						data-aos="fade-left"
						data-aos-delay="100"
					>
						<img alt="C++ Logo" src={cPlusPlusLogo} />
						<span className="display-text">C++</span>
					</a>
					<a
						href="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)"
						target="_blank"
						rel="noopener noreferrer"
						data-aos="fade-left"
						data-aos-delay="150"
					>
						<img alt="C# Logo" src={cSharpLogo} />
						<span className="display-text">C#</span>
					</a>
					<a href="https://www.python.org" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-delay="200">
						<img alt="Python Logo" src={pythonLogo} />
						<span className="display-text">Python</span>
					</a>
					<a
						href="https://en.wikipedia.org/wiki/Java_(programming_language)"
						target="_blank"
						rel="noopener noreferrer"
						data-aos="fade-left"
						data-aos-delay="250"
					>
						<img alt="Java logo" src={javaLogo} />
						<span className="display-text">Java</span>
					</a>
					<a
						href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
						target="_blank"
						rel="noopener noreferrer"
						data-aos="fade-left"
						data-aos-delay="300"
					>
						<img alt="JavaScript logo" src={javascriptLogo} />
						<span className="display-text">JavaScript</span>
					</a>
					<a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-delay="350">
						<img alt="TypeScript logo" src={typescriptLogo} />
						<span className="display-text">TypeScript</span>
					</a>
					<a href="https://www.php.net/" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-delay="400">
						<img alt="PHP logo" src={phpLogo} />
						<span className="display-text">PHP</span>
					</a>
					<a
						href="https://developer.mozilla.org/en-US/docs/Web/HTML"
						target="_blank"
						rel="noopener noreferrer"
						data-aos="fade-left"
						data-aos-delay="450"
					>
						<img alt="HTML logo" src={htmlLogo} />
						<span className="display-text">HTML</span>
					</a>
					<a
						href="https://developer.mozilla.org/en-US/docs/Web/CSS"
						target="_blank"
						rel="noopener noreferrer"
						data-aos="fade-left"
						data-aos-delay="500"
					>
						<img alt="CSS logo" src={cssLogo} />
						<span className="display-text">CSS</span>
					</a>
					{/* <a
						href="https://en.wikipedia.org/wiki/BASIC#References"
						target="_blank"
						rel="noopener noreferrer"
						data-aos="fade-left"
						data-aos-delay="400"
					>
						<img
							alt="BASIC logo"
							src="https://user-images.githubusercontent.com/16964652/66596008-f4e3ed80-eb50-11e9-9a8a-3e9a5adf4d7c.png"
						/>
						<span className="display-text">BASIC</span>
					</a> */}
					<a
						href="https://learn.microsoft.com/en-us/dotnet/desktop/wpf/xaml/"
						target="_blank"
						rel="noopener noreferrer"
						data-aos="fade-left"
						data-aos-delay="550"
					>
						<img alt="XAML logo" src={xamlLogo} />
						<span className="display-text">XAML</span>
					</a>
					<a href="https://en.wikipedia.org/wiki/SQL" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-delay="600">
						<img alt="SQL logo" src={sqlLogo} />
						<span className="display-text">SQL</span>
					</a>
					<a href="https://graphql.org/" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-delay="650">
						<img alt="GraphQL logo" src={graphqlLogo} />
						<span className="display-text">GraphQL</span>
					</a>
					<a href="https://racket-lang.org/" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-delay="700">
						<img alt="Racket logo" src={racketLogo} />
						<span className="display-text">Racket</span>
					</a>
				</div>
				<br />

				<h2>Frameworks:</h2>
				<div id="frameworks" className="skills" data-aos="fade-in" data-aos-delay="0">
					<a
						href="https://en.wikipedia.org/wiki/Node.js"
						target="_blank"
						rel="noopener noreferrer"
						data-aos="fade-left"
						data-aos-delay="50"
					>
						<img alt="Node.js Logo" src={nodeJSLogo} />
						<span className="display-text">Node.js</span>
					</a>
					<a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-delay="100">
						<img alt="Next.js Logo" src={nextJSLogo} />
						<span className="display-text">Next.js</span>
					</a>
					<a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-delay="150">
						<img alt="Express.js Logo" src={expressJSLogo} />
						<span className="display-text">Express.js</span>
					</a>
					<a href="https://processing.org/" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-delay="200">
						<img alt="Processing.js Logo" src={processingJSLogo} />
						<span className="display-text">Processing.js</span>
					</a>
					<a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-delay="250">
						<img alt="Tailwind CSS Logo" src={tailwindCSSLogo} />
						<span className="display-text">Tailwind CSS</span>
					</a>
					<a
						href="https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet"
						target="_blank"
						rel="noopener noreferrer"
						data-aos="fade-left"
						data-aos-delay="300"
					>
						<img alt=".NET Logo" src={dotNetLogo} />
						<span className="display-text">.NET</span>
					</a>
					<a
						href="https://dotnet.microsoft.com/apps/xamarin"
						target="_blank"
						rel="noopener noreferrer"
						data-aos="fade-left"
						data-aos-delay="1050"
					>
						<img alt="Xamarin logo" src={xamarinLogo} />
						<span className="display-text">Xamarin</span>
					</a>
					<a href="https://xunit.net/" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-delay="1050">
						<img alt="xUnit logo" src={xUnitLogo} />
						<span className="display-text">xUnit</span>
					</a>
					<a href="https://jestjs.io/" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-delay="1100">
						<img alt="Jest logo" src={jestLogo} />
						<span className="display-text">Jest</span>
					</a>
				</div>
				<br />

				<h2>Libraries:</h2>
				<div id="libraries" className="skills" data-aos="fade-in" data-aos-delay="0">
					<a href="https://react.dev/" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-delay="50">
						<img alt="React Logo" src={reactLogo} />
						<span className="display-text">React</span>
					</a>
					<a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-delay="100">
						<img alt="Redux Logo" src={reduxLogo} />
						<span className="display-text">Redux</span>
					</a>
					<a href="https://www.tensorflow.org/" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-delay="150">
						<img alt="TensorFlow Logo" src={tensorflowLogo} />
						<span className="display-text">TensorFlow</span>
					</a>
					<a href="https://pytorch.org/" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-delay="200">
						<img alt="PyTorch Logo" src={pytorchLogo} />
						<span className="display-text">PyTorch</span>
					</a>
					<a href="https://numpy.org/" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-delay="250">
						<img alt="NumPy Logo" src={numpyLogo} />
						<span className="display-text">NumPy</span>
					</a>
					<a href="https://matplotlib.org/" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-delay="300">
						<img alt="Matplotlib Logo" src={matplotlibLogo} />
						<span className="display-text">Matplotlib</span>
					</a>
					<a href="https://michalsnik.github.io/aos/" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-delay="350">
						<img alt="AOS Logo" src={aosLogo} />
						<span className="display-text">Animate On Scroll</span>
					</a>
					<a href="https://opencv.org/" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-delay="400">
						<img alt="OpenCV Logo" src={openCVLogo} />
						<span className="display-text">OpenCV</span>
					</a>
					<a href="https://mui.com/material-ui/" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-delay="450">
						<img alt="Material UI Logo" src={materialUILogo} />
						<span className="display-text">Material UI</span>
					</a>
				</div>
				<br />

				<h2>Developer Tools:</h2>
				<div id="developer-tools" className="skills" data-aos="fade-in" data-aos-delay="0">
					<a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-delay="50">
						<img alt="Git Logo" src={gitLogo} />
						<span className="display-text">Git</span>
					</a>
					<a
						href="https://en.wikipedia.org/wiki/Docker_(software)"
						target="_blank"
						rel="noopener noreferrer"
						data-aos="fade-left"
						data-aos-delay="100"
					>
						<img alt="Docker logo" src={dockerLogo} />
						<span className="display-text">Docker</span>
					</a>
					<a href="https://kubernetes.io/" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-delay="150">
						<img alt="Kubernetes logo" src={kubernetesLogo} />
						<span className="display-text">Kubernetes</span>
					</a>

					<a href="https://en.wikipedia.org/wiki/Linux" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-delay="200">
						<img alt="Linux logo" src={linuxLogo} />
						<span className="display-text">Linux</span>
					</a>
					<a
						href="https://en.wikipedia.org/wiki/Bash_(Unix_shell)"
						target="_blank"
						rel="noopener noreferrer"
						data-aos="fade-left"
						data-aos-delay="250"
					>
						<img alt="Bash logo" src={bashLogo} />
						<span className="display-text">Bash</span>
					</a>
					<a
						href="https://en.wikipedia.org/wiki/Vim_(text_editor)"
						target="_blank"
						rel="noopener noreferrer"
						data-aos="fade-left"
						data-aos-delay="300"
					>
						<img alt="Vim logo" src={vimLogo} />
						<span className="display-text">Vim</span>
					</a>
					<a href="https://en.wikipedia.org/wiki/MySQL" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-delay="350">
						<img alt="MySQL Logo" src={mySQLLogo} />
						<span className="display-text">MySQL</span>
					</a>
					<a href="https://www.sqlite.org/" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-delay="350">
						<img alt="SQLite Logo" src={sqLiteLogo} />
						<span className="display-text">SQLite</span>
					</a>
					<a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-delay="400">
						<img alt="Postman logo" src={postmanLogo} />
						<span className="display-text">Postman</span>
					</a>
					<a href="https://swagger.io/" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-delay="450">
						<img alt="Swagger logo" src={swaggerLogo} />
						<span className="display-text">Swagger</span>
					</a>

					<a href="https://visualstudio.microsoft.com/" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-delay="500">
						<img alt="Visual Studio logo" src={visualStudioLogo} />
						<span className="display-text">Visual Studio</span>
					</a>
					<a
						href="https://en.wikipedia.org/wiki/Visual_Studio_Code"
						target="_blank"
						rel="noopener noreferrer"
						data-aos="fade-left"
						data-aos-delay="550"
					>
						<img alt="VS Code logo" src={vsCodeLogo} />
						<span className="display-text">VS Code</span>
					</a>
					<a href="https://developer.apple.com/xcode/" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-delay="600">
						<img alt="xCode logo" src={xCodeLogo} />
						<span className="display-text">xCode</span>
					</a>
					<a
						href="https://learn.microsoft.com/en-us/windows/terminal/"
						target="_blank"
						rel="noopener noreferrer"
						data-aos="fade-left"
						data-aos-delay="450"
					>
						<img alt="Terminal logo" src={terminalLogo} />
						<span className="display-text">Terminal</span>
					</a>
					<a
						href="https://learn.microsoft.com/en-us/powershell/"
						target="_blank"
						rel="noopener noreferrer"
						data-aos="fade-left"
						data-aos-delay="450"
					>
						<img alt="Powershell logo" src={powershellLogo} />
						<span className="display-text">Powershell</span>
					</a>
					<a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-delay="650">
						<img alt="Figma logo" src={figmaLogo} />
						<span className="display-text">Figma</span>
					</a>
					<a href="https://storybook.js.org/" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-delay="700">
						<img alt="Storybook logo" src={storybookLogo} />
						<span className="display-text">Storybook</span>
					</a>
					<a href="https://unity.com/" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-delay="750">
						<img alt="Unity Logo" src={unityLogo} />
						<span className="display-text">Unity</span>
					</a>
					{/* <a href="https://crontab.guru/" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-delay="250">
						<img alt="cron logo" src="https://miro.medium.com/v2/resize:fit:680/1*4-_XX9i1ans8TZERq0sK0A.png" />
						<span className="display-text">cron</span>
					</a> */}
					<a href="https://curl.se/" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-delay="800">
						<img alt="cURL logo" src={curlLogo} />
						<span className="display-text">cURL</span>
					</a>
					<a
						href="https://en.wikipedia.org/wiki/Secure_Shell"
						target="_blank"
						rel="noopener noreferrer"
						data-aos="fade-left"
						data-aos-delay="850"
					>
						<img alt="SSH logo" src={sshLogo} />
						<span className="display-text">SSH</span>
					</a>
					<a
						href="https://en.wikipedia.org/wiki/Remote_Desktop_Protocol"
						target="_blank"
						rel="noopener noreferrer"
						data-aos="fade-left"
						data-aos-delay="900"
					>
						<img alt="RDP logo" src={rdpLogo} />
						<span className="display-text">RDP</span>
					</a>
					<a href="https://copilot.microsoft.com/" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-delay="950">
						<img alt="Copilot logo" src={copilotLogo} />
						<span className="display-text">Copilot</span>
					</a>
					<a href="https://openai.com/" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-delay="1000">
						<img alt="OpenAI logo" src={openAILogo} />
						<span className="display-text">OpenAI</span>
					</a>
					<a
						href="https://github.com/features/actions"
						target="_blank"
						rel="noopener noreferrer"
						data-aos="fade-left"
						data-aos-delay="1150"
					>
						<img alt="GitHub Actions logo" src={githubActionsLogo} />
						<span className="display-text">GitHub Actions</span>
					</a>
					<a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-delay="1150">
						<img alt="Netlify logo" src={netlifyLogo} />
						<span className="display-text">Netlify</span>
					</a>
					<a
						href="https://www.microsoft.com/en-ca/microsoft-365"
						target="_blank"
						rel="noopener noreferrer"
						data-aos="fade-left"
						data-aos-delay="1200"
					>
						<img alt="Microsoft 365 logo" src={microsoft365Logo} />
						<span className="display-text">Microsoft 365</span>
					</a>
					<a href="https://azure.microsoft.com/en-ca" target="_blank" rel="noopener noreferrer" data-aos="fade-left" data-aos-delay="1250">
						<img alt="Microsoft Azure logo" src={microsoftAzureLogo} />
						<span className="display-text">Microsoft Azure</span>
					</a>
					<a
						href="https://azure.microsoft.com/en-us/products/devops"
						target="_blank"
						rel="noopener noreferrer"
						data-aos="fade-left"
						data-aos-delay="1300"
					>
						<img alt="Azure DevOps logo" src={azureDevOpsLogo} />
						<span className="display-text">Azure DevOps</span>
					</a>
					<a
						href="https://www.atlassian.com/software/jira"
						target="_blank"
						rel="noopener noreferrer"
						data-aos="fade-left"
						data-aos-delay="1350"
					>
						<img alt="Jira logo" src={jiraLogo} />
						<span className="display-text">Jira</span>
					</a>
				</div>
			</div>
		</section>
	);
}

export default Skills;
