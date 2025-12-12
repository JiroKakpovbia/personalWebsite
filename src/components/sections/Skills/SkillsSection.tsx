import "./Skills.css";
import SkillsInfoBlock from "./components/SkillsInfoBlock.tsx";

// Import Languages Logos
import cLogo from "../../../assets/skills/languages/c.svg";
import cPlusPlusLogo from "../../../assets/skills/languages/cplusplus.svg";
import cSharpLogo from "../../../assets/skills/languages/csharp.svg";
import pythonLogo from "../../../assets/skills/languages/python.svg";
import javaLogo from "../../../assets/skills/languages/java.svg";
import javascriptLogo from "../../../assets/skills/languages/javascript.svg";
import typescriptLogo from "../../../assets/skills/languages/typescript.svg";
import phpLogo from "../../../assets/skills/languages/php.svg";
import htmlLogo from "../../../assets/skills/languages/html5.svg";
import cssLogo from "../../../assets/skills/languages/css3.svg";
import xamlLogo from "../../../assets/skills/languages/xaml.webp";
import sqlLogo from "../../../assets/skills/languages/sql.svg";
import graphqlLogo from "../../../assets/skills/languages/graphql.svg";
import racketLogo from "../../../assets/skills/languages/racket.svg";

// Import Frameworks Logos
import nodeJSLogo from "../../../assets/skills/frameworks/nodejs.svg";
import nextJSLogo from "../../../assets/skills/frameworks/nextjs.svg";
import expressJSLogo from "../../../assets/skills/frameworks/expressjs.svg";
import processingJSLogo from "../../../assets/skills/frameworks/processing.svg";
import tailwindCSSLogo from "../../../assets/skills/frameworks/tailwindcss.svg";
import dotNetLogo from "../../../assets/skills/frameworks/dotnet.svg";
import xamarinLogo from "../../../assets/skills/frameworks/xamarin.svg";
import xUnitLogo from "../../../assets/skills/frameworks/xunit.svg";
import jestLogo from "../../../assets/skills/frameworks/jest.svg";

// Import Libraries Logos
import reactLogo from "../../../assets/skills/libraries/react.svg";
import reduxLogo from "../../../assets/skills/libraries/redux.svg";
import tensorflowLogo from "../../../assets/skills/libraries/tensorflow.svg";
import pytorchLogo from "../../../assets/skills/libraries/pytorch.svg";
import numpyLogo from "../../../assets/skills/libraries/numpy.svg";
import matplotlibLogo from "../../../assets/skills/libraries/matplotlib.svg";
import aosLogo from "../../../assets/skills/libraries/aos.svg";
import openCVLogo from "../../../assets/skills/libraries/opencv.svg";
import materialUILogo from "../../../assets/skills/libraries/materialui.svg";

// Import Developer Tools Logos
import gitLogo from "../../../assets/skills/developerTools/git.svg";
import dockerLogo from "../../../assets/skills/developerTools/docker.svg";
import kubernetesLogo from "../../../assets/skills/developerTools/kubernetes.svg";
import linuxLogo from "../../../assets/skills/developerTools/linux.svg";
import bashLogo from "../../../assets/skills/developerTools/bash.svg";
import vimLogo from "../../../assets/skills/developerTools/vim.webp";
import mySQLLogo from "../../../assets/skills/developerTools/mysql.svg";
import sqLiteLogo from "../../../assets/skills/developerTools/sqlite.svg";
import postmanLogo from "../../../assets/skills/developerTools/postman.webp";
import swaggerLogo from "../../../assets/skills/developerTools/swagger.svg";
import visualStudioLogo from "../../../assets/skills/developerTools/visualstudio.webp";
import vsCodeLogo from "../../../assets/skills/developerTools/vscode.webp";
import xCodeLogo from "../../../assets/skills/developerTools/xcode.webp";
import terminalLogo from "../../../assets/skills/developerTools/terminal.webp";
import powershellLogo from "../../../assets/skills/developerTools/powershell.webp";
import figmaLogo from "../../../assets/skills/developerTools/figma.svg";
import storybookLogo from "../../../assets/skills/developerTools/storybook.svg";
import unityLogo from "../../../assets/skills/developerTools/unity.svg";
import curlLogo from "../../../assets/skills/developerTools/curl.svg";
import sshLogo from "../../../assets/skills/developerTools/ssh.webp";
import rdpLogo from "../../../assets/skills/developerTools/rdp.svg";
import copilotLogo from "../../../assets/skills/developerTools/copilot.webp";
import openAILogo from "../../../assets/skills/developerTools/openai.webp";
import githubActionsLogo from "../../../assets/skills/developerTools/githubactions.svg";
import netlifyLogo from "../../../assets/skills/developerTools/netlify.webp";
import microsoft365Logo from "../../../assets/skills/developerTools/microsoft365.webp";
import microsoftAzureLogo from "../../../assets/skills/developerTools/azure.svg";
import azureDevOpsLogo from "../../../assets/skills/developerTools/azuredevops.webp";
import jiraLogo from "../../../assets/skills/developerTools/jira.svg";
import { Grid } from "@mui/material";

const SkillsSection = () => {
	// Data arrays for each section
	const languages = [
		{ name: "C", logo: cLogo, url: "https://www.cprogramming.com" },
		{ name: "C++", logo: cPlusPlusLogo, url: "https://en.wikipedia.org/wiki/C%2B%2B" },
		{ name: "C#", logo: cSharpLogo, url: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)" },
		{ name: "Python", logo: pythonLogo, url: "https://www.python.org" },
		{ name: "Java", logo: javaLogo, url: "https://en.wikipedia.org/wiki/Java_(programming_language)" },
		{ name: "JavaScript", logo: javascriptLogo, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
		{ name: "TypeScript", logo: typescriptLogo, url: "https://www.typescriptlang.org/" },
		{ name: "PHP", logo: phpLogo, url: "https://www.php.net/" },
		{ name: "HTML", logo: htmlLogo, url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
		{ name: "CSS", logo: cssLogo, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
		{ name: "XAML", logo: xamlLogo, url: "https://learn.microsoft.com/en-us/dotnet/desktop/wpf/xaml/" },
		{ name: "SQL", logo: sqlLogo, url: "https://en.wikipedia.org/wiki/SQL" },
		{ name: "GraphQL", logo: graphqlLogo, url: "https://graphql.org/" },
		{ name: "Racket", logo: racketLogo, url: "https://racket-lang.org/" },
	];

	const frameworks = [
		{ name: "Node.js", logo: nodeJSLogo, url: "https://en.wikipedia.org/wiki/Node.js" },
		{ name: "Next.js", logo: nextJSLogo, url: "https://nextjs.org/" },
		{ name: "Express.js", logo: expressJSLogo, url: "https://expressjs.com/" },
		{ name: "Processing.js", logo: processingJSLogo, url: "https://processing.org/" },
		{ name: "Tailwind CSS", logo: tailwindCSSLogo, url: "https://tailwindcss.com/" },
		{ name: ".NET", logo: dotNetLogo, url: "https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet" },
		{ name: "Xamarin", logo: xamarinLogo, url: "https://dotnet.microsoft.com/apps/xamarin" },
		{ name: "xUnit", logo: xUnitLogo, url: "https://xunit.net/" },
		{ name: "Jest", logo: jestLogo, url: "https://jestjs.io/" },
	];

	const libraries = [
		{ name: "React", logo: reactLogo, url: "https://react.dev/" },
		{ name: "Redux", logo: reduxLogo, url: "https://redux.js.org/" },
		{ name: "TensorFlow", logo: tensorflowLogo, url: "https://www.tensorflow.org/" },
		{ name: "PyTorch", logo: pytorchLogo, url: "https://pytorch.org/" },
		{ name: "NumPy", logo: numpyLogo, url: "https://numpy.org/" },
		{ name: "Matplotlib", logo: matplotlibLogo, url: "https://matplotlib.org/" },
		{ name: "Animate On Scroll", logo: aosLogo, url: "https://michalsnik.github.io/aos/" },
		{ name: "OpenCV", logo: openCVLogo, url: "https://opencv.org/" },
		{ name: "Material UI", logo: materialUILogo, url: "https://mui.com/material-ui/" },
	];

	const developerTools = [
		{ name: "Git", logo: gitLogo, url: "https://git-scm.com/" },
		{ name: "Docker", logo: dockerLogo, url: "https://en.wikipedia.org/wiki/Docker_(software)" },
		{ name: "Kubernetes", logo: kubernetesLogo, url: "https://kubernetes.io/" },
		{ name: "Linux", logo: linuxLogo, url: "https://en.wikipedia.org/wiki/Linux" },
		{ name: "Bash", logo: bashLogo, url: "https://en.wikipedia.org/wiki/Bash_(Unix_shell)" },
		{ name: "Vim", logo: vimLogo, url: "https://en.wikipedia.org/wiki/Vim_(text_editor)" },
		{ name: "MySQL", logo: mySQLLogo, url: "https://en.wikipedia.org/wiki/MySQL" },
		{ name: "SQLite", logo: sqLiteLogo, url: "https://www.sqlite.org/" },
		{ name: "Postman", logo: postmanLogo, url: "https://www.postman.com/" },
		{ name: "Swagger", logo: swaggerLogo, url: "https://swagger.io/" },
		{ name: "Visual Studio", logo: visualStudioLogo, url: "https://visualstudio.microsoft.com/" },
		{ name: "VS Code", logo: vsCodeLogo, url: "https://en.wikipedia.org/wiki/Visual_Studio_Code" },
		{ name: "xCode", logo: xCodeLogo, url: "https://developer.apple.com/xcode/" },
		{ name: "Terminal", logo: terminalLogo, url: "https://learn.microsoft.com/en-us/windows/terminal/" },
		{ name: "Powershell", logo: powershellLogo, url: "https://learn.microsoft.com/en-us/powershell/" },
		{ name: "Figma", logo: figmaLogo, url: "https://www.figma.com/" },
		{ name: "Storybook", logo: storybookLogo, url: "https://storybook.js.org/" },
		{ name: "Unity", logo: unityLogo, url: "https://unity.com/" },
		{ name: "cURL", logo: curlLogo, url: "https://curl.se/" },
		{ name: "SSH", logo: sshLogo, url: "https://en.wikipedia.org/wiki/Secure_Shell" },
		{ name: "RDP", logo: rdpLogo, url: "https://en.wikipedia.org/wiki/Remote_Desktop_Protocol" },
		{ name: "Copilot", logo: copilotLogo, url: "https://copilot.microsoft.com/" },
		{ name: "OpenAI", logo: openAILogo, url: "https://openai.com/" },
		{ name: "GitHub Actions", logo: githubActionsLogo, url: "https://github.com/features/actions" },
		{ name: "Netlify", logo: netlifyLogo, url: "https://www.netlify.com/" },
		{ name: "Microsoft 365", logo: microsoft365Logo, url: "https://www.microsoft.com/en-ca/microsoft-365" },
		{ name: "Microsoft Azure", logo: microsoftAzureLogo, url: "https://azure.microsoft.com/en-ca" },
		{ name: "Azure DevOps", logo: azureDevOpsLogo, url: "https://azure.microsoft.com/en-us/products/devops" },
		{ name: "Jira", logo: jiraLogo, url: "https://www.atlassian.com/software/jira" },
	];
	return (
		<section id="skills">
			<Grid container size={12} spacing={3}>
				<Grid container size={12}>
					<h1>Skills</h1>
				</Grid>
				<Grid container size={12} spacing={1} data-aos="fade-in" data-aos-once="true">
					<h2>Languages:</h2>
					<SkillsInfoBlock id={"languages"} skills={languages} />
				</Grid>
				<Grid container size={12} spacing={1} data-aos="fade-in" data-aos-once="true">
					<h2>Frameworks:</h2>
					<SkillsInfoBlock id={"frameworks"} skills={frameworks} />
				</Grid>
				<Grid container size={12} spacing={1} data-aos="fade-in" data-aos-once="true">
					<h2>Libraries:</h2>
					<SkillsInfoBlock id={"libraries"} skills={libraries} />
				</Grid>
				<Grid container size={12} spacing={1} data-aos="fade-in" data-aos-once="true">
					<h2>Developer Tools:</h2>
					<SkillsInfoBlock id={"developer-tools"} skills={developerTools} />
				</Grid>
			</Grid>
		</section>
	);
};

export default SkillsSection;
